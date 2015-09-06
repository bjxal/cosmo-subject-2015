$(document).ready(function(){
    $("html,body").animate({
        scrollTop: "10000px"
    },800);
    /*footer nav*/
    $(".nav_word").on("touchend",function(e){
        var $tar = $(e.target);
        var par = $tar.parents("nav").attr("class")||"nav";
        //if(par.indexOf("sina")==-1){
        //    $(".sina_tips").removeClass("act");
        //}
        $tar.next().toggleClass("act");
        $tar.parent().siblings().find(".nav_list").removeClass("act");
        $tar.parent().siblings().find(".sina_tips").removeClass("act");
    });
    /*audio*/
    setTimeout(function(){
        $.each($(".audio_c_1"),function(i,item){
            var $par = $(item).parents(".audio");
            var audioPlay1 = $par.find("audio")[0];
            $par.find(".audio_time span").eq(1).html(Math.floor(audioPlay1.duration)+'"');
        });},1000);
    $(".audio_c_1").on("touchend",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents(".audio");
        var audioPlay = $par.find("audio")[0];
        var ifPlay = $(e.target).attr("class");
        if(ifPlay.indexOf("play")!=-1){
            audioPlay.pause();
            //$(".audio_c_1").removeClass("play");
            $(e.target).removeClass("play");
        }
        else{
            audioPlay.play();
            //$(".audio_c_1").removeClass("play");
            $(e.target).addClass("play");
        }
        console.log(audioPlay.duration);
        $par.find(".audio_time span").eq(0).addClass("read");
        $par.find(".nav_list,.sina_tips").removeClass("act");
    });

    /*to date*/
    $(".date li a").on("touchend",function(e){
        $(e.target).parents(".nav_list").removeClass("act");
        var id = $(e.target).data("id");
        var topVal = $("#date"+id).offset().top;
        $("html,body").animate({
            scrollTop: (topVal-20)+"px"
        },function(){});

    })
});