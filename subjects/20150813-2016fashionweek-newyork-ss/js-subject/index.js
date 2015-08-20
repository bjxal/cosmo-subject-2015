$(document).ready(function(){

    var c2_list_num = $(".c2_t").find("li").length;
    /*c2-next*/
    $("#c2_next").on("click",function(e){
        var $tar = $(e.target);
        var id = $(".c2_t").find("li.act").data("id");
        var nextId = (id<(c2_list_num-1))?(id+1):0;
        var trans = (nextId<=4)?0:((nextId-4)*(-205));
        $(".c2_t").find("li").eq(id).removeClass("act").one("webkitTransitionEnd",function(){
            $(".c2_t").find("li").eq(nextId).addClass("act");
            $(".c2_b_nav").find("a").eq(nextId).addClass("active").siblings().removeClass("active");
        });
        $(".c2_b_nav_list").css({
            "-webkit-transform":"translate("+trans+"px,0)"
        });
    });
    $("#c2_pre").on("click",function(e){
        var $tar = $(e.target);
        var id = $(".c2_t").find("li.act").data("id");
        var prevId = (id>0)?(id-1):(c2_list_num-1);
        var trans = (prevId<=4)?0:((prevId-4)*(-205));
        $(".c2_t").find("li").eq(id).removeClass("act").one("webkitTransitionEnd",function(){
            $(".c2_t").find("li").eq(prevId).addClass("act");
            $(".c2_b_nav").find("a").eq(prevId).addClass("active").siblings().removeClass("active");
        });
        $(".c2_b_nav_list").css({
            "-webkit-transform":"translate("+trans+"px,0)"
        });
    });

    $(".c3_r_tab").tabs(".c3_r_con",{current:'active'});
    $(".c3_tab").tabs(".c3_tab_con",{current:'hover'});
    //$(".c3_tab").tabs(".img .imgs",{event:'mouseover',tab:'li',current:'current'});


    $(".c3_prev").click(function(){
        if($(this).parent().parent().find(".c3_tab_i.block").prev(".c3_tab_i").length>0){
            $(this).parent().parent().find(".c3_tab_i.block").prev().addClass("block").siblings().removeClass("block");
        }
    });
    $(".c3_next").click(function(){
        if($(this).parent().parent().find(".c3_tab_i.block").next(".c3_tab_i").length>0){
            $(this).parent().parent().find(".c3_tab_i.block").next().addClass("block").siblings().removeClass("block");
        }
    });

    setTimeout(function(){
        //$(".logo span").removeClass("default");
        var list = $(".logo span");
        $.each(list,function(i,item){
            var aa = (Math.random())*50;
            setTimeout(function(){
                $(item).removeClass("default").addClass("star");
            },i*aa)
        })
    },100)
    setTimeout(function(){
        $(".logo span").addClass("act").removeClass("star");
        $(".banner_bg").fadeIn();
        $(".nav").fadeIn();
        $(".logo_r").removeClass("hover")
        //$(".header").css("height","200px")
    },5000)


    var c1_top = $(".c1").offset().top;
    var wHeight=$(window).height();
    function scroll() {
        var top = $(window).scrollTop();
        if (top <= c1_top) {
            $(".shine").addClass("trans_hover");
        }
        else if (top > 400) {
            $(".shine").removeClass("trans_hover");
        }
    }
    $(window).scroll(function(){
        scroll();
    });
});