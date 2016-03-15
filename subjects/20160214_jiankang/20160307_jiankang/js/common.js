$(document).ready(function(e){
    $(".login_btn").on("click",function(e){
        var $tar = $(e.target);
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    })

    /*birth*/
    sel = "sex";
    $(".sel_arr,.user_birth,.user_sex").on("click",function(e){
        var $tar = $(e.target);
        sel = $tar.data("sel");
        $(".btm_sel").fadeIn();
        if(sel=="sex"){
            $(".btm_sel").find(".sex_sel").addClass("show");
        }
        else if(sel=="birthday"){
            $(".btm_sel").find(".birthday_sel").addClass("show");
        }
    })
    $(".selectEnd").on("click",function(e){
        var $tar = $(e.target);
        var tag = $tar.data("tag");
        var val = "";
        if(tag=="sex"){
            val = $("#demo_dummy").val();
        }
        else if(tag=="birthday"){
            val = $("#datetimeDate-demo").val().replace(/\//g,".")||"1990.01.01";
        }
        $(this).parents("body").find(".user_"+sel).html(val).parents("."+sel).find(".sel_arr").hide().parents("body").find(".btm_sel").fadeOut().find("."+sel+"_sel").removeClass("show");
    });
    /*close select*/
    $(".btm_sel").on("click",function(e){
        var $tar = $(e.target);
        var cname = $tar.attr("class");
        if(cname.indexOf("item_sel")==-1){
            $(this).find(".show").removeClass("show");
            $(this).fadeOut();
        }
    })
})