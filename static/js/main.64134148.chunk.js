(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{39:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(14),r=a.n(c),l=a(4),s=a(15),i=a.n(s),u=function(){return i.a.get("https://randomuser.me/api/?inc=name,email,dob,picture,gender&results=10&nat=us")},j=a(0);function o(e){var t=e.fluid,a=e.children;return Object(j.jsx)("div",{className:"container".concat(t?"-fluid":""),children:a})}function d(e){var t=e.fluid,a=e.children;return Object(j.jsx)("div",{className:"row".concat(t?"-fluid":""),children:a})}function b(e){var t=e.size,a=e.children;return Object(j.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:a})}var f=function(e){return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.name}),Object(j.jsxs)("p",{className:"card-text",children:["Age: ",e.age]}),Object(j.jsxs)("p",{className:"card-text",children:["Contact: ",e.email]}),Object(j.jsx)("img",{alt:e.name,src:e.picture,style:{float:"right"}})]})})},m=a(3);function O(e){return Object(j.jsxs)("select",Object(m.a)(Object(m.a)({className:"form-select","aria-label":"Default select example"},e),{},{children:[Object(j.jsx)("option",{defaultValue:!0,value:"1",children:"Sort alphabetically"}),Object(j.jsx)("option",{value:"2",children:"Sort by age"})]}))}function h(e){return Object(j.jsxs)("select",Object(m.a)(Object(m.a)({className:"form-select","aria-label":"Default select example"},e),{},{children:[Object(j.jsx)("option",{defaultValue:!0,value:"0",children:"Show all"}),Object(j.jsx)("option",{defaultValue:!0,value:"1",children:"Men"}),Object(j.jsx)("option",{value:"2",children:"Women"})]}))}var x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(1),s=Object(l.a)(r,2),i=s[0],m=s[1],x=Object(n.useState)(0),v=Object(l.a)(x,2),g=v[0],p=v[1];return Object(n.useEffect)((function(){u().then((function(e){c(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)(o,{fluid:!0,children:[Object(j.jsx)(O,{onChange:function(e){"1"===e.target.value?m(1):"2"===e.target.value&&m(2)}}),Object(j.jsx)(h,{onChange:function(e){"0"===e.target.value?p(0):"1"===e.target.value?p(1):"2"===e.target.value&&p(2)}}),a.filter(0===g?function(e){return e.name.first.length>0}:1===g?function(e){return"male"===e.gender}:function(e){return"female"===e.gender}).sort(1===i?function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0}:function(e,t){return e.dob.age<t.dob.age?-1:e.dob.age>t.dob.age?1:0}).map((function(e){return Object(j.jsx)(d,{children:Object(j.jsx)(b,{size:"md-12",children:Object(j.jsx)(f,{name:e.name.first+" "+e.name.last,email:e.email,picture:e.picture.large,age:e.dob.age})})})}))]})};var v=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success",children:Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Directory"})})};var g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{}),Object(j.jsx)(x,{})]})};r.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.64134148.chunk.js.map