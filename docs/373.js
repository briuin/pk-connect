"use strict";(self.webpackChunkpk_connect=self.webpackChunkpk_connect||[]).push([[373],{975:(e,n,t)=>{t.d(n,{NU:()=>m,ZP:()=>f});var i,o=t(462),r=t(987),s=t(271),c=t.n(s),a=t(577),u=t(258),l=t(867),d=(0,u.Ue)((0,l.Z)()),h={disableGeneration:!1,generateClassName:(0,a.Z)(),jss:d,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},m=c().createContext(h);function f(e){var n=e.children,t=e.injectFirst,s=void 0!==t&&t,a=e.disableGeneration,d=void 0!==a&&a,h=(0,r.Z)(e,["children","injectFirst","disableGeneration"]),f=c().useContext(m),v=(0,o.Z)({},f,{disableGeneration:d},h);if(!v.jss.options.insertionPoint&&s&&"undefined"!=typeof window){if(!i){var C=document.head;i=document.createComment("mui-inject-first"),C.insertBefore(i,C.firstChild)}v.jss=(0,u.Ue)({plugins:(0,l.Z)().plugins,insertionPoint:i})}return c().createElement(m.Provider,{value:v},n)}},373:(e,n,t)=>{t.r(n),t.d(n,{mountElement:()=>w});var i=t(271),o=t.n(i),r=t(650),s=t.n(r),c=t(577),a=t(975),u=t(765),l=t(788),d=t.n(l),h=t(671),m=t(144),f=t(942),v=t(213),C=t.n(v);new(function(){function e(){(0,h.Z)(this,e),(0,f.Z)(this,"isConnecting",!1),(0,f.Z)(this,"socket",null)}return(0,m.Z)(e,[{key:"isConnected",value:function(){return this.socket&&this.socket.connected||!1}},{key:"init",value:function(e){this.isConnecting||this.socket||(this.socket=C()(e,{withCredentials:!0}),this.isConnecting=!0,this.socket.on("connect",this.onConnect))}},{key:"onConnect",value:function(e){this.isConnecting=!1,console.log("connected")}}]),e}());var k=(0,u.Z)((function(e){return{status:{color:"lime"}}}));function p(){var e=k();return o().createElement(o().Fragment,null,o().createElement("div",{className:e.status},"connected"))}var Z=d()({React:o(),ReactDOM:s(),rootComponent:p,errorBoundary:function(e,n,t){return o().createElement("div",null,"This renders when a catastrophic error occurs")}}),g=(Z.bootstrap,Z.mount,Z.unmount,(0,c.Z)({productionPrefix:"pk-connect"}));const E=function(){return o().createElement("div",null,o().createElement(a.ZP,{generateClassName:g},o().createElement(p,null)))};var w=function(e){s().render(o().createElement(E,null),e)}}}]);