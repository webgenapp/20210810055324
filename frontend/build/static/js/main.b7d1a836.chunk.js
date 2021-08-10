(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(45),a=n.n(i),s=n(46),u="csrf-token",o="CSRF-Token";function j(e){var t;return null===(t=document.cookie.split("; ").find((function(t){return(null===t||void 0===t?void 0:t.split("=")[0])===e})))||void 0===t?void 0:t.split("=")[1]}var b=n.n(s).a.create({headers:[{name:o,value:j(u)}].reduce((function(e,t){return t.value&&(e[t.name]=t.value),e}),{})}),d=b,l=n(28),f=n(84),O=n(5),h=n(0);var p=function(e){var t=e.coffee,n=e.onSubmit,r={flavour:t?t.flavour:"",age:t?t.age:"",color:t?t.color:""};return Object(h.jsx)(O.c,{initialValues:r,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"flavour",placeholder:"Flavour"}),Object(h.jsx)(O.a,{type:"text",name:"age",placeholder:"Age"}),Object(h.jsx)(O.a,{type:"text",name:"color",placeholder:"Color"}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},v=n(8);var x=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(f.a)((function(e){return d.post("/api/v1/coffees",e)}),{onSuccess:function(){e.invalidateQueries("coffees")}});return Object(h.jsx)(p,{onSubmit:function(e,r){var c=r.setSubmitting;n.mutate(e),null===c||void 0===c||c(!1),t.push("/coffees")}})},m=n(83);function g(e){var t=e.coffee,n=e.handleEdit,r=e.handleDelete,c=e.handleDetail;return Object(h.jsxs)(h.Fragment,{children:[t.flavour,Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"detail"}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"delete"})]})}var S=function(){var e,t,n=Object(v.f)(),r=Object(l.b)(),c=Object(m.a)("coffees",(function(){return d.get("/api/v1/coffees").then((function(e){return e.data}))})),i=Object(f.a)((function(e){var t=e.id;return d.delete("/api/v1/coffees/".concat(t))}),{onSuccess:function(){r.invalidateQueries("coffees")}}),a=function(e){var t=e.id;n.push("/coffees/update/".concat(t))},s=function(e){var t=e.id;i.mutate({id:t})},u=function(e){var t=e.id;n.push("/coffees/detail/".concat(t))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[null===(e=c.data)||void 0===e?void 0:e.length," coffees"]}),Object(h.jsx)("ul",{children:null===(t=c.data)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(g,{coffee:e,handleDelete:s,handleEdit:a,handleDetail:u})},e.id)}))})]})};var y=function(){var e=Object(v.g)().id,t=Object(m.a)(["coffees",e],(function(){return d.get("/api/v1/coffees/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(h.jsx)("div",{children:"Loading..."});var r=n;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:r.flavour}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:r.age}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:r.color}),Object(h.jsx)("br",{})]})};var w=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),r=Object(m.a)(["coffees",e],(function(){return d.get("/api/v1/coffees/".concat(e)).then((function(e){return e.data}))})),c=r.data,i=r.isLoading,a=Object(f.a)((function(t){return d.put("/api/v1/coffees/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("coffees")}});if(i)return Object(h.jsx)("div",{children:"Loading..."});var s=c;return Object(h.jsx)(p,{coffee:s,onSubmit:function(e,t){var r=t.setSubmitting;a.mutate(e),null===r||void 0===r||r(!1),n.push("/coffees")}})};var C=function(e){var t=e.fruit,n=e.onSubmit,r={amount:t?t.amount:"",color:t?t.color:""};return Object(h.jsx)(O.c,{initialValues:r,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"amount",placeholder:"Amount"}),Object(h.jsx)(O.a,{type:"text",name:"color",placeholder:"Color"}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var k=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(f.a)((function(e){return d.post("/api/v1/fruits",e)}),{onSuccess:function(){e.invalidateQueries("fruits")}});return Object(h.jsx)(C,{onSubmit:function(e,r){var c=r.setSubmitting;n.mutate(e),null===c||void 0===c||c(!1),t.push("/fruits")}})};function L(e){var t=e.fruit,n=e.handleEdit,r=e.handleDelete,c=e.handleDetail;return Object(h.jsxs)(h.Fragment,{children:[t.amount,Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"detail"}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"delete"})]})}var D=function(){var e,t,n=Object(v.f)(),r=Object(l.b)(),c=Object(m.a)("fruits",(function(){return d.get("/api/v1/fruits").then((function(e){return e.data}))})),i=Object(f.a)((function(e){var t=e.id;return d.delete("/api/v1/fruits/".concat(t))}),{onSuccess:function(){r.invalidateQueries("fruits")}}),a=function(e){var t=e.id;n.push("/fruits/update/".concat(t))},s=function(e){var t=e.id;i.mutate({id:t})},u=function(e){var t=e.id;n.push("/fruits/detail/".concat(t))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[null===(e=c.data)||void 0===e?void 0:e.length," fruits"]}),Object(h.jsx)("ul",{children:null===(t=c.data)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(L,{fruit:e,handleDelete:s,handleEdit:a,handleDetail:u})},e.id)}))})]})};var F=function(){var e=Object(v.g)().id,t=Object(m.a)(["fruits",e],(function(){return d.get("/api/v1/fruits/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(h.jsx)("div",{children:"Loading..."});var r=n;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:r.amount}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:r.color}),Object(h.jsx)("br",{})]})};var Q=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),r=Object(m.a)(["fruits",e],(function(){return d.get("/api/v1/fruits/".concat(e)).then((function(e){return e.data}))})),c=r.data,i=r.isLoading,a=Object(f.a)((function(t){return d.put("/api/v1/fruits/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("fruits")}});if(i)return Object(h.jsx)("div",{children:"Loading..."});var s=c;return Object(h.jsx)(C,{fruit:s,onSubmit:function(e,t){var r=t.setSubmitting;a.mutate(e),null===r||void 0===r||r(!1),n.push("/fruits")}})};var E=function(e){var t=e.user,n=e.onSubmit,r={username:t?t.username:"",passwordHash:t?t.passwordHash:""};return Object(h.jsx)(O.c,{initialValues:r,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(h.jsx)(O.a,{type:"text",name:"passwordHash",placeholder:"PasswordHash"}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var H=function(){var e=Object(l.b)(),t=Object(v.f)(),n=Object(f.a)((function(e){return d.post("/api/v1/users",e)}),{onSuccess:function(){e.invalidateQueries("users")}});return Object(h.jsx)(E,{onSubmit:function(e,r){var c=r.setSubmitting;n.mutate(e),null===c||void 0===c||c(!1),t.push("/users")}})};function U(e){var t=e.user,n=e.handleEdit,r=e.handleDelete,c=e.handleDetail;return Object(h.jsxs)(h.Fragment,{children:[t.username,Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"detail"}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"delete"})]})}var N=function(){var e,t,n=Object(v.f)(),r=Object(l.b)(),c=Object(m.a)("users",(function(){return d.get("/api/v1/users").then((function(e){return e.data}))})),i=Object(f.a)((function(e){var t=e.id;return d.delete("/api/v1/users/".concat(t))}),{onSuccess:function(){r.invalidateQueries("users")}}),a=function(e){var t=e.id;n.push("/users/update/".concat(t))},s=function(e){var t=e.id;i.mutate({id:t})},u=function(e){var t=e.id;n.push("/users/detail/".concat(t))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[null===(e=c.data)||void 0===e?void 0:e.length," users"]}),Object(h.jsx)("ul",{children:null===(t=c.data)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(U,{user:e,handleDelete:s,handleEdit:a,handleDetail:u})},e.id)}))})]})};var R=function(){var e=Object(v.g)().id,t=Object(m.a)(["users",e],(function(){return d.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(h.jsx)("div",{children:"Loading..."});var r=n;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:r.username}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:r.passwordHash}),Object(h.jsx)("br",{})]})};var V=function(){var e=Object(v.g)().id,t=Object(l.b)(),n=Object(v.f)(),r=Object(m.a)(["users",e],(function(){return d.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),c=r.data,i=r.isLoading,a=Object(f.a)((function(t){return d.put("/api/v1/users/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("users")}});if(i)return Object(h.jsx)("div",{children:"Loading..."});var s=c;return Object(h.jsx)(E,{user:s,onSubmit:function(e,t){var r=t.setSubmitting;a.mutate(e),null===r||void 0===r||r(!1),n.push("/users")}})},P=n(23),A=n.n(P),J=n(30),B=n(31);var I=function(){var e=Object(r.useState)(""),t=Object(B.a)(e,2),n=t[0],c=t[1],i=Object(v.f)(),a=Object(l.b)(),s=function(e,t){var n=t.setSubmitting;if(e.response&&e.response.data){var r=e.response.data.error;r&&c(r)}null===n||void 0===n||n(!1)},u=function(){var e=Object(J.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,e.prev=1,e.next=4,d.post("/auth/login",t);case 4:return null===r||void 0===r||r(!1),e.next=7,a.invalidateQueries("user");case 7:i.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),s(e.t0,{setSubmitting:r});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsx)(O.c,{initialValues:{username:"",password:""},validate:function(){return{}},onSubmit:u,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(h.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),n&&Object(h.jsx)("div",{children:n}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Login"})]})}})};var M=function(){var e=Object(r.useState)(""),t=Object(B.a)(e,2),n=t[0],c=t[1],i=function(){var e=Object(J.a)(A.a.mark((function e(t,n){var r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,e.prev=1,e.next=4,d.post("/auth/register",t);case 4:null===r||void 0===r||r(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response&&e.t0.response.data&&(i=e.t0.response.data.error)&&c(i),null===r||void 0===r||r(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsx)(O.c,{initialValues:{username:"",email:"",password:"",passwordConfirm:""},validate:function(){return{}},onSubmit:i,children:function(e){var t=e.isSubmitting;return Object(h.jsxs)(O.b,{children:[Object(h.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(h.jsx)(O.a,{type:"text",name:"email",placeholder:"Email"}),Object(h.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),Object(h.jsx)(O.a,{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),n&&Object(h.jsx)("div",{children:n}),Object(h.jsx)("button",{type:"submit",disabled:t,children:"Register"})]})}})},T=n(7);var q=function(){return Object(m.a)("user",(function(){return d.get("/auth/me")}),{retry:!1}).data,Object(r.useEffect)((function(){j(u)||b.get("/auth/csrf").then((function(){b.defaults.headers[o]=j(u)})).catch((function(e){console.warn("Received error while fetching CSRF token :",e)}))}),[]),Object(h.jsxs)(T.a,{children:[Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"flex",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(T.b,{to:"/",children:"Home"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(T.b,{to:"/login",children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)(T.b,{to:"/register",children:"Register"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(T.b,{to:"/coffees",children:"Coffees"}),Object(h.jsx)("br",{}),Object(h.jsx)(T.b,{to:"/coffees/create",children:"Create a Coffee"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(T.b,{to:"/fruits",children:"Fruits"}),Object(h.jsx)("br",{}),Object(h.jsx)(T.b,{to:"/fruits/create",children:"Create a Fruit"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("li",{className:"ml-10",children:[Object(h.jsx)(T.b,{to:"/users",children:"Users"}),Object(h.jsx)("br",{}),Object(h.jsx)(T.b,{to:"/users/create",children:"Create a User"}),Object(h.jsx)("br",{})]})]})}),Object(h.jsxs)("main",{children:[Object(h.jsx)(v.a,{path:"/coffees",children:Object(h.jsx)("h1",{children:"Coffees"})}),Object(h.jsx)(v.a,{path:"/fruits",children:Object(h.jsx)("h1",{children:"Fruits"})}),Object(h.jsx)(v.a,{path:"/users",children:Object(h.jsx)("h1",{children:"Users"})}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{path:"/coffees/create",component:x}),Object(h.jsx)(v.a,{path:"/coffees/update/:id",component:w}),Object(h.jsx)(v.a,{path:"/coffees/detail/:id",component:y}),Object(h.jsx)(v.a,{path:"/coffees",component:S}),",",Object(h.jsx)(v.a,{path:"/fruits/create",component:k}),Object(h.jsx)(v.a,{path:"/fruits/update/:id",component:Q}),Object(h.jsx)(v.a,{path:"/fruits/detail/:id",component:F}),Object(h.jsx)(v.a,{path:"/fruits",component:D}),",",Object(h.jsx)(v.a,{path:"/users/create",component:H}),Object(h.jsx)(v.a,{path:"/users/update/:id",component:V}),Object(h.jsx)(v.a,{path:"/users/detail/:id",component:R}),Object(h.jsx)(v.a,{path:"/users",component:N}),Object(h.jsx)(v.a,{path:"/login",component:I}),Object(h.jsx)(v.a,{path:"/register",component:M})]})]})]})},z=new(n(82).a);a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l.a,{client:z,children:Object(h.jsx)(q,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.b7d1a836.chunk.js.map