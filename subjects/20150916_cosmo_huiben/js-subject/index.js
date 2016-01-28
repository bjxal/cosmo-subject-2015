require("/fliza-ui");
$(".weixin_jpg").attr("src",ImgDir('/weixin.jpg'));
Fui.Template.IMG_DIR = ImgDir();
var PAGE0 = Fui.Template.extend({
    config:{
    },
    design:function(){
        //$(".fui-arrow").hide();
    }
    ,getGestureItems:function(){
        return[
            {
                gesture:"tap",
                name:"share_pop_show",
                callback:function(e,$tar){
                    $(".share_pop").fadeIn();
                    $(".app-music").css("z-index","-1");
                    slider.set("lock","true");
                }
            },
            {
                gesture:"tap",
                name:"share_pop_hide",
                callback:function(e,$tar){
                    $(".share_pop").fadeOut();
                    $(".app-music").css("z-index","101");
                    slider.set("lock","false");
                }
            },
            {
                gesture:"tap",
                name:"share_sina",
                callback:function(e,$tar){
                    tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
                    tourl = tourl.replace('$title',shareData.tit).replace('$content',shareData.tit+"£¡  "+shareData.desc).replace('$pic',shareData.imgUrl).replace('$url',shareData.link).replace('$back',shareData.link);
                    window.open(tourl,'_blank');
                }
            },{
                gesture:"tap",
                name:"m_link",
                callback:function(e,$tar){
                    var url = "http://m.cosmopolitan.com.cn/";
                    window.open(url,'_blank');
                }
            },{
                gesture:"tap",
                name:"video_btn",
                callback:function(e,$tar){
                    alert("1111")
                }
            }
        ]
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var audio = Fui.Audio({
    src:ImgDir('/music.mp3'),
    color:"#ee257b",
    autoplay:false
});
var mt = false;
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
            if(page==1){
                $(".p0 .fl_1,.p0 .fl_2").removeClass("show");
            }
            if(page==3){
                $("#img-pack").find(".focus").on("click",function(e){
                    alert("111")
                })
                if(mt==false){
                    $(".slide_tip").fadeIn();
                    setTimeout(function(){
                        mt=true;
                        $(".slide_tip").fadeOut();
                    },1500);
                }
                else $(".slide_tip").fadeOut();
            }
            if(page==6){
                $(".fui-arrow").css("z-index","-1");
                $(".app-music").css("z-index","-1");
            }
            else{

                $(".fui-arrow").css("z-index","10000");
                $(".app-music").css("z-index","101");
            }
        }
    },
    data:[
        {
            template:'PAGE0',
            bg:ImgDir('/p0/bg.jpg'),
            xtpl:'p0',
            design:function(){
                var me = this;
                audio.play();
                setTimeout(function(){
                    slider.set("lock",false);
                    $(".fui-arrow").css("z-index","1");
                    $(".p0 .fl_1,.p0 .fl_2").addClass("show");
                },1200);
            }
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p1/bg.jpg'),
            xtpl:'p1'
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p2/bg.jpg'),
            xtpl:'p2'
        }
        , {
            template: 'PAGE0',
            xtpl: 'p3',
            design: function () {
                var me = this;
                //me.$imglist = $el.find('.imglist');
                var imgs = me.imgs = new Fui.PageSlider({
                    el:"#img-pack",
                    stopPropagation:false,
                    preventDefault:false,
                    orient:'x',
                    arrow:{},
                    listeners:{
                        slide:function(){
                            var gesture = slider.event.gesture;
                            var page = this.get("curPage");
                            if(page>6) page=6;
                            $(".p3 .name img").eq(page).addClass("show").siblings().removeClass("show");
                        }
                    },
                    data:[
                        //{
                        //    template:'PAGE0',
                        //    bg:ImgDir('/p3/list/1.jpg')
                        //},
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/2.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/3.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/4.jpg')
                        },
                        //{
                        //    template:'PAGE0',
                        //    bg:ImgDir('/p3/list/5.jpg')
                        //},
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/6.jpg')
                        },
                        //{
                        //    template:'PAGE0',
                        //    bg:ImgDir('/p3/list/7.jpg')
                        //},
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/8.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/9.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/10.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/11.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/12.jpg')
                        },
                        //{
                        //    template:'PAGE0',
                        //    bg:ImgDir('/p3/list/13.jpg')
                        //},
                        //{
                        //    template:'PAGE0',
                        //    bg:ImgDir('/p3/list/14.jpg')
                        //},
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/15.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/16.jpg')
                        },
                        //{
                        //    template:'PAGE0',
                        //    bg:ImgDir('/p3/list/17.jpg')
                        //},
                        //{
                        //    template:'PAGE0',
                        //    bg:ImgDir('/p3/list/18.jpg')
                        //},
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/19.jpg')
                        },
                        {
                            template:'PAGE0',
                            bg:ImgDir('/p3/list/20.jpg')
                        }
                    ]
                });
                setTimeout(function(){imgs.render();},5000);
            }
        }
        , {
            template: 'PAGE0',
            bg:ImgDir('/p4/bg.jpg'),
            xtpl: 'p4'
        }
        ,{
            template: 'PAGE0',
            bg:ImgDir('/p5/bg.jpg'),
            xtpl: 'p5'
        }
        ,{
            template: 'PAGE0',
            bg:ImgDir('/p6/bg.jpg'),
            xtpl: 'p6'
        }
    ]
});
setTimeout(function(){
    slider.render();
    $(".fui-arrow").css("z-index","-1");
    $(".loadingC").fadeOut();
},3500);


//weixin share
var wx_url = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=Cosmom_Jssdk&type=json&url='"+String(window.location.href)+"'";
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