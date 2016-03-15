$(document).ready(function(e){
    //���ذ�ť
    $(".top,.tit").on("click",function(e){
        var $tar = $(e.target);
        if($tar[0].nodeName.toLowerCase()=="a") return;
        history.back(-1);
    });
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    var login_url = "";
    var code_url = "";
    //F1-1 ��¼��֤
    $(".login #pwd").on("blur",function(e){
        var $tar = $(e.target);
        var phoneNum = $("#phoneNum").val();
        if($tar.val()=="" || $tar.val()==null){// || $tar.val().length<6){
            $(".login_tip").html("���벻��Ϊ��").addClass("show");
            $(".login_btn").removeClass("cur");
            return;
        }
        if(!myreg.test(phoneNum)){
            $(".login_tip").html("����д��ȷ���ֻ�����").addClass("show");
            $(".login_btn").removeClass("cur");
            return;
        }
        $(".login_tip").html("").removeClass("show");
        $(".login_btn").addClass("cur");
        //ajax ��¼��֤
        $.post(
            login_url,
            {
                "phone":$("#phoneNum").val(),
                "pwd":$("#pwd").val()
            },
            function(data){
                //data:{err:0,msg:""}
                if(data.err==0){
                    //��תҳ��
                }
                else{
                    $(".login_tip").html("������д����").addClass("show");
                }
            }
        );
    });
    //F1-2 �û�Э��
    $(".reg_agree").on("click",function(e){
        $(e.target).toggleClass("cur");
    });
    //F1-2 �ֻ�����֤
    $("#phoneNum").on("blur",function(e){
        var $tar = $(e.target);
        var phone = $tar.val();
        if(!myreg.test(phone)){
            $(".login_tip").html("����д��ȷ���ֻ�����").addClass("show");
            $(".reg_send").removeClass("cur");
            $(".pwd_tip").html("������XXXX�յ����ֻ���֤��");
            return;
        }
        $(".reg_send,.login").addClass("cur");
        $(".pwd_tip").html("������ "+phone+" �յ����ֻ���֤��");
    });
    //F1-2 ������֤��
    $(".reg_send").on("click",function(e){
        var $tar = $(e.target);
        if($tar.attr("class").indexOf("cur")==-1) return;
        var tm = 60;
        $tar.removeClass("cur").html(tm+"s");
        var st = setInterval(function(){
            if(tm==0){
                clearInterval(st);
                $tar.addClass("cur").html("������֤��");
                return;
            }
            --tm;
            $tar.html(tm+"s");
        },1000);
    });
    //F1-2 �ֻ���
    $("#code").on("blur",function(e){
        var $tar = $(e.target);
        if($tar.val()==""){
            $(".login_tip").html("����д�յ�����֤��").addClass("show");
            $(".login_btn").removeClass("cur");
            return;
        }
        $(".login_tip").html("").removeClass("show");
        $(".login_btn").addClass("cur");
        //ajax ע����֤
        $.post(
            code_url,
            {
                "phone":$("#phoneNum").val(),
                "code":$tar.val()
            },
            function(data){
                //data:{err:0,msg:""}
                if(data.err==0){
                    //��תҳ��
                }
            }
        );
    });
    //F1-3 �趨����
    $("#pwd_sure").on("blur",function(e){
        var $tar = $(e.target);
        var pwd = $("#pwd").val();
        if( pwd==null || pwd=="" || pwd.length<6){
            $(".login_tip").html("����д6λ���ϵ�����").addClass("show");
            $(".login_btn").removeClass("cur");
            return;
        }
        if($tar.val()!=pwd){
            $(".login_tip").html("�������벻һ��").addClass("show");
            $(".login_btn").removeClass("cur");
            return;
        }
        $(".login_tip").html("").removeClass("show");
        $(".login_btn").addClass("cur");
    });
    //F1-4 ������֤
    $("#name_v").on("focus",function(){
        $(".login_tip").addClass("show");
    }).on("blur",function(e){
        var name = $(e.target).val();
        if(name=="") {
            $('.login_btn').removeClass("cur");
			$(".login_tip").addClass("show");
            return;
        }
		$(".login_tip").removeClass("show");
        var rt1_v = $(".rt.user_sex").html();
        var rt2_v = $(".rt.user_birthday").html();
        var rt3_v = $(".rt.user_city").html();
        if(rt1_v==""||rt2_v==""||rt3_v==""){
            $('.login_btn').removeClass("cur");
            return;
        }
        $('.login_btn').addClass("cur");
    });
    //��һ��
    $(".login_btn").on("click",function(e){
        var $tar = $(e.target);
        var cname = $tar.attr("class");
        if(cname.indexOf("cur")==-1) return;
        var sure_code = $tar.data("sure");
        if(sure_code=="reg"){
            $('.reg_tips').fadeIn();
            var num = 3;
            var id = setInterval(function(){
                if(num<1){
                    clearInterval(id);
                    window.location.href="index.html";
                }
                $(".reg_tips span").html(num);
                num--;
            },1000);
            return;
        }
		if(sure_code=="reg_info"){
            $('.phone_tips').fadeIn();
            return;
        }
        var nextUrl = $tar.data("nexturl");
        if(nextUrl){
            window.location.href=nextUrl+".html";
        }
    });
    //F1-4 ע��-������Ϣ
    $(".reg_login_tip .close_tip").on("click",function(e){
        $("#name_v").focus();
    });
    $(".user_info .login_btn").on("click",function(e){
        $(".pop").fadeIn();
    });
    //F1-4 ѡ��
    sel = "sex";
    $(".sel_item").on("click",function(e){
        var $tar = $(e.currentTarget);
        sel = $tar.data("sel");
        $(".btm_sel").fadeIn().find("."+sel+"_sel").addClass("show");
    });
    //F1-4 ���
    $(".selectEnd").on("click",function(e){
        var $tar = $(e.target);
        var tag = $tar.data("tag");
        var val = "";
        if(tag=="sex"){
            val = $("#sex_dummy").val();
            if($("#ImgPr").length>0){
                var src = $("#ImgPr").attr("src");
                var img = "";
                if(src.indexOf("women")!=-1){
                    img = (val=="��")?src.replace("women","men"):src;
                }
                else{
                    img = (val=="Ů")?src.replace("men","women"):src;
                }
                $("#ImgPr").attr("src",img);
            }
        }
        else if(tag=="birthday"){
            val = $("#datetimeDate-demo").val().replace(/\//g,".")||"1990.01.01";
        }
        else if(tag=="city"){
            val = $("#city_dummy").val();
            $.each(city,function(i,item){
                if(item.child.indexOf(val)!=-1){
                    val = item.name+" "+$("#city_dummy").val();
                }
            })
        }
        $(this).parents("body").find(".user_"+sel).html(val).parents("."+sel).parents("body").find(".btm_sel").fadeOut().find("."+sel+"_sel").removeClass("show");
        //��֤�����Ƿ�Ϊ��
        var rt0_v = $("#name_v").val();
        var rt1_v = $(".rt.user_sex").html();
        var rt2_v = $(".rt.user_birthday").html();
        var rt3_v = $(".rt.user_city").html();
        if(rt0_v==""||rt1_v==""||rt2_v==""||rt3_v==""){
            $('.login_btn').removeClass("cur");
            return;
        }
        $('.login_btn').addClass("cur");
    });
    //F2-4 ������Ϣ
    var users_4_url = "";
    $(".save_info").on("click",function(e){
        var $tar = $(e.target);
        var sex = $(".user_sex").html();
        var birth = $(".user_birthday").html();
        var city = $(".user_city").html();
        if(sex=="" || birth=="" || city=="") return;
        window.location.href=$tar.data("nexturl");
        //���������Ϣ
        $.post(
            users_4_url,
            {
                "id":"",
                "sex":sex,
                "birth":birth,
                "city":city
            },
            function(data){
                var data = {err:0,msg:""};
                if(data.err==0){
                    window.location.href=$tar.data("nexturl")+".html";
                }
            }
        )
    });
    //F2-5 ��������Ϣ

    //F2-6 �༭��������Ϣ-ɾ��
    $(".del_btn").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".tips").fadeIn();
    });
    //F2-6 �༭��������Ϣ-ɾ��-��
    var save_del_url = "http://m.trends-health.com.cn//files/eventapi.php?c=Trendshealthm_Activity&a=Cancelcandidates";
    $(".users_edit_info .del_info").on("click",function(e){
        var $tar = $(e.target);
        var cid = $("#edit_cid").val() || "";
        if(cid=="") return;
        $.post(
            save_del_url,
            {"cid":cid},
            function(data){
                if(data.flag==0) return;
                window.location.href = $tar.data("nexturl")+".html";
            }
        )
    });
    //F2-6 �༭��������Ϣ-����
    var edit_cid = $("#edit_cid").val() || "";
    if(edit_cid==""){
        $(".users_edit_info #name").removeAttr("readonly");
    }
    var save_url = "http://m.trends-health.com.cn//files/eventapi.php?c=Trendshealthm_Activity&a=Addcandidates";
    $(".users_edit_info .save").on("click",function(e){
        var $tar = $(e.target);
        var avtImg = $("#result1").html();
        var name = $("#name").val();
        var sex = $(".user_sex").html();
        var idcard = $("#cardNum").val();
        var address = $("#addr").val();
        var ext_info = $("#other").val();
        if(name=="" || sex=="" || idcard=="" || address=="") return;
        var data = {
            "avtImg":avtImg,
            "name":name,
            "sex":sex,
            "idcard":idcard,
            "address":address,
            "ext_info":ext_info,
            "cid":edit_cid
        };
        $.post(
            save_url,
            data,
            function(data){
                if(data.flag==0) return;
                window.location.href = $tar.data("nexturl")+".html";
            }
        )
    });
    //F4-4 ��ӱ�����
    var users_add_url = "http://m.trends-health.com.cn/files/eventapi.php?c=Trendshealthm_Activity&a=AjaxCheck";
    $(".users_add .save_add").on("click",function(e){
        var $tar = $(e.target);
        var users_add_id = "";
        var id = $("#id").val();
        $.each($(".users_add .sel_btn"),function(e,item){
            var cname = $(item).attr("class");
            var cid = $(item).data("userid");
            if(cname.indexOf("cur")==-1) return;
            users_add_id += cid+",";
        });
        $.post(
            users_add_url,
            {"id":id,"cid":users_add_id},
            function(data){
                if(data.flag==0) return;
                window.location.href = $tar.data("nexturl")+".html";
            }
        )
    });
    //common
    $(".close_tip").on("click",function(e){
        var $tar = $(e.target);
        var $par = $tar.parents("body");
        $par.find(".pop").fadeOut();
    });
});
$(function(){
    var body_cname = $("body").attr("class");
    if(body_cname=="users_info"){
        setCity();
        //select city
        $('#city').mobiscroll().select({
            theme: 'mobiscroll',
            display: 'inline',
            label: 'City',
            group: true,
            groupLabel: 'Country',
            fixedWidth: [100, 170]
        });
        //select sex
        $('#sex').mobiscroll().select({
            theme: 'mobiscroll',
            lang: "zh",
            display: 'inline',
//			minWidth: 200,
            mode: "datetimeDate"
        });
        //select date
        var demoContainer = $('.demo-wrapper-datetimeDate');
        demoContainer.show();
        $('#datetimeDate-demo').mobiscroll().date({
            theme: "ios",
            lang: "zh",
            display: "inline",
            mode: "datetimeDate"
        });
    }
    else if(body_cname=="users_info users_edit_info" || body_cname=="activity_apply activity_enroll"){
        //select sex
        $('#sex').mobiscroll().select({
            theme: 'mobiscroll',
            lang: "zh",
            display: 'inline',
//			minWidth: 200,
            mode: "datetimeDate"
        });
    }
    /*��ӱ�����*/
    $(".users_add .sel_btn").on("click",function(e){
        $(this).toggleClass("cur");
    });
    //�ϴ�ͼƬ
    if($("#up").length==0) return;
    var input = document.getElementById("up");
    var result= document.getElementById("result1");
    var img_area = document.getElementById("img_area");
    if ( typeof(FileReader) === 'undefined' ){
        result.innerHTML = "��Ǹ������������֧�� FileReader����ʹ���ִ������������";
        input.setAttribute( 'disabled','disabled' );
    } else {
        //alert('a');
        input.addEventListener( 'change',readFile,false );
    }
});
function readFile(){
    var file = this.files[0];
    var result= document.getElementById("result1");
    var img_area = document.getElementById("ImgPr");
    if(!/image\/\w+/.test(file.type)){
        alert("��ȷ���ļ�Ϊͼ������");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        result.innerHTML = this.result;
        img_area.src = this.result;
    }
}
//set city Dom
function setCity(){
    var dom = "";
    $.each(city,function(i,item){
        dom += '<optgroup label="'+item.name+'">';
        $.each(item.child,function(j,item_j){
            dom += '<option value="'+item.name+" "+item_j+'">'+item_j+'</option>';
        })
    })
    $("#city").append(dom);
}