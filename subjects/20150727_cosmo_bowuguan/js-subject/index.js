var p1List = [
    ImgDir('/p3/p2/poplist/1.png'),
    ImgDir('/p3/p2/poplist/2.png'),
    ImgDir('/p3/p2/poplist/3.png'),
    ImgDir('/p3/p2/poplist/4.png'),
    ImgDir('/p3/p2/poplist/5.png')
];
var p2List = [
    ImgDir('/p2/list/1.jpg'),
    ImgDir('/p2/list/2.jpg'),
    ImgDir('/p2/list/3.jpg'),
    ImgDir('/p2/list/4.jpg')
];
var p3List = [
    ImgDir('/p3/list/1.jpg'),
    ImgDir('/p3/list/2.jpg')
];
var p4List = [
    ImgDir('/p4/list/1.jpg'),
    ImgDir('/p4/list/2.jpg')
];
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
            //bg:ImgDir('/p3/bg.jpg'),
            xtpl:'p3',
            design:function(){
                var $el = this.$el;
                var PAGE_1 = Fui.Template.extend({
                    getGestureItems:function(){
                        return [
                            {
                                gesture:"tap",
                                name:"pop_show",
                                callback:function(e,$tar){
                                    //removeImgList();
                                    imgs.set("lock",true);
                                    var popid = $tar.data("index");
                                    setImgList(popid);
                                    $(".pop_list").show();
                                    myScroll = new iScroll('wrapper',{
                                        snap: true,
                                        hScrollbar: false
                                    });
                                }
                            },
                            {
                                gesture:"tap",
                                name:"pop_list_show",
                                callback:function(e,$tar){
                                    imgs.set("lock",true);
                                    var index = $tar.data("index");
                                    $tar.parents(".p").find(".pop_list").show();
                                    pops.slide(index-1);
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
                var imgs = this.imgs = new Fui.PageSlider({
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
                            bg:ImgDir('/p3/p2/bg.jpg')
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
            bg:ImgDir('/p7/bg.jpg'),
            xtpl:'p4'
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p5/bg.jpg'),
            xtpl:'p5'
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

$(".close").bind("touchend",function(e){
    var tar = e.target;
    removeImgList(myScroll);
    slider.set("lock",false);
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
            arr = p1List;
            break;
        case 2:
            arr = p2List;
            break;
        case 3:
            arr = p3List;
            break;
        case 4:
            arr = p4List;
            break;
    }
    $.each(arr,function(i,item){
        var li1 = '<li><img src="'+item+'"/></li>';
        $("#thelist").append(li1);
    });
    $("#scroller").css("width",arr.length*540+"px");
}