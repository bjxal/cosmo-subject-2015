<?php
class GetResult {
	private $data;
	private $savePath;
	private $saveName;
	private $saveFile;
	private $resultUrl;
	private $eventID;

	public function __construct () {
		date_default_timezone_set("PRC");
		$this->data = $_POST;
		$this->resultUrl = 'http://www.bazaar.com.cn/files/eventapi.php';
	}

	public function show () {
		$result = array('err' => 0, 'msg' => '');
		$page = isset($this->data['page']) ? $this->data['page'] : 1;

		if (!is_numeric($page)) {
			$result = array('err' => 1, 'msg' => '传输页码错误！');
			ob_clean();
			echo json_encode($result);
			die();
		}

		$list = $this->postForm($page);

		if (!empty($list)) {
			$list = $this->formateList($list);
		}

		$result['msg'] = $list;

		return json_encode($result);
	}

	private function postForm ($page) {
		$postData = array(
			'c'    => 'bazaarwww_topic2016',
			'a'    => 'T0501',
			'page' => $page
		);  

		$ch = curl_init() ; 
		curl_setopt($ch, CURLOPT_URL,$this->resultUrl) ;
		curl_setopt($ch, CURLOPT_POST, count($postData)) ;
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postData); 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
		$temp = curl_exec($ch) ; 
		curl_close($ch) ;
		ob_clean();

		$temp = iconv("GBK", "utf-8", $temp);
		$result = json_decode($temp, true);

		if (is_array($result)) {
			return $result;
		} else {
			return array();
		}
	}

	private function formateList ($arr) {
		$result = array();
		foreach ($arr as $v) {
			$result[] = array(
				'username' => $v['realName'],
				'img' => $v['photo'],
				'time' => date("m / d H:i", strtotime($v['createTime']))
			);
		}
		return $result;
	}
}

$Strea = New GetResult;
$result = $Strea->show();
ob_clean();
echo $result;
?>