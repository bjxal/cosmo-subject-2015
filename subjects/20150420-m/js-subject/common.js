$(document).ready(function(){
    $("#search").click(function(){
        $(".topbar").addClass("on");
    });
    $(".close_btn").click(function(){
        $(".topbar").removeClass("on");
    });
    /*nav*/
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(".contentAll").width((winWidth+240)+"px");
    $(".contentLeft,.contentRight").width(winWidth+"px");

    /*show nav*/
    $(".nav_btn").on("touchend",function(e){
        $(".contentAll").toggleClass("act");
    });
    //$(".contentLeft").on("touchend",function(e){
    //    $(".contentAll").toggleClass("act");
    //})

    //$("a").on('click',function(){
    //    window.location.href = $(this).attr('href');
    //});
    //$("li[id^='TR_SYS_'] a").on('click',function(){
    //    window.open($(this).attr('href'),"_blank");
    //});
});

/*
function baiduSearch () {
    $('#word').val($('#searchKey').val() + ' site:m.cosmopolitan.com.cn');
}
*/
function baiduSearch () {
    key = $('#searchKey').val() + ' site:cosmopolitan.com.cn';
    window.open('http://m.baidu.com/s?tn=baidu&word=' + encodeURIComponent(key));
    return false;
}