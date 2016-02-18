$(document).ready(function(e){
    $(".login_btn").on("click",function(e){
        var $tar = $(e.target);
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    })
})