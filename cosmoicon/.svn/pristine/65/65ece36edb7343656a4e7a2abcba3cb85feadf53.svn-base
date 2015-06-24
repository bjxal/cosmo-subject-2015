$(document).ready(function(){
    $("#search").click(function(){
        $(".topbar").addClass("on");
    });
    $(".close_btn").click(function(){
        $(".topbar").removeClass("on");
    });

});

/*
function baiduSearch () {
    $('#word').val($('#searchKey').val() + ' site:m.cosmopolitan.com.cn');
}
*/
function baiduSearch () {
    key = $('#searchKey').val() + ' site:cosmopolitan.com.cn';
    window.open('http://m.baidu.com/s?tn=baidu&word=' + encodeURIComponent(key));
    return false;
}