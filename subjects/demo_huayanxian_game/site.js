var Btop = angular.module("app.base", ["ngRoute","ngResource", "ngSanitize"]);
Btop.factory("webapi", function ($resource) {
        var action = {
            'update': { method: 'PUT' }
        };
        return {
            "question": new $resource("http://528.miniso.com/JP/Add", null, action),
            "successPost": new $resource("http://528.miniso.com/JP/AddJP", null, action)         
        };
    })
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider,$timeout,$scope) {
    $routeProvider
    .when('/',{
        templateUrl: 'sex.html',
        controller: 'sexCtrl'
      })
      .when('/Q1',{ 
        templateUrl: 'Book/q1.html',
        controller: 'Q1Ctrl'
      })
      .when('/Q2', {
        templateUrl: 'Book/q2.html',
        controller: 'Q2Ctrl'
      })
      .when('/Q3', {
        templateUrl: 'Book/q3.html',
        controller: 'Q3Ctrl' 
      })
       .when('/Q4', {
        templateUrl: 'Book/q4.html',
        controller: 'Q4Ctrl'
      }).when('/Q5', {
        templateUrl: 'Book/q5.html',
        controller: 'Q5Ctrl'
      }).when('/3D', {
        templateUrl: 'Book/3d.html',
        controller: '3DCtrl'
      })

    $locationProvider.html5Mode(true); 
}])
.controller('QuestionCtrlAll',['$route', '$routeParams', '$location','$timeout','$scope',
  function($route, $routeParams, $location,$timeout,$scope) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    $scope.luckobj={Isluck:false,prizekey:""};    
    $scope.r_y=false;
    $scope.cj_btn={isShow:true};
    $scope.sex=getQueryString("s");
    $scope.bag={q1:0,q2:0,q3:0}
    //$location.url("/Q1");
    var btn_y = document.getElementById("btn_y");
    var btn_n = document.getElementById("btn_n");
}]).controller('3DCtrl', ['$routeParams', '$location','$timeout','$scope', function($routeParams, $location,$timeout,$scope,webapi) { 


 }])
.controller('Q1Ctrl', ['$routeParams', '$location','$timeout','$scope', function($routeParams, $location,$timeout,$scope,webapi) {
    this.name = "BookCtrl";
    this.params = $routeParams;
    $scope.q1_y=false;
    var soundBGM = document.getElementById("sound-start");
 var soundlauht= document.getElementById("sound-pk1_r_lauht");
  var soundzk = document.getElementById("sound-pk1_r_zk");
   $scope.q1_1=function(){
     $('.Q1_resultPanel').show()
      $('.roun1_yes').addClass("animated bounceInUp");
     $('.roun1_yes_gif').addClass("animated bounceInDown");
     $scope.q1_y=true;
     $scope.bag.q1=1;
       btn_y.play();
      soundBGM.pause();
      $timeout(function() {
           soundzk.play();
      }, 2000);
   }
   $scope.q1_2=function(){
      $('.Q1_resultPanel').show()
      $('.roun1_no').addClass("animated bounceInUp");
       $('.roun1_no_gif').addClass("animated bounceInDown");
         $scope.q1_y=false;  
         $scope.bag.q1=0;
          btn_n.play();
          soundBGM.pause();
          $timeout(function() {
               soundlauht.play();
         }, 2000);
       }
       $scope.next=function(){
          $location.url("/Q2");
       }
  }])
