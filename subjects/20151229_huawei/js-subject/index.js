$(document).ready(function(){
    /*show page1*/
    setTimeout(function(){
        $(".cover").fadeOut(800);
    },1200);
    setTimeout(function(){
        $(".page1").addClass("show");
    },2000);
    setTimeout(function(){
        $(".more_tip").addClass("show");
    },2500);
    /*play video*/
    $(".video_cover").on("touchend",function(e){
        $(".video_pop").fadeIn();
        $(".share_pop,.more_pop").removeClass("show");
    });
    /*close video*/
    $(".close").on("touchend",function(e){
        $(".video_pop").fadeOut();
        $(".video_pop .video #ifame_id").html("");
        $(".more_pop").removeClass("show");
    });
    /*hua logo*/
    $(".hua_logo").on("touchend",function(e){
        var url = $(e.target).data("url");
        window.open(url, '_blank');
    })
    /*show share icon*/
    $(".share_btn").on("touchend",function(e){
        var cname = $(".share_pop").attr("class");
        $(".share_pop").toggleClass("show");
        if(cname.indexOf("show")!=-1){
            $(".more_tip").addClass("show");
        }
        else{
            $(".more_tip").removeClass("show");
        }
        $(".more_pop").removeClass("show");
    });
    /*share wx*/
    $(".share_pop .wx").on("touchend",function(e){
        $(".wx_tip").addClass("show");
        var cname = $(".share_pop").attr("class");
        $(".share_pop").toggleClass("show");
        if(cname.indexOf("show")!=-1){
            $(".more_tip").addClass("show");
        }
        else{
            $(".more_tip").removeClass("show");
        }
        $(".more_pop").removeClass("show");
    });
    /*hide_wx*/
    $(".wx_tip,.wx_tip img").on("touchend",function(){
        $(".wx_tip").removeClass("show");
    })
    /*share qq*/
    $(".share_pop .qq a").on("touchend",function(e){
        $(".share_pop,.more_pop").removeClass("show");
        $(".more_tip").addClass("show");
        var _site = '';
        var _u = 'http://v.t.qq.com/share/share.php?title=HUAWEI WATCH 智芯·致永恒 陪你一起看芭莎大咖秀~&amp;url='+String(window.location.href)+'&amp;pic='+ImgDir('/weixin.jpg');
        window.open(_u, '_blank');
    });
    /*share sina*/
    $(".share_pop .sina a").on("touchend",function(e){
        $(".share_pop,.more_pop").removeClass("show");
        $(".more_tip").addClass("show");
        var _u='http://v.t.sina.com.cn/share/share.php?title=HUAWEI WATCH 智芯·致永恒 陪你一起看芭莎大咖秀~&amp;url='+String(window.location.href)+'&amp;pic='+ImgDir('/weixin.jpg');
        window.open(_u, '_blank');
    });
    /*show more*/
    $(".more_btn,.more_tip,.more_pop").on("touchend",function(e){
        var cname = $(".more_pop").attr("class");
        $(".more_pop").toggleClass("show");
        if(cname.indexOf("show")!=-1){
            $(".more_tip").addClass("show");
        }
        else{
            $(".more_tip").removeClass("show");
        }
        $(".share_pop").removeClass("show");
    });
    /*change video*/
    $(".more_pop .item,.video_cover").on("touchend",function(e){
        var $tar = $(e.target);
        var videoUrl = $tar.data("video");
        if(videoUrl=="") return;
        $(".share_pop,.more_pop").removeClass("show");
        $(".more_tip").addClass("show");
        //var ifr_video = '<iframe width="750" height="400" src="'+videoUrl+'" frameborder="0" allowfullscreen=""></iframe>';
        $(".video_pop .video #ifame_id").attr("src",videoUrl);
        $(".video_pop").fadeIn();
    });

    //weixin share
    var wx_url = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=Cosmom_Jssdk&type=json&url='"+encodeURIComponent(window.location.href)+"'";
    $.ajax({
        type:"POST",
        ansyc:false,
        url:wx_url,
        data:{},
        dataType:"json",
        success:function(data){
            wx.config({
                //debug: true,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
            });
            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    title: shareData.tit,
                    desc: shareData.desc,
                    link: shareData.link,
                    imgUrl: shareData.imgUrl,
                    success: function (res) {
                    },
                    cancel: function (res) {
                    }
                });
                wx.onMenuShareTimeline({
                    title: shareData.tit,
                    link: shareData.link,
                    imgUrl: shareData.imgUrl,
                    success: function (res) {
                    },
                    cancel: function (res) {
                    }
                });
            });
        },
        error:function(){}
    });
});