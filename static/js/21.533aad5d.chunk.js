(this["webpackJsonpmovie-cloud"]=this["webpackJsonpmovie-cloud"]||[]).push([[21],{80:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),l=a(13),i=a(12),c=a(1),s=a.n(c),o=(a(80),a(7)),m=a(10),d=a(50),v=a(52),p=a.n(v);a(53),a(54);t.default=function(){var e=Object(c.useState)({all:[],movieTrendingWeek:[],tvTrendingWeek:[],tvTrendingDay:[]}),t=Object(i.a)(e,2),a=t[0],n=t[1],v="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),E="https://api.themoviedb.org/3/trending/tv/week?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),g="https://api.themoviedb.org/3/trending/tv/day?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),u=function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[fetch(v),fetch(E),fetch(g)],e.next=4,Promise.all(t);case 4:return a=e.sent,e.next=7,Promise.all(a.map((function(e){return e.json()})));case 7:l=e.sent,n({movieTrendingWeek:l[0].results,tvTrendingWeek:l[1].results,tvTrendingDay:l[2].results}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){u()}),[]);var h={dots:!1,infinite:!1,slidesToShow:1,slidesToScroll:1,autoplay:!1,speed:3e3,autoplaySpeed:2e3,pauseOnHover:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]},N=a.movieTrendingWeek,b=a.tvTrendingWeek,w=a.tvTrendingDay;return s.a.createElement("div",{id:"discover"},s.a.createElement("div",{className:"discover-trends"},s.a.createElement("div",{className:"discover-trends-movies"},s.a.createElement("div",{className:"discover-trends-movies-main_container"},s.a.createElement("div",{className:"discover-trends-movies-container-header"},s.a.createElement("span",null,"MOVIES TRENDING THIS WEEK"),s.a.createElement("span",null,s.a.createElement(o.b,{to:"/discover/movie/trending-week"},"SEE MORE"))),s.a.createElement("div",{className:"discover-trends-movies-container-content"},s.a.createElement(p.a,h,N.map((function(e){return s.a.createElement("div",{className:"discover-trends-movies-container-item",key:e.id},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280".concat(e.backdrop_path||e.poster_path),alt:e.title}),s.a.createElement("div",{className:"discover-trends-movies-container-item-content"},s.a.createElement(o.b,{to:{pathname:"/details/movie/".concat(e.id),state:{id:e.id}}},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:e.title})),s.a.createElement("div",{className:"discover-trends-movies-item-footer"},s.a.createElement("p",null,e.release_date?s.a.createElement("span",{className:"HiClock"},s.a.createElement(d.a,null)," ",e.release_date.slice(0,4)):null,e.vote_average?s.a.createElement("span",{className:"IoIosStar"},s.a.createElement(m.c,null)," ",e.vote_average||0):null))))})))))),s.a.createElement("div",{className:"discover-trends-tv"},s.a.createElement("div",{className:"discover-trends-tv-main_container"},s.a.createElement("div",{className:"discover-trends-tv-container-header"},s.a.createElement("span",null,"TV SHOWS TRENDING THIS WEEK"),s.a.createElement("span",null,s.a.createElement(o.b,{to:"/discover/tv/trending-week"},"SEE MORE"))),s.a.createElement("div",{className:"discover-trends-tv-container-content"},s.a.createElement(p.a,h,b.map((function(e){return s.a.createElement("div",{className:"discover-trends-tv-container-item",key:e.id},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280".concat(e.backdrop_path||e.poster_path),alt:e.title}),s.a.createElement("div",{className:"discover-trends-tv-container-item-content"},s.a.createElement(o.b,{to:{pathname:"/details/tv/".concat(e.id),state:{id:e.id}}},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:e.title})),s.a.createElement("div",{className:"discover-trends-tv-item-footer"},s.a.createElement("p",null,e.first_air_date?s.a.createElement("span",{className:"HiClock"},s.a.createElement(d.a,null)," ",e.first_air_date.slice(0,4)):null,e.vote_average?s.a.createElement("span",{className:"IoIosStar"},s.a.createElement(m.c,null)," ",e.vote_average||0):null))))}))))))),s.a.createElement("div",{className:"discover-all"},s.a.createElement(o.b,{to:"/discover/movie/upcoming",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/4gKyQ1McHa8ZKDsYoyKQSevF01J.jpg",alt:"movie-upcoming"}),s.a.createElement("div",null,s.a.createElement(d.a,null),s.a.createElement("span",null,"Upcoming Movies"))),s.a.createElement(o.b,{to:"/discover/movie/popular",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",alt:"movie-popular"}),s.a.createElement("div",null,s.a.createElement(m.d,null),s.a.createElement("span",null,"Popular Movies"))),s.a.createElement(o.b,{to:"/discover/movie/now-playing",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",alt:"movie-now-playing"}),s.a.createElement("div",null,s.a.createElement(m.b,null),s.a.createElement("span",null,"Now Playing Movies"))),s.a.createElement(o.b,{to:"/discover/movie/top-rated",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",alt:"movie-top-rated"}),s.a.createElement("div",null,s.a.createElement(m.e,null),s.a.createElement("span",null,"Top Rated Movies"))),s.a.createElement(o.b,{to:"/discover/tv/airing-today",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/adZ9ldSlkGfLfsHNbh37ZThCcgU.jpg",alt:"tv-airing-today"}),s.a.createElement("div",null,s.a.createElement(m.b,null),s.a.createElement("span",null,"Airing Today TV Shows"))),s.a.createElement(o.b,{to:"/discover/tv/popular",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/hTExot1sfn7dHZjGrk0Aiwpntxt.jpg",alt:"tv-popular"}),s.a.createElement("div",null,s.a.createElement(m.d,null),s.a.createElement("span",null,"Popular TV Shows"))),s.a.createElement(o.b,{to:"/discover/tv/on-the-air",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg",alt:"tv-on-the-air"}),s.a.createElement("div",null,s.a.createElement(d.a,null),s.a.createElement("span",null,"On The Air TV Shows"))),s.a.createElement(o.b,{to:"/discover/tv/top-rated",className:"discover-all-item"},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w400/92OPBZpLc82y8CzOtrQ8P9RDvIN.jpg",alt:"tv-top-rated"}),s.a.createElement("div",null,s.a.createElement(m.e,null),s.a.createElement("span",null,"Top Rated TV Shows")))),s.a.createElement("div",{className:"discover-tvtrending"},s.a.createElement("div",{className:"discover-tvtrending-main_container"},s.a.createElement("div",{className:"discover-tvtrending-container-header"},s.a.createElement("span",null,"TV SHOWS TRENDING TODAY"),s.a.createElement("span",null,s.a.createElement(o.b,{to:"discover/tv/trending-today"},"SEE MORE"))),s.a.createElement("div",{className:"discover-tvtrending-container-content"},s.a.createElement(p.a,h,w.map((function(e){return s.a.createElement("div",{className:"discover-tvtrending-container-item",key:e.id},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280".concat(e.backdrop_path||e.poster_path),alt:e.title}),s.a.createElement("div",{className:"discover-tvtrending-container-item-content"},s.a.createElement("div",{className:"discover-tvtrending-container-item-content-item"},s.a.createElement(o.b,{to:{pathname:"/details/tv/".concat(e.id),state:{id:e.id}}},s.a.createElement("img",{src:"https://image.tmdb.org/t/p/w1280".concat(e.poster_path),alt:e.title})),s.a.createElement("div",{className:"discover-tvtrending-item-footer"},s.a.createElement("p",null,e.first_air_date?s.a.createElement("span",{className:"HiClock"},s.a.createElement(d.a,null)," ",e.first_air_date.slice(0,4)):null,e.vote_average?s.a.createElement("span",{className:"IoIosStar"},s.a.createElement(m.c,null)," ",e.vote_average||0):null))),s.a.createElement("div",{className:"discover-tvtrending-container-item-content-item-description"},s.a.createElement("span",null,e.name),s.a.createElement("span",null,e.overview.split(" ").length>30?e.overview.split(" ").slice(0,20).join(" ")+".":e.overview))))})))))))}}}]);
//# sourceMappingURL=21.533aad5d.chunk.js.map