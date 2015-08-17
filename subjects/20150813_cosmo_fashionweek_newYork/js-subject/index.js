$(document).ready(function(){
    $("html,body").animate({
        scrollTop: "10000px"
    },800);
    /*footer nav*/
    $(".nav_word").click("touchend",function(e){
        var $tar = $(e.target);
        $tar.next().toggleClass("act");
        $tar.parent().siblings().find(".nav_list").removeClass("act");
    });

    /*sina*/
    $(".nav.sina").on("click",function(e){
        $(".footer_nav_list").removeClass("show");
        $(".sina_p").addClass("show");
    });

    /*audio*/
    var audioPlay = $("#audioPlay")[0];
    $(".audio_c").on("touchend",function(e){
        audioPlay.play();
        $(".audio_time span").eq(0).addClass("read");
    });

    /*to date*/
    $(".date li a").on("touchend",function(e){
        $(e.target).parents(".nav_list").removeClass("act");
        var id = $(e.target).data("id");
        var topVal = $("#date"+id).offset().top;
        $("html,body").animate({
            scrollTop: (topVal-20)+"px"
        },function(){});

    })
});