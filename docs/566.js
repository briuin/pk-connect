"use strict";(self.webpackChunkpk_connect=self.webpackChunkpk_connect||[]).push([[566],{566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var o=n(671),i=n(144),r=n(942),c=n(213),s=n.n(c);const a=new(function(){function e(){(0,o.Z)(this,e),(0,r.Z)(this,"isConnecting",!1),(0,r.Z)(this,"socket",null),(0,r.Z)(this,"user",{username:""})}return(0,i.Z)(e,[{key:"isConnected",value:function(){return this.socket&&this.socket.connected||!1}},{key:"isAuthenticated",value:function(){return this.user&&this.user.username}},{key:"logout",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{redirectToHomepage:!0};localStorage.removeItem("token"),e.redirectToHomepage&&(location.href="/")}},{key:"setUser",value:function(e){this.user=e,this.socket&&this.socket.emit("updateUserInfo",{username:e.username})}},{key:"init",value:function(e){if(!this.isConnecting&&!this.socket){var t=localStorage.getItem("token"),n=t&&JSON.parse(t).value;this.socket=s()(e,{withCredentials:!0,transportOptions:{polling:{extraHeaders:{Authorization:"Bearer ".concat(n)}}}}),this.isConnecting=!0,this.socket.on("connect",this.onConnect)}}},{key:"onConnect",value:function(e){this.isConnecting=!1,console.log("connected")}}]),e}())},671:(e,t,n)=>{function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>o})},144:(e,t,n)=>{function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:()=>i})},942:(e,t,n)=>{function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o})}}]);