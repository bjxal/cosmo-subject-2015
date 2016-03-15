var calendar = {
    config: {
        id: null,
        ok: null,
        maxDay: null,
        minDay: null,
        zIndex: 1000,
        ishotel: false,
        format: "yyyy-MM-dd"
    },
    clear: function () {
        calendar.config.id = null;
        calendar.config.ok = null;
        calendar.config.maxDay = null;
        calendar.config.minDay = null;
        calendar.config.zIndex = 1000;
        calendar.config.ishotel = false;
    },
    _setDay: function (m, y, d) {
        //var currDay = d;
        //var currMon = m;
        //var currYear = y;

        var setMon = new Date().getMonth() + 1;
        var setYear = new Date().getFullYear();
        var setDay = new Date().getDate();

        var firstDay = new Date(y + "/" + m + "/" + 1).getDay();
        var calDay = [];
        var _d = 1;
        var lastDay = new Date(y, m, 0).getDate();
        for (var i = 0; i < 6; i++) {
            calDay.push("<tr>");
            for (var j = 0; j < 7; j++) {
                if (i == 0) {
                    if (firstDay > j) {
                        calDay.push("<td date=''>&nbsp;</td>");
                    }
                    else {
                        var f = calendar.festivals(m, _d);
                        var _dx = (y + "-" + m + "-" + _d);
                        if (m == currMon && currDay == _d && currYea == y) {
                            if(dateList.indexOf(_dx+",")!=-1){
                                console.log("aaa")
                                console.log(_dx)
                                calDay.push("<td date='" + _dx + "'><div class='_curDay'>" + _d + "<span class='_act'></span></div></td>");
                            }
                            else{
                                calDay.push("<td date='" + _dx + "'><div class='_curDay'>" + _d + "<span></span></div></td>");
                            }
                            //calDay.push("<td date='" + _dx + "'><div class='_curDay'>" + _d + "<span></span></div></td>");
                        }
                        else if (m == setMon && setDay == _d && setYear == y) {
                            calDay.push("<td date='" + _dx + "' title='" + _d + "号' class='_sday'><div>"+ _d +"<span></span></div></td>");
                        }
                        else if (f !== "") {
                            calDay.push("<td date='" + _dx + "' class='festival'><div>" + f + "<span></span></div></td>");
                        }
                        else if (calendar.config.minDay != null && new Date(calendar.config.minDay.replace(/[年月日-]/g, "\/")) > new Date(_dx.replace(/[-]/g, "\/"))) {
                            calDay.push("<td date='' class='disDay'><div>" + _d + "<span></span></div></td>");
                        }
                        else if (calendar.config.maxDay != null && new Date(calendar.config.maxDay.replace(/[年月日-]/g, "\/")) < new Date(_dx.replace(/[-]/g, "\/"))) {
                            calDay.push("<td date='' class='disDay'><div>" + _d + "<span></span></div></td>");
                        }
                        else {
                            if(dateList.indexOf(_dx+",")!=-1){
                                calDay.push("<td date='" + _dx + "'><div>" + _d + "<span class='_act'></span></div></td>");
                            }
                            else{
                                calDay.push("<td date='" + _dx + "'><div>" + _d + "<span></span></div></td>");
                            }
                            //calDay.push("<td date='" + _dx + "'><div>" + _d + "<span></span></div></td>");
                        }
                        _d++;
                    }
                }
                else {
                    if (_d <= lastDay) {
                        var f = calendar.festivals(m, _d);
                        var _dx = (y + "-" + m + "-" + _d);
                        if (m == currMon && currDay == _d && currYea == y) {
                            if(dateList.indexOf(_dx+",")!=-1){
                                calDay.push("<td date='" + _dx + "'><div class='_curDay'>" + _d + "<span class='_act'></span></div></td>");
                            }
                            else{
                                calDay.push("<td date='" + _dx + "'><div class='_curDay'>" + _d + "<span></span></div></td>");
                            }
                        }
                        else if (m == setMon && setDay == _d && setYear == y) {
                            calDay.push("<td date='" + _dx + "' title='" + _d + "号' class='_sday'><div>"+_d+"<span></span></div></td>");
                        }
                        else if (f !== "") {
                            calDay.push("<td date='" + _dx + "' title='" + m + "-" + _d + "' class='festival'><div>" + f + "<span></span></div></td>");
                        }
                        else if (calendar.config.minDay != null && new Date(calendar.config.minDay.replace(/[年月日-]/g, "\/")) > new Date(_dx.replace(/[-]/g, "\/"))) {
                            calDay.push("<td date='' class='disDay'><div>" + _d + "<span></span></div></td>");
                        }
                        else if (calendar.config.maxDay != null && new Date(calendar.config.maxDay.replace(/[年月日-]/g, "\/")) < new Date(_dx.replace(/[-]/g, "\/"))) {
                            calDay.push("<td date='' class='disDay'><div>" + _d + "<span></span></div></td>");
                        }
                        else {
                            if(dateList.indexOf(_dx+",")!=-1){
                                calDay.push("<td date='" + _dx + "'><div>" + _d + "<span class='_act'></span></div></td>");
                            }
                            else{
                                calDay.push("<td date='" + _dx + "'><div>" + _d + "<span></span></div></td>");
                            }
                        }
                        _d++;
                    }
                    else{
                        calDay.push("<td date=''>&nbsp;</td>");
                    }
                }
            }
            calDay.push("</tr>");
        }
        return calDay.join("");
    },
    L: function (e) {
        var l = 0; while (e) { l += e.offsetLeft; e = e.offsetParent; }
        return l
    },
    T: function (e) {
        var t = 0; while (e) { t += e.offsetTop; e = e.offsetParent; }
        return t
    },
    colse: function () {
        //if (document.getElementById("_calendar")) {
        //    document.body.removeChild(document.getElementById("_calendar"));
        //    $(".calendar").remove();
        //}
    },
    show: function () {
        calendar.colse();
        var config = arguments[0]; var that = calendar.config;
        calendar.clear();
        for (var i in that) { if (config[i] != undefined) { that[i] = config[i]; } };
        calendar.init(calendar.config.id);
    },
    festivals: function (m, d) {
        var lFtv = ["101:国庆", "1225:圣诞"];
        var f = "";
        for (var i = 0; i < lFtv.length; i++) {
            if (lFtv[i].split(':')[0] == (m.toString() + d.toString()))
                f = lFtv[i].split(':')[1];
        }
        return f;
    },
    init: function (s) {
        var obj = s;
        var oDay = s.value.replace(/[年月]/g, "-").replace(/[日]/g, "");
        if ($(s).attr("date") != "" && $(s).attr("date") != undefined) {
            oDay = $(s).attr("date");
        }
        currMon = new Date().getMonth() + 1;
        currYea = new Date().getFullYear();
        currDay = new Date().getDate();
        dotlist = "2016-3-2,2016-2-16,2016-1-18,2016-1-15,2016-1-14";
        dateList = dotlist.replace(/-0/g,"-")+",";
        var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
        if (oDay != "" && reg.test(oDay)) {
            currMon = parseInt(oDay.split('-')[1]);
            currDay = parseInt(oDay.split('-')[2]);
            currYea = oDay.split('-')[0];
        }
        var modMone = new Date().getFullYear();
        modMone = modMone - 5;
        var _yers = [];
        _yers.push("<table style='display:none;' id='calYear' class='calYear'>");
        for (var m = 0; m < 4; m++) {
            _yers.push("<tr>");
            for (var n = 0; n < 3; n++) {
                _yers.push("<td>" + modMone + "</td>");
                modMone++;
            }
            _yers.push("</tr>");
        }
        _yers.push("</table>");

        var _c = [];
        var t = s.offsetHeight;
        _c.push("<div id='calendar_head' class='calendar_head'><div id='_calyear' class='_calyear'>" + currYea + "</div><div id='_calmod' class='_calmod'><em class='calendaremL'></em><span>" + currMon + "月</span><em class='calendaremR'></em></div>");
        _c.push(_yers.join(""));
        _c.push("<table style='display:none;' id='calMonth' class='calMonth'><tr><td>1月</td><td>2月</td><td>3月</td><td>4月</td></tr><tr><td>5月</td><td>6月</td><td>7月</td><td>8月</td></tr><tr><td>9月</td><td>10月</td><td>11月</td><td>12月</td></tr></table>");
        _c.push("</div>");
        //_c.push("<div class='calendar_boy' ><i id='_bgMon'>" + currMon + "</i>");
        _c.push("<table id='_tdCal' class='_caltable' border='0'><tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>");
        _c.push("" + calendar._setDay(currMon, currYea, currDay) + "");
        _c.push("</table>");

        //var calTop = calendar.T(s) + t;
        //var calLeft = calendar.L(s);
        var calTop = "80px";
        var calLeft = 0;
        var bodyHith = document.body.parentNode.offsetHeight;
        var bodywidth = document.body.parentNode.offsetWidth;
        if ((calTop + 225) > bodyHith) { calTop = calendar.T(s) - 225; }
        var _boy = document.getElementsByTagName("body").item(0);
        var _div = document.createElement("div");
        _div.setAttribute('id', "_calendar");
        _div.setAttribute('class', "calendar");
        _div.setAttribute('style', "left:" + calLeft + "px;top:" + calTop + "px;z-index:" + calendar.config.zIndex + ";");
        _boy.appendChild(_div);
        document.getElementById("_calendar").innerHTML = _c.join("");

        $("#_calyear").click(function () {
        }).blur(function () {
            calendar._yearMon($("#_calmod").html(), this.value, s);
        }).keyup(function () {
            $("#calYear").hide();
            $("#calMonth").hide();
            this.value = this.value.replace(/[^\d]/g, "");
        });
        //select date
        $("#_tdCal tr:gt(0) td[date!='']").click(function () {
            s.value = new Date($(this).attr("date").replace(/[-]/g, "/")).format(calendar.config.format);
            $(s).attr("date", new Date($(this).attr("date").replace(/[-]/g, "/")).format("yyyy-MM-dd"));
            if (calendar.config.ok != null) {
                eval(calendar.config.ok());
            }
            //calendar.colse();
        }).live("mouseover", function () {
            $("._caltable").find("div").removeClass("_selDay");
            $(this).find("div").addClass("_selDay");
            var dt = $(this)[0].textContent;
            $(".con .date_list").removeClass("cur");
            $(".con .date_"+dt).addClass("cur");

        }).live("mouseout", function () { $(this).removeAttr("style") });


        $("#calendar_head  em").click(function () {
            if ($("#calendar_head em").index(this) == 0) {
                calendar._nexPrv("L", $("#_calmod span").html().replace("月",""), $("#_calyear").html(), currDay);
            }
            else {
                calendar._nexPrv("R", $("#_calmod span").html().replace("月",""), $("#_calyear").html(), currDay);
            }
        });
        $("#_tdCal").click(function () {
            $("#calYear").hide();
            $("#calMonth").hide();
        });

        //current month
        var mn = (String(currMon).length==1)?"0"+currMon:currMon;
        calendar._getData(currYea+"-"+mn);
        //document.onclick = function (e) {
        //    var event = e || window.event;
        //    var Target = event.target || event.srcElement;
        //    calendar.hide(event, Target, obj);
        //}
    },
    hide: function (event, Target, obj) {
        var oPare = Target.parentNode;
        var isChild = true;
        if (oPare == obj || Target == obj) {
            isChild = true;
        } else {
            loop: while (oPare != document.getElementById("_calendar")) {
                oPare = oPare.parentNode;
                if (oPare == obj || oPare == null) {
                    isChild = false;
                    break loop;
                }
            }
        }
        if (!isChild) {
            //calendar.colse();
        }
    },
    _selCal: function (e) {
        $("#_tdCal tr:gt(0) td[date!='']").click(function () {
            e.value = new Date($(this).attr("date").replace(/[-]/g, "/")).format(calendar.config.format);
            $(e).attr("date", new Date($(this).attr("date").replace(/[-]/g, "/")).format("yyyy-MM-dd"));
            if (calendar.config.ok != null) {
                eval(calendar.config.ok());
            }
            //calendar.colse();
        });
    },
    _yearMon: function (m, y, s) {
        $("#_tdCal tr:gt(0)").remove();
        $("#_tdCal").append(calendar._setDay(m, y, 0));
        //$("#_bgMon").html(parseInt(m));
        $("#_tdCal tr:gt(0) td[date!='']").click(function () {
            s.value = new Date($(this).attr("date").replace(/[-]/g, "/")).format(calendar.config.format);
            calendar.colse();
        });
    },
    _nexPrv: function (t, m, y, s) {
        var ys = y;
        var ms = m;
        if (t == "L") {
            if (m == 1) {
                ms = 12;
                ys = parseInt(y) - 1;
            }
            else {
                ms = parseInt(m) - 1;
            }
        }
        else {
            if (m == 12) {
                ms = 1;
                ys = parseInt(y) + 1;
            }
            else {
                ms = parseInt(m) + 1;
            }
        }
        $("#_tdCal tr:gt(0)").remove();
        $("#_tdCal").append(calendar._setDay(ms, ys, s));
        $("#_calmod span").html(ms+"月");
        $("#_calyear").html(ys);
        //$("#_bgMon").html(ms);
        $("#_tdCal tr:gt(0) td[date!='']").click(function () {
            s.value = new Date($(this).attr("date").replace(/[-]/g, "/")).format(calendar.config.format);
            $(s).attr("date", new Date($(this).attr("date").replace(/[-]/g, "/")).format("yyyy-MM-dd"));
            //calendar.colse();
        });
        var mn = (String(ms).length==1)?"0"+ms:ms;
        calendar._getData(ys+"-"+mn);
    },
    _getData:function(m){
        var me = this;
        var getData_m = "http://m.trends-health.com.cn/files/eventapi.php?c=Trendshealthm_calendar&a=Getlistjson";
        $.ajax({
            type:"POST",
            url:getData_m,
            data:{"yearmonth":m},
            dataType: "json",
            success:function(back){
                if(back.flag==0) return;
                calendar._setList(back.data);
            },
            error:function(err){}
        });
    },
    _setList:function(data){
        var date_t = "";
        $(".con").empty();
        $.each(data,function(i,item){
            if(date_t.indexOf(item.datetime)!=-1) return;
            var list_d = '<div class="date_list cur date_'+parseInt(item.datetime)+'"></div>';
            date_t += item.datetime+",";
            $(".con").append(list_d);
        });
        $.each(data,function(i,item){
            var dom = '<a href="'+item.eventurl+'" class="run_c item"><div class="order_c"><p>'+item.type+'</p><span class="act_tit">'+item.name+'</span><img src="'+item.imgurl+'" class="width_100"></div></a>';
            $(".date_"+parseInt(item.datetime)).append(dom);
        })
    }
};
Date.prototype.format = function (format) {
    var o =
    {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        };
    };
    return format;
};
document.write("");