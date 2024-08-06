"use strict";(self.webpackChunkmovie_cloud=self.webpackChunkmovie_cloud||[]).push([[535],{1637:(e,s,i)=>{i.r(s),i.d(s,{default:()=>g});var a=i(2791),t=i(2995),n=i(6095),r=i(1087),l=i(5717),d=(i(3037),i(8688),i(184));const o="https://image.tmdb.org/t/p/w1280",m=()=>{const{moviesUpcoming:e,tvAiringToday:s,type:i,loading:m}=(0,a.useContext)(n.Z),c={dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,speed:3e3,autoplaySpeed:8e3,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]},h=[],p=[],x=[],v=[],j=[],g=[],u=[],y=[],N=[],T=[],S=[],_=[];return(()=>{const a={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},t={genres:[{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}]};let n;"movie"===i&&(n=e.slice(0,3)||[],n&&a.genres&&n.forEach((e=>{e.genre_ids=a.genres.filter((s=>s.id===e.genre_ids[0])).map((e=>h.push(e.name))),p.push(e.title),v.push(e.release_date.slice(0,4)),x.push(e.backdrop_path||e.poster_path),j.push(e.vote_average.toFixed(1)),g.push(e.id)}))),"tv"===i&&(n=s.slice(0,3)||[],n&&t.genres&&n.forEach((e=>{e.genre_ids=t.genres.filter((s=>s.id===e.genre_ids[0])).map((e=>u.push(e.name))),y.push(e.name),T.push(e.first_air_date.slice(0,4)),N.push(e.backdrop_path||e.poster_path),S.push(e.vote_average.toFixed(1)),_.push(e.id)})))})(),(0,d.jsx)(d.Fragment,{children:!0===m?(0,d.jsxs)("div",{className:"header",children:["movie"===i?(0,d.jsx)("div",{className:"main_container_header",children:(0,d.jsx)("div",{className:"container-content",children:(0,d.jsxs)(l.Z,{...c,children:[(0,d.jsx)("div",{className:"header-item",children:(0,d.jsxs)(r.rU,{to:{pathname:`/movie/${g[0]}`,state:{id:g[0]}},children:[(0,d.jsx)("img",{src:o+x[0],alt:p[0]}),(0,d.jsxs)("div",{className:"item-text",children:[(0,d.jsx)("span",{className:"header-title",children:"Upcoming"}),(0,d.jsx)("span",{className:"header-title-name",children:p[0]}),(0,d.jsxs)("span",{className:"header-year-rating",children:[h[0]," | ",v[0]," | ",j[0]," ","Rating"]})]})]})}),(0,d.jsx)("div",{className:"header-item",children:(0,d.jsxs)(r.rU,{to:{pathname:`/movie/${g[1]}`,state:{id:g[1]}},children:[(0,d.jsx)("img",{src:o+x[1],alt:p[1]}),(0,d.jsxs)("div",{className:"item-text",children:[(0,d.jsx)("span",{className:"header-title",children:"Upcoming"}),(0,d.jsx)("span",{className:"header-title-name",children:p[1]}),(0,d.jsxs)("span",{className:"header-year-rating",children:[h[1]," | ",v[1]," | ",j[1]," ","Rating"]})]})]})}),(0,d.jsx)("div",{className:"header-item",children:(0,d.jsxs)(r.rU,{to:{pathname:`/movie/${g[2]}`,state:{id:g[2]}},children:[(0,d.jsx)("img",{src:o+x[2],alt:p[2]}),(0,d.jsxs)("div",{className:"item-text",children:[(0,d.jsx)("span",{className:"header-title",children:"Upcoming"}),(0,d.jsx)("span",{className:"header-title-name",children:p[2]}),(0,d.jsxs)("span",{className:"header-year-rating",children:[h[2]," | ",v[2]," | ",j[2]," ","Rating"]})]})]})})]})})}):null,"tv"===i?(0,d.jsx)("div",{className:"main_container_header",children:(0,d.jsx)("div",{className:"container-content",children:(0,d.jsxs)(l.Z,{...c,children:[(0,d.jsx)("div",{className:"header-item",children:(0,d.jsxs)(r.rU,{to:{pathname:`/tv/${_[0]}`,state:{id:_[0]}},children:[(0,d.jsx)("img",{src:o+N[0],alt:y[0]}),(0,d.jsxs)("div",{className:"item-text",children:[(0,d.jsx)("span",{className:"header-title",children:"Airing Today"}),(0,d.jsx)("span",{className:"header-title-name",children:y[0]}),(0,d.jsxs)("span",{className:"header-year-rating",children:[u[0]," | ",T[0]," | ",S[0]," Rating"]})]})]})}),(0,d.jsx)("div",{className:"header-item",children:(0,d.jsxs)(r.rU,{to:{pathname:`/tv/${_[1]}`,state:{id:_[1]}},children:[(0,d.jsx)("img",{src:o+N[1],alt:y[1]}),(0,d.jsxs)("div",{className:"item-text",children:[(0,d.jsx)("span",{className:"header-title",children:"Airing Today"}),(0,d.jsx)("span",{className:"header-title-name",children:y[1]}),(0,d.jsxs)("span",{className:"header-year-rating",children:[u[1]," | ",T[1]," | ",S[1]," Rating"]})]})]})}),(0,d.jsx)("div",{className:"header-item",children:(0,d.jsxs)(r.rU,{to:{pathname:`/tv/${_[2]}`,state:{id:_[2]}},children:[(0,d.jsx)("img",{src:o+N[2],alt:y[2]}),(0,d.jsxs)("div",{className:"item-text",children:[(0,d.jsx)("span",{className:"header-title",children:"Airing Today"}),(0,d.jsx)("span",{className:"header-title-name",children:y[2]}),(0,d.jsxs)("span",{className:"header-year-rating",children:[u[2]," | ",T[2]," | ",S[2]," Rating"]})]})]})})]})})}):null]}):(0,d.jsx)(t.Z,{})})},c=()=>{const{type:e,handleMovies:s,handleTV:i,loading:t}=(0,a.useContext)(n.Z),[,r]=(0,a.useState)(n.Z);return(0,a.useEffect)((()=>{e||localStorage.setItem("type",e)||s()}),[]),(0,a.useEffect)((()=>{"movie"===e?s():"tv"===e&&i()}),[]),(0,d.jsx)(d.Fragment,{children:!0===t?(0,d.jsxs)("div",{className:"MoviesOrTv container",children:[(0,d.jsx)("button",{className:` btn btn-outline-primary ${"movie"===e?"btn-selected":null}`,onClick:()=>{s(),r({type:"movie"})},children:"MOVIES"}),(0,d.jsx)("button",{className:` btn btn-outline-primary ${"tv"===e?"btn-selected":null}`,onClick:()=>{i(),r({type:"tv"})},children:"TV SHOWS"})]}):null})};var h=i(1863),p=i(4330),x=i(358);const v=e=>{let{title:s,movies:i,type:a}=e;return(0,d.jsxs)("div",{className:"main_container",children:[(0,d.jsx)("div",{className:"container-header",children:(0,d.jsx)("h2",{className:"container-header--title",children:s})}),(0,d.jsx)("div",{className:"container-content",children:(0,d.jsx)(l.Z,{...h.Z,children:i.map((e=>{return(0,d.jsxs)("div",{className:"item",children:[(0,d.jsx)(r.rU,{to:{pathname:""+(s=e,"movie"===a?`/movie/${s.id}`:`/tv/${s.id}`),state:{id:e.id}},children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:e.name})}),(0,d.jsx)("div",{className:"item-footer",children:(0,d.jsxs)("p",{children:[(0,d.jsxs)("span",{children:[(0,d.jsx)(x.QCV,{}),"movie"===a?e.release_date&&e.release_date.slice(0,4):"tv"===a?e.first_air_date&&e.first_air_date.slice(0,4):"N/A"]}),(0,d.jsxs)("span",{children:[(0,d.jsx)(p.M2b,{})," ",e.vote_average.toFixed(1)||0]})]})})]},e.id);var s}))})})]})},j=()=>{const{moviesUpcoming:e,moviesPopular:s,moviesNowPlaying:i,moviesTopRated:t,tvAiringToday:r,tvPopular:l,tvOnTheAir:o,tvTopRated:m,type:c,loading:h}=(0,a.useContext)(n.Z);let p;return"movie"===c&&(p=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{movies:e,title:"Upcoming",type:"movie"}),(0,d.jsx)(v,{movies:s,title:"Popular",type:"movie"}),(0,d.jsx)(v,{movies:i,title:"Now Playing",type:"movie"}),(0,d.jsx)(v,{movies:t,title:"Top Rated",type:"movie"})]})),"tv"===c&&(p=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{movies:r,title:"Airing Today",type:"tv"}),(0,d.jsx)(v,{movies:l,title:"Popular",type:"tv"}),(0,d.jsx)(v,{movies:o,title:"On The Air",type:"tv"}),(0,d.jsx)(v,{movies:m,title:"Top Rated",type:"tv"})]})),(0,d.jsx)("div",{className:"content container",children:!0===h?p:null})},g=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)(c,{}),(0,d.jsx)(j,{})]})},1863:(e,s,i)=>{i.d(s,{Z:()=>a});const a={dots:!1,infinite:!1,slidesToShow:7,slidesToScroll:1,autoplay:!1,speed:3e3,autoplaySpeed:2e3,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1}}]}}}]);
//# sourceMappingURL=535.e8a4a11e.chunk.js.map