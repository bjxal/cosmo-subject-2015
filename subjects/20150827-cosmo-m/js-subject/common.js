$(document).ready(function(){
    var cname = $("body").attr("class") || "";
    if(cname.indexOf("index")!=-1){
        $("body").css("opacity","1");
    }
    else{
        setTimeout(function(){$("body").css("opacity","1")},300);
    }
    /*nav*/
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(".contentAll").width((winWidth+240)+"px");
    $(".contentLeft,.contentRight").width(winWidth+"px");
    $("#search").click(function(){
        $(".topbar").addClass("on");
    });
    $(".close_btn").click(function(){
        $(".topbar").removeClass("on");
    });
    var myScroll2 = new IScroll('#wrapper2', { probeType: 3, mouseWheel: true, click: true});

    /*show nav*/
    $(".nav_btn").on("click",function(e){
        $(".contentAll").toggleClass("act");
        $(".contentLeft").toggleClass("show");
        $("body").toggleClass("hid");
    });
    //$(".contentLeft").on("click",function(e){
    //    $(".contentAll").toggleClass("act");
    //})
    $(".contentLeft .close").on("click",function(e){
        $(".contentAll").toggleClass("act").one("webkitTransitionEnd",function(){
            $(".contentLeft").toggleClass("show");
            $("body").toggleClass("hid");
        });
    });
    //ÊÕ²Ø
    $(".avt_login .loginOut").on("click",function(e){
        loginOut();
    });
    //ÍË³ö

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
function loginOut(){
    $.ajax({
        type:"POST",
        url:"",
        cache:false,
        async:false,
        data:{},
        dataType:"jsonp",
        jsonp:"jsonpCallback",
        jsonpCallback:"jsonpCallback",
        success:function(data){},
        error:function(err){}
    });
}