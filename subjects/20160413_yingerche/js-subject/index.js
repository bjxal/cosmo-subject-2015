$(document).ready(function(){
    $(".p3 .c .item").on("mouseenter",function(e){
        $(e.currentTarget).addClass("cur");
    }).on("mouseleave",function(e){
        $(e.currentTarget).removeClass("cur");
    });
    //p2 ÂÖ²¥
    $("#t4_scro").scrollable({circular:true,prev:'#t4_prev',next:'#t4_next'}).autoscroll({ autoplay: true,interval: 5000}).navigator({navi:'#t4_nav'});
});
$(function() {
    var $win = $(window),
        appStatus = {},
        maskIsShow = false;
    appStatus.cTop = 0;
    appStatus.sTop = 0;
    appStatus.animateItems = [];
    appStatus.speeds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2];
    appStatus.top = 0;
    appStatus.pos = 0;
    appStatus.prevScrollTop = 0;
    appStatus.currScrollTop = 0;


    window.appStatus = appStatus;

    // ¶¯»­ start

    $win.bind('scroll', function (e) {
        if (maskIsShow) {
            return;
        }
        appStatus.top = appStatus.currScrollTop = appStatus.sTop = $win.scrollTop();
    });

    record_items();

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

    try {
        window.requestAnimationFrame(animationFrame);
    } catch (err) {

    }


    function animationFrame() {
        appStatus.cTop += 0.2 * (appStatus.sTop - appStatus.cTop);
        appStatus.pos += 0.05 * (appStatus.top - appStatus.pos);
        var temp = -appStatus.cTop;
        $.each(appStatus.animateItems, function () {
            // var e = -(appStatus.cTop ) * this.speed*this.direction;
            var e = -0.02 * (appStatus.pos - appStatus.top) * this.speed * this.direction;
            this.item.css({
                '-webkit-transform': "translate3d(0," + e + "px, 0)"
            });
        });
        // $.each(appStatus.animateItems, function() {
        // 	var e = -(appStatus.currScrollTop - appStatus.prevScrollTop) * this.speed*this.direction;
        // 	this.item.css({
        // 		'opacity':'0.9',
        // 		'-webkit-transform': "translate3d(0," + e + "px, 0)"
        // 	});
        // });
        // appStatus.prevScrollTop = appStatus.currScrollTop;
        window.requestAnimationFrame(animationFrame);
    }


    function record_items() {
        $('.p .animate').each(function (index) {
            var itemWraper, direction;
            direction = 1 === index % 3 ? 1 : -1;
            itemWraper = {};
            itemWraper.item = $(this);
            itemWraper.top = itemWraper.item.position().top;
            itemWraper.direction = direction;
            itemWraper.speed = appStatus.speeds[index];
            appStatus.animateItems.push(itemWraper);
        });
    }

// ¶¯»­ end
});