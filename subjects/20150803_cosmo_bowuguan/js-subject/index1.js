require("/fliza-ui");
var content = encodeURIComponent('COSMO美妆奇趣博物馆开门啦！'),
    title  = '',
    pic   = ImgDir('/weixin.jpg'),
    url   = '';//encodeURIComponent('http://m.durex.com.cn/qr/1N'),
    back  = encodeURIComponent('http://m.cosmopolitan.com.cn/');
    tourl = '';
//var url = "http://m.onlylady.com/files/eventapi.php?c=EventNew&a=ZST&indexsId=618";
move_m = false;
grade = 0;
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
                name:"goToPage",
                callback:function(e,$tar){
                    var index = $tar.data("index");
                    slider.toPage(index);
                }
            },
            {
                gesture:"tap",
                name:"pop_show",
                callback:function(e,$tar){
                    slider.set("lock",true);
                    var popid = $tar.data("popid");
                }
            },
            {
                gesture:"tap",
                name:"share_pop_show",
                callback:function(e,$tar){
                    $(".share_pop").fadeIn();
                    slider.set("lock",true);
                }
            },
            {
                gesture:"tap",
                name:"share_pop_hide",
                callback:function(e,$tar){
                    $(".share_pop").fadeOut();
                    slider.set("lock",false);
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
            },
            {
                gesture:"tap",
                name:"nav_change",
                callback:function(e,$tar){
                    var index = $tar.data("index") || 0;
                    $tar.addClass("cur").siblings().removeClass("cur");
                    var trans = parseInt(index)*(-25);
                    var $par = $tar.parents(".list_round");
                    $par.find(".con_list")
                        .css({"-webkit-transform":"translate("+trans+"%,0)"});
                    $par.find(".item")
                        .eq(index)
                        .addClass("focus")
                        .siblings()
                        .removeClass("focus");
                }
            },
            {
                gesture:"tap",
                name:"pop_list_show",
                callback:function(e,$tar){
                    //slider.set("lock",true);
                    $tar.next().show();
                }
            },
            {
                gesture:"tap",
                name:"pop_list_hide",
                callback:function(e,$tar){
                    slider.set("lock",false);
                    $tar.parent().hide();
                }
            }
        ]
    }
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
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            var $cur_p = $(".p"+page);
            var $pre_p = $(".p"+(page-1));
            var cur_id = $cur_p.find(".nav .cur").data("index");
            $cur_p.addClass("focus").find(".p"+cur_id).addClass("focus");
            $pre_p.find(".item").removeClass("focus");
            if(page==10){
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
                var aa = this;
                setTimeout(function(){
                    //aa.$el.find(".loadingC").hide();
                    aa.$el.addClass("focus");
                    //audio.play();
                    setTimeout(function(){
                        aa.$el.find(".loadingC").fadeOut();
                        aa.$el.find(".tit").fadeIn().addClass("act");
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
            xtpl:'p3'
        }
        ,{
            template:'PAGE0',
            xtpl:'p5'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p7'
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p9'
        }
        ,{
            template: 'PAGE0',
            bg: ImgDir('/p10/bg.jpg'),
            xtpl: 'p10'
        }
    ]
});
slider.render();
$(".fui-arrow").css("z-index","-1");
$(document).ready(function(){
    $(".show_pop").on("click",function(e){
        var tar = e.target;
        $(tar).next().show();
    });
    $(".close").on("click",function(e){
        var tar = e.target;
        $(tar).parent().hide();
    });
});