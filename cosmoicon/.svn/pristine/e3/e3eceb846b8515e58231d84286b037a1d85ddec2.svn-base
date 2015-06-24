
// JavaScript Document

$(document).ready(function () {	

	ol_ad_seed=1000;
	crz_s = $("#crazynavdown .s");
	crz_b = $("#crazynavdown .b");
	var b_html = crz_b.html();
	
	if(typeof(olfullad_pd)!='undefined'&&olfullad_pd==1){ol_ad_seed=12000;}
	if($("#crazynavdown .s").html()!=""){crz_s.append('<span class="zz"></span>')}
	if($("#crazynavdown .b1").html()!="" || $("#crazynavdown .b2").html()!=""){setTimeout(crazynavopen,ol_ad_seed);}
	$(".zz").click(function(){crazynavopen();crz_b.html(b_html);})
	var interval = 10600;
	/*target = new Date(2013,5,6),
	now = new Date();
	if(now>=target) interval = 15600;*/

	if($('#ts_name').attr('time')){
		interval = $('#ts_name').attr('time')
	}
    function crazynavopen() {
//    	crz_b.html(b_html);
        setTimeout(function(){
        	crz_b.append("<span class=close></span>");
	        $("#crazynavdown .b .close").click(function () {
	            crazynavclose();
	        });
	        crz_s.slideUp(300);
			/*if(!sbes1.html()){
				sbes1.append(b1_html)
			}
			if(!sbes2.html()){
				sbes2.append(b2_html)
			}*/
	        crz_b.slideDown(600);
	        clearFlag = setTimeout(function () {
	            crazynavclose()
	        }, interval);
        },1);
    }
    function crazynavclose() {
    	
        window.clearTimeout(clearFlag);
        $("#crazynavdown .close").css("display", "none");
        $("#crazynavdown .zz").css("display", "block");
        crz_s.slideDown(300);
        crz_b.slideUp(600);
        setTimeout(function(){
        	crz_b.html('');
        },600);
		//setTimeout(function(){sbes1.html('');sbes2.html('')},600)
		
	}
})







$(function(){
var ol_seep=10000;
var ad_link_dq=0;
var ad_link_zs=$("#header .ad_link div ul li").length;
var ad_link_setul=$("#header .ad_link div ul");
if(ad_link_zs>1){
	$("#header .ad_link div ul").append($("#header .ad_link div ul").html());
	setInterval(function(){ad_link_dq++;
		if(ad_link_dq>ad_link_zs){ad_link_setul.css("left","0px");
		ad_link_dq=1;
		}
		ad_link_setul.animate({left:-(ad_link_dq*215)});
	},ol_seep);
  };
var hot_as_seep=8000;
var hot_ad_link_dq=0;
var hot_ad_link_zs=$(".hot .ad_link div ul li").length;
var hot_ad_link_setul=$(".hot .ad_link div ul");
var hot_ad_link_text=$(".hot .ad_link div ul li a").text();
if(hot_ad_link_zs>1){
	$(".hot .ad_link div ul").append($(".hot .ad_link div ul").html());
	setInterval(function(){hot_ad_link_dq++;
		if(hot_ad_link_dq>ad_link_zs){hot_ad_link_setul.css("left","0px");
		hot_ad_link_dq=1;
		}
		hot_ad_link_setul.animate({left:-(hot_ad_link_dq*180)});
	},hot_as_seep);
  };
var ol_ad_seed=1000;

var nd_id=$("#navdown div").attr("id");
if(nd_id){
if($("#navdown div").css("display")!="none"){
function navdown_open(){
$("#navdown").append('<a class="adclose"></a>');
$("#navdown .adclose").bind("click",function(){navdown_close()});
$("#navdown").slideDown(600);
  navdown_zd_close=setTimeout(function(){navdown_close()},10000);
}
function navdown_close(){
clearTimeout(navdown_zd_close);
$("#navdown").slideUp(600);
}
setTimeout(navdown_open,ol_ad_seed);
}
}


	if ($('.top-banner').html()!=='')
	{
		$('.top-banner').css('display','block');
	}
});

