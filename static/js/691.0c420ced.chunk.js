"use strict";(self.webpackChunkmovie_cloud=self.webpackChunkmovie_cloud||[]).push([[691],{1691:function(e,s,t){t.r(s),t.d(s,{default:function(){return E}});var a=t(2791),i=t(4373),c=t(8617),r=t(3504),n=t(8214),o=t(5861),d=t(885),h=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&language=en-US&page=1",t=(0,a.useState)([]),i=(0,d.Z)(t,2),c=i[0],r=i[1];return(0,a.useEffect)((function(){(0,o.Z)((0,n.Z)().mark((function t(){var a,i,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(e+"d2f90b385fa2430163392784263021de"+s),t.next=3,fetch(a);case 3:return i=t.sent,t.next=6,i.json();case 6:c=t.sent,r(c.results);case 8:case"end":return t.stop()}}),t)})))()}),[]),{movies:c}},A=t(898),u=t(184),E=function(e){var s=e.title,t=e.apiUrl,a=e.type,n=h(t).movies;return(0,u.jsxs)("div",{id:"discover-item",className:"container",children:[(0,u.jsx)("div",{className:"discover-header",children:(0,u.jsx)("h1",{children:s})}),(0,u.jsx)("div",{className:"discover-content",children:n.map((function(e){return(0,u.jsxs)("div",{className:"discover-content-item",children:[(0,u.jsx)(r.rU,{to:{pathname:"/details/movie/".concat(e.id),state:{id:e.id}},children:(0,u.jsx)("img",{src:e.backdrop_path||e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path||e.backdrop_path):A,alt:e.original_title})}),(0,u.jsx)("div",{className:"discover-content-item-footer",children:(0,u.jsxs)("p",{children:[(0,u.jsxs)("span",{className:"HiClock",children:[(0,u.jsx)(c.QCV,{}),"movie"===a?e.release_date&&e.release_date.slice(0,4):"tv"===a?e.first_air_date&&e.first_air_date.slice(0,4):"N/A"]}),(0,u.jsxs)("span",{className:"IoIosStar",children:[(0,u.jsx)(i.M2b,{})," ",e.vote_average||0]})]})})]},e.id)}))})]})}},898:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsBAMAAAB01OGNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURerq6svLy8fHx8/Pz+jo6NPT08bGxuLi4t7e3sPDw8rKys7Ozu3t7djY2M3NzVAueEoAAASuSURBVHja7Z2BZxxpGMYHcwI9rHPF1OEGo45Db6xzNxIfvtpDDtdcTu5OsHNuSMnBbexxLWUbHa0tiuqimEQrplpilepKFAUsmiZpa0lgVaur+Rv6fTNbQN5v5nu703b7PhJZvPaXJ/u+7/PNBzE4r49QPJHBCxBBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghDk/UEqeaQJ+Wkvj87rQZZny+WZ2axfT00dyHSjPJtD3+tBdguAsCIg09vlHHJf6EG2jh0cdIQ2DyAN0pL1NT3Ifr/TdoW8DqRhyZQehO33XbcUx9EXLqQpS5T0XU/biduZD8PmdhukPAvDvT/bCEhfzDFbgqx4GzXOJ7YxEFe++BmCTN2TJQ0MpJ0Rsox1wtQQtkxOCnPSrimdvGbo7npar1cafWgW716o1/+bwUC8KbH7BuDAe2JDDjzMWnHlCnRhecmWxEAyiyCFQby32Xe40t7AtPBmp6Nq4SSEUU7mwjDc7quSsYkaxv65I0eMs2DIb0wbholORvb5qBdkUXky+lX/ySVjA3u442ALe69FeFZwyagexufoYZSLyWuDy6sjatqotTJcTMrdRclIkA8VUkQLe/JSwgWHsS1KZlDHVHngro/6wJ3h0WED+egw6PSTVX8MuJBYf5ms+sGm5o1EL45XE8g3MaDbsuRSHB/Xc9KLhpCvAYa1lkKs45pOotIQUjpcVuoksrSdZIGsoSDSya3kIAE7MTg3UE4imfFLEQiRGb+PcRJNihvfXyBI6db83t7uCYwTSzZQBELSJishnCRvATKS32MlKiGcZBfGyaghY+ZE/cEPSxBOrLQ/Vd0VWxgn0XMRvydAK5GM31eoiU/iF1wrN2T8bmEm/k6NGeZJeEEy0+SXsVt4PPJklZzkdaKI369kLaq7oh3OzSUQckPGL2pOovJulomfXcc4sSwRrIrdZUUl/fjNs4UpGcmJhpMV27YVLSwqbFTGx1+KSbuvHsZXqInf4abZUKwVxie2MBN/R75QxS/lCTnRdsJOquNX38kT37Z/NQxzy7cPl/PX+QfGxI+2c+2hFuS3IAjktYoTQPLFpciK+KkLEQ6St7EhOWmJg4BkFkHGC+IouytpQBTEWWi1WldgC6KihWphf1WchY+CEF8cl2duYiCnH3W73f8hK87fZ7rdhz0fAalybrLPQMiiKOEXMZDTScaDkG/l9kVDmALC3wWEFwEZuZOq2ski/jOR98L/qrqLc1QL+3PiCqgHxu8/4iLp7HcYSJC8D7i8/LQEs7uCdP2p4jegPCHIBwop4gQphixwHDh+AyfwHVTGT4Zh8xRopToXhstHUbvrnGEYqow3jIneRxG/45GMhTkZ+WdSrSn/XIsGPuMZ4w24hWuMVU6h5mSy2Wz+AWZ8db7Z3MUN44JcTL7q8QQZv8HCgjLjr15FLcj0GSqAlT6PaUPsPNKE/N7Ko+t6kB+KgOR0oncV9TgX5JrepdrSSvaThOPvcB0Ir4R5xPUg3OTZZepC3pUIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgYwEZ7b99rYjvN4EKGyoX9+pBAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=691.0c420ced.chunk.js.map