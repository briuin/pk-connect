var pkConnect;(()=>{"use strict";var e,t,r,n,o,a,i,l,u,s,c,f={533:(e,t,r)=>{var n={"./ConnectionStatus":()=>Promise.all([r.e(599),r.e(233),r.e(271),r.e(294),r.e(28)]).then((()=>()=>r(28))),"./ConnectionService":()=>Promise.all([r.e(233),r.e(566)]).then((()=>()=>r(566)))},o=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),a=(e,t)=>{if(r.S){var n="default",o=r.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>o,init:()=>a})}},d={};function p(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,exports:{}};return f[e](r,r.exports,p),r.exports}p.m=f,p.c=d,p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((t,r)=>(p.f[r](e,t),t)),[])),p.u=e=>e+".js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="pk-connect:",p.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+o){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var f=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{p.S={};var e={},t={};p.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];p.o(p.S,r)||(p.S[r]={});var a=p.S[r],i="pk-connect",l=(e,t,r,n)=>{var o=a[e]=a[e]||{},l=o[t];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[t]={get:r,from:i,eager:!!n})},u=[];return"default"===r&&(l("jwt-decode","3.1.2",(()=>p.e(245).then((()=>()=>p(245))))),l("react-dom","17.0.2",(()=>Promise.all([p.e(935),p.e(271)]).then((()=>()=>p(935))))),l("react","17.0.2",(()=>p.e(976).then((()=>()=>p(294))))),l("rxjs","7.5.6",(()=>p.e(698).then((()=>()=>p(698))))),l("single-spa-react","4.6.1",(()=>p.e(582).then((()=>()=>p(582))))),l("socket.io-client","4.4.0",(()=>p.e(992).then((()=>()=>p(992)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;p.g.importScripts&&(e=p.g.location+"");var t=p.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},n=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=e[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=(e,t)=>{if(0 in e){t=r(t);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,c,f=l<e.length?(typeof e[l])[0]:"";if(i>=t.length||"o"==(c=(typeof(s=t[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==c){if(!u||"u"!=f)return!1}else if(u)if(f==c)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||c<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var d=[],p=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},a=(e,t,r)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!o(r,t)||e&&!n(e,t)?e:t),0))&&a[t]},i=e=>(e.loaded=1,e.get()),l=(e=>function(t,r,n,o){var a=p.I(t);return a&&a.then?a.then(e.bind(e,t,p.S[t],r,n,o)):e(0,p.S[t],r,n,o)})(((e,t,r,n,o)=>{var l=t&&p.o(t,r)&&a(t,r,n);return l?i(l):o()})),u={},s={271:()=>l("default","react",[1,17,0,1],(()=>p.e(976).then((()=>()=>p(294))))),213:()=>l("default","socket.io-client",[1,4,5,1],(()=>p.e(992).then((()=>()=>p(992))))),529:()=>l("default","rxjs",[1,7,5,6],(()=>p.e(698).then((()=>()=>p(698))))),191:()=>l("default","jwt-decode",[1,3,1,2],(()=>p.e(245).then((()=>()=>p(245))))),650:()=>l("default","react-dom",[1,17,0,1],(()=>p.e(935).then((()=>()=>p(935))))),788:()=>l("default","single-spa-react",[1,4,6,1],(()=>p.e(582).then((()=>()=>p(582)))))},c={233:[213,529],271:[271],294:[191,650,788]},p.f.consumes=(e,t)=>{p.o(c,e)&&c[e].forEach((e=>{if(p.o(u,e))return t.push(u[e]);var r=t=>{u[e]=0,p.m[e]=r=>{delete p.c[e],r.exports=t()}},n=t=>{delete u[e],p.m[e]=r=>{throw delete p.c[e],t}};try{var o=s[e]();o.then?t.push(u[e]=o.then(r).catch(n)):r(o)}catch(e){n(e)}}))},(()=>{var e={21:0};p.f.j=(t,r)=>{var n=p.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^2(33|71|94)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=p.p+p.u(t),i=new Error;p.l(a,(r=>{if(p.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,l]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);l&&l(p)}for(t&&t(r);u<a.length;u++)o=a[u],p.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkpk_connect=self.webpackChunkpk_connect||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var h=p(533);pkConnect=h})();