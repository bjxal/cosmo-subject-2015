require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.jpg'));
Fui.Template.IMG_DIR = ImgDir();
var p3_id = 0,
    p4_id = 0,
    p5_id = 0,
    p6_id = 0;
var p1List = [
    {
        "width":"750px",
        "height":"870px",
        "content":'<img src="'+ImgDir('/p5/list/1.jpg')+'"/><p class="cur">携手韩国版、香港版《COSMOPOLITAN》杂志三地合力呈现“亚洲美容盛典”。</p>'
    },
    {
        "width":"750px",
        "height":"870px",
        "content":'<img src="'+ImgDir('/p5/list/2.jpg')+'"/><p>《时尚COSMO》美容大奖首办美容艺术展，时尚跨界艺术，使枯燥重复的生活迸发出新的色彩。</p>'
    },
    {
        "width":"750px",
        "height":"870px",
        "content":'<img src="'+ImgDir('/p5/list/3.jpg')+'"/><p>“美丽成就梦想”从追梦人到筑梦者，美丽盛典现场电影回顾《时尚COSMO》20年美丽历程。</p>'
    },
    {
        "width":"750px",
        "height":"870px",
        "content":'<img src="'+ImgDir('/p5/list/4.jpg')+'"/><p>美丽盛典 FOEVER YOUNG 加入台湾版本，由大陆，香港，韩国，台湾四地联合评选，以年轻态度引领时尚。</p>'
    }
];
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
            {
                gesture:"tap",
                name:"pop_show",
                callback:function(e,$tar){
                }
            },
            {
                gesture:"tap",
                name:"share_pop_show",
                callback:function(e,$tar){
                    $(".share_pop").fadeIn();
                    $(".app-music").css("z-index","-1");
                    slider.set("lock",true);
                }
            },
            {
                gesture:"tap",
                name:"share_pop_hide",
                callback:function(e,$tar){
                    $(".share_pop").fadeOut();
                    $(".app-music").css("z-index","101");
                    slider.set("lock",false);
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
                    var num = (guests_list.length)/2;
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
var audio = Fui.Audio({
    src:ImgDir('/music.mp3'),
    color:"#de5a7f",
    autoplay:false
});
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
                $(".bg_top").removeClass("show");
                $(".cover").fadeIn().addClass("focus");
            }
            else{
                $(".bg_top").addClass("show");
            }
            if(page==7){
                $(".fui-arrow").css("z-index","-1");
                $(".share").show().addClass("focus");
                $(".bg_btm").addClass("hide");
            }
            else{
                $(".fui-arrow").css("z-index","10000");
                $(".share").hide().removeClass("focus");
                $(".bg_btm").removeClass("hide");
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
            bg:ImgDir('/p1/1.jpg'),
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
            bg:ImgDir('/p7/bg.png'),
            xtpl: 'p7'
        }
    ]
});
slider.render();
setTimeout(function(){
    $(".cover").addClass("focus");
    audio.play();
},1000);
/*p5*/
var islider1 = new iSlider({
    data: p1List,
    type: "dom",
    dom: document.getElementById("animation-effect"),
    duration: 3000,
    animateType: 'default',
    isAutoplay: false,
    isLooping: true,
    onslideend: function () {
        var list = $("#animation-effect li");
        $.each(list, function (i, item) {
            var id = islider1.sliderIndex;
            $(".name-list span").eq(id).addClass("cur").siblings().removeClass("cur");
            console.log(id)
            var deg_v = $(item).attr("style").split("translateX(")[1].split("px")[0];
            if (deg_v == 0) {
                $(item).find("p").addClass("cur");
            }
            else {
                $(item).find("p").removeClass("cur");
            }
        });
    }
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