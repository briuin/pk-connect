"use strict";(self.webpackChunkpk_connect=self.webpackChunkpk_connect||[]).push([[28],{28:(e,t,n)=>{n.r(t),n.d(t,{bootstrap:()=>E,default:()=>g,mount:()=>C,unmount:()=>b});var a=n(861),c=n(885),r=n(757),o=n.n(r),u=n(271),s=n.n(u),l=n(650),i=n.n(l),m=n(577),p=n(220),d=n(277),h=n(788),f=n.n(h),k=(0,m.Z)({seed:"pk-connect",productionPrefix:"pk-connect"}),v=(0,p.Z)((function(e){return{status:{color:"lime"},modal:{position:"fixed",zIndex:"500",width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},modalContent:{width:"300px",height:"200px"}}}));function g(){var e=v(),t=localStorage.getItem("token"),n=(0,u.useState)(t&&JSON.parse(t).value),r=(0,c.Z)(n,2),l=r[0],i=r[1];return l&&(0,u.useEffect)((0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pk-center.herokuapp.com/auth/reconnect",{method:"POST",headers:{Authorization:"Bearer ".concat(l)}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),i(null);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))),s().createElement(d.ZP,{generateClassName:k},s().createElement(s().Fragment,null,l&&s().createElement("div",{className:e.status},"connected"),!l&&s().createElement("div",{className:e.modal},s().createElement("div",{className:e.modalContent},s().createElement("button",null,"Play as guest"),s().createElement("button",{onClick:function(){location.href="https://pk.land/#/account/login"}},"Login PK account")))))}var x=f()({React:s(),ReactDOM:i(),rootComponent:g,errorBoundary:function(e,t,n){return s().createElement("div",null,"This renders when a catastrophic error occurs")}}),E=x.bootstrap,C=x.mount,b=x.unmount}}]);