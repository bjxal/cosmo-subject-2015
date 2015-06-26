$(function() {
	var $win = $(window),
		appStatus = {},
		maskIsShow = false;
	appStatus.cTop = 0;
	appStatus.sTop = 0;
	appStatus.animateItems = [];
	appStatus.speeds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6,7];
	appStatus.top = 0;
	appStatus.pos = 0;
	appStatus.prevScrollTop = 0;
	appStatus.currScrollTop = 0;


	window.appStatus = appStatus;

	// 动画 start

	$win.bind('scroll', function(e) {
		if(maskIsShow){
			return;
		}
		appStatus.top = appStatus.currScrollTop = appStatus.sTop = $win.scrollTop();
	});

	record_items();

	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

	try{
		window.requestAnimationFrame(animationFrame);
	}catch(err){

	}
	

	function animationFrame() {
		appStatus.cTop += 0.2 * (appStatus.sTop - appStatus.cTop);
		appStatus.pos += 0.05 * (appStatus.top - appStatus.pos);
		var temp = -appStatus.cTop;
		$.each(appStatus.animateItems, function() {
			// var e = -(appStatus.cTop ) * this.speed*this.direction;
			var e = -0.02 * (appStatus.pos - appStatus.top) * this.speed * this.direction;
			this.item.css({
				'-webkit-transform': "translate3d(0," + e + "px, 0)"
			});
		});
		// $.each(appStatus.animateItems, function() {
		// 	var e = -(appStatus.currScrollTop - appStatus.prevScrollTop) * this.speed*this.direction;
		// 	this.item.css({
		// 		'opacity':'0.9',
		// 		'-webkit-transform': "translate3d(0," + e + "px, 0)"
		// 	});
		// });
		// appStatus.prevScrollTop = appStatus.currScrollTop;
		window.requestAnimationFrame(animationFrame);
	}



	function record_items() {
		$('.wrap .animateBox').each(function(index) {
			var itemWraper, direction;
			direction = 1 === index % 2 ? 1 : -1;
			itemWraper = {};
			itemWraper.item = $(this);
			itemWraper.top = itemWraper.item.position().top;
			itemWraper.direction = direction;
			itemWraper.speed = appStatus.speeds[index];
			appStatus.animateItems.push(itemWraper);
		});
	}
	// 动画 end

	// 弹出层 str
	// var $imgBtns = $('.listWraper .item .title img');
	var $imgBtns = $('.listWraper .item .title'),
		$years = $('.listWraper .time');
	var	$mask = $('#mask'),
		$pops = $('.popup');
	$imgBtns.on('click',function(){
		var $that = $(this),
			index = $.inArray(this, $imgBtns);
		maskIsShow = true;
		$mask.fadeIn();
		$pops.eq(index).fadeIn();

	});
	$years.on('click',function(){
		var $that = $(this),
			index = $.inArray(this, $years);
		maskIsShow = true;
		$mask.fadeIn();
		$pops.eq(index).fadeIn();
	});
	$('.popup .closeBtn').on('click',function(){
		maskIsShow = false;
		$(this).parents('.popup').fadeOut();
		$mask.fadeOut();
	});
	// 弹出层 end

	// 分享条位置 str
	var $shareBar = $('.shareBar'),
	barH = $shareBar.height(),
	topBarH = 453;
	setSBp();
	function setSBp(){
		if($win.height()/2 - barH/2 < topBarH - $win.scrollTop()){
			$shareBar.css({
				'margin-top':0,
				'top':topBarH - $win.scrollTop()
			});
		}else{
			$shareBar.css({
				'margin-top':'-' + barH/2 + 'px',
				'top':'50%'
			});
		}
	}
	$win.on('scroll',function(){
		setSBp();
	});

	// 分享条位置 end
});