.controller('Q2Ctrl', ['$routeParams', '$location','$timeout','$scope', function($routeParams, $location,$timeout,$scope,webapi) {
    this.name = "BookCtrl";
    this.params = $routeParams;
    $scope.q1_y=false;
    var soundBGM = document.getElementById("sound-start");
    var soundtr= document.getElementById("sound-pk2_tr");
  var soundxg = document.getElementById("sound-pk2_xg");
   $scope.q2_1=function(){
     $('.Q1_resultPanel').show()
      $('.roun2_yes').addClass("animated bounceInUp");
        $('.roun2_yes_gif').addClass("animated bounceInDown");
     $scope.q1_y=true;
     $scope.bag.q2=1;
      btn_y.play();
      soundBGM.pause();
       $timeout(function() {
               soundxg.play();
         }, 2000);
   }
   $scope.q2_2=function(){
    $('.Q1_resultPanel').show()
      $('.roun2_no').addClass("animated bounceInUp");
        $('.roun2_no_gif').addClass("animated bounceInDown");
         $scope.q1_y=false;  
         $scope.bag.q2=0;
          btn_n.play();
          soundBGM.pause();
           $timeout(function() {
               soundtr.play();
           }, 2000);
       }
    $scope.next=function(){
          $location.url("/Q3");
      }
  }]).controller('Q3Ctrl', ['$routeParams', '$location','$timeout','$scope', 'webapi',function($routeParams, $location,$timeout,$scope,webapi) {
    this.name = "BookCtrl";
    this.params = $routeParams;
    var soundBGM = document.getElementById("sound-start");
    var soundLaugh = document.getElementById("sound-Laugh"); 
    var sounbdt= document.getElementById("sound-pk3_r_bdt");
    var soundbrzs = document.getElementById("sound-pk3_r_brzs");
    var Q1_resultPanel =  $('.Q1_resultPanel');
   $scope.q3_1=function(){
       $('.Q1_resultPanel').show()
      $('.roun3_no').addClass("animated bounceInUp");
       $('.roun3_no_gif').addClass("animated bounceInDown");
       soundBGM.pause();
        $timeout(function() {
         sounbdt.play();
       }, 2000);
         btn_y.play();
         $scope.q1_y=true;  
         $scope.bag.q3=1;
          $timeout(function(){
          $location.url("/Q4");
         },5000);
       }

   $scope.q3_2=function(){
      $('.Q1_resultPanel').show()
      $('.roun3_yes').addClass("animated bounceInUp");
       $('.roun3_yes_gif').addClass("animated bounceInDown");
      soundBGM.pause();
       $timeout(function() {
         soundbrzs.play();
       }, 2000);
        btn_n.play();
         $scope.q1_y=false;  
         $scope.bag.q3=0;
         $timeout(function(){
          $location.url("/Q4");
        },5000);
       }

  }]).controller('Q4Ctrl', ['$routeParams', '$location','$timeout','$scope','webapi', function($routeParams, $location,$timeout,$scope,webapi){
    this.name = "BookCtrl";
    this.params = $routeParams;
     $scope.result=[];
     for (var item in $scope.bag) {
          if($scope.bag[item]==1){
                $scope.result.push(1);
          }
     };
     if($scope.result.length>=2){
       $scope.r_y=true;
       if($scope.result.length==2){
            $scope.start_y=[1,2];
       }
       if($scope.result.length==3){
            $scope.start_y=[1,2,3];
       }
     }else{
        $scope.r_y=false;
     }
   

    $scope.luck=function(){
     var city=$('#city_name').val();
       $scope.luckbag={"islotte":1,"city":city}
        if(city==""){
          alert("请填写您所在的城市！如(广州)")
            return;
        }else{
           webapi.question.save({},$scope.luckbag,function(data){
          //  console.log("luck_data")
          // console.log(data)
          if(data.iswin=="1"){ 
            $scope.luckobj.Isluck=true;
            $scope.luckobj.prizekey=data.prizekey;
            $scope.cj_btn.isShow=false;
           }else{
             $scope.luckobj.Isluck=false;
             $scope.cj_btn.isShow=false;
           } 
         })  
          $location.url("/Q5"); 
        }
    }
                    
     $scope.again=function(){
          $location.url("/Q1");
     }
     $scope.location=function(){
         location.href="location.html";
     }
    
  }]).controller('Q5Ctrl', ['$routeParams', '$location','$timeout','$scope','webapi', function($routeParams, $location,$timeout,$scope,webapi) {
    this.name = "BookCtrl";
    this.params = $routeParams; 
        $scope.location=function(){
           $scope.customMessage={"tel":$scope.tel,"name":$scope.name,"prizekey":$scope.luckobj.prizekey};
            if($('#name').val().trim()==""||$('#mobile').val().trim()==""){
                alert("请填写姓名和手机！");
                 return;
            }else{
              if(checkTel()==true){
                  console.log("customMessage:");
                           console.log($scope.customMessage);   
                                 webapi.successPost.save({},$scope.customMessage,function(data){
                                   console.log("PostcustomMessage:");
                                   console.log(data);
                                    if(data.besetup=="0"){  
                                        alert("提交成功！赶快去名创优品兑换礼品吧！")
                                         location.href="location.html";
                                    }else if(data.besetup=="3"){
                                          alert("您已参与过抽奖，谢谢您的参与！");     
                                    }else{
                                        console.log(data);
                                    }
                        });    
              
            } else{
               alert("请填写正确的手机号码！");
                   $('#mobile').val("");
                   return;
            }         
        }  
       }
       $scope.location_no=function(){
            location.href="location.html";
        }
  }])
function checkTel(){
              //var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;  ||isPhone.test(value)
               var isMob=/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
              var value=document.getElementById("mobile").value.trim();
                if(isMob.test(value)){
                    return true;
                }else{
                    return false;
                }
}
function ImageMonitor(){
  var imgArray = [];
  return {
    createImage : function(src){
      return typeof imgArray[src] != 'undefined' ? imgArray[src] : (imgArray[src] = new Image(), imgArray[src].src = src, imgArray[src])
    },
    loadImage : function(arr, callback){
      for(var i=0,l=arr.length; i<l; i++){
        var img = arr[i];
        imgArray[img] = new Image();
        imgArray[img].onload = function(){
          if(i==l-1 && typeof callback=='function'){
            callback();
          }
        }
        imgArray[img].src = img
      }
    }
  }
}
function setCookie(cName, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    var cookieContext = cName + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
    document.cookie = cookieContext;
}

var cStart, cEnd;
function getCookie(cName) {
    if (document.cookie.length > 0) {
        cStart = document.cookie.indexOf(cName + "=");
        if (cStart != -1) {
            cStart = cStart + cName.length + 1;
            cEnd = document.cookie.indexOf(";", cStart);
            if (cEnd == -1) cEnd = document.cookie.length;
            return unescape(document.cookie.substring(cStart, cEnd));
        }
    }
    return "";
}
//获取URL参数
function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]); return null;
}

function setSessionCookie(name, value, cookiePath) {
    var isIE = !-[1, ];//判断是否是ie核心浏览器  
    if (isIE) {
        if (value) {
            var expire = "; expires=At the end of the Session";
            var path = "";
            if (cookiePath != null) {
                path = "; path=" + cookiePath;
            }
            document.cookie = name + "=" + escape(value) + expire + path;
        }
    } else {
        if (value) {
            var expire = "; expires=Session";
            var path = "";
            if (cookiePath != null) {
                path = "; path=" + cookiePath;
            }    
            document.cookie = name + "=" + escape(value) + expire + path;
        }
    }
}


