(this.webpackJsonpmoviemovie=this.webpackJsonpmoviemovie||[]).push([[0],{57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),i=n.n(a),c=n(29),r=n.n(c),o=n(8),j=n(2),l=n(17),m=n.n(l),u=n(30),d=n(11),h=n(12),b=n(14),v=n(13),p=n(31),O=n.n(p);n(57);var x=function(e){var t=e.id,n=e.year,a=e.title,i=e.summary,c=e.poster,r=e.genres;return Object(s.jsx)("div",{className:"movie",children:Object(s.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:i,poster:c,genres:r}},children:[Object(s.jsx)("img",{src:c,alt:a,title:a}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:a}),Object(s.jsx)("h5",{className:"movie__year",children:n}),Object(s.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[i.slice(0,180),"..."]})]})]})})},f=(n(63),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("img",{src:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",alt:"loading"})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(i.a.Component));n(64);var g=function(e){return Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(s.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},y=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:Object(s.jsx)("span",{children:e.state.title})}),Object(s.jsx)("img",{src:e.state.poster,alt:e.state.title})]}):null}}]),n}(i.a.Component);n(65);var _=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};n(66);var N=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(j.a,{path:"/",exact:!0,component:f}),Object(s.jsx)(j.a,{path:"/about",component:g}),Object(s.jsx)(j.a,{path:"/movie/:id",component:y})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.41c8b3c9.chunk.js.map