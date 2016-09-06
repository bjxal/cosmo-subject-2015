var USERS = function(){}
USERS.prototype = {
    /*collect*/
    collect_event_show : function(e){
        var $tar = $(e.target);
        $tar.find(".cancel").fadeIn();
    },
    collect_event_hide : function(e){
        var $tar = $(e.target);
        $tar.find(".cancel").fadeOut();
    },
    /*cancel*/
    cancel_event : function(e){
        var $tar = $(e.target);
        $tar.parents("li").addClass("hide")//.remove();
    },
    /*users report*/
    report_event_show:function(e){
        var $tar = $(e.target);
        $tar.find(".pro-edit").fadeIn();
    },
    report_event_hide:function(e){
        var $tar = $(e.target);
        $tar.find(".pro-edit").fadeOut();
    },
    /*upload avatar*/
    upload_event:function($obj){
        $obj.uploadPreview({
            Img:"ImgPr",
            Width:230,
            Height:230,
            ImgType:["jpeg","jpg","png","gif"],
            Callback:function cb(){
                //var url = '';
                //var imgUrl = "";
                //$.ajaxFileUpload({
                //    url:url,
                //    secureuri:false,
                //    fileElementId:"uploadBtn",
                //    dataType: 'text',
                //    success: function (href)
                //    {
                //        imgUrl = href;
                //    var obj = {
                //        "imgUrl":imgUrl
                //    };
                //    $.post('',obj,function(data){
                //        console.log(arguments);
                //    })
                //    },
                //    error: function (data, status, e)
                //    {
                //        alert(e);
                //    }
                //});
            }
        });
    },
    /*tab change*/
    tab_event:function(e){
        var $tar = $(e.target);
        var $par = $tar.parents(".users-edit").find(".edit-tab");
        var tab = $tar.data("tab");
        $tar.addClass("cur").siblings().removeClass("cur");
        $par.find("."+tab+"-tab").show().siblings().hide();
    },
    /*radio*/
    radio_event:function(e){
        var $tar = $(e.target);
        var val = $tar.data("val");
        $tar.addClass("cur").siblings().removeClass("cur");
        $("#sex").val(val);
    },
    /*del*/
    del_event:function(e){
        var $tar = $(e.target);
        $tar.parents("li").addClass("hide");//remove();
    },
    /*clear*/
    clear_event:function(e){
        $(".news .left-list").html("");
    },
    /*year*/
    YYYYMMDDstart:function(){
        console.log(USERS)
        var me = USERS.prototype;
        MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        //先给年下拉框赋内容
        var y  = new Date().getFullYear();
        for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年
            document.reg_testdate.YYYY.options.add(new Option(" "+ i +" 年", i));

        //赋月份的下拉框
        for (var i = 1; i < 13; i++)
            document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i));

        document.reg_testdate.YYYY.value = y;
        document.reg_testdate.MM.value = new Date().getMonth() + 1;
        var n = MonHead[new Date().getMonth()];
        if (new Date().getMonth() ==1 && me.IsPinYear(YYYYvalue)) n++;
        me.writeDay(n); //赋日期下拉框Author:meizz
        document.reg_testdate.DD.value = new Date().getDate();
    },
    YYYYDD:function(str) //年发生变化时日期发生变化(主要是判断闰平年)
    {
        var me = USERS.prototype;
        var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
        if (MMvalue == ""){ var e = document.reg_testdate.DD; me.optionsClear(e); return;}
        var n = MonHead[MMvalue - 1];
        if (MMvalue ==2 && this.IsPinYear(str)) n++;
        me.writeDay(n)
    },
    MMDD:function(str)   //月发生变化时日期联动
    {
        var me = USERS.prototype;
        var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;
        if (YYYYvalue == ""){ var e = document.reg_testdate.DD; me.optionsClear(e); return;}
        var n = MonHead[str - 1];
        if (str ==2 && this.IsPinYear(YYYYvalue)) n++;
        me.writeDay(n)
    },
    writeDay:function(n)   //据条件写日期的下拉框
    {
        var me = USERS.prototype;
        var e = document.reg_testdate.DD; me.optionsClear(e);
        for (var i=1; i<(n+1); i++)
            e.options.add(new Option(" "+ i + " 日", i));
    },
    IsPinYear:function(year)//判断是否闰平年
    {
        return(0 == year%4 && (year%100 !=0 || year%400 == 0));
    },
    optionsClear:function(e)
    {
        e.options.length = 1;
    }
}
var users_event = new USERS();

$(document).ready(function(){
    /*** collect ***/
    $(".collect-list li").on("mouseenter",function(e){
        users_event.collect_event_show(e);
    }).on("mouseleave",function(e){
        users_event.collect_event_hide(e);
    });
    /* cancel */
    $(".collect-list li a.cancel").on("click",function(e){
        users_event.cancel_event(e);
    });
    /*** users report ***/
    $(".report-list-c li").on("mouseenter",function(e){
        users_event.report_event_show(e);
    }).on("mouseleave",function(e){
        users_event.report_event_hide(e);
    });
    /*upload avatar*/
    var $upload_avt = $("#uploadBtn");
    if($upload_avt.length>0){
        users_event.upload_event($upload_avt);
    }
    /*tab*/
    $(".users-edit .nav-c a").on("click",function(e){
        users_event.tab_event(e);
    });
    /** apply **/
    $(".users-edit .form-div a.radio").on("click",function(e){
        users_event.radio_event(e);
    });
    /*** news delete ***/
    $(".news-list li span.del").on("click",function(e){
        users_event.del_event(e);
    });
    /** news clear **/
    $(".news .applying-nav span.clear").on("click",function(e){
        users_event.clear_event(e);
    });
    /** report delete **/
    $(".report-list-c li a.del").on("click",function(e){
        users_event.del_event(e);
    });
    /** birth **/
    $("#year").on("change",function(){
        users_event.YYYYDD(this.value)
    });
    $("#month").on("change",function(){
        users_event.MMDD(this.value)
    });
});
if(document.attachEvent)
    window.attachEvent("onload", users_event.YYYYMMDDstart);
else
    window.addEventListener('load', users_event.YYYYMMDDstart, false);