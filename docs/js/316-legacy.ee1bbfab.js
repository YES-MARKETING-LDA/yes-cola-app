(self["webpackChunkyes_cola"]=self["webpackChunkyes_cola"]||[]).push([[316],{3658:(e,t,r)=>{"use strict";var n=r(9781),a=r(3157),s=TypeError,u=Object.getOwnPropertyDescriptor,o=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=o?function(e,t){if(a(e)&&!u(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7207:e=>{var t=TypeError,r=9007199254740991;e.exports=function(e){if(e>r)throw t("Maximum allowed index exceeded");return e}},3157:(e,t,r)=>{var n=r(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},7658:(e,t,r)=>{"use strict";var n=r(2109),a=r(7908),s=r(6244),u=r(3658),o=r(7207),i=r(7293),l=i((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},f=l||!c();n({target:"Array",proto:!0,arity:1,forced:f},{push:function(e){var t=a(this),r=s(t),n=arguments.length;o(r+n);for(var i=0;i<n;i++)t[r]=arguments[i],r++;return u(t,r),r}})},8862:(e,t,r)=>{var n=r(2109),a=r(5005),s=r(2104),u=r(6916),o=r(1702),i=r(7293),l=r(3157),c=r(614),f=r(111),d=r(2190),g=r(206),p=r(6293),h=a("JSON","stringify"),m=o(/./.exec),y=o("".charAt),v=o("".charCodeAt),_=o("".replace),w=o(1..toString),b=/[\uD800-\uDFFF]/g,S=/^[\uD800-\uDBFF]$/,O=/^[\uDC00-\uDFFF]$/,D=!p||i((function(){var e=a("Symbol")();return"[null]"!=h([e])||"{}"!=h({a:e})||"{}"!=h(Object(e))})),j=i((function(){return'"\\udf06\\ud834"'!==h("\udf06\ud834")||'"\\udead"'!==h("\udead")})),k=function(e,t){var r=g(arguments),n=t;if((f(t)||void 0!==e)&&!d(e))return l(t)||(t=function(e,t){if(c(n)&&(t=u(n,this,e,t)),!d(t))return t}),r[1]=t,s(h,null,r)},x=function(e,t,r){var n=y(r,t-1),a=y(r,t+1);return m(S,e)&&!m(O,a)||m(O,e)&&!m(S,n)?"\\u"+w(v(e,0),16):e};h&&n({target:"JSON",stat:!0,arity:3,forced:D||j},{stringify:function(e,t,r){var n=g(arguments),a=s(D?k:h,null,n);return j&&"string"==typeof a?_(a,b,x):a}})},3744:(e,t)=>{"use strict";t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[n,a]of t)r[n]=a;return r}},8316:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(6252),a=r(2262),s=r(8787),u=(r(8862),r(7658),r(3577)),o=r(7017);const i={class:"footer"},l={__name:"GameItem",props:{game:Object},setup(e){const t=e,r=()=>{sessionStorage.setItem("game",JSON.stringify(t.game)),o.Z.push("/game")},l=()=>{sessionStorage.setItem("game",JSON.stringify(t.game)),o.Z.push("/playGame")};return(e,o)=>((0,n.wg)(),(0,n.j4)((0,a.SU)(s.A$),null,{default:(0,n.w5)((()=>[(0,n._)("div",{class:"game-cover",style:(0,u.j5)({backgroundImage:`url(${t.game.image})`})},[(0,n._)("div",i,[(0,n._)("button",{onClick:o[0]||(o[0]=e=>r())},"Detalhes"),(0,n._)("button",{class:"play",onClick:o[1]||(o[1]=e=>l())},"Jogar")])],4)])),_:1}))}};var c=r(3744);const f=(0,c.Z)(l,[["__scopeId","data-v-f0e90b9a"]]),d=f,g=e=>((0,n.dD)("data-v-737b0482"),e=e(),(0,n.Cn)(),e),p=g((()=>(0,n._)("div",{class:"toolbar_"}," JOGOS ",-1))),h={class:"slides"},m={__name:"GamesPage",setup(e){const t={initialSlide:0,speed:400},r=((0,a.iH)(0),(0,a.qj)([{title:"Delivery Master",url:"https://v6p9d9t4.ssl.hwcdn.net/html/7309862/index.html",image:"/yes-cola-app/assets/Splash.png"}]));return(e,u)=>{const o=(0,n.up)("ion-slides");return(0,n.wg)(),(0,n.j4)((0,a.SU)(s._i),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(s.Gu),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(s.sr),null,{default:(0,n.w5)((()=>[p])),_:1})])),_:1}),(0,n.Wm)((0,a.SU)(s.W2),{fullscreen:!0},{default:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n.Wm)(o,{pager:"true",options:t},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r,((e,t)=>((0,n.wg)(),(0,n.j4)(d,{key:t,game:e},null,8,["game"])))),128))])),_:1})])])),_:1})])),_:1})}}},y=(0,c.Z)(m,[["__scopeId","data-v-737b0482"]]),v=y}}]);
//# sourceMappingURL=316-legacy.ee1bbfab.js.map