"use strict";(self.webpackChunkmovie_cloud=self.webpackChunkmovie_cloud||[]).push([[711],{8711:(A,e,s)=>{s.r(e),s.d(e,{default:()=>C});var a=s(2791),t=s(6095),i=s(4330),h=s(358),E=s(1087),c=s(990),r=s(898),Q=s(184);const C=()=>{const{multiSearch:A}=(0,a.useContext)(t.Z);return(0,Q.jsxs)("div",{id:"search-item",className:"container",children:[(0,Q.jsx)("div",{className:"search-header",children:(0,Q.jsx)("h1",{children:"SEARCH RESULTS"})}),(0,Q.jsx)("div",{className:"search-content",children:A&&A?A.map((A=>(0,Q.jsx)("div",{className:"search-content-item",children:"movie"===A.media_type?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(E.rU,{to:{pathname:`/movie/${A.id}`,state:{id:A.id}},children:(0,Q.jsx)("img",{src:A.backdrop_path||A.poster_path?`https://image.tmdb.org/t/p/w200${A.poster_path||A.backdrop_path}`:r,alt:A.original_title})}),(0,Q.jsx)("div",{className:"search-content-item-footer",children:(0,Q.jsxs)("p",{children:[(0,Q.jsxs)("span",{className:"HiClock",children:[(0,Q.jsx)(h.QCV,{}),A.release_date&&A.release_date.slice(0,4)]}),(0,Q.jsxs)("span",{className:"IoIosStar",children:[(0,Q.jsx)(i.M2b,{})," ",A.vote_average.toFixed(1)||0]})]})})]}):"tv"===A.media_type?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(E.rU,{to:{pathname:`/tv/${A.id}`,state:{id:A.id}},children:(0,Q.jsx)("img",{src:A.backdrop_path||A.poster_path?`https://image.tmdb.org/t/p/w200${A.poster_path||A.backdrop_path}`:r,alt:A.original_title})}),(0,Q.jsx)("div",{className:"search-content-item-footer",children:(0,Q.jsxs)("p",{children:[(0,Q.jsxs)("span",{className:"HiClock",children:[(0,Q.jsx)(h.QCV,{}),A.first_air_date&&A.first_air_date.slice(0,4)]}),(0,Q.jsxs)("span",{className:"IoIosStar",children:[(0,Q.jsx)(i.M2b,{})," ",A.vote_average.toFixed(1)||0]})]})})]}):(0,Q.jsxs)("div",{className:"details-content-cast-item",children:[(0,Q.jsx)(E.rU,{to:{pathname:`/person/${A.id}`,state:{id:A.id}},children:(0,Q.jsx)("img",{src:null===A.profile_path?c:`https://image.tmdb.org/t/p/w200${A.profile_path}`,alt:A.name})}),(0,Q.jsx)("div",{className:"search-content-item-footer-name",children:(0,Q.jsx)("p",{children:A.name})})]},A.id)},A.id))):null})]})}},990:A=>{A.exports="data:image/png;base64,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"},898:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsBAMAAAB01OGNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURerq6svLy8fHx8/Pz+jo6NPT08bGxuLi4t7e3sPDw8rKys7Ozu3t7djY2M3NzVAueEoAAASuSURBVHja7Z2BZxxpGMYHcwI9rHPF1OEGo45Db6xzNxIfvtpDDtdcTu5OsHNuSMnBbexxLWUbHa0tiuqimEQrplpilepKFAUsmiZpa0lgVaur+Rv6fTNbQN5v5nu703b7PhJZvPaXJ/u+7/PNBzE4r49QPJHBCxBBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghDk/UEqeaQJ+Wkvj87rQZZny+WZ2axfT00dyHSjPJtD3+tBdguAsCIg09vlHHJf6EG2jh0cdIQ2DyAN0pL1NT3Ifr/TdoW8DqRhyZQehO33XbcUx9EXLqQpS5T0XU/biduZD8PmdhukPAvDvT/bCEhfzDFbgqx4GzXOJ7YxEFe++BmCTN2TJQ0MpJ0Rsox1wtQQtkxOCnPSrimdvGbo7npar1cafWgW716o1/+bwUC8KbH7BuDAe2JDDjzMWnHlCnRhecmWxEAyiyCFQby32Xe40t7AtPBmp6Nq4SSEUU7mwjDc7quSsYkaxv65I0eMs2DIb0wbholORvb5qBdkUXky+lX/ySVjA3u442ALe69FeFZwyagexufoYZSLyWuDy6sjatqotTJcTMrdRclIkA8VUkQLe/JSwgWHsS1KZlDHVHngro/6wJ3h0WED+egw6PSTVX8MuJBYf5ms+sGm5o1EL45XE8g3MaDbsuRSHB/Xc9KLhpCvAYa1lkKs45pOotIQUjpcVuoksrSdZIGsoSDSya3kIAE7MTg3UE4imfFLEQiRGb+PcRJNihvfXyBI6db83t7uCYwTSzZQBELSJishnCRvATKS32MlKiGcZBfGyaghY+ZE/cEPSxBOrLQ/Vd0VWxgn0XMRvydAK5GM31eoiU/iF1wrN2T8bmEm/k6NGeZJeEEy0+SXsVt4PPJklZzkdaKI369kLaq7oh3OzSUQckPGL2pOovJulomfXcc4sSwRrIrdZUUl/fjNs4UpGcmJhpMV27YVLSwqbFTGx1+KSbuvHsZXqInf4abZUKwVxie2MBN/R75QxS/lCTnRdsJOquNX38kT37Z/NQxzy7cPl/PX+QfGxI+2c+2hFuS3IAjktYoTQPLFpciK+KkLEQ6St7EhOWmJg4BkFkHGC+IouytpQBTEWWi1WldgC6KihWphf1WchY+CEF8cl2duYiCnH3W73f8hK87fZ7rdhz0fAalybrLPQMiiKOEXMZDTScaDkG/l9kVDmALC3wWEFwEZuZOq2ski/jOR98L/qrqLc1QL+3PiCqgHxu8/4iLp7HcYSJC8D7i8/LQEs7uCdP2p4jegPCHIBwop4gQphixwHDh+AyfwHVTGT4Zh8xRopToXhstHUbvrnGEYqow3jIneRxG/45GMhTkZ+WdSrSn/XIsGPuMZ4w24hWuMVU6h5mSy2Wz+AWZ8db7Z3MUN44JcTL7q8QQZv8HCgjLjr15FLcj0GSqAlT6PaUPsPNKE/N7Ko+t6kB+KgOR0oncV9TgX5JrepdrSSvaThOPvcB0Ir4R5xPUg3OTZZepC3pUIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgYwEZ7b99rYjvN4EKGyoX9+pBAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=711.48e9a3aa.chunk.js.map