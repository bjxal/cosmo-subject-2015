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
		window.location.hash = hash;
		return this;
	};
	pad.Gallery = function (options) {
		var t = this;
		t.channel="all";
		t.picPage = t.picPage||1;
		var defaultShow = options.showNum;
		this._timer =0 ;
		var o = this.o = {
			activeThumbCls: "activeThumbCls",'photoIndex': $('photoIndex')/*,'photoCount':$('photoCount')*/,'goBack':$('goBack'),'picDiv':$('picDiv'),'photoView': $('photoView'),'photo': $('photo'), 'photoPrevLoading':$('photoPrevLoading'),'photoLoading': $('photoLoading'),'photoDesc': $('photoDesc'),'thumbAll':$('thumbAll'),'wrapper':$('wrapper'),'scroller':$('scroller'),'photoAll':$('photoAll'),'desc':$('desc'),/*'photoTitle_pad':$('photoTitle_pad'),*/'prevSet': $('prevSet'), 'nextSet': $('nextSet'),'thumb': $('thumb'),'photoSave':$('photoSave'),'title_pad':$('globalheader'),'picList_b':$('picList_b'),'defaultDesc':$('defaultDesc'),'imgBox':$('imgBox'),'listBottom':$('listBottom')
		}
		for (var i in o) {
			(options[i] && (o[i] = options[i]));
		}
		t.data =options.data || [];
		t.recommendData = options.recommend || [];
		o.thumbs =[];
		t.size = t.data.length;
		//o.photoCount.innerHTML=t.size;
		//t.offsetSize = o.thumbs.length;
		t.offsetSize = 0;
		function loaddata(){
			t.loadlazyQuene = [];
			t.loadrecommend = [];
			for(var i =  t.offsetSize  ; i < t.size;i++){
				t.loadlazyQuene.push(t.data[i]);
			}
			for(var i=0;i<t.recommendData.length;i++){
				t.loadrecommend.push(t.recommendData[i]);
			}
			var obj,photoList = document.createDocumentFragment(),oFragmeng = document.createDocumentFragment(),i=t.offsetSize;
			while((obj =t.loadlazyQuene.shift())!=null){
				/*?§Ò??*/
				var li1 = document.createElement("li");
				var listImg = document.createElement("img");
				listImg.src = obj.listimg;
				(function(imgDom){
					addListener(imgDom, 'load' , function (event) {
						var t=this;
						var imgWidth = 90;
						var imgHeight = 64;
						var oldWidth = imgDom.offsetWidth;
						var oldHeight = imgDom.offsetHeight;
						var imgRtio = 90/64;
						var oldRtio = oldWidth/oldHeight;
						if(oldWidth>imgWidth || oldHeight>imgHeight){
							if(oldRtio>imgRtio){
								if(imgWidth<oldWidth) imgHeight = (imgWidth/oldWidth)*oldHeight;
							}
							else{
								if(imgHeight<oldHeight) imgWidth = (imgHeight/oldHeight)*oldWidth;
							}
						}
						else{
							imgWidth = oldWidth;
							imgHeight = oldHeight;
						}
						imgDom.width=imgWidth;
						imgDom.height=imgHeight;
					});
				}(listImg));
				var a  = document.createElement("a"),
				id = obj.img.substr(obj.img.lastIndexOf('/')+1,obj.img.lastIndexOf('.')-obj.img.lastIndexOf('/')-1);
				a.hashV = t.size - t.loadlazyQuene.length;
				a.hidefocus = true ;
				a.appendChild(listImg);
				li1.appendChild(a);
				o.thumbs.push(li1);
				oFragmeng.appendChild(li1);
				//????????
				(function(ele){
					addListener(ele, 'click' , function (event) {
						var a_link = ele.getElementsByTagName("a");
						t.picPage = a_link[0].hashV;
						if (t.picPage){
							event.preventDefault ? event.preventDefault() : (event.returnValue = false);
							t.showPhoto(t.picPage);
							picList.scrollToPage(t.picPage-1,0,200);
							thumbList.scrollToElement('li:nth-child('+(t.picPage-t.centerNum)+')', 100);
							if(t.picPage<t.centerNum) thumbList.scrollToElement('li:nth-child(1)', 100);
						}
					});
				}(li1));
				/*????§Ò?*/
				var li = document.createElement("li");
				/*desc*/
				var desc  = document.createElement("div");
				desc.className = "desc";
				desc.id = "desc";
				desc.innerHTML = "<h1 class=\"title_mb\" id=\"photoTitle_mb\">"+obj.title+"<span class=\"num\"><em class=\"indexNum\" id=\"photoIndex\">"+(i+1)+"</em>/<em id=\"photoCount\">"+t.size+"</em></span></h1><p class=\"zy\" id=\"photoDesc\">"+obj.desc+"</p>";
				li.appendChild(desc);
				photoList.appendChild(li);
				i++;
			}
			o.thumb.appendChild(oFragmeng);
			o.photoAll.appendChild(photoList);
			if(t.loadrecommend.length>0){
				var li2 = document.createElement("li");
				li2.id="recommend";
				var recommendDiv = document.createElement("div");
				recommendDiv.className = "recommendList";
				recommendDiv.id="recommendList";
				//var content = '<h2>???????:</h2><ul id="recommend">';
				var content = '';
				while((obj =t.loadrecommend.shift())!=null){
					content += '<li><a href="'+obj.url+'"><img src="'+obj.img+'"><p>'+obj.title+'</p></li></a>';
				}
				content += '</ul>';
				recommendDiv.innerHTML = content;
				li2.appendChild(recommendDiv);
				o.photoAll.appendChild(li2);
			}
		}
		//???????§Ò?
		(function(){			
			t.winWidth=t.winHeight=0;
			if (window.innerWidth){
				t.winWidth = window.innerWidth;
				t.winHeight = window.innerHeight;
			}
			else if((document.body) && (document.body.clientWidth)){
				t.winWidth = document.body.clientWidth;
				t.winHeight = document.body.clientHeight;
			}
			var len1 = o.thumb.getElementsByTagName("li");
			if(len1.length<1){loaddata();}
			else{
				var list =  o.thumb.getElementsByTagName("li"),len= list.length;
				for(var i = 0;i<len;i++){
					o.thumbs.push(list[i]);
				};
			}			
			var oHash = parseObj(window.location.hash);
			if(!oHash.channel) changeHash("channel=all");
			else t.channel = oHash.channel;
			if(t.o.prevSet.href.indexOf("#channel")<0){
				t.o.prevSet.href=t.o.prevSet.href+"#channel="+t.channel;
				t.o.nextSet.href=t.o.nextSet.href+"#channel="+t.channel;
			}
			if(t.channel!="all" && t.o.goBack.href.indexOf(t.channel)<0) t.o.goBack.href=t.o.goBack.href+t.channel+"/";
			t.defaultWidth();
		})();
		//ÏÂÔØÍ¼Æ¬
		//addListener(o.photoDown,'click',function(){
		//	var test =window.open("images/a.txt","_blank","");
		//	test.document.execCommand("SaveAs");
		//	test.close();
		//	var cname = o.photoSave.className;
		//	o.photoSave.className = (cname=="photo_save")?"photo_save hidden":"photo_save";
		//});
		//·­Ò³
		t.defaultPagex = t.defaultPagey = t.currentPagex = t.currentPagey = 0;
		addListener(o.photoAll,'touchstart',function(event){
			t.defaultPagex = event.targetTouches[0].pageX;
			t.defaultPagey = event.targetTouches[0].pageY;
			t.currentPagex = event.targetTouches[0].pageX;
			t.currentPagey = event.targetTouches[0].pageY;
		});
		addListener(o.photoAll,'touchmove',function(event){
			t.currentPagex = event.targetTouches[0].pageX;
			t.currentPagey = event.targetTouches[0].pageY;
		});
		addListener(o.photoAll,'touchend',function(event){
			var vaule,reg,pos,left,num,move;
			value = t.currentPagex-t.defaultPagex;
			if(value>10 || value<-10){
				var reg = /\-?[0-9]+/g;
			    var trans = t.o.scroller.style.webkitTransform.match(reg);
				if(value>10) t.picPage = Math.floor((trans[0]/t.winWidth)*(-1));
				if(value<-10) t.picPage = Math.ceil((trans[0]/t.winWidth)*(-1));
				if(t.picPage == t.size){
					var next = document.getElementById("nextSet");
					window.location.href = next.href;
				}
				reg=/\-?[0-9]+\.?[0-9]*/g;
				pos = o.scroller.style.webkitTransform.match(reg);
				num =(pos[0]/o.wrapper.offsetWidth)*(-1);
				move = value>0?Math.floor(num):Math.ceil(num);
				var index = parseInt(move)+1;
				thumbList.scrollToElement('li:nth-child('+(index-t.centerNum)+')', 100);
				t.showPhoto(index);
				t.defaultPagex = t.currentPagex;
				t.defaultPagey = t.currentPagey;
			}
		});
		addListener(o.wrapper,'click',function(){
			var value = t.currentPagex-t.defaultPagex;
			if(value<=10 && value>=-10){
				if(t.o.title_pad.style.top=="0px"){
					//if(t.o.title_pad.style.top=="-17px"){
					O.setStyle(t.o.title_pad, "top","-150px");
					t.o.imgBox.style.webkitTransform = 'translate3d(0,50px,0)';
					t.o.listBottom.style.webkitTransform = 'translate3d(0,110px,0)';
				}
				else{
					O.setStyle(t.o.title_pad, "top","0px");
					t.o.imgBox.style.webkitTransform = 'translate3d(0,0,0)';
					t.o.listBottom.style.webkitTransform = 'translate3d(0,0,0)';
				}
			}
		});
		addListener(document, 'DOMContentLoaded',function(){
			t.domLoad();
			if(!t.picPage){
				staSign = false;
				$('photoIndex').innerHTML="1";
				t.showPhoto("1");
			}
			else t.showPhoto(t.picPage);
			O.setStyle(t.o.title_pad, "top","-150px");
		});
		addListener(window,"orientationchange",function(obj){
			if(t.winWidth>=768){
				t.domLoad();
			}
		});
	};
	pad.Gallery.prototype = {
		defaultWidth:function(){
			var t = this;
			var uWidth = t.o.thumbs[0].offsetWidth+8;
			var overWidth = t.winWidth-(126*2);
			t.floatNum = overWidth/uWidth;			
			t.centerNum = Math.floor(t.floatNum/2);
			var viewWidth = Math.floor(t.floatNum)*uWidth;
			var pWidth = viewWidth;
			tWidth = uWidth*t.size;
			tCntWidth = t.o.thumb.parentNode.offsetWidth,
			tNum = Math.floor(tCntWidth / (uWidth));
			//???¨´????????§Ò???
			tCntWidth = uWidth * tNum;
			O.setStyle(t.o.scroller, "width", (t.winWidth*t.size) + 'px');
			O.setStyle(t.o.photoAll, "width", (t.winWidth*t.size) + 'px');
			O.setStyle(t.o.photoAll, "height", (t.winHeight-200) + 'px');
			O.setStyle(t.o.thumbAll, "width", tWidth + 'px');
			O.setStyle(t.o.thumb, "width", tWidth + 'px');
			//O.setStyle(t.o.photoTitle_pad, "width", (t.winWidth-126*2) + 'px');
			var bCntWidth = tWidth.offsetWidth,
			bWidth = Math.max(36, Math.min(tCntWidth * bCntWidth / tWidth, bCntWidth));
			listNum = Math.floor(t.floatNum);
			bWidth = Math.max(36, bCntWidth / listNum + 8);
		},
		domLoad:function(){
			var t = this;
			var liArr = scroller.getElementsByTagName("li");
			var pWidth = t.o.photoView.style.width;
			for(var i=0;i<t.data.length;i++){	
				liArr[i].style.width=t.winWidth+"px";
				var img = liArr[i].getElementsByTagName("a");
				if(img.length==0){
					var pic = document.createElement('a');
					pic.id = "photoimg";
					var imgDiv = document.createElement("img");
					imgDiv.src = t.data[i].img;
					imgDiv.id = "photo"+i;
					imgDiv.style.cssText = "opacity:1;filter:alpha(opacity=100);max-width:100%;max-height:100%;";
					pic.appendChild(imgDiv);
					liArr[i].appendChild(pic);
				}
			}
			var liWidth = liArr[0].style.width;
			var left = liWidth.replace("px","")*(t.picPage-1)*(-1);
			t.o.scroller.style.webkitTransform = 'translate(' + left + 'px, ' + 0 + 'px)';
		},
		showPhoto: function (id) {
			var t = this,
			index = isNaN(id) ? 1 : (parseInt(id ) < 1 ? 1 : (parseInt(id )> t.size? t.size : parseInt(id ))),
			info = t.data[index-1];
			var cur = O.getElementsByClassName(t.o.thumb, t.o.activeThumbCls),o= t.o;
			(cur && O.removeClass(cur[0],  o.activeThumbCls));
			O.addClass(o.thumbs[index-1],  o.activeThumbCls);
			if(info){
				var data={hash:index,title:info.title,desc:info.desc,img:info.img,count:t.data.length};
				t.changeInfo(data);
				t.moveScroll(id);
			}
			return t;
		},
		changeInfo:function(info){
			//$('photoTitle_pad').innerHTML=info.title+"<span class=\"num\"><em id=\"photoIndex\">"+info.hash+"</em>/<em id=\"photoCount\">"+info.count+"</em></span>";
			$('photoDesc').innerHTML=info.desc;
			//$('photoDown').downUrl=info.img;
			$('defaultDesc').innerHTML="<h1 class=\"title_mb\" id=\"photoTitle_mb\">"+info.title+"<span class=\"num\"><em class=\"indexNum\" id=\"photoIndex\">"+info.hash+"</em>/<em id=\"photoCount\">"+info.count+"</em></span></h1><p class=\"zy\" id=\"photoDesc\">"+info.desc+"</p>";
		},
		moveScroll:function(id){
			var t = this;
			var index = isNaN(id) ? 1 : (parseInt(id ) < 1 ? 1 : (parseInt(id )> t.size? t.size : parseInt(id ))),
				picIndex = index-1,
				scrollIndex = index-t.centerNum;
			if (index>=t.centerNum) thumbList.scrollToElement('li:nth-child('+scrollIndex+')', 100);
			else thumbList.scrollToElement('li:nth-child(1)', 100);
		}
	}
	window["pad"] = pad;
	/** mobile **/
	mobile.Gallery=function(options){
		var mb = this;
		mb.channel="all";	
		mb.picPage = mb.picPage||0;
		var m = this.m = {
			'photoIndex': $('photoIndex')/*,'photoCount':$('photoCount')*/,'goBack':$('goBack_mb'),'photo': $('photo'), 'photoPrevLoading':$('photoPrevLoading'),'photoLoading': $('photoLoading'),'photoDesc': $('photoDesc'),'wrapper':$('wrapper'),'scroller':$('scroller'),'photoAll':$('photoAll'),'desc':$('desc'),'thumb':$('thumb'),'menu_mb':$('globalheader'),'photoDown':$('photoDown_mb'),'search':$('search_mb'),'conLeft':$('conLeft'),'conRt':$('conRt'),'content':$('content')
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
			mb.Tophidden();
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
		//????????????????		
		mb.defaultPagex = mb.defaultPagey = mb.currentPagex = mb.currentPagey = 0;
		addListener(m.photoAll,'touchstart',function(event){
			mb.defaultPagex = event.targetTouches[0].pageX;
			mb.defaultPagey = event.targetTouches[0].pageY;
			mb.currentPagex = event.targetTouches[0].pageX;
			mb.currentPagey = event.targetTouches[0].pageY;
		});
		addListener(m.photoAll,'touchmove',function(event){
			mb.currentPagex = event.targetTouches[0].pageX;
			mb.currentPagey = event.targetTouches[0].pageY;
		});
		addListener(m.photoAll,'touchend',function(event){
			var vaule,reg,pos,left,num,move;
			value = mb.currentPagex-mb.defaultPagex;
			var reg = /\-?[0-9]+/g;		
			if(value>0 || value<-0){
			    var trans = mb.m.scroller.style.webkitTransform.match(reg);
			    trans[0] = (trans[0]>0)?-1:trans[0];
				var max_val = (mb.recommendData.length>0)?(mb.count+1):mb.count;
				if(value>0){
					mb.picPage = Math.floor((trans[0]/mb.winWidth)*(-1));
				}
				if(value<-0){
					mb.picPage = Math.ceil((trans[0]/mb.winWidth)*(-1));
				}
				mb.picPage = (mb.picPage>0)?mb.picPage:1;
				mb.hideMenu();
				mb.defaultPagex = mb.currentPagex;
				mb.defaultPagey = mb.currentPagey;
			}
		});
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
	}
	mobile.Gallery.prototype = {
		Tophidden:function(){
			var mb = this;
			var liArr = mb.m.photoAll.getElementsByTagName("li");
			var len = (mb.recommendData.length>0)?(mb.recommendData.length+1):0;
			for(var i=0;i<(liArr.length-len);i++){
				var desc = liArr[i].getElementsByTagName('div');
				O.setStyle(desc, "bottom","-300px");
			}
			mb.m.menu_mb.style.top="-46px";
		},		
		Topshow:function(){
			var mb = this;
			var liArr = mb.m.photoAll.getElementsByTagName("li");
			var len = (mb.recommendData.length>0)?(mb.recommendData.length+1):0;
			for(var i=0;i<(liArr.length-len);i++){
				var desc = liArr[i].getElementsByTagName('div');
				O.setStyle(desc, "bottom","0px");
			}
			mb.m.menu_mb.style.top="0px";
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
				/*????§Ò?*/
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
				addListener(li,'touchend',function(){
					var value = mb.currentPagex-mb.defaultPagex;
					if(value<=10 && value>=-10){
						var liArr = mb.m.photoAll.getElementsByTagName("li");
						if(mb.m.menu_mb.style.top=="-46px"){
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
	var¡¡iscroll_nav = new iScroll('globalnav-pt', {vScrollbar:false,hideScrollbar:true,bounce:false});
});