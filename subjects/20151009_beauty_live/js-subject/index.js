require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.jpg'));
Fui.Template.IMG_DIR = ImgDir();
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
                name:"check_in",
                callback:function(e,$tar){
                    $tar.addClass("cur");
                }
            }
        ]
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var mt_3 = mt_5 = false;
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:1,
    //lock:true,
    iteration:true,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==0){
                $(".cover").fadeIn().addClass("focus");
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
            xtpl:'p0',
            design:function(){}
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
    ]
});
slider.render();
setTimeout(function(){$(".cover").addClass("focus");},1000);
$(".fui-arrow").removeClass("down");
var picList_1 = [
    {
        'height': '100%',
        'width': '100%',
        'content': '<div class="imgs"><img src="img-subject/p1/list/1.jpg"/><div class="word"><h2>压轴的LV女郎们酷毙了！</h2><p>搭配浪漫唯美的木耳边装饰宫廷风格衬衫，或是摩登时髦的网眼背心，如绅士般潇洒，胸口处的小面积镂空在之前的系列中也曾使用过</p></div></div>'//ImgDir('/p1/list/1.jpg')
    },
    {
        'height': '710px',
        'width': '790px',
        'content': '<div class="imgs"><img src="img-subject/p1/list/1.jpg"/><div class="word"><h2>压轴的LV女郎们酷毙了！</h2><p>搭配浪漫唯美的木耳边装饰宫廷风格衬衫，或是摩登时髦的网眼背心，如绅士般潇洒，胸口处的小面积镂空在之前的系列中也曾使用过；那些长度只及下胸线的短上衣与卖弄柔弱性感。</p></div></div>'//ImgDir('/p1/list/1.jpg')
    },
    {
        'height': '710px',
        'width': '790px',
        'content': '<div class="imgs"><img src="img-subject/p1/list/1.jpg"/><div class="word"><h2>压轴的LV女郎们酷毙了！</h2><p>搭配浪漫唯美的木耳边装饰宫廷风格衬衫，或是摩登时髦的网眼背心，如绅士般潇洒，胸口处的小面积镂空在之前的系列中也曾使用过；那些长度只及下胸线的短上衣与卖弄柔弱性感。；那些长度只及下胸线的短上衣与卖弄柔弱性感。</p></div></div>'//ImgDir('/p1/list/1.jpg')
    }
];
var islider1 = new iSlider({
    data: picList_1,
    type:"dom",
    dom: document.getElementById("animation-effect"),
    duration: 3000,
    animateType: 'rotate',
    isAutoplay: false,
    isLooping: true,
    onslideend:function(){
        var id = islider1.sliderIndex;
        console.log(islider1)
        $("#animation-effect li").eq(id).find(".word").addClass("cur").siblings().find(".word").removeClass("cur");
    }
    //isVertical: true// 是否垂直滚动
});
$(".cover_scanning").on("touchend",function(e){
    $(e.target).addClass("cur").find(".scan_line").hide();
    setTimeout(function(){
        slider.slide(1);
        $(".cover").fadeOut(500);
    },1000);
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