$(document).ready(function(){
    //返回按钮
    $(".top,.tit").on("click",function(e){
        var $tar = $(e.target);
        if($tar[0].nodeName.toLowerCase()=="a") return;
        history.back(-1);
    })
    /*下一步*/
    $(".login_btn").on("click",function(e){
        var $tar = $(e.target);
        var cname = $tar.attr("class");
        if(cname.indexOf("cur")==-1) return;
        var nextUrl = $tar.data("nexturl");
        var ajax = $tar.data("ajax");
        var tips = $tar.data("tips");
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
        else if(ajax){
            $par.find(".tips").fadeIn();
        }
        else if(tips){
            $par.find(".tips").fadeIn();
        }
    });
    //F6-7 发布我的炫耀贴
    $(".item input,.item textarea").on("blur",function(e){
        var $tar = $(e.target);
        var input1 = $("#input_1").val();
        var input2 = $("#input_2").val();
        var input3 = $("#input_3").val();
        var input4 = $("#input_4").val();
        var input5 = $("#input_5").val();
        if(input1==""||input2==""||input3==""||input4==""||input5==""){
            $(".login_btn").addClass("cur");
            return;
        }
        $(".login_btn").addClass("cur");
    });
    //F5-6 分享我的活动照片
    $(".activity_share textarea").on("blur",function(e){
        var $tar = $(e.target);
        if($tar.val()==""){
            $(".login_btn").removeClass("cur");
            return;
        }
        $(".login_btn").addClass("cur");
    });
    /*activity_promo*/
    $(".phone").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".phone_tips").fadeIn();
    });
    $(".close_tips").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".phone_tips").fadeOut();
        $par.find(".tips").fadeOut();
    });
    /*分享*/
    $(".share_mine").on("touchend",function(e){
        $(".share_mine").fadeOut();
    })
    $(".share_icon").on("click",function(e){
        $(".share_act").fadeIn().find(".share_c").addClass("show")
    });
    $(".share_act").on("click",function(e){
        var $tar = $(e.target);
        if($tar[0].nodeName.toLowerCase()!="a"){
            $(this).find(".share_c").removeClass("show").parent().fadeOut();
        }
    });
    //上传图片
    var input = document.getElementById("up");
    var result= document.getElementById("result1");
    var img_area = document.getElementById("img_area");
    if ( typeof(FileReader) === 'undefined' ){
        //result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
        //input.setAttribute( 'disabled','disabled' );
    } else {
        input.addEventListener( 'change',readFile,false );
    }
});
function readFile(){
    var file = this.files[0];
    var result= document.getElementById("result1");
    var img_area = document.getElementById("ImgPr");
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        result.innerHTML = this.result;
        img_area.src = this.result;
    }
}
(function ($) {
    //扩展方法获取url参数
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    //得到url参数
    var urltype = $.getUrlParam('reurl');

})(jQuery);