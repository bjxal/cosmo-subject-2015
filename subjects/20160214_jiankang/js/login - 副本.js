$(document).ready(function(e){
    //返回按钮
    $(".top,.tit").on("click",function(e){
        var $tar = $(e.target);
        if($tar[0].nodeName.toLowerCase()=="a") return;
        history.back(-1);
    });
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var login_url = "";
    var code_url = "";
    //F1-1 登录验证
    $(".login #pwd").on("blur",function(e){
        var $tar = $(e.target);
        if($tar.val()==""){
            $(".login_tip").html("密码不能为空").addClass("show");
            return;
        }
        else{
            //ajax
            $.post(
                login_url,
                {
                    "phone":$("#phoneNum").val(),
                    "pwd":$("#pwd").val()
                },
                function(data){
                    //data:{err:0,msg:""}
                    if(data.err==0){
                        $(".login_tip").html("").removeClass("show");
                        $(".login_btn").addClass("cur");
                    }
                    else{
                        $(".login_tip").html("密码填写错误").addClass("show");
                    }
                }
            );
        }
    });
    //F1-2 用户协议
    $(".reg_agree").on("click",function(e){
        $(e.target).toggleClass("cur");
    });
    //F1-2 手机号验证
    $("#phoneNum").on("blur",function(e){
        var $tar = $(e.target);
        var phone = $tar.val();
        if(!myreg.test(phone)){
            $(".login_tip").html("请填写正确的手机号码").addClass("show");
            $(".reg_send").removeClass("cur");
            $(".pwd_tip").html("请输入XXXX收到的手机验证码");
            return;
        }
        $(".reg_send").addClass("cur");
        $(".pwd_tip").html("请输入 "+phone+" 收到的手机验证码");
    });
    //F1-2 发送验证码
    $(".reg_send.cur").on("click",function(){});
    //F1-2 手机绑定
    $("#code").on("blur",function(e){
        var $tar = $(e.target);
        if($tar.val()==""){
            $(".login_tip").html("请填写收到的验证码").addClass("show");
            return;
        }
        //ajax
        $.post(
            code_url,
            {
                "phone":$("#phoneNum").val(),
                "code":$tar.val()
            },
            function(data){
                //data:{err:0,msg:""}
                if(data.err==0){
                    $(".login_btn").addClass("cur");
                }
            }
        );
    });
    //F1-3 设定密码
    $("#pwd_sure").on("blur",function(e){
        var $tar = $(e.target);
        var pwd = $("#pwd").val();
        if($tar.val()!=pwd){
            $(".login_tip").html("两次密码不一致").addClass("show");
            $(".login_btn").removeClass("cur");
            return;
        }
        $(".login_btn").addClass("cur");
    });
    //F2-4 昵称提示
    var name_input = 0;
    $("#name_v").on("focus",function(e){
        if(name_input==0){
            $(".name_tips").fadeIn();
            name_input = 1;
        }
    });
    //下一步
    $(".login_btn.cur").on("click",function(e){
        var $tar = $(e.target);
        var sure_code = $tar.data("sure");
        if(sure_code=="login"){
            var phoneNum = $("#phoneNum").val();
            var pwd = $("#pwd").val();
            if(phoneNum=="" || !myreg.test(phoneNum)){
                $(".login_tip").html("请填写正确的手机号码").addClass("show");
                return;
            }
            else if(pwd==""){
                $(".login_tip").html("密码不能为空").addClass("show");
                return;
            }
        }
        else if(sure_code=="pwd"){
            var pwd = $("#pwd").val();
            var pwd_sure = $("#pwd_sure").val();
            if(pwd!=pwd_sure){
                $(".login_tip").html("两次密码不一致").addClass("show");
                return;
            }
            else if(pwd=="" || pwd_sure==""){
                $(".login_tip").html("密码不能为空").addClass("show");
                return;
            }
        }
        else if(sure_code=="reg_info"){
            var phoneNum = $("#phoneNum").val();
            var code = $("#code").val();
            if(phoneNum=="" || !myreg.test(phoneNum)){
                $(".login_tip").html("请填写正确的手机号码").addClass("show");
                return;
            }
            if(code==""){
                $(".login_tip").html("验证码不能为空").addClass("show");
                return;
            }
            if(phoneNum!=""){
                $(".login_tip").html("").removeClass("show");
                $(".pop").fadeIn();
                return;
            }
        }
        else if(sure_code=="code"){
            var code = $("#code").val();
            if(code==""){
                $(".login_tip").html("验证码不能为空").addClass("show");
                return;
            }
        }
        else if(sure_code=="reg"){
            $(".reg_tips").fadeIn().find("a").attr("href","#");
            var num = 3;
            var id = setInterval(function(){
                if(num<1){
                    clearInterval(id);
                    //window.loaction.href="";//跳转到注册前页面
                }
                $(".reg_tips span").html(num);
                num--;
            },1000);
        }
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    });
    $(".user_info .login_btn").on("click",function(e){
        $(".pop").fadeIn();
    })
    /*短信验证*/
    $("#phoneNum").on("input",function(e){
        var num = $(this).val();
        $(this).next().attr("href","sms:"+num);
    })
    //删除报名者信息
    $(".del_info").on("click",function(){
        $(".pop").fadeOut();
        $(".info").find("input").val("").parents(".info").find(".user_sex").html("");
    });
    /*delete*/
    $(".del_btn").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".tips").fadeIn();
    });
    $(".close_tip").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".pop").fadeOut();
    })
    /*birth*/
    sel = "sex";
    $(".sel_arr").on("click",function(e){
        var $tar = $(e.target);
        sel = $tar.data("sel");
        $(".btm_sel").fadeIn().find("."+sel+"_sel").addClass("show");
        //$(".btm_sel")
    })
    $(".selectEnd").on("click",function(e){
        var $tar = $(e.target);
        var tag = $tar.data("tag");
        var val = "";
        if(tag=="sex"){
            val = $("#sex_dummy").val();
            if(val=="男" && $("#ImgPr").length>0){
                var src = $("#ImgPr").attr("src").replace("women","men");
                $("#ImgPr").attr("src",src);
            }
        }
        else if(tag=="birthday"){
            var date = new Date();
            var today = date.getFullYear()+"."+(date.getMonth()+1)+"."+date.getDate();
            val = $("#datetimeDate-demo").val().replace(/\//g,".")||today;
        }
        else if(tag=="city"){
            val = $("#city_dummy").val();
        }
        $(this).parents("body").find(".user_"+sel).html(val).parents("."+sel).find(".sel_arr").hide().parents("body").find(".btm_sel").fadeOut().find("."+sel+"_sel").removeClass("show");
    });
});
$(function(){
    var body_cname = $("body").attr("class");
    if(body_cname=="users_info"){
        setCity();
        //select city
        $('#city').mobiscroll().select({
            theme: 'mobiscroll',
            display: 'inline',
            label: 'City',
            group: true,
            groupLabel: 'Country',
            fixedWidth: [100, 170]
        });
        //select sex
        $('#sex').mobiscroll().select({
            theme: 'mobiscroll',
            lang: "zh",
            display: 'inline',
//			minWidth: 200,
            mode: "datetimeDate"
        });
        //select date
        var demoContainer = $('.demo-wrapper-datetimeDate');
        demoContainer.show();
        $('#datetimeDate-demo').mobiscroll().date({
            theme: "ios",
            lang: "zh",
            display: "inline",
            mode: "datetimeDate"
        });
    }
    else if(body_cname=="users_info users_edit_info" || body_cname=="activity_apply activity_enroll"){
        //select sex
        $('#sex').mobiscroll().select({
            theme: 'mobiscroll',
            lang: "zh",
            display: 'inline',
//			minWidth: 200,
            mode: "datetimeDate"
        });
    }
    /*添加报名者*/
    $(".users_add .sel_btn").on("click",function(e){
        $(this).toggleClass("cur");
    });
    //预览图片
    if($("#up").length>0){
        $("#up").uploadPreview({ Img: "ImgPr", Width: 236, Height: 236 });
    }
});
//set city Dom
function setCity(){
    var dom = "";
    $.each(city,function(i,item){
        dom += '<optgroup label="'+item.name+'">';
        $.each(item.child,function(j,item_j){
            dom += '<option value="'+item_j+'">'+item_j+'</option>';
        })
    })
    $("#city").append(dom)
}