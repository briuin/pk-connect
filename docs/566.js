"use strict";(self.webpackChunkpk_connect=self.webpackChunkpk_connect||[]).push([[566],{566:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var o=t(671),i=t(144),c=t(942),r=t(213),s=t.n(r);const a=new(function(){function e(){(0,o.Z)(this,e),(0,c.Z)(this,"isConnecting",!1),(0,c.Z)(this,"socket",null),(0,c.Z)(this,"user",{username:""})}return(0,i.Z)(e,[{key:"isConnected",value:function(){return this.socket&&this.socket.connected||!1}},{key:"setUser",value:function(e){this.user=e,console.log(e,e.username)}},{key:"init",value:function(e){if(!this.isConnecting&&!this.socket){var n=localStorage.getItem("token"),t=n&&JSON.parse(n).value;this.socket=s()(e,{withCredentials:!0,transportOptions:{polling:{extraHeaders:{Authorization:"Bearer ".concat(t)}}}}),this.isConnecting=!0,this.socket.on("connect",this.onConnect)}}},{key:"onConnect",value:function(e){this.isConnecting=!1,console.log("connected")}}]),e}())},671:(e,n,t)=>{function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:()=>o})},144:(e,n,t)=>{function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}t.d(n,{Z:()=>i})},942:(e,n,t)=>{function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:()=>o})}}]);