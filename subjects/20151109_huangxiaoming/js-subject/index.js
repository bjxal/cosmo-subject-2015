require("/fliza-ui");
Fui.Template.IMG_DIR = ImgDir();
var p1_list = [
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/1/1.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/1/2.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/1/3.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/1/4.jpg')
    }
];
var p2_list = [
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/2/1.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/2/2.jpg')
    },
    {
        width: 500,
        height: 500,
        content: ImgDir('/p2/list/2/3.jpg')
    }
];
var p3_list = [
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/3/1.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/3/2.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/3/3.jpg')
    }
];
var p4_list = [
    {
        width: 500,
        height: 500,
        content: ImgDir('/p2/list/4/1.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/4/2.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/4/3.jpg')
    },
    {
        width: 500,
        height: 500,
        content: ImgDir('/p2/list/4/4.jpg')
    },
    {
        width: 650,
        height: 950,
        content: ImgDir('/p2/list/4/5.jpg')
    }
];
var audio = Fui.Audio({
    src:ImgDir('/music.mp3'),
    color:"#ffffff",
    autoplay:false
});
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){}
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var mt_3 = mt_5 = false;
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    //lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==0){
                $(".fui-arrow").removeClass("down");
                $(".cover").fadeIn().addClass("focus");
                setTimeout(function(){ slider.slide(1);$(".cover").fadeOut(800);$(".fui-arrow").addClass("down");},8000);
            }
            else if(page==12){
                $(".fui-arrow").removeClass("down");
            }
            else{
                $(".fui-arrow").addClass("down");
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
            template:'PAGE0',
            xtpl:'p5'
        }
        ,{
            template:'PAGE0',
            xtpl:'p6'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p7'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p8'
        }
        ,{
            template:'PAGE0',
            xtpl:'p9'
        }
        ,{
            template:'PAGE0',
            xtpl:'p10'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p11'
        }
    ]
});
slider.render();
setTimeout(function(){$(".cover").addClass("focus");audio.play();},1000);
//setTimeout(function(){ slider.slide(1);$(".cover").fadeOut(800);$(".fui-arrow").addClass("down");},7500);
//$(".fui-arrow").removeClass("down");

var islider1 = new iSlider({
    data: p1_list,
    dom: document.getElementById("animation-effect"),
    duration: 3000,
    animateType: 'default',
    isAutoplay: false,
    isLooping: true,
    onslideend: function () {
        var id = islider1.sliderIndex;
    }
});
var islider2 = new iSlider({
    data: p2_list,
    dom: document.getElementById("animation-effect5"),
    duration: 3000,
    animateType: 'default',
    isAutoplay: false,
    isLooping: true,
    onslideend: function () {
        var id = islider1.sliderIndex;
    }
});
var islider3 = new iSlider({
    data: p3_list,
    dom: document.getElementById("animation-effect7"),
    duration: 3000,
    animateType: 'default',
    isAutoplay: false,
    isLooping: true,
    onslideend: function () {
        var id = islider1.sliderIndex;
    }
});
var islider4 = new iSlider({
    data: p4_list,
    dom: document.getElementById("animation-effect9"),
    duration: 3000,
    animateType: 'default',
    isAutoplay: false,
    isLooping: true,
    onslideend: function () {
        var id = islider1.sliderIndex;
    }
});
/*p2*/
function setList(){
    var islider1 = new iSlider({
        data: p2_list,
        dom: document.getElementById("animation-effect"),
        duration: 3000,
        animateType: 'default',
        isAutoplay: false,
        isLooping: true,
        onslideend: function () {
            var id = islider1.sliderIndex;
        }
    });
}
$(".close").on("touchend",function(e){
    $(".pop").removeClass("cur").find(".award,.hard").removeClass("cur");
    setTimeout(function(){
        $("#animation-effect").empty();
    },500);
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