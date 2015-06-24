// JavaScript Document
var trfullad=$("#trfullad");
var interval=10000;
var bg="#"+$("#setBg")[0].src.slice(-3);
if($('#trfullad').attr('time')){
	interval = $('#trfullad').attr('time')		
}
$("#trfullad div").append('<div class="adclose"></div>');
trfullad.css({'background':bg});
trfulladset();
trfulladjs=setInterval(trfulladset,100);
setTimeout(trfulladclose,interval);

function trfulladclose(){
	trfullad.fadeOut(300);
	trfullad.html("");
	clearInterval(trfulladjs);
	$('body').css('overflow-y','auto');
};
function trfulladset(){
	trfullad.css("width",$("body").width());
	$('body').css('overflow-y','hidden');
};
$("#trfullad div .adclose").bind("click",trfulladclose);


