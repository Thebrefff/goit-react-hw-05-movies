"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[807],{123:function(t,e,r){r.d(e,{Df:function(){return o},Gc:function(){return d},Op:function(){return f},jr:function(){return l},t2:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(243),i="https://api.themoviedb.org/3/",s="7b9bc8a9cecedcc4e50de44b7a3d7df5",o=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/all/day?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results.map((function(t){return{id:t.id,title:t.title}})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a,o,p,f,d,l;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(s));case 2:return r=t.sent,n=r.data,a=n.poster_path,o=n.title,p=n.release_date,f=n.vote_average,d=n.overview,l=n.genres,t.abrupt("return",{poster_path:a,title:o,release_date:p,vote_average:f,overview:d,genres:l});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(e));case 2:return r=t.sent,n=r.data,console.log(n.results),t.abrupt("return",n.results.map((function(t){return{id:t.id,title:t.title}})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast.map((function(t){return{id:t.id,profile_path:t.profile_path,name:t.name,character:t.character}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},807:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(689),s=r(791),o=r(184),p=function(t){var e=t.actors;return(0,o.jsx)("ul",{children:e.map((function(t){var e=t.id,r=t.profile_path,n=t.name,a=t.character;return(0,o.jsxs)("li",{children:[r?(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r),alt:n}):(0,o.jsx)("img",{src:"data:image/jpeg;base64,",alt:n,width:200}),(0,o.jsx)("h3",{children:n}),(0,o.jsx)("p",{children:a})]},e)}))})},f=r(123),d=r(323),l=function(){var t=(0,i.UO)().movieId,e=(0,s.useState)([]),r=(0,a.Z)(e,2),c=r[0],l=r[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),m=h[0],x=h[1],_=(0,s.useState)(null),w=(0,a.Z)(_,2)[1];return(0,s.useEffect)((function(){(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,f.Gc)(t);case 4:r=e.sent,l(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w("Oops");case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[t]),(0,o.jsxs)("div",{children:[(0,o.jsx)(p,{actors:c}),m&&(0,o.jsx)(d.a,{})]})}},323:function(t,e,r){r.d(e,{a:function(){return u}});var n="Loader_wrap__WJ0KW",a="Loader_spinner__DydzZ",c=r(184),u=function(){return(0,c.jsx)("div",{className:n,children:(0,c.jsx)("div",{className:a})})}}}]);
//# sourceMappingURL=807.83182754.chunk.js.map