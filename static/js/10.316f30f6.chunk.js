(this["webpackJsonpmovie-cloud"]=this["webpackJsonpmovie-cloud"]||[]).push([[10],{48:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsBAMAAAB01OGNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURerq6svLy8fHx8/Pz+jo6NPT08bGxuLi4t7e3sPDw8rKys7Ozu3t7djY2M3NzVAueEoAAASuSURBVHja7Z2BZxxpGMYHcwI9rHPF1OEGo45Db6xzNxIfvtpDDtdcTu5OsHNuSMnBbexxLWUbHa0tiuqimEQrplpilepKFAUsmiZpa0lgVaur+Rv6fTNbQN5v5nu703b7PhJZvPaXJ/u+7/PNBzE4r49QPJHBCxBBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghDk/UEqeaQJ+Wkvj87rQZZny+WZ2axfT00dyHSjPJtD3+tBdguAsCIg09vlHHJf6EG2jh0cdIQ2DyAN0pL1NT3Ifr/TdoW8DqRhyZQehO33XbcUx9EXLqQpS5T0XU/biduZD8PmdhukPAvDvT/bCEhfzDFbgqx4GzXOJ7YxEFe++BmCTN2TJQ0MpJ0Rsox1wtQQtkxOCnPSrimdvGbo7npar1cafWgW716o1/+bwUC8KbH7BuDAe2JDDjzMWnHlCnRhecmWxEAyiyCFQby32Xe40t7AtPBmp6Nq4SSEUU7mwjDc7quSsYkaxv65I0eMs2DIb0wbholORvb5qBdkUXky+lX/ySVjA3u442ALe69FeFZwyagexufoYZSLyWuDy6sjatqotTJcTMrdRclIkA8VUkQLe/JSwgWHsS1KZlDHVHngro/6wJ3h0WED+egw6PSTVX8MuJBYf5ms+sGm5o1EL45XE8g3MaDbsuRSHB/Xc9KLhpCvAYa1lkKs45pOotIQUjpcVuoksrSdZIGsoSDSya3kIAE7MTg3UE4imfFLEQiRGb+PcRJNihvfXyBI6db83t7uCYwTSzZQBELSJishnCRvATKS32MlKiGcZBfGyaghY+ZE/cEPSxBOrLQ/Vd0VWxgn0XMRvydAK5GM31eoiU/iF1wrN2T8bmEm/k6NGeZJeEEy0+SXsVt4PPJklZzkdaKI369kLaq7oh3OzSUQckPGL2pOovJulomfXcc4sSwRrIrdZUUl/fjNs4UpGcmJhpMV27YVLSwqbFTGx1+KSbuvHsZXqInf4abZUKwVxie2MBN/R75QxS/lCTnRdsJOquNX38kT37Z/NQxzy7cPl/PX+QfGxI+2c+2hFuS3IAjktYoTQPLFpciK+KkLEQ6St7EhOWmJg4BkFkHGC+IouytpQBTEWWi1WldgC6KihWphf1WchY+CEF8cl2duYiCnH3W73f8hK87fZ7rdhz0fAalybrLPQMiiKOEXMZDTScaDkG/l9kVDmALC3wWEFwEZuZOq2ski/jOR98L/qrqLc1QL+3PiCqgHxu8/4iLp7HcYSJC8D7i8/LQEs7uCdP2p4jegPCHIBwop4gQphixwHDh+AyfwHVTGT4Zh8xRopToXhstHUbvrnGEYqow3jIneRxG/45GMhTkZ+WdSrSn/XIsGPuMZ4w24hWuMVU6h5mSy2Wz+AWZ8db7Z3MUN44JcTL7q8QQZv8HCgjLjr15FLcj0GSqAlT6PaUPsPNKE/N7Ko+t6kB+KgOR0oncV9TgX5JrepdrSSvaThOPvcB0Ir4R5xPUg3OTZZepC3pUIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgYwEZ7b99rYjvN4EKGyoX9+pBAAAAAElFTkSuQmCC"},49:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=a(13),s=a(12),o=a(1),i=a.n(o),l=(a(49),a(10)),E=a(50),u=a(7),h=a(48),p=a.n(h);t.default=function(){var e=Object(o.useState)({moviesNowPlaying:[]}),t=Object(s.a)(e,2),a=t[0],n=t[1],h=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("d2f90b385fa2430163392784263021de","&language=en-US&page=1"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,n({moviesNowPlaying:r.results}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){h()}),[]);var A=a.moviesNowPlaying;return i.a.createElement("div",{id:"discover-item",className:"container"},i.a.createElement("div",{className:"discover-header"},i.a.createElement("h1",null,"NOW PLAYING MOVIES")),i.a.createElement("div",{className:"discover-content"},A.map((function(e){return i.a.createElement("div",{className:"discover-content-item",key:e.id},i.a.createElement(u.b,{to:{pathname:"/details/movie/".concat(e.id),state:{id:e.id}}},i.a.createElement("img",{src:e.backdrop_path||e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path||e.backdrop_path):p.a,alt:e.original_title})),i.a.createElement("div",{className:"discover-content-item-footer"},i.a.createElement("p",null,e.release_date?i.a.createElement("span",{className:"HiClock"},i.a.createElement(E.a,null)," ",e.release_date.slice(0,4)):null,null!==e.vote_average?i.a.createElement("span",{className:"IoIosStar"},i.a.createElement(l.c,null)," ",e.vote_average||0):null)))}))))}}}]);
//# sourceMappingURL=10.316f30f6.chunk.js.map