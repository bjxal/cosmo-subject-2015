$(document).ready(function(){

    //¹ö¶¯Ìõ
    //$("body").on("click",function(){
    //    $('#customScroller1').CSscrollbar({
    //        'scrollbar': '#CSscrollbar1',
    //        'scrollHander': '#CSscrollHander1',
    //        'autoScrollSpeed' : 2000
    //    });
    //});
});
var PRO =  function(){};
PRO.prototype = {
    $tar:{},
    $list:{},
    $img:{},
    $desc:{},
    init:function($tar){
        var me = this;
        me.$tar = $tar;
        me.$list = $tar.parents(".product_list");
        me.$img = me.$list.next();
        me.$desc = me.$img.next();
    },
    get_info:function(){},
    set_pro_info:function(data){
        var me = this;
    },
    set_pro_img:function(img){
        var me = this;
        if(img!="") me.$img.find("img").attr("src",img);
    },
    set_pro_desc:function(desc){
        var me = this;
        me.$desc.find("h2").html(desc.tit1);
        me.$desc.find("h3").html(desc.tit2);
        me.$desc.find(".desc").html(desc.desc);
        me.$desc.find(".price").html(desc.price);
        me.$desc.find(".vote_btn").attr("data-proid",desc.proid);
    }
}