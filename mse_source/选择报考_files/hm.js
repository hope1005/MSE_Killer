(function(){var h={},mt={},c={id:"1d2d0f11bb97c185eb244d3ead0686a9",dm:["order.etest.net.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'8302E7DD7E168EAB',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,t=!0,v=null,x=!1;mt.cookie={};mt.cookie.set=function(a,b,e){var d;e.O&&(d=new Date,d.setTime(d.getTime()+e.O));document.cookie=a+"="+b+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.sc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:v};
mt.cookie.Pb=function(a,b){try{var e="Hm_ck_"+ +new Date;mt.cookie.set(e,"is-cookie-enabled",{domain:a,path:b,O:r});var d="is-cookie-enabled"===mt.cookie.get(e)?"1":"0";mt.cookie.set(e,"",{domain:a,path:b,O:-1});return d}catch(f){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.ua=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.K=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.J=function(a,b){var e=x;if(a==v||!mt.lang.d(a,"Array")||b===r)return e;if(Array.prototype.indexOf)e=-1!==a.indexOf(b);else for(var d=0;d<a.length;d++)if(a[d]===b){e=t;break}return e};mt.url={};mt.url.m=function(a,b){var e=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return e?e[3]:v};
mt.url.oc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:v};mt.url.vb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):v};mt.url.Q=function(a){return(a=mt.url.vb(a))?a.replace(/:\d+$/,""):a};mt.url.qa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.Ja=function(e){return document.getElementById(e)};mt.f.Ka=function(e){if(!e)return v;try{e=String(e);if(0===e.indexOf("!HMCQ!"))return e;if(0===e.indexOf("!HMCC!"))return document.querySelector(e.substring(6,e.length));for(var d=e.split(">"),a=document.body,b=d.length-1;0<=b;b--)if(-1<d[b].indexOf("#")){var k=d[b].split("#")[1];(a=document.getElementById(k))||(a=document.getElementById(decodeURIComponent(k)));d=d.splice(b+1,d.length-(b+1));break}for(e=
0;a&&e<d.length;){var m=String(d[e]).toLowerCase();if(!("html"===m||"body"===m)){var b=0,q=d[e].match(/\[(\d+)\]/i),k=[];if(q)b=q[1]-1,m=m.split("[")[0];else if(1!==a.childNodes.length){for(var w=0,s=0,p=a.childNodes.length;s<p;s++){var u=a.childNodes[s];1===u.nodeType&&u.nodeName.toLowerCase()===m&&w++;if(1<w)return v}if(1!==w)return v}for(w=0;w<a.childNodes.length;w++)1===a.childNodes[w].nodeType&&a.childNodes[w].nodeName.toLowerCase()===m&&k.push(a.childNodes[w]);if(!k[b])return v;a=k[b]}e++}return a}catch(g){return v}};
mt.f.qa=function(a,d){var b=[],l=[];if(!a)return l;for(;a.parentNode!=v;){for(var k=0,m=0,q=a.parentNode.childNodes.length,w=0;w<q;w++){var s=a.parentNode.childNodes[w];if(s.nodeName===a.nodeName&&(k++,s===a&&(m=k),0<m&&1<k))break}if((q=""!==a.id)&&d){b.unshift("#"+encodeURIComponent(a.id));break}else q&&(q="#"+encodeURIComponent(a.id),q=0<b.length?q+">"+b.join(">"):q,l.push(q)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<k?"["+m+"]":""));a=a.parentNode}l.push(b.join(">"));return l};
mt.f.zb=function(a){return(a=mt.f.qa(a,t))&&a.length?String(a[0]):""};mt.f.yb=function(a){return mt.f.qa(a,x)};mt.f.mc=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return v};mt.f.rb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.nc=function(a){var d={top:0,left:0};if(!a)return d;var b=mt.f.rb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect());return{top:d.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:d.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,d){var b=a.getAttribute&&a.getAttribute(d)||v;if(!b&&a.attributes&&a.attributes.length)for(var l=a.attributes,k=l.length,m=0;m<k;m++)l[m].nodeName===d&&(b=l[m].nodeValue);return b};mt.f.Y=function(a){var d="document";a.tagName!==r&&(d=a.tagName);return d.toLowerCase()};mt.f.Cb=function(b){var d="";b.textContent?d=a.trim(b.textContent):b.innerText&&(d=a.trim(b.innerText));d&&(d=d.replace(/\s+/g,
" ").substring(0,255));return d};mt.f.oa=function(e,d){var f;a.K(e)&&0===String(e).indexOf("!HMCQ!")?(f=String(e),f=b.m(document.location.href,f.substring(6,f.length))):a.K(e)||(f=mt.f.Y(e),"input"===f&&d&&("button"===e.type||"submit"===e.type)?f=a.trim(e.value)||"":"input"===f&&!d&&"password"!==e.type?f=a.trim(e.value)||"":"img"===f?(f=mt.f.getAttribute,f=f(e,"alt")||f(e,"title")||f(e,"src")):f="body"===f||"html"===f?["(hm-default-content-for-",f,")"].join(""):mt.f.Cb(e));return String(f||"").substring(0,
255)};(function(){(mt.f.Va=function(){function a(){if(!a.aa){a.aa=t;for(var d=0,b=l.length;d<b;d++)l[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var b=x,l=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,x);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!b)if(b=t,"complete"===document.readyState)a.aa=t;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",k,x),window.addEventListener("load",a,x);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var l=x;try{l=window.frameElement==v}catch(q){}document.documentElement.doScroll&&l&&d()}})();return function(d){a.aa?d():l.push(d)}}()).aa=x})();return mt.f})();mt.event={};
mt.event.e=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,function(d){e.call(a,d)}):a.addEventListener&&a.addEventListener(b,e,x)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=x};
(function(){var a=mt.event;mt.g={};mt.g.Pa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.wb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.g.Nb=function(){try{return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter&&!window.chrome}catch(a){return x}};mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();
mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.Ub=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.Z=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.R=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=
0;(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}b();a.e(window,"orientationchange",b)})();return mt.g})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=e[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===v)return"null";if(d instanceof Array){var f=["["],e=d.length,k,m,q;for(m=0;m<e;m++)switch(q=d[m],typeof q){case "undefined":case "function":case "unknown":break;default:k&&f.push(","),f.push(mt.o.stringify(q)),k=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';k=["{"];m=mt.o.stringify;for(e in d)if(Object.prototype.hasOwnProperty.call(d,e))switch(q=
d[e],typeof q){case "undefined":case "unknown":case "function":break;default:f&&k.push(","),f=1,k.push(m(e)+":"+m(q))}k.push("}");return k.join("")}}}();mt.localStorage={};mt.localStorage.fa=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return x}return t};
mt.localStorage.set=function(a,b,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.fa()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),e=a.substring(0,b)-0;if(e&&e>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.fa())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(d){}return v};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.fa())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(e){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):v}catch(b){return v}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.Ya={};mt.Ya.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=function(){e.onload=v;e=window[d]=v;b&&b(a)};e.src=a};mt.Aa={};
mt.Aa.Db=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.Aa.lc=function(a,b,e,d,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+d+'" src="'+b+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};
(function(){function a(){for(var a=x,e=document.getElementsByTagName("script"),d=e.length,d=100<d?100:d,f=0;f<d;f++){var l=e[f].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=t;break}}return a}return h.qb=a})();var A=h.qb;
h.C={pc:"http://tongji.baidu.com/hm-web/welcome/ico",Ua:"hm.baidu.com/hm.gif",fb:/^(tongji|hmcdn).baidu.com$/,$a:"tongji.baidu.com",Hb:"hmmd",Ib:"hmpl",fc:"utm_medium",Gb:"hmkw",hc:"utm_term",Eb:"hmci",ec:"utm_content",Jb:"hmsr",gc:"utm_source",Fb:"hmcu",dc:"utm_campaign",L:0,H:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",va:A()||"https:"===document.location.protocol?"https:":"http:",qc:0,jc:6E5,Qb:6E5,rc:5E3,kc:5,ka:1024,ic:1,wa:2147483647,Za:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt".split(" "),
S:t,Ga:["a","input","button"],hb:{id:"data-hm-id",ia:"data-hm-class",Da:"data-hm-xpath",content:"data-hm-content",Ba:"data-hm-tag",link:"data-hm-link"},Fa:"data-hm-enabled",Ea:"data-hm-disabled",Rb:"https://hmcdn.baidu.com/static/tongji/plugins/",Ta:["UrlChangeTracker"]};(function(){var a={D:{},e:function(a,e){this.D[a]=this.D[a]||[];this.D[a].push(e)},I:function(a,e){this.D[a]=this.D[a]||[];for(var d=this.D[a].length,f=0;f<d;f++)this.D[a][f](e)}};return h.w=a})();
(function(){function a(a,d){var f=document.createElement("script");f.charset="utf-8";b.d(d,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=v,d()}:f.onload=function(){d()});f.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(f,l)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.cookie,b=mt.localStorage,e=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||e.get(d)||b.get(d)}catch(l){}},setData:function(f,l,k){try{a.set(f,l,{domain:d.P(),path:d.X(),O:k}),k?b.set(f,l,k):e.set(f,l)}catch(m){}},Tb:function(f){try{a.set(f,"",{domain:d.P(),path:d.X(),O:-1}),e.remove(f),b.remove(f)}catch(l){}},T:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length===a.length},ba:function(a,d){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(d)},P:function(){for(var a=document.location.hostname,b=0,e=c.dm.length;b<e;b++)if(d.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var e=c.dm[a];if(-1<e.indexOf("/")&&d.ba(document.location.href,e))return e.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.la=d})();
(function(){var a=mt.lang,b=mt.o,e=h.la,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},f={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},l=["session","user"],k="Hm_up_"+c.id,m={init:function(){m.Mb()},Mb:function(){try{var q=b.parse(decodeURIComponent(e.getData(k)));a.d(q,"Object")&&(d.user=q)}catch(f){}},z:function(a){var b={};d[a]!==r&&(b=d[a]);a=this.ra();for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},ra:function(){for(var a={},b,e=l.length-
1;0<=e;e--){b=d[l[e]];for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])}return a},setProperty:function(e,f,k){var p=d[e];if(a.d(p,"Object")&&a.d(f,"Object")){for(var l in f)if(f.hasOwnProperty(l)){var g=a.h(String(l));if(k||!((/^_/.test(g)||/_$/.test(g))&&"_iden"!==g)){var n=f[l];if(n==v)delete p[g];else{if(a.d(n,"Object")||a.d(n,"Array"))n=b.stringify(n);n=a.h(String(n));m.Ob(e,g,n)&&(p[g]={value:n,scope:m.Ma(e)})}}}"user"===e&&m.ya()}},r:function(b){b!==r&&("userId"===b&&a.d(d.user,"Object")?(delete d.user.uid_,
m.ya()):"user"===b&&a.d(d.user,"Object")?(b=d.user.uid_,d.user=b===r?{}:{uid_:b},m.ya()):d[b]!==r&&(d[b]={}))},ya:function(){try{e.setData(k,encodeURIComponent(b.stringify(d.user)),c.age)}catch(a){}},Ob:function(a,b,e){var f=t,k=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(e)).length)f=x;else{var g=k[b];k[b]={value:e,scope:m.Ma(a)};a=m.M(m.z(a));2048<encodeURIComponent(a).length&&(g!==r?k[b]=g:delete k[b],f=x)}return f},M:function(a){var d=[],b,e;for(e in a)a.hasOwnProperty(e)&&
(b=[e,a[e].value],(1===a[e].scope||2===a[e].scope)&&b.push(a[e].scope),d.push(b.join("*")));return d.join("!")},Ma:function(a){a=f[a];return a!==r?a:f.others}};return h.N=m})();
(function(){var a=mt.f,b=mt.lang,e=mt.o,d=h.w,f=h.N,l=f.M;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var k={Sa:{},da:{},init:function(){for(var a,d=0;d<c.cptrk.length;d++)try{if(a=e.parse(decodeURIComponent(String(c.cptrk[d]))),a.a!==r&&b.d(a.a,"Object")){var f=a.a,l;for(l in f)f.hasOwnProperty(l)&&(k.da[l]=String(f[l]))}}catch(p){}},Ra:function(){var d,b,e;for(e in k.da)if(k.da.hasOwnProperty(e)&&k.Sa[e]===r&&(d=k.da[e],d=a.Ka(d)))b=b===r?{}:b,b[e]=a.oa(d,x),k.Sa[e]=t;return b},sa:function(){var a=
k.Ra();a&&k.Wb(a)},Lb:function(){"MutationObserver"in window?(new MutationObserver(k.sa)).observe(document.body,{childList:t,subtree:t}):window.setInterval(k.sa,15E3)},Wb:function(a){if(b.d(a,"Object")){f.setProperty("pageview",a);a=h.c.b.p;var d=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=l(f.z("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=d;f.r("pageview")}}};k.init();d.e("pv-b",function(){var a=k.Ra();a&&f.setProperty("pageview",a)});k.Lb();a.Va(k.sa)}})();
(function(){var a=mt.lang,b=mt.f,e={W:function(a,f){return function(l){var k=l.target||l.srcElement;if(k){var m=k.getAttribute(a.ea);l=l.clientX+":"+l.clientY;if(m&&m===l)k.removeAttribute(a.ea);else if(f&&0<f.length&&(k=b.yb(k))&&k.length)if(m=k.length,l=k[k.length-1],1E4>m*l.split(">").length)for(l=0;l<m;l++)e.Xa(a,k[l]);else e.Xa(a,l)}}},Xa:function(d,b){for(var e={},k=String(b).split(">").length,m=0;m<k;m++)e[b]="",b=b.substring(0,b.lastIndexOf(">"));d&&(a.d(d,"Object")&&d.Ha)&&d.Ha(e)},Sb:function(a,
b){return function(e){(e.target||e.srcElement).setAttribute(a.ea,e.clientX+":"+e.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),e.type))}}};return h.na=e})();
(function(){var a=mt.f,b=mt.o,e=mt.event,d=mt.lang,f=h.na,l=h.N,k=l.M,m={ea:"HM_ce",ab:function(){if(c.cetrk&&c.cetrk.length){e.e(document,"click",f.W(m,c.cetrk));for(var d=0,k=c.cetrk.length;d<k;d++){var l;try{l=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(p){l={}}var u=l.p||"";-1===u.indexOf(">")&&(0===u.indexOf("#")&&(u=u.substring(1)),(u=a.Ja(u))&&e.e(u,"click",f.Sb(m,l)))}}},Ha:function(a){if(c.cetrk&&c.cetrk.length)for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(k){f=
{}}var g=m.tb(f.p,a);g&&m.s(f,g)}},tb:function(a,d){a=String(a);if(0<a.indexOf("*")){var b=RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),e;for(e in d)if(d.hasOwnProperty(e)&&b.test(e))return e;return v}return d.hasOwnProperty(a)?a:v},s:function(b,e){h.c.b.et=7;var f=b&&b.k||"",f=d.h(f),p={};if(b&&b.a&&d.d(b.a,"Object")){var u=b.a,g;for(g in u)if(u.hasOwnProperty(g)){var n=m.Ab(u[g]||"",e),n=n?a.oa(n,x):"";p[g]=n}}p._iden=f;l.setProperty("customEvent",p);h.c.b.ep=
"";h.c.b.p=k(l.z("customEvent"));h.c.i();h.c.b.p="";l.r("customEvent")},Ab:function(b,d){b=String(b);d=String(d);if(0<b.indexOf("*")){var e=/.*\[(\d+)\]$/.exec(d);b=b.replace("*",e?e[1]:"1")}return a.Ka(b)}};h.w.e("pv-b",m.ab);return m})();
(function(){var a=mt.lang,b=mt.f,e=mt.event,d=mt.g,f=h.C,l=h.w,k=h.N,m=k.M,q=+new Date,w=[],s={W:function(){return function(d){if(h.c&&h.c.S&&c.aet&&c.aet.length){var e=d.target||d.srcElement;if(e){var g=h.c.Ga,n=b.getAttribute(e,f.Fa)!=v?t:x;if(b.getAttribute(e,f.Ea)==v)if(n)s.ga(s.pa(e,d));else{var z=b.Y(e);if(a.J(g,"*")||a.J(g,z))s.ga(s.pa(e,d));else for(;e.parentNode!=v;){var n=e.parentNode,z=b.Y(n),y="a"===z&&a.J(g,"a")?t:x,z="button"===z&&a.J(g,"button")?t:x,B=b.getAttribute(n,f.Fa)!=v?t:x;
if(b.getAttribute(n,f.Ea)==v&&(y||z||B)){s.ga(s.pa(n,d));break}e=e.parentNode}}}}}},pa:function(e,k){var g={},n=f.hb;g.id=b.getAttribute(e,n.id)||b.getAttribute(e,"id")||"";g.ia=b.getAttribute(e,n.ia)||b.getAttribute(e,"class")||"";g.Da=b.getAttribute(e,n.Da)||b.zb(e);g.content=b.getAttribute(e,n.content)||b.oa(e,t);g.Ba=b.getAttribute(e,n.Ba)||b.Y(e);g.link=b.getAttribute(e,n.link)||b.getAttribute(e,"href")||"";g.type=k.type||"click";n=a.ua(e.offsetTop)?e.offsetTop:0;"click"===k.type?n=d.Pa?k.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):k.pageY:"touchend"===k.type&&(k.xa&&a.d(k.xa.changedTouches,"Array")&&k.xa.changedTouches.length)&&(n=k.xa.changedTouches[0].pageY);g.bc=n;return g},ga:function(d){var b=a.h;d=[+new Date-(h.c.F!==r?h.c.F:q),b(d.id),b(d.ia),b(d.Ba),b(d.Da),b(d.link),b(d.content),d.type,d.bc].join("*");s.ha(d);a.d(this.V(),"Function")&&this.V()()},ha:function(a){a.length>f.ka||(encodeURIComponent(w.join("!")+a).length>f.ka&&(s.s(w.join("!")),w=[]),
w.push(a))},s:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=m(k.z("autoEventTracking"));h.c.i();h.c.b.p=""},V:function(){return function(){w&&w.length&&(s.s(w.join("!")),w=[])}}};a.K(c.aet)&&""!==c.aet&&l.e("pv-b",function(){e.e(document,"click",s.W());"ontouchend"in document&&e.e(window,"touchend",s.W());e.e(window,"unload",s.V())});return s})();
(function(){var a=mt.event,b=mt.g,e=h.C,d=h.w,f=+new Date,l=[],k=v,m={nb:function(){return function(){h.c&&(h.c.S&&c.aet&&c.aet.length)&&(window.clearTimeout(k),k=window.setTimeout(function(){m.cb(b.Z()+b.R())},150))}},cb:function(a){m.ha([+new Date-(h.c.F!==r?h.c.F:f),a].join("*"))},ha:function(a){if(encodeURIComponent(l.join("!")+a).length>e.ka||3<l.length)m.s(l.join("!")),l=[];l.push(a)},s:function(a){h.c.b.et=6;h.c.b.vh=b.R();h.c.b.ep=a;h.c.i()},V:function(){return function(){l&&l.length&&(m.s(l.join("!")),
l=[])}}};mt.lang.K(c.aet)&&""!==c.aet&&d.e("pv-b",function(){a.e(window,"scroll",m.nb());a.e(window,"unload",m.V())});return m})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.ma.xb()+","+h.ma.ub();h.c.i()}}function b(){clearTimeout(y);var a;n&&(a="visible"==document[n]);z&&(a=!document[z]);m="undefined"==typeof a?t:a;if((!k||!q)&&m&&w)g=t,p=+new Date;else if(k&&q&&(!m||!w))g=x,u+=+new Date-p;k=m;q=w;y=setTimeout(b,100)}function e(a){var n=document,d="";if(a in n)d=a;else for(var b=["webkit","ms","moz","o"],e=0;e<b.length;e++){var y=b[e]+a.charAt(0).toUpperCase()+a.slice(1);if(y in n){d=
y;break}}return d}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))w="focus"==a.type||"focusin"==a.type?t:x,b()}var f=mt.event,l=h.w,k=t,m=t,q=t,w=t,s=+new Date,p=s,u=0,g=t,n=e("visibilityState"),z=e("hidden"),y;b();(function(){var a=n.replace(/[vV]isibilityState/,"visibilitychange");f.e(document,a,b);f.e(window,"pageshow",b);f.e(window,"pagehide",b);"object"==typeof document.onfocusin?(f.e(document,"focusin",d),f.e(document,"focusout",d)):(f.e(window,"focus",d),
f.e(window,"blur",d))})();h.ma={xb:function(){return+new Date-s},ub:function(){return g?+new Date-p+u:u}};l.e("pv-b",function(){f.e(window,"unload",a())});l.e("duration-send",a());l.e("duration-done",function(){p=s=+new Date;u=0});return h.ma})();
(function(){var a=mt.lang,b=h.C,e=h.load,d={Kb:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var l=h.c.P();e([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},ac:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.lb=d})();
(function(){function a(a,d,b,e){if(!(a===r||d===r||e===r)){if(""===a)return[d,b,e].join("*");a=String(a).split("!");for(var f,k=x,g=0;g<a.length;g++)if(f=a[g].split("*"),String(d)===f[0]){f[1]=b;f[2]=e;a[g]=f.join("*");k=t;break}k||a.push([d,b,e].join("*"));return a.join("!")}}function b(a){for(var e in a)if({}.hasOwnProperty.call(a,e)){var y=a[e];d.d(y,"Object")||d.d(y,"Array")?b(y):a[e]=String(y)}}var e=mt.url,d=mt.lang,f=mt.o,l=mt.g,k=h.C,m=h.w,q=h.lb,w=h.load,s=h.la,p=h.N,u=p.M,g={U:[],ca:0,Qa:x,
B:{Ca:"",page:""},init:function(){g.j=0;p.init();m.e("pv-b",function(){g.mb();g.ob()});m.e("pv-d",function(){g.pb();g.B.page=""});m.e("stag-b",function(){h.c.b.api=g.j||g.ca?g.j+"_"+g.ca:"";h.c.b.ct=[decodeURIComponent(s.getData("Hm_ct_"+c.id)||""),g.B.Ca,g.B.page].join("!")});m.e("stag-d",function(){h.c.b.api=0;g.j=0;g.ca=0})},mb:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];
d.d(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ob:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var d=a.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,f=d.length;e<f;e++){var k=d[e];b.test(k[0])?g.U.push(k):g.za(k)}a.cmd[c.id]={push:g.za}},pb:function(){if(0<g.U.length)for(var a=0,d=g.U.length;a<d;a++)g.za(g.U[a]);g.U=
v},za:function(a){var b=a[0];if(g.hasOwnProperty(b)&&d.d(g[b],"Function"))g[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],x===a||t===a))g.j|=2,h.c.Na=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.j|=4;h.c.b.sn=h.c.La();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=l.Z()+l.R();h.c.b.kb=0;h.c.ta?(h.c.b.nv=0,h.c.b.st=4):h.c.ta=t;var d=h.c.b.u,b=h.c.b.su;h.c.b.u=k.protocol+"//"+document.location.host+
a[1];g.Qa||(h.c.b.su=document.location.href);h.c.b.p=u(p.z("pageview"));h.c.i();h.c.b.u=d;h.c.b.su=b;h.c.b.p="";h.c.F=+new Date;p.r("pageview")}},_trackEvent:function(a){2<a.length&&(g.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.c.b.p=u(p.ra()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){g.ca++;for(var f=(h.c.b.cv||"*").split("!"),k=f.length;k<b-1;k++)f.push("*");
f[b-1]=e+"*"+d.h(a[2])+"*"+d.h(a[3]);h.c.b.cv=f.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?s.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):s.Tb("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var e=d.h(b[1]);b=d.h(b[2]);if(e!==r&&b!==r){var y=decodeURIComponent(s.getData("Hm_ct_"+c.id)||""),y=a(y,e,1,b);s.setData("Hm_ct_"+c.id,encodeURIComponent(y),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var e=d.h(b[1]);b=d.h(b[2]);if(e!==
r&&b!==r){var y=g.B.Ca,y=a(y,e,2,b);g.B.Ca=y}}},_setPageTag:function(b){if(!(3>b.length)){var e=d.h(b[1]);b=d.h(b[2]);if(e!==r&&b!==r){var y=g.B.page,y=a(y,e,3,b);g.B.page=y}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?k.protocol+"//"+window.location.host+a[1]:a[1],g.Qa=t)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),g.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=f.stringify(a),h.c.b.p=u(p.ra()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a=
{webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];q.Kb();q.ac(a)},_setUserId:function(a){a=a[1];if(a!==r&&(d.K(a)||d.ua(a))){var b=p.z("user").uid_;if(!(b&&b.value===d.h(String(a)))){var b=h.c.b.p,e=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.h(String(a));h.c.i();var f={};f.uid_=a;p.setProperty("user",f,t);h.c.b.p=b;h.c.b.ep=e}}},_clearUserId:function(a){1<a.length&&t===a[1]&&p.r("userId")},_setUserProperty:function(a){a=
a[1];d.d(a,"Object")&&p.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&t===a[1]&&p.r("user")},_setSessionProperty:function(a){a=a[1];d.d(a,"Object")&&p.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&t===a[1]&&p.r("session")},_setPageviewProperty:function(a){a=a[1];d.d(a,"Object")&&p.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&t===a[1]&&p.r("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.d(a,"Object")&&p.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&t===a[1]&&p.r("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],x===a||t===a))h.c.Oa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],x===a||t===a))h.c.S=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):m.I("duration-send");m.I("duration-done")},_require:function(a){1<a.length&&(a=a[1],k.fb.test(e.Q(a))&&w(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,e=a[1];a=a[2];if(d.J(k.Ta,e)&&d.d(a,"Function")&&(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]=a,b.A=b.A||[],a=b.A.slice(),e&&a.length&&a[0][1]===e))for(var f=0,g=a.length;f<g;f++){var l=a[f][2]||{};if(b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](l),b.A.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],f=a[2]||{};if(d.J(k.Ta,e))if(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](f);else{b.A=b.A||
[];for(var f=0,l=b.A.length;f<l;f++)if(b.A[f][1]===e)return;b.A.push(a);g._require([v,k.Rb+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.d(a,"Object")||(a={});a._iden=b;p.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=u(p.z("customEvent"));h.c.i();h.c.b.p="";p.r("customEvent")}}};g.init();h.gb=g;return h.gb})();
(function(){var a=h.w;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=t,this.b={},this.Oa=this.Na=t,this.S=g.S,this.Ga=f.K(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.ta=x,this.init())}var b=mt.url,e=mt.Ya,d=mt.Aa,f=mt.lang,l=mt.cookie,k=mt.g,m=mt.sessionStorage,q=mt.o,w=mt.event,s=h.la,p=h.N,u=p.M,g=h.C,n=h.load,z=h.w;a.prototype={T:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ba:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},$:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.ba(a,c.dm[d]))return t}else{var e=b.Q(a);if(e&&this.T(e,c.dm[d]))return t}return x},P:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ba(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Bb:function(){if(!document.referrer)return g.H-g.L>c.vdur?1:4;var a=x;this.$(document.referrer)&&this.$(document.location.href)?a=t:(a=b.Q(document.referrer),a=this.T(a||"",document.location.hostname));return a?g.H-g.L>c.vdur?1:4:3},Zb:function(){var a,b,d,e,f;g.L=s.getData("Hm_lpvt_"+c.id)||0;13===g.L.length&&(g.L=Math.round(g.L/1E3));b=this.Bb();a=4!==b?1:0;if(d=s.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));
for(;2592E3<g.H-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.H);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=g.H,e="",f=1;s.setData("Hm_lvt_"+c.id,d,c.age);s.setData("Hm_lpvt_"+c.id,g.H);d=l.Pb(this.P(),this.X());if(0===c.nv&&this.$(document.location.href)&&(""===document.referrer||this.$(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},Yb:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,f=g.Za.length;e<f;e++){var k=g.Za[e],l=this.b[k];
"undefined"!==typeof l&&""!==l&&("tt"!==k||"tt"===k&&0===b)&&(("ct"!==k||"ct"===k&&0===b)&&("kb"!==k||"kb"===k&&3===b))&&a.push(k+"="+encodeURIComponent(l))}switch(b){case 0:this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},$b:function(){this.Zb();this.b.si=c.id;this.b.sn=this.La();this.b.su=document.referrer;this.b.ds=
k.Ub;this.b.cl=k.colorDepth+"-bit";this.b.ln=String(k.language).toLowerCase();this.b.ja=k.javaEnabled?1:0;this.b.ck=k.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=d.Db();this.b.v="1.2.67";this.b.cv=decodeURIComponent(s.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=k.Z()+k.R();var a=document.location.href;this.b.cm=b.m(a,g.Hb)||"";this.b.cp=b.m(a,g.Ib)||b.m(a,g.fc)||"";this.b.cw=b.m(a,g.Gb)||b.m(a,g.hc)||"";this.b.ci=b.m(a,g.Eb)||b.m(a,g.ec)||"";this.b.cf=
b.m(a,g.Jb)||b.m(a,g.gc)||"";this.b.cu=b.m(a,g.Fb)||b.m(a,g.dc)||"";k.Nb()&&(this.b.u=window.location.href)},init:function(){try{this.$b(),0===this.b.nv?this.Xb():this.Ia(),h.c=this,this.jb(),this.ib(),z.I("pv-b"),this.Vb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(g.va+"//"+g.Ua+"?"+b.join("&"))}},Vb:function(){function a(){z.I("pv-d")}this.Na?(this.ta=t,this.b.et=
0,this.b.ep="",this.b.p=u(p.z("pageview")),this.b.vl=k.Z()+k.R(),this.i(a),this.b.p=""):a();this.F=+new Date;p.r("pageview")},i:function(a){if(this.Oa){var b=this;b.b.rnd=Math.round(Math.random()*g.wa);z.I("stag-b");var d=g.va+"//"+g.Ua+"?"+b.Yb();z.I("stag-d");b.eb(d);e.log(d,function(d){b.Wa(d);f.d(a,"Function")&&a.call(b)})}},jb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=b.Q(document.referrer)===g.$a?1:0,f=b.m(a,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(f);a&&(d.test(a)&&
e&&k)&&(this.b.rnd=Math.round(Math.random()*g.wa),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ib:function(){if(window.postMessage&&window.self!==window.parent){var a=this;w.e(window,"message",function(d){if(b.Q(d.origin)===g.$a){d=d.data||{};var e=d.jn||"",f=/^customevent$/.test(e);if(RegExp(c.id).test(d.sd||
"")&&f)a.b.rnd=Math.round(Math.random()*g.wa),n(g.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},eb:function(a){var b;try{b=q.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);m.set("Hm_unsent_"+c.id,q.stringify(b))},Wa:function(a){var b;try{b=q.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=
a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,q.stringify(b)):this.Ia()}},Ia:function(){m.remove("Hm_unsent_"+c.id)},Xb:function(){var a=this,b;try{b=q.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var f=function(b){e.log(g.va+"//"+b,function(b){a.Wa(b)})},k=0;k<b.length;k++)f(b[k])},La:function(){return Math.round(+new Date/1E3)%65535}};return new a})();
(function(){var a=mt.event,b=mt.lang,e=h.C;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=b.ua(h.c.b.kb)?h.c.b.kb:0;var d=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.i()};a.e(document,"keyup",function(){h.c.b.kb++});a.e(window,"unload",function(){d()});setInterval(d,e.Qb)}})();var C=h.C,D=h.load;c.pt&&D([C.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.g,b=mt.lang,e=mt.event,d=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.Pa||7<a.wb())&&c.cvcc)){var f,l,k,m,q=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},w=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===x)return x},s=function(a,e){var g={};g.n=f;g.t="clk";g.v=a;if(e){var l=e.getAttribute("href"),m=e.getAttribute("onclick")?""+e.getAttribute("onclick"):v,p=e.getAttribute("id")||"";k.test(l)?(g.sn=
"mediate",g.snv=l):b.d(m,"String")&&k.test(m)&&(g.sn="wrap",g.snv=m);g.id=p}h.c.b.et=86;h.c.b.ep=d.stringify(g);h.c.i();for(g=+new Date;400>=+new Date-g;);};if(c.med)l="/zoosnet",f="swt",k=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=q(document.getElementsByTagName("a")),b=[].concat.apply(b,q(document.getElementsByTagName("area"))),b=[].concat.apply(b,q(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(k.test(e)||k.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";f="other";k=c.cvcc.q||r;var p=c.cvcc.id||r;m={click:function(){for(var a=[],b=q(document.getElementsByTagName("a")),b=[].concat.apply(b,q(document.getElementsByTagName("area"))),b=[].concat.apply(b,q(document.getElementsByTagName("img"))),d,e,f,g=0,l=b.length;g<l;g++)d=b[g],k!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(k.test(e)||
k.test(f)||p.test(d))&&a.push(b[g])):(k.test(e)||k.test(f))&&a.push(b[g])):p!==r&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof k){var u;l+=/\/$/.test(l)?"":"/";var g=function(a,d){if(u===d)return s(l+a,d),x;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(u===d[e])return s(l+a+"/"+(e+1),d[e]),x};e.e(document,"mousedown",function(a){a=a||window.event;u=a.target||a.srcElement;var d={};for(w(m,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});u&&u!==document&&w(d,g)!==x;)u=u.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,e=mt.event,d=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var f={bb:function(){for(var b=c.cvcf.length,d,m=0;m<b;m++)(d=a.Ja(decodeURIComponent(c.cvcf[m])))&&e.e(d,"click",f.na())},na:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.i()}}};a.Va(function(){f.bb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var e={n:"anti",sb:0,kb:0,clk:0},d=function(){h.c.b.et=86;h.c.b.ep=b.stringify(e);h.c.i()};a.e(document,"click",function(){e.clk++});a.e(document,"keyup",function(){e.kb=1});a.e(window,"scroll",function(){e.sb++});a.e(window,"load",function(){setTimeout(d,5E3)})}})();})();
