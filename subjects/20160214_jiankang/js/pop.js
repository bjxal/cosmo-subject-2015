$(document).ready(function(){
    var inputArr = [];
    $(".upload_hid").uploadPreview({ Img: "ImgPr", Width: 208, Height: 225 ,Thumb:"thumbList",ImgNone:"img_none"});

    $("#resetBtn").bind("click",function(){
        $(".bigImg img").attr("src","");
        $(".thumbList .thumb_img").attr("src","").addClass("img_none");
        $(".upload_hid").show();
    });
    $(".tips .canyu").bind("click",function(){$(".shadow").fadeIn();$(".pop").fadeIn();});
    $(".pop .close").bind("click",function(){$(this).parent().fadeOut();$(".shadow").fadeOut();});
    //$(window).scroll(function(){
		var top1 =  document.body.scrollTop | document.documentElement.scrollTop; console.log(top1);
      //  var top = $(window).scrollTop();
        $(".pop").css("top",top1);
   // });

    $(".thumbList .thumb").bind("mouseover",function(){
        $(this).find(".thumb_del").show();
    }).bind("mouseleave",function(){
            $(this).find(".thumb_del").hide();
        }).bind("click",function(){
            var index = $(this).attr("data-index");
            $(this).find("img").attr("src","").addClass("img_none");
            var $input = $(".upload_hid").eq(index);
            $input.show().val(null);
            for(var i= 0,ln=inputArr.length;i<ln;i++){
                if(inputArr[i] == $input.attr('id')){
                    inputArr.splice(i,1);
                    break;
                }
            }
            $(".bigImg").find("img").attr("src","");
        });
    $('.upload_hid').bind('change',function(){
        inputArr.push(this.id);
    });
    //�ϴ�ͼƬ
    var xy = "";
    $("#subBtn").bind("click",function () {
        xy = $("#xy").val()||'';
        if(xy.length<80) return alert("��������80���֣�");
        $(".info").fadeIn();
        $(".pop").hide();
    });
    //�ϴ��ļ�
    $("#formSub").click(function(){
        var name = $("#name").val();
        var addr = $("#addr").val();
        var phone = $("#phone").val();
        if(!name) return alert('������Ϊ��');
        if(!addr) return alert('��ַ����Ϊ�գ�');
        if(!/1\d{10}/g.test(phone)) return alert('�绰������д����');

        var url = 'http://www.onlylady.com/files/eventapi.php?c=Event&a=Pt';
        var inputs = [], i = 0,j = 0;
        $.each(inputArr
            ,function(i,a){

                $.ajaxFileUpload({
                    url:url,
                    secureuri:false,
                    fileElementId:a,
                    dataType: 'text',
                    success: function (href)
                    {
                        inputs.push(href);
                        console.log(arguments);
                        j++;
                        if(inputArr.length == j){
                            success();
                        }
                    },
                    error: function (data, status, e)
                    {
                        alert(e);
                    }
                });

//                var $input = $('#'+a);
//                if($input.val()){
//                    i++;
//
//                }
            }
        );
        function success(){
            //info submit
            console.log(inputs);
            var obj = {
                "data[2150]":name,
                "data[2151]":addr,
                "data[2152]":phone,
                "data[2153]":xy,
                "data[2154]":inputs.join('|')
            }
            $.post('http://www.onlylady.com/files/eventapi.php?c=EventApi&a=AddEvent&indexsId=524',obj,function(data){
                console.log(arguments);
                $(".shadow").hide();
                $(".info").hide();
            })
        }
    });
});

$(document).ready(function(){
	$(".xin").click(function(){	
		$(this).addClass("xin_h");
		$(this).removeClass("xin");
		$(".pop_h").show();
		setTimeout($(".pop_h").hide(),3000);
		})
	})
	
