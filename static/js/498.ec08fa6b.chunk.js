"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[498],{123:function(e,t,r){r.d(t,{Df:function(){return s},Gc:function(){return d},Op:function(){return f},jr:function(){return v},t2:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(243),i="https://api.themoviedb.org/3/",o="7b9bc8a9cecedcc4e50de44b7a3d7df5",s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"trending/all/day?api_key=").concat(o));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results.map((function(e){return{id:e.id,title:e.title}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a,s,p,f,d,v;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return r=e.sent,n=r.data,a=n.poster_path,s=n.title,p=n.release_date,f=n.vote_average,d=n.overview,v=n.genres,e.abrupt("return",{poster_path:a,title:s,release_date:p,vote_average:f,overview:d,genres:v});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return r=e.sent,n=r.data,console.log(n.results),e.abrupt("return",n.results.map((function(e){return{id:e.id,title:e.title}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast.map((function(e){return{id:e.id,profile_path:e.profile_path,name:e.name,character:e.character}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},323:function(e,t,r){r.d(t,{a:function(){return u}});var n="Loader_wrap__WJ0KW",a="Loader_spinner__DydzZ",c=r(184),u=function(){return(0,c.jsx)("div",{className:n,children:(0,c.jsx)("div",{className:a})})}},498:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(689),o=r(791),s=r(184),p=function(e){var t=e.reviews;return(0,s.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{children:["Author:",r]}),(0,s.jsx)("p",{children:n})]},t)}))})},f=r(123),d=r(323),v=function(){var e=(0,i.UO)().movieId,t=(0,o.useState)([]),r=(0,a.Z)(t,2),c=r[0],v=r[1],l=(0,o.useState)(!1),h=(0,a.Z)(l,2),m=h[0],w=h[1],x=(0,o.useState)(null),_=(0,a.Z)(x,2)[1];return(0,o.useEffect)((function(){(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,f.jr)(e);case 4:r=t.sent,v(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),_("Oops");case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))()}),[e]),(0,s.jsxs)("div",{children:[0!==c.length?(0,s.jsx)(p,{reviews:c}):(0,s.jsx)("p",{children:"We, don't have any reviews for this movie."}),m&&(0,s.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=498.ec08fa6b.chunk.js.map