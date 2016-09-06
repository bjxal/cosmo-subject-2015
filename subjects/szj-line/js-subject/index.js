//通用成员
var get;
var util;
var mCanvas, sCanvas;
var img, imgW, imgH, landscape, angle;
var deviceType;
var moveStat, moveStartX, moveStartY, zoomStat, moveStartX1, moveStartY1,moveStartX2, moveStartY2,moveStartX3, moveStartY3;


// var layerW = 160, layerH = 210;
var layerW = parseInt($(window).width()/2), layerH = parseInt((($(window).width()/3)*2));
var mBox = "camerawarp";
var mCanvasId = "myCanvas";
var sCanvasId = "previewCanvas";
var inputId = "touchInput";
var maskId = "mask";
var t1 = null ;
var flag = true;


//初始化
function init () {

	get = function(selector){return document.getElementById(selector);};
	util = {isNull:function(str){return str == null || str.length == 0 }};
	//检测设备
	__chkDevice();


	//touchInput
	$('#touchInput').change(function(){
		chooseImg();
    });
    


	//模板选择
	$("#iscroll_ul li").on('click',function(){
        scrollClick($(this));
    });

	//step1-next
	$(".step_1 .next").on("click", function() {
        saveMasterCanvas(); 
	});

	//step2-ok
	$(".step_2 .ok_btn").on('click', function(){
		if(flag){
			addText();
		}
	});	

	//重拍
    $(".reset").on("click", function() {
        $(".p2").fadeOut();
        $(".p1").fadeIn();
        $('#myCanvas').remove();
    });
	
	
}

//检测设备
function __chkDevice () {
	hasTouch = 'ontouchstart' in window;
	if (hasTouch) {
		deviceType = 'mobile';
	} else {
		deviceType = 'pc';
	}
	return deviceType;
}

//模板滚动Iscroll
function scrollFn(){
    var scrollItemLen = $("#iscroll_ul li").length;
    //console.log(scrollItemLen)
    $("#scroller,#iscroll_ul").width(102 * scrollItemLen + 50);
    new iScroll("wrapper", {
        snap: "li",
        hScrollbar:true, 
        hideScrollbar:false,
        scrollbarClass: "scrollBar",
        bounce: false,
        momentum:false,
        onScrollEnd: function() {}
    });
}

//iscrollClick
function scrollClick(t){
    if (t1 == null ){

        t1 = new Date().getTime();

    } else {

        var t2 = new Date().getTime();

        if (t2 - t1 < 500){

            t1 = t2;

            return ;

        } else {

            t1 = t2;

        }
    }
    var thisTemp = t.data('mb'),
        thisIndex = t.index() + 1;
        
    $("#mb_id").val(thisIndex);
    t.addClass("cur").siblings().removeClass("cur");
    $("#mask").attr('data-url' , thisTemp );
    $("#mask img").attr('src', thisTemp);
    $("#camerawarp").attr('data-index', thisIndex);
}


//展示预览canvas
function chooseImg () {
	$('#camerawarp').append('<canvas class="myCanvas" id="myCanvas" width="160" height="210"></canvas>');
	mCanvas = get(mCanvasId).getContext("2d");
	$('#myCanvas').attr({'width': layerW , 'height':layerH});

	EXIF.getData($('#' + inputId)[0].files[0], function() { 
		EXIF.getAllTags(this);  
		rotate = EXIF.getTag(this, 'Orientation'); 
	
		if (typeof(rotate) == 'undefined') {
			rotate = 0;
		}

		creatPuzzleCanvas(rotate);
	}); 
}

function creatPuzzleCanvas (rotate) {
	switch (rotate) {
		case 0:
			angle = 0;
			break;
		case 1:
			angle = 0;
			break;
		case 6:
			angle = 90;
			break;
		case 8:
			angle = -90;
			break;
		case 3:
			angle = 180;
			break;
		default :
			angle = 0;
			break;
	}

	windowURL = window.URL || window.webkitURL;
	dataURL = windowURL.createObjectURL($('#' + inputId)[0].files[0]);

	img = new Image();
	img.src = dataURL;

	img.onload=function(){
		result= getWH(img.width, img.height);
		imgW = result[0];
		imgH = result[1];
		console.log(imgW ,imgH)

		mCanvas.translate(imgW / 2,imgH / 2);
		__drawImg();
		if (angle != 0) {
			__rotateImg();
		}
		mCanvas.save();

		moveImg();
		
		

		$(".p1").fadeOut();
        $(".p2").fadeIn(function(){
            scrollFn();
        });
	}
}

