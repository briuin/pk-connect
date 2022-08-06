var pkConnect;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,s,c,f={533:(e,r,t)=>{var n={"./ConnectionStatus":()=>Promise.all([t.e(712),t.e(213),t.e(271),t.e(615),t.e(175)]).then((()=>()=>t(28))),"./ConnectionService":()=>Promise.all([t.e(213),t.e(566)]).then((()=>()=>t(566)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},p={};function d(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={exports:{}};return f[e](t,t.exports,d),t.exports}d.m=f,d.c=p,d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>e+".js",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="pk-connect:",d.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{d.S={};var e={},r={};d.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];d.o(d.S,t)||(d.S[t]={});var a=d.S[t],i="pk-connect",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("react-dom","17.0.2",(()=>Promise.all([d.e(935),d.e(271)]).then((()=>()=>d(935))))),l("react","17.0.2",(()=>d.e(294).then((()=>()=>d(294))))),l("single-spa-react","4.6.1",(()=>d.e(582).then((()=>()=>d(582))))),l("socket.io-client","4.4.0",(()=>d.e(992).then((()=>()=>d(992)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var r=d.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,c,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(c=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==c){if(!u||"u"!=f)return!1}else if(u)if(f==c)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||c<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var p=[],d=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?d()|d():2==h?d()&d():h?o(h,r):!d())}return!!d()},a=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},i=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,n,o){var a=d.I(r);return a&&a.then?a.then(e.bind(e,r,d.S[r],t,n,o)):e(0,d.S[r],t,n,o)})(((e,r,t,n,o)=>{var l=r&&d.o(r,t)&&a(r,t,n);return l?i(l):o()})),u={},s={271:()=>l("default","react",[1,17,0,1],(()=>d.e(294).then((()=>()=>d(294))))),213:()=>l("default","socket.io-client",[1,4,5,1],(()=>d.e(992).then((()=>()=>d(992))))),650:()=>l("default","react-dom",[1,17,0,1],(()=>d.e(935).then((()=>()=>d(935))))),788:()=>l("default","single-spa-react",[1,4,6,1],(()=>d.e(582).then((()=>()=>d(582)))))},c={213:[213],271:[271],615:[650,788]},d.f.consumes=(e,r)=>{d.o(c,e)&&c[e].forEach((e=>{if(d.o(u,e))return r.push(u[e]);var t=r=>{u[e]=0,d.m[e]=t=>{delete d.c[e],t.exports=r()}},n=r=>{delete u[e],d.m[e]=t=>{throw delete d.c[e],r}};try{var o=s[e]();o.then?r.push(u[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={21:0};d.f.j=(r,t)=>{var n=d.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(213|271|615)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=d.p+d.u(r),i=new Error;d.l(a,(t=>{if(d.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)d.o(i,n)&&(d.m[n]=i[n]);l&&l(d)}for(r&&r(t);u<a.length;u++)o=a[u],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkpk_connect=self.webpackChunkpk_connect||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var h=d(533);pkConnect=h})();