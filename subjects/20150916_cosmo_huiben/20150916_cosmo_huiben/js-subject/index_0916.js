require("/fliza-ui");
var p3List = [
    ImgDir('/p3/list/1.jpg'),
    ImgDir('/p3/list/1.jpg'),
    ImgDir('/p3/list/1.jpg'),
    ImgDir('/p3/list/1.jpg')
];
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
            page_effect(page);
            /*if(page==1){
                var list = $(".p1").find(".c img");
                $.each(list,function(i,item){
                    setTimeout(function(){
                        $(item).addClass("show");
                    },i*500);
                });
            }
            if(page==2){
                var list = $(".p2").find(".c img");
                $.each(list,function(i,item){
                    setTimeout(function(){
                        $(item).addClass("show");
                    },i*500);
                });
                setTimeout(function(){
                    $(".p2 .line,.p2 .pen").addClass("show");
                },4800);
                setTimeout(function(){
                    $(".p2 .line_c .pen").removeClass("show");
                },5600);
            }
            if(page==4){
                var list = $(".p4").find(".c img");
                $.each(list,function(i,item){
                    setTimeout(function(){
                        $(item).addClass("show");
                    },i*500);
                });
                setTimeout(function(){
                    $(".p4 .line_c .line,.p4 .line_c .pen").addClass("show");
                },5000);
                setTimeout(function(){
                    $(".p4 .line_c .pen").removeClass("show");
                },5700);
                setTimeout(function(){
                    $(".p4 .line_c2 .line,.p4 .line_c2 .pen").addClass("show");
                },6000);
                setTimeout(function(){
                    $(".p4 .line_c2 .pen").removeClass("show");
                },6700);
            }
            if(page==5){
                var list = $(".p5").find(".c img");
                $.each(list,function(i,item){
                    setTimeout(function(){
                        $(item).addClass("show");
                    },i*500);
                });
                setTimeout(function(){
                    $(".p5 .line,.p5 .pen").addClass("show");
                },3500);
                setTimeout(function(){
                    $(".p5 .line_c .pen").removeClass("show");
                },4200);
                setTimeout(function(){
                    var list1 = $(".p5").find("img.pro");
                    $.each(list1,function(i,item){
                        setTimeout(function(){
                            $(item).addClass("show");
                        },i*500);
                    });
                },4800);
                $(".fui-arrow").css("z-index","-1");
                $(".app-music").css("z-index","-1");
            }
            else{

                $(".fui-arrow").css("z-index","10000");
                $(".app-music").css("z-index","101");
            }*/
        }
    },
    data:[
        {
            template:'PAGE0',
            bg:ImgDir('/p0/bg.jpg'),
            xtpl:'p0',
            design:function(){
                //var me = this;
                //setTimeout(function(){
                //    me.$el.addClass("focus");
                //    me.$el.find(".c_2").css("opacity","1");
                //    setTimeout(function(){
                //        slider.set("lock",false);
                //        me.$el.find(".tit").addClass("show");
                //        me.$el.find(".fl_1,.fl_2").addClass("rotate");
                //        setTimeout(function(){
                //            $(".fui-arrow").css("z-index","1");
                //        },1000);
                //    },2000);
                //},1000);
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
page_effect(0);
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
function page_effect(page){
    var st_1 = st_2 = st_3 = 0;
    //clearTimeout(st_1);
    //clearTimeout(st_2);
    //clearTimeout(st_3);
    //var list = $(".p"+page).find(".c img");
    //var time = 0;
    //$.each(list,function(i,item){
    //    st_1 = setTimeout(function(){
    //        $(item).addClass("show");
    //    },i*500);
    //    time = i*500;
    //});
    //st_2 = setTimeout(function(){
    //    $(".p"+page+" .line_c .line,.p"+page+" .line_c .pen").addClass("show");
    //},time+300);
    //st_3 = setTimeout(function(){
    //    $(".p"+page+" .line_c .pen").removeClass("show");
    //},time+1100);
    switch(page){
        case 0:
            setTimeout(function(){
                $(".p"+page).addClass("focus");
                //$(".p"+page).find(".c_2").css("opacity","1");
                setTimeout(function(){
                    slider.set("lock",false);
                    //$(".p"+page).find(".tit").addClass("show");
                    //$(".p"+page).find(".fl_1,.fl_2").addClass("rotate");
                    setTimeout(function(){
                        $(".fui-arrow").css("z-index","1");
                    },1000);
                },2000);
            },1000);
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            //setTimeout(function(){
            //    $(".p"+page+" .line_c2 .line,.p"+page+" .line_c2 .pen").addClass("show");
            //},time+1300);
            //setTimeout(function(){
            //    $(".p"+page+" .line_c2 .pen").removeClass("show");
            //},time+2000);
            //break;
        case 5:
            //setTimeout(function(){
            //    var list1 = $(".p"+page).find("img.pro");
            //    $.each(list1,function(i,item){
            //        setTimeout(function(){
            //            $(item).addClass("show");
            //        },i*500);
            //    });
            //},time+1300);
            break;
    }
    if(page==5){
        $(".fui-arrow").css("z-index","-1");
        $(".app-music").css("z-index","-1");
    }
    else{

        $(".fui-arrow").css("z-index","10000");
        $(".app-music").css("z-index","101");
    }
}