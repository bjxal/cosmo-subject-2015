if (isDesktop)
    document.write('<div id="gameBody">');


var body, blockSize, GameLayer = [], GameLayerBG, touchArea = [], GameTimeLayer;
var transform, transitionDuration;

function init (argument) {
    showWelcomeLayer();
    body = document.getElementById('gameBody') || document.body;
    body.style.height = window.innerHeight+'px';
    transform = typeof(body.style.webkitTransform) != 'undefined' ? 'webkitTransform' : (typeof(body.style.msTransform) != 'undefined'?'msTransform':'transform');
    transitionDuration = transform.replace(/ransform/g, 'ransitionDuration');

    GameTimeLayer = document.getElementById('GameTimeLayer');
    GameLayer.push( document.getElementById('GameLayer1') );
    GameLayer[0].children = GameLayer[0].querySelectorAll('div');
    GameLayer.push( document.getElementById( 'GameLayer2' ) );
    GameLayer[1].children = GameLayer[1].querySelectorAll('div');
    GameLayerBG = document.getElementById( 'GameLayerBG' );
    if( GameLayerBG.ontouchstart === null ){
        GameLayerBG.ontouchstart = gameTapEvent;
    }else{
        GameLayerBG.onmousedown = gameTapEvent;
        document.getElementById('landscape-text').innerHTML = '点我开始玩耍';
        document.getElementById('landscape').onclick = winOpen;
    }
    gameInit();
    window.addEventListener('resize', refreshSize, false);

    setTimeout(function(){
        var btn = document.getElementById('ready-btn');
        btn.className = 'btn';
        btn.innerHTML = ' 预备，抢!'
        btn.style.backgroundColor = '#ed207b';
        btn.onclick = function(){
            _smq.push(['custom','一次抢光光','游戏按钮','预备']);
            _gaq.push(['_trackEvent','一次抢光光','游戏按钮','预备']);
            closeWelcomeLayer();
        }

    }, 500);
}
function winOpen() {
    window.open(location.href+'?r='+Math.random(), 'nWin', 'height=500,width=320,toolbar=no,menubar=no,scrollbars=no');
    var opened=window.open('about:blank','_self'); opened.opener=null; opened.close();
}
var refreshSizeTime;
function refreshSize(){
    clearTimeout(refreshSizeTime);
    refreshSizeTime = setTimeout(_refreshSize, 200);
}
function _refreshSize(){
    countBlockSize();
    for( var i=0; i<GameLayer.length; i++ ){
        var box = GameLayer[i];
        for( var j=0; j<box.children.length; j++){
            var r = box.children[j],
                rstyle = r.style;
            rstyle.left = (j%4)*blockSize+'px';
            rstyle.bottom = Math.floor(j/4)*blockSize+'px';
            rstyle.width = blockSize+'px';
            rstyle.height = blockSize+'px';
        }
    }
    var f, a;
    if( GameLayer[0].y > GameLayer[1].y ){
        f = GameLayer[0];
        a = GameLayer[1];
    }else{
        f = GameLayer[1];
        a = GameLayer[0];
    }
    var y = ((_gameBBListIndex)%10)*blockSize;
    f.y = y;
    f.style[transform] = 'translate3D(0,'+f.y+'px,0)';

    a.y = -blockSize*Math.floor(f.children.length/4)+y;
    a.style[transform] = 'translate3D(0,'+a.y+'px,0)';

}
function countBlockSize(){
    blockSize = body.offsetWidth/4;
    body.style.height = window.innerHeight+'px';
    GameLayerBG.style.height = window.innerHeight+'px';
    touchArea[0] = window.innerHeight-blockSize*0;
    touchArea[1] = window.innerHeight-blockSize*3;
}
var _gameBBList = [], _gameBBListIndex = 0, _gameOver = false, _gameStart = false, _gameTime, _gameTimeNum, _gameScore;
function gameInit(){
    createjs.Sound.registerSound( {src:ImgDir("/err.mp3"), id:"err"} ).crossOrigin = '';
    createjs.Sound.registerSound( {src:ImgDir("/end.mp3"), id:"end"} ).crossOrigin = '';
    createjs.Sound.registerSound( {src:ImgDir("/tap.mp3"), id:"tap"} ).crossOrigin = '';
    gameRestart();
}
function gameRestart(){
    //console.log('gameRestart');
    _gameBBList = [];
    _gameBBListIndex = 0;
    _gameScore = 0;
    _gameOver = false;
    _gameStart = false;
    _gameTimeNum = 2000;
    GameTimeLayer.innerHTML = creatTimeText(_gameTimeNum);
    countBlockSize();
    refreshGameLayer(GameLayer[0]);
    refreshGameLayer(GameLayer[1], 1);
}
function gameStart(){
    _gameStart = true;
    _gameTime = setInterval(gameTime, 10);
}
function gameOver(){
    _gameOver = true;
    clearInterval(_gameTime);
    setTimeout(function(){
        GameLayerBG.className = '';
        showGameScoreLayer();
    }, 1500);
}
function gameTime(){
    _gameTimeNum --;
    if( _gameTimeNum <= 0){
        GameTimeLayer.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;时间到！';
        gameOver();
        GameLayerBG.className += ' flash';
        createjs.Sound.play("end");
    }else{
        GameTimeLayer.innerHTML = creatTimeText(_gameTimeNum);
    }
}
function creatTimeText( n ){
    var text = (100000+n+'').substr(-4,4);
    text = '&nbsp;&nbsp;'+text.substr(0,2)+"'"+text.substr(2)+"''"
    return text;
}
var _ttreg = / t{1,2}(\d+)/, _clearttClsReg = / t{1,2}\d+| bad/;
function refreshGameLayer( box, loop, offset ){
    var i = Math.floor(Math.random()*1000)%4+(loop?0:4);
    for( var j=0; j<box.children.length; j++){
        var r = box.children[j],
            rstyle = r.style;
        rstyle.left = (j%4)*blockSize+'px';
        rstyle.bottom = Math.floor(j/4)*blockSize+'px';
        rstyle.width = blockSize+'px';
        rstyle.height = blockSize+'px';
        r.className = r.className.replace(_clearttClsReg, '');
        if( i == j ){
            _gameBBList.push( {cell:i%4, id:r.id} );
            r.className += ' t'+(Math.floor(Math.random()*1000)%6+1);
            r.notEmpty = true;
            i = ( Math.floor(j/4)+1)*4+Math.floor(Math.random()*1000 )%4;
        }else{
            r.notEmpty = false;
        }
    }
    if( loop ){
        box.style.webkitTransitionDuration = '0ms';
        box.style.display          = 'none';
        box.y                      = -blockSize*(Math.floor(box.children.length/4)+(offset||0))*loop;
        setTimeout(function(){
            box.style[transform] = 'translate3D(0,'+box.y+'px,0)';
            setTimeout( function(){
                box.style.display     = 'block';
            }, 100 );
        }, 200 );
    } else {
        box.y = 0;
        box.style[transform] = 'translate3D(0,'+box.y+'px,0)';
    }
    box.style[transitionDuration] = '150ms';
}
function gameLayerMoveNextRow(){
    for(var i=0; i<GameLayer.length; i++){
        var g = GameLayer[i];
        g.y += blockSize;
        if( g.y > blockSize*(Math.floor(g.children.length/4)) ){
            refreshGameLayer(g, 1, -1);
        }else{
            g.style[transform] = 'translate3D(0,'+g.y+'px,0)';
        }
    }
}
function gameTapEvent(e){
    if (_gameOver) {
        return false;
    }
    var tar = e.target;
    var y = e.clientY || e.targetTouches[0].clientY,
        x = (e.clientX || e.targetTouches[0].clientX)-body.offsetLeft,
        p = _gameBBList[_gameBBListIndex];
    if ( y > touchArea[0] || y < touchArea[1] ) {
        return false;
    }
    if( (p.id==tar.id&&tar.notEmpty) || (p.cell==0&&x<blockSize) || (p.cell==1&&x>blockSize&&x<2*blockSize) || (p.cell==2&&x>2*blockSize&&x<3*blockSize) || (p.cell==3&&x>3*blockSize) ){
        if( !_gameStart ){
            gameStart();
        }
        createjs.Sound.play("tap");
        tar = document.getElementById(p.id);
        tar.className = tar.className.replace(_ttreg, ' tt$1');
        _gameBBListIndex++;
        _gameScore ++;
        gameLayerMoveNextRow();
    }else if( _gameStart && !tar.notEmpty ){
        createjs.Sound.play("err");
        gameOver();
        tar.className += ' bad';
    }
    return false;
}
function createGameLayer(){
    var html = '<div id="GameLayerBG">';
    for(var i=1; i<=2; i++){
        var id = 'GameLayer'+i;
        html += '<div id="'+id+'" class="GameLayer">';
        for(var j=0; j<10; j++ ){
            for(var k=0; k<4; k++){
                html += '<div id="'+id+'-'+(k+j*4)+'" num="'+(k+j*4)+'" class="block'+(k?' bl':'')+'"></div>';
            }
        }
        html += '</div>';
    }
    html += '</div>';

    html += '<div id="GameTimeLayer"></div>';

    return html;
}
function closeWelcomeLayer(){
    var l = document.getElementById('welcome');
    l.style.display = 'none';
}
function showWelcomeLayer(){
    var l = document.getElementById('welcome');
    l.style.display = 'block';
}
function showGameScoreLayer(){
    var l = document.getElementById('GameScoreLayer');
    var c = document.getElementById(_gameBBList[_gameBBListIndex-1].id).className.match(_ttreg)[1];
    l.className = l.className.replace(/bgc\d/, 'bgc'+c);
    document.getElementById('GameScoreLayer-text').innerHTML = shareText(_gameScore);
    document.getElementById('GameScoreLayer-score').innerHTML = '得分&nbsp;&nbsp;'+_gameScore;
    var bast = cookie('bast-score');
    if( !bast || _gameScore > bast ){
        bast = _gameScore;
        cookie('bast-score', bast, 100);
    }
    document.getElementById('GameScoreLayer-bast').innerHTML = '最佳&nbsp;&nbsp;'+bast;
    l.style.display = 'block';

    //

    // custom formatting example
    $('#count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

// start all the timers
    $('.timer').each(count);
}
function hideGameScoreLayer(){
    var l = document.getElementById('GameScoreLayer');
    l.style.display = 'none';
}
function replayBtn(){
    gameRestart();
    hideGameScoreLayer();
}
function backBtn(){
    gameRestart();
    hideGameScoreLayer();
    showWelcomeLayer();
}
var mebtnopenurl = 'http://m.cosmopolitan.com.cn/';
function shareText( score ){
    if( score < 60 )
        return '<span class="score_txt">呵呵！才抢了<em class="timer count-title" id="count-number" data-to="'+score+'" data-speed="1500"></em>件</span><br/>火力不行，还不快扫码来HICOSMO<br>取取经';
    if( score >= 60 && score < 130 )
        return '<span class="score_txt">哎呦，抢了<em class="timer count-title" id="count-number" data-to="'+score+'" data-speed="1500"></em>件</span><br/>挺能抢啊，再努力一把就能获奖';
    if( score >= 130 )
        return '<span class="score_txt">棒棒哒，抢了<em class="timer count-title" id="count-number" data-to="'+score+'" data-speed="1500"></em>件</span><br/>如果没有玩尽兴，请速度点击下方<br>一起hi';
}
function share( type ){
    var content = encodeURIComponent(' #HiCOSMO上线狂送礼，一次抢光光# 我抢了'+_gameScore+'件'),
        title  = '',
        pic   = encodeURIComponent('http://new-icon.cosmochina.com.cn/h5/hicosmo-game/img/weixin.jpg'),
        url   = '';//encodeURIComponent('http://m.durex.com.cn/qr/1N'),
    back  = encodeURIComponent('http://m.cosmopolitan.com.cn/cosmowww/2015/0710/13163.shtml');
    var tourl = '';
    switch( type ){
        case 'weixin':
            showWeixinShade('img-subject/qr.png', 'img-subject/ww_03.png', 'img-subject/ww_07.png', 'img-subject/ww_08.png');
            return;
        case 'sina':
            tourl = 'http://service.weibo.com/share/mobile.php?title=$content&url=$url&pic=$pic&backurl=$back';
            break;
        case 'douban':
            tourl = 'http://www.douban.com/recommend/?url=$url&title=$content&image=$pic&backurl=$back';
            break;
        case 'kaixin':
            tourl = 'http://www.kaixin001.com/repaste/share.php?rurl=$url&rtitle=$content&rpic=$pic&rbackurl=$back';
            break;
        case 'renren':
            tourl = 'http://widget.renren.com/dialog/share?resourceUrl=$url&srcUrl=$url&title=$content&pic=$pic';
            break;
        case 'qqwb':
            tourl = 'http://v.t.qq.com/share/share.php?url=$url&title=$content&pic=$pic&backurl=$back';
            break;
        case 'zone':
            tourl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=$title&summary=$content&url=$url&pic=$pic';
            break;
    }
    tourl = tourl.replace('$title',title).replace('$content',content).replace('$pic',pic).replace('$url',url).replace('$back',back);
    window.open(tourl,'_blank');
}
function toStr(obj) {
    if ( typeof obj == 'object' ) {
        return JSON.stringify(obj);
    } else {
        return obj;
    }
    return '';
}
function cookie(name, value, time) {
    if (name) {
        if (value) {
            if (time) {
                var date = new Date();
                date.setTime(date.getTime() + 864e5 * time), time = date.toGMTString();
            }
            return document.cookie = name + "=" + escape(toStr(value)) + (time ? "; expires=" + time + (arguments[3] ? "; domain=" + arguments[3] + (arguments[4] ? "; path=" + arguments[4] + (arguments[5] ? "; secure" : "") : "") : "") : ""), !0;
        }
        return value = document.cookie.match("(?:^|;)\\s*" + name.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") + "=([^;]*)"), value = value && "string" == typeof value[1] ? unescape(value[1]) : !1, (/^(\{|\[).+\}|\]$/.test(value) || /^[0-9]+$/g.test(value)) && eval("value=" + value), value;
    }
    var data = {};
    value = document.cookie.replace(/\s/g, "").split(";");
    for (var i = 0; value.length > i; i++) name = value[i].split("="), name[1] && (data[name[0]] = unescape(name[1]));
    return data;
}
document.write(createGameLayer());

function showWeixinShade(qr, step1, step2, step3){
	var s = document.getElementById('weixin-shade');
	if( s ){
		s.style.display = 'block';
		return;
	}
	s = document.createElement('div');
	s.id = 'weixin-shade';
	s.onclick = function(){this.style.display='none';}
	s.style.position = (isDesktop?'absolute':'fixed');
	var html = '<div id="weixin-shade-scroll">';
	var i = 1;
	html += '<div id="weixin-shade-step3" class="step"><img src="'+ImgDir("/wx_share.gif")+'"/> </div>';
	html += '</div>';
	s.innerHTML += html;
	body.appendChild(s);
}