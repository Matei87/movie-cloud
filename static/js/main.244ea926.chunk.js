(this["webpackJsonpmovie-cloud"]=this["webpackJsonpmovie-cloud"]||[]).push([[2],{14:function(e,t,a){"use strict";var n=a(1),r=Object(n.createContext)();t.a=r},19:function(e,t,a){"use strict";var n=a(1),r=a.n(n);a(33);t.a=function(){return r.a.createElement("div",{className:"loader-overlay"},r.a.createElement("div",{className:"loader"}))}},23:function(e,t,a){e.exports=a.p+"static/media/moviecloudresized.0b22b9a5.png"},28:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(24),o=a.n(l),c=a(7),i=a(2),u=a(19),m=Object(i.h)((function(e){var t=Object(i.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[t]),e.children})),s=a(8),p=a.n(s),d=a(13),v=a(12),h=a(14),f=function(e){var t={multiSearch:[],moviesPopular:[],moviesTopRated:[],moviesNowPlaying:[],moviesUpcoming:[],tvAiringToday:[],tvPopular:[],tvOnTheAir:[],tvTopRated:[],loading:!1,type:localStorage.getItem("type")||""},a=Object(n.useState)(t),l=Object(v.a)(a,2),o=l[0],c=l[1],i="https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),u="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),m="https://api.themoviedb.org/3/movie/popular?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),s="https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),f="https://api.themoviedb.org/3/tv/airing_today?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),b="https://api.themoviedb.org/3/tv/popular?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),g="https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),E="https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),y=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://api.themoviedb.org/3/search/multi?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,c({multiSearch:r.results}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[fetch(i),fetch(u),fetch(m),fetch(s)],e.next=4,Promise.all(t);case 4:return a=e.sent,e.next=7,Promise.all(a.map((function(e){return e.json()})));case 7:n=e.sent,c({moviesUpcoming:n[0].results,moviesNowPlaying:n[1].results,moviesPopular:n[2].results,moviesTopRated:n[3].results,type:localStorage.setItem("type","movie")||"movie",loading:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[fetch(f),fetch(b),fetch(g),fetch(E)],e.next=4,Promise.all(t);case 4:return a=e.sent,e.next=7,Promise.all(a.map((function(e){return e.json()})));case 7:n=e.sent,c({tvAiringToday:n[0].results,tvPopular:n[1].results,tvOnTheAir:n[2].results,tvTopRated:n[3].results,type:localStorage.setItem("type","tv")||"tv",loading:!0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.a.Provider,{value:{multiSearch:o.multiSearch,moviesPopular:o.moviesPopular,moviesTopRated:o.moviesTopRated,moviesNowPlaying:o.moviesNowPlaying,moviesUpcoming:o.moviesUpcoming,tvAiringToday:o.tvAiringToday,tvPopular:o.tvPopular,tvOnTheAir:o.tvOnTheAir,tvTopRated:o.tvTopRated,type:o.type,loading:o.loading,handleMovies:O,handleTV:x,handleSearch:y,data:o,setData:c}},e.children)},b=(a(39),a(26)),g=a(10),E=Object(i.h)((function(){var e=Object(n.useContext)(h.a).handleSearch,t=Object(n.useState)(""),l=Object(v.a)(t,2),o=l[0],u=l[1],m=Object(i.f)();return r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:a(23),alt:"logo"})),r.a.createElement("form",{className:"",onSubmit:function(t){t.preventDefault(),e(t.target[0].value),m.push("/search"),u("")}},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search...","aria-label":"Search",value:o,onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{className:"btn",type:"submit"},r.a.createElement(g.h,null))),r.a.createElement("ul",{id:"customElements"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},r.a.createElement(b.a,null))),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/discover"},r.a.createElement(g.a,null)))))})),y=(a(40),a(27)),O=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-links"},r.a.createElement("h2",null,"MOVIE CLOUD"),r.a.createElement("div",{className:"footer-link"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/discover"},"Discover")),r.a.createElement("div",{className:"footer-copy"},"Made by ",r.a.createElement("span",null,"Matei Mircea")," @ ",(new Date).getFullYear())),r.a.createElement("div",{className:"footer-image"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:a(23),alt:"logo"}))),r.a.createElement("div",{className:"footer-contact"},r.a.createElement("a",{href:"mailto: mrc.matei@protonmail.com"},r.a.createElement(y.a,null)),r.a.createElement("a",{href:"https://github.com/Matei87",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.f,null)),r.a.createElement("a",{href:"https://www.linkedin.com/in/mateimircea/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.g,null))))},x=(a(41),a(42),a(43),a(46),Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(5)]).then(a.bind(null,98))}))),j=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(6)]).then(a.bind(null,82))})),P=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(8)]).then(a.bind(null,83))})),k=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,84))})),S=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(21)]).then(a.bind(null,85))})),w=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,86))})),z=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,87))})),T=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,88))})),_=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,89))})),N=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,90))})),U=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,91))})),A=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,92))})),R=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,93))})),M=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,94))})),D=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,95))})),I=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,96))})),C=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,97))})),J=function(){return r.a.createElement(f,null,r.a.createElement(c.a,null,r.a.createElement(m,null,r.a.createElement(E,null),r.a.createElement(i.c,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(u.a,null)},r.a.createElement(i.a,{exact:!0,path:"/",component:x}),r.a.createElement(i.a,{exact:!0,path:"/details/movie/:id",component:j}),r.a.createElement(i.a,{exact:!0,path:"/details/tv/:id",component:P}),r.a.createElement(i.a,{exact:!0,path:"/details/person/:id",component:k}),r.a.createElement(i.a,{exact:!0,path:"/discover",component:S}),r.a.createElement(i.a,{exact:!0,path:"/discover/movie/upcoming",component:z}),r.a.createElement(i.a,{exact:!0,path:"/discover/movie/popular",component:w}),r.a.createElement(i.a,{exact:!0,path:"/discover/movie/now-playing",component:_}),r.a.createElement(i.a,{exact:!0,path:"/discover/movie/top-rated",component:T}),r.a.createElement(i.a,{exact:!0,path:"/discover/movie/trending-week",component:N}),r.a.createElement(i.a,{exact:!0,path:"/discover/tv/airing-today",component:U}),r.a.createElement(i.a,{exact:!0,path:"/discover/tv/popular",component:A}),r.a.createElement(i.a,{exact:!0,path:"/discover/tv/on-the-air",component:R}),r.a.createElement(i.a,{exact:!0,path:"/discover/tv/top-rated",component:M}),r.a.createElement(i.a,{exact:!0,path:"/discover/tv/trending-week",component:D}),r.a.createElement(i.a,{exact:!0,path:"/discover/tv/trending-today",component:I}),r.a.createElement(i.a,{exact:!0,path:"/search",component:C}))),r.a.createElement(O,null))))};o.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[28,3,4]]]);
//# sourceMappingURL=main.244ea926.chunk.js.map