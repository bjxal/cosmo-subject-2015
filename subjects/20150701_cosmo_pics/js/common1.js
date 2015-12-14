/*iscroll*/
var in_carousel;
$(document).ready(function(){
    /*2015-11-03*/
    var cname = $("body").attr("class") || "";
    if(cname.indexOf("index")!=-1){
        $("body").css("opacity","1");
    }
    else{
        setTimeout(function(){$("body").css("opacity","1")},300);
    }
    /*nav*/
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(".contentAll").width((winWidth+240)+"px");
    $(".contentLeft,.contentRight").width(winWidth+"px");
    var myScroll2 = new iScroll('wrapper2',{hScrollbar:false, vScrollbar:false});
    /*show nav*/
    $(".nav_btn").on("click",function(e){
        $(".contentAll").toggleClass("act");
        $(".contentLeft").toggleClass("show");
        $("body").toggleClass("hid");
    });
    //$(".contentLeft").on("click",function(e){
    //    $(".contentAll").toggleClass("act");
    //})
    $(".contentLeft .close").on("click",function(e){
        e.stopPropagation();
        $(".contentAll").toggleClass("act").one("webkitTransitionEnd",function(){});
        $(".contentLeft").toggleClass("show");
        $("body").toggleClass("hid");
    });
    //登录或注册
    $(".nav_avt_p p").eq(0).on("touchend",function(e){
        //window.location.href = "login.html";
    });
    //退出
    $(".avt_login .loginOut").on("click",function(e){
        loginOut();
    });
    /*2015-11-03*/

    //var winHeight = $(window).height();
	var menuListHeight = $(".rt_menu_list li").length*45+130;
    var menuHeight = (winHeight>menuListHeight)?winHeight:menuListHeight;
    var mobileWidth = window.screen.width;
    if(mobileWidth>=1024){
        //document.write("请访问pc版");
    }
    /*footer*/
    $(".goTop").click(function(){
        $(window).scrollTop(0);
    });
    //Show and hide globalnav
    $(".mn-icon-drawer").on("touchend",
        function() {
            //$(".searchbox-mobile").slideUp();
            event.stopPropagation();
            $("ul#globalnav").css("height", $(window).height()-44);
            $("#globalnav-pt, .quicknav-mobile").animate({left: 0}, "");
            $("#globalnav-pt,ul#globalnav").css("opacity","1");
            //$(".conLeft").height(menuHeight);
        }
    );
    $("#globalnav-pt").on("touchend",function(e){
        var tar = e.target;
        var node = tar.nodeName.toLowerCase();
        if(node!="a"){
            e.preventDefault();
            e.stopPropagation();
            $("#globalnav-pt, .quicknav-mobile").animate({left: "-100%"}, "");
            $("#globalnav-pt").animate({height: "auto",opacity:"0"}, "");
        }
        else{
            var link = tar.attr("href");
            window.open(link,'_blank');
        }

    });
    $(".btn-icon-close").on("touchend",
        function() {
            $("#globalnav-pt, .quicknav-mobile").animate({left: "-100%"}, "");
            $("#globalnav-pt").animate({height: "auto",opacity:"0"}, "");
            //$(".conLeft").height("auto");
        }
    );
    /*list*/
    //$(".list").click(function(){
    //    //$(".conLeft,.conRt").height(winHeight);
		//$(".conLeft,.conRt").height(menuHeight);
    //    $(".content").addClass("active");
    //    $(".conRt").css("display","block");
    //});
    //$(".conRt").on("click",function(e){
    //    var tar = e.target;
    //    if(tar.nodeName.toLowerCase()!="a"){
    //        $(".content").removeClass("active");
    //        setTimeout(function(){
    //            $(".conRt").css("display","none");
    //            $(".conLeft").height("auto");
    //        },500);
    //    }
    //});
    /*load data*/
    $(".more").on("click",function(){
        var nextpage = $('#nextpage').val();
        var url = "http://m.onlylady.com/m/files/eventapi.php?c=Piccasuallook&a=Articlewaterfalljson&typeid=2";
        if(load == false){
            loadList(url,".p2 .log_list");
        }
    });
    /*wx*/
    $(".wx").on("touchend",function(){
        $(".wx_code").show();
    });
    $(".wx_code").on("touchend",function(){
        $(this).hide();
    });
	/*统计*/
	$("#dot_pvm").css("display","none").next().css("display","none");
});
var load = false;
/*loadMore*/
function showLoading(){
    $(".loading").css("display","block");
}
function hidLoading(){
    $(".loading").css("display","none");
}
function showMore(){
    $(".more").css("display","block");
}
function hidMore(){
    $(".more").css("display","none");
}
/*ajax*/
function loadList(url,parentCls){
    load = true;
    hidMore();
    showLoading();
    var nextpage_1 = $('#nextpage').val();
    //var url = "";//parentCls
    $.ajax({
        type : "POST",
        async : false,
        url : url,
        data : {"class_id":class_id,"page":nextpage_1},
        cache : false, //默认值true
        dataType : "json",
        success : function(data){
            if(data.flag==1){
                $(".loading").html("没有更多数据~");
                return false;
            }
            else{
                setTimeout(function(){
                    setList(data,parentCls);
                    var nuss = parseInt(nextpage_1)+1;
                    $('#nextpage').val(nuss);
					showMore();
					hidLoading();
					load = false;
                },800);
            }
        },
        error:function(){console.log("data error!");}
    });
}
function setList(data,parentCls){
    $.each(data.content,function(i,item){
        //var li = createIndex_li_new(item);
        $(parentCls).append(item);
    });
}
/*index*/
function createIndex_li_new(item){
    var li = document.createElement("li");
    var li_div = document.createElement("div");
    li_div.className = "item";
    var li_top = document.createElement("a");
    li_top.className = "top";
    li_top.href = item.url;
    var li_top_img = document.createElement("img");
    li_top_img.src = item.img;
    li_top.appendChild(li_top_img);

    li_div.appendChild(li_top);
    li.appendChild(li_div);
    return li;
}
document.addEventListener("DOMContentLoaded",function(e){
    if(jQuery){
        /*焦点图*/
        in_carousel = jq("#photoAll").carousel({
            pagingDiv: "paging",
            pagingCssName: "paging_dot",
            pagingCssNameSelected: "paging_dot_actived",
            preventDefaults: false
        });
    }
}, false);