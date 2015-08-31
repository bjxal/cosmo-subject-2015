$(document).ready(function(){
    ajaxUrl = "http://m.cosmopolitan.com.cn/files/eventapi.php";
    //nav_right
    var navList = $("");
    //$(window).on("scroll",function(){
    //    scroll();
    //});
    $(".nav_right .nav_item").on("click",function(e){
        var $tar = $(e.target);
        var areaid = $tar.data("areaid");
        var top = $(".p"+areaid).offset().top-50;
        $("html,body").animate({
            scrollTop:top+"px"
        },800,function(){
            $tar.addClass("cur").siblings().removeClass("cur");
        });
    });

    //滚动条
    //$("body").on("click",function(){
    //    $('#customScroller1').CSscrollbar({
    //        'scrollbar': '#CSscrollbar1',
    //        'scrollHander': '#CSscrollHander1',
    //        'autoScrollSpeed' : 2000
    //    });
    //});

    //change type
    var pro = new PRO();
    var list = new LIST();
    var vote = new VOTE();
    $(".nav a").on("click",function(e){
        var $tar = $(e.target);
        $tar.addClass("cur").siblings().removeClass("cur");
        //test
        pro.init($tar);
        var data = {};
        var d_id = $tar.data("id")%3;
        switch(d_id){
            case 0:
                data = product1;
                break;
            case 1:
                data = product2;
                break;
            case 2:
                data = product3;
                break;

        }
        pro._set_pro_info(data);

        //list
        list.init($tar);
        var list_d = {};
        var aa = $tar.data("id")%2;
        switch(aa){
            case 1:
                list_d = listData1;
                break;
            case 0:
                list_d = listData2;
                break;
        }
        list._get_type_List(list_d);
        //test end

        //getInfo
        //var pro_id = "";
        //var data_info = {c:"ArticleHelps",a:"AddPicExp",type:1,type_id:pro_id,extinfo:"info"};
        //getList
        //var type_id = "";
        //var data_list = {c:"ArticleHelps",a:"AddPicExp",type:1,type_id:type_id,extinfo:"list"};
        //list.init($tar);
        //list.get_list(data_list);
        //pro.init($tar);
        //pro.get_info(data_info);
    });
    ////change info
    $(".slide_item").on("click",function(e){
        var $tar = $(e.target);
        //test
        pro.init($tar);
        var data = {};
        var d_id = $tar.data("id")%3;
        switch(d_id){
            case 0:
                data = product1;
                break;
            case 1:
                data = product2;
                break;
            case 2:
                data = product3;
                break;

        }
        pro._set_pro_info(data);
        //test end

        //var id = "";
        //var data = {c:"ArticleHelps",a:"AddPicExp",type:1,type_id:id,extinfo:"info"};
        //pro.init($tar);
        //pro.get_info(data);
    });
    ////vote
    //$(".vote_btn,.vote_icon").on("click",function(e){
    //    console.log(e)
    //    var $tar = $(e.target);
    //    var id = $tar.parents(".p").find(".vote_btn").data("proid");
    //    var data = {c:"ArticleHelps",a:"AddPicExp",type:1,document_id:id,extinfo:"zan"};
    //    vote.init($tar);
    //    vote.set_vote(data);
    //});
});
var PRO =  function(){};
PRO.prototype = {
    $tar:{},
    $par:{},
    init:function($tar){
        var me = this;
        me.$tar = $tar;
        me.$par = $tar.parents(".p");
    },
    get_info:function(data){
        var me = this;
        me._ajax_fun(data);
    },
    _ajax_fun:function(data){
        var me = this;
        $.ajax({
            type:"POST",
            cache:false,
            url:ajaxUrl,
            data:data,
            dataType:"json",
            success:function(resp){
                me._set_pro_info(resp);
            },
            error:function(err){
                console.log(err);
            }
        });
    },
    _set_pro_info:function(data){
        var me = this;
        me._set_pro_img(data.pic);
        me._set_pro_desc(data);
    },
    _set_pro_img:function(pic){
        var me = this;
        if(pic!="") me.$par.find(".img_c img").attr("src",pic);
    },
    _set_pro_desc:function(data){
        var me = this;
        me.$par.find("h2").html(data.brand_en);
        me.$par.find("h3").html(data.brand_zh);
        me.$par.find(".desc").html(data.content);
        me.$par.find(".price").html(data.digest);
        me.$par.find(".vote_btn").attr("data-proid",data.id);
    }
};
var LIST = function(){};
LIST.prototype = {
    $tar:{},
    $par:{},
    id:"",
    init:function($tar){
        var me = this;
        me.$tar = $tar;
        me.id = $tar.data("id");
        me.$par = $tar.parents(".p");
    },
    get_list:function(data){
        var me = this;
        me._ajax_fun(data);
    },
    _get_type_List:function(resp){
        var me = this;
        if(resp.length>0){
            me._set_type_list_dom(resp);
        }
    },
    _set_type_list_dom:function(data){
        var me = this;
        var html = '<div class="slide_con" id="customScroller'+me.id+'"><div class="slide_h">';
        $.each(data.list,function(i,item1){
            html += '<a class="slide_item" href="javascript:void(0);" data-id="'+item1.id+'">'+item1.title+'</a>';
        });
        html += '</div></div>';
        html += '<div id="CSscrollbar'+me.id+'" class="scroll_bar CSscrollbar"><div id="CSscrollTrack'+me.id+'" class="Scrollbar-Track CSscrollTrack"><div id="CSscrollHander'+me.id+'" class="Scrollbar-Handle CSscrollHander"></div></div></div>';
        me.$par.find(".product_list").empty().append(html);
        me._bind_pro_event();
        me._bind_scroll_event(me.id);
    },
    _bind_scroll_event:function(id){
        var me = this;
        $('#customScroller'+id).CSscrollbar({
            'scrollbar': '#CSscrollbar'+id,
            'scrollHander': '#CSscrollHander'+id,
            'autoScrollSpeed' : 2000
        });
    },
    _bind_pro_event:function(){
        var me = this;
        me.$par.find(".slide_item").on("click",function(e){
            var $tar = $(e.target);
            /*有接口*/
            //var id = $tar.data("id");
            //var data = {c:"ArticleHelps",a:"AddPicExp",type:1,document_id:id,extinfo:"info"};
            //var pro = new PRO();
            //pro.get_info(data);


            /*无接口*/
            //test
            var pro = new PRO();
            pro.init($tar);
            var data = {};
            var d_id = $tar.data("id")%3;
            switch(d_id){
                case 0:
                    data = product1;
                    break;
                case 1:
                    data = product2;
                    break;
                case 2:
                    data = product3;
                    break;

            }
            pro._set_pro_info(data);
            //test end
        });
    },
    _ajax_fun:function(data){
        var me = this;
        $.ajax({
            type:"POST",
            cache:false,
            url:ajaxUrl,
            data:data,
            dataType:"json",
            success:function(resp){
                me._get_type_List(resp);
            },
            error:function(err){
                console.log(err);
            }
        });
    }
};
var VOTE = function(){};
VOTE.prototype = {
    $tar:{},
    $par:{},
    init:function($tar){
        var me = this;
        me.$tar = $tar;
        me.$par = $tar.parents(".p");
    },
    set_vote:function(data){
        var me = this;
        me._ajax_fun(data);
    },
    _pro_vote:function(resp){
        var me = this;
        var $tar = me.$par.find(".vote_icon");
        var num = parseInt($tar.find("span").html())+1;
        //if(resp.tips==1){
            $tar.removeClass("no");
            me.$par.find(".vote_ani").addClass("ani").one("webkitAnimationEnd",function(){
                $tar.html(num+"票");
            })
        //}
    },
    _ajax_fun:function(data){
        var me = this;
        $.ajax({
            type:"POST",
            cache:false,
            url:ajaxUrl,
            data:data,
            dataType:"json",
            success:function(resp){
                me._pro_vote(resp);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
};
/*nav*/
$(function(){
    var $win  = $(window),$sidebars = $('.nav_right .nav_item');
    var sTop = 0;
    $(window).on('scroll',function(){
        sTop = $win.scrollTop();
        $sidebars = $('.nav_right .nav_item').each(function(index,ele){
            var $ele = $(ele),start = +$ele.attr('data-start'),end = +$ele.attr('data-end');
            if(start<=sTop&&sTop<end){
                $sidebars.removeClass('cur');
                $ele.addClass('cur');
            }
        });
    });
});