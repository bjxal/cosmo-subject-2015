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
                    slider.slide(index);
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
                    imgs.slide(index);
                }
            },
            {
                gesture:"tap",
                name:"nav_change2",
                callback:function(e,$tar){
                    var index = $tar.data("index") || 0;
                    $tar.addClass("cur").siblings().removeClass("cur");
                    imgs2.slide(index);
                }
            },
            {
                gesture:"tap",
                name:"nav_change3",
                callback:function(e,$tar){
                    var index = $tar.data("index") || 0;
                    $tar.addClass("cur").siblings().removeClass("cur");
                    imgs3.slide(index);
                }
            },
            {
                gesture:"tap",
                name:"nav_change4",
                callback:function(e,$tar){
                    var index = $tar.data("index") || 0;
                    $tar.addClass("cur").siblings().removeClass("cur");
                    imgs4.slide(index);
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
            $(".p"+page).addClass("focus");
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
                    //$(".fui-arrow").css("z-index","1");
                    //setTimeout(function(){
                    //    aa.$el.find(".loading").fadeOut();
                    //    aa.$el.find(".actBox").addClass("show");
                    //},3000);
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
            xtpl:'p3',
            bg:ImgDir('/p3/p1/bg.jpg')
        }
        ,{
            template:'PAGE0',
            xtpl:'p5',
            bg:ImgDir('/p5/p1/bg.jpg')
        }
        , {
            template: 'PAGE0',
            xtpl: 'p7',
            bg:ImgDir('/p7/p1/bg.jpg'),
            design: function(){
                var PAGE_3 = Fui.Template.extend({
                    getGestureItems:function(){
                        return [
                            {
                                gesture:"tap",
                                name:"pop_list_show",
                                callback:function(e,$tar){
                                    imgs3.set("lock",true);
                                    $tar.next().show();
                                }
                            },
                            {
                                gesture:"tap",
                                name:"pop_list_hide",
                                callback:function(e,$tar){
                                    imgs3.set("lock",false);
                                    $tar.parent().hide();
                                }
                            }
                        ]
                    }
                });
                Fui.Template.regTpl({
                    PAGE_3:PAGE_3
                });
                var $el = this.$el;
                var imgs3 = this.imgs3 = new Fui.PageSlider({
                    el:"#p7_list",
                    curPage:0,
                    lock:false,
                    iteration:false,
                    orient:'x',
                    arrow:{},
                    listeners: {
                        slide: function () {
                            var pagex = this.get("curPage");
                            $(".p4").find(".nav_"+(pagex+1)).addClass("cur").siblings().removeClass("cur");
                            if(pagex==1){
                                $(".p4 .nav").css("height","303px");
                            }
                            else{
                                $(".p4 .nav").css("height","40%");
                            }
                        }
                    },
                    data:[
                        {
                            template:'PAGE0',
                            xtpl: 'p7_1',
                            bg:ImgDir('/p7/p1/bg.jpg')
                        },
                        {
                            template:'PAGE0',
                            xtpl: 'p7_2',
                            bg:ImgDir('/p7/p2/bg1.jpg')
                        },
                        {
                            template:'PAGE0',
                            xtpl: 'p7_3',
                            bg:ImgDir('/p7/p3/bg.jpg')
                        },
                        {
                            template:'PAGE0',
                            xtpl: 'p7_4',
                            bg:ImgDir('/p7/p4/bg.jpg')
                        }
                    ]
                });
                setTimeout(function(){imgs3.render();},700);
            }
        }
        ,{
            template: 'PAGE0',
            xtpl: 'p9',
            bg:ImgDir('/p9/p1/bg.jpg'),
            design: function(){
                var PAGE_4 = Fui.Template.extend({
                    getGestureItems:function(){
                        return [
                            {
                                gesture:"tap",
                                name:"pop_list_show",
                                callback:function(e,$tar){
                                    imgs4.set("lock",true);
                                    $tar.next().show();
                                }
                            },
                            {
                                gesture:"tap",
                                name:"pop_list_hide",
                                callback:function(e,$tar){
                                    imgs4.set("lock",false);
                                    $tar.parent().hide();
                                }
                            }
                        ]
                    }
                });
                Fui.Template.regTpl({
                    PAGE_4:PAGE_4
                });
                var $el = this.$el;
                var imgs4 = this.imgs4 = new Fui.PageSlider({
                    el:"#p9_list",
                    curPage:0,
                    lock:false,
                    iteration:false,
                    orient:'x',
                    arrow:{},
                    listeners: {
                        slide: function () {
                            var pagex = this.get("curPage");
                            $(".p5").find(".nav_"+(pagex+1)).addClass("cur").siblings().removeClass("cur");
                            if(pagex==1){
                                $(".p5 .nav").css("height","303px");
                            }
                            else{
                                $(".p5 .nav").css("height","40%");
                            }
                        }
                    },
                    data:[
                        {
                            template:'PAGE0',
                            xtpl: 'p9_1',
                            bg:ImgDir('/p9/p1/bg.jpg')
                        },
                        {
                            template:'PAGE0',
                            xtpl: 'p9_2',
                            bg:ImgDir('/p9/p2/bg1.jpg')
                        },
                        {
                            template:'PAGE0',
                            xtpl: 'p9_3',
                            bg:ImgDir('/p9/p3/bg.jpg')
                        },
                        {
                            template:'PAGE0',
                            xtpl: 'p9_4',
                            bg:ImgDir('/p9/p4/bg.jpg')
                        }
                    ]
                });
                setTimeout(function(){imgs4.render();},900);
            }
        }
        ,{
            template: 'PAGE0',
            bg: ImgDir('/p10/bg.jpg'),
            xtpl: 'p10'
        }
    ]
});
slider.render();
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