<?php
$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$img = isset($_REQUEST['img']) ? $_REQUEST['img'] : '';
?>
<!DOCTYPE html>
<html style="height:100%;overflow: hidden;">
<head>
    <meta http-equiv="content-type" content="text/html;charset=gbk" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta HTTP-EQUIV="pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
    <meta HTTP-EQUIV="expires" CONTENT="0">
    <meta name="apple-touch-fullscreen" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta http-equiv="Expires" content="-1" />
    <meta http-equiv="pragram" content="no-cache" />
    <title>快来撩老公！#芭光宋仲基##芭莎in，我的时尚朋友圈#</title>

    <link id="css" rel="stylesheet" href="css-subject/list.css" media="screen" />
    <script type="text/javascript" src="http://new-icon.bazaar.net.cn/common/js/jquery.js"></script>
</head>
<body style="height:100%;overflow: hidden;">
<!-- <img src="img-subject/share.jpg" style="opacity: 0; z-index: -1; position: absolute;" class="share-img" /> -->
<div class="share-wrap">
    <!--top bar start-->
    <div class="top-bar">
        <a href="index.html" class="camera"></a>
    </div>
    <!--top bar end-->
    
    <div class="photo-box">
        <img src='http://bzh5.cellz.cn/songzhongji<?php echo $img;?>' width="100%" />
    </div>
    
    <p class="save-tips">长按大片保存，或分享给好友一起拍大片</p>
    <div class="show-btn"><img src="img-subject/show-btn.jpg" width="244"></div>
    <div class="look-btn"><a href="list.html"><img src="img-subject/look-btn.jpg" width="235"></a></div>

    <div class="share-mask">
        <div class="cont">
            <span class="close-btn"></span>
            <div class="down-box">
                <a href="http://m.bazaar.com.cn/static/zz.html" class="btn"></a>
                <img src="img-subject/share-mask.jpg" width="100%" />
            </div>
            <div class="share-box">
                <span class="wx-btn"></span>
                <span class="bdsharebuttonbox"><a class="bds_tsina" data-cmd="tsina"></a></span>

                <script>
                window._bd_share_config = {
                    common : {
                        bdText : document.title,    
                        bdDesc : document.title,    
                        bdUrl : window.location.href,
                        bdPic : $('.photo-box img').attr('src')
                    },
                    share : [{
                        "bdSize" : 16
                    }]
                }
                with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
              </script>
            </div>
        </div>
    </div>
    <div class="wx-mask"><img src="img-subject/wx-layer.png" width="100%" /></div>
</div>


<script>
    $(function(){
        $('.show-btn').click(function(){
            $('.share-mask').fadeIn();
        });
        $('.share-mask').click(function(){
            $('.share-mask').fadeOut();
        });
        $('.share-mask .close-btn').click(function(){
            $('.share-mask').fadeOut();
        });
        $('.share-mask .cont').click(function(e){
            e.stopPropagation();
        });
        $('.share-mask .wx-btn').click(function(){
            $('.wx-mask').fadeIn();
        });
        $('.wx-mask').click(function(){
            $(this).fadeOut();
        });
    })
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?691d3b39771dcee4771bd47bb50b6102";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>



</body>
</html>