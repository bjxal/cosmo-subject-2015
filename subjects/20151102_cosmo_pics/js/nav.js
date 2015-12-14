/* Created by licha on 2015/4/28. */
var winWidth = $(window).width();
$(document).ready(function () {
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
    setDom();
    //iscroll
    //if(myScroll_nav==undefined){
        var myScroll_nav,picList;
        myScroll_nav = new iScroll('wrapper_nav',{hScrollbar:false, vScrollbar:false});

    setTimeout(function(){

        picList = new iScroll('wrapper1',{
            snap: true,
            momentum: false,
            hScrollbar: false,
            onScrollEnd: function () {}
        });
    },5000)
    //}
});
function setDom(){
    var len = _listdata.length;
    $("#photoAll").css("width",(winWidth*len)+"px");
    $.each(_listdata,function(i,item){
        var li_c = dom_list(item,i,len);
        $("#photoAll").append(li_c);
    })
}
function dom_list(dom,i,len){
    var li = document.createElement("li");
    li.style.cssText = "width:"+winWidth+"px";
    li.innerHTML = '<a id="photoimg"><img src="'+dom.img+'" id="photo1"></a><div class="desc" id="desc"><h1 class="title_mb" id="photoTitle_mb">'+dom.title+'<span class="num"><em class="indexNum" id="photoIndex">'+(i+1)+'</em>/<em id="photoCount">'+len+'</em></span></h1><div id="descSpan_'+i+'" class="descSpan"><div><p class="zy" id="photoDesc">'+dom.desc+'</p></div><div class="scrollBarV"><div></div></div></div></div>';
    return li;
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

