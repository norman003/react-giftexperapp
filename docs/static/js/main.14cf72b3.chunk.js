(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(10),o=n(8),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})})};j.prototype={setCategories:n.n(o).a.func.isRequired};var d=n(11),l=n(6),p=n.n(l),f=n(9),b=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,r,c,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=FOYkOT079royqclhtkYi0gHNczreJog9"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){e.id;var t=e.title,n=e.url;return Object(r.jsxs)("div",{className:"card animate__fadeIn",children:[Object(r.jsx)("img",{src:n,alt:t}),Object(r.jsx)("p",{children:t})]})},h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){a({data:e,loading:!1})}))}),[e]),r}(t),a=n.data,i=n.loading;return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)("h3",{className:"animate__fadeIn",children:t}),i&&Object(r.jsx)("p",{className:"animate__flash",children:"Loading"}),Object(r.jsx)("div",{className:"carg-grid",children:a.map((function(e){return Object(r.jsx)(O,Object(d.a)({},e),e.id)}))})]})},g=function(){var e=Object(c.useState)(["one punch"]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GiftExpertApp"}),Object(r.jsx)(j,{setCategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(e){return Object(r.jsx)(h,{category:e},e)}))})]})},x=(n(20),document.querySelector("#root"));i.a.render(Object(r.jsx)(g,{}),x)}},[[21,1,2]]]);
//# sourceMappingURL=main.14cf72b3.chunk.js.map