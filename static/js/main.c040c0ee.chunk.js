(this.webpackJsonplookmanoredux=this.webpackJsonplookmanoredux||[]).push([[1],{11:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),c=a(9),l=a(10),i=a(4),u=r.a.createContext(),d={episodes:[],favorites:[]};function p(e,t){switch(t.type){case"FETCH_DATA":return Object(i.a)({},e,{episodes:t.payload});case"ADD_FAV":return Object(i.a)({},e,{favorites:[].concat(Object(l.a)(e.favorites),[t.payload])});case"REMOVE_FAV":return Object(i.a)({},e,{favorites:t.payload});default:return e}}var f=a(2);var v=a(3),m=a.n(v),E=r.a.lazy((function(){return a.e(0).then(a.bind(null,27))}));var h=r.a.lazy((function(){return a.e(0).then(a.bind(null,27))}));a(25);s.a.render(r.a.createElement((function(e){var t=r.a.useReducer(p,d),a=Object(c.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(u.Provider,{value:n},e.children)}),null,r.a.createElement((function(e){var t=r.a.useContext(u).state;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",null,r.a.createElement("h1",null,"The Big Bang Theory"),r.a.createElement("p",null,"Pick your favorite episodes")),r.a.createElement("div",null,r.a.createElement(f.a,{to:"/"},"Home"),r.a.createElement(f.a,{to:"/faves"},"Favorite(s) ",t.favorites.length))),e.children)}),null,r.a.createElement(f.b,null,r.a.createElement((function(){var e=r.a.useContext(u),t=e.state,a=e.dispatch,n={episodes:t.episodes,toggleFavAction:function(e){var n=t.favorites.includes(e),r={type:"ADD_FAV",payload:e};n&&(r={type:"REMOVE_FAV",payload:t.favorites.filter((function(t){return t.id!==e.id}))});return a(r)},favorites:t.favorites};return r.a.useEffect((function(){0===t.episodes.length&&function(){var e,t;m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(fetch("https://api.tvmaze.com/singlesearch/shows?q=the-big-bang-theory&embed=episodes"));case 2:return e=n.sent,n.next=5,m.a.awrap(e.json());case 5:return t=n.sent,n.abrupt("return",a({type:"FETCH_DATA",payload:t._embedded.episodes}));case 7:case"end":return n.stop()}}))}()})),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("section",{className:"episode-layout"},r.a.createElement(E,n))))}),{path:"/"}),r.a.createElement((function(){var e=r.a.useContext(u),t=e.state,a=e.dispatch,n={episodes:t.favorites,toggleFavAction:function(e){var n=t.favorites.includes(e),r={type:"ADD_FAV",payload:e};n&&(r={type:"REMOVE_FAV",payload:t.favorites.filter((function(t){return t.id!==e.id}))});return a(r)},favorites:t.favorites};return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",{className:"episode-layout"},r.a.createElement(h,n)))}),{path:"/faves"})))),document.getElementById("root"))}},[[11,2,3]]]);
//# sourceMappingURL=main.c040c0ee.chunk.js.map