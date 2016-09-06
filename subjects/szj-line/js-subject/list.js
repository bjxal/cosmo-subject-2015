$(function(){
	//焦点图
	var slider = {
	    init: function(container , config , setheight){
	        var self = this;
	        self.config = {
	            'speed': 500,
	            'loop': true,
	            'simulateTouch': true,  
	            'autoplay': false,
	            'resistanceRatio': 0.5
	        }
	        $.extend(true, self.config, config);
	        self.container = container;
	        var oslider = self.initial();
	        if(setheight){
	            self.setHeight(container);
	        }
	        return oslider;
	    },
	    setHeight: function(c){
	        var self = this;
	        var thisCont = c.find('.swiper-wrapper'),
	            CW = $('body').width();
	        thisCont.css('height' , parseInt(CW*3/4) + 'px');
	       
	        $(window).resize(function(){
	            CW = $('body').width();
	            thisCont.css('height' , parseInt(CW*3/4) + 'px');
	        });
	    },
	    initial: function(){
	        var self = this;
	        return self.container.find('.swiper-container').swiper({
	            preloadImages: false,
	            lazyLoading: true,
	            slidesPerView : self.config.slidesPerView,
	            pagination: self.container.find('.swiper-pagination'),  
	            paginationClickable: true,
	            loop: self.config.loop,
	            autoplay: self.config.autoplay,
	            resistanceRatio : self.config.resistanceRatio,
	            simulateTouch: self.config.simulateTouch,
	            speed: self.config.speed,
	            onSlideChangeStart: self.config.changeStart,
	            onSlideChangeEnd: self.config.changeEnd,
	            onClick : self.config.onclick
	        })
	    }
	}

	var indexSlider = $('[node-type="focus-slider"]');
	slider.init(indexSlider,{
	    'autoplay': 3000,
	    'speed': 1000
	},true);


	//加载更多
	var page =1,
		baseUrl = 'http://bzh5.cellz.cn/songzhongji/';
	getList(page);
	function getList (page) {
	    $.ajax({
	        type: 'post',
	        url: 'list.php',
	        dataType: 'json',
	        data: {'page':page},
	        success: function(result) {
	            if (result.err == 0) {
	            	//console.log(result.msg =='')
	            	if(result.msg != ''){
	            		$.each(result.msg, (function(k, v){
		                    imgArr = v.img.split('upload/');
		                    //console.log(imgArr);
		                    url = baseUrl+'share.php?username=' + v.username + '&img=/upload/' + imgArr[1];
		                    $('.s-list').append('<div class="list-items"><div class="info"><span class="name">'+ v.username +'</span><span class="time">'+ v.time +'</span><a class="share" href="'+ url +'">分享</a></div><img src="'+ v.img +'"></div>');

		                }));
		                $(".loading").css('display','block');
	            	}else{
	            		$(".loading").css('display','none');
	            	}
	            } else {
	                alert(result.msg);
	            }
	        }
	    });
	}

	window.addEventListener('scroll',function(e){
		var winHeight = $(window).height();
		var scrollNum = $(window).scrollTop();
		var bdHeight = $(document.body).height();
		
		if((winHeight + scrollNum) >= bdHeight){
	        page++;
	        getList(page);
		};

	});	

});