$(document).ready(function(){
    /*activity_enroll*/
    $(".show_all").on("touchend",function(e){
        var $tar = $(e.target);
        var cname = $tar.attr("class");
        if(cname.indexOf("down")!=-1){
            $tar.removeClass("down").addClass("up");
            $tar.parents(".apply").addClass("showAll");
        }
        if(cname.indexOf("up")!=-1){
            $tar.removeClass("up").addClass("down");
            $tar.parents(".apply").removeClass("showAll");
        }
    })
    /*ÏÂÒ»²½*/
    $(".login_btn").on("click",function(e){
        var $tar = $(e.target);
        var nextUrl = $tar.data("nexturl");
        var ajax = $tar.data("ajax");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
        else if(ajax){
            var $tar = $(e.target);
            var $par = $tar.parents("body");
            $par.find(".tips").fadeIn();
        }
    })
    /*activity_promo*/
    $(".phone").on("touchend",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".tips").fadeIn();
    })
    //$(".login_btn").on("touchend",function(e){
    //    var $tar = $(e.target);
    //    var $par = $tar.parents("body");
    //    $par.find(".tips").fadeIn();
    //})
    $(".pop").on("touchend",function(e){
        $(this).fadeOut();
    })
})