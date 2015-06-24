/* Created by licha on 2015/4/10 */
$(document).ready(function(){
    //广播
    $('.news_ul').scrollable({circular:true,vertical:true}).autoscroll({autoplay: true,interval: 3000});
    $(".t1_r .m").hover(function(){$(".m .ewm_m").show()},function(){$(".ewm_m").hide()});
    $(".t1_r .wx").hover(function(){$(".wx .ewm_wx").show()},function(){$(".ewm_wx").hide()});
    //主导航菜单
    $(".t2_item").hover(function(){
        $(this).find("span").show().next().slideDown();
    },function(){
        $(this).find(".t2_list").slideUp().prev().hide();
    });
    //top_sidebar
    $(".top_sidebar .wx").hover(function(){$(this).next().show().next().show()},function(){$(this).next().hide().next().hide()})
    $(".top_sidebar .hi").hover(function(){$(this).next().show().next().show()},function(){$(this).next().hide().next().hide()})
    //totop
    $("#totop").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    });
    function scroll() {
        var top = $(window).scrollTop();
        if (top > 1100) {
            $(".top_sidebar").show();
        } else {
            $(".top_sidebar").hide();
        }
    }
    var t = null;
    $(window).scroll(function () {
        t && clearTimeout(t);
        t = setTimeout(scroll, 100);
    });

    //bshare分享
    bShare.addEntry({
        title: "\u65F6\u5C1ACOSMO_\u65F6\u9AE6\u5973\u5B69\u7684\u65F6\u5C1A\u5723\u7ECF",//时尚COSMO_时髦女孩的时尚圣经
        url: "http://www.cosmopolitan.com.cn",
        summary: "\u65F6\u5C1ACOSMO\u2014\u2014\u5168\u7403\u53D1\u884C\u91CF\u6700\u5927\u7684\u4E00\u7EBF\u65F6\u5C1A\u6742\u5FD7\u300A\u65F6\u5C1ACOSMO\u300B\u4E2D\u6587\u5B98\u7F51\uFF0C\u64AD\u62A5\u65F6\u5C1A\u8D44\u8BAF\uFF0C\u89E3\u8BFB\u660E\u661F\u7A7F\u642D\uFF0C\u6559\u5B66\u7F8E\u5BB9\u6280\u5DE7\u3002\u6765\uFF0C\u6211\u4EEC\u4E00\u8D77\u6210\u4E3ACOSMO Girl\uFF0CBe Cool and hot!",//COSMO中文网——全球发行量最大的一线时尚杂志《时尚COSMO》中文官网，播报时尚资讯，解读明星穿搭，教学美容技巧。来，我们一起成为COSMO Girl，Be Cool and hot!
        pic: "http://new-icon.cosmochina.com.cn/channel/common/img/ewm_hi.jpg"
    });
})
