(function($) {
	$.fn.CSscrollbar = function(options) {
		var defaultOptions = {
			'scrollbar': '.CSscrollbar',
			'scrollHander': '.CSscrollbar .CSscrollHander',
			'mousewheelSpeed': 10,
			'arrowKeySpeed': 10,
			'autoScrollSpeed' : 1000
		};
		return this.each(function() {
			//console.log('init');
			var settings = $.extend(true, {}, defaultOptions, options);
			var $container = $(this),
				$content = $container.children();
			if ($content.size() !== 1) {
				//console.log('必须container 下只能有一个content元素');
				return;
			}
			var $scrollbar = $(settings.scrollbar),
				$scrollHander = $(settings.scrollHander),
				$document = $(document),
				scrollbarHeight = $scrollbar.height(),
				containerHeight = $container.height(),
				contanerWidth = $container.width(),
				contentHeight = $content.height(),
				scrollHanderHeight, iScale = 0,
				isDragging = false;
			var currentIndex = 0;
			var isBottom = false,
				$items = $content.children(),
				itemsNum = $items.size();
			// var originalPageY, currentPageY, originalTop, currentTop;
			var autoScrollhandler = null;
			init();

			function bindDragHandler() {
				$scrollHander.bind('dragging', function() {
					fixScrollhanderPosition();
					updateContentPosition();
				});
				$scrollHander.bind('dragstart', function(e, eventObj) {
					$scrollHander.css({
						'background-color': '#f23e8c'
					});
					stopAutoScroll();
					isDragging = true;
				});
				$scrollHander.bind('dragend', function(e, eventObj) {
					$scrollHander.css({
						'background-color': '#f23e8c'
					});
					isDragging = false;
					//如果在container上释放拖动，不启动自动滚动
					var containerOffset = $container.offset();
					if(eventObj.pageX >= containerOffset.left && eventObj.pageX <= containerOffset.left + contanerWidth && eventObj.pageY >= containerOffset.top &&eventObj.pageY <= containerOffset.top + containerHeight){
						return;
					}
					updateCurrentIndex();
					startAutoScroll();
				});
				$scrollHander.bind('mouseover', function() {
					stopAutoScroll();
				});
				$scrollHander.bind('mouseout', function() {
					if (isDragging) {
						return;
					}
					startAutoScroll();
				});
			}

			function bindMousewheelhandler() {
				$container.bind('mousewheel', function(e, delta, deltaX, deltaY) {
					e.preventDefault();
					var speed = (deltaY == 1 ? -10 : 10);
					updateScrollHanderPostionBy(speed);
					fixScrollhanderPosition();
					updateContentPostionBy(speed / iScale);
					fixContentPosition();
				});
			}

			function bindmouseoverhandler() {
				$container.bind('mouseleave', function() {
					if (isDragging) {
						return;
					}
					updateCurrentIndex();
					startAutoScroll();
				});
				$container.bind('mouseenter', function() {
					if (isDragging) {
						return;
					}
					stopAutoScroll();
				});
			}

			function fixScrollhanderPosition() {
				var top = parseInt($scrollHander.css('top'), 10);
				if (top <= 0) {
					$scrollHander.css({
						'top': 0
					});
					isBottom = false;
					return;
				}
				if (top >= scrollbarHeight - scrollHanderHeight) {
					isBottom = true;
					$scrollHander.css({
						'top': scrollbarHeight - scrollHanderHeight
					});
					return;
				}
				isBottom = false;
			}

			function fixContentPosition() {
				var top = parseInt($content.css('top'), 10);
				if (top >= 0) {
					$content.css({
						'top': 0
					});
					return;
				}
				if (top <= containerHeight - contentHeight) {
					$content.css({
						'top': containerHeight - contentHeight
					});
				}
			}

			function updateScrollHanderPostionBy(dis) {
				$scrollHander.css({
					'top': '+=' + dis
				});
			}

			function updateContentPostionBy(dis) {
				$content.css({
					'top': '-=' + dis
				});
			}

			function updateContentPosition() {
				// 拖动的时候调用
				var scrollhanderTop = parseInt($scrollHander.css('top'), 10);
				if (isBottom) {
					$content.css({
						'top': '-' + (contentHeight - containerHeight) + 'px'
					});
					return;
				}
				$content.css({
					'top': '-' + (scrollhanderTop / scrollbarHeight * contentHeight) + 'px'
				});
			}

			function setScrollHanderHeight() {
				scrollHanderHeight = containerHeight / contentHeight * scrollbarHeight;
				iScale = scrollbarHeight / contentHeight;
				$scrollHander.height(scrollHanderHeight);
			}

			function fixStyle() {
				$container.css({
					'overflow' : 'hidden'
				});
				$content.css({
					'top': 0
				});
				$scrollHander.css({
					'top': 0
				});
			}

			function scrollToNextItem() {
				var autoScrollContentTop = $items.eq(currentIndex + 1).position().top;
				var autoScrollhandlerTop = autoScrollContentTop * iScale;
				currentIndex++;
				if (autoScrollContentTop >= contentHeight - containerHeight) {
					currentIndex = -1;
					autoScrollContentTop = contentHeight - containerHeight;
					autoScrollhandlerTop = scrollbarHeight - scrollHanderHeight;
				}
				$content.animate({
					'top': '-' + autoScrollContentTop + 'px'
				});
				$scrollHander.animate({
					'top': autoScrollhandlerTop
				});
			}

			function updateCurrentIndex() {
				var currentContentTop = Math.abs(parseInt($content.css('top'), 10));
				$items.each(function(i, ele) {
					var $ele = $(ele),
						currentItemTop = $ele.position().top;
					if (currentItemTop <= currentContentTop && currentItemTop + $ele.outerHeight() > currentContentTop) {
						currentIndex = i;
						return false;
					}
					// if(currentItemTop > currentContentTop){
					// 	currentIndex = i - 1;
					// 	return false;
					// }
					// if(currentItemTop = currentContentTop){
					// 	currentIndex = i;
					// 	return false;
					// }
					return true;
				});
			}

			function startAutoScroll() {
				//console.log('startAutoScroll');
				if (autoScrollhandler) {
					clearTimeout(autoScrollhandler);
				}
				/*autoScrollhandler = setInterval(function() {
					scrollToNextItem();
				}, settings.autoScrollSpeed);*/
			}

			function stopAutoScroll() {
				//console.log('stopAutoScroll');
				if (autoScrollhandler) {
					clearTimeout(autoScrollhandler);
				}
			}

			function init() {
				fixStyle(); //这里必须有，否则chrome下 updateContentPostionBy 函数会失效，无法改变top值
				setScrollHanderHeight();
				$.fn.CSscrollbar.initDragable.call($scrollHander, {
					'onlyY': true
				});
				bindDragHandler();
				bindMousewheelhandler();
				bindmouseoverhandler();
				startAutoScroll();
			}
		});
	};
	$.fn.CSscrollbar.initDragable = function(options) {
		// options 

		var that = this,
			$document = $(document);
		var dragTriggerFlag = false,
			draggingFlag = false;
		var originalPosition = {}, dragStartPosition = {};
		that.bind('mousedown', function(e) {
			if (dragTriggerFlag) {
				dragTriggerFlag = false;
			}
			dragTriggerFlag = true;
			e.stopPropagation();
			e.preventDefault();
		});
		that.bind('mousemove', function(e) {
			if (!dragTriggerFlag) {
				return;
			}
			if (!draggingFlag) {
				draggingFlag = true;
				that.trigger('dragstart', [e]);
				return;
			}
			that.trigger('dragging', [e]);
			e.stopPropagation();
			e.preventDefault();
		});
		that.bind('mouseup', function(e) {
			if (draggingFlag) {
				draggingFlag = false;
				that.trigger('dragend', [e]);
			}
			dragTriggerFlag = false;
			e.stopPropagation();
			e.preventDefault();
		});
		//fix 当鼠标移动到 $scrollhander 的外面时
		$document.bind('mousemove', function(e) {
			if (draggingFlag) {
				that.trigger('dragging', [e]);
			}
		});
		$document.bind('mouseup', function(e) {
			if (draggingFlag) {
				draggingFlag = false;
				dragTriggerFlag = false;
				that.trigger('dragend', [e]);
			}
		});
		//draging 更新位置
		that.bind('dragstart', function(e, eventObj) {
			originalPosition.left = that.position().left;
			originalPosition.top = that.position().top;
			dragStartPosition.pageX = eventObj.pageX;
			dragStartPosition.pageY = eventObj.pageY;
		});
		that.bind('dragging', function(e, eventObj) {
			if (options && options.onlyX) {
				that.css({
					'left': originalPosition.left + eventObj.pageX - dragStartPosition.pageX
				});
				return;
			}
			if (options && options.onlyY) {
				that.css({
					'top': originalPosition.top + eventObj.pageY - dragStartPosition.pageY
				});
				return;
			}
			that.css({
				'left': originalPosition.left + eventObj.pageX - dragStartPosition.pageX,
				'top': originalPosition.top + eventObj.pageY - dragStartPosition.pageY
			});
		});
		//修复ie拖动时选中文本的问题
		that.bind('dragstart', function() {
			$(document).bind('selectstart', function() {
				return false;
			});
		});
		that.bind('dragend', function() {
			$(document).unbind('selectstart');
		});
	};
})(jQuery);