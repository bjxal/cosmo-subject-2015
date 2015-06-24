/* Created by licha on 2015/4/28. */
window.addEventListener("DOMContentLoaded", function () {
    if ("standalone" in window.navigator && window.navigator.standalone) {
        $(document).delegate("a", "click", function (e) {
            var self = $(e.currentTarget);
            var href = self.attr("href");
            var target = self.attr("target");
            if (!self.attr("onclick") && href != "#" && href != "javascript:;" && target != "_blank") {
                window.location.href = href;
                return false;
            }
        })
    }
$("#nav_btn").bind("click", function (e) {
    e.stopPropagation();
    if($(".channel").css("top")=="0px"){
        $(".channel").css("top","55px");
    }else{
        $(".channel").css("top","0");
    }

    //iscroll
    if(myScroll==undefined){
        var myScroll;
        myScroll = new iScroll('wrapper',{hScrollbar:false, vScrollbar:false});
    }
    var self = $(this);
    if (self.hasClass("nav_act")) self.removeClass("nav_act"); else self.addClass("nav_act");
});
document.addEventListener("click", function () {
    try {
        $(".channel").css("top","0px");
        $("#nav_btn").removeClass("nav_act");
    } catch (e) {
    }
}, false)
//setTimeout(function(){window.scrollTo(0,1);},10);
}, false);

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