function getWH (width, height) {
	if (angle == 0 || angle == 180) {
		
		if (img.width >= img.height) {
			landscape = 1;
			if (img.height > layerH) {
				imgH = layerH;
				imgW = img.width * (layerH / img.height);
			} else {
				imgH = img.height;
				imgW = img.width;
			}
		} else {
			landscape = 0;
			if (img.width > layerW) {
				imgW = layerW;
				imgH = img.height * (layerW / img.width);
				if (imgH < layerH) {
					imgH = layerH;
					imgW = img.width * (layerH / img.height);
				}
			} else {
				imgH = img.height;
				imgW = img.width;
			}
		}
	} else {
		if (img.width >= img.height) {
			landscape = 0;
			if (img.height > layerW) {
				imgH = layerW;
				imgW = img.width * (layerW / img.height);
			} else {
				imgH = img.height;
				imgW = img.width;
			}
		} else {
			landscape = 1;
			if (img.width > layerH) {
				imgW = layerH;
				imgH = img.height * (layerH / img.width);
				if (imgH < layerW) {
					imgH = layerW;
					imgW = img.width * (layerW / img.height);
				}
			} else {
				imgH = img.height;
				imgW = img.width;
			}
		}
	}

	//return {imgW, imgH};
	return [imgW, imgH];
}

function __drawImg () {
	mCanvas.clearRect(-imgW, -imgH, 2 * imgW, 2 * imgH);
	mCanvas.clearRect(-1000,-1000,10000,10000);
	mCanvas.drawImage(img, -imgW / 2, -imgH / 2, imgW, imgH);
}

function __rotateImg () {
	mCanvas.clearRect(-imgW, -imgH, 2 * imgW, 2 * imgH);
	mCanvas.translate(-imgW / 2, -imgH / 2);

	mCanvas.rotate(angle * Math.PI / 180);
	if (angle == 90) {
		mCanvas.translate(-imgW / 2 + imgW,-imgH / 2);
	} else if (angle == -90) {
		mCanvas.translate(-imgW / 2,-imgH / 2 + imgH);
	} else {
		mCanvas.translate(-imgW / 2,-imgH / 2);
	}
	mCanvas.drawImage(img, -imgW / 2, -imgH / 2, imgW, imgH);
}

//监听移动
function moveImg () {
	if (deviceType == 'mobile') {
		STA_EN     = "touchstart";
		MV_EV      = "touchmove";
		END_EV     = "touchend";
		END_Cancel = "touchcancel";
	} else {
		STA_EN     = "mousedown";
		MV_EV      = "mousemove";
		END_EV     = "mouseup";
		END_Cancel = "mouseout";
	}

	target = get(maskId);
	target.addEventListener(STA_EN,__moveStart,false);
	target.addEventListener(MV_EV,__moveMove,false);
	target.addEventListener(END_EV,__moveEnd,false);
	//target.addEventListener(END_Cancel,__moveEnd,false);

	moveStat = 1;
	moveStartX = 0;
	moveStartY = 0;
	moveStartX1 = 0;
	moveStartY1 = 0;
	moveStartX2 = 0;
	moveStartY2 = 0;
	moveStartX3 = 0;
	moveStartY3 = 0;
}

function __moveStartDouble(event){
	event.preventDefault();
	zoomStat = 0;

	poi = __getEvtLocation(event);

	moveStartX = poi.x;
	moveStartY = poi.y;
	moveStartX1 = poi.x1;
	moveStartY1 = poi.y1;
}

function __moveStart(event){
	event.preventDefault();
	if(event.touches.length>1){
		__moveStartDouble(event);
		return;
	}
	moveStat = 0;

	poi = __getEvtLocation(event);

	moveStartX = poi.x;
	moveStartY = poi.y;
}

function __moveMove(event){
	event.preventDefault();

	if (moveStat === 1 && zoomStat === 1) {
		return;
	}

	poi = __getEvtLocation(event);

	if (landscape == 1) {
		offsetX = poi.x - moveStartX;
		offsetY = 0;
	} else {
		offsetX = 0;
		offsetY = poi.y - moveStartY;
	}

	var tar = event.touches || event.originalEvent.touches;
	var num = tar.length;
	if(num==1){
		switch (angle) {
			case 0 :
				mCanvas.translate(offsetX / 2, offsetY / 2);
				break;

			case 90 :
				mCanvas.translate(offsetY / 2, -offsetX / 2);
				break;

			case -90 :
				mCanvas.translate(-offsetY / 2, offsetX / 2);
				break;

			case 180 :
				mCanvas.translate(-offsetX / 2, -offsetY / 2);
				break;

			default :
				mCanvas.translate(offsetX / 2, offsetY / 2);
				break;

		}
	}
	else{
		moveStartX2 = tar[0].pageX;
		moveStartY2 = tar[0].pageY;
		moveStartX3 = tar[1].pageX;
		moveStartY3 = tar[1].pageY;

		var val_default = {
			x:moveStartX-moveStartX1,
			y:moveStartY-moveStartY1
		};
		var val_move = {
			x:moveStartX2-moveStartX3,
			y:moveStartY2-moveStartY3
		};
		var default_p = Math.sqrt((val_default.x)*(val_default.x)+(val_default.y)*(val_default.y));
		var move_p = Math.sqrt((val_move.x)*(val_move.x)+(val_move.y)*(val_move.y));
		bli = parseInt(move_p)/parseInt(default_p) || 1;
		//bli = (bli>=1)?1.1:0.9;
		//alert(bli)
	}
	__drawImg();
	if(zoomStat==0){
		moveStartX = poi.x;
		moveStartY = poi.y;
		moveStartX1 = poi.x1;
		moveStartY1 = poi.y1;
	}

	if (landscape == 1) {
		moveStartX = poi.x;
		moveStartY = 0;
	} else {
		moveStartX = 0;
		moveStartY = poi.y;
	}
}

