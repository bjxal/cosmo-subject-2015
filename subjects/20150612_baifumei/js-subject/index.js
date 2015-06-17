//require("/fliza-ui");
//var audio = Fui.Audio({
//    src:ImgDir('/audio.mp3'),
//    color:'none'
//});
//var url = "http://m.onlylady.com/files/eventapi.php?c=EventNew&a=ZST&indexsId=618";
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
                    $(".p7 .tips").fadeIn();
                }
            },
            {
                gesture:"tap",
                name:"hide_tips",
                callback:function(e,$tar){
                    $(".p7 .tips").fadeOut();
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
    curPage:7,
    lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            move_t = false;
            var gesture = slider.event.gesture;
            $(".fui-arrow.right").hide();
            var page = this.get("curPage");
            console.log(page)
            if(page==7){
                var index = 1;
                if(grade>5 && grade<=19){
                        index = 1;
                }
                else if(grade>20 && grade<=29) {
                    index = 2;
                }
                else if(grade>30 && grade<=39) {
                    index = 3;
                }
                else if(grade>40 && grade<=49) {
                    index = 4;
                }
                else if(grade>=50) {
                    index = 5;
                }
                else{}
                $(".p7 .tit").find("span").html(grade);
                $(".p7 .word").find("span").attr("class","").addClass("word_"+index);
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
    ]
});
slider.render();
//cover
$(".cover").on("touchend",function(e){
    $(".cover").fadeOut();
});