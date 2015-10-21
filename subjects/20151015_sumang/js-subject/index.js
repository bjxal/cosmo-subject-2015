require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.jpg'));
Fui.Template.IMG_DIR = ImgDir();
var rf_id = 0;
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
            {
                gesture:"tap",
                name:"share_sina",
                callback:function(e,$tar){
                    tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
                    tourl = tourl.replace('$title',shareData.tit).replace('$content',shareData.tit+"！  "+shareData.desc).replace('$pic',shareData.imgUrl).replace('$url',shareData.link).replace('$back',shareData.link);
                    window.open(tourl,'_blank');
                }
            },
            {
                gesture:"tap",
                name:"video_pop",
                callback:function(e,$tar){
                    audio.pause();
                    $(".app-music").css("z-index","-1");
                    $(".video_pop").fadeIn();
                    var src1 = $tar.data("videosrc");
                    var html = '<iframe width=690 height=400 src="'+src1+'" frameborder=0 allowfullscreen></iframe>';
                    $(".video_if").append(html)
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
    color:"#de5a7f",
    autoplay:false
});
mt = 0;
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:9,
    //lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page>0){
                var list = $(".p"+page+" .hard_list img");
                $.each(list,function(i,item){
                    setTimeout(function(){
                        $(item).addClass("active");
                    },i*200);
                })
            }
            if(page==11 && mt==0){
                setTimeout(function(){
                    var src = $(".djs img").data("gif");
                    $(".djs img").attr("src",src);
                    mt = 1;
                },500);
            }
            if(mt==1){
                $(".djs").hide();
                $(".djs-c").css("opacity","1");
            }

        }
    },
    data:[
        {
            template:'PAGE0',
            xtpl:'p0',
            design:function(){
                var list = $(".p0 .list img");
                var list2 = $(".p0 .hard_list img");
                setTimeout(function(){
                    //$.each(list,function(i,item){
                    //    setTimeout(function(){
                    //        $(item).addClass("active");
                    //    },i*200);
                    //});
                    $.each(list2,function(i,item){
                        setTimeout(function(){
                            $(item).addClass("active");
                        },i*200);
                    });
                    audio.play();
                },1000);
                //setTimeout(function(){
                //    $(".cover").fadeOut("slow");
                //},4000);
            }
        }
        ,{
            template:'PAGE0',
            xtpl:'p1'
        }
        ,{
            template:'PAGE0',
            xtpl:'p2'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p3'
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
        ,{
            template: 'PAGE0',
            xtpl: 'p8'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p9'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p10'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p11'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p12'
        }
    ]
});
slider.render();
var p2_list = [
    {
        width: 543,
        height: 743,
        content: ImgDir('/p2/list/1.jpg')
    },
    {
        width: 543,
        height: 743,
        content: ImgDir('/p2/list/2.jpg')
    },
    {
        width: 543,
        height: 743,
        content: ImgDir('/p2/list/3.jpg')
    }

]
//var islider1 = new iSlider({
//    data: p2_list,
//    dom: document.getElementById("animation-effect"),
//    duration: 3000,
//    animateType: 'rotate',
//    isAutoplay: false,
//    isLooping: true
//    //isVertical: true// 是否垂直滚动
//});
//var p3_list = [
//    {
//        width: 543,
//        height: 743,
//        content: ImgDir('/p3/list/1.jpg')
//    },
//    {
//        width: 543,
//        height: 743,
//        content: ImgDir('/p3/list/1.jpg')
//    },
//    {
//        width: 543,
//        height: 743,
//        content: ImgDir('/p3/list/1.jpg')
//    }
//
//]
//var islider2 = new iSlider({
//    data: p3_list,
//    dom: document.getElementById("animation-effect-2"),
//    duration: 3000,
//    animateType: 'flow',
//    isAutoplay: false,
//    isLooping: true
//    //isVertical: true// 是否垂直滚动
//});
var p4_list = [
    {
        width: 500,
        height: 500,
        content: ImgDir('/p4/list/1.jpg')
    },
    {
        width: 500,
        height: 500,
        content: ImgDir('/p4/list/2.jpg')
    },
    {
        width: 500,
        height: 500,
        content: ImgDir('/p4/list/3.jpg')
    }

]
//var islider3 = new iSlider({
//    data: p4_list,
//    dom: document.getElementById("animation-effect-3"),
//    duration: 3000,
//    animateType: 'flip',
//    isAutoplay: false,
//    isLooping: true
//    //isVertical: true// 是否垂直滚动
//});
var p6_list = [
    {
        width: 543,
        height: 743,
        content: ImgDir('/p6/list/1.jpg')
    },
    {
        width: 543,
        height: 743,
        content: ImgDir('/p6/list/1.jpg')
    }

]
//var islider6 = new iSlider({
//    data: p6_list,
//    dom: document.getElementById("animation-effect-6"),
//    duration: 3000,
//    animateType: 'default',
//    isAutoplay: false,
//    isLooping: true
//    //isVertical: true// 是否垂直滚动
//});
$(".close").bind("touchend",function(e){
    audio.play();
    $(".video_pop").fadeOut().find("iframe").remove();
    $(".app-music").css("z-index","100");
});
//weixin share
var wx_url = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=Cosmom_Jssdk&type=json&url='"+String(window.location.href)+"'";
$.ajax({
    type:"POST",
    ansyc:false,
    url:wx_url,
    data:{},
    dataType:"json",
    success:function(data){
        wx.config({
            //debug: true,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
        });
        wx.ready(function () {
            wx.onMenuShareAppMessage({
                title: shareData.tit,
                desc: shareData.desc,
                link: shareData.link,
                imgUrl: shareData.imgUrl,
                success: function (res) {
                },
                cancel: function (res) {
                }
            });
            wx.onMenuShareTimeline({
                title: shareData.tit,
                link: shareData.link,
                imgUrl: shareData.imgUrl,
                success: function (res) {
                },
                cancel: function (res) {
                }
            });
        });
    },
    error:function(){}
});