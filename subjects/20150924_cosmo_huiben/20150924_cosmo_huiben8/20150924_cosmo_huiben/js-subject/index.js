require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.jpg'));
Fui.Template.IMG_DIR = ImgDir();
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
            {
                gesture:"tap",
                name:"buy_link",
                callback:function(e,$tar){
                    window.location.href="http://detail.koudaitong.com/show/goods?alias=jfaq19sb&amp;v2/goods/jfaq19sb=&amp;sf=wx_sm";
                }
            },
            {
                gesture:"tap",
                name:"share_pop_show",
                callback:function(e,$tar){
                    $(".share_pop").fadeIn();
                    $(".app-music").css("z-index","-1");
                    slider.set("lock","true");
                }
            },
            {
                gesture:"tap",
                name:"share_pop_hide",
                callback:function(e,$tar){
                    $(".share_pop").fadeOut();
                    $(".app-music").css("z-index","101");
                    slider.set("lock","false");
                }
            },
            {
                gesture:"tap",
                name:"share_sina",
                callback:function(e,$tar){
                    tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
                    tourl = tourl.replace('$title',shareData.tit).replace('$content',shareData.tit+"！  "+shareData.desc).replace('$pic',shareData.imgUrl).replace('$url',shareData.link).replace('$back',shareData.link);
                    window.open(tourl,'_blank');
                }
            },{
                gesture:"tap",
                name:"m_link",
                callback:function(e,$tar){
                    var url = "http://m.cosmopolitan.com.cn/";
                    window.open(url,'_blank');
                }
            },{
                gesture:"tap",
                name:"show_video",
                callback:function(e,$tar){
                    audio.pause();
                    var video_1 = $tar.data("videosrc");
                    var v_html_1 = '<iframe height=480 width=750 src="'+video_1+'" frameborder=0 allowfullscreen></iframe>';
                    $(".video_pop").fadeIn().find(".video_src").append(v_html_1);
                }
            },{
                gesture:"tap",
                name:"hide_video",
                callback:function(e,$tar){
                    audio.play();
                    $(".video_pop").fadeOut().find(".video_src").html("");
                }
            }
        ]
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var audio = Fui.Audio({
    src:ImgDir('/music.mp3'),
    color:"#ee257b",
    autoplay:false
});
var mt = false;
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:false,
    iteration:true,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==1){
                $(".p0 .fl_1,.p0 .fl_2").removeClass("show");
            }
            if(page==3){
                if(mt==false){
                    $(".slide_tip").fadeIn();
                    setTimeout(function(){
                        mt=true;
                        $(".slide_tip").fadeOut();
                    },1500);
                }
                else $(".slide_tip").fadeOut();
            }
            if(page==4){
            }
            if(page==7){
                $(".fui-arrow").css("z-index","-1");
                $(".share").show().addClass("focus");
            }
            else{
                $(".fui-arrow").css("z-index","10000");
                $(".share").hide().removeClass("focus");
            }
        }
    },
    data:[
        {
            template:'PAGE0',
            bg:ImgDir('/p0/bg.jpg'),
            xtpl:'p0',
            design:function(){
                var me = this;
                me.$el.append(new Fui.Guagua({
//            backgroundSrc:"http://m.onlylady.com/m/zhuantiimg/2.jpg",
//            maskSrc:"http://m.onlylady.com/m/zhuantiimg/1.jpg",
                    backgroundSrc:tumo.bg,
                    maskSrc:tumo.mask,
                    completeValue:15,
                    radius:50,
                    ontouchstart:function(){
                        $(".p0 .hand,.p0 .word").fadeOut();
                    },
                    listeners:{
                        complete:function(){
                            slider.set("lock",false);
                            $(".fui-arrow").css("z-index","1");
                            audio.play();
                        }
                    }
                }).$el);
            }
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p1/bg.jpg'),
            xtpl:'p1'
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p1/bg.jpg'),
            xtpl:'p2'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p3',
            design: function () {
            }
        }
        , {
            template: 'PAGE0',
            xtpl: 'p4'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p5'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p6'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p7'
        }
    ]
});
slider.render();
//setTimeout(function(){
//    slider.render();
    $(".fui-arrow").css("z-index","-1");
//    $(".loadingC").fadeOut();
//},3500);
var picList_3 = [
    {
        height: 750,
        width: 400,
        content: ImgDir('/p3/list/1.jpg')
    },
    {
        height: 750,
        width: 400,
        content: ImgDir('/p3/list/1.jpg')
    },
    {
        height: 750,
        width: 400,
        content: ImgDir('/p3/list/1.jpg')
    }
];
var picList_5 = [
    {
        height: 750,
        width: 400,
        content: ImgDir('/p5/list/1.jpg')
    },
    {
        height: 750,
        width: 400,
        content: ImgDir('/p5/list/1.jpg')
    },
    {
        height: 750,
        width: 400,
        content: ImgDir('/p5/list/1.jpg')
    }
];
var islider1 = new iSlider({
    data: picList_3,
    dom: document.getElementById("animation-effect"),
    duration: 3000,
    animateType: 'rotate',
    isAutoplay: false,
    isLooping: true
    //isVertical: true// 是否垂直滚动
});
var islider2 = new iSlider({
    data: picList_5,
    dom: document.getElementById("animation-effect_2"),
    duration: 3000,
    animateType: 'rotate',
    isAutoplay: false,
    isLooping: true
    //isVertical: true// 是否垂直滚动
});
$(".video_close").on("touchend",function(e){
    audio.play();
    $(".video_pop").fadeOut().find(".video_src").html("");
});
//weixin share
//var wx_url = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=Cosmom_Jssdk&type=json&url='"+String(window.location.href)+"'";
//$.ajax({
//    type:"POST",
//    ansyc:false,
//    url:wx_url,
//    data:{},
//    dataType:"json",
//    success:function(data){
//        wx.config({
//            //debug: true,
//            appId: data.appId,
//            timestamp: data.timestamp,
//            nonceStr: data.nonceStr,
//            signature: data.signature,
//            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
//        });
//        wx.ready(function () {
//            wx.onMenuShareAppMessage({
//                title: shareData.tit,
//                desc: shareData.desc,
//                link: shareData.link,
//                imgUrl: shareData.imgUrl,
//                success: function (res) {
//                },
//                cancel: function (res) {
//                }
//            });
//            wx.onMenuShareTimeline({
//                title: shareData.tit,
//                link: shareData.link,
//                imgUrl: shareData.imgUrl,
//                success: function (res) {
//                },
//                cancel: function (res) {
//                }
//            });
//        });
//    },
//    error:function(){}
//});