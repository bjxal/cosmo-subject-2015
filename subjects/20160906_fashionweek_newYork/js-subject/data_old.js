/*news*/
var news_list_1 = [{"title":"GUCCI虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p2\/1.jpg")},{"title":"GUCCI虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p2\/2.jpg")},{"title":"GUCCI虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p2\/3.jpg")},{"title":"GUCCI虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p2\/4.jpg")}];
var news_list = [];
$.each(news_list_1,function(i,item){
    var aa = {};
    aa.width = "617px";
    aa.height = "920px";
    //var cur = (i==0)?"cur":"";
    var cur = "";
    aa.content = '<div class="imgs"><div class="img_s"></div><a href="http://www.baidu.com" target="_blank"><img src="'+item.pic+'"/><div class="word '+cur+'"></a><h2>'+item.title+'</h2><p>'+item.digest+'</p></div></div>';
    news_list.push(aa);
});
/*cele*/
var cele_list_1 = [{"title":"虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p3\/1.jpg")},{"title":"虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p3\/2.jpg")},{"title":"虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p3\/1.jpg")},{"title":"虎头帽让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p3\/2.jpg")}];
var cele_list = [];
$.each(cele_list_1,function(i,item){
    var aa = {};
    var cur = "";
    aa.content = '<div class="imgs"><div class="img_s"></div><img src="'+item.pic+'"/><div class="word '+cur+'"><h2>'+item.title+'</h2><p>'+item.digest+'</p></div></div>';
    cele_list.push(aa);
});
/*runway*/
var runway_list_1 = [{"title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p4\/1.jpg")},{"title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p4\/2.jpg")},{"title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p4\/3.jpg")},{"title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p4\/4.jpg")}];
var runway_list = [];
$.each(runway_list_1,function(i,item){
    var aa = {};
    var cur = "";
    aa.content = '<div class="imgs"><div class="img_s"></div><img src="'+item.pic+'"/><div class="word '+cur+'"><h2>'+item.title+'</h2><p>'+item.digest+'</p></div></div>';
    runway_list.push(aa);
});
/*backstage*/
var backstage_list = [{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/1.jpg")},{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/2.jpg")},{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/3.jpg")},{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/4.jpg")},{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/1.jpg")},{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/2.jpg")},{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/3.jpg")},{"name":"Ermenegildo Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p5\/4.jpg")}];


/*street style*/
var street_list = [{"name":"Ermenegildo","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/1.jpg")},{"name":"Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/2.jpg")},{"name":"Ermenegildo","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/1.jpg")},{"name":"Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/2.jpg")},{"name":"Ermenegildo","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/1.jpg")},{"name":"Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/2.jpg")},{"name":"Ermenegildo","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/1.jpg")},{"name":"Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/2.jpg")},{"name":"Ermenegildo","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/1.jpg")},{"name":"Zegna","title":"让这个时代充满昨日的诗意","digest":"一定是这次米兰keyword/keyword时装周最受期待的设计师这一，上任GUCCI创意总监刚刚两年的他。","pic":ImgDir("\/p6\/2.jpg")}];

/*moment*/
var video_list = [{"title":"吴亦凡亮相伦敦时装周 帅气走秀","pic":ImgDir("\/p7\/1.jpg"),"url":"http://player.youku.com/embed/XMTQ0MjgxMzU0MA"},{"title":"Pronovias婚纱|纽约时装周","pic":ImgDir("\/p7\/2.jpg"),"url":"http://player.youku.com/embed/XMTQ1NzAwOTY4OA"},{"title":"美轮美奂 · 巴黎高定时装周2015秋冬集锦","pic":ImgDir("\/p7\/3.jpg"),"url":"http://player.youku.com/embed/XMTQyMTY1MjM5Ng"}];

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
