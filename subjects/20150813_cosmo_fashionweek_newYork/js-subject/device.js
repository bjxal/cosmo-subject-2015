;(function(){if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        var phoneScale = parseInt(window.screen.width)/450;
        document.write('<meta name="viewport" content="width=450, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
    }else{
        document.write('<meta name="viewport" content="width=450, target-densitydpi=device-dpi">');
    }
}else{
    document.write('<meta name="viewport" content="width=450, user-scalable=no">');
}
//微信去掉下方刷新栏
    if(navigator.userAgent.indexOf('MicroMessenger') >= 0){
        document.addEventListener('WeixinJSBridgeReady', function() {
            //WeixinJSBridge.call('hideToolbar');
        });
    }})();