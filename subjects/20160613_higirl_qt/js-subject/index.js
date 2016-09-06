require("/fliza-ui");
Fui.Template.IMG_DIR = ImgDir();
qt_grade = 0;
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
            {
                gesture:"tap",
                name:"pop_show",
                callback:function(e,$tar){
                    $tar.addClass("cur").siblings().removeClass("cur");
                    var sel = $tar.data("sel");
                    var qt_answer = $tar.data("val") || 0;
                    $tar.parents(".p").find(".next").data("pop",sel).data("ans",qt_answer);
                }
            },
            {
                gesture:"tap",
                name:"next_step",
                callback:function(e,$tar){
                    var val = $tar.data("pop") || "";
                    var qtId = $tar.data("qt") || 1;
                    if(val==""){
                        $(".tips").fadeIn();
                        setTimeout(function(){$(".tips").fadeOut();},1000);
                        return false;
                    }
                    var qt_answer = $tar.data("ans") || 0;
                    $(".pop").find(".pop_bg").addClass("bg_"+qtId).find(".pop_c").addClass("c_"+qtId+"_"+val);
                    $(".pop").show();
                    qt_grade = parseInt(qt_grade)+parseInt(qt_answer);
                }
            },
            {
                gesture:"tap",
                name:"share",
                callback:function(e,$tar){
                    $(".app-music").css("zIndex","-1");
                    $(".share_pop").fadeIn();
                }
            },
            {
                gesture:"tap",
                name:"close",
                callback:function(e,$tar){
                    $(".app-music").css("zIndex","100");
                    $(".share_pop").fadeOut();
                    $(".app_pop").fadeOut();
                }
            },
            {
                gesture:"tap",
                name:"more_app",
                callback:function(e,$tar){
                    $(".app-music").css("zIndex","-1");
                    $(".app_pop").fadeIn();
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
    color:"#ffffff",
    autoplay:false
});
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==8){
                if(qt_grade<=3){
                    $(".grade_c").addClass("bg1");
                }
                else if(qt_grade<=7){
                    $(".grade_c").addClass("bg2");
                }
                else if(qt_grade<=10){
                    $(".grade_c").addClass("bg3");
                }
                $(".qst").removeClass("show");
            }
            else{
                $(".qst").addClass("show");
            }
        }
    },
    data:[
        {
            template:'PAGE0',
            xtpl:'p0'
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
    ]
});
setTimeout(function(){$(".loading").fadeOut();audio.play();},4700);
setTimeout(function(){$(".logo").addClass("show")},4700);
//start
$(".start").on("click",function(e){
    $(".cover").fadeOut();
    $(".qst").addClass("show");
    slider.render();
    $(".fui-arrow").css("z-index","-1");
});
//next
var next_val = 1;
$(".pop .step").on("click",function(e){
    next_val++;
    slider.next();
    $(".qst").find("span").removeAttr("class").addClass("num_"+next_val);
    $(".pop").fadeOut();
    $(".pop").find(".pop_bg").removeAttr("class").addClass("pop_bg");
    $(".pop").find(".pop_c").removeAttr("class").addClass("pop_c");
});
//weixin share
var wx_url = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=Cosmom_Jssdk&type=json&url='"+encodeURIComponent(window.location.href)+"'";
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
            DS.ready(function(){
                wx.onMenuShareAppMessage({
                    title: shareData.tit,
                    desc: shareData.desc,
                    link: DS.linkChange(shareData.link),
                    imgUrl: shareData.imgUrl,
                    success: function (res) {
                        DS.sendRepost("appMessage");
                    },
                    cancel: function (res) {
                    }
                });
                wx.onMenuShareTimeline({
                    title: shareData.tit,
                    link: DS.linkChange(shareData.link),
                    imgUrl: shareData.imgUrl,
                    success: function (res) {
                        DS.sendRepost("timeline");
                    },
                    cancel: function (res) {
                    }
                });
            });
        });
    },
    error:function(){}
});