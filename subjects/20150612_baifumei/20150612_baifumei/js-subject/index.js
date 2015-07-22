move_m = false;
grade = 0;
Fui.Template.IMG_DIR = ImgDir();
var PAGE0 = Fui.Template.extend({
    config:{
    },
    design:function(){
        $(".fui-arrow").hide();
    }
    ,getGestureItems:function(){
        return [
            {
                gesture:"tap",
                name:"next",
                callback:function(e,$tar){
                    slider.next();
                }
            },
            {
                gesture:"tap",
                name:"opt_Select",
                callback:function(e,$tar){
                    $tar.parent().addClass("selected").siblings().removeClass("selected");
                    grade+=parseInt($tar.data("val"));
                    setTimeout(function(){slider.next();},800);
                }
            },
            {
                gesture:"tap",
                name:"opt_Change",
                callback:function(e,$tar){
                    var link = $tar.attr("src");
                    var newlink = link.replace(".png","_sel.png");
                    if(link.indexOf("_sel")!=-1){
                        newlink = link.replace("_sel.png",".png");
                    }
                    $tar.attr("src",newlink);
                    grade+=parseInt($tar.data("val"));
                    setTimeout(function(){slider.next()},800);
                }
            },
            {
                gesture:"tap",
                name:"show_tips",
                callback:function(e,$tar){
                    $(".p12 .tips").fadeIn();
                }
            },
            {
                gesture:"tap",
                name:"hide_tips",
                callback:function(e,$tar){
                    $(".p12 .tips").fadeOut();
                }
            },
            {
                gesture:"tap",
                name:"link",
                callback:function(e,$tar){
                    window.location.href = "http://m.cosmopolitan.com.cn/";
                }
            }

        ]
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            move_t = false;
            var gesture = slider.event.gesture;
            $(".fui-arrow.right").hide();
            var page = this.get("curPage");
            console.log(grade+"---")
            if(page==12){
                var index = 1;
                if(grade>=30 && grade<40){
                        index = 1;
                }
                else if(grade>=40 && grade<50) {
                    index = 2;
                }
                else if(grade>=50 && grade<60) {
                    index = 3;
                }
                else if(grade>=60 && grade<70) {
                    index = 4;
                }
                else if(grade>=70 && grade<80) {
                    index = 5;
                }
                else if(grade>=80 && grade<90) {
                    index = 6;
                }
                else if(grade>=90 && grade<=100) {
                    index = 7;
                }
                else{}
                console.log(grade+"-----------"+index)
                $(".p12 .tit").find("span").html(grade);
                $(".p12 .word").find("span").attr("class","").addClass("word_"+index);
            }
        },
        gesture:function(){
        }
    },
    data:[
        {
            template:'PAGE0',
            xtpl:'p0',
            design:function(){
                this.$el.addClass("focus");
            }
        }
        ,{
            template:'PAGE0',
            xtpl:'p1'
        }
        ,{
            template:'PAGE0',
            xtpl:'p2'
        }
        ,{
            template:'PAGE0',
            xtpl:'p3'
        }
        ,{
            template:'PAGE0',
            xtpl:'p4'
        }
        ,{
            template:'PAGE0',
            xtpl:'p5'
        }
        ,{
            template:'PAGE0',
            xtpl:'p6'
        }
        ,{
            template:'PAGE0',
            xtpl:'p7'
        }
        ,{
            template:'PAGE0',
            xtpl:'p8'
        }
        ,{
            template:'PAGE0',
            xtpl:'p9'
        }
        ,{
            template:'PAGE0',
            xtpl:'p10'
        }
        ,{
            template:'PAGE0',
            xtpl:'p11'
        }
        ,{
            template:'PAGE0',
            xtpl:'p12'
        }
    ]
});
slider.render();
//cover
$(".cover").on("touchend",function(e){
    $(".cover").fadeOut();
});