(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(4),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=n(3),s=n.n(f),p=function(){return s.a.get("/api/notes").then((function(t){return t.data}))},b=function(t){return s.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,e){return s.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},E=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app made by Neeraj, Summer 2020"))},v=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),s=f[0],v=f[1],h=Object(a.useState)(!0),g=Object(i.a)(h,2),j=g[0],O=g[1],S=Object(a.useState)(null),k=Object(i.a)(S,2),y=k[0],N=k[1];Object(a.useEffect)((function(){p().then((function(t){o(t)}))}),[]);var w=j?n:n.filter((function(t){return!0===t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:y}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return O(!j)}},"show ",j?"important":"all")),r.a.createElement("ul",null,w.map((function(t,e){return r.a.createElement(l,{key:e,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});d(t,a).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){N("Note ".concat(e.content," was already removed from the server")),setTimeout((function(){N(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:s,date:(new Date).toISOString(),important:Math.random()<.5};b(e).then((function(t){o(n.concat(t)),v("")}))}},r.a.createElement("input",{value:s,onChange:function(t){v(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(E,null))};n(37);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4d1705c8.chunk.js.map