function __moveEnd (event) {
	event.preventDefault();
	//alert(11)
	if(zoomStat==0){
		//alert(bli)
		mCanvas.scale(bli,bli);
		__drawImg();
	}
	moveStat = 1;
	zoomStat = 1;
}

function __getEvtLocation(event){
	if(util.isNull(event)) return;
	if(zoomStat==0){
		return{
			x : event.changedTouches[0].clientX,
			y : event.changedTouches[0].clientY,
			x1 : event.changedTouches[1].clientX,
			y1 : event.changedTouches[1].clientY
		}
	}
	if (typeof(event.offsetX) != 'undefined') {
		return{
			x : event.offsetX,
			y : event.offsetY
		}
	} else {
		return{
			x : event.changedTouches[0].clientX,
			y : event.changedTouches[0].clientY
		}
	}
}

//保存拼图
function saveMasterCanvas () {
	newCanvas = document.createElement('canvas');
	newCanvas.setAttribute("id", sCanvasId);
	newCanvas.width = 720;
	newCanvas.height = parseInt((720/3)*2);
	
	sCanvas = newCanvas.getContext("2d");

	img = new Image();
	pic = new Image();
	img.src = $("#" + maskId).attr("data-url");
	pic.src = 'img-subject/text-layer.png';
	img.onload = function(){
		sCanvas.drawImage(get(mCanvasId), 360, 0,360,480);
		sCanvas.drawImage(img, 0, 0, 720, 480);
		
		$("#" + mBox).prepend(newCanvas);
		$("#camerawarp").append('<div class="layer"><img src="img-subject/text-layer2.png" width="100%" /></div>');
		target = get(maskId);
		target.removeEventListener(STA_EN,__moveStart,false);
		target.removeEventListener(MV_EV,__moveMove,false);
		target.removeEventListener(END_EV,__moveEnd,false);
		target.removeEventListener(END_Cancel,__moveEnd,false);
		$(".p2 .step_1").removeClass('stepshow').addClass('stephide');
		$(".p2 .step_2").removeClass('stephide').addClass('stepshow');
		$(".step_num .page_2").addClass("cur").siblings().removeClass("cur");

	}



	pic.onload = function(){
		sCanvas.drawImage(pic,0, 300,720,202); 
	}

}

//下一步生成图片
function addText(){
	flag = false;
	var val = $("#txtKey").val(),
		mb = $("#camerawarp").data('index'),
		curl = get(sCanvasId).toDataURL("image/png"),
		baseUrl = 'http://bzh5.cellz.cn/songzhongji';
		//baseUrl = 'http://10.0.130.219/H5/szj-v2';
		
	if(val == null || val.length == 0){
		alert('输入您的名字！');
		flag = true;
		return;
	}
	if(util.isNull(sCanvas)){
		flag = true;
		return;
	}
	$('.ok_btn').html('合体中');

	$.ajax({
		url:'upload.php',
		dataType: 'json',
		type: 'post',
		data:{'mask':mb, 'img':curl, 'font':val},
		success: function (data){
			if (data.err == 0) {
				$(".p2 .step_2").removeClass('stepshow').addClass('stephide');
				$(".p2 .step_3").removeClass('stephide').addClass('stepshow');
				$(".step_num .page_3").addClass("cur").siblings().removeClass("cur");
				$('#camerawarp .layer').remove();
				$('#myCanvas').remove();
				$('#mask').remove();
				$('<img src="'+baseUrl + data.msg.img+'" width="100%">').appendTo('#camerawarp');
				$(".step_3 .final_btn").on('click', function(){
					window.location.href = baseUrl+'/share.php?username=' + data.msg.username + '&img=' + data.msg.img;
				});	
				flag = true;
			} else {
				alert(data.msg);
			}
		}
	});
}






$(function(){
	init();
});