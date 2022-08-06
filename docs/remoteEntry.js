var pkConnect;(()=>{"use strict";var e,t,r,n,o,a,i,u,l,s,c,f={533:(e,t,r)=>{var n={"./ConnectionStatus":()=>Promise.all([r.e(380),r.e(271),r.e(615),r.e(28)]).then((()=>()=>r(28))),"./ConnectionService":()=>r.e(450).then((()=>()=>r(450)))},o=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),a=(e,t)=>{if(r.S){var n="default",o=r.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>o,init:()=>a})}},p={};function d(e){var t=p[e];if(void 0!==t)return t.exports;var r=p[e]={exports:{}};return f[e](r,r.exports,d),r.exports}d.m=f,d.c=p,d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+".js",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="pk-connect:",d.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var c=l[s];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+o){i=c;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var f=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{d.S={};var e={},t={};d.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];d.o(d.S,r)||(d.S[r]={});var a=d.S[r],i="pk-connect",u=(e,t,r,n)=>{var o=a[e]=a[e]||{},u=o[t];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[t]={get:r,from:i,eager:!!n})},l=[];return"default"===r&&(u("react-dom","17.0.2",(()=>Promise.all([d.e(935),d.e(271)]).then((()=>()=>d(935))))),u("react","17.0.2",(()=>d.e(294).then((()=>()=>d(294))))),u("single-spa-react","4.6.1",(()=>d.e(582).then((()=>()=>d(582))))),u("socket.io-client","4.4.0",(()=>d.e(992).then((()=>()=>d(992)))))),e[r]=l.length?Promise.all(l).then((()=>e[r]=1)):1}}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},n=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=e[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=(e,t)=>{if(0 in e){t=r(t);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var s,c,f=u<e.length?(typeof e[u])[0]:"";if(i>=t.length||"o"==(c=(typeof(s=t[i]))[0]))return!l||("u"==f?u>n&&!a:""==f!=a);if("u"==c){if(!l||"u"!=f)return!1}else if(l)if(f==c)if(u<=n){if(s!=e[u])return!1}else{if(a?s>e[u]:s<e[u])return!1;s!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(a||u<=n)return!1;l=!1,u--}else{if(u<=n||c<f!=a)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var p=[],d=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?d()|d():2==h?d()&d():h?o(h,t):!d())}return!!d()},a=(e,t,r)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!o(r,t)||e&&!n(e,t)?e:t),0))&&a[t]},i=e=>(e.loaded=1,e.get()),u=(e=>function(t,r,n,o){var a=d.I(t);return a&&a.then?a.then(e.bind(e,t,d.S[t],r,n,o)):e(0,d.S[t],r,n,o)})(((e,t,r,n,o)=>{var u=t&&d.o(t,r)&&a(t,r,n);return u?i(u):o()})),l={},s={271:()=>u("default","react",[1,17,0,1],(()=>d.e(294).then((()=>()=>d(294))))),650:()=>u("default","react-dom",[1,17,0,1],(()=>d.e(935).then((()=>()=>d(935))))),788:()=>u("default","single-spa-react",[1,4,6,1],(()=>d.e(582).then((()=>()=>d(582))))),213:()=>u("default","socket.io-client",[1,4,5,1],(()=>d.e(992).then((()=>()=>d(992)))))},c={271:[271],450:[213],615:[650,788]},d.f.consumes=(e,t)=>{d.o(c,e)&&c[e].forEach((e=>{if(d.o(l,e))return t.push(l[e]);var r=t=>{l[e]=0,d.m[e]=r=>{delete d.c[e],r.exports=t()}},n=t=>{delete l[e],d.m[e]=r=>{throw delete d.c[e],t}};try{var o=s[e]();o.then?t.push(l[e]=o.then(r).catch(n)):r(o)}catch(e){n(e)}}))},(()=>{var e={21:0};d.f.j=(t,r)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(271|615)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,u]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)d.o(i,n)&&(d.m[n]=i[n]);u&&u(d)}for(t&&t(r);l<a.length;l++)o=a[l],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkpk_connect=self.webpackChunkpk_connect||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var h=d(533);pkConnect=h})();