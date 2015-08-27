$(document).ready(function() {
    $(".btn_list a[id]").click(function (e) {
        var aSpan = $(".result_list");
        var aImg = $(".btn_list");
        aImg.stop();
        aSpan.stop();
        aImg.animate({
            width:0,
            marginLeft:180
        },80,'',function(){
            $(this).hide();
            aSpan.show().animate({
                width:"100%",
                marginLeft:0
            },80)
        })
    });
    if(pollid!="" && pollid!=undefined){
        var vote = new VOTE();
        vote.init();
    }
    else{
        $(".toupiao").hide();
    }
});
var VOTE = function(){}
VOTE.prototype = {
    votePostUrl:"http://m.cosmopolitan.com.cn/files/eventapi.php",
    defaultMsg:{},
    visibleResult:'',
    init:function(){
        var me = this;
        $.ajax({
            type: "POST",
            url: votePostUrl,
            data: "c=Cosmom_ArticlePoll&a=Default&docid="+pollid+"&polloptionid=",
            dataType : "jsonp",
            jsonp: "jsonpCallback",
            jsonpCallback:"jsonpCallback",
            success: function (msg) {
                me.defaultMsg = msg;
                me.visibleResult = msg.visible;
                me.setVote_toupiao_c(msg);
                me.setVote_total(msg.voters);
                var curDate = new Date().getTime();
                if(curDate > msg.expiration+"000"){
                    me.voteEnd(msg);
                }
                else{
                    me.setVote(msg);
                }
            }
        });
    },
    voteEnd:function(data){
        var me = this;
        me.setVoteResult(data);
    },
    setVote:function(data){
        var me = this;
        var vote_html = '<div class="btn_list">';
        var details = data.detail;
        var len = details.length;
        for(var i=0;i<len;i++){
            vote_html += '<a id="btn'+(i+1)+' " class="vote_select" href="javascript:void (0);" data-id="'+details[i].polloptionid+'">'+details[i].polloption+'</a>';
        }
        vote_html += '</div><div class="vote_tips">投票成功!</div>';
        $(".toupiao .toupiao_c").append(vote_html);
        //me.setVote_total(data.voters);
        me.bindTouch(data);
    },
    setVote_toupiao_c:function(data){
        var me = this;
        var vote_toupiao_c_html = '<div class="toupiao_c"><div class="bt">'+data.subject+'</div></div>';
        $(".toupiao").prepend(vote_toupiao_c_html);
    },
    setVote_total:function(data){
        var me = this;
        var vote_total_html = '<div class="total"><span class="hand"></span>有<span class="num"> '+data+' </span>人参与问答</div>';
        $(".toupiao").append(vote_total_html);
    },
    bindTouch:function(data){
        var me = this;
        $(".vote_select").on("touchend",function(e){
            var id = $(e.target).data("id");
            if(data.voteinterval=="0"){
                if($.cookie("vote_one")!=undefined){
                    me.vote_tips("不能重复投票!");
                    if(me.visibleResult==1){
                        me.setVoteResult(me.defaultMsg);
                        $(".btn_list").addClass("hidden");
                    }
                    return;
                }
                $.cookie("vote_one",true);
                me.voteFun(id);
            }
            else{
                var ifVote_val = me.ifVote(data.voteinterval);
                if(ifVote_val==true){
                    me.voteFun(id);
                }
                else{
                    /*$(".vote_tips").html(data.voteinterval+"天后再投票!").fadeIn();
                     setTimeout(function(){$(".vote_tips").fadeOut();},2000);*/
                    me.vote_tips(data.voteinterval+"天后再投票!");
                    if(me.visibleResult==1){
                        me.setVoteResult(me.defaultMsg);
                        $(".btn_list").addClass("hidden");
                    }
                }
            }
        });
    },
    vote_tips:function(word){
        var me = this;
        $(".vote_tips").html(word).fadeIn();
        setTimeout(function(){$(".vote_tips").fadeOut();},2000);
    },
    ifVote:function(s){
        var me = this;
        var time = new Date().getTime();
        $.cookie("curTime",time);
        var prev = ($.cookie("prevTime")=="undefined")?time:$.cookie("prevTime");
        $.cookie("prevTime",prev);
        var ifVote = $.cookie("curTime")-$.cookie("prevTime");
        if(ifVote>s*24*3600){
            return true;
        }
        else{
            return false;
        }
    },
    setVoteResult:function(data){
        var me = this;
        var total = data.voters;
        var detail = data.detail;
        var len = detail.length;
        var result_html = '<div class="result_list show">';
        var allPer = 0;
        for(var i=0; i<len; i++){
            var per = Math.ceil((parseInt(detail[i].votes)/parseInt(total))*100);
            if(i==len-1){
                per = 100-allPer;
            }
            else{
                allPer += per;
            }
            result_html += '<div class="result_item"><div class="vote_num"><span class="num">'+per+'</span>%</div><div class="vote_bar"><div class="gradebar"><div class="grade" style="width:'+per+'%"></div></div><div class="answer">'+detail[i].polloption+'</div></div></div>';
        }
        result_html += '</div>';
        //$(".btn_list").after(result_html);
        $(".toupiao .toupiao_c").append(result_html);
        $(".total .num").html(data.voters);
    },
    voteFun:function(id){
        var me = this;
        $.ajax({
            type: "POST",
            url: votePostUrl,
            data: "c=Cosmom_ArticlePoll&a=Updatevotes&docid="+pollid+"&polloptionid="+id,
            dataType : "jsonp",
            jsonp: "jsonpCallback",
            jsonpCallback:"jsonpCallback",
            success: function (msg) {
                if(me.visibleResult==1){
                    me.setVoteResult(msg);
                    $(".btn_list").addClass("hidden");
                }
                else{
                    $(".vote_tips").fadeIn();
                    var num = $(".total .num").html();
                    $(".total .num").html(parseInt(num)+1+" ");
                    setTimeout(function(){$(".vote_tips").fadeOut();},2000);
                }
            }
        });
    }
}