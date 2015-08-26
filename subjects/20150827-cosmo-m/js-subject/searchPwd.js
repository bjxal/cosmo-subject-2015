$(document).ready(function(){
    $("#username,#password,#password_sure,#email").bind({
        blur:function(){
            if($(this).val()=="")
                $(this).prev(".form_placeholder").show();
        },
        focus:function(){
            $(this).prev(".form_placeholder").hide();
        }
    });
    var url = "";//½Ó¿ÚµØÖ·
    $(".login_submit").on("touchend",function(e){
        var $tar = $(e.target);
        var uname = $("#username").val();
        var email = $("#email").val();
        var data = {"username":uname,"email":email};
        searchPwd(data);
    });
});
function searchPwd(data){
    $.ajax({
        type:"POST",
        url:url,
        cache:false,
        async:false,
        data:data,
        dataType:"jsonp",
        jsonp:"jsonpCallback",
        jsonpCallback:"jsonpCallback",
        success:function(data){},
        error:function(err){}
    });
}