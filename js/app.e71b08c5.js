(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);A&&A(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-587b22ea":"ddc57deb","chunk-6efd01a2":"b687cf87","chunk-7518abfa":"a7e7c982","chunk-bc9ddbc2":"caf25ef2","chunk-fd632dd8":"13f5330a","chunk-2cab37c8":"60e5b6b8","chunk-64d5f6ca":"08e225cc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-587b22ea":1,"chunk-6efd01a2":1,"chunk-7518abfa":1,"chunk-bc9ddbc2":1,"chunk-fd632dd8":1,"chunk-2cab37c8":1,"chunk-64d5f6ca":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-587b22ea":"dc966c5b","chunk-6efd01a2":"adeaaeb5","chunk-7518abfa":"63eafe37","chunk-bc9ddbc2":"d7f19ed1","chunk-fd632dd8":"8979202a","chunk-2cab37c8":"1da4f798","chunk-64d5f6ca":"d484e314"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var A=document.createElement("link");A.rel="stylesheet",A.type="text/css",A.onload=t,A.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],A.parentNode.removeChild(A),n(o)},A.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(A)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(A);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}a[e]=void 0}};var A=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/gota/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var A=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10a6":function(e,t){e.exports="data:image/png;base64,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"},4360:function(e,t,n){"use strict";var r=n("1da1"),c=(n("96cf"),n("a434"),n("159b"),n("4de4"),n("b0c0"),n("2b0e")),a=n("2f62"),o=n("d399"),i="gota",u="gataType",s=[{name:"零食",emoji:"🍫",cut:0},{name:"出行",emoji:"🚗",cut:0},{name:"旅游",emoji:"🏞️",cut:0},{name:"吃饭",emoji:"🍔",cut:0},{name:"购物",emoji:"🛒",cut:0},{name:"运动",emoji:"🚴",cut:0},{name:"医疗",emoji:"👨‍⚕️",cut:0},{name:"数码",emoji:"💻",cut:0},{name:"住房",emoji:"🏠",cut:0},{name:"工资",emoji:"💳",cut:1},{name:"红包",emoji:"🧧",cut:1},{name:"股票",emoji:"💹",cut:1},{name:"外快",emoji:"💰",cut:1}];function d(){var e=JSON.parse(localStorage.getItem(i));return e||[]}function f(e){localStorage.setItem(i,JSON.stringify(e))}function A(){var e=JSON.parse(localStorage.getItem(u));return e||s}function p(e){localStorage.setItem(u,JSON.stringify(e))}c["a"].use(a["a"]);t["a"]=new a["a"].Store({state:{types:[],recordList:[]},getters:{types:function(e){return e.types},recordList:function(e){return e.recordList}},mutations:{initRecordList:function(e,t){e.recordList=t},setRecordList:function(e,t){e.recordList.push(t)},deleteRecord:function(e,t){e.recordList.splice(t,1)},editRecord:function(e,t){e.recordList[t.index]=t.payload},initTypes:function(e,t){e.types=t},addType:function(e,t){e.types.push(t)},deleteType:function(e,t){e.types.splice(t,1)}},actions:{initRecordList:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:n=t.sent,e.commit("initRecordList",n);case 4:case"end":return t.stop()}}),t)})))()},setRecordList:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.commit("setRecordList",t);case 2:f(e.getters.recordList);case 3:case"end":return n.stop()}}),n)})))()},deleteRecord:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getters.recordList,n.next=3,r.forEach((function(n,r){n.create===t&&e.commit("deleteRecord",r)}));case 3:f(e.getters.recordList);case 4:case"end":return n.stop()}}),n)})))()},editRecord:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.getters.recordList,c=0,r.forEach((function(e,n){e.create===t.create&&(c=n)})),e.commit("editRecord",{index:c,payload:t}),f(e.getters.recordList);case 5:case"end":return n.stop()}}),n)})))()},initTypes:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:n=t.sent,e.commit("initTypes",n);case 4:case"end":return t.stop()}}),t)})))()},addType:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.getters.types.filter((function(e){return e.name===t.name?e:null})),!(r.length>0)){n.next=3;break}return n.abrupt("return",Object(o["a"])("".concat(t.name," 已经存在")));case 3:return n.next=5,e.commit("addType",t);case 5:return n.abrupt("return",p(e.getters.types));case 6:case"end":return n.stop()}}),n)})))()},deleteTypes:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("deleteType",t),p(e.getters.types);case 2:case"end":return n.stop()}}),n)})))()}},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("f0a2");var r=n("f600"),c=n("ab2c"),a=n("e41f"),o=n("ee83"),i=n("2b0e"),u=n("ecee"),s=n("c074"),d=n("ad3d");u["c"].add(s["m"],s["d"],s["f"],s["h"],s["i"],s["j"],s["k"],s["b"],s["c"],s["l"],s["a"],s["e"],s["g"]);var f=d["a"],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("router-view",{staticClass:"app-page"})],1)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mobile-tips"},[r("div",{staticClass:"tips"},[r("span",[e._v("使用开发者工具模拟手机查看")]),r("br"),r("span",[e._v("或")]),r("br"),r("span",[e._v("手机扫码查看")]),e._v(" "),r("br"),r("img",{attrs:{src:n("10a6"),alt:"qrcode"}})])])}],l={},g=l,m=(n("5c0b"),n("2877")),h=Object(m["a"])(g,A,p,!1,null,null,null),b=h.exports,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));i["a"].use(v["a"]);var y=new v["a"]({mode:"hash",base:"/gota/",routes:[{path:"/",redirect:"/money"},{path:"/money",component:function(){return Promise.all([n.e("chunk-fd632dd8"),n.e("chunk-64d5f6ca")]).then(n.bind(null,"aba4"))}},{path:"/chart",component:function(){return n.e("chunk-7518abfa").then(n.bind(null,"5178"))}},{path:"/setting",component:function(){return n.e("chunk-6efd01a2").then(n.bind(null,"4ef5"))}},{name:"addRecord",path:"/money/add",component:function(){return Promise.all([n.e("chunk-fd632dd8"),n.e("chunk-2cab37c8")]).then(n.bind(null,"51784"))}},{path:"/setting/types",component:function(){return n.e("chunk-587b22ea").then(n.bind(null,"aac2"))}},{path:"*",component:function(){return n.e("chunk-bc9ddbc2").then(n.bind(null,"9703"))}}]}),w=y,I=n("4360");n("c2d8"),n("153e"),n("05a8"),n("160b");i["a"].use(r["a"]),i["a"].use(c["a"]),i["a"].use(a["a"]),i["a"].use(o["a"]),i["a"].component("icon",f),i["a"].config.productionTip=!1,new i["a"]({router:w,store:I["a"],render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.e71b08c5.js.map