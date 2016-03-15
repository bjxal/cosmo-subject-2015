$(document).ready(function(){
    var activity_id = 0;
    var url_c = window.location.href.split("indexsid=") || "";
    if(url_c!="") activity_id = url_c[1];
    //返回按钮
    $(".top,.tit").on("click",function(e){
        var $tar = $(e.target);
        if($tar.attr("class").indexOf("noBg")!=-1) return;
        if($tar[0].nodeName.toLowerCase()=="a") return;
        history.back(-1);
    });
    var cname = $("body").attr("class");
    if(cname.indexOf("order_detail_users")!=-1){
        var stringTime = "2016-02-26 16:28:0";
        //var end = Date.parse(new Date(stringTime)) / 1000 + 30*60;
        var end = Date.parse(new Date()) / 1000 + 30*60;
        var int = setInterval(function(){
            var now = Date.parse(new Date()) / 1000;
            var v = end - now;
            var m = Math.floor(v/60);
            var s = v-m*60;
            if(m<0){
                clearInterval(int);
                $(".order_detail_users .login_btn").removeClass("cur");
                return;
            }
            m = (String(m).length<2)?"0"+m:m;
            s = (String(s).length<2)?"0"+s:s;
            $(".order_detail_users .login_btn span").html(m+":"+s);
        },1000);
    }
    if($("#iSlider-wrapper-news").length>0){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news'), focus_list, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'rotate',
            onslidechanged:function() {
                $(".focus_circle a").eq(S.slideIndex).addClass("cur").siblings().removeClass("cur");
            }
        });
    }
    $(".index_result .login_btn").on("click",function(e){
        $(".index_result .share_mine").fadeIn();
    });
    $(".share_mine").on("click",function(e){
        var cname = $(e.target).attr("class")||"";
        if(cname.indexOf("share_icon")==-1){
            $(".share_mine").fadeOut();
            return;
        }
    });
    /*下一步*/
    $(".login_btn").on("click",function(e){
        var $tar = $(e.currentTarget);
        var cname = $tar.attr("class");
        var ajax = $tar.data("ajax")||"";
        var bdname = $("body").attr("class");
        if(cname.indexOf("cur")==-1 && bdname.indexOf("welfare_end")==-1 && cname.indexOf("no")==-1) return;
        if(ajax=="ajax_view"){
            var view_url = "";
            var view_c = $(".view").val();
            var cid = $("#cid").val();
            $.ajax({
                type:"POST",
                url:view_url,
                data:{"uid":cid,"view":view_c},
                dataType: "json",
                success:function(data){
                    if(data.flag==0) return;
                    window.location.href=$tar.data("nexturl");
                },
                error:function(err){}
            });
        }
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl;
        }
    });
    //意见反馈失去焦点
    $(".users_view .view").on("blur",function(e){
        var $tar = $(e.target);
        if($tar.val()=="" || $tar.val()==null){
            $(".login_btn").removeClass("cur");
            return;
        }
        $(".login_btn").addClass("cur");
    });
    $(".bm_date").on("click",function(e){
        var $tar = $(e.target);
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    });
    /*联系客服*/
    $(".phone").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".phone_tips").fadeIn();
    });
    //二维码
    $(".ewm").on("click",function(e){
        var $tar = $(e.target);
        var url = $tar.data("imgurl");
        $(".ewm_c img").attr("src",url);
        $(".pop.ewm_c").fadeIn();
    });
    /*显示全部内容*/
    $(".show_all").on("click",function(e){
        var $tar = $(e.target);
        $tar.parent().next().toggleClass("show");
        $tar.toggleClass("up");
    });
    $(".close_tip,.pop").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".pop").fadeOut();
    });
    /*分享*/
    $(".share_mine").on("touchend",function(e){
        $(".share_mine").fadeOut();
    });
    $(".share_icon").on("click",function(e){
        $(".share_act").fadeIn().find(".share_c").addClass("show")
    });
    $(".share_act").on("click",function(e){
        var $tar = $(e.target);
        if($tar[0].nodeName.toLowerCase()!="a"){
            $(this).find(".share_c").removeClass("show").parent().fadeOut();
        }
    });
    /*照片弹层*/
    $(".activity_result_live .item img,.activity_result .item img").on("click",function(e){
        var $tar = $(e.target);
        var src = $tar.attr("src");
        var name = $tar.parent().find(".name").html();
        var word = $tar.parent().find(".word").html();
        $(".share_mine img").attr("src",src);
        $(".share_mine span").html(name);
        $(".share_mine p").html(word);
        $(".share_mine").fadeIn();
    });
    //上传图片
    if($("#up").length==0) return;
    var input = document.getElementById("up");
    var result= document.getElementById("result1");
    //var img_area = document.getElementById("img_area");
    //F5-3活动结果
    $(".bottom_btn").on("click",function(e){
        if($.cookie("trends_health_auth")==undefined){
            $(".tips").fadeIn();
        }
    });
    if ( typeof(FileReader) === 'undefined' ){
        input.setAttribute( 'disabled','disabled' );
    }
    else {
        if($.cookie("trends_health_auth")==undefined){
            $("#up").hide();
        }
        input.addEventListener('change',function(){
            var me = this;
            var cname = $(me).attr("class");

            var file = me.files[0];
            var result= document.getElementById("result1");
            //var img_area = document.getElementById("ImgPr");
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
                result.innerHTML = this.result;
                //img_area.src = this.result;
                var pic = $("#result1").html();
                if(cname=="ajax_up"){
                    var img_upload_url = "http://m.trends-health.com.cn/files/eventapi.php?c=Trendshealthm_Activitypic&a=Addpicajax";
                    $.ajax({
                        type:"POST",
                        url:img_upload_url,
                        data:{"uid": $.cookie("checkedid"),"indexsid":activity_id,"commentpic":pic},
                        dataType: "json",
                        success:function(data){
                            if(data.flag==0) return;
                            $.cookie("commentid",data.commentid);
                            $.cookie("picurl",data.picurl);
                            setTimeout(function(){
                                window.location.href=$(".ajax_up").data("nexturl");
                            },500);
                        },
                        error:function(err){}
                    });
                }
            }

        },false );
    }
});
$(function(){
    //下拉加载
    var flag = true;
    if($("#page").length>0){
        var slide_next = "http://m.trends-health.com.cn/files/eventapi.php?c=Trendshealthm_Activity&a=getIndexWaterFall";
        window.addEventListener('scroll',function(e){
            if(!flag) return;
            var winHeight = $(window).height();
            var scrollNum = $(window).scrollTop();
            var bdHeight = $(document.body).height();

            if((winHeight + scrollNum) >= bdHeight-100){
                flag = false;
                var $tar = $("#page");
                var page = parseInt($tar.val())+1;
                var type = $tar.data("type");
                var data_c = {};
                data_c.page = page;
                data_c.type = type;
                $.ajax({
                    url: slide_next,
                    type: 'POST',
                    data: data_c,
                    dataType: 'json',
                    success: function(rdata) {
                    },
                    error: function() {
                    }
                })
            }

        });
    }
});
//index--search
function demo_Index(data){
    if(data.length<=0) return;
    $.each(data,function(i,item){
        var demo = '<a href="'+item.url+'"><div class="order_c"><p>'+item.type+'</p><span class="act_tit">'+item.title+'</span><img src="'+item.image+'" class="width_100"></div></a>';
        $(".con").append(demo);
    })
}
//information--list
function demo_info(data){
    if(data.length<=0) return;
    $.each(data,function(i,item){
        var demo = '<a href="'+item.url+'" class="run_c"><div class="order_c"><p>'+item.type+'</p><span class="act_tit">'+item.title+'</span><img src="'+item.image+'" class="width_100"></div></a>';
        $(".con").append(demo);
    })
}
//order_2
function demo_result(data){
    if(data.length<=0) return;
    $.each(data,function(i,item){
        var demo = '<div class="item"><img src="'+item.image+'"><span class="name">'+item.name+'</span><span class="word">'+item.desc+'</span></div>';
        $(".con_list").append(demo);
    })
}