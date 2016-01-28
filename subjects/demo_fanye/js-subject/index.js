require("/fliza-ui");
//Fui.Template.IMG_DIR = ImgDir();
var PAGE0 = Fui.Template.extend({
    config:{},
    getGestureItems:function(){}
});
Fui.Template.regTpl({
    PAGE0:PAGE0
});
var slider = new Fui.PageSlider({
    el:'#pack',
    curPage:0,
    //lock:true,
    iteration:false,
    orient:'y',
    listeners:{
        slide:function(){
            var gesture = slider.event.gesture;
            var page = this.get("curPage");
        }
    },
    data:[
        {
            template:'PAGE0',
            xtpl:'p0',
            design:function(){}
        }
    ]
});
slider.render();

var w=$(window).width();
var h=$(window).height();
$('.flipboox').width(w).height(h);
$(window).resize(function(){
    w=$(window).width();
    h=$(window).height();
    $('.flipboox').width(w).height(h);
});

$('.flipbook').turn({
    // Width
    width:w,
    // Height
    height:h,
    // Elevation
    elevation: 50,
    display :'single',
    // Enable gradients
    gradients: true,
    // Auto center this flipbook
    autoCenter: true
});
