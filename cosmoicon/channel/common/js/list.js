/* Created by licha on 2015/4/10 */
$(document).ready(function(){

    $('#c1_scro').scrollable({
        circular:true,
        prev:'#c1_l',
        next:'#c1_r'
    }).autoscroll({
        autoplay: true,
        interval: 5000
    });
    $('#r_scro').scrollable({
        circular:true,
        prev:'#scro_l',
        next:'#scro_r'
    }).autoscroll({
        autoplay: true,
        interval: 5000
    }).navigator({
        navi:'#scro_nav'
    });

})
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
