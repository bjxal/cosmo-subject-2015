var picList = [
    {
        width: 750,
        height: 207,
        content: ImgDir('/p4/1.jpg')
    },
    {
        width: 750,
        height: 207,
        content: ImgDir('/p4/2.jpg')
    },
    {
        width: 750,
        height: 207,
        content: ImgDir('/p4/3.jpg')
    }
];
var p2List = [
    {
        width:346,
        height:672,
        content: ImgDir('/p2/list/1.png')
    },
    {
        width:340,
        height:260,
        content: ImgDir('/p2/list/2.png')
    },
    {
        width:286,
        height:590,
        content: ImgDir('/p2/list/3.png')
    }
]
var content = encodeURIComponent('喜欢就分享吧  开启你的时髦人生'),
    title  = '',
    pic   = ImgDir('/weixin.jpg'),
    url   = '';//encodeURIComponent('http://m.durex.com.cn/qr/1N'),
    back  = encodeURIComponent('http://m.cosmopolitan.com.cn/');
    tourl = '';
//var url = "http://m.onlylady.com/files/eventapi.php?c=EventNew&a=ZST&indexsId=618";
move_m = false;
grade = 0;
audio = Fui.Audio({
    src:ImgDir('/music.mp3'),
    color:"white",
    autoplay:true
});
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
                name:"p3_prev",
                callback:function(e,$tar){
                    var tid = $tar.parent().find(".top img.act").data("nextid");//获取id值
                    //var bid = $tar.parent().find(".btm img.act").data("id");//获取id值
                    tid = tid?tid-1:0;
                    $(".p3 .top img").eq(tid).addClass("act").siblings().removeClass("act");
                    $(".p3 .btm img").eq(tid).addClass("act").siblings().removeClass("act");
                }
            },
            {
                gesture:"tap",
                name:"share_pop_show",
                callback:function(e,$tar){
                    $(".share_pop").fadeIn();
                    slider.set("lock","true");
                }
            },
            {
                gesture:"tap",
                name:"share_pop_hide",
                callback:function(e,$tar){
                    $(".share_pop").fadeOut();
                    slider.set("lock","false");
                }
            },
            {
                gesture:"tap",
                name:"share_sina",
                callback:function(e,$tar){
                    tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
                    tourl = tourl.replace('$title',title).replace('$content',content).replace('$pic',pic).replace('$url',url).replace('$back',back);
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
                name:"video_pop",
                callback:function(e,$tar){
                    audio.pause();
                    $(".app-music").css("z-index","-1");
                    var src1 = $tar.data("videosrc");
                    new Fui.Popup().video('youku',{vid:src1});
                    console.log(src1)
                    //var iframe_d = '<iframe height="390px" width="100%" src="'+src1+'" frameborder=0 allowfullscreen></iframe>';
                    //$(".video_pop").append(iframe_d).fadeIn();
                }
            }
        ]
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:false,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            move_t = false;
            var gesture = slider.event.gesture;
            $(".fui-arrow.right").hide();
            var page = this.get("curPage");
            $(".p"+page).addClass("focus");
            if(page==6){
                $(".fui-arrow").css("z-index","-1");
                $(".app-music").css("z-index","-1");
            }
            else{

                $(".fui-arrow").css("z-index","10000");
                $(".app-music").css("z-index","101");
            }
            if(page==4){
                var cname = $(".p4 .tips").attr("class");
                if(cname.indexOf("hide")==-1){
                    $(".p4 .tips").fadeIn();
                    setTimeout(function(){$(".p4 .tips").fadeOut().addClass("hide");},1000);
                }
            }
            else{
                $(".p4 .tips").hide();
            }
        }
    },
    data:[
        {
            template:'PAGE0',
            xtpl:'p0',
            design:function(){
                var aa = this;
                setTimeout(function(){
                    aa.$el.addClass("focus");
                    setTimeout(function(){
                        aa.$el.find(".loading").fadeOut();
                        aa.$el.find(".actBox").addClass("show");
                    },3000);
                    setTimeout(function(){
                        aa.$el.find(".tableCell").addClass("show");
                        $(".fui-arrow").css("z-index","10000");
                        slider.set("lock","false");
                    },4000);
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
        ,{
            template:'PAGE0',
            bg:ImgDir('/p3/bg.jpg'),
            xtpl:'p3'
        }
        ,{
            template:'PAGE0',
            xtpl:'p4'
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p5/bg.jpg'),
            xtpl:'p5'
        }
        , {
            template: 'PAGE0',
            bg:ImgDir('/p6/bg.jpg'),
            xtpl: 'p6'
        }
    ]
});
slider.render();
$(".fui-arrow").css("z-index","-1");
//p2
var islider2 = new iSlider({
    data: p2List,
    dom: document.getElementById("animation-effect1"),
    duration: 3000,
    animateType: 'depth',
    isAutoplay: false,
    isLooping: true,
    onslideend:function(){
    }
     //isVertical: true// 是否垂直滚动
});
//p4
var islider1 = new iSlider({
    data: picList,
    dom: document.getElementById("animation-effect"),
    duration: 3000,
    animateType: 'rotate',
    isAutoplay: false,
    isLooping: true,
     //isVertical: true// 是否垂直滚动
});
//cover
$(".cover").on("touchend",function(e){
    $(".cover").fadeOut();
});
$(".close_i").bind("touchend",function(e){
    audio.play();
    $(".video_pop").fadeOut().find("iframe").remove();
    $(".app-music").css("z-index","100");
});
function share( type ){
    var content = encodeURIComponent(' #一次抢光光# 我抢了'+_gameScore+'件'),
        title  = '',
        pic   = encodeURIComponent('http://new-icon.cosmochina.com.cn/h5/hicosmo-game/img/weixin.jpg'),
        url   = '';//encodeURIComponent('http://m.durex.com.cn/qr/1N'),
        back  = encodeURIComponent('http://m.cosmopolitan.com.cn/');
    var tourl = '';
    switch( type ){
        case 'sina':
            tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
            break;
        case 'zone':
            tourl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=$title&summary=$content&url=$url&pic=$pic';
            break;
    }
    tourl = tourl.replace('$title',title).replace('$content',content).replace('$pic',pic).replace('$url',url).replace('$back',back);
    window.open(tourl,'_blank');
}