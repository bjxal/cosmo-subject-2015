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
});