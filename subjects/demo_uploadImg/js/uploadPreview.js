/*
*参数说明: Img:图片ID;Width:预览宽度;Height:预览高度;ImgType:支持文件类型;Callback:选择文件后回调方法;
*插件说明: 基于JQUERY扩展,需要引用JQUERY库。
v1.2:更新jquery1.9以上版本 插件报错BUG 
*/
jQuery.fn.extend({
    uploadPreview: function (opts) {
        var _self = this, _this = $(this);
		console.log(this)
        opts = jQuery.extend({
            Img: "ImgPr",
            Width: 100,
            Height: 100,
			Thumb:"thumbList",
			ImgNone:"img_none",
            ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
            Callback: function () { }
        }, opts || {});
        _self.getObjectURL = function (file) {
            var url = null;
            if (window.createObjectURL != undefined) {
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        }
        _this.change(function (e) {
			var tar = e.target;
            if (this.value) {
                if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                    //alert("选择文件错误,图片类型必须是" + opts.ImgType.join("，") + "中的一种");
                    this.value = "";
                    return false;
                }
				var thumb_0 = $("."+opts.Thumb+" ."+opts.ImgNone).eq(0);
                if (navigator.userAgent.indexOf("MSIE") > -1) {
                    try {
                        $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]));
						thumb_0.attr('src', _self.getObjectURL(this.files[0]));
                    } catch (e) {
                        var src = "";
                        var obj = $("#" + opts.Img);
                        var div = obj.parent("div")[0];
                        _self.select();
                        if (top != self) {
                            window.parent.document.body.focus();
                        } else {
                            _self.blur();
                        }
                        src = document.selection.createRange().text;
                        document.selection.empty();
                        obj.hide();
                        obj.parent("div").css({
                            'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
                            'width': opts.Width + 'px',
                            'height': opts.Height + 'px'
                        });
                        div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
                    }
                } else {
                    $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]));
                    thumb_0.attr('src', _self.getObjectURL(this.files[0]));
					thumb_0.removeClass("img_none");
                }
				if(_self.getObjectURL(this.files[0])!="") $(tar).hide();
                opts.Callback();
            }
        });
    }
});