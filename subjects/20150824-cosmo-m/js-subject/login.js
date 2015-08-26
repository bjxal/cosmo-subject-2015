$(document).ready(function(){
    /*form info*/
    $("#username,#password,#password_sure,#email").bind({
        blur:function(){
            if($(this).val()=="")
                $(this).prev(".form_placeholder").show();
        },
        focus:function(){
            $(this).prev(".form_placeholder").hide();
        }
    });
    /*to register*/
    $(".login_toReg").on("touchend",function(e){
        $(".login_reg").css({
            "-webkit-transform":"translate(0,-50%)"
        })
    });
    /*to login*/
    $(".login_logo").on("touchend",function(e){
        $(".login_reg").css({
            "-webkit-transform":"translate(0,0)"
        })
    });
    var url = "";
    var login = new LOGIN();
    //login
    $(".login_submit").on("touchend",function(e){
        var uname = $("#username").val();
        var pwd = $("#password").val();
        var data = {"username":uname,"password":pwd};
        login.loginIn(data);
    });
    //register
    $(".reg_submit").on("touchend",function(e){
        var uname = $("#username_reg").val();
        var pwd = $("#password_reg").val();
        var pwd_sure = $("#password_sure").val();
        var email = $("#email").val();
        var data = {"username":uname,"password":pwd,"password_sure":pwd_sure,"email":email};
        login.registerIn(data);
    });
});

//login
var LOGIN = function(){};
LOGIN.prototype = {
    init:function(){},
    loginIn:function(data){
        var me = this;
        me.loginAjax(data,"loginIn");
    },
    registerIn:function(data){
        var me = this;
        me.loginAjax(data,"registerIn");
    },
    loginAjax:function(data,type){
        var me = this;
        $.ajax({
            type:"POST",
            url:"",
            cache:false,
            async:false,
            data:data,
            dataType:"jsonp",
            jsonp:"jsonpCallback",
            jsonpCallback:"jsonpCallback",
            success:function(data){
                switch(type){
                    case "loginIn":
                        break;
                    case "registerIn":
                        break;
                }
            },
            error:function(err){}
        });
    },
};