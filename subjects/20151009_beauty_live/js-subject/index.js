require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.jpg'));
LIST = function(){}
LIST.prototype = {
    set_watch_list:function(){
        var islider1 = new iSlider({
            data: watch_list,
            type:"dom",
            dom: document.getElementById("animation-effect"),
            duration: 3000,
            animateType: 'rotate',
            isAutoplay: false,
            isLooping: true,
            onslideend:function(){
                var list = $("#animation-effect li");
                $.each(list,function(i,item){
                    var deg_v = $(item).attr("style").split("rotateY(")[1].split("deg")[0];
                    if(deg_v==0){
                        $(item).find(".word").addClass("cur");
                    }
                    else{
                        $(item).find(".word").removeClass("cur");
                    }
                });
            }
            //isVertical: true// 是否垂直滚动
        });
    },
    set_star_list:function(){
        var islider2 = new iSlider({
            data: star_list,
            //type:'dom',
            dom: document.getElementById("animation-effect-2"),
            duration: 3000,
            animateType: 'flow',
            isAutoplay: false,
            isLooping: true,
            onslideend:function(){
                var id = islider2.slideIndex;
                $(".p2 .name-list p").eq(id).addClass("cur").siblings().removeClass("cur");

            }
            //isVertical: true// 是否垂直滚动
        });
    },
    set_guests_list:function(){
        var me = this;
        /*lf*/
        $.each(guests_list_lf,function(i,item){
            var lf_html = me.guests_html(item,i);
            $(".p3 .list-c-lf").append(lf_html);
        });
        /*rt*/
        $.each(guests_list_rt,function(i,item){
            var rt_html = me.guests_html(item,i);
            $(".p3 .list-c-rt").append(rt_html);
        });
    },
    guests_html:function(obj,i){
        var c = document.createElement("div");
        c.className = (i==0)?"list-c-item cur":"list-c-item";

        var c_img = document.createElement("img");
        c_img.src = obj.imgUrl;
        c.appendChild(c_img);

        var c_name = document.createElement("div");
        c_name.innerHTML = obj.name;
        c.appendChild(c_name);

        return c;
    },
    set_icon_list:function(){
        var me = this;
        $.each(icon_list_lf,function(i,item){
            var id = i%4+1;
            var icon_html = me.icon_html(item,i);
            $(".list-c-"+id).append(icon_html);
        });
    },
    icon_html:function(obj,i){
        var id = i%4;
        var c = document.createElement("div");
        c.className = "item-"+id+"-"+(id%4);

        var c_avt = document.createElement("div");
        c_avt.className = "c-avt";
        c_avt.innerHTML = '<img src="'+obj.imgUrl+'"/>';
        c.appendChild(c_avt);

        var c_info = document.createElement("div");
        c_info.className = "c-info";
        c_info.innerHTML = '<h2>'+obj.name+'</h2><p>'+obj.info+'</p>';
        c.appendChild(c_info);

        var c_line = document.createElement("div");
        c_line.className = "c-line";
        c_line.innerHTML = '<span class="line_1"></span><span class="line_2"></span>';
        c.appendChild(c_line);

        return c;

    },
    set_moment_list:function(){},
    set_team_list:function(){}
};
Fui.Template.IMG_DIR = ImgDir();
var rf_id = 0;
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
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
                name:"refresh_list",
                callback:function(e,$tar){
                    var $par_lf = $tar.parents(".p").find(".list-c-lf");
                    var $par_rt = $tar.parents(".p").find(".list-c-rt");
                    rf_id = ((rf_id+1)>=$par_lf.find(".list-c-item").length)?0:(rf_id+1);
                    $par_lf.find(".list-c-item").eq(rf_id).addClass("cur zIndex cur_"+rf_id);
                    $par_rt.find(".list-c-item").eq(rf_id).addClass("cur zIndex cur_"+rf_id);
                    $par_lf.find(".list-c-item.cur_"+rf_id).siblings().removeClass("zIndex");
                    $par_rt.find(".list-c-item.cur_"+rf_id).siblings().removeClass("zIndex");
                    setTimeout(function(){
                        $par_lf.find(".list-c-item.cur_"+rf_id).siblings().removeClass("cur");
                        $par_rt.find(".list-c-item.cur_"+rf_id).siblings().removeClass("cur");
                    },500)
                }
            },
            {
                gesture:"tap",
                name:"c-btn-tap",
                callback:function(e,$tar){
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
    curPage:4,
    //lock:true,
    iteration:true,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==0){
                $(".cover").fadeIn().addClass("focus");
            }
            if(page==7){
                $(".fui-arrow").css("z-index","-1");
                $(".share").show().addClass("focus");
            }
            else{
                $(".fui-arrow").css("z-index","10000");
                $(".share").hide().removeClass("focus");
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
    ]
});
slider.render();
setTimeout(function(){$(".cover").addClass("focus");},1000);
$(".fui-arrow").removeClass("down");
var list_fun = new LIST();
/*set watch_list*/
list_fun.set_watch_list();
/*set star_list*/
list_fun.set_star_list();
/*set guests_list*/
list_fun.set_guests_list();
/*set icon_list*/
list_fun.set_icon_list();
//list_fun
$(".cover_scanning").on("touchend",function(e){
    $(e.target).addClass("cur").find(".scan_line").hide();
    setTimeout(function(){
        slider.slide(1);
        $(".cover").fadeOut(500);
    },1000);
});
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