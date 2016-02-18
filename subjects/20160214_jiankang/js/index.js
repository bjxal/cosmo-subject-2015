var focus_list = [
    {
        content: '<a href="#"><img src="./testImg/1.jpg"/></a>'
    },
    {
        content: '<a href="#"><img src="./testImg/1.jpg"/></a>'
    },
    {
        content: '<a href="#"><img src="./testImg/1.jpg"/></a>'
    }
];
var focus_list2 = [
    {
        content: './testImg/2.jpg'
    },
    {
        content: './testImg/2.jpg'
    },
    {
        content: './testImg/2.jpg'
    }
]
$(document).ready(function(){
    var cname = $("body").attr("class");
    if(cname.indexOf("index_1")!=-1){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news'), focus_list, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'rotate',
            onslidechanged:function() {
                $(".focus_circle a").eq(S.slideIndex).addClass("cur").siblings().removeClass("cur");
            }
        });
    }
    if(cname.indexOf("result")!=-1){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news2'), focus_list2, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'rotate',
            onslidechanged:function() {}
        });
        $(".index_result .login_btn").on("touchend",function(e){
            $(".index_result .share_mine").fadeIn();
        });
        $(".share_mine").on("touchend",function(e){
            var cname = $(e.target).attr("class")||"";
            if(cname.indexOf("share_icon")==-1){
                $(".index_result .share_mine").fadeOut();
            }
            else{}
        });
    }
    if(cname.indexOf("activity_detail")!=-1){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news3'), focus_list2, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'rotate',
            onslidechanged:function() {}
        });
        $(".index_result .login_btn").on("touchend",function(e){
            $(".index_result .share_mine").fadeIn();
        });
        $(".share_mine").on("touchend",function(e){
            var cname = $(e.target).attr("class")||"";
            if(cname.indexOf("share_icon")==-1){
                $(".index_result .share_mine").fadeOut();
            }
            else{}
        });
    }
    /*下一步*/
    $(".login_btn").on("click",function(e){
        var $tar = $(e.target);
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    })
    $(".bm_date").on("click",function(e){
        var $tar = $(e.target);
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    })
    /*联系客服*/
    $(".phone").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".phone_tips").fadeIn();
    })
    $(".login_lf").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".phone_tips").fadeOut();
    })
    /*炫耀我的福利*/
    $(".activity_result_live .login_btn").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".share_mine").fadeIn();
    })
    $(".share_mine").on("touchend",function(e){
        $(".share_mine").fadeOut();
    })
})