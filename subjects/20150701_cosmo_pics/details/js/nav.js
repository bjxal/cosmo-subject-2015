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

    /*search*/
    $("search").addEventListener("click",function(){
        //$("topbar").addClass("on");
        $("topbar").setAttribute("class","topbar on");
    });
    $("close_btn").addEventListener("click",function(){
        //$("topbar").removeClass("on");
        $("topbar").setAttribute("class","topbar");
    });

$("nav_btn").addEventListener("click", function (e) {
    e.stopPropagation();
    var cname = $("nav_btn").getAttribute("class");
    console.log(cname)
    if(cname.indexOf("nav_act")!=-1){
        $("nav").style.top="-56px";
    }
    else{
        $("nav").style.top="55px";
    }
    //if($("nav").css("top")=="0px"){
    //    $("nav").css("top","55px");
    //}else{
    //    $("nav").css("top","0");
    //}

    //iscroll
    if(myScroll_nav==undefined){
        var myScroll_nav;
        myScroll_nav = new iScroll('wrapper_nav',{hScrollbar:false, vScrollbar:false});
    }
    var self = $(this);
    var cur_cname = self.getAttribute("class");
    if (cur_cname.indexOf("nav_act")!=-1) self.setAttribute("class","bar_btn nav_btn"); else self.setAttribute("class","bar_btn nav_btn nav_act");
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
        $("#thelist li").each(function(){
            if ($(this).find("a").attr("href").indexOf(dir) == -1) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
            }
        });
    }
})();

