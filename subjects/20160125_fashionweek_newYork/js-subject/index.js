require("/fliza-ui");
var content = encodeURIComponent('2016纽约时装周'),
    title  = '',
    pic   = ImgDir('/weixin.jpg'),
    url   = '';//encodeURIComponent('http://m.durex.com.cn/qr/1N'),
    back  = encodeURIComponent('http://m.cosmopolitan.com.cn/');
    tourl = '';
//var url = "http://m.onlylady.com/files/eventapi.php?c=EventNew&a=ZST&indexsId=618";
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
                    var id = $tar.data("id")||1;
                    slider.toPage(id);
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
                    var id = $tar.data("id");
                    //var videoUrl = $tar.data("url");
                    var videoUrl = video_list[id]['video'];
                    var ifr_video = '<iframe width="750" height="400" src="'+videoUrl+'" frameborder="0" allowfullscreen=""></iframe>';
                    $(".video_pop .video").html(ifr_video);
                    $(".video_pop").show();
                    $(".play").data("id",id);
                    $(".video_tit h2").eq(id).show().siblings().hide();
                    $(".cover_img img").eq(id).addClass("cur").siblings().removeClass("cur");
                    $(".thumb .pop").eq(id).addClass("cur").parents().siblings().find(".pop").removeClass("cur");
                }
            }
        ]
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var p3_one = 0;
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
            $("body").attr("class","bg_"+page);
            if(page==1){
                list.set_news_list();
            }
            if(page==2){
                list.set_cele_list();
            }
            if(page==3){
                list.set_runway_list();
            }
            if(page==4){
                list.set_street_list();
            }
            if(page==5){
                list.set_backstage_list();
            }
            if(page==6){
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