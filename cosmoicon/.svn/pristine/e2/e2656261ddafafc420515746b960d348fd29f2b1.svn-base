/* Created by licha on 2015/4/10 */
$(document).ready(function(){
    $('#scro_img').scrollable({
        circular:true,
        prev:'#scro_l',
        next:'#scro_r'
    }).autoscroll({
        autoplay: true,
        interval: 5000
    }).navigator({
        navi:'#scro_nav'
    });
    //广告文字链1
    $('#ad_txt1').scrollable({circular:true,vertical:true}).autoscroll({autoplay: true,interval: 3000});
    //广告文字链2
    $('#ad_txt2').scrollable({circular:true,vertical:true}).autoscroll({autoplay: true,interval: 3000});
    //两性广告文字链
    $('#ad_txt3').scrollable({circular:true,vertical:true}).autoscroll({autoplay: true,interval: 3000});
    //合作媒体
    $('.hezuo_c').scrollable({circular:true,vertical:true}).autoscroll({autoplay: true,interval: 5000});

    //左侧快速导航
    var c0_top = $(".c .c0").offset().top;
    var c0b_top = $(".c0 .c0_b").offset().top;
    var c1_top = $(".c .c1").offset().top;
    var c2_top = $(".c .c2").offset().top;
    var c3_top = $(".c .c3").offset().top;
    var c4_top = $(".c .c4").offset().top;
    var c5_top = $(".c .c5").offset().top;
    var hezuo_top = $(".c .hezuo").offset().top;
    var wHeight=$(window).height();
    function scrollTo() {
        var s_top = $(window).scrollTop();
        if (s_top > 400) {
            $(".nav_sidebar").addClass("show");
        } else {
            $(".nav_sidebar").removeClass("show");
        }
        var top = $(window).scrollTop()+wHeight;

        if(s_top<=c0b_top-300){
            $(".to_c0").addClass("current").siblings().removeClass("current");
        }
        else if(s_top>c0b_top-300&&s_top<=c1_top){
            $(".to_c0b").addClass("current").siblings().removeClass("current");
        }
        else if(top>c1_top+300&&top<=c2_top){
            $(".to_c1").addClass("current").siblings().removeClass("current");
        }
        else if(top>c2_top+300&&top<=c3_top){
            $(".to_c2").addClass("current").siblings().removeClass("current");
        }
        else if(top>c3_top+300&&top<=c4_top){
            $(".to_c3").addClass("current").siblings().removeClass("current");
        }
        else if(top>c4_top+100&&top<=c5_top){
            $(".to_c4").addClass("current").siblings().removeClass("current");
        }
        else if(top>c5_top+100&&top<=hezuo_top){
            $(".to_c5").addClass("current").siblings().removeClass("current");
        }
        else if(top>hezuo_top){
            $(".nav_sidebar").removeClass("show");
        }else{}
    }
    $(window).scroll(function(){
        scrollTo();
    });
    $(".to_c0").click(function(){
        $('html,body').animate({scrollTop:c0_top});
    });
    $(".to_c0b").click(function(){
        $('html,body').animate({scrollTop:c0b_top-70});
    });
    $(".to_c1").click(function(){
        $('html,body').animate({scrollTop:c1_top});
    });
    $(".to_c2").click(function(){
        $('html,body').animate({scrollTop:c2_top});
    });
    $(".to_c3").click(function(){
        $('html,body').animate({scrollTop:c3_top});
    });
    $(".to_c4").click(function(){
        $('html,body').animate({scrollTop:c4_top});
    });
    $(".to_c5").click(function(){
        $('html,body').animate({scrollTop:c5_top});
    });
    //分屏加载图片
    var lazyLoadImgs=$('img.imgLazyLoad'),lazyLoadImgsNum=lazyLoadImgs.size(),timeoutHandler=null;
    $(window).on('scroll',function(){
        timeoutHandler&&clearTimeout(timeoutHandler);
        timeoutHandler=setTimeout(lazyLoadImg,0)
    })
    function lazyLoadImg(){
        var $win=$(window),winH=$win.height(),$document=$(document);
        lazyLoadImgs.each(function(index,img){
            var $img=$(img);
            if($img.offset().top<$document.scrollTop()+winH){
                if($img.attr('data-loaded')===true){
                    return true;
                }
                $img.on('load',function(){
                    $(this).animate({
                        'opacity':1
                    },2000)
                });
                $img.attr('src',$img.attr('data-src'));
                $img.attr('data-loaded',true);
            }
        })
    };
})
//自动跳转
function is_mobile() {
    var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
    var u = navigator.userAgent;
    if (null == u) {
        return true;
    }
    var result = regex_match.exec(u);

    if (null == result) {
        return false
    } else {
        return true
    }
}
if (is_mobile()) {
    document.location.href= 'http://m.cosmopolitan.com.cn';
}
