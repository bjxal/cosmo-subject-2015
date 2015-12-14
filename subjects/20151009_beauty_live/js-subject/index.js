require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.png'));
Fui.Template.IMG_DIR = ImgDir();
var p3_id = 0,
    p4_id = 0,
    p5_id = 0,
    p6_id = 0;
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
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
            },
            {
                gesture:"tap",
                name:"check_in",
                callback:function(e,$tar){
                    $tar.addClass("cur");
                }
            },
            {
                gesture:"tap",
                name:"c-btn-tap-3",
                callback:function(e,$tar){
                    var num = (guest_list.length)/2;
                    p3_id = ((p3_id+1)<num)?(p3_id+1):0;
                    $tar.parents(".p").find(".item-"+p3_id).addClass("cur zIndex cur_"+p3_id);
                    $tar.parents(".p").find(".list-c-item.cur_"+p3_id).siblings().removeClass("zIndex");
                    setTimeout(function(){
                        $tar.parents(".p").find(".list-c-item.cur_"+p3_id).siblings().removeClass("cur");
                    },500);
                }
            },
            {
                gesture:"tap",
                name:"c-btn-tap-4",
                callback:function(e,$tar){
                    var num = (icon_list.length)/4;
                    p4_id = ((p4_id+1)<num)?(p4_id+1):0;
                    $tar.parents(".p").find(".item-"+p4_id).addClass("cur").siblings().removeClass("cur");
                }
            },
            {
                gesture:"tap",
                name:"c-btn-tap-5",
                callback:function(e,$tar){
                    var num = (moment_list.length)/5;
                    p5_id = ((p5_id+1)<num)?(p5_id+1):0;
                    $tar.parents(".p").find(".item-"+p5_id).addClass("cur").siblings().removeClass("cur");
                }
            },
            {
                gesture:"tap",
                name:"c-btn-tap-6",
                callback:function(e,$tar){
                    var num = (team_list.length)/12;
                    p6_id = ((p6_id+1)<num)?(p6_id+1):0;
                    $tar.parents(".p").find(".item-"+p6_id).addClass("cur").siblings().removeClass("cur");
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
    curPage:7,
    //lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==0){
                $(".cover").fadeIn().addClass("focus");
                $(".bg_lf").removeClass("width_308");
            }
            else if(page==8){
                $(".fui-arrow").removeClass("down");
                $(".bg_lf").removeClass("width_308");
                $(".share").show().addClass("focus");
            }
            else{
                $(".fui-arrow").addClass("down");
                $(".share").hide().removeClass("focus");
                $(".bg_lf").addClass("width_308");
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
        ,{
            template: 'PAGE0',
            xtpl: 'p8'
        }
    ]
});
slider.render();
setTimeout(function(){$(".cover").addClass("focus");},1000);
$(".fui-arrow").removeClass("down");
$(".cover_scanning").on("touchend",function(e){
    $(e.target).addClass("cur").find(".scan_line").hide();
    setTimeout(function(){
        slider.next();
        $(".bg_lf").addClass("width_308");
        $(".cover").fadeOut(500);
    },1000);
    setTimeout(function(){
        $(e.target).removeClass("cur").find(".scan_line").show();
    },2000);
});


/*set data*/
var list = new LIST();
/*bendi*/
list.set_watch_list();
list.set_star_list();
list.set_guests_list();
list.set_icon_list();
list.set_moment_list();
list.set_team_list();

/*xianshang*/
//ajax_url(613,live_fun);
//ajax_url(614,star_fun);
//ajax_url(615,guest_fun);
//ajax_url(616,icon_fun);
//ajax_url(617,moment_fun);
//ajax_url(618,team_fun);

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