"use strict";(self.webpackChunkpk_connect=self.webpackChunkpk_connect||[]).push([[175],{975:(e,t,n)=>{n.d(t,{NU:()=>l});var o=n(271),c=n.n(o),a=n(577),s=n(258),r=n(867),u=(0,s.Ue)((0,r.Z)()),i={disableGeneration:!1,generateClassName:(0,a.Z)(),jss:u,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},l=c().createContext(i)},28:(e,t,n)=>{n.r(t),n.d(t,{bootstrap:()=>g,default:()=>k,mount:()=>v,unmount:()=>C});var o=n(861),c=n(885),a=n(757),s=n.n(a),r=n(271),u=n.n(r),i=n(650),l=n.n(i),h=n(220),d=n(788),p=n.n(d),m=(n(566),(0,h.Z)((function(e){return{status:{color:"lime"},modal:{position:"fixed",zIndex:"500",margin:"100px auto"}}})));function k(){var e=m(),t=localStorage.getItem("token"),n=useState(t&&JSON.parse(t).value),a=(0,c.Z)(n,2),r=a[0],i=a[1];return r&&useEffect((0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pk-center.herokuapp.com/auth/reconnect",{method:"POST",headers:{Authorization:"Bearer ".concat(r)}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),i(null);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))),u().createElement(u().Fragment,null,r&&u().createElement("div",{className:e.status},"connected"),!r&&u().createElement("div",{className:e.modal},u().createElement("button",null,"Play as guest"),u().createElement("button",{onClick:function(){location.href="https://pk.land/#/account/login"}},"Login PK account")))}var f=p()({React:u(),ReactDOM:l(),rootComponent:k,errorBoundary:function(e,t,n){return u().createElement("div",null,"This renders when a catastrophic error occurs")}}),g=f.bootstrap,v=f.mount,C=f.unmount},566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(671),c=n(144),a=n(942),s=n(213),r=n.n(s);const u=new(function(){function e(){(0,o.Z)(this,e),(0,a.Z)(this,"isConnecting",!1),(0,a.Z)(this,"socket",null)}return(0,c.Z)(e,[{key:"isConnected",value:function(){return this.socket&&this.socket.connected||!1}},{key:"init",value:function(e){this.isConnecting||this.socket||(this.socket=r()(e,{withCredentials:!0}),this.isConnecting=!0,this.socket.on("connect",this.onConnect))}},{key:"onConnect",value:function(e){this.isConnecting=!1,console.log("connected")}}]),e}())}}]);