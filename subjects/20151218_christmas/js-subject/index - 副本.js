;(function(){if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
        var phoneScale = parseInt(window.screen.width)/750;
        document.write('<meta name="viewport" content="width=750, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
    }else{
        document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
    }
}else{
    document.write('<meta name="viewport" content="width=750, user-scalable=no">');
}
//微信去掉下方刷新栏
    if(navigator.userAgent.indexOf('MicroMessenger') >= 0){
        document.addEventListener('WeixinJSBridgeReady', function() {
            //WeixinJSBridge.call('hideToolbar');
        });
    }})();
$(document).ready(function(){
    /*loading img*/
    var loadingImg = function(list){
        $.each(list,function(i,tar){
            var url = $(tar).data("src");
            $(tar).attr("src",url).removeClass("noLoad");
            setTimeout(function(){
                $(tar);
            },1000)
        })
    };
    /*question*/
    var quest = [
        {"title":"以下哪种食物跟圣诞节一般没什么关系？","select":"A.彩蛋|B.火鸡|C.蛋酒|D.布丁","right":"a","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：彩蛋。那是复活节吃的哟。"},
        {"title":"圣诞老人用什么拉雪橇一定会翻车？","select":"A.草泥马|B.傻狍子|C.哈士奇|D.乔巴","right":"b","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：傻狍子。纯野生动物真的不会拉车。"},
        {"title":"“身穿红袍、蓄白胡子”圣诞老人形象，其实是他们发明的：","select":"A.可口可乐|B.教皇格里高利|C.麦当劳|D.富兰克林·罗斯福","right":"a","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：可口可乐。1931年，艺术家海顿·珊布为可口可乐圣诞广告创作海报。作品中圣诞老人身穿红袍蓄白胡子，为一瓶可口可乐而驻足的形象大受欢迎，于是奠定了今天的形象。"},
        {"title":"圣诞老人是哪国人？","select":"A.瑞典|B.冰岛|C.芬兰|D.北极","right":"c","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：芬兰。圣诞老人叫圣·尼古拉斯（Saint Nicholas）。传说尼古拉斯拥有无尽的财富，同时又乐善好施，喜欢晚上偷偷给穷困人家一些礼物，让他们渡过难关。"},
        {"title":"据统计，有将近70%的美国小孩认为圣诞老人不是美国人，也不是芬兰人，而是：","select":"A.俄罗斯人|B.中国人|C.加拿大人|D.日本人","right":"b","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：中国人，因为圣诞袜上面写着Made in China，圣诞树上也写着Made in China..."},
        {"title":"下面哪个电影主要跟圣诞节有关，而且TA一定会很喜欢？","select":"A.极地特快|B.查理和巧克力工厂|C.神偷奶爸|D.海底总动员","right":"a","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：极地特快。带TA去看吧，什么都不用想，慢慢享受我们曾经拥有的美好。"},
        {"title":"送什么圣诞礼物，女生一定会喜欢？","select":"A.减肥茶|B.宠物猫|C.购物卡|D.巧克力","right":"c","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：购物卡。这题选错的人请自行面壁。"},
        {"title":"中国人自创的圣诞习俗是神马？","select":"A.秒杀|B.平安果|C.吃小龙虾|D.兑雪碧的红酒","right":"b","rightTxt":"恭喜你：答对了","wrongTxt":"答错了：平安果。不知道是谁打着平安夜的旗子发明的，不就是苹果吗。"}
    ];
    /* slide */
    var init = {};
    init.finsh = false;
    init.last  = false;
    var qtid = 0;
    var curId = 1;
    var respone_txt = "";
    var swiper = new Swiper('.swiper-container', {
        freeMode: true,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        onSlideChangeEnd:function(e){
            var list_cur = $(".swiper-slide-active").find("img.noLoad");
            var list_next = $(".swiper-slide-next").find("img.noLoad");
            loadingImg(list_cur);
            loadingImg(list_next);
            //curId = e.activeIndex;
            //console.log(e)
        },
        onSliderMove:function(e){
            //console.log(respone_txt)
            var list_cur = $(".swiper-slide-active").find("img.noLoad");
            var list_next = $(".swiper-slide-next").find("img.noLoad");
            loadingImg(list_cur);
            loadingImg(list_next);
            //console.log(curId+"------"+e.activeIndex)
            if(curId!= e.activeIndex && e.activeIndex!=0 && respone_txt.indexOf(String(e.activeIndex))==-1){
                qtid = e.activeIndex-1;
                /*tit*/
                $(".qt_tit").html(quest[qtid].title);
                /*select*/
                var sel = quest[qtid].select.split("|");
                $.each($(".qt_sel span"),function(i,tar){
                    $(tar).html("<em></em>"+sel[i]);
                });

                $(".qt_pop").fadeIn().find(".qt_bg").addClass("drop");

            }
            else{
                curId = e.activeIndex;
            }
            if(e.activeIndex==9){
                $(".arrow").hide();
            }
            else{
                $(".arrow").show();
            }
            //if(init.finsh){
            //	if(init.last) return;
            //	swiper.init();
            //	swiper.slideTo(9);
            //	init.last = true;
            //
            //}else if(swiper.isEnd){
            //	//testResult();
            //}
        }
    });
    /*question*/
    var QT = function(){};
    QT.prototype = {
        qtid:0,
        $selectList:{},
        $questionPop:{},
        $questionPar:{},
        $questionBtn:{},
        $questionTit:{},
        $questionSel:{},
        $questionTxt:{},
        $questionClose:{},
        init:function(){
            var me = this;
            me.$questionPop = $(".qt_pop");
            me.$questionBtn = $(".quest_icon");
            me.$questionPar = me.$questionPop.find(".qt_bg");
            me.$questionTit = me.$questionPar.find(".qt_tit");
            me.$questionSel = me.$questionPar.find(".qt_sel span");
            me.$questionTxt = me.$questionPar.find(".qt_txt");
            me.$questionClose = me.$questionPop.find(".qt_close");

            //bind
            me.bind_event();
        },
        bind_event:function(){
            var me = this;
            me.qt_click_bind();
            me.choose_sel_bind();
            me.close_bind();
        },
        qt_click_bind:function(){
            var me = this;
            me.$questionBtn.on("touchend",function(e){
                me.qt_click_fun(e);
            });
        },
        qt_click_fun:function(e){
            var me = this;
            var $tar = $(e.target);
            me.qtid = $tar.data("qtid");
            /*tit*/
            me.$questionTit.html(quest[me.qtid].title);
            /*select*/
            var sel = quest[me.qtid].select.split("|");
            $.each(me.$questionSel,function(i,tar){
                $(tar).html("<em></em>"+sel[i]);
            });

            me.$questionPop.fadeIn().find(".qt_bg").addClass("drop");
        },
        choose_sel_bind:function(){
            var me = this;
            me.$questionSel.on("touchend",function(e){
                me.choose_sel_fun(e);
            })
        },
        choose_sel_fun:function(e){
            var me = this;
            var $tar = $(e.target);
            var right_s = quest[me.qtid].right;
            var cur_s = $tar.data("txt");
            var txt = quest[me.qtid].rightTxt;
            $tar.find("em").addClass("cur").parent().siblings().find("em").removeClass("cur");

            if(cur_s != right_s){
                txt = quest[me.qtid].wrongTxt;
            }
            if(txt.length<=22){
                $(".qt_txt").addClass("txtCenter")
            }
            else{
                $(".qt_txt").removeClass("txtCenter")
            }
            me.$questionPar.addClass("showTxt");
            me.$questionTxt.html(txt).css("opacity","1");
        },
        close_bind:function(){
            var me = this;
            me.$questionClose.on("touchend",function(e){
                me.close_fun(e);
            })
        },
        close_fun:function(e){
            var me = this;
            respone_txt += ","+swiper.activeIndex;
            me.$questionPar.removeClass("drop showTxt").find(".qt_txt").removeClass("txtCenter").parents(".qt_pop").fadeOut(600);
            me.$questionTit.html(null);
            me.$questionSel.html(null);
            me.$questionTxt.css("opacity","0").html(null);
        }
    };
    /*select question*/
    var qt = new QT();
    qt.init();
    /*weixin*/
    $(".share_wx").on("touchend",function(e){
        var $tar = $(e.target);
        $(".share_pop").fadeIn();
    });
    /*sina*/
    $(".share_sina").on("touchend",function(e){
        var tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
        tourl = tourl.replace('$title',shareData.tit).replace('$content',shareData.tit+"！  "+shareData.desc).replace('$pic',shareData.imgUrl).replace('$url',shareData.link).replace('$back',shareData.link);
        window.open(tourl,'_blank');
    });
    $(".share_pop").on("touchend",function(e){
        $(this).fadeOut();
    });
    /* 音频 */
    var sound = true;
    $('#switch').on("touchend",function(e) {
        $(this).toggleClass('off');
        if(sound){
            $(this).removeClass('on')
            audio.pause();
            sound = false;
        }else{
            $(this).addClass('on')
            audio.play();
            sound = true;
        }
    });

    var audio = new Audio(ImgDir('/music.mp3'));
    	audio.loop = true;
    	audio.autoplay = true;

    	if(audio.paused){
    		document.addEventListener('touchstart',audioAutoPlay,false);
    	}
    	audio.addEventListener('play',function(){
    		document.removeEventListener('touchstart',audioAutoPlay);
    	},false);

    function audioAutoPlay(){
        audio.play();
    }

    //weixin share
    var wx_url = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=Cosmom_Jssdk&type=json&url='"+encodeURIComponent(window.location.href)+"'";
    $.ajax({
        type:"POST",
        ansyc:false,
        url:wx_url,
        data:{},
        dataType:"json",
        success:function(data){
            wx.config({
                //debug: true,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
            });
            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    title: shareData.tit,
                    desc: shareData.desc,
                    link: shareData.link,
                    imgUrl: shareData.imgUrl,
                    success: function (res) {
                    },
                    cancel: function (res) {
                    }
                });
                wx.onMenuShareTimeline({
                    title: shareData.tit,
                    link: shareData.link,
                    imgUrl: shareData.imgUrl,
                    success: function (res) {
                    },
                    cancel: function (res) {
                    }
                });
            });
        },
        error:function(){}
    });
});