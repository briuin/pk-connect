"use strict";(self.webpackChunkpk_connect=self.webpackChunkpk_connect||[]).push([[832],{832:(e,t,n)=>{n.r(t),n.d(t,{mountElement:()=>C});var r=n(271),a=n.n(r),c=n(650),o=n.n(c),u=n(577),l=n(277),s=n(861),i=n(885),m=n(757),p=n.n(m),d=n(220),h=n(788),f=n.n(h),k=(0,u.Z)({seed:"pk-connect",productionPrefix:"pk-connect"}),E=(0,d.Z)((function(e){return{status:{color:"lime"},modal:{position:"fixed",zIndex:"500",width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},modalContent:{width:"300px",height:"200px"}}}));function v(){var e=E(),t=localStorage.getItem("token"),n=(0,r.useState)(t&&JSON.parse(t).value),c=(0,i.Z)(n,2),o=c[0],u=c[1];return(0,r.useEffect)((0,s.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://pk-center.herokuapp.com/auth/reconnect",{method:"POST",headers:{Authorization:"Bearer ".concat(o)}}).then((function(e){if(e.status>=400&&e.status<600)throw new Error("Bad response from server");return e})).catch((function(e){localStorage.removeItem("token"),u(null)}));case 4:case"end":return e.stop()}}),e)}))),[]),a().createElement(l.ZP,{generateClassName:k},a().createElement(a().Fragment,null,o&&a().createElement("div",{className:e.status},"connected"),!o&&a().createElement("div",{className:e.modal},a().createElement("div",{className:e.modalContent},a().createElement("button",null,"Play as guest"),a().createElement("button",{onClick:function(){location.href="https://pk.land/#/account/login"}},"Login PK account")))))}var g=f()({React:a(),ReactDOM:o(),rootComponent:v,errorBoundary:function(e,t,n){return a().createElement("div",null,"This renders when a catastrophic error occurs")}}),x=(g.bootstrap,g.mount,g.unmount,(0,u.Z)({productionPrefix:"pk-connect"}));const w=function(){return a().createElement("div",null,a().createElement(l.ZP,{generateClassName:x},a().createElement(v,null)))};var C=function(e){o().render(a().createElement(w,null),e)}}}]);