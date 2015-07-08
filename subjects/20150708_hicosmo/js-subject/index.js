var picList = [
    {
        width: 750,
        height: 207,
        content: ImgDir('/p4/1.jpg')
    },
    {
        width: 750,
        height: 207,
        content: ImgDir('/p4/2.jpg')
    },
    {
        width: 750,
        height: 207,
        content: ImgDir('/p4/3.jpg')
    }
];

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
    }
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:5,
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
                var aa = this;
                setTimeout(function(){
                    aa.$el.addClass("focus");
                    setTimeout(function(){
                        aa.$el.find(".tableCell").addClass("show");
                    },1000);
                },1000);
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
        ,{
            template:'PAGE0',
            bg:ImgDir('/p3/bg.jpg'),
            xtpl:'p3'
        }
        ,{
            template:'PAGE0',
            xtpl:'p4'
        }
        ,{
            template:'PAGE0',
            bg:ImgDir('/p5/bg.jpg'),
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
//p4
var islider1 = new iSlider({
    data: picList,
    dom: document.getElementById("animation-effect"),
    duration: 2000,
    animateType: 'rotate',
    isAutoplay: true,
    isLooping: true,
    // isVertical: true, ÊÇ·ñ´¹Ö±¹ö¶¯
});
//cover
$(".cover").on("touchend",function(e){
    $(".cover").fadeOut();
});