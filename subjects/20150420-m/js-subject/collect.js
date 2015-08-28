$(document).ready(function(){
    $(".trash").on("touchend",function(e){
        var $tar = $(e.target);
        var artId = $tar.data("articleid");
        var data = {};
        var url = "";//接口地址
        //deleteAjax(data,backFun($tar));
        backFun($tar);
    });
    //下拉加载
    var flag = true;
    window.addEventListener('scroll',function(e){
        if(!flag) return false;
        var winHeight = $(window).height();
        var scrollNum = $(window).scrollTop();
        var bdHeight = $(document.body).height();

        if((winHeight + scrollNum) >= bdHeight){
            flag = false;
            $(".loading").css('display','block');
            var nextpage = parseInt($("#nextpage").val());
            $.ajaxSetup({async : false});
            $.get(window.location.href+nextpage+".shtml", function(data){
                if(data!='[]') {
                    //$(".loading").css('display','none');
                    var str = '';
                    var obj = jQuery.parseJSON(data);
                    $.each( obj, function(i, item){
                        str += '<div class="more_item"><a title="'+item.title+'" href="'+item.url+'"><img alt="'+item.title+'" src="'+item.picurl+'"></a><h3 class="bt"><a title="'+item.title+'" href="'+item.url+'">'+item.title+'</a></h3><div class="info">';
                        if(item.doc_type_id==1){
                            str += '<span class="icon"></span>';
                        }
                        if(item.Author){
                            str += '<a class="name" href="/user/'+item.editid+'.shtml">'+item.Author+'</a>';
                        }
                        str += '<span>'+item.dateorder+'</span><div class="trash" data-articleid="'+item.articleid+'"><span class="trash_t"></span></div></div></div>';
                    });
                    $(".c_list").append(str);
                    $("#nextpage").val(nextpage+1);
                } else {
                    $(".loading").css('display','none');
                    $(".more").text('已加载全部内容').show();
                    $(".more").unbind( "click" );
                }

            });
            flag = true;
        }

    });

});
function deleteAjax(data,backFun){
    $.ajax({
        type:"POST",
        url:url,
        cache:false,
        data:data,
        dataType:"jsonp",
        jsonp:"jsonpCallback",
        jsonpCallback:"jsonpCallback",
        success:function(data){
            backFun();
        },
        error:function(err){}
    });
}
function backFun($tar){
    $tar.find("span").addClass("del").one("webkitTransitionEnd",function(){
        $tar.find("span").removeClass("del").one("webkitTransitionEnd",function(){
            $tar.parents(".more_item").addClass("height_0");
            setTimeout(function(){$tar.parents(".more_item").remove();},350);
        });
    });
}