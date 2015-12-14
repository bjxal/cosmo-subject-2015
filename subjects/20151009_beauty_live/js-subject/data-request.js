/*set data*/
LIST = function(){}
LIST.prototype = {
    set_watch_list:function(){
        var islider1 = new iSlider({
            data: watch_list,
            type:"dom",
            dom: document.getElementById("animation-effect"),
            duration: 3000,
            animateType: 'rotate',
            isAutoplay: false,
            isLooping: true,
            onslideend:function(){
                var list = $("#animation-effect li");
                $.each(list,function(i,item){
                    var deg_v = $(item).attr("style").split("rotateY(")[1].split("deg")[0];
                    if(deg_v==0){
                        $(item).find(".word").addClass("cur");
                    }
                    else{
                        $(item).find(".word").removeClass("cur");
                    }
                });
            }
            //isVertical: true// 是否垂直滚动
        });
    },
    set_star_list:function(){
        var me = this;
        me.star_html();
        var islider2 = new iSlider({
            data: star_list,
            //type:'dom',
            dom: document.getElementById("animation-effect-2"),
            duration: 3000,
            animateType: 'flow',
            isAutoplay: false,
            isLooping: true,
            onslideend:function(){
                var id = islider2.slideIndex;
                $(".p2 .name-list p").eq(id).addClass("cur").siblings().removeClass("cur");

            }
            //isVertical: true// 是否垂直滚动
        });
    },
    star_html:function(){
        var me = this;
        var name = "";
        $.each(star_list,function(i,item){
            var cname = (i==0)?"cur":"";
            name += '<p class="'+cname+'">'+item.title+'</p>';
        });
        $(".p2 .name-list").html(name);
    },
    set_guests_list:function(){
        var me = this;
        /*lf*/
        var name = "";
        $.each(guest_list,function(i,item){
            var id = i%2+1;
            var cname = (i==0)?"cur":"";
            var lf_html = me.guests_html(item,i);
            $(".p3 .list-c-"+id).append(lf_html);
            name += '<p class="'+cname+'">'+item.title+'</p>';
        });
    },
    guests_html:function(obj,i){
        var c = document.createElement("div");
        var cname = (i<2)?"cur":"";
        //c.className = (i==0)?"list-c-item cur":"list-c-item";
        c.className = "list-c-item item-"+Math.floor(i/2)+" "+cname;

        var c_img = document.createElement("img");
        c_img.src = obj.pic;
        c.appendChild(c_img);

        var c_name = document.createElement("div");
        c_name.className = "name";
        c_name.innerHTML = obj.title;
        c.appendChild(c_name);

        return c;
    },
    guests_name_html:function(obj,i){
    },
    set_icon_list:function(){
        var me = this;
        $.each(icon_list,function(i,item){
            var id = i%4+1;
            var icon_html = me.icon_html(item,i);
            $(".p4 .list-c-"+id).append(icon_html);
        });
    },
    icon_html:function(obj,i){
        var cname = (i<4)?"cur":"";
        var c = document.createElement("div");
        c.className = "item-c item-"+Math.floor(i/4)+" "+cname;

        var c_avt = document.createElement("div");
        c_avt.className = "c-avt";
        c_avt.innerHTML = '<img src="'+obj.pic+'"/>';
        c.appendChild(c_avt);

        var c_info = document.createElement("div");
        c_info.className = "c-info";
        c_info.innerHTML = '<h2>'+obj.title+'</h2><p>'+obj.digest+'</p>';
        c.appendChild(c_info);

        var c_line = document.createElement("div");
        c_line.className = "c-line";
        c_line.innerHTML = '<span class="line_1"></span><span class="line_2"></span>';
        c.appendChild(c_line);

        return c;

    },
    set_moment_list:function(){
        var me = this;
        $.each(moment_list,function(i,item){
            var id = i%5+1;
            var moment_html = me.moment_html(item,i);
            $(".p5 .list-c-"+id).append(moment_html);
        });
    },
    moment_html:function(obj,i){
        var cname = (i<5)?"cur":"";
        var c = document.createElement("img");
        c.src = obj.pic;
        c.className = "item-c item-"+Math.floor(i/5)+" "+cname;

        return c;
    },
    set_team_list:function(){
        var me = this;
        $.each(team_list,function(i,item){
            var id = i%12+1;
            var team_html = me.team_html(item,i);
            $(".p6 .list-c-"+id).append(team_html);
        });
    },
    team_html:function(obj,i){
        var cname = (i<12)?"cur":"";
        var c = document.createElement("div");
        c.className = "list-item item-"+Math.floor(i/12)+" "+cname;
        c.innerHTML = '<img src="'+obj.pic+'"/><div class="name"><p><span>'+obj.title+'</span></p></div>';

        return c;
    }
};

/*request url*/
var request = "http://m.cosmopolitan.com.cn/files/eventapi.php?c=HandModule&a=Default";

var list_fun = new LIST();
/*现场直击*/
var watch_list = [];
function live_fun(data){
    $.each(data,function(i,item){
        var arr = {};
        arr.width = "710px";
        arr.height = "790px";
        var cur = (i==0)?"cur":"";
        arr.content = '<div class="imgs"><img src="'+item.pic+'"/><div class="word '+cur+'"><h2>'+item.title+'</h2><p>'+item.digest+'</p></div></div>';
        watch_list.push(arr);
    });
    /*set watch_list*/
    list_fun.set_watch_list();
}

/*星光熠熠*/
var star_list = [];
function star_fun(data){
    $.each(data,function(i,item){
        var arr = {};
        arr.width = 520;
        arr.height = 800;
        arr.content = item.pic;
        arr.title = item.title;
        star_list.push(arr);
    });
    /*set star_list*/
    list_fun.set_star_list();
}

/*红毯嘉宾*/
var guest_list = [];
function guest_fun(data){
    guest_list = data;
    /*set guests_list*/
    list_fun.set_guests_list();
}

/*无界icon*/
var icon_list = [];
function icon_fun(data){
    icon_list = data;
    /*set icon_list*/
    list_fun.set_icon_list();
}
/*精彩花絮*/
var moment_list = [];
function moment_fun(data){
    moment_list = data;
    /*set moment_list*/
    list_fun.set_moment_list();
}

/*合作伙伴*/
var team_list = [];
function team_fun(data){
    team_list = data;
    /*set team_list*/
    list_fun.set_team_list();
}

function ajax_url(id,cbfun){
    $.ajax({
        type:"POST",
        async:false,
        url:request,
        data:{module_id:id},
        dataType:"json",
        success:function(rel){
            cbfun(rel);
        },
        error:function(textStatus,e){
            console.log(textStatus)
        }
    });
}