var init = {};
	init.finsh = false;			  //允许或禁止显示填写问卷页
	init.last  = false;

Array.prototype.maxsIndex = function(){
    var maxItem = this[0],arrIndex = [0];
    for(var i=1;i<this.length;i++){
        if(this[i]>maxItem){
            maxItem = this[i];
            arrIndex = [i];
        }else if(this[i] == maxItem){
            arrIndex.push(i);
        }
    }
    return arrIndex.length == 1?arrIndex[0]:arrIndex[Math.floor(Math.random()*arrIndex.length)];
};

var swiper = new Swiper('.swiper-container', {
        freeMode: true,
        lazyLoading : true,
		lazyLoadingInPrevNext : true,
        onSliderMove:function(e){
        	if(init.finsh){
        		if(init.last) return;
        		swiper.init();
        		swiper.slideTo(9);
        		init.last = true;

        	}else if(swiper.isEnd){
        		testResult();
        	}
        }
    });

/* 答题浮层 */
var question = {};
	question.len = $("div[class*='Part'] span").length;
	question.resultArr = [];
	question.pages = ['res_bp.html','res_Yuppie.html','res_wy.html','res_lcc.html'];

	//初始化题目数量
	for(var i=0; i<question.len; i++){
		question.resultArr.push('');
	}

	$(document).on('click', "div[class*='Part'] span", function(e){
		//重置
		$("[data-question='choose'] li").removeClass('current');

		//建立题号索引
		question.num  = $("div[class*='Part'] span").index(this);

		//写入浮层
		var self = $(this);
		$("[ data-question='title']").html(self.attr('data-title'));
		$("[ data-question='image']").attr('src' ,self.attr('data-image'))

		var arr = self.attr('data-index').split(',')
		$("[ data-question='choose'] p").each(function(i) {
			$(this).parents('li').attr('data-active-index',arr[i]);
			i++
			$(this).html(self.attr('data-r'+i));
		});

		//判断当前题目是否已有结果
		if(typeof question.resultArr[question.num] == 'number'){
			$("[data-question='choose'] li").each(function(i) {
				if($(this).attr('data-active-index') == question.resultArr[question.num]){
					$(this).addClass('current');
				}
			});
		}

		//打开浮层
		$('.Layer').show();

	});

	//关闭浮层
	$('.Layer >span').click(function() {
		$('.Layer').hide();
	});

	//确认并关闭浮层
	$('.Layer >aside >span').click(function(){
		$('.Layer').hide();

		//储存答案
		$("[data-question='choose'] li").each(function(i){
			if($(this).hasClass('current')){
				question.result = Number($(this).attr('data-active-index'));
				//console.log(typeof question.result);
				question.resultArr[question.num] = question.result;
				//关闭未答题提示
				$("div[class*='Part'] span").eq(question.num).find('em').hide();
			}
		});

		//判断未答题个数
		var n = question.resultArr.length;
		for(var i=0; i<question.resultArr.length; i++){
			if(typeof question.resultArr[i] == 'number') n--
		}
		$('#never em').text(n);
		//console.log(question.resultArr);
	});

	//选项
	$("[data-question='choose']").on('click', 'li', function(e) {
		$(this).addClass('current').siblings('li').removeClass('current');
	});

/* 问卷滚动 */
var oScroll = new IScroll('.Questionnaire',{
		fadeScrollbars: true,
		click: true
	});

	oScroll.on('beforeScrollStart', function(){
		oScroll.refresh();
	});

	oScroll.on('scrollEnd', function(){
		//console.log(2)
	});

/* 问卷交互 */
var form = {};
	form.name   = 'name';
	form.tel    = 99;
	form.city   = 'city';
	form.gender = 99;
	form.age    = 99;
	form.income = 99;
	form.score  = 'score';
	form.result = 99;

	$("[ data-form='q4']").on('click', 'li', function(e) {
		$(this).addClass('current').siblings('li').removeClass('current');
	});
	$("[ data-form='q5']").on('click', 'li', function(e) {
		$(this).addClass('current').siblings('li').removeClass('current');
	});
	$("[ data-form='q6']").on('click', 'li', function(e) {
		$(this).addClass('current').siblings('li').removeClass('current');
	});

	$("[data-form='submit']").click(function(e) {
		testForm();
		if($('#warning-age').hasClass('warning')) return
		if($('#warning-gender').hasClass('warning')) return
		form.name    = $("[ data-form='q1']").val();
		form.tel     = $("[ data-form='q2']").val();
		form.city    = $("[ data-form='q3']").val();
		form.score   = question.resultArr.join('');
		finalResult();
		$.ajax({
			url: 'http://m.vogue.com.cn/mfeature/vogueshop/ajax/vogue_survey.php',
			type: 'POST',
			dataType: 'json',
			data: form,
			success:function(e){
				window.location.href=question.pages[form.result];
			}
		});
		
	});

/* 音频 */
// var sound = true;
// 	$('#switch').click(function(e) {
// 		$(this).toggleClass('off');
// 		if(sound){
// 			$(this).removeClass('on')
// 			audio.pause();
// 			sound = false;
// 		}else{
// 			$(this).addClass('on')
// 			audio.play();
// 			sound = true;
// 		}
// 	});

// var audio = new Audio('audio/Indecision.m4a');
// 	audio.loop = true;
// 	audio.autoplay = true;
	
// 	if(audio.paused){
// 		document.addEventListener('touchstart',audioAutoPlay,false);
// 	}
// 	audio.addEventListener('play',function(){
// 		document.removeEventListener('touchstart',audioAutoPlay);
// 	},false);

// function audioAutoPlay(){
// 	audio.play();
// }
	

/* 验证结果 */
function testResult(){

	//验证未答题题号，并给出提示
	for(var i=0; i<question.resultArr.length; i++){
		if(typeof question.resultArr[i] != 'number'){
			$("div[class*='Part'] span").eq(i).find('em').show();
		}
	}

	//验证答题是否完全
	for(var i=0; i<question.resultArr.length; i++){
		if(typeof question.resultArr[i] != 'number'){
			break;
		}
		if(i == question.resultArr.length-1){
			init.finsh = true;
			$('.Questionnaire').show();
		}
	}
}

/* 验证存储问卷填写结果 */
function testForm(){

	$("[ data-form='q4'] li").each(function(i) {
		if($(this).hasClass('current')){
			form.gender = i;
			return false;
		}
		if(i == $("[ data-form='q4'] li").length-1){
			$('#warning-age').addClass('warning');
			goToTop()
		}
	});
	$("[ data-form='q5'] li").each(function(i) {
		if($(this).hasClass('current')){
			form.age = i;
			return false;
		}
		if(i == $("[ data-form='q5'] li").length-1){
			$('#warning-gender').addClass('warning');
			goToTop()
		}
	});
	$("[ data-form='q6'] li").each(function(i) {
		if($(this).hasClass('current')){
			form.income = i;
			return false;
		}
	});
}

/* 回到必填项 */
function goToTop(){
	var t = $('.Questionnaire aside').eq(2).offset().top;
	oScroll.scrollTo(0,t,1000);
}

/* 结果集排序 */
function finalResult(){
	var aLen = [0,0,0,0]
	for(var i=0;i<question.resultArr.length;i++){
        aLen[question.resultArr[i]]++;
    }
	form.result = aLen.maxsIndex();
}

/* 绑定未填信息css3动画监听 */
$("#warning-age")[0].addEventListener("webkitAnimationEnd", function(){
	$("#warning-age").removeClass('warning');
});
$("#warning-gender")[0].addEventListener("webkitAnimationEnd", function(){
	$("#warning-gender").removeClass('warning');
});