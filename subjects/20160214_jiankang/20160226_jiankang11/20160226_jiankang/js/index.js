var focus_list = [
    {
        content: '<a href="activity_2.html"><div class="act_top_c"><p class="act_top_c_1">∑€∫Ï≈›≈›≈‹</p><p>2015-09-11</p><p>÷–π˙.…Ó€⁄</p></div><img src="./testImg/1.jpg"/></a>'
    },
    {
        content: '<a href="activity_2.html"><div class="act_top_c"><p class="act_top_c_1">∑€∫Ï≈›≈›≈‹</p><p>2015-09-11</p><p>÷–π˙.…Ó€⁄</p></div><img src="./testImg/1.jpg"/></a>'
    },
    {
        content: '<a href="activity_2.html"><div class="act_top_c"><p class="act_top_c_1">∑€∫Ï≈›≈›≈‹</p><p>2015-09-11</p><p>÷–π˙.…Ó€⁄</p></div><img src="./testImg/1.jpg"/></a>'
    }
];
var focus_list2 = [
    {
        content: '<a href="activity_2.html"><div class="act_top_c"><p class="act_top_c_1">∑€∫Ï≈›≈›≈‹</p></div><img src="./testImg/2.jpg"/></a>'
    },
    {
        content: '<a href="activity_2.html"><div class="act_top_c"><p class="act_top_c_1">∑€∫Ï≈›≈›≈‹</p></div><img src="./testImg/2.jpg"/></a>'
    },
    {
        content: '<a href="activity_2.html"><div class="act_top_c"><p class="act_top_c_1">∑€∫Ï≈›≈›≈‹</p></div><img src="./testImg/2.jpg"/></a>'
    }
];
var focus_list3 = [
    {
        content: '<a href="activity_2.html" class="run_c"><div class="order_c"><p>RUN</p><span class="act_tit">∑€∫Ï≈›≈›≈‹</span><img src="testImg/2.jpg" class="width_100"/></div></a>'
    },
    {
        content: '<a href="activity_2.html" class="run_c"><div class="order_c"><p>RUN</p><span class="act_tit">∑€∫Ï≈›≈›≈‹</span><img src="testImg/2.jpg" class="width_100"/></div></a>'
    },
    {
        content: '<a href="activity_2.html" class="run_c"><div class="order_c"><p>RUN</p><span class="act_tit">∑€∫Ï≈›≈›≈‹</span><img src="testImg/2.jpg" class="width_100"/></div></a>'
    }
];
var focus_list4 = [
    {
        content: '<a href="activity_2.html" class="run_c"><div class="order_c"><p>RUN</p><span class="act_tit">∑€∫Ï≈›≈›≈‹</span><img src="testImg/10.jpg" class="width_100"/></div></a>'
    },
    {
        content: '<a href="activity_2.html" class="run_c"><div class="order_c"><p>RUN</p><span class="act_tit">∑€∫Ï≈›≈›≈‹</span><img src="testImg/10.jpg" class="width_100"/></div></a>'
    },
    {
        content: '<a href="activity_2.html" class="run_c"><div class="order_c"><p>RUN</p><span class="act_tit">∑€∫Ï≈›≈›≈‹</span><img src="testImg/10.jpg" class="width_100"/></div></a>'
    }
];
$(document).ready(function(){
    //∑µªÿ∞¥≈•
    $(".top,.tit").on("click",function(e){
        var $tar = $(e.target);
        if($tar[0].nodeName.toLowerCase()=="a") return;
        history.back(-1);
    });
    var cname = $("body").attr("class");
    if(cname.indexOf("order_detail_users")!=-1){
        var stringTime = "2016-02-26 16:28:0";
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
    if(cname.indexOf("tips_1")!=-1){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news3'), focus_list, {
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
    else if(cname.indexOf("index_1")!=-1){
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
    else if(cname.indexOf("welfare")!=-1){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news3'), focus_list4, {
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
    else if(cname.indexOf("result")!=-1){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news2'), focus_list2, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'rotate',
            onslidechanged:function() {
                $(".focus_circle a").eq(S.slideIndex).addClass("cur").siblings().removeClass("cur");
            }
        });
        $(".index_result .login_btn").on("click",function(e){
            $(".index_result .share_mine").fadeIn();
        });
        $(".share_mine").on("click",function(e){
            var cname = $(e.target).attr("class")||"";
            if(cname.indexOf("share_icon")==-1){
                $(".index_result .share_mine").fadeOut();
            }
            else{}
        });
    }
    else if(cname.indexOf("activity_detail")!=-1){
        var S = new iSlider(document.getElementById('iSlider-wrapper-news3'), focus_list2, {
            isLooping: 1,
            isOverspread: 1,
            isAutoplay: 0,
            animateTime: 800,
            animateType: 'rotate',
            onslidechanged:function() {
                $(".focus_circle a").eq(S.slideIndex).addClass("cur").siblings().removeClass("cur");
            }
        });
        $(".index_result .login_btn").on("click",function(e){
            $(".index_result .share_mine").fadeIn();
        });
        $(".share_mine").on("click",function(e){
            var cname = $(e.target).attr("class")||"";
            if(cname.indexOf("share_icon")==-1){
                $(".index_result .share_mine").fadeOut();
            }
            else{}
        });
    }
    /*œ¬“ª≤Ω*/
    $(".login_btn").on("click",function(e){
        var $tar = $(e.currentTarget);
        var cname = $tar.attr("class");
        var bdname = $("body").attr("class");
        if(cname.indexOf("cur")==-1 && bdname.indexOf("welfare_end")==-1 && cname.indexOf("no")==-1) return;
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    });
    $(".users_view .view").on("focus",function(e){
        var $tar = $(e.target);
        $tar.val("");
    });
    $(".users_view .view").on("blur",function(e){
        var $tar = $(e.target);
        if($tar.val()=="" || $tar==null){
            $tar.val("«◊£¨ƒ˙”ˆµΩ ≤√¥œµÕ≥Œ Ã‚£¨ªÚ’ﬂ”– ≤√¥π¶ƒ‹Ω®“È¬£¨ª∂”≠Ã·∏¯Œ“√«");
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
    /*¡™œµøÕ∑˛*/
    $(".phone").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".phone_tips").fadeIn();
    });
    //∂˛Œ¨¬Î
    $(".ewm").on("click",function(e){
        var $tar = $(e.target);
        var url = $tar.data("imgurl");
        $(".ewm_c img").attr("src",url);
        $(".pop.ewm_c").fadeIn();
    });
    /*œ‘ æ»´≤øƒ⁄»›*/
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
    /*∑÷œÌ*/
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
    /*’’∆¨µØ≤„*/
    $(".activity_result_live .item img,.activity_result .item img").on("click",function(e){
        var $tar = $(e.target);
        var src = $tar.data("src");
        var word = $tar.parent().find(".word").html();
        $(".share_mine img").attr("src",src);
        $(".share_mine p").html(word);
        $(".share_mine").fadeIn();
    });
    //…œ¥´Õº∆¨
    if($("#up").length==0) return;
    var input = document.getElementById("up");
    var result= document.getElementById("result1");
    //var img_area = document.getElementById("img_area");
    if ( typeof(FileReader) === 'undefined' ){
        input.setAttribute( 'disabled','disabled' );
    } else {
        input.addEventListener('change',function(){
            var me = this;
            var cname = $(me).attr("class");
            if(cname=="ajax_up"){
                setTimeout(function(){
                    window.location.href=$(me).data("nexturl")+".html";
                },1000);
            }
            var file = me.files[0];
            var result= document.getElementById("result1");
            //var img_area = document.getElementById("ImgPr");
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
                result.innerHTML = this.result;
                //img_area.src = this.result;
            }
        },false );
    }
});