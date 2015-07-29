//require("/fliza-ui");
var content = encodeURIComponent('ÃÀ×±²©Îï¹Ý'),
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
                name:"pop_show",
                callback:function(e,$tar){
                    //removeImgList();
                    slider.set("lock",true);
                    var popid = $tar.data("popid");
                    //setImgList(popid);
                    //$(".pop").addClass("show");
                    //myScroll = new iScroll('wrapper',{
                    //    snap: true,
                    //    hScrollbar: false
                    //});
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
    curPage:3,
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
            bg:ImgDir('/p2/bg.jpg'),
            xtpl:'p2'
        }
        ,{
            template:'PAGE0',
            xtpl:'p3',
            design:function(){
                var PAGE_1 = Fui.Template.extend({
                    getGestureItems:function(){
                        return [
                            {
                                gesture:"tap",
                                name:"pop_list_show",
                                callback:function(e,$tar){
                                    imgs.set("lock",true);
                                    var index = $tar.data("index");
                                    $tar.parents(".p").find(".pop_list").show();
                                    pops.toPage(index-1);
                                }
                            },
                            {
                                gesture:"tap",
                                name:"pop_list_hide",
                                callback:function(e,$tar){
                                    imgs.set("lock",false);
                                    $tar.parent().hide();
                                }
                            }
                        ]
                    }
                });
                Fui.Template.regTpl({
                    PAGE_1:PAGE_1
                });
                var $el = this.$el;
                var imgs = window.imgs = new Fui.PageSlider({
                    el:"#p3_list",
                    curPage:0,
                    lock:false,
                    iteration:false,
                    orient:'x',
                    arrow:{},
                    listeners: {
                        slide: function () {
                            var pagex = this.get("curPage");
                            $(".p3").find(".nav_"+(pagex+1)).addClass("cur").siblings().removeClass("cur");
                        }
                    },
                    data:[
                        {
                            template:'PAGE_1',
                            xtpl: 'p3_1',
                            bg:ImgDir('/p3/p1/bg.jpg')
                        },
                        {
                            template:'PAGE_1',
                            xtpl: 'p3_2',
                            bg:ImgDir('/p3/p2/bg.jpg'),
                            design:function(){
                                var $el = this.$el;
                                var pops = window.pops = new Fui.PageSlider({
                                    el:"#p3_pop_list",
                                    curPage:0,
                                    lock:false,
                                    iteration:false,
                                    orient:'x',
                                    arrow:{},
                                    listeners: {
                                        slide: function () {
                                            var pagex = this.get("curPage");
                                            //$(".p3").find(".nav_"+(pagex+1)).addClass("cur").siblings().removeClass("cur");
                                        }
                                    },
                                    data:[
                                        {
                                            template:'PAGE_1',
                                            bg:ImgDir('/p3/p2/poplist/1.png')
                                        },
                                        {
                                            template:'PAGE_1',
                                            bg:ImgDir('/p3/p2/poplist/2.png')
                                        },
                                        {
                                            template:'PAGE_1',
                                            bg:ImgDir('/p3/p2/poplist/3.png')
                                        },
                                        {
                                            template:'PAGE_1',
                                            bg:ImgDir('/p3/p2/poplist/4.png')
                                        },
                                        {
                                            template:'PAGE_1',
                                            bg:ImgDir('/p3/p2/poplist/5.png')
                                        }
                                    ]
                                });
                                setTimeout(function(){pops.render();},1000);
                            }
                        },
                        {
                            template:'PAGE_1',
                            xtpl: 'p3_3',
                            bg:ImgDir('/p3/p3/bg.jpg')
                        },
                        {
                            template:'PAGE_1',
                            xtpl: 'p3_4',
                            bg:ImgDir('/p3/p4/bg.jpg')
                        }
                    ]
                });
                imgs.render();
                setTimeout(function(){},1000);
            }
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p4/bg.jpg'),
            xtpl:'p4'
        }
        ,{
            template:'PAGE0',
            xtpl:'p5',
            design:function(){
                var PAGE_2 = Fui.Template.extend({
                    getGestureItems:function(){
                        return [
                            {
                                gesture:"tap",
                                name:"pop_list_show",
                                callback:function(e,$tar){
                                    imgs2.set("lock",true);
                                    var index = $tar.data("index");
                                    $tar.parents(".p").find(".pop_list").show();
                                    pops2.toPage(index-1);
                                }
                            },
                            {
                                gesture:"tap",
                                name:"pop_list_hide",
                                callback:function(e,$tar){
                                    imgs2.set("lock",false);
                                    $tar.parent().hide();
                                }
                            }
                        ]
                    }
                });
                Fui.Template.regTpl({
                    PAGE_2:PAGE_2
                });
                var $el = this.$el;
                var imgs2 = window.imgs2 = new Fui.PageSlider({
                    el:"#p5_list",
                    curPage:0,
                    lock:false,
                    iteration:false,
                    orient:'x',
                    arrow:{},
                    listeners: {
                        slide: function () {
                            var pagex = this.get("curPage");
                            $(".p5").find(".nav_"+(pagex+1)).addClass("cur").siblings().removeClass("cur");
                        }
                    },
                    data:[
                        {
                            template:'PAGE_2',
                            xtpl: 'p5_1',
                            bg:ImgDir('/p5/p1/bg.jpg')
                        },
                        {
                            template:'PAGE_2',
                            xtpl: 'p5_2',
                            bg:ImgDir('/p5/p2/bg.jpg'),
                            design:function(){
                                var $el = this.$el;
                                var pops2 = window.pops2 = new Fui.PageSlider({
                                    el:"#p5_pop_list",
                                    curPage:0,
                                    lock:false,
                                    iteration:false,
                                    orient:'x',
                                    arrow:{},
                                    listeners: {
                                        slide: function () {
                                            var pagex = this.get("curPage");
                                        }
                                    },
                                    data:[
                                        {
                                            template:'PAGE_2',
                                            bg:ImgDir('/p5/p2/poplist/1.png')
                                        },
                                        {
                                            template:'PAGE_2',
                                            bg:ImgDir('/p5/p2/poplist/2.png')
                                        },
                                        {
                                            template:'PAGE_2',
                                            bg:ImgDir('/p5/p2/poplist/3.png')
                                        },
                                        {
                                            template:'PAGE_2',
                                            bg:ImgDir('/p5/p2/poplist/4.png')
                                        },
                                        {
                                            template:'PAGE_2',
                                            bg:ImgDir('/p5/p2/poplist/5.png')
                                        }
                                    ]
                                });
                                setTimeout(function(){pops2.render();},1000);
                            }
                        },
                        {
                            template:'PAGE_2',
                            xtpl: 'p5_3',
                            bg:ImgDir('/p5/p3/bg.jpg')
                        },
                        {
                            template:'PAGE_2',
                            xtpl: 'p5_4',
                            bg:ImgDir('/p5/p4/bg.jpg')
                        }
                    ]
                });
                imgs2.render();
                setTimeout(function(){},1000);
            }
        }
        , {
            template: 'PAGE0',
            bg:ImgDir('/p4/bg.jpg'),
            xtpl: 'p6'
        }
        , {
            template: 'PAGE0',
            bg:ImgDir('/p6/bg.jpg'),
            xtpl: 'p7'
        }
        , {
            template: 'PAGE0',
            bg:ImgDir('/p8/bg.jpg'),
            xtpl: 'p8'
        }
    ]
});
slider.render();
$(".fui-arrow").css("z-index","-1");
/*
* ,toPage:function(){var e = this,curPage = e.get('curPage'),pageNum = e.get('pageNum'),$ul = e.$ul,orient = e.get('orient'),$secs = $ul.children();e._dotoPage(index);if(index<0) index = pageNum - 1;if(index>pageNum-1) index = 0;if(index == curPage)  return;if(index > curPage){e._doTrans($secs.eq(index),'100%',false);setTimeout(function(){e._doTrans($secs.eq(curPage),'-100%');e._doTrans($secs.eq(index),'0px');},1);}else if(index < curPage){e._doTrans($secs.eq(index),'-100%',false);setTimeout(function(){e._doTrans($secs.eq(curPage),'100%');e._doTrans($secs.eq(index),'0px');},1);}e.set('curPage',index);e.ensureArrow();e.set('prePage',curPage);e.trigger('slide',[index]);e._transitionEnd($secs.eq(index),index);}
* ,_dotoPage:function(index,e){var t = this;var pageNum = t.get('pageNum');for(i=0;i<pageNum-1;i++){var tpl = t.get('data')[i];if(tpl&&tpl.loadResources){tpl.loadResources();}}}
* */