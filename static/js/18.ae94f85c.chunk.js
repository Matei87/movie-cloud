(this["webpackJsonpmovie-cloud"]=this["webpackJsonpmovie-cloud"]||[]).push([[18],{48:function(e,t,c){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsBAMAAAB01OGNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURerq6svLy8fHx8/Pz+jo6NPT08bGxuLi4t7e3sPDw8rKys7Ozu3t7djY2M3NzVAueEoAAASuSURBVHja7Z2BZxxpGMYHcwI9rHPF1OEGo45Db6xzNxIfvtpDDtdcTu5OsHNuSMnBbexxLWUbHa0tiuqimEQrplpilepKFAUsmiZpa0lgVaur+Rv6fTNbQN5v5nu703b7PhJZvPaXJ/u+7/PNBzE4r49QPJHBCxBBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghDk/UEqeaQJ+Wkvj87rQZZny+WZ2axfT00dyHSjPJtD3+tBdguAsCIg09vlHHJf6EG2jh0cdIQ2DyAN0pL1NT3Ifr/TdoW8DqRhyZQehO33XbcUx9EXLqQpS5T0XU/biduZD8PmdhukPAvDvT/bCEhfzDFbgqx4GzXOJ7YxEFe++BmCTN2TJQ0MpJ0Rsox1wtQQtkxOCnPSrimdvGbo7npar1cafWgW716o1/+bwUC8KbH7BuDAe2JDDjzMWnHlCnRhecmWxEAyiyCFQby32Xe40t7AtPBmp6Nq4SSEUU7mwjDc7quSsYkaxv65I0eMs2DIb0wbholORvb5qBdkUXky+lX/ySVjA3u442ALe69FeFZwyagexufoYZSLyWuDy6sjatqotTJcTMrdRclIkA8VUkQLe/JSwgWHsS1KZlDHVHngro/6wJ3h0WED+egw6PSTVX8MuJBYf5ms+sGm5o1EL45XE8g3MaDbsuRSHB/Xc9KLhpCvAYa1lkKs45pOotIQUjpcVuoksrSdZIGsoSDSya3kIAE7MTg3UE4imfFLEQiRGb+PcRJNihvfXyBI6db83t7uCYwTSzZQBELSJishnCRvATKS32MlKiGcZBfGyaghY+ZE/cEPSxBOrLQ/Vd0VWxgn0XMRvydAK5GM31eoiU/iF1wrN2T8bmEm/k6NGeZJeEEy0+SXsVt4PPJklZzkdaKI369kLaq7oh3OzSUQckPGL2pOovJulomfXcc4sSwRrIrdZUUl/fjNs4UpGcmJhpMV27YVLSwqbFTGx1+KSbuvHsZXqInf4abZUKwVxie2MBN/R75QxS/lCTnRdsJOquNX38kT37Z/NQxzy7cPl/PX+QfGxI+2c+2hFuS3IAjktYoTQPLFpciK+KkLEQ6St7EhOWmJg4BkFkHGC+IouytpQBTEWWi1WldgC6KihWphf1WchY+CEF8cl2duYiCnH3W73f8hK87fZ7rdhz0fAalybrLPQMiiKOEXMZDTScaDkG/l9kVDmALC3wWEFwEZuZOq2ski/jOR98L/qrqLc1QL+3PiCqgHxu8/4iLp7HcYSJC8D7i8/LQEs7uCdP2p4jegPCHIBwop4gQphixwHDh+AyfwHVTGT4Zh8xRopToXhstHUbvrnGEYqow3jIneRxG/45GMhTkZ+WdSrSn/XIsGPuMZ4w24hWuMVU6h5mSy2Wz+AWZ8db7Z3MUN44JcTL7q8QQZv8HCgjLjr15FLcj0GSqAlT6PaUPsPNKE/N7Ko+t6kB+KgOR0oncV9TgX5JrepdrSSvaThOPvcB0Ir4R5xPUg3OTZZepC3pUIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgYwEZ7b99rYjvN4EKGyoX9+pBAAAAAElFTkSuQmCC"},49:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(9),r=c.n(s),i=c(14),n=c(13),o=c(1),h=(c(49),c(11)),d=c(50),u=c(8),p=c(48);t.default=function(){var e=Object(o.useState)({tvTopRated:[]}),t=Object(n.a)(e,2),c=t[0],s=t[1],A=function(){var e=Object(i.a)(r.a.mark((function e(){var t,c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,s({tvTopRated:a.results}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){A()}),[]);var l=c.tvTopRated;return Object(a.jsxs)("div",{id:"discover-item",className:"container",children:[Object(a.jsx)("div",{className:"discover-header",children:Object(a.jsx)("h1",{children:"TOP RATED TV SHOWS"})}),Object(a.jsx)("div",{className:"discover-content",children:l.map((function(e){return Object(a.jsxs)("div",{className:"discover-content-item",children:[Object(a.jsx)(u.b,{to:{pathname:"/details/tv/".concat(e.id),state:{id:e.id}},children:Object(a.jsx)("img",{src:e.backdrop_path||e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path||e.backdrop_path):p.a,alt:e.original_title})}),Object(a.jsx)("div",{className:"discover-content-item-footer",children:Object(a.jsxs)("p",{children:[e.first_air_date?Object(a.jsxs)("span",{className:"HiClock",children:[Object(a.jsx)(d.a,{})," ",e.first_air_date.slice(0,4)]}):null,null!==e.vote_average?Object(a.jsxs)("span",{className:"IoIosStar",children:[Object(a.jsx)(h.c,{})," ",e.vote_average||0]}):null]})})]},e.id)}))})]})}}}]);
//# sourceMappingURL=18.ae94f85c.chunk.js.map