/*set data*/
LIST = function(){}
LIST.prototype = {
    set_news_list:function(){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news'), news_list, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'rotate',
            onslidechanged:function() {
                //var $list = $("#iSlider-wrapper-news li");
                $list.find(".word").removeClass("cur").parents().find(".islider-active").find(".word").addClass("cur");
            }
        });
        var $list = $("#iSlider-wrapper-news li");
        $list.eq(1).find(".word").addClass("cur");
    },
    set_cele_list:function(){
        var me = this;
        var S2 = new iSlider(document.getElementById('iSlider-wrapper-cele'), cele_list, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            //animateType: 'flow',
            onslideend:function(){
                $list.find(".word").removeClass("cur");
            },
            onslidechanged:function() {
                setTimeout(function(){
                    $list.find(".word").parents().find(".islider-active").find(".word").addClass("cur");
                },100)
            }
        });
        var $list = $("#iSlider-wrapper-cele li");
        $list.eq(1).find(".word").addClass("cur");
    },
    set_runway_list:function(){
        var me = this;
        var S2 = new iSlider(document.getElementById('iSlider-wrapper-runway'), runway_list, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'flow',
            onslideend:function(){
                $list.find(".word").removeClass("cur");
            },
            onslidechanged:function() {
                setTimeout(function(){
                    $list.find(".word").parents().find(".islider-active").find(".word").addClass("cur");
                },100)
            }
        });
        var $list = $("#iSlider-wrapper-runway li");
        $list.eq(1).find(".word").addClass("cur");
    },
    set_street_list:function(){
        var me = this;
        /*lf*/
        var name = "";
        $.each(street_list,function(i,item){
            var id = i%2+1;
            var cname = (i==0)?"cur":"";
            var lf_html = me.street_html(item,i);
            $(".p6 .list-c-"+id).append(lf_html);
            name += '<p class="'+cname+'">'+item.title+'</p>';
        });
    },
    street_html:function(obj,i){
        //var c = document.createElement("div");
        var c_n = (i<2)?"cur":"";
        var cname = "list-c-item item-"+Math.floor(i/2)+" "+c_n;
        var c = '<div class="'+cname+'"><div class="img_s"></div><img src="'+obj.pic+'"><div class="name"><h2>'+obj.title+'</h2><p>'+obj.digest+'</p></div></div>';
        return c;
    },
    set_backstage_list:function(){
        var me = this;
        $.each(backstage_list,function(i,item){
            var id = i+1;
            var backstage_html = me.backstage_html(item,i);
            $(".p5 .pop_c .item_"+id+" .avt_c").append(backstage_html);
            var pop_html = me.backstage_pop_html(item,i);
            $(".p5 .img_c").append(pop_html);
        });
        me.backstage_bind_click();
    },
    backstage_html:function(obj,i,id){
        i++;
        var c = '<img src="'+obj.pic+'" data-id="'+i+'"><div class="name">'+obj.name+'</div>';
        return c;
    },
    backstage_pop_html:function(obj,i){
        var c = '<div class="img_p"><img src="'+obj.pic+'"/><div class="img_s"></div><div class="img_w"><h2>'+obj.title+'</h2><p>'+obj.digest+'</p></div></div>';
        return c;
    },
    backstage_bind_click:function(){
        $(".p5 .pop_c .item img").click(function(e){
            var $tar = $(e.target);
            var index = $tar.data("id")-1;
            $(".p5 .pop_img").addClass("show").find(".img_p").eq(index).addClass("cur").siblings().removeClass("cur");
        });
        $(".p5_close").click(function(e){
            $(".p5 .pop_img").removeClass("show");
        });
    },
    set_video_list:function(){
        var me = this;
        $.each(video_list,function(i,item){
            $(".p7 .video_tit h2").eq(i).html(item.title);
            $(".p7 .cover_img img").eq(i).attr("src",item.pic);
            $(".p7 .thumb img").eq(i).attr("src",item.pic);
        });
    },
    video_tit_html:function(obj,i){
        var cname = (i==0)?"cur":"";
        var c = '<h2 class="'+cname+'">'+obj.title+'</h2>';
        return c;
    },
    video_cover_html:function(obj,i){
        var cname = (i==0)?"cur":"";
        var c = '<img class="'+cname+'" src="'+obj.pic+'">';
        return c;
    },
    video_thumb_html:function(obj,i){
        var cname = (i==0)?"cur":"";
        var c = '';
        return c;
    }
};
/*get data*/
var news_list = [],
	cele_list = [],
	runway_list = [],
	backstage_list = [],
	street_list = [],
	video_list = [];
$.ajax({
    type: "POST",
    url: "http://m.cosmopolitan.com.cn/cosmowww/2016fashionweek-newyork-awjson.shtml",
    data: {},
    dataType: 'json',
    success: function(data){
        var me = this;
        cbFun(data);
    }
});
/*news*/
var list = new LIST();
function cbFun(data){
    /*news*/
    $.each(data.focus,function(i,item){
        var aa = {};
        aa.width = "617px";
        aa.height = "920px";
        //var cur = (i==0)?"cur":"";
        var cur = "";
        aa.content = '<div class="imgs"><div class="img_s"></div><img src="'+item.pic+'"/><div class="word '+cur+'"><h2>'+item.title+'</h2><p>'+item.digest+'</p></div></div>';
        news_list.push(aa);
    });
    /*cele*/
    $.each(data.dapai,function(i,item){
        var bb = {};
        var cur = "";
        bb.content = '<div class="imgs"><div class="img_s"></div><img src="'+item.pic+'"/><div class="word '+cur+'"><h2>'+item.title+'</h2><p>'+item.digest+'</p></div></div>';
        cele_list.push(bb);
    });

    /*runway*/
    $.each(data.xiuchang,function(i,item){
        var cc = {};
        var cur = "";
        cc.content = '<div class="imgs"><div class="img_s"></div><img src="'+item.pic+'"/><div class="word '+cur+'"><h2>'+item.title+'</h2><p>'+item.digest+'</p></div></div>';
        runway_list.push(cc);
    });
	backstage_list = data.huaxu;
	street_list = data.changwai;
	video_list = data.video;
}