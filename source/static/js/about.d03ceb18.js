(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0538":function(t,e,n){"use strict";var r=n("1c0b"),c=n("861d"),o=[].slice,a={},u=function(t,e,n){if(!(e in a)){for(var r=[],c=0;c<e;c++)r[c]="a["+c+"]";a[e]=Function("C,a","return new C("+r.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=o.call(arguments,1),a=function(){var r=n.concat(o.call(arguments));return this instanceof a?u(e,r.length,r):e.apply(t,r)};return c(e.prototype)&&(a.prototype=e.prototype),a}},3410:function(t,e,n){var r=n("23e7"),c=n("d039"),o=n("7b0b"),a=n("e163"),u=n("e177"),i=c((function(){a(1)}));r({target:"Object",stat:!0,forced:i,sham:!u},{getPrototypeOf:function(t){return a(o(t))}})},"4ae1":function(t,e,n){var r=n("23e7"),c=n("d066"),o=n("1c0b"),a=n("825a"),u=n("861d"),i=n("7c73"),s=n("0538"),l=n("d039"),b=c("Reflect","construct"),f=l((function(){function t(){}return!(b((function(){}),[],t)instanceof t)})),p=!l((function(){b((function(){}))})),d=f||p;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(p&&!f)return b(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var c=n.prototype,l=i(u(c)?c:Object.prototype),d=Function.apply.call(t,l,e);return u(d)?d:l}})},5350:function(t,e,n){"use strict";var r=n("7a23"),c=Object(r["W"])("data-v-6d5e68b2");Object(r["D"])("data-v-6d5e68b2");var o={class:"flex flex-col"},a={class:"post-header"},u={key:0,class:"post-title text-white uppercase"},i={class:"main-grid"},s={class:"relative"},l={key:1,class:"\r\n            bg-ob-deep-800\r\n            px-14\r\n            py-16\r\n            rounded-2xl\r\n            shadow-xl\r\n            block\r\n            min-h-screen\r\n          "},b=Object(r["j"])("br",null,null,-1),f=Object(r["j"])("br",null,null,-1),p=Object(r["j"])("br",null,null,-1),d={class:"col-span-1"};Object(r["B"])();var j=c((function(t,e,n,j,O,h){var v=Object(r["I"])("ob-skeleton"),y=Object(r["I"])("Profile"),g=Object(r["I"])("Toc"),m=Object(r["I"])("Sidebar"),w=Object(r["J"])("scroll-spy");return Object(r["A"])(),Object(r["g"])("div",o,[Object(r["j"])("div",a,[t.post.title?(Object(r["A"])(),Object(r["g"])("h1",u,Object(r["M"])(t.pageTitle),1)):(Object(r["A"])(),Object(r["g"])(v,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"}))]),Object(r["j"])("div",i,[Object(r["j"])("div",s,[t.post.content?Object(r["T"])((Object(r["A"])(),Object(r["g"])("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,["innerHTML"])),[[w,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(Object(r["A"])(),Object(r["g"])("div",l,[Object(r["j"])(v,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),b,Object(r["j"])(v,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),f,p,Object(r["j"])(v,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),Object(r["H"])(t.$slots,"default",{},void 0,!0)]),Object(r["j"])("div",d,[Object(r["j"])(m,null,{default:c((function(){return[Object(r["j"])(y,{author:"blog-author"}),Object(r["j"])(g,{toc:t.post.toc},null,8,["toc"])]})),_:1})])])])})),O=n("47e2"),h=n("2a1d"),v=n("5701"),y=Object(r["k"])({name:"ObPageContainer",components:{Sidebar:h["d"],Toc:h["f"],Profile:h["b"]},props:{post:{type:Object,default:function(){return{}}},title:{type:String,default:""}},setup:function(t){var e=Object(v["a"])(),n=Object(O["b"])(),c=n.t,o=Object(r["N"])(t).post,a=Object(r["N"])(t).title;return Object(r["R"])((function(){return o.value.covers}),(function(t){console.log(t),t&&e.setHeaderImage(t)})),Object(r["x"])((function(){e.setHeaderImage(o.value.covers)})),Object(r["y"])((function(){e.resetHeaderImage()})),{pageTitle:Object(r["e"])((function(){return""!==a.value?a.value:o.value.title})),t:c}}});n("8625");y.render=j,y.__scopeId="data-v-6d5e68b2";e["a"]=y},7037:function(t,e,n){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),r(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),t.exports=r,t.exports["default"]=t.exports,t.exports.__esModule=!0},"76f0":function(t,e,n){"use strict";n("b1d6")},8625:function(t,e,n){"use strict";n("9d2c")},"9d2c":function(t,e,n){},b1d6:function(t,e,n){},b6c6:function(t,e,n){"use strict";var r=n("7a23"),c=Object(r["W"])("data-v-4170130a");Object(r["D"])("data-v-4170130a");var o={class:"breadcrumbs flex flex-row gap-6 text-white"};Object(r["B"])();var a=c((function(t,e,n,c,a,u){return Object(r["A"])(),Object(r["g"])("ul",o,[Object(r["j"])("li",null,Object(r["M"])(t.t("menu.home")),1),Object(r["j"])("li",null,Object(r["M"])(t.current),1)])})),u=n("47e2"),i=Object(r["k"])({name:"Breadcrumb",props:{current:String},setup:function(){var t=Object(u["b"])(),e=t.t;return{t:e}}});n("76f0");i.render=a,i.__scopeId="data-v-4170130a";e["a"]=i},ced1:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("1da1"),c=(n("96cf"),n("d3b7"),n("77ba")),o=n("79f6"),a=n("d8ac"),u=Object(c["b"])({id:"articleStore",state:function(){return{}},getters:{},actions:{fetchArticle:function(t){return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["f"])(t);case 2:return n=e.sent,r=n.data,e.abrupt("return",new Promise((function(t){return setTimeout((function(){t(new a["a"](r))}),200)})));case 5:case"end":return e.stop()}}),e)})))()}}})},d8ac:function(t,e,n){"use stric