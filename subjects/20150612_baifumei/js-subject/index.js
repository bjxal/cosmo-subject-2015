require("/fliza-ui");
//var audio = Fui.Audio({
//    src:ImgDir('/audio.mp3'),
//    color:'none'
//});
//var url = "http://m.onlylady.com/files/eventapi.php?c=EventNew&a=ZST&indexsId=618";
move_m = false;
Fui.Template.IMG_DIR = ImgDir();
var PAGE0 = Fui.Template.extend({
    config:{
    },
    design:function(){
        $(".fui-arrow").hide();
    }
    ,getGestureItems:function(){
        return [
        ]
    }
});
var PAGE1 = Fui.Template.extend({
});
Fui.Template.regTpl({
    PAGE0:PAGE0,
    PAGE1:PAGE1
});
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    lock:false,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            move_t = false;
            var gesture = slider.event.gesture;
            $(".fui-arrow.right").hide();
            var page = this.get("curPage");
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
    ]
});
slider.render();
//cover
$(".cover").on("touchend",function(e){
    $(".cover").fadeOut();
});