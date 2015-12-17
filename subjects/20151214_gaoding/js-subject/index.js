require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.jpg'));
Fui.Template.IMG_DIR = ImgDir();
var p1List = [
    {
        width:750,
        height:1206,
        content:ImgDir('/p7/list/1.jpg')
    },
    {
        width:750,
        height:1206,
        content:ImgDir('/p7/list/2.jpg')
    },
    {
        width:750,
        height:1206,
        content:ImgDir('/p7/list/3.jpg')
    },
    {
        width:750,
        height:1206,
        content:ImgDir('/p7/list/4.jpg')
    },
    {
        width:750,
        height:1206,
        content:ImgDir('/p7/list/5.jpg')
    }
];
var p2_1 = [
    ImgDir('/p2/pop/img/1/1.jpg'),
    ImgDir('/p2/pop/img/1/2.jpg'),
    ImgDir('/p2/pop/img/1/3.jpg'),
    ImgDir('/p2/pop/img/1/4.jpg')
];
var p2_2 = [
    ImgDir('/p2/pop/img/2/1.jpg'),
    ImgDir('/p2/pop/img/2/2.jpg'),
    ImgDir('/p2/pop/img/2/3.jpg'),
    ImgDir('/p2/pop/img/2/4.jpg')
];
var p2_3 = [
    ImgDir('/p2/pop/img/3/1.jpg'),
    ImgDir('/p2/pop/img/3/2.jpg')
];
var p2_4 = [
    ImgDir('/p2/pop/img/4/1.jpg'),
    ImgDir('/p2/pop/img/4/2.jpg')
];
var p2_5 = [
    ImgDir('/p2/pop/img/5/1.jpg'),
    ImgDir('/p2/pop/img/5/2.jpg'),
    ImgDir('/p2/pop/img/5/3.jpg'),
    ImgDir('/p2/pop/img/5/4.jpg'),
    ImgDir('/p2/pop/img/5/5.jpg')
];
var p5 = [
    ImgDir('/p5/pop/1.png'),
    ImgDir('/p5/pop/2.png'),
    ImgDir('/p5/pop/3.png'),
    ImgDir('/p5/pop/4.png'),
    ImgDir('/p5/pop/5.png')
];
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
            {
                gesture:"rightSwipe",
                name:"unlock",
                callback:function(e,$tar){
                    $(".p1 .lock_pop").fadeOut();
                    $(".p1 .unlock").addClass("lock");
                }
            },
            {
                gesture:"tap",
                name:"pop_show",
                callback:function(e,$tar){
                    slider.set("lock",true);
                    var popid = $tar.data("popid");
                    setImgList(popid);
                    $(".pop_p2").addClass("show");
                    myScroll = new iScroll('wrapper',{
                        snap: true,
                        hScrollbar: false
                    });
                }
            },
            {
                gesture:"tap",
                name:"show_step",
                callback:function(e,$tar){
                    var id = $tar.data("id");
                    $tar.parents(".p").find(".stepC").removeClass("round");
                    $tar.parents(".p").find(".popC").fadeIn().find(".pop_"+id).show().siblings(".s_pop").hide();
                }
            },
            {
                gesture:"tap",
                name:"hide_step",
                callback:function(e,$tar){
                    $(".p4 .popC").fadeOut();
                    $tar.parents(".p").find(".stepC").addClass("round");
                }
            },
            {
                gesture:"tap",
                name:"show_pro",
                callback:function(e,$tar){
                    var id = $tar.data("popid");
                    console.log(id);
                    $(".p5_pop").addClass("show");
                    var arr = $(".p5_pop").find("li").length;
                    $("#scroller_p5").css("width",arr*600+"px");
                    myScroll2 = new iScroll('wrapper_p5', {
                        snap: true,
                        momentum: false,
                        hScrollbar: false
                    });
                    myScroll2.scrollToElement('li:nth-child('+id+')', 100)
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
var num_p = 0;
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:6,
    //lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==3){
                $(".p3_quest").addClass("show");
                myScroll1 = new iScroll('wrapper_p3', {
                    checkDOMChanges: true,
                    scrollbarClass: 'myScrollbar',
                    onScrollEnd:function(){
                        if(myScroll1.y<=myScroll1.maxScrollY){
                            if(num_p>0){
                                $(".p3_quest").addClass("hide");
                                slider.next();
                                num_p = 0;
                                myScroll1.destroy();
                            }
                            else{
                                num_p=1;
                            }
                        }
                    }
                });
                $("#wrapper_p3").show();
            }
            if(page==4 || page==2){
                $(".p3_quest").removeClass("show hide");
            }
            if(page==4){
                setTimeout(function(){
                    $(".p4 .stepC").addClass("round");
                },1000);
            }

            if(page==9){
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
            bg:ImgDir('/p0/bg.jpg'),
            xtpl:'p0',
            design:function(){}
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
            bg:ImgDir('/p3/bg.jpg'),
            xtpl: 'p3'
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
        ,{
            template: 'PAGE0',
            bg:ImgDir('/p6/bg.jpg'),
            xtpl: 'p6'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p7'
        }
        ,{
            template: 'PAGE0',
            bg:ImgDir('/p8/bg.jpg'),
            xtpl: 'p8'
        }
        ,{
            template: 'PAGE0',
            bg:ImgDir('/p9/bg.jpg'),
            xtpl: 'p9'
        }
    ]
});
slider.render();
/*p5*/
var islider1 = new iSlider({
    data: p1List,
    //type: "image",
    dom: document.getElementById("animation-effect"),
    duration: 3000,
    animateType: 'default',
    isAutoplay: false,
    isLooping: true,
    onslideend: function () {
        var list = $("#animation-effect li");
        $.each(list, function (i, item) {
            var id = islider1.sliderIndex;
        });
    }
});
$(".p2 .close").bind("touchend",function(e){
    var tar = e.target;
    removeImgList(myScroll);
    slider.set("lock",false);
    $(tar).parent().removeClass("show");
});
$(".p5_pop .close").bind("touchend",function(e){
    var tar = e.target;
    $(tar).parent().removeClass("show");
});

function removeImgList(myScroll){
    myScroll.destroy();
    $("#thelist").empty();
}
function setImgList(id){
    var arr = p1List;
    switch (id){
        case 1:
            arr = p2_1;
            break;
        case 2:
            arr = p2_2;
            break;
        case 3:
            arr = p2_3;
            break;
        case 4:
            arr = p2_4;
            break;
        case 5:
            arr = p2_5;
            break;
    }
    $.each(arr,function(i,item){
        var li1 = '<li><img src="'+item+'"/></li>';
        $("#thelist").append(li1);
    });
    $(".pop_p2 .p_t").find("img").attr("src",ImgDir('/p2/pop/tit/'+id+'.png'));
    $("#scroller").css("width",arr.length*630+"px");
}
//weixin share
//var wx_url = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=Cosmom_Jssdk&type=json&url='"+String(window.location.href)+"'";
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