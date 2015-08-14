$(document).ready(function(){
    /*footer nav*/
    $(".nav_word").click("touchend",function(e){
        var $tar = $(e.target);
        console.log($tar)
        $tar.next().toggleClass("act");
    });

    /*sina*/
    $(".nav.sina").on("click",function(e){
        $(".footer_nav_list").removeClass("show");
        $(".sina_p").addClass("show");
    });
});