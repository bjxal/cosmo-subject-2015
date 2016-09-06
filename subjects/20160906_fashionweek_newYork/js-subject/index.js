require("/fliza-ui");
move_m = false;
grade = 0;
var p6_id = 0;
Fui.Template.IMG_DIR = ImgDir();
var PAGE0 = Fui.Template.extend({
    config:{
    },
    design:function(){
        $(".fui-arrow").hide();
    }
    ,getGestureItems:function(){
        return[
            {
                gesture:"tap",
                name:"toPage",
                callback:function(e,$tar){
                    e.preventDefault();
                    var id = $tar.data("id")||2;
                    $(".nav div").eq(id-2).addClass("cur").siblings().removeClass("cur");
                    $(".left_nav span").eq(id-2).addClass("cur").siblings().removeClass("cur");
                    setTimeout(function(){slider.toPage(id);},500)
                }
            },
            {
                gesture:"tap",
                name:"p5_pop",
                callback:function(e,$tar){
                    var id = $tar.data("id");
                    slider.set("lock",true);
                    $(".p5 .pop_img").addClass("show").find(".img_p").eq(id).addClass("cur").siblings().removeClass("cur");
                }
            },
            {
                gesture:"tap",
                name:"p5_pop_hide",
                callback:function(e,$tar){
                    slider.set("lock",false);
                    $(".p5 .pop_img").removeClass("show");
                }
            },
            {
                gesture:"tap",
                name:"c-btn-tap-3",
                callback:function(e,$tar){
                    e.preventDefault();
                    var num = (street_list.length)/2;
                    p6_id = ((p6_id+1)<num)?(p6_id+1):0;
                    $tar.parents(".p").find(".item-"+p6_id).addClass("cur zIndex cur_"+p6_id);
                    $tar.parents(".p").find(".list-c-item.cur_"+p6_id).siblings().removeClass("zIndex");
                    setTimeout(function(){
                        $tar.parents(".p").find(".list-c-item.cur_"+p6_id).siblings().removeClass("cur");
                    },600);
                }
            },
            {
                gesture:"tap",
                name:"share_pop_show",
                callback:function(e,$tar){
                    e.preventDefault();
                    $(".share_pop").fadeIn();
                    slider.set("lock","true");
                }
            },
            {
                gesture:"tap",
                name:"share_pop_hide",
                callback:function(e,$tar){
                    e.preventDefault();
                    $(".share_pop").fadeOut();
                    slider.set("lock","false");
                }
            },
            {
                gesture:"tap",
                name:"share_sina",
                callback:function(e,$tar){
                    e.preventDefault();
                    tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
                    tourl = tourl.replace('$title',shareData.tit).replace('$content',shareData.desc).replace('$pic',shareData.imgUrl).replace('$url',shareData.link).replace('$back',shareData.link);
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
                name:"video_change",
                callback:function(e,$tar){
                    var id = $tar.data("id");
                    $(".play").data("id",id);
                    $(".video_tit h2").eq(id).show().siblings().hide();
                    $(".cover_img img").eq(id).addClass("cur").siblings().removeClass("cur");
                    $(".thumb .pop").eq(id).addClass("cur").parents().siblings().find(".pop").removeClass("cur");
                }
            },{
                gesture:"tap",
                name:"video_pop",
                callback:function(e,$tar){
                    var id = $tar.data("id");
                    //var videoUrl = $tar.data("url");
                    var videoUrl = video_list[id]['url'];
                    var ifr_video = '<iframe width="750" height="400" src="'+videoUrl+'" frameborder="0" allowfullscreen=""></iframe>';
                    $(".video_pop .video").html(ifr_video);
                    $(".video_pop").show();
                    //$(".play").data("id",id);
                    //$(".video_tit h2").eq(id).show().siblings().hide();
                    //$(".cover_img img").eq(id).addClass("cur").siblings().removeClass("cur");
                    //$(".thumb .pop").eq(id).addClass("cur").parents().siblings().find(".pop").removeClass("cur");
                }
            }
        ]
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var p2_one = 0, p3_one = 0, p4_one = 0, p5_one = 0, p6_one = 0, p7_one = 0;
var tips = [2,3,4];
var tips_2 = [];
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:false,
    iteration:true,
    orient:'y',
    listeners:{
        slide:function(){
            move_t = false;
            var gesture = slider.event.gesture;
            $(".fui-arrow.right").hide();
            var page = this.get("curPage");
            $(".p"+page).addClass("focus");
            $("body").attr("class","bg_"+page);
            // 每个提示显示一遍 start
            if(tips.indexOf(page)!=-1){
                if(tips_2.indexOf(page)==-1){
                    $(".slide_tips").fadeIn();
                    setTimeout(function(){$(".slide_tips").fadeOut();},900);
                    tips_2.push(page);
                }
                else{
                    $(".slide_tips").fadeOut();
                }
                // 每个提示显示一遍 end
            }
            if(page==2 && p2_one ==0){
                p2_one = 1;
                list.set_news_list();
            }
            if(page==3 && p3_one ==0){
                p3_one = 1;
                list.set_cele_list();
            }
            if(page==4 && p4_one ==0){
                p4_one = 1;
                list.set_runway_list();
            }
            if(page==5 && p5_one ==0){
                p5_one = 1;
                list.set_backstage_list();
            }
            if(page==6 && p6_one ==0){
                p6_one = 1;
                list.set_street_list();
            }
            if(page==7 && p7_one ==0){
                p7_one = 1;
                list.set_video_list();
            }
            if(page==8){
                $(".fui-arrow").css("z-index","-1");
            }
            else{

                $(".fui-arrow").css("z-index","10000");
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
        ,{
            template:'PAGE0',
            xtpl:'p3'
        }
        ,{
            template:'PAGE0',
            xtpl:'p4'
        }
        ,{
            template:'PAGE0',
            xtpl:'p5'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p6'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p7'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p8'
        }
    ]
});
slider.render();

/*set data*/
var list = new LIST();
/*video*/
$(".video_pop .close").bind("touchend",function(e){
    $(".video_pop").fadeOut().find("iframe").remove();
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