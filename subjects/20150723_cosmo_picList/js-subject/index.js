var myScroll;
var winWidth = $(window).width();
var winHeight = $(window).height();
var pars = window.location.href.split("?picId=");
var arr = pars[1].split("&")[0] || "01";
function loaded() {
//            var len = $("#scroller").find("li").length || 5;
	var len = _recommend.length;
	$("#scroller").width(winWidth*len+"px");
	$(".num .num_cur").html(arr);
	$(".num .num_all").html(len);
	setLIst(_recommend);
	myScroll = new iScroll('wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
			var num = (this.currPageX+1>=10)?(this.currPageX+1):("0"+(this.currPageX+1));
			$(".num .num_cur").html(num);
		}
	});
	myScroll.scrollToPage(parseInt(arr)-1,0);
}
function setLIst(data){
	$.each(data,function(i,item){
		var li = document.createElement("li");
		li.innerHTML = '<img src="'+item.img+'"/>';
		$("#thelist").append(li);
	})
	$("#thelist img").on("click",function(){
		$(".num,.btm").toggleClass("act");
	})
}
$(document).ready(function(){
	$(".close").on("touchend",function(e){
		window.history.go(-1);
	});
});