!function(e){var a={id:"ca813810",exports:{}};e.__modules__||(e.__modules__={});(function(e,a,t){var n=encodeURIComponent("COSMO��ױ��Ȥ�����ݿ�������"),i="",c=ImgDir("/weixin.jpg"),s="";back=encodeURIComponent("http://m.cosmopolitan.com.cn/"),tourl="",move_m=!1,grade=0,Fui.Template.IMG_DIR=ImgDir();var p=Fui.Template.extend({config:{},design:function(){$(".fui-arrow").hide()},getGestureItems:function(){return[{gesture:"tap",name:"goToPage",callback:function(e,a){var t=a.data("index");l.slide(t)}},{gesture:"tap",name:"pop_show",callback:function(e,a){l.set("lock",!0);a.data("popid")}},{gesture:"tap",name:"share_pop_show",callback:function(e,a){$(".share_pop").fadeIn(),l.set("lock",!0)}},{gesture:"tap",name:"share_pop_hide",callback:function(e,a){$(".share_pop").fadeOut(),l.set("lock",!1)}},{gesture:"tap",name:"share_sina",callback:function(e,a){tourl="http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back",tourl=tourl.replace("$title",i).replace("$content",n).replace("$pic",c).replace("$url",s).replace("$back",back),window.open(tourl,"_blank")}},{gesture:"tap",name:"m_link",callback:function(e,a){var t="http://m.cosmopolitan.com.cn/";window.open(t,"_blank")}},{gesture:"tap",name:"nav_change",callback:function(e,a){var t=a.data("index")||0;a.addClass("cur").siblings().removeClass("cur"),imgs.slide(t)}},{gesture:"tap",name:"nav_change2",callback:function(e,a){var t=a.data("index")||0;a.addClass("cur").siblings().removeClass("cur"),imgs2.slide(t)}},{gesture:"tap",name:"nav_change3",callback:function(e,a){var t=a.data("index")||0;a.addClass("cur").siblings().removeClass("cur"),imgs3.slide(t)}},{gesture:"tap",name:"nav_change4",callback:function(e,a){var t=a.data("index")||0;a.addClass("cur").siblings().removeClass("cur"),imgs4.slide(t)}}]}});Fui.Template.regTpl({PAGE0:p});var l=new Fui.PageSlider({el:"#pack",curPage:0,lock:!1,iteration:!1,orient:"y",listeners:{slide:function(){move_t=!1;var e=(l.event.gesture,this.get("curPage"));$(".p"+e).addClass("focus"),10==e?($(".fui-arrow").css("z-index","-1"),$(".app-music").css("z-index","-1")):($(".fui-arrow").css("z-index","10000"),$(".app-music").css("z-index","101"))}},data:[{template:"PAGE0",bg:ImgDir("/p0/bg.jpg"),xtpl:"p0",design:function(){var e=this;setTimeout(function(){e.$el.addClass("focus")},1e3)}},{template:"PAGE0",bg:ImgDir("/p1/bg.jpg"),xtpl:"p1"},{template:"PAGE0",xtpl:"p3",bg:ImgDir("/p3/p1/bg.jpg"),design:function(){}},{template:"PAGE0",xtpl:"p5",bg:ImgDir("/p5/p1/bg.jpg"),design:function(){}},{template:"PAGE0",xtpl:"p7",bg:ImgDir("/p7/p1/bg.jpg"),design:function(){}},{template:"PAGE0",xtpl:"p9",bg:ImgDir("/p9/p1/bg.jpg"),design:function(){}},{template:"PAGE0",bg:ImgDir("/p10/bg.jpg"),xtpl:"p10"}]});l.render()})(a.exports,a,e);e.__modules__.ca813810=a.exports}(this);