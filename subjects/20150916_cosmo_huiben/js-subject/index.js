require("/fliza-ui");
Fui.Template.IMG_DIR = ImgDir();
var PAGE0 = Fui.Template.extend({
    config:{
    },
    design:function(){
        $(".fui-arrow").hide();
    }
    ,getGestureItems:function(){}
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
//var audio = Fui.Audio({
//    src:ImgDir('/music.mp3'),
//    color:"#ee257b",
//    autoplay:false
//});
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:false,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            move_t = false;
            $(".p").find(".show").removeClass("show");
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==5){
                $(".fui-arrow").css("z-index","-1");
                $(".app-music").css("z-index","-1");
            }
            else{

                $(".fui-arrow").css("z-index","10000");
                $(".app-music").css("z-index","101");
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
                setTimeout(function(){
                    me.$el.addClass("focus");
                    setTimeout(function(){
                        slider.set("lock",false);
                        $(".fui-arrow").css("z-index","1");
                    },3000);
                },1000);
            }
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p1/bg.jpg'),
            xtpl:'p1'
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p2/bg.jpg'),
            xtpl:'p2'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p3',
            design: function () {
                var me = this;
                //me.$imglist = $el.find('.imglist');
                var imgs = me.imgs = new Fui.PageSlider({
                    el:"#img-pack",
                    stopPropagation:false,
                    preventDefault:false,
                    orient:'x',
                    arrow:{},
                    design:function(){},
                    data:[
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/1.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/2.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/3.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/4.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/5.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/6.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/7.jpg')
                        }
                    ]
                });
                setTimeout(function(){imgs.render();},1000);
            }
        }
        , {
            template: 'PAGE0',
            bg:ImgDir('/p4/bg.jpg'),
            xtpl: 'p4'
        }
        ,{
            template: 'PAGE0',
            bg:ImgDir('/p5/bg.jpg'),
            xtpl: 'p5'
        }
    ]
});
slider.render();
$(".fui-arrow").css("z-index","-1");

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