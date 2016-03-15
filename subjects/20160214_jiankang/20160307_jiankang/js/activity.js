$(document).ready(function(){
    //���ذ�ť
    $(".top,.tit").on("click",function(e){
        var $tar = $(e.target);
        if($tar[0].nodeName.toLowerCase()=="a") return;
        history.back(-1);
    })
    //F6-2 ����
    $(".apply_addr span").on("click",function(e){
        var $tar = $(e.target);
        $tar.next().focus();
    });
    $("#apply_address").on("blur",function(e){
        var $tar = $(e.target);
        var val = $tar.val();
        //if(val.indexOf("��")==-1 || val.indexOf("��Ԫ")==-1){
        if(val==""){
            $(".login_btn").removeClass("cur");
            $(".apply_2.mar_t span").addClass("show");
            return;
        };
        $(".login_btn").addClass("cur");
        $(".apply_2.mar_t span").removeClass("show");
    });
    //F3-4 ֧��
    $("#promo_code").on("blur",function(e){
        var $tar = $(e.target);
        var val = $tar.val();
        if(val=="" || val==null) {
            $(".rt.promo").removeClass("cur");
            return;
        }
        $(".rt.promo").addClass("cur");
    });
    //F3-4 �Żݰ�ť
    var youhui_url = "";
    $(".rt.promo").on("click",function(e){		
        var val = $("#promo_code").val();
        $(".enroll_count .rt").html("150Ԫ");
    });
    /*activity_enroll*/
    $(".show_all").on("click",function(e){
        var $tar = $(e.target);
        var cname = $tar.attr("class");
        if(cname.indexOf("down")!=-1){
            $tar.removeClass("down").addClass("up");
            $tar.parents(".apply").addClass("showAll");
        }
        if(cname.indexOf("up")!=-1){
            $tar.removeClass("up").addClass("down");
            $tar.parents(".apply").removeClass("showAll");
        }
    })
    /*��һ��*/
    $(".login_btn").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        var cname = $tar.attr("class");
        if($par.attr("class").indexOf("activity_promo")!=-1 && cname.indexOf("cur")==-1){
            $(".activity_promo .apply_2.mar_t span").addClass("show");
			return;
        }
        if(cname.indexOf("cur")==-1) return;
        var sure_code = $tar.data("sure");
        if(sure_code=="pay"){
            if(cname.indexOf("cur")==-1){
                $(".pop").find(".reg_login_tip div").html("��ѡ��֧����ʽ").next().html("��").next().html("��").parents(".pop").fadeIn();
                return;
            }
            else{
                //���ɹ�
                $(".pop").find(".reg_login_tip div").html("֧�����ɹ�").next().html("ȡ��֧��").attr("href","users_3.html").next().html("����֧��").parents(".pop").fadeIn();
                return;
            }
        }
        if(sure_code=="pay_status"){
            $(".pop").fadeIn();
            return;
        }
        var nextUrl = $tar.data("nexturl");
        var ajax = $tar.data("ajax");
        var tips = $tar.data("tips");
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
    })
    //�û�Э��
    $(".reg_agree").on("click",function(e){
        $(e.target).toggleClass("cur");
    });
    //ɾ��
    $(".info_v .sel_btn").on("click",function(e){
        var $tar = $(e.target);
        $tar.parents(".list").addClass("del");
    });
    //F3-4 ֧����ʽ
    $(".pay_list .sel_btn").on("click",function(e){
        var $tar = $(e.target);
        $(".item").find(".sel_btn").removeClass("cur");
        $tar.addClass("cur");
    });
    //F3-4 ֧����ʽ����
    $(".enroll_pay").on("click",function(e){
        $(".pay_select").fadeIn();
    });
    //F3-4 ѡ��֧����ʽ
    $(".pay_select .login_btn").on("click",function(e){
        var $tar = $(e.target);
        var val = $(".pay_select").find(".cur").data("code");
        if(val=="" || val==null) return;
        $(".enroll_pay .sel_arr").html(val);
        $tar.parents(".pay_select").fadeOut();
        $(".login_btn").addClass("cur");
    });
    //��ά��
    $(".ewm").on("click",function(e){
        var $tar = $(e.target);
        var url = $tar.data("imgurl");
        $(".ewm_c img").attr("src",url);
        $(".pop.ewm_c").fadeIn();
    });
    /*activity_promo*/
    $(".phone").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".phone_tips").fadeIn();
    })
    $(".pop").on("click",function(e){
        $(this).fadeOut();
    })
    /*����*/
    $(".share_mine").on("click",function(e){
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
    /*birth*/
    sel = "sex";
    $par_c = {};
    $(".sel_arr").on("click",function(e){
        var $tar = $(e.target);
        sel = $tar.data("sel");
        $par_c = $tar.parents(".apply");
        $(".btm_sel").fadeIn();
        if(sel=="sex"){
            $(".btm_sel").find(".sex_sel").addClass("show");
        }
        else if(sel=="birthday"){
            $(".btm_sel").find(".birthday_sel").addClass("show");
        }
    })
    $(".selectEnd").on("click",function(e){
        var $tar = $(e.target);
        var tag = $tar.data("tag");
        var val = "";
        if(tag=="sex"){
            val = $("#demo_dummy").val();
        }
        else if(tag=="birthday"){
            val = $("#datetimeDate-demo").val().replace(/\//g,".");
        }
        $par_c.find(".user_"+sel).html(val).parents("."+sel).parents("body").find(".btm_sel").fadeOut().find("."+sel+"_sel").removeClass("show");
    });
    /*close select*/
    $(".btm_sel").on("click",function(e){
        var $tar = $(e.target);
        var cname = $tar.attr("class");
        if(cname.indexOf("item_sel")==-1){
            $(this).find(".show").removeClass("show");
            $(this).fadeOut();
        }
    })
})
$(function(){
    if($('#demo').length>0){
        var demoContainer = $('.demo-wrapper-datetimeDate');
        demoContainer.show();

        $('#demo').mobiscroll().select({
            theme: 'mobiscroll',
            lang: "zh",
            display: 'inline',
//			minWidth: 200,
            mode: "datetimeDate"
        });
    }
    if($('#datetimeDate-demo').length>0){
        $('#datetimeDate-demo').mobiscroll().date({
            theme: "ios",
            lang: "zh",
            display: "inline",
            mode: "datetimeDate"
        });
    }
});