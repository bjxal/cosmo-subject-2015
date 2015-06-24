/* Created by licha on 2015/4/28. */
//≈–∂œŒ¢–≈‰Ø¿¿∆˜
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
                    $("#" + type).html(parseInt($("#" + type).html()) + 1);
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
        $.ajax({
            type: "POST",
            url: votePostUrl,
            data: "c=ArticleHelps&a=GetPicExp&type=1&document_id=" + votePostData,
            dataType: "json",
            success: function (msg) {
                $("#zan").text(msg["zan"]);
                $("#hehe").text(msg["hehe"]);
                $("#han").text(msg["han"]);
                $("#pai").text(msg["pai"]);
                $("#xinsui").text(msg["xinsui"]);
                $("#gun").text(msg["gun"]);
            }
        })
    } catch (e) {
    }

    //∑÷œÌ share
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
        console.log (height,htop)
        if (top > 300 && height>htop) {
            $(".fix").show();
        } else {
            $(".fix").hide();
        }
    };
    //∑÷œÌ
    $(".share .copyurl").click(function(){
        $(".path").html(currentpath);
        $(".pop_mask").fadeIn();
    });
    $(".close").click(function(){
        $(".pop_mask").fadeOut();
    })
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