function $dm(id) { return document.getElementById(id); }//鑾峰彇ID瀵硅薄
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
function addBtn() {
	if(!$dm('focus_turn')) return;
	
	$('#focus_turn li').each(function(ec){
		if($(this).html()==''){
			$(this).remove();
			}
		});
	var focusList = $dm('focus_turn').getElementsByTagName('li');
	var btnBox = document.createElement('focus_btn');
	btnBox.setAttribute('id','focus_btn');
	var SpanBox ='';
	for(var i=1; i<=focusList.length; i++ ) {
		var spanList = '<span class="normal">'+i+'</span>';
		SpanBox += spanList;
	}
	btnBox.innerHTML = SpanBox;
	$dm('focus_turn').appendChild(btnBox);
	$dm('focus_btn').getElementsByTagName('span')[0].className = 'current';
}
function classNormal(){
	var focusList = $dm('focus_turn').getElementsByTagName('li');
	var btnList = $dm('focus_btn').getElementsByTagName('span');
	for(var i=0; i<focusList.length; i++) {
		focusList[i].className='normal';
		btnList[i].className='normal';
	}
} 
function classCurrent(n){
	var focusList = $dm('focus_turn').getElementsByTagName('li');
	var btnList = $dm('focus_btn').getElementsByTagName('span');
	focusList[n].className='current';
	btnList[n].className='current';
} 
var autoKey = false;
function btnTurn() {
	if(!$dm('focus_turn')) return;
	$dm('focus_turn').onmouseover = function(){autoKey = true};
	$dm('focus_turn').onmouseout = function(){autoKey = false};	
	var focusList = $dm('focus_turn').getElementsByTagName('li');
	var btnList = $dm('focus_btn').getElementsByTagName('span');
	for (var m=0; m<btnList.length; m++){
		btnList[m].onmouseover = function() {
			classNormal();
			this.className='current';
			var n=this.childNodes[0].nodeValue-1;
			focusList[n].className='current';
		}
	}
	setInterval('autoTurn()', 5000);
}
function autoTurn() {
	if(!$dm('focus_turn')) return;
	if (autoKey) return;
	var focusList = $dm('focus_turn').getElementsByTagName('li');
	var btnList = $dm('focus_btn').getElementsByTagName('span');
	for(var i=0; i<focusList.length; i++) {
		if (focusList[i].className == 'current') {
			var currentNum = i;
		}
	}
	if (currentNum==focusList.length-1 ){
		classNormal();
		classCurrent(0);
	} else {
		classNormal();
		classCurrent(currentNum+1);
	}
}
addLoadEvent(addBtn);
addLoadEvent(btnTurn);

function $a(id,tag){var re=(id&&typeof id!="string")?id:document.getElementById(id);if(!tag){return re;}else{return re.getElementsByTagName(tag);}}

function SwitchTag(tit,box,s,current,time)
{
	var t=tit.split('/'),b=box.split("/"),ts=$a(t[0],t[1]),bs=$a(b[0],b[1]),s=s||"onmouseover",now=current=current||0,c;
	for(var i=0;i<ts.length;i++){ts[i].old=ts[i].className.replace("current","");bs[i].old=bs[i].className.replace("current","");reg(i);}
	function init(){for(var i=0;i<ts.length;i++){ts[i].className=ts[i].old;bs[i].className=bs[i].old;};if(now!=-1){ts[now].className+=(t[2]||"")+" current";bs[now].className+=(b[2]||"")+" current";}}
	function reg(i){ts[i][s]=function(){clearInterval(c);now=i;init();}
	if(current!=-1&&time){bs[i].onmouseover=function(){clearInterval(c);};bs[i].onmouseout=function(){go();};ts[i].onmouseout=function(){go();}}
	if(current==-1&&s=="onmouseover"){ts[i].onmouseout=function(){now=-1;init();}}}
	function go(){c=setInterval(function(){(now<ts.length-1)?now++:now=0;init();},time);}
	if(current!=-1&&time){go();};init();
}