var APPLYS = function(){};
APPLYS.prototype = {
    swipe_fun:function(iswiperCont,cname){
        var indexSwiper = new Swiper(cname, {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            //autoplay: 4000,
            loop: true
        });

        iswiperCont.find('.swiper-button-prev').on('click', function(e){
            e.preventDefault();
            indexSwiper.swipePrev();
        });
        iswiperCont.find('.swiper-button-next').on('click', function(e){
            e.preventDefault();
            indexSwiper.swipeNext();
        });

        iswiperCont.mouseenter(function(){
            indexSwiper.stopAutoplay();
        });
        iswiperCont.mouseleave(function(){
            indexSwiper.startAutoplay();
        });
    },
    help_wrod_fun:function($ad_txt){
        $ad_txt.scrollable({circular:true,vertical:true}).autoscroll({autoplay: true,interval: 2000});
    },
    reportList_event:function(e){
        var $tar = $(e.target);
        var id = $tar.data("id");
        $tar.addClass("cur").siblings().removeClass("cur");
        $(".left-list ul").eq(id).addClass("cur").siblings().removeClass("cur");
    },
    detail_event:function(e){
        var $tar = $(e.target);
        var id = $tar.data("id");
        var $par = $tar.parents(".applied-reports-list");
        if(id==0){
            $par.find(".info-tit").removeClass("info-tit-2");
        }
        else{
            $par.find(".info-tit").addClass("info-tit-2");
        }
        $tar.addClass("cur").siblings().removeClass("cur");
        $par.find(".info-list").eq(id).addClass("cur").siblings().removeClass("cur");
    },
    radio_event:function(e){
        var $tar = $(e.target);
        var val = $tar.data("val");
        $tar.addClass("cur").siblings().removeClass("cur");
        $("#sex").val(val);
    },
    textarea_fun:function($obj){
        var len = $obj.val().length;
        if(len > 150){
            $obj.val($obj.val().substring(0,149));
            return false;
        }
        $(".next-btn span em").text(len);
        if(len<15 || len>150){
            $(".next-btn span em").css("color","#ef0000");
        }
        else{
            $(".next-btn span em").css("color","#000000");
        }
    },
    formTips_event:function(e){
        var $tar = $(e.target);
        $tar.parents(".form-tips").fadeOut();
    },
    nextStep_event:function(e){
        var $tar = $(e.target);
        var words = $tar.parents(".apply").find("#apply-word-c").val() || "";
        if(words=="" || words.length<15){
            $(".form-tips").fadeIn();
            $(".tips-info").html("请填写15~150字之内的申请宣言");
            return false;
        }
        $tar.parents(".apply").find(".apply-process-list li.process-2").addClass("cur").siblings().removeClass("cur");
        $tar.parents(".apply-word").hide().siblings(".apply-details").show();
    },
    back_event:function(e){
        var $tar = $(e.target);
        $tar.parents(".apply").find(".apply-process-list li.process-1").addClass("cur").siblings().removeClass("cur");
        $tar.parents(".apply-details").hide().siblings(".apply-word").show();
    },
    hardOver_event:function(e){
        var $tar = $(e.target);
        var $par = $tar.parent();
        var id = $tar.index();
        var hard_w = "";
        var words = ["有待提升","效果一般","还不错","很好用","非常好用"];
        switch(id){
            case 0:
                hard_w = words[0];
                break;
            case 1:
                hard_w = words[1];
                break;
            case 2:
                hard_w = words[2];
                break;
            case 3:
                hard_w = words[3];
                break;
            case 4:
                hard_w = words[4];
                break;
        }
        $(".hard-word").html(hard_w);
        $.each($par.find("a"),function(i,item){
            if(i<=id){
                $(item).addClass("red");
            }
            else{
                $(item).removeClass("red");
            }
        });
        $("#report-hard").val(id+1);
        $par.next().find("span").html(id+1);
    },
    hardClick_event:function(e){
        var $tar = $(e.target);
        var $par = $tar.parent();
        var id = $tar.index();
        $.each($par.find("a"),function(i,item){
            if(i<=id){
                $(item).addClass("red");
            }
            else{
                $(item).removeClass("red");
            }
        });
        $("#report-hard").val(id+1);
        $par.next().find("span").html(id+1);
    },
    proTab_event:function(e){
        var $tar = $(e.target);
        var $par = $tar.parent();
        var len = $par.find("a.cur").length;
        var cname = $tar.attr("class") || "";
        if(len>=3 && cname.indexOf("cur")==-1){
            $(".form-tips").fadeIn().find(".tips-info").html("最多选择3项");
            return false;
        }
        $tar.toggleClass("cur");
        $("#report-tab").val($par.find("a.cur").length);
    },
    countDown_fun:function(e){
        //var stringTime = createTime || 0;
        //var end = Date.parse(new Date(stringTime.replace(/-/g,"/"))) / 1000 + 30*60;
        var end = Date.parse(new Date()) / (1000*3600) + 3*24;
        var int = setInterval(function(){
            var now = Date.parse(new Date()) / (1000*3600) ;
            var v = parseInt(end) - parseInt(now);
            var d = Math.floor(v/24);
            var h = Math.floor(v-d*24);
            if(h<0 || d<0){
                clearInterval(int);
                //$(".order_detail_users .login_btn").removeClass("cur");
                return;
            }
            d = (String(d).length<2)?"0"+d:d;
            h = (String(h).length<2)?"0"+h:h;
            $(".time-day").html(d);
            $(".time-hour").html(h);
        },3600*1000);
    },
    /*year*/
    YYYYMMDDstart:function(){
        var me = APPLYS.prototype;
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
        var me = APPLYS.prototype;
        var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
        if (MMvalue == ""){ var e = document.reg_testdate.DD; me.optionsClear(e); return;}
        var n = MonHead[MMvalue - 1];
        if (MMvalue ==2 && this.IsPinYear(str)) n++;
        me.writeDay(n)
    },
    MMDD:function(str)   //月发生变化时日期联动
    {
        var me = APPLYS.prototype;
        var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;
        if (YYYYvalue == ""){ var e = document.reg_testdate.DD; me.optionsClear(e); return;}
        var n = MonHead[str - 1];
        if (str ==2 && this.IsPinYear(YYYYvalue)) n++;
        me.writeDay(n)
    },
    writeDay:function(n)   //据条件写日期的下拉框
    {
        var me = APPLYS.prototype;
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
var applys = new APPLYS();
$(document).ready(function(){
    /* 倒计时 */
    applys.countDown_fun();
    var iswiperCont = $('.index-swiper');
    if(iswiperCont.length>0){
        applys.swipe_fun(iswiperCont,'.swiper-container.index-swiper');
    }

    //广告文字链2
    var $ad_txt = $('#ad_txt');
    if($ad_txt.length>0){
        applys.help_wrod_fun($ad_txt);
    }

    /** report list **/
    $(".report-list .applying-report-nav a").on("click",function(e){
        applys.reportList_event(e);
    });

    /** apply detail **/
    $(".applied-reports-list .info-tit a").on("click",function(e){
        applys.detail_event(e);
    });

    /** apply **/
    $(".apply .apply-add .form-div a.radio").on("click",function(e){
        applys.radio_event(e);
    });
    /*字数限制*/
    $("#apply-word-c").keyup(function(){
        applys.textarea_fun($(this));
    });
    /*form tips*/
    $(".form-tips a").on("click",function(e){
        applys.formTips_event(e);
    });
    /* next step */
    $(".apply .next-step").on("click",function(e){
        applys.nextStep_event(e);
    });
    /*next back*/
    $(".apply .back").on("click",function(e){
        applys.back_event(e);
    });

    /***report**/
    /**hard**/
    $(".report .pro-score a").on("click",function(e){
        applys.hardClick_event(e);
    }).on("mouseenter",function(e){
        applys.hardClick_event(e);
        applys.hardOver_event(e);
    });
    /**tab**/
    $(".report .tab-list a").on("click",function(e){
        applys.proTab_event(e);
    });
    /* 生日日期 */
    if(document.reg_testdate!=undefined){
        if(document.attachEvent){
            window.attachEvent("onload", applys.YYYYMMDDstart);
        }
        else{
            window.addEventListener('load', applys.YYYYMMDDstart, false);
        }
    }
});
/*apply form submit*/
function postData(){
    var v_name = v_address = v_phone = v_sex = v_birth = v_skin = v_hair = "";
    v_name = $("#name").val() || "";
    v_address = $("#address").val() || "";
    v_phone = $("#phone").val() || "";
    v_sex = $("#sex").val() || "";
    v_birth = $("#year").val()+""+$("#month").val()+""+$("#day").val() || "";
    v_skin = $("#skin").val() || "";
    v_hair = $("#hair").val() || "";

    if(v_name=="" || v_address=="" || v_phone=="" || v_sex=="" || v_birth=="" || v_skin=="" || v_hair==""){
        $(".form-tips").fadeIn();
        $(".tips-info").html("请填写完整信息");
        return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(!myreg.test(v_phone)){
        $(".form-tips").fadeIn();
        $(".tips-info").html("请填写正确的手机号码");
        return false;
    }
    if(v_skin==0){
        $(".form-tips").fadeIn();
        $(".tips-info").html("请选择肤质");
        return false;
    }
    if(v_hair==0){
        $(".form-tips").fadeIn();
        $(".tips-info").html("请选择发质");
        return false;
    }
    $(".form-tips").fadeIn().find(".tips-c").addClass("success");
    $(".apply").find(".apply-process-list li.process-3").addClass("cur").siblings().removeClass("cur");
    return false;
    //return true;
}

/*report form submit*/
function postData_2(){
    var v_tit = v_txt = v_hard = v_tab = "";
    v_tit = $("#report-title").val() || "";
    v_txt = $("#report-txt").val() || "";
    v_hard = $("#report-hard").val() || 0;
    v_tab = $("#report-tab").val() || 0;
    alert(v_tab)
    if(v_tit==""){
        $("#report-title").parent().find(".form-null-tip").show();
        return false;
    }
    $(".form-null-tip").hide();
    if(v_hard==0){
        $("#report-hard").parent().find(".form-null-tip").show();
        return false;
    }
    $(".form-null-tip").hide();
    if(v_tab==0){
        $("#report-tab").parent().find(".form-null-tip").show();
        return false;
    }
    $(".form-null-tip").hide();
    //if(v_tit=="" || v_hard==0 || v_tab==0){
    //    $(".form-tips").fadeIn();
    //    $(".tips-info").html("请填写完整信息");
    //    return false;
    //}
    $(".form-tips").fadeIn().find(".tips-c").addClass("success");
    $(".report").find(".apply-process-list li.process-2").addClass("cur").siblings().removeClass("cur");
    return false;
}