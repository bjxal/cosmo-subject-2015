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
    //var myScroll2 = new IScroll('#wrapper2', { probeType: 3, mouseWheel: true, click: true});
    /*2015-11-03*/
    var myScroll2 = new iScroll('wrapper2',{hScrollbar:false, vScrollbar:false});
    var cname = jQuery("body").attr("class") || "";
    if(cname.indexOf("index")!=-1){
        jQuery("body").css("opacity","1");
    }
    else{
        setTimeout(function(){jQuery("body").css("opacity","1")},300);
    }
    /*show nav*/
    jQuery(".nav_btn").on("click",function(e){
        jQuery(".contentAll").toggleClass("act");
        jQuery(".contentLeft").toggleClass("show");
        jQuery("body").toggleClass("hid");
    });
    //$(".contentLeft").on("click",function(e){
    //    $(".contentAll").toggleClass("act");
    //})
    jQuery(".contentLeft .close").on("click",function(e){
        e.stopPropagation();
        jQuery(".contentAll").toggleClass("act").one("webkitTransitionEnd",function(){});
        jQuery(".contentLeft").toggleClass("show");
        jQuery("body").toggleClass("hid");
    });
    //µÇÂ¼»ò×¢²á
    jQuery(".nav_avt_p p").eq(0).on("touchend",function(e){
        //window.location.href = "login.html";
    });
    //ÍË³ö
    jQuery(".avt_login .loginOut").on("click",function(e){
        loginOut();
    });
    /*2015-11-03*/

    /*search*/
    //$("search").addEventListener("click",function(){
    //    //$("topbar").addClass("on");
    //    $("topbar").setAttribute("class","topbar on");
    //});
    //$("close_btn").addEventListener("click",function(){
    //    //$("topbar").removeClass("on");
    //    $("topbar").setAttribute("class","topbar");
    //});

//$("nav_btn").addEventListener("click", function (e) {
//    e.stopPropagation();
//    var cname = $("nav_btn").getAttribute("class");
//    console.log(cname)
//    if(cname.indexOf("nav_act")!=-1){
//        $("nav").style.top="-56px";
//    }
//    else{
//        $("nav").style.top="55px";
//    }
//    //if($("nav").css("top")=="0px"){
//    //    $("nav").css("top","55px");
//    //}else{
//    //    $("nav").css("top","0");
//    //}
//
//    //iscroll
//    if(myScroll_nav==undefined){
//        var myScroll_nav;
//        myScroll_nav = new iScroll('wrapper_nav',{hScrollbar:false, vScrollbar:false});
//    }
//    var self = $(this);
//    var cur_cname = self.getAttribute("class");
//    if (cur_cname.indexOf("nav_act")!=-1) self.setAttribute("class","bar_btn nav_btn"); else self.setAttribute("class","bar_btn nav_btn nav_act");
//});
//iscroll
    if(myScroll_nav==undefined){
        var myScroll_nav;
        myScroll_nav = new iScroll('wrapper_nav',{hScrollbar:false, vScrollbar:false});
    }
//document.addEventListener("click", function () {
//    try {
//        $(".channel").css("top","0px");
//        $("#nav_btn").removeClass("nav_act");
//    } catch (e) {
//    }
//}, false)
//setTimeout(function(){window.scrollTo(0,1);},10);
}, false);
function baiduSearch () {
    key = $('#searchKey').val() + ' site:cosmopolitan.com.cn';
    window.open('http://m.baidu.com/s?tn=baidu&word=' + encodeURIComponent(key));
    return false;
}
(function(){
    var path = location.pathname;
    var first_slashes_pos = path.indexOf('/');
    var second_slashes_pos = path.indexOf('/', first_slashes_pos + 1);
    if (first_slashes_pos !== -1 && second_slashes_pos !== -1) {
        var len = second_slashes_pos-first_slashes_pos;
        var dir = path.substring(first_slashes_pos, len);
        jQuery("#thelist li").each(function(){
            if (jQuery(this).find("a").attr("href").indexOf(dir) == -1) {
                jQuery(this).removeClass("active");
            } else {
                jQuery(this).addClass("active");
            }
        });
    }
})();

