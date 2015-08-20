/**
 * Created by licha on 2015/4/22.
 */
    var myScroll;
    var position;
    var wp1;
    var val;

    function updatePosition () {
        position.innerHTML = this.y>>0;
        var id = this.wrapper.id;
        if(id=="wrapper")
            myScroll1.scrollTo(0,-(this.y)+val);
        else
            myScroll.scrollTo(0,-(this.y)+val);
    }
    function maskHide () {
        setTimeout(function(){
            $("body").find(".mask").fadeOut();
        },10)
    }
    function maskShow () {
        setTimeout(function(){
            $("body").find(".mask").fadeIn(800);
        },500)
    }

    function loaded () {
        setTimeout(function(){
            $(".load_layer").fadeOut(1000);
        },500)
        setTimeout(function(){
            $(".ad_mask").fadeOut(1000);
        },5000000)
        var winHeight = $("#scroller").height();
        var bodyHeight = document.body.clientHeight-55;
        val = bodyHeight-winHeight;
        //$(".c").css("height",bodyHeight)

        position = document.getElementById('position');

        wp1 = document.getElementById("wrapper1");

        myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true, click: true});
        myScroll1 = new IScroll('#wrapper1', { probeType: 3, mouseWheel: true, click: true});
        myScroll2 = new IScroll('#wrapper2', { probeType: 3, mouseWheel: true, click: true});

        myScroll.scrollTo(0,val);
        myScroll.on('scroll', updatePosition);
        myScroll.on('scrollEnd', updatePosition);
        myScroll.on('scrollStart', maskHide);
        myScroll.on('scrollEnd', maskShow);

        myScroll1.on('scroll', updatePosition);
        myScroll1.on('scrollStart', maskHide);
        myScroll1.on('scrollEnd', updatePosition);
        myScroll1.on('scrollEnd', maskShow);
//    clickEvent();
    }

    function clickEvent(){
        $("body").find("img").on("click",function(e){
            var tar = e.target;
//        $("body").find("img").css("border","none");
            $(tar).css("border","1px red solid").parent().siblings().find("img").css("border","none");
        });
    }

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
