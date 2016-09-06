<?php
class Upload {
	private $data;
	private $savePath;
	private $saveName;
	private $saveFile;
	private $urlPrefix;
	private $eventID;
	private $fontFile;

	public function __construct () {
		$this->data = $_POST;
		$this->fontFile = 'img-subject/font.ttf';
		$this->savePath = 'upload';
		$this->saveName = time() . '_' . rand(1, 99999);
		$this->urlPrefix = 'http://bzh5.cellz.cn/songzhongji/';
		$this->eventID = 693;
		$this->chkUploadFolder();
		putenv('GDFONTPATH=' . realpath('.'));
	}

	public function mask () {
		$result = $this->recevieImg();
		if ($result) {
			$result = $this->addText();
			if ($result) {
				return $this->postForm();
			} else {
				return $this->showResult(2);
			}
		} else {
			return $this->showResult(1);
		}
	}

	private function recevieImg () {
		if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $this->data['img'], $result)){
			$type = $result[2];
			$this->saveFile = $this->savePath . '/' . $this->saveName . '.' . $type;
			if (file_put_contents($this->saveFile, base64_decode(str_replace($result[1], '', $this->data['img'])))){
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	private function addText () {
		$imgInfo = GetImageSize($this->saveFile);

		switch($imgInfo[2]){
			case 1:
				$canvase = imagecreatefromGIF($this->saveFile);
				break;

			case 2:
				$canvase = imagecreatefromJPEG($this->saveFile);
				break;

			case 3:
				$canvase = imagecreatefromPNG($this->saveFile);
				break;
		}

		$font = $this->data['font'];
		$fontColor = imagecolorallocate($canvase, 255, 255, 255);

		$maxWidth = 250;
		$fontWidth = 0;
		$fontArr = $this->mbStrSplit($font);
		foreach ($fontArr as $v) {
			if (preg_match ("/^[A-Za-z0-9]/", $v)) {
				$fontWidth += 40;
			} else {
				$fontWidth += 50;
			}
		}
		$positionX = 60 + ($maxWidth - $fontWidth);
 
		imagettftext($canvase,36, 0, $positionX, 456, $fontColor, $this->fontFile, $font);

		$result = imagepng($canvase, $this->saveFile);

		if ($result) {
			return true;
		} else {
			return false;
		}
	}

	private function showResult($errNum = 0, $msg = '') {
		$result = array('err' => $errNum, 'msg' => '');

		switch ($errNum) {
			case 0:
				$result['msg'] = array(
					'username' => $this->data['font'],
					'img' => '/' . $this->saveFile
				);
				break;
			case 1:
				$result['msg'] = '上传图片失败，请稍后重试！';
				break;
			case 2:
				$result['msg'] = '添加文字失败，请稍后重试！';
				break;
			case 3:
				$result['msg'] = '网络繁忙，请稍后重试！';
				break;			
			case 4:
				$result['msg'] = $msg;
				break;			
			default:
				$result['err'] = 3;
				$result['msg'] = '网络繁忙，请稍后重试！';
				break;
		}

		$jsonStr = json_encode($result);

		return $jsonStr;
	}

	private function postForm () {
		$postUrl = 'http://m.bazaar.com.cn/files/eventapi.php';
		$postData = array(
			'c'          => 'EventApi',
			'a'          => 'AddEvent',
			'indexsId'   => $this->eventID,
			'data[2648]' => $this->data['font'],
			'data[2647]' => $this->urlPrefix . $this->saveFile
		);  

		$ch = curl_init() ; 
		curl_setopt($ch, CURLOPT_URL, $postUrl) ;
		curl_setopt($ch, CURLOPT_POST, count($postData)) ;
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postData); 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
		$temp = curl_exec($ch) ; 
		curl_close($ch) ;
		ob_clean();

		$result = json_decode($temp, true);
		if (is_array($result)) {
			return $this->showResult(4, $result['error']);
		} elseif ($result == '提交成功') {
			return $this->showResult(0);
		} else {
			return $this->showResult(3);
		}
	}

	private function chkUploadFolder () {
		if (!is_dir($this->savePath)) {
			mkdir($this->savePath);
		}
	}

	private function mbStrSplit ($string, $len=1) {
		$start = 0;
		$strlen = mb_strlen($string);
		while ($strlen) {
			$array[] = mb_substr($string,$start,$len,"utf8");
			$string = mb_substr($string, $len, $strlen,"utf8");
			$strlen = mb_strlen($string);
		}
		return $array;
	}
}

$Strea = New Upload;
$result = $Strea->mask();
ob_clean();
echo $result;
?>