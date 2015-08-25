/* Created by licha on 2015/4/28. */
//判断微信浏览器
function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}
function is_Safari(){
    var ua = navigator.userAgent;
    if(ua.indexOf("Safari") > -1) {
        return true;
    } else {
        return false;
    }
}
$(document).ready(function() {
    $("#vote a[id]").click(function (e) {
        e.preventDefault();
        var type = $(this).attr("id");
        $.ajax({
            type: "POST",
            url: votePostUrl,
            //data: "c=ArticleHelps&a=AddPicExp&" + type + "=1&document_id=" + votePostData,
            data: "c=ArticleHelps&a=AddPicExp&type=1&document_id=" + votePostData + "&extinfo=" + type,
            success: function (msg) {
                if (msg == 1) {
                    $("#vote_tip").html("\u6295\u7968\u6210\u529f");
                    //$("#" + type).html(parseInt($("#" + type).html()) + 1);
                    $("#" + type).find(".add").show();
                    setTimeout(function () {
                        $("#" + type).addClass("active");
                    }, 200);
                } else if (msg == 2) {
                    $("#vote_tip").html("\u4f60\u5df2\u7ecf\u6295\u8fc7\u7968\u4e86");
                } else {
                    $("#vote_tip").html("\u6295\u7968\u5931\u8d25");
                }
            },
            error: function () {
                $("#vote_tip").html("\u7f51\u7edc\u9519\u8bef");
            },
            complete: function () {
                $("#vote_tip").show();
            }
        })
        setTimeout(function () {
            $("#vote_tip").fadeOut();
        }, 3000)
    })
    try {
        //$.ajax({
        //    type: "POST",
        //    url: votePostUrl,
        //    data: "c=ArticleHelps&a=GetPicExp&type=1&document_id=" + votePostData,
        //    dataType: "json",
        //    success: function (msg) {
        //        //$("#zan").text(msg["zan"]);
        //        $("#hehe").text(msg["hehe"]);
        //        $("#han").text(msg["han"]);
        //        $("#pai").text(msg["pai"]);
        //        $("#xinsui").text(msg["xinsui"]);
        //        $("#gun").text(msg["gun"]);
        //    }
        //})
        $.ajax({
            type: "POST",
            url: votePostUrl,
            data: "c=ArticleHelps&a=GetLikes&type=1&document_id=" + votePostData,
            dataType: "json",
            success: function (msg) {
                if (msg==2) {
                    $("#zan").addClass("active");
                }
            }
        })
    } catch (e) {
    }

    /*收藏*/
    var collect_t = 0;
    $(".collect").on("touchend",function(e){
        var $tar = $(e.target);
        var cname = $tar.attr("class");
        if(collect_t==0){
            collect_t = 1;
            if(cname.indexOf("no")!=-1){
                $tar.removeClass("no").addClass("yes");
                collect_ajax({},"collect");
            }
            else{
                $tar.removeClass("yes").addClass("no");
                collect_ajax({},"cancle");
            }
        }
    });

    //collect
    function collect_ajax(data,type){
        //$.ajax({
        //    type:"POST",
        //    url:"",
        //    cache:false,
        //    async:false,
        //    data:data,
        //    dataType:"json",
        //    jsonp: "jsonpCallback",
        //    jsonpCallback:"jsonpCallback",
        //    success:function(rep){
        //        switch(type){
        //            case "collect":
        //                break;
        //            case "cancle":
        //                break;
        //        }
                setTimeout(function(){collect_t = 0;},2000);
        //    },
        //    error:function(){}
        //});
    }

    //分享 share
    if(is_weixin()||is_Safari()){
        var t = null;
        $(window).scroll(function () {
            t && clearTimeout(t);
            t = setTimeout(scroll, 1);
        });
    }
    //scroll
    function scroll() {
        var top = $(window).scrollTop();
        var htop = $(window).height();
        var totop = $(".c .share").offset().top;
        var height = totop-top;
        //console.log (height,htop)
        if (top > 300 && height>htop) {
            $(".fix").show();
        } else {
            $(".fix").hide();
        }
    };
    //分享
    $(".share .copyurl").click(function(){
        $(".path").html(currentpath);
        $(".pop_mask").fadeIn();
    });
    if(is_weixin()){
        $(".share .jiathis_button_wx").click(function(){
            $(".wx_mask").fadeIn();
            setTimeout(function () {
                $(".wx_mask").fadeOut();
            }, 2000);
        });
    }else{
        $(".share .jiathis_button_wx").click(function(){
            $(".path").html(currentpath);
            $(".pop_mask").fadeIn();
        });
    }
    $(".close").click(function(){
        $(".pop_mask").fadeOut();
    })

    //翻转标题
    $('#zs1').css({
        height:0,
        top: 12
    });
    $('#zs1').css('zIndex',1);
    $('#zs2').css('zIndex',1);
    $('#zs3').css('zIndex',2);
    $('#zs4').css('zIndex',2);
    function turn2(){
        $('#zs2').animate({height:0},function(){
            $('#zs3').css('zIndex',3).animate({height:12,top:0},function(){
                $('#zs1').css({'zIndex':1,height:0,top:12});
                $('#zs2').css({'zIndex':1,height:12});
                $('#zs3').css({'zIndex':2});
                $('#zs4').css({'zIndex':2});
                setTimeout(turn1,1000);
            });
        });
    }
    function turn1(){
        $('#zs4').animate({height:0},function(){

            $('#zs1').css('zIndex',3).animate({height:12,top:0},function(){
                $('#zs1').css({'zIndex':3});
                $('#zs2').css({'zIndex':3});
                $('#zs3').css({'zIndex':1,height:0,top:12});
                $('#zs4').css({'zIndex':1,height:12});

                setTimeout(turn2,1000);
            });
        });
    }
    setTimeout(function(){
        turn1();
    },1500);

    //翻转标题
    $('#zzs1').css({
        height:0,
        top: 12
    });
    $('#zzs1').css('zIndex',1);
    $('#zzs2').css('zIndex',2);
    function tur2(){
        $('#zzs2').animate({height:0,top:12},function(){
                $('#zzs1').css({'zIndex':1,height:0,top:12});
                $('#zzs2').css({'zIndex':2,height:24,top:0});
                setTimeout(tur1,2000);
            });
    }
    function tur1(){
        $('#zzs1').animate({height:0,top:12},function(){
                $('#zzs1').css({'zIndex':3,height:24,top:0});
                $('#zzs2').css({'zIndex':1,height:0,top:12});
                setTimeout(tur2,2000);
            });
    }
    setTimeout(function(){
        tur1();
    },2000);
});

(function(){
    var path = location.pathname;
    var first_slashes_pos = path.indexOf('/');
    var second_slashes_pos = path.indexOf('/', first_slashes_pos + 1);
    if (first_slashes_pos !== -1 && second_slashes_pos !== -1) {
        var len = second_slashes_pos-first_slashes_pos;
        var dir = path.substring(first_slashes_pos, len);
        $("#thelist li").each(function(){
            if ($(this).find("a").attr("href").indexOf(dir) == -1) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
            }
        });
    }
})();

