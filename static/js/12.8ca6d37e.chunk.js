(this["webpackJsonpmovie-cloud"]=this["webpackJsonpmovie-cloud"]||[]).push([[12],{48:function(e,t,c){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsBAMAAAB01OGNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURerq6svLy8fHx8/Pz+jo6NPT08bGxuLi4t7e3sPDw8rKys7Ozu3t7djY2M3NzVAueEoAAASuSURBVHja7Z2BZxxpGMYHcwI9rHPF1OEGo45Db6xzNxIfvtpDDtdcTu5OsHNuSMnBbexxLWUbHa0tiuqimEQrplpilepKFAUsmiZpa0lgVaur+Rv6fTNbQN5v5nu703b7PhJZvPaXJ/u+7/PNBzE4r49QPJHBCxBBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghDk/UEqeaQJ+Wkvj87rQZZny+WZ2axfT00dyHSjPJtD3+tBdguAsCIg09vlHHJf6EG2jh0cdIQ2DyAN0pL1NT3Ifr/TdoW8DqRhyZQehO33XbcUx9EXLqQpS5T0XU/biduZD8PmdhukPAvDvT/bCEhfzDFbgqx4GzXOJ7YxEFe++BmCTN2TJQ0MpJ0Rsox1wtQQtkxOCnPSrimdvGbo7npar1cafWgW716o1/+bwUC8KbH7BuDAe2JDDjzMWnHlCnRhecmWxEAyiyCFQby32Xe40t7AtPBmp6Nq4SSEUU7mwjDc7quSsYkaxv65I0eMs2DIb0wbholORvb5qBdkUXky+lX/ySVjA3u442ALe69FeFZwyagexufoYZSLyWuDy6sjatqotTJcTMrdRclIkA8VUkQLe/JSwgWHsS1KZlDHVHngro/6wJ3h0WED+egw6PSTVX8MuJBYf5ms+sGm5o1EL45XE8g3MaDbsuRSHB/Xc9KLhpCvAYa1lkKs45pOotIQUjpcVuoksrSdZIGsoSDSya3kIAE7MTg3UE4imfFLEQiRGb+PcRJNihvfXyBI6db83t7uCYwTSzZQBELSJishnCRvATKS32MlKiGcZBfGyaghY+ZE/cEPSxBOrLQ/Vd0VWxgn0XMRvydAK5GM31eoiU/iF1wrN2T8bmEm/k6NGeZJeEEy0+SXsVt4PPJklZzkdaKI369kLaq7oh3OzSUQckPGL2pOovJulomfXcc4sSwRrIrdZUUl/fjNs4UpGcmJhpMV27YVLSwqbFTGx1+KSbuvHsZXqInf4abZUKwVxie2MBN/R75QxS/lCTnRdsJOquNX38kT37Z/NQxzy7cPl/PX+QfGxI+2c+2hFuS3IAjktYoTQPLFpciK+KkLEQ6St7EhOWmJg4BkFkHGC+IouytpQBTEWWi1WldgC6KihWphf1WchY+CEF8cl2duYiCnH3W73f8hK87fZ7rdhz0fAalybrLPQMiiKOEXMZDTScaDkG/l9kVDmALC3wWEFwEZuZOq2ski/jOR98L/qrqLc1QL+3PiCqgHxu8/4iLp7HcYSJC8D7i8/LQEs7uCdP2p4jegPCHIBwop4gQphixwHDh+AyfwHVTGT4Zh8xRopToXhstHUbvrnGEYqow3jIneRxG/45GMhTkZ+WdSrSn/XIsGPuMZ4w24hWuMVU6h5mSy2Wz+AWZ8db7Z3MUN44JcTL7q8QQZv8HCgjLjr15FLcj0GSqAlT6PaUPsPNKE/N7Ko+t6kB+KgOR0oncV9TgX5JrepdrSSvaThOPvcB0Ir4R5xPUg3OTZZepC3pUIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgYwEZ7b99rYjvN4EKGyoX9+pBAAAAAElFTkSuQmCC"},49:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(9),i=c.n(a),r=c(14),n=c(13),o=c(1),h=(c(49),c(11)),d=c(50),u=c(8),p=c(48);t.default=function(){var e=Object(o.useState)({moviesTopRated:[]}),t=Object(n.a)(e,2),c=t[0],a=t[1],l=function(){var e=Object(r.a)(i.a.mark((function e(){var t,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,a({moviesTopRated:s.results}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){l()}),[]);var A=c.moviesTopRated;return Object(s.jsxs)("div",{id:"discover-item",className:"container",children:[Object(s.jsx)("div",{className:"discover-header",children:Object(s.jsx)("h1",{children:"TOP RATED MOVIES"})}),Object(s.jsx)("div",{className:"discover-content",children:A.map((function(e){return Object(s.jsxs)("div",{className:"discover-content-item",children:[Object(s.jsx)(u.b,{to:{pathname:"/details/movie/".concat(e.id),state:{id:e.id}},children:Object(s.jsx)("img",{src:e.backdrop_path||e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path||e.backdrop_path):p.a,alt:e.original_title})}),Object(s.jsx)("div",{className:"discover-content-item-footer",children:Object(s.jsxs)("p",{children:[e.release_date?Object(s.jsxs)("span",{className:"HiClock",children:[Object(s.jsx)(d.a,{})," ",e.release_date.slice(0,4)]}):null,null!==e.vote_average?Object(s.jsxs)("span",{className:"IoIosStar",children:[Object(s.jsx)(h.c,{})," ",e.vote_average||0]}):null]})})]},e.id)}))})]})}}}]);
//# sourceMappingURL=12.8ca6d37e.chunk.js.map