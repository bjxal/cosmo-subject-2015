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
        $.each(guests_list,function(i,item){
            var id = i%2+1;
            var lf_html = me.guests_html(item,i);
            $(".p3 .list-c-"+id).append(lf_html);
        });
    },
    guests_html:function(obj,i){
        var c = document.createElement("div");
        var cname = (i<2)?"cur":"";
        //c.className = (i==0)?"list-c-item cur":"list-c-item";
        c.className = "list-c-item item-"+Math.floor(i/2)+" "+cname;

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
        $.each(icon_list,function(i,item){
            var id = i%4+1;
            var icon_html = me.icon_html(item,i);
            $(".p4 .list-c-"+id).append(icon_html);
        });
    },
    icon_html:function(obj,i){
        var cname = (i<4)?"cur":"";
        var c = document.createElement("div");
        c.className = "item-c item-"+Math.floor(i/4)+" "+cname;

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
    set_moment_list:function(){
        var me = this;
        $.each(moment_list,function(i,item){
            var id = i%5+1;
            var moment_html = me.moment_html(item,i);
            $(".p5 .list-c-"+id).append(moment_html);
        });
    },
    moment_html:function(obj,i){
        var cname = (i<5)?"cur":"";
        var c = document.createElement("img");
        c.src = obj.imgUrl;
        c.className = "item-c item-"+Math.floor(i/5)+" "+cname;

        return c;
    },
    set_team_list:function(){
        var me = this;
        $.each(team_list,function(i,item){
            var id = i%12+1;
            var team_html = me.team_html(item,i);
            $(".p6 .list-c-"+id).append(team_html);
        });
    },
    team_html:function(obj,i){
        /*
        *  <div class="list-item item-1">
         <img data-src="{{IMG_DIR}}/p6/list/11.jpg"/>
         <div class="name"><p><span>Aaria arredondo</span></p></div>
         </div>
         */
        var cname = (i<12)?"cur":"";
        var c = document.createElement("div");
        c.className = "list-item item-"+Math.floor(i/12)+" "+cname;
        c.innerHTML = '<img src="'+obj.imgUrl+'"/><div class="name"><p><span>'+obj.name+'</span></p></div>';

        return c;
    }
};
Fui.Template.IMG_DIR = ImgDir();
var p3_id = 0,
    p4_id = 0,
    p5_id = 0,
    p6_id = 0;
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){
        return[
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
                $(".cover").fadeIn().addClass("focus");
                $(".bg_lf").removeClass("width_308");
            }
            else if(page==8){
                $(".fui-arrow").removeClass("down");
                $(".bg_lf").removeClass("width_308");
                $(".share").show().addClass("focus");
            }
            else{
                $(".fui-arrow").addClass("down");
                $(".share").hide().removeClass("focus");
                $(".bg_lf").addClass("width_308");
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
        ,{
            template: 'PAGE0',
            xtpl: 'p8'
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
/*set moment_list*/
list_fun.set_moment_list();
/*set team_list*/
list_fun.set_team_list();
//list_fun
$(".cover_scanning").on("touchend",function(e){
    $(e.target).addClass("cur").find(".scan_line").hide();
    setTimeout(function(){
        slider.next();
        $(".bg_lf").addClass("width_308");
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