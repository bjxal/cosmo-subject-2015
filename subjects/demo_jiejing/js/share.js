var shareData = {
    title: '【全景故宫】',
	desc: '无与伦比的建筑杰作，中国古代汉族宫廷建筑之精华，世界五大宫之首！',
    link: 'http://www.visualbusiness.org/palace/index.html',
    imgUrl: 'http://www.visualbusiness.org/palace/images/share_img.jpg'
  };
  var nonceStr;
  var timeStamp;
  var signature;
  
	function initConfig() {
	 wx.config({
      debug: false,
      appId: 'wxa0c7da25637df906',
      timestamp: timeStamp,
      nonceStr: nonceStr,
      signature: signature,
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        
      ]
	});
    wx.ready(function(){
            wx.onMenuShareAppMessage(shareData);
			wx.onMenuShareTimeline(shareData);
        });
    wx.error(function(obj){
		var props = "" ; 
		  // 开始遍历 
		  for ( var p in obj ){ // 方法 
		  if ( typeof ( obj [ p ]) == " function " ){ obj [ p ]() ; 
		  } else { // p 为属性名称，obj[p]为对应属性的值 
		  props += p + " = " + obj [ p ] + " /t " ; 
		  } } // 最后显示所有的属性 
		  //alert ( props ) ;
		});
    
	}

 function getShareInfo(url) {
	 var newUrl = url.replace(new RegExp("&","g"),"%26");
	 var mUrl = 'http://sfs.visualbusiness.cn/SimpleServer/signature_q?appId=wxa0c7da25637df906&url='+newUrl;
	  $.get(mUrl, function (response) {
          if (response) {
			  var dataJson = eval("("+response+")");
			  nonceStr = dataJson.noncestr;
			  timeStamp = dataJson.timestamp;
			  signature = dataJson.signature;
			  initConfig();
          }
      });
	  
  }
 


 
