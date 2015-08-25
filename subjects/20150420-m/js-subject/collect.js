$(document).ready(function(){
    $(".trash").on("touchend",function(e){
        var $tar = $(e.target);
        var artId = $tar.data("articleid");
        $tar.find("span").addClass("del").one("webkitTransitionEnd",function(){
            $tar.find("span").removeClass("del").one("webkitTransitionEnd",function(){
                $tar.parents(".more_item").addClass("height_0");
                setTimeout(function(){$tar.parents(".more_item").remove();},350);
            });
        });
    });
});
