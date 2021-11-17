(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),r=n.n(s),i=(n(26),n(21)),o=n(10),u=n.n(o),j=n(14),l=n(6),b=(n(28),n(34)),d=n(35),m=n(20),O=n(8),h=n(2),f=n(36),p=n(38),x=n(0);var g=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)({}),i=Object(l.a)(r,2),o=i[0],u=i[1],j=Object(a.useRef)(null),b=Object(a.useState)(""),d=Object(l.a)(b,2),m=(d[0],d[1],function(e,t){s(Object(h.a)(Object(h.a)({},c),{},Object(O.a)({},e,t))),o[e]&&u(Object(h.a)(Object(h.a)({},o),{},Object(O.a)({},e,null)))});return Object(a.useEffect)((function(){window.addEventListener("keyup",(function(e){13===e.keyCode&&e.ctrlKey&&document.getElementById("submitButton").click()}))})),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(f.a,{noValidate:!0,ref:j,children:[Object(x.jsxs)(f.a.Group,{className:"mb-3",children:[Object(x.jsx)(f.a.Label,{children:"Name"}),Object(x.jsx)(f.a.Control,{required:!0,type:"text",name:"name",onChange:function(e){return m("name",e.target.value)},isInvalid:!!o.name,placeholder:"Enter your name"}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:o.name})]}),Object(x.jsxs)(f.a.Group,{className:"mb-3",children:[Object(x.jsx)(f.a.Label,{children:"Message"}),Object(x.jsx)(f.a.Control,{required:!0,as:"textarea",rows:3,name:"message",onChange:function(e){return m("message",e.target.value)},isInvalid:!!o.message,placeholder:"Please leave your message here"}),Object(x.jsx)(f.a.Control.Feedback,{type:"invalid",children:o.message})]}),Object(x.jsx)(p.a,{onClick:function(t){t.preventDefault();var n=function(){var e=c.name,t=c.message,n={};return e&&""!==e?/^[a-zA-Z0-9_]+$/gi.test(e)||(n.name="The field cannot contain only latin letters, numbers and underscore symbol"):n.name="The field cannot be blank",t&&""!==t?t.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)&&(n.message="The field cannot not contain hypelinks"):n.message="The field cannot be blank",n}();Object.keys(n).length>0?u(n):e.postData({name:c.name,message:c.message})},className:"mb-2",id:"submitButton",children:"Send"})]})})},v=n(37),y=n(13);var k=function(e){return Object(x.jsx)(x.Fragment,{children:e.items.map((function(e){return Object(x.jsxs)(v.a,{className:"mb-2",children:[Object(x.jsx)(y.a,{className:"card-header",children:e.name}),Object(x.jsx)(v.a.Body,{children:e.message})]},e._id)}))})};var w=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),r=Object(l.a)(s,2),o=r[0],O=r[1],h=Object(a.useState)(null),f=Object(l.a)(h,2),p=f[0],v=f[1],y="/api/messages",w=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(!0),O(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:{},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},fetch(y,n).then(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null===(n=t.headers.get("content-type"))||void 0===n?void 0:n.includes("application/json"),e.t0=a,!e.t0){e.next=6;break}return e.next=5,t.json();case 5:e.t0=e.sent;case 6:if(c=e.t0,t.ok){e.next=10;break}return s=c&&c.message||t.status,e.abrupt("return",Promise.reject(s));case 10:201===t.status&&v(t.status),o.unshift(c),O((function(e){return[].concat(Object(i.a)(e),[o])}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w()})),Object(x.jsxs)(b.a,{fluid:"md",children:[Object(x.jsx)(d.a,{className:"justify-content-md-center",children:Object(x.jsx)("h1",{children:"Messenger"})}),Object(x.jsx)(d.a,{children:Object(x.jsx)(m.a,{children:Object(x.jsx)(g,{postData:S,status:p})})}),Object(x.jsx)(d.a,{className:"mt-5",children:Object(x.jsxs)(m.a,{children:[!n&&Object(x.jsx)("div",{children:"Loading messages..."}),Object(x.jsx)(k,{items:o})]})})]})};n(32);r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.895a9b2a.chunk.js.map