/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-atobbtoa-backgroundblendmode-cssgrid_cssgridlegacy-cssremunit-csstransforms-flexbox-rgba-webp-webpalpha-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,s;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),b.push((a?"":"no-")+s.join("-"))}}function o(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){if("object"==typeof e)for(var n in e)S(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),a=Modernizr[r[0]];if(2==r.length&&(a=a[r[1]]),"undefined"!=typeof a)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function u(e,t){return!!~(""+e).indexOf(t)}function c(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?c(a,n||t):a);return!1}function A(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var a;if("getComputedStyle"in e){a=getComputedStyle.call(e,t,n);var o=e.console;if(null!==a)r&&(a=a.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else a=!n&&t.currentStyle&&t.currentStyle[r];return a}function p(){var e=t.body;return e||(e=i(E?"svg":"body"),e.fake=!0),e}function m(e,n,r,a){var o,s,l,u,c="modernizr",f=i("div"),A=p();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=a?a[r]:c+(r+1),f.appendChild(l);return o=i("style"),o.type="text/css",o.id="s"+c,(A.fake?A:f).appendChild(o),A.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,A.fake&&(A.style.background="",A.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(A)),s=n(f,e),A.fake?(A.parentNode.removeChild(A),x.style.overflow=u,x.offsetHeight):f.parentNode.removeChild(f),!!s}function g(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(A(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+A(t[a])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function h(e,t,a,o){function l(){f&&(delete U.style,delete U.modElem)}if(o=r(o,"undefined")?!1:o,!r(a,"undefined")){var c=g(e,a);if(!r(c,"undefined"))return c}for(var f,A,d,p,m,h=["modernizr","tspan","samp"];!U.style&&h.length;)f=!0,U.modElem=i(h.shift()),U.style=U.modElem.style;for(d=e.length,A=0;d>A;A++)if(p=e[A],m=U.style[p],u(p,"-")&&(p=s(p)),U.style[p]!==n){if(o||r(a,"undefined"))return l(),"pfx"==t?p:!0;try{U.style[p]=a}catch(v){}if(U.style[p]!=m)return l(),"pfx"==t?p:!0}return l(),!1}function v(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+B.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,a,o):(s=(e+" "+T.join(i+" ")+i).split(" "),f(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var b=[],w=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var x=t.documentElement,E="svg"===x.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,u(t)}function o(e){var t=v[e[g]];return t||(t={},h++,e[g]=h,v[h]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)a.createElement(s[i]);return a}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function u(e){e||(e=t);var r=o(e);return!y.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,A="3.7.3",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",h=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:A,shivCSS:d.shivCSS!==!1,supportsUnknownElements:f,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:u,createElement:i,createDocumentFragment:s,addElements:a};e.html5=y,u(t),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("cssremunit",function(){var e=i("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var S;!function(){var e={}.hasOwnProperty;S=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=l}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){l("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){l("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){function e(e,t,n){function r(t){var r=t&&"load"===t.type?1==a.width:!1,o="webp"===e;l(e,o&&r?new Boolean(r):r),n&&n(t)}var a=new Image;a.onerror=r,a.onload=r,a.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var r=0;r<t.length;r++)e(t[r].name,t[r].uri)})}),Modernizr.addTest("atobbtoa","atob"in e&&"btoa"in e,{aliases:["atob-btoa"]});var _="Moz O ms Webkit",B=C._config.usePrefixes?_.split(" "):[];C._cssomPrefixes=B;var Q=function(t){var r,a=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;a>i;i++){var s=prefixes[i],l=s.toUpperCase()+"_"+r;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=Q;var T=C._config.usePrefixes?_.toLowerCase().split(" "):[];C._domPrefixes=T;var D={elem:i("modernizr")};Modernizr._q.push(function(){delete D.elem});var U={style:D.elem.style};Modernizr._q.unshift(function(){delete U.style}),C.testAllProps=v;var k=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?Q(e):(-1!=e.indexOf("-")&&(e=s(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",k("backgroundBlendMode","text")),C.testAllProps=y,Modernizr.addTest("cssgridlegacy",y("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",y("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),a(),o(b),delete C.addTest,delete C.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);