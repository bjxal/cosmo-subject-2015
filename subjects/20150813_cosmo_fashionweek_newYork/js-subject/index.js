$(document).ready(function(){
    $("html,body").animate({
        scrollTop: "100000px"
    },800);
    /*get cur*/
    var max_date = 1442592000*1000;
    var cur_time = new Date().getTime();
    if(cur_time<max_date){
        for(var i=1;i<9;i++){
            var html1 = $("#date"+i).html();
            if(html1!="" && html1!=null){
                $(".nav.date").find("li").eq(8-i).addClass("date_cur").siblings().removeClass("date_cur");
            }
        }
    }
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
            var time = Math.floor(audioPlay1.duration);
            var len = (((time/60)*450)>450)?450:((time/60)*450);
            $par.find(".audio_time span").eq(1).html(time+'"');
            $par.find(".audio_c").css("width",(len+"px"));
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
        $(e.target).parent().addClass("cur_date").siblings().removeClass("cur_date");
        var topVal = $("#date"+id).offset().top;
        $("html,body").animate({
            scrollTop: (topVal-20)+"px"
        },function(){});

    })
});