(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{313:function(e,t,c){},315:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(28),s=c.n(i),r=c(49),l=c(37),o=c(29),d=c(316),j=c(318),u=c(324),h=c(54),b=c(321),v=c(194),O=c(322),x=c(325),p=c(326),m=c(327),g=c(328),y=c(329),f=c(3);function N(){var e=Object(a.useState)(!0),t=Object(h.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(null),s=Object(h.a)(i,2),r=s[0],o=s[1];return Object(a.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){n(!(r<768))}),[r]),Object(f.jsxs)("div",{className:"nav-container",children:[Object(f.jsxs)("div",{className:"logo-container",children:[Object(f.jsx)(b.a,{src:"/crypto.jpg",size:"large"}),Object(f.jsx)(j.a.Title,{level:2,className:"logo",children:Object(f.jsx)(l.b,{to:"/",children:"CryptoControl "})}),Object(f.jsx)(v.a,{className:"menu-control-container",onClick:function(){return n(!c)},children:Object(f.jsx)(x.a,{})})]}),c&&Object(f.jsxs)(O.a,{theme:"dark",children:[Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(p.a,{}),children:Object(f.jsx)(l.b,{to:"/",children:"Home"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(m.a,{}),children:Object(f.jsx)(l.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(g.a,{}),children:Object(f.jsx)(l.b,{to:"/exchanges",children:"Exchanges"})}),Object(f.jsx)(O.a.Item,{icon:Object(f.jsx)(y.a,{}),children:Object(f.jsx)(l.b,{to:"/news",children:"News"})})]})]})}var w=c(40),C=c.n(w),k=c(320),S=c(99),T=c(62),P=c(317),E=c(134),I=c(52),L={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"54669d781fmsh9659ef466a1aaecp13fa11jsn70f79c531658"},q=function(e){return{url:e,headers:L}},A=Object(E.a)({reducerPath:"cryptoApi",baseQuery:Object(I.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return q("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return q("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e,t){return q("/coin/".concat(e,"/history?/timeperiod=").concat(t))}})}}}),D=A.useGetCryptosQuery,M=A.useGetCryptoDetailsQuery,F=A.useGetCryptoHistoryQuery;function H(e){var t=e.simplified,c=D(t?10:100),n=c.data,i=c.isFetching,s=Object(a.useState)([]),r=Object(h.a)(s,2),o=r[0],d=r[1],j=Object(a.useState)(""),u=Object(h.a)(j,2),b=u[0],v=u[1];return Object(a.useEffect)((function(){var e,t=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));d(t)}),[n,b]),i?"Loading....":Object(f.jsxs)(f.Fragment,{children:[!t&&Object(f.jsx)("div",{className:"search-crypto",children:Object(f.jsx)(k.a,{placeholder:"Search cryptocurrency",onChange:function(e){return v(e.target.value)}})}),Object(f.jsx)(S.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(f.jsx)(T.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(f.jsx)(l.b,{to:"/crypto/".concat(e.uuid),children:Object(f.jsxs)(P.a,{title:"".concat(e.rank,".").concat(e.name),extra:Object(f.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(f.jsxs)("p",{children:["Price:",C()(e.price)]}),Object(f.jsxs)("p",{children:["Market cap:",C()(e.marketCap)]}),Object(f.jsxs)("p",{children:["Daily change:",C()(e.change)]})]})})},e.uuid)}))})]})}var U=c(187),$=c(323),V=c(330),Q=c(331),G=c(332),z=c(333),W=c(138),R=c(334),J=c(197),Z=c(195),_=c(33);function B(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,i=[],s=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r++){var l,o;s.push(new Date(c.data.history[r].timestamp).toLocaleDateString()),i.push(c.data.history[r].price)}for(var d=0;d<(null===c||void 0===c||null===(u=c.data)||void 0===u||null===(h=u.history)||void 0===h?void 0:h.length);d++){var u,h;i.push(c.data.history[d].price)}var b={labels:s,datasets:[{label:"Price In USD",data:i,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{className:"chart-header",children:[Object(f.jsxs)(j.a.Title,{level:2,className:"chart-title",children:[n," Price Chart"," "]}),Object(f.jsxs)(T.a,{className:"price-container",children:[Object(f.jsxs)(j.a.Title,{level:5,className:"price-change",children:["Change: ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(f.jsxs)(j.a.Title,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(f.jsx)(Z.a,{data:b,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})}_.d.register(_.c,_.i,_.k,_.h,_.o,_.p,_.f);var K=j.a.Title,X=j.a.Text,Y=$.a.Option;function ee(){var e,t,c,n,i,s,r,l,d,j,u,b=Object(o.f)().coinId,v=Object(a.useState)("7d"),O=Object(h.a)(v,2),x=O[0],p=O[1],y=M(b),N=y.data,w=y.isFetching,k=F({coinId:b,timeperiod:x}).data,P=null===N||void 0===N||null===(e=N.data)||void 0===e?void 0:e.coin;if(w)return"Loader...";var E=[{title:"Price to USD",value:"$ ".concat((null===P||void 0===P?void 0:P.price)&&C()(null===P||void 0===P?void 0:P.price)),icon:Object(f.jsx)(V.a,{})},{title:"Rank",value:null===P||void 0===P?void 0:P.rank,icon:Object(f.jsx)(Q.a,{})},{title:"24h Volume",value:"$ ".concat((null===P||void 0===P?void 0:P.volume)&&C()(null===P||void 0===P?void 0:P.volume)),icon:Object(f.jsx)(G.a,{})},{title:"Market Cap",value:"$ ".concat((null===P||void 0===P?void 0:P.marketCap)&&C()(null===P||void 0===P?void 0:P.marketCap)),icon:Object(f.jsx)(V.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat((null===P||void 0===P||null===(t=P.allTimeHigh)||void 0===t?void 0:t.price)&&C()(null===P||void 0===P||null===(c=P.allTimeHigh)||void 0===c?void 0:c.price)),icon:Object(f.jsx)(z.a,{})}],I=[{title:"Number Of Markets",value:null===P||void 0===P?void 0:P.numberOfMarkets,icon:Object(f.jsx)(m.a,{})},{title:"Number Of Exchanges",value:null===P||void 0===P?void 0:P.numberOfExchanges,icon:Object(f.jsx)(g.a,{})},{title:"Aprroved Supply",value:(null===P||void 0===P||null===(n=P.supply)||void 0===n?void 0:n.confirmed)?Object(f.jsx)(W.a,{}):Object(f.jsx)(R.a,{}),icon:Object(f.jsx)(J.a,{})},{title:"Total Supply",value:"$ ".concat((null===P||void 0===P||null===(i=P.supply)||void 0===i?void 0:i.total)&&C()(null===P||void 0===P||null===(s=P.supply)||void 0===s?void 0:s.total)),icon:Object(f.jsx)(J.a,{})},{title:"Circulating Supply",value:"$ ".concat((null===P||void 0===P||null===(r=P.supply)||void 0===r?void 0:r.circulating)&&C()(null===P||void 0===P||null===(l=P.supply)||void 0===l?void 0:l.circulating)),icon:Object(f.jsx)(J.a,{})}];return Object(f.jsxs)(T.a,{className:"coin-detail-container",children:[Object(f.jsxs)(T.a,{className:"coin-heading-container",children:[Object(f.jsxs)(K,{level:2,className:"coin-name",children:[null===N||void 0===N||null===(d=N.data)||void 0===d?void 0:d.coin.name," (",null===N||void 0===N||null===(j=N.data)||void 0===j?void 0:j.coin.symbol,") Price"]}),Object(f.jsxs)("p",{children:[P.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(f.jsx)($.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return p(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(f.jsx)(Y,{children:e},e)}))}),Object(f.jsx)(B,{coinHistory:k,currentPrice:C()(null===P||void 0===P?void 0:P.price),coinName:null===P||void 0===P?void 0:P.name}),Object(f.jsxs)(T.a,{className:"stats-container",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(f.jsxs)(K,{level:3,className:"coin-details-heading",children:[P.name," Value Statistics"]}),Object(f.jsxs)("p",{children:["An overview showing the statistics of ",P.name,", such as the base and quote currency, the rank, and trading volume."]})]}),E.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(f.jsxs)(T.a,{className:"coin-stats",children:[Object(f.jsxs)(T.a,{className:"coin-stats-name",children:[Object(f.jsx)(X,{children:t}),Object(f.jsx)(X,{children:c})]}),Object(f.jsx)(X,{className:"stats",children:a})]})}))]}),Object(f.jsxs)(T.a,{className:"other-stats-info",children:[Object(f.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(f.jsx)(K,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(f.jsxs)("p",{children:["An overview showing the statistics of ",P.name,", such as the base and quote currency, the rank, and trading volume."]})]}),I.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(f.jsxs)(T.a,{className:"coin-stats",children:[Object(f.jsxs)(T.a,{className:"coin-stats-name",children:[Object(f.jsx)(X,{children:t}),Object(f.jsx)(X,{children:c})]}),Object(f.jsx)(X,{className:"stats",children:a})]})}))]})]}),Object(f.jsxs)(T.a,{className:"coin-desc-link",children:[Object(f.jsxs)(S.a,{className:"coin-desc",children:[Object(f.jsxs)(K,{level:3,className:"coin-details-heading",children:["What is ",P.name,"?"]}),Object(U.a)(P.description)]}),Object(f.jsxs)(T.a,{className:"coin-links",children:[Object(f.jsxs)(K,{level:3,className:"coin-details-heading",children:[P.name," Links"]}),null===(u=P.links)||void 0===u?void 0:u.map((function(e){return Object(f.jsxs)(S.a,{className:"coin-link",children:[Object(f.jsx)(K,{level:5,className:"link-name",children:e.type}),Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})}var te=c(319),ce=c(189),ae=c.n(ce),ne={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"54669d781fmsh9659ef466a1aaecp13fa11jsn70f79c531658"},ie=Object(E.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(I.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:ne}}})}}}),se=ie.useGetCryptoNewsQuery,re=j.a.Text,le=j.a.Title,oe=$.a.Option;function de(e){var t,c=e.simplified,n=Object(a.useState)("Cryptocurrency"),i=Object(h.a)(n,2),s=i[0],r=i[1],l=se({newsCategory:s,count:c?6:12}).data,o=D(100).data,d="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";return console.log("cryptoNews:",l),(null===l||void 0===l?void 0:l.value)?Object(f.jsxs)(S.a,{gutter:[24,24],children:[!c&&Object(f.jsx)(T.a,{span:24,children:Object(f.jsxs)($.a,{showSearch:!0,className:"select-news",placeholder:"select a crypto",onChange:function(e){return r(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(f.jsx)(oe,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.coins.map((function(e){return Object(f.jsx)(oe,{value:e.name,children:e.name})}))]})}),l.value.map((function(e,t){var c,a,n,i,s,r;return Object(f.jsx)(T.a,{xs:24,sm:12,lg:8,children:Object(f.jsx)(P.a,{hoverable:!0,className:"news-card",children:Object(f.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(f.jsxs)("div",{className:"news-img-container",children:[Object(f.jsx)(le,{className:"news-tile",level:4,children:e.name}),Object(f.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||d,alt:"newsImg"})]}),Object(f.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(f.jsxs)("div",{className:"provider-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{src:(null===(n=e.provider[0])||void 0===n||null===(i=n.image)||void 0===i||null===(s=i.thumbnail)||void 0===s?void 0:s.contentUrl)||d,alt:"news"}),Object(f.jsx)(re,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(f.jsx)(re,{children:ae()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):"Loading..."}var je=j.a.Title;function ue(){var e,t=D(10),c=t.data,a=t.isFetching;console.log("data:",c);var n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?"Loading...":Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(je,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(f.jsxs)(S.a,{gutter:[32,32],children:[Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(te.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(te.a,{title:"Total Exchanges",value:C()(n.totalExchanges)})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(te.a,{title:"Total Market Cap:",value:"$".concat(C()(n.totalMarketCap))})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(te.a,{title:"Total 24h Volume",value:"$".concat(C()(n.total24hVolume))})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(te.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(f.jsx)(T.a,{span:12,children:Object(f.jsx)(te.a,{title:"Total Markets",value:C()(n.totalMarkets)})})]}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(je,{level:2,className:"home-title",children:"Top 10 Cryptos In The World"}),Object(f.jsx)(je,{level:3,className:"show-more",children:Object(f.jsx)(l.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(f.jsx)(H,{simplified:!0}),Object(f.jsxs)("div",{className:"home-heading-container",children:[Object(f.jsx)(je,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(f.jsx)(je,{level:3,children:Object(f.jsx)(l.b,{to:"/news",children:"Show more"})})]}),Object(f.jsx)(de,{simplified:!0})]})}function he(){return Object(f.jsx)("div",{children:"Exchanges"})}c(313);var be,ve=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"navbar",children:Object(f.jsx)(N,{})}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)(d.a,{children:Object(f.jsx)("div",{className:"routes",children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(ue,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/exchanges",children:Object(f.jsx)(he,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/cryptocurrencies",children:Object(f.jsx)(H,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/crypto/:coinId",children:Object(f.jsx)(ee,{})}),Object(f.jsx)(o.a,{exact:!0,path:"/news",children:Object(f.jsx)(de,{})})]})})}),Object(f.jsxs)("div",{className:"footer",children:[Object(f.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(f.jsx)("br",{}),"All rights reserverd"]}),Object(f.jsxs)(u.b,{children:[Object(f.jsx)(l.b,{to:"/",children:"Home"}),Object(f.jsx)(l.b,{to:"/exchanges",children:"Exchanges"}),Object(f.jsx)(l.b,{to:"/news",children:"News"})]})]})]})]})})},Oe=c(32),xe=c(12),pe=Object(xe.a)({reducer:(be={},Object(Oe.a)(be,A.reducerPath,A.reducer),Object(Oe.a)(be,ie.reducerPath,ie.reducer),be)});c(314);s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(r.a,{store:pe,children:Object(f.jsx)(ve,{})})})}),document.getElementById("root"))}},[[315,1,2]]]);
//# sourceMappingURL=main.704ada0a.chunk.js.map