$(document).ready(function() {
    $(".btn_list a[id]").click(function (e) {
        var aSpan = $(".result_list");
        var aImg = $(".btn_list");
        aImg.stop();
        aSpan.stop();
        aImg.animate({
            width:0,
            marginLeft:180
        },80,'',function(){
            $(this).hide();
            aSpan.show().animate({
                width:"100%",
                marginLeft:0
            },80)
        })
    })
});