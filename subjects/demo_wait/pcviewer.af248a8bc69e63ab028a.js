webpackJsonp([5],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=document.getElementById("previewiframe");if("object"==typeof e){var n=JSON.stringify(e);t.contentWindow.postMessage(n,"*")}}function o(){r({type:"prevPage"})}function a(){r({type:"nextPage"})}function s(){var e=window.innerHeight;h=e-40;var t=h/1008*640+50;u["default"](".pcviewer-previewarea").css({height:h,width:t}),u["default"](".pcviewer-previewarea-iframe").css({height:h-20,width:640*(h-20)/1008});var n=t/1.6+185;u["default"](".pcviewer").css({"margin-left":-n})}function l(){document.getElementById("previewiframe").contentWindow.location.reload(!0),s()}var c=n(1),u=i(c),d=n(46),p=i(d);n(42);var h;window.onresize=l,s();var f="http://"+window.location.host+"/k/"+window.projectVersion.id,g=p["default"].toDataURL(f,4);u["default"](".pcviewer-infoarea-qrcodearea-img").eq(0).attr("src",g),u["default"](".pcviewer-previewarea-downBtn").on("click",function(){a()}),u["default"](".pcviewer-previewarea-upBtn").on("click",function(){o()})},42:function(e,t){},46:function(e,t,n){var i=n(47);e.exports={typeNumber:4,errorCorrectLevel:"L",toBase64:function(e,t){var n=i(this.typeNumber,this.errorCorrectLevel);n.addData(e),n.make();var r=n.createImgBase64(t);return r},toDataURL:function(e,t){var n=this.toBase64(e,t),i="data:image/gif;base64,"+n;return i}}},47:function(e,t){var n=function(){function e(t,n){if("undefined"==typeof t.length)throw new Error(t.length+"/"+n);var i=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var i=new Array(t.length-e+n),r=0;r<t.length-e;r+=1)i[r]=t[r+e];return i}(),r={};return r.getAt=function(e){return i[e]},r.getLength=function(){return i.length},r.multiply=function(t){for(var n=new Array(r.getLength()+t.getLength()-1),i=0;i<r.getLength();i+=1)for(var o=0;o<t.getLength();o+=1)n[i+o]^=a.gexp(a.glog(r.getAt(i))+a.glog(t.getAt(o)));return e(n,0)},r.mod=function(t){if(r.getLength()-t.getLength()<0)return r;for(var n=a.glog(r.getAt(0))-a.glog(t.getAt(0)),i=new Array(r.getLength()),o=0;o<r.getLength();o+=1)i[o]=r.getAt(o);for(var o=0;o<t.getLength();o+=1)i[o]^=a.gexp(a.glog(t.getAt(o))+n);return e(i,0).mod(t)},r}var t=function(t,n){var r=236,a=17,u=t,d=i[n],p=null,h=0,m=null,v=new Array,y={},w=function(e,t){h=4*u+17,p=function(e){for(var t=new Array(e),n=0;e>n;n+=1){t[n]=new Array(e);for(var i=0;e>i;i+=1)t[n][i]=null}return t}(h),b(0,0),b(h-7,0),b(0,h-7),T(),k(),C(e,t),u>=7&&S(e),null==m&&(m=E(u,d,v)),P(m,t)},b=function(e,t){for(var n=-1;7>=n;n+=1)if(!(-1>=e+n||e+n>=h))for(var i=-1;7>=i;i+=1)-1>=t+i||t+i>=h||(n>=0&&6>=n&&(0==i||6==i)||i>=0&&6>=i&&(0==n||6==n)||n>=2&&4>=n&&i>=2&&4>=i?p[e+n][t+i]=!0:p[e+n][t+i]=!1)},x=function(){for(var e=0,t=0,n=0;8>n;n+=1){w(!0,n);var i=o.getLostPoint(y);(0==n||e>i)&&(e=i,t=n)}return t},k=function(){for(var e=8;h-8>e;e+=1)null==p[e][6]&&(p[e][6]=e%2==0);for(var t=8;h-8>t;t+=1)null==p[6][t]&&(p[6][t]=t%2==0)},T=function(){for(var e=o.getPatternPosition(u),t=0;t<e.length;t+=1)for(var n=0;n<e.length;n+=1){var i=e[t],r=e[n];if(null==p[i][r])for(var a=-2;2>=a;a+=1)for(var s=-2;2>=s;s+=1)-2==a||2==a||-2==s||2==s||0==a&&0==s?p[i+a][r+s]=!0:p[i+a][r+s]=!1}},S=function(e){for(var t=o.getBCHTypeNumber(u),n=0;18>n;n+=1){var i=!e&&1==(t>>n&1);p[Math.floor(n/3)][n%3+h-8-3]=i}for(var n=0;18>n;n+=1){var i=!e&&1==(t>>n&1);p[n%3+h-8-3][Math.floor(n/3)]=i}},C=function(e,t){for(var n=d<<3|t,i=o.getBCHTypeInfo(n),r=0;15>r;r+=1){var a=!e&&1==(i>>r&1);6>r?p[r][8]=a:8>r?p[r+1][8]=a:p[h-15+r][8]=a}for(var r=0;15>r;r+=1){var a=!e&&1==(i>>r&1);8>r?p[8][h-r-1]=a:9>r?p[8][15-r-1+1]=a:p[8][15-r-1]=a}p[h-8][8]=!e},P=function(e,t){for(var n=-1,i=h-1,r=7,a=0,s=o.getMaskFunction(t),l=h-1;l>0;l-=2)for(6==l&&(l-=1);;){for(var c=0;2>c;c+=1)if(null==p[i][l-c]){var u=!1;a<e.length&&(u=1==(e[a]>>>r&1));var d=s(i,l-c);d&&(u=!u),p[i][l-c]=u,r-=1,-1==r&&(a+=1,r=7)}if(i+=n,0>i||i>=h){i-=n,n=-n;break}}},A=function(t,n){for(var i=0,r=0,a=0,s=new Array(n.length),l=new Array(n.length),c=0;c<n.length;c+=1){var u=n[c].dataCount,d=n[c].totalCount-u;r=Math.max(r,u),a=Math.max(a,d),s[c]=new Array(u);for(var p=0;p<s[c].length;p+=1)s[c][p]=255&t.getBuffer()[p+i];i+=u;var h=o.getErrorCorrectPolynomial(d),f=e(s[c],h.getLength()-1),g=f.mod(h);l[c]=new Array(h.getLength()-1);for(var p=0;p<l[c].length;p+=1){var m=p+g.getLength()-l[c].length;l[c][p]=m>=0?g.getAt(m):0}}for(var v=0,p=0;p<n.length;p+=1)v+=n[p].totalCount;for(var y=new Array(v),w=0,p=0;r>p;p+=1)for(var c=0;c<n.length;c+=1)p<s[c].length&&(y[w]=s[c][p],w+=1);for(var p=0;a>p;p+=1)for(var c=0;c<n.length;c+=1)p<l[c].length&&(y[w]=l[c][p],w+=1);return y},E=function(e,t,n){for(var i=s.getRSBlocks(e,t),c=l(),u=0;u<n.length;u+=1){var d=n[u];c.put(d.getMode(),4),c.put(d.getLength(),o.getLengthInBits(d.getMode(),e)),d.write(c)}for(var p=0,u=0;u<i.length;u+=1)p+=i[u].dataCount;if(c.getLengthInBits()>8*p)throw new Error("code length overflow. ("+c.getLengthInBits()+">"+8*p+")");for(c.getLengthInBits()+4<=8*p&&c.put(0,4);c.getLengthInBits()%8!=0;)c.putBit(!1);for(;;){if(c.getLengthInBits()>=8*p)break;if(c.put(r,8),c.getLengthInBits()>=8*p)break;c.put(a,8)}return A(c,i)};return y.addData=function(e){var t=c(e);v.push(t),m=null},y.isDark=function(e,t){if(0>e||e>=h||0>t||t>=h)throw new Error(e+","+t);return p[e][t]},y.getModuleCount=function(){return h},y.make=function(){w(!1,x())},y.createTableTag=function(e,t){e=e||2,t="undefined"==typeof t?4*e:t;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+t+"px;",n+='">',n+="<tbody>";for(var i=0;i<y.getModuleCount();i+=1){n+="<tr>";for(var r=0;r<y.getModuleCount();r+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+e+"px;",n+=" height: "+e+"px;",n+=" background-color: ",n+=y.isDark(i,r)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>"},y.createImgTag=function(e,t){e=e||2,t="undefined"==typeof t?4*e:t;var n=y.getModuleCount()*e+2*t,i=t,r=n-t;return f(n,n,function(t,n){if(t>=i&&r>t&&n>=i&&r>n){var o=Math.floor((t-i)/e),a=Math.floor((n-i)/e);return y.isDark(a,o)?0:1}return 1})},y.createImgBase64=function(e,t){e=e||2,t="undefined"==typeof t?4*e:t;var n=y.getModuleCount()*e+2*t,i=t,r=n-t;return g(n,n,function(t,n){if(t>=i&&r>t&&n>=i&&r>n){var o=Math.floor((t-i)/e),a=Math.floor((n-i)/e);return y.isDark(a,o)?0:1}return 1})},y};t.stringToBytes=function(e){for(var t=new Array,n=0;n<e.length;n+=1){var i=e.charCodeAt(n);t.push(255&i)}return t},t.createStringToBytes=function(e,t){var n=function(){for(var n=p(e),i=function(){var e=n.read();if(-1==e)throw new Error;return e},r=0,o={};;){var a=n.read();if(-1==a)break;var s=i(),l=i(),c=i(),u=String.fromCharCode(a<<8|s),d=l<<8|c;o[u]=d,r+=1}if(r!=t)throw new Error(r+" != "+t);return o}(),i="?".charCodeAt(0);return function(e){for(var t=new Array,r=0;r<e.length;r+=1){var o=e.charCodeAt(r);if(128>o)t.push(o);else{var a=n[e.charAt(r)];"number"==typeof a?(255&a)==a?t.push(a):(t.push(a>>>8),t.push(255&a)):t.push(i)}}return t}};var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],i=1335,o=7973,s=21522,l={},c=function(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t};return l.getBCHTypeInfo=function(e){for(var t=e<<10;c(t)-c(i)>=0;)t^=i<<c(t)-c(i);return(e<<10|t)^s},l.getBCHTypeNumber=function(e){for(var t=e<<12;c(t)-c(o)>=0;)t^=o<<c(t)-c(o);return e<<12|t},l.getPatternPosition=function(e){return t[e-1]},l.getMaskFunction=function(e){switch(e){case r.PATTERN000:return function(e,t){return(e+t)%2==0};case r.PATTERN001:return function(e,t){return e%2==0};case r.PATTERN010:return function(e,t){return t%3==0};case r.PATTERN011:return function(e,t){return(e+t)%3==0};case r.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case r.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case r.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case r.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw new Error("bad maskPattern:"+e)}},l.getErrorCorrectPolynomial=function(t){for(var n=e([1],0),i=0;t>i;i+=1)n=n.multiply(e([1,a.gexp(i)],0));return n},l.getLengthInBits=function(e,t){if(t>=1&&10>t)switch(e){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:return 8;case n.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(27>t)switch(e){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(41>t))throw new Error("type:"+t);switch(e){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},l.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,i=0;t>i;i+=1)for(var r=0;t>r;r+=1){for(var o=0,a=e.isDark(i,r),s=-1;1>=s;s+=1)if(!(0>i+s||i+s>=t))for(var l=-1;1>=l;l+=1)0>r+l||r+l>=t||(0!=s||0!=l)&&a==e.isDark(i+s,r+l)&&(o+=1);o>5&&(n+=3+o-5)}for(var i=0;t-1>i;i+=1)for(var r=0;t-1>r;r+=1){var c=0;e.isDark(i,r)&&(c+=1),e.isDark(i+1,r)&&(c+=1),e.isDark(i,r+1)&&(c+=1),e.isDark(i+1,r+1)&&(c+=1),(0==c||4==c)&&(n+=3)}for(var i=0;t>i;i+=1)for(var r=0;t-6>r;r+=1)e.isDark(i,r)&&!e.isDark(i,r+1)&&e.isDark(i,r+2)&&e.isDark(i,r+3)&&e.isDark(i,r+4)&&!e.isDark(i,r+5)&&e.isDark(i,r+6)&&(n+=40);for(var r=0;t>r;r+=1)for(var i=0;t-6>i;i+=1)e.isDark(i,r)&&!e.isDark(i+1,r)&&e.isDark(i+2,r)&&e.isDark(i+3,r)&&e.isDark(i+4,r)&&!e.isDark(i+5,r)&&e.isDark(i+6,r)&&(n+=40);for(var u=0,r=0;t>r;r+=1)for(var i=0;t>i;i+=1)e.isDark(i,r)&&(u+=1);var d=Math.abs(100*u/t/t-50)/5;return n+=10*d},l}(),a=function(){for(var e=new Array(256),t=new Array(256),n=0;8>n;n+=1)e[n]=1<<n;for(var n=8;256>n;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(var n=0;255>n;n+=1)t[e[n]]=n;var i={};return i.glog=function(e){if(1>e)throw new Error("glog("+e+")");return t[e]},i.gexp=function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return e[t]},i}(),s=function(){var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16]],t=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},n={},r=function(t,n){switch(n){case i.L:return e[4*(t-1)+0];case i.M:return e[4*(t-1)+1];case i.Q:return e[4*(t-1)+2];case i.H:return e[4*(t-1)+3];default:return void 0}};return n.getRSBlocks=function(e,n){var i=r(e,n);if("undefined"==typeof i)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+n);for(var o=i.length/3,a=new Array,s=0;o>s;s+=1)for(var l=i[3*s+0],c=i[3*s+1],u=i[3*s+2],d=0;l>d;d+=1)a.push(t(c,u));return a},n}(),l=function(){var e=new Array,t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(t){var n=Math.floor(t/8);return 1==(e[n]>>>7-t%8&1)},n.put=function(e,t){for(var i=0;t>i;i+=1)n.putBit(1==(e>>>t-i-1&1))},n.getLengthInBits=function(){return t},n.putBit=function(n){var i=Math.floor(t/8);e.length<=i&&e.push(0),n&&(e[i]|=128>>>t%8),t+=1},n},c=function(e){var i=n.MODE_8BIT_BYTE,r=t.stringToBytes(e),o={};return o.getMode=function(){return i},o.getLength=function(e){return r.length},o.write=function(e){for(var t=0;t<r.length;t+=1)e.put(r[t],8)},o},u=function(){var e=new Array,t={};return t.writeByte=function(t){e.push(255&t)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(var r=0;i>r;r+=1)t.writeByte(e[r+n])},t.writeString=function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return e},t.toString=function(){var t="";t+="[";for(var n=0;n<e.length;n+=1)n>0&&(t+=","),t+=e[n];return t+="]"},t},d=function(){var e=0,t=0,n=0,i="",r={},o=function(e){i+=String.fromCharCode(a(63&e))},a=function(e){if(0>e);else{if(26>e)return 65+e;if(52>e)return 97+(e-26);if(62>e)return 48+(e-52);if(62==e)return 43;if(63==e)return 47}throw new Error("n:"+e)};return r.writeByte=function(i){for(e=e<<8|255&i,t+=8,n+=1;t>=6;)o(e>>>t-6),t-=6},r.flush=function(){if(t>0&&(o(e<<6-t),e=0,t=0),n%3!=0)for(var r=3-n%3,a=0;r>a;a+=1)i+="="},r.toString=function(){return i},r},p=function(e){var t=e,n=0,i=0,r=0,o={};o.read=function(){for(;8>r;){if(n>=t.length){if(0==r)return-1;throw new Error("unexpected end of file./"+r)}var e=t.charAt(n);if(n+=1,"="==e)return r=0,-1;e.match(/^\s$/)||(i=i<<6|a(e.charCodeAt(0)),r+=6)}var o=i>>>r-8&255;return r-=8,o};var a=function(e){if(e>=65&&90>=e)return e-65;if(e>=97&&122>=e)return e-97+26;if(e>=48&&57>=e)return e-48+52;if(43==e)return 62;if(47==e)return 63;throw new Error("c:"+e)};return o},h=function(e,t){var n=e,i=t,r=new Array(e*t),o={};o.setPixel=function(e,t,i){r[t*n+e]=i},o.write=function(e){e.writeString("GIF87a"),e.writeShort(n),e.writeShort(i),e.writeByte(128),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(0),e.writeByte(255),e.writeByte(255),e.writeByte(255),e.writeString(","),e.writeShort(0),e.writeShort(0),e.writeShort(n),e.writeShort(i),e.writeByte(0);var t=2,r=s(t);e.writeByte(t);for(var o=0;r.length-o>255;)e.writeByte(255),e.writeBytes(r,o,255),o+=255;e.writeByte(r.length-o),e.writeBytes(r,o,r.length-o),e.writeByte(0),e.writeString(";")};var a=function(e){var t=e,n=0,i=0,r={};return r.write=function(e,r){if(e>>>r!=0)throw new Error("length over");for(;n+r>=8;)t.writeByte(255&(e<<n|i)),r-=8-n,e>>>=8-n,i=0,n=0;i=e<<n|i,n+=r},r.flush=function(){n>0&&t.writeByte(i)},r},s=function(e){for(var t=1<<e,n=(1<<e)+1,i=e+1,o=l(),s=0;t>s;s+=1)o.add(String.fromCharCode(s));o.add(String.fromCharCode(t)),o.add(String.fromCharCode(n));var c=u(),d=a(c);d.write(t,i);var p=0,h=String.fromCharCode(r[p]);for(p+=1;p<r.length;){var f=String.fromCharCode(r[p]);p+=1,o.contains(h+f)?h+=f:(d.write(o.indexOf(h),i),o.size()<4095&&(o.size()==1<<i&&(i+=1),o.add(h+f)),h=f)}return d.write(o.indexOf(h),i),d.write(n,i),d.flush(),c.toByteArray()},l=function(){var e={},t=0,n={};return n.add=function(i){if(n.contains(i))throw new Error("dup key:"+i);e[i]=t,t+=1},n.size=function(){return t},n.indexOf=function(t){return e[t]},n.contains=function(t){return"undefined"!=typeof e[t]},n};return o},f=function(e,t,n,i){for(var r=h(e,t),o=0;t>o;o+=1)for(var a=0;e>a;a+=1)r.setPixel(a,o,n(a,o));var s=u();r.write(s);for(var l=d(),c=s.toByteArray(),p=0;p<c.length;p+=1)l.writeByte(c[p]);l.flush();var f="";return f+="<img",f+=' src="',f+="data:image/gif;base64,",f+=l,f+='"',f+=' width="',f+=e,f+='"',f+=' height="',f+=t,f+='"',i&&(f+=' alt="',f+=i,f+='"'),f+="/>"},g=function(e,t,n){for(var i=h(e,t),r=0;t>r;r+=1)for(var o=0;e>o;o+=1)i.setPixel(o,r,n(o,r));var a=u();i.write(a);for(var s=d(),l=a.toByteArray(),c=0;c<l.length;c+=1)s.writeByte(l[c]);return s.flush(),s.toString()};return t}();e.exports=n}});