(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0538":function(t,e,n){"use strict";var r=n("1c0b"),c=n("861d"),o=[].slice,a={},u=function(t,e,n){if(!(e in a)){for(var r=[],c=0;c<e;c++)r[c]="a["+c+"]";a[e]=Function("C,a","return new C("+r.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=o.call(arguments,1),a=function(){var r=n.concat(o.call(arguments));return this instanceof a?u(e,r.length,r):e.apply(t,r)};return c(e.prototype)&&(a.prototype=e.prototype),a}},3410:function(t,e,n){var r=n("23e7"),c=n("d039"),o=n("7b0b"),a=n("e163"),u=n("e177"),i=c((function(){a(1)}));r({target:"Object",stat:!0,forced:i,sham:!u},{getPrototypeOf:function(t){return a(o(t))}})},"4ae1":function(t,e,n){var r=n("23e7"),c=n("d066"),o=n("1c0b"),a=n("825a"),u=n("861d"),i=n("7c73"),s=n("0538"),l=n("d039"),b=c("Reflect","construct"),f=l((function(){function t(){}return!(b((function(){}),[],t)instanceof t)})),p=!l((function(){b((function(){}))})),d=f||p;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(p&&!f)return b(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var c=n.prototype,l=i(u(c)?c:Object.prototype),d=Function.apply.call(t,l,e);return u(d)?d:l}})},5350:function(t,e,n){"use strict";var r=n("7a23"),c=Object(r["W"])("data-v-6d5e68b2");Object(r["D"])("data-v-6d5e68b2");var o={class:"flex flex-col"},a={class:"post-header"},u={key:0,class:"post-title text-white uppercase"},i={class:"main-grid"},s={class:"relative"},l={key:1,class:"\r\n            bg-ob-deep-800\r\n            px-14\r\n            py-16\r\n            rounded-2xl\r\n            shadow-xl\r\n            block\r\n            min-h-screen\r\n          "},b=Object(r["j"])("br",null,null,-1),f=Object(r["j"])("br",null,null,-1),p=Object(r["j"])("br",null,null,-1),d={class:"col-span-1"};Object(r["B"])();var j=c((function(t,e,n,j,O,h){var v=Object(r["I"])("ob-skeleton"),y=Object(r["I"])("Profile"),g=Object(r["I"])("Toc"),m=Object(r["I"])("Sidebar"),w=Object(r["J"])("scroll-spy");return Object(r["A"])(),Object(r["g"])("div",o,[Object(r["j"])("div",a,[t.post.title?(Object(r["A"])(),Object(r["g"])("h1",u,Object(r["M"])(t.pageTitle),1)):(Object(r["A"])(),Object(r["g"])(v,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"}))]),Object(r["j"])("div",i,[Object(r