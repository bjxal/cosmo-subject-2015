(function (window, undefined) {
	/***common*/
//	if (window.pad) {
//		return;
//	}
	var pad = {},mobile={};
	rfocusable = /^(?:button|input|object|select|textarea)$/i;
	var staSign = true;
	Function.prototype.bind = function () {
		if (!arguments.length) return this;
		var _ = this,
		$ = Array.prototype.slice.call(arguments),
		A = $.shift();
		return function () {
			return _.apply(A, $.concat(Array.prototype.slice.call(arguments)))
		}
	};
	window.addListener = function (list, name, fn){
		var bind, unbind, id = "EVENT";
		bind = function (el, eventName, _fn) {
			_fn[id] = function (e) { _fn(e, el); };
			el.addEventListener(eventName, _fn[id], false);
		}
		unbind = function (el, eventName, _fn) {
			el.removeEventListener(eventName, _fn[id], false);
		}
		window.addListener = function (list, name, fn) {
			if (Object.prototype.toString.apply(list) != "[object Array]")
			list = [list];
			var i = -1, len = list.length;
			while (++i < len) {
				bind(list[i], name, fn);
			}
		};
		addListener(list, name, fn);
	}
	/*iscroll*/
	var thumbList;
	var picList;
	var mbList;
	addListener(document, 'touchmove', function (e){ e.preventDefault();}, false);
	addListener(document, 'DOMContentLoaded',function(){
		thumbList = new iScroll('photoView',{scrollbarClass:'scrollBar'});
		picList = new iScroll('wrapper',{
			snap: true,
			momentum: false,
			hScrollbar: false,
			onScrollEnd: function () {}
		});
	}, false);
	/*iscroll end*/
	var hash = window.location.hash;
	function parseObj(hash){
		var rhash = /[#&]([^&=]+)=([^&=]+)/ig,
		a = rhash.exec(hash),
		o = {};
		while (a) {
			o[a[1]] = a[2];
			a = rhash.exec(hash);
		}
		return o;
	};
	function changeHash(hash) {
		//window.location.hash = hash;
		//return this;
	};
	/** mobile **/
	mobile.Gallery=function(options){
		var mb = this;
		mb.channel="all";	
		mb.picPage = mb.picPage||0;
		var m = this.m = {
			'photoIndex': $('photoIndex')/*,'photoCount':$('photoCount')*/,'goBack':$('goBack_mb'),'photo': $('photo'), 'photoPrevLoading':$('photoPrevLoading'),'photoLoading': $('photoLoading'),'photoDesc': $('photoDesc'),'wrapper':$('wrapper'),'scroller':$('scroller'),'photoAll':$('photoAll'),'desc':$('desc'),'thumb':$('thumb'),'menu_mb':$('topbar'),'menu_nav':$('nav'),'menu_nav_btn':$('nav_btn'),'photoDown':$('photoDown_mb'),'search':$('search_mb'),'conLeft':$('conLeft'),'conRt':$('conRt'),'content':$('content')
		}
		mb.data =options.data || [];
		mb.recommendData = options.recommend || [];
		mb.count = mb.size = mb.data.length;
		mb.photos = [];
		(function(){
			mb.setWidth();
			var oHash = parseObj(window.location.hash);
			if(!oHash.channel) changeHash("channel=all");
			else mb.channel = oHash.channel;
			var list =  m.photoAll.getElementsByTagName("li"),len= list.length;
			for(var i = 0;i<len;i++){
				mb.photos.push(list[i]);
			};
			if(mb.photos.length<=1){
				mb.addLi();
			}
			mb.changeWidth();
		})();
		addListener(document,'DOMContentLoaded',function(){
			if(mb.picPage==0) $('photoIndex').innerHTML="1";
			else mb.hideMenu();
			//mb.Tophidden();
			if(mb.channel!="all" && mb.m.goBack.href.indexOf(mb.channel)<0) mb.m.goBack.href=mb.m.goBack.href+mb.channel+"/";
			if(mb.winWidth<=320) window.scrollTo(0, 1);
			window.scrollTo(0,0);
		});
		addListener(document, 'DOMContentLoaded',function(){
			var arr = document.getElementById("photoAll").getElementsByTagName("li");
			for(var i=0;i<(arr.length);i++){
				if(arr[i].className==""){
					var desc = arr[i].getElementsByTagName("div")[1];
					new iScroll(desc.id,{scrollbarClass:'scrollBar',hScrollbar: false,fixedScrollbar:true,hideScrollbar:false,lockDirection:true});
				}
			}
		}, false);
		//��Ӵ�ͼ���������¼�
		mb.defaultPagex = mb.defaultPagey = mb.currentPagex = mb.currentPagey = 0;
		addListener(window,"orientationchange",function(obj){
			var recommendDiv = document.getElementById("recommend");
			if(window.orientation == 0 || window.orientation == 180){
				recommendDiv.style.cssText="padding-left:10px;";
			}
			else{
				recommendDiv.style.cssText="padding-left:20px;";
			}

			mb.setWidth();
			mb.changeWidth();
		});
		addListener(m.search,'click',function(){
			O.setStyle(m.conRt, "display","block");
			m.content.className = "content active";
		});
		addListener(m.conRt,'click',function(e){
			var tar = e.target;
			if(tar.nodeName.toLowerCase()!="a"){
				m.content.className = "content";
				setTimeout(function(){
					O.setStyle(m.conRt, "display","none");
					O.setStyle(m.conLeft, "height","100%");
				},500);
			}
		});
	};
	mobile.Gallery.prototype = {
		InfoCon:"show",
		Tophidden:function(){
			var mb = this;
			var liArr = mb.m.photoAll.getElementsByTagName("li");
			var len = (mb.recommendData.length>0)?(mb.recommendData.length+1):0;
			for(var i=0;i<(liArr.length-len);i++){
				var desc = liArr[i].getElementsByTagName('div');
				O.setStyle(desc, "bottom","-300px");
			}
			mb.InfoCon = "hide";
			//mb.m.menu_mb.style.top="-56px";
			//mb.m.menu_nav.style.top="-56px";
		},		
		Topshow:function(){
			var mb = this;
			var liArr = mb.m.photoAll.getElementsByTagName("li");
			var len = (mb.recommendData.length>0)?(mb.recommendData.length+1):0;
			for(var i=0;i<(liArr.length-len);i++){
				var desc = liArr[i].getElementsByTagName('div');
				O.setStyle(desc, "bottom","0px");
			}
			mb.InfoCon = "show";
			//mb.m.menu_mb.style.top="0px";
			//mb.m.menu_nav.style.top="-56px";
		},
		setWidth:function(){
			var mb = this;
			mb.winWidth=mb.winHeight=0;			
			if (window.innerWidth){
				if(Math.abs(window.orientation)!=90){
					mb.winWidth = window.innerWidth;
					mb.winHeight = window.innerHeight;
				}
				else{
					mb.winWidth = window.innerWidth;
					mb.winHeight = window.innerHeight;
				}
			}
//			if(/.*version\/([\w.]+).*(safari).*/i.test(navigator.userAgent)){//navigator.userAgent.indexOf("Safari")>0){
//				if(Math.abs(window.orientation)!=90) mb.winHeight = mb.winHeight-60;
//				else mb.winHeight = mb.winHeight;
//			}
		},
		hideMenu:function(){
			var mb = this;
			var max_val = mb.count;
			if(mb.picPage==max_val){
				O.setStyle(mb.m.menu_mb, "top","0px");
				O.setStyle(mb.m.menu_nav, "top","-56px");
			}
		},
		addLi:function(){
			var mb = this;
			mb.offsetSize = mb.photos.length;
			mb.loadlazyQuene = [];
			mb.loadrecommend = [];
			for(var i =  mb.offsetSize  ; i < mb.count;i++){
				mb.loadlazyQuene.push(mb.data[i]);
			}
			for(var i=0;i<mb.recommendData.length;i++){
				mb.loadrecommend.push(mb.recommendData[i]);
			}
			photoList = document.createDocumentFragment();
			var i=mb.offsetSize+1;
			while((obj =mb.loadlazyQuene.shift())!=null){
				/*��ͼ�б�*/
				var li = document.createElement("li");
				/*desc*/
				var desc  = document.createElement("div");
				desc.className = "desc";
				desc.id = "desc";
				desc.innerHTML = "<h1 class=\"title_mb\" id=\"photoTitle_mb\">"+obj.title+"<span class=\"num\"><em class=\"indexNum\" id=\"photoIndex\">"+i+"</em>/<em id=\"photoCount\">"+mb.count+"</em></span></h1><div id=\"descSpan_"+i+"\" class=\"descSpan\"><div style=\"margin-top: -10px;\"><p class=\"zy\" id=\"photoDesc\">"+obj.desc+"</p></div></div>";
				/*pic*/
				var pic = document.createElement('a');
				pic.id = "photoimg";
				var imgDiv = document.createElement("img");
				imgDiv.src = obj.img;
				imgDiv.id = "photo1";
				imgDiv.style.cssText = "opacity:1;max-width:100%;max-height:100%";
				addListener(pic,'touchend',function(){
					var value = mb.currentPagex-mb.defaultPagex;
					mb.m.menu_nav_btn.setAttribute("class","bar_btn nav_btn");
					if(value<=10 && value>=-10){
						var liArr = mb.m.photoAll.getElementsByTagName("li");
						//if(mb.m.menu_mb.style.top=="-56px"){
						if(mb.InfoCon=="hide"){
							mb.Topshow();
						}
						else{
							mb.Tophidden();
						}
					}
				});
				pic.appendChild(imgDiv);
				li.appendChild(pic);
				li.appendChild(desc);
				photoList.appendChild(li);
				i++;
			}
			mb.m.photoAll.appendChild(photoList);
			if(mb.loadrecommend.length>0){
				var li2 = document.createElement("li");
				li2.className="recommend";
				var recommendDiv = document.createElement("div");
				recommendDiv.className = "recommendList";
				recommendDiv.id="recommendList";
				var content = '<ul id="recommend">';
				while((obj =mb.loadrecommend.shift())!=null){
					content += '<li class="imgList"><a href="'+obj.url+"#channel="+mb.channel+'"><img src="'+obj.img+'"><p style="100%">'+obj.title+'</p></li></a>';
				}
				content += '</ul>';
				recommendDiv.innerHTML = content;
				li2.appendChild(recommendDiv);
				mb.m.photoAll.appendChild(li2);
			}
		},
		changeWidth:function(data){
			var mb = this;
			var liArr = mb.m.photoAll.getElementsByTagName("li");
			var liLeng = (mb.recommendData.length>0)?(mb.count+1):mb.count;			
			for(var i=0;i<liLeng;i++){
				liArr[i].style.width=mb.winWidth+"px";
			}
			O.setStyle(mb.m.photoAll, "width", (mb.winWidth*liLeng) + 'px');
			O.setStyle(mb.m.scroller, "width", (mb.winWidth*liLeng) + 'px');
			var liWidth = mb.winWidth;
			var left = mb.winWidth*mb.picPage*(-1);
			mb.m.scroller.style.webkitTransform = 'translate(' + left + 'px, ' + 0 + 'px)';
			/*recommend*/
			if(mb.recommendData.length>0){
				var ulArr = document.getElementById('recommend');
				var recArr = ulArr.getElementsByTagName("li");
				var ulWidth = mb.winWidth-20;
				var ulHeight = mb.winHeight-45;
				ulArr.style.width = mb.winWidth+"px";
				ulArr.style.height = ulHeight+"px";
			}
		}
	}
	window["mobile"] = mobile;
})(window);
jQuery(document).ready(function(){

var _DET_mask = localStorage.getItem("_DET_tipsmask ");
if (!_DET_mask) {
    jQuery("#download_tips").show();
    setTimeout( function(){
        jQuery("#download_tips").hide()
    },5000);
    jQuery("#download_tips").bind("click",function() {
        jQuery(this).hide();
    });
    localStorage.setItem("_DET_tipsmask ", 1);
}

	var winHeight = jQuery(window).height()-44;
	var menuListHeight = jQuery(".rt_menu_list li").length*31+130;
	var menuHeight = (winHeight>menuListHeight)?winHeight:menuListHeight;
	//Show and hide globalnav

	jQuery(".mn-icon-drawer").on("touchend",
		function() {
			//$(".searchbox-mobile").slideUp();
			event.stopPropagation();
			//jQuery("ul#globalnav").css("height", winHeight);
			jQuery("#globalnav-pt, .quicknav-mobile").animate({left: 0}, "");
			jQuery("#globalnav-pt,ul#globalnav").css("opacity","1");
			//$(".conLeft").height(menuHeight);
		}
	);
	jQuery("#globalnav-pt").click(function(e){
		var tar = e.target;
		var node = tar.nodeName.toLowerCase();
		if(node!="a"){
			e.preventDefault();
			e.stopPropagation();
			jQuery("#globalnav-pt, .quicknav-mobile").animate({left: "-100%"}, "");
			jQuery("#globalnav-pt").animate({height: "auto",opacity:"0"}, "");
		}
		else{
			var link = tar.attr("href");
			window.open(link,'_blank');
		}

	 });
	jQuery(".btn-icon-close").on("touchend",
		function() {
			jQuery("#globalnav-pt, .quicknav-mobile").animate({left: "-100%"}, "");
			jQuery("#globalnav-pt").animate({height: "auto",opacity:"0"}, "");
			//$(".conLeft").height("auto");
		}
	);



	jQuery(".mn-icon-drawer").click(function() {
			//$(".searchbox-mobile").slideUp();
			event.stopPropagation();
			//jQuery("ul#globalnav").css("height", winHeight);
			jQuery("#globalnav-pt, .quicknav-mobile").animate({left: 0}, "");
			jQuery("#globalnav-pt,ul#globalnav").css("opacity","1");
			//$(".conLeft").height(menuHeight);
		}
	);
	jQuery("#globalnav-pt").click(function(e){
		var tar = e.target;
		var node = tar.nodeName.toLowerCase();
		if(node!="a"){
			e.preventDefault();
			e.stopPropagation();
			jQuery("#globalnav-pt, .quicknav-mobile").animate({left: "-100%"}, "");
			jQuery("#globalnav-pt").animate({height: "auto",opacity:"0"}, "");
		}
		else{
			var link = tar.attr("href");
			window.open(link,'_blank');
		}

	});
	jQuery(".btn-icon-close").click(function() {
			jQuery("#globalnav-pt, .quicknav-mobile").animate({left: "-100%"}, "");
			jQuery("#globalnav-pt").animate({height: "auto",opacity:"0"}, "");
			//$(".conLeft").height("auto");
		}
	);

	//globalnav
	jQuery("#globalnav-pt").css("height",winHeight);
	var iscroll_nav = new iScroll('globalnav-pt', {vScrollbar:false,hideScrollbar:true,bounce:false});
});