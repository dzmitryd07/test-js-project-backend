(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),r=n.n(c),i=(n(26),n(9)),o=n.n(i),u=n(21),l=n(12),j=n(6),d=n(33),b=n(34),m=n(20),f=n(8),h=n(2),O=n(35),p=n(37),x=n(0);function g(e){var t=Object(a.useState)({}),n=Object(j.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)({}),i=Object(j.a)(r,2),o=i[0],u=i[1],l=Object(a.useRef)(null),d=function(e,t){c(Object(h.a)(Object(h.a)({},s),{},Object(f.a)({},e,t))),o[e]&&u(Object(h.a)(Object(h.a)({},o),{},Object(f.a)({},e,null)))};Object(a.useEffect)((function(){window.addEventListener("keyup",(function(e){13===e.keyCode&&e.ctrlKey&&document.getElementById("submitButton").click()}))}),[]);return Object(a.useEffect)((function(){null!=e.status&&201===e.status.status?(console.log("Message succesfully created",e.status.status),l.current.value="",c(Object(h.a)(Object(h.a)({},s),{},{message:""}))):null!=e.status&&console.log(e.status)}),[e.status]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(O.a,{noValidate:!0,children:[Object(x.jsxs)(O.a.Group,{className:"mb-3",children:[Object(x.jsx)(O.a.Label,{children:"Name"}),Object(x.jsx)(O.a.Control,{required:!0,type:"text",name:"name",onChange:function(e){return d("name",e.target.value)},isInvalid:!!o.name,placeholder:"Enter your name"}),Object(x.jsx)(O.a.Control.Feedback,{type:"invalid",children:o.name})]}),Object(x.jsxs)(O.a.Group,{className:"mb-3",children:[Object(x.jsx)(O.a.Label,{children:"Message"}),Object(x.jsx)(O.a.Control,{required:!0,as:"textarea",rows:3,name:"message",onChange:function(e){return d("message",e.target.value)},isInvalid:!!o.message,ref:l,placeholder:"Please leave your message here"}),Object(x.jsx)(O.a.Control.Feedback,{type:"invalid",children:o.message})]}),Object(x.jsx)(p.a,{onClick:function(t){t.preventDefault();var n=function(){var e=s.name,t=s.message,n={};return e&&""!==e?/^[a-zA-Z0-9_]+$/gi.test(e)||(n.name="The field cannot contain only latin letters, numbers and underscore symbol"):n.name="The field cannot be blank",t&&""!==t?t.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)&&(n.message="The field cannot not contain hypelinks"):n.message="The field cannot be blank",n}();Object.keys(n).length>0?u(n):e.postData({name:s.name,message:s.message})},className:"mb-2",id:"submitButton",children:"Send"})]})})}var v=s.a.memo(g),y=n(36),k=n(14);function w(e){return Object(x.jsx)(x.Fragment,{children:e.items.map((function(e){return Object(x.jsxs)(y.a,{className:"mb-2",children:[Object(x.jsx)(k.a,{className:"card-header",children:e.name}),Object(x.jsx)(y.a.Body,{children:e.message})]},e.id)}))})}var N=s.a.memo(w);function C(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),r=Object(j.a)(c,2),i=r[0],f=r[1],h=Object(a.useState)(null),O=Object(j.a)(h,2),p=O[0],g=O[1],y="/api/messages",k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:{},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},fetch(y,n).then(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null===(n=t.headers.get("content-type"))||void 0===n?void 0:n.includes("application/json"),e.t0=a,!e.t0){e.next=6;break}return e.next=5,t.json();case 5:e.t0=e.sent;case 6:if(s=e.t0,t.ok){e.next=10;break}return c=s&&s.message||t.status,e.abrupt("return",Promise.reject(c));case 10:201===t.status&&(f((function(e){return[s].concat(Object(u.a)(e))})),g(t));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.length>0&&void 0!==t[0]?t[0]:{},fetch(y).then(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null===(n=t.headers.get("content-type"))||void 0===n?void 0:n.includes("application/json"),e.t0=a,!e.t0){e.next=6;break}return e.next=5,t.json();case 5:e.t0=e.sent;case 6:if(c=e.t0,t.ok){e.next=10;break}return r=c&&c.message||t.status,e.abrupt("return",Promise.reject(r));case 10:f(c),s(!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[y]),Object(x.jsxs)(d.a,{fluid:!0,children:[Object(x.jsx)(b.a,{className:"justify-content-md-center mt-5",children:Object(x.jsx)(m.a,{xs:!0,lg:"6",md:"6",children:Object(x.jsx)("h1",{children:"Guest book"})})}),Object(x.jsx)(b.a,{className:"justify-content-md-center mt-5",children:Object(x.jsx)(m.a,{xs:!0,lg:"6",md:"6",children:Object(x.jsx)(v,{postData:k,status:p})})}),Object(x.jsx)(b.a,{className:"justify-content-md-center mt-5",children:Object(x.jsxs)(m.a,{xs:!0,lg:"6",md:"6",children:[!n&&Object(x.jsx)("div",{children:"Loading messages..."}),Object(x.jsx)(N,{items:i})]})})]})}var S=s.a.memo(C);n(31);r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.edc6a9c3.chunk.js.map