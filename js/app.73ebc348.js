(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("bc3a"),a=n.n(s),o=n("a7fe"),i=n.n(o),c=n("e11e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("searchBar",{on:{"pass-evt":t.listMask}}),n("l-map",{staticStyle:{height:"100%",width:"100%"},attrs:{center:t.center,zoom:t.zoom},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[n("l-tile-layer",{attrs:{url:t.url}}),n("l-control-zoom",{attrs:{position:"topright"}}),n("v-marker-cluster",t._l(t.list,(function(e,r){return n("l-marker",{key:r,attrs:{"lat-lng":[e.geometry.coordinates[1],e.geometry.coordinates[0]]}},[n("l-popup",[n("h3",[t._v(t._s(e.properties.name))]),n("p",[n("i",{staticClass:"icon_pin"}),t._v(t._s(e.properties.address))]),n("p",[n("i",{staticClass:"icon_tel"}),t._v(t._s(e.properties.phone))]),n("div",{staticClass:"btnWrap"},[n("button",{class:{soldout:!e.properties.mask_adult}},[t._v(" 成人："+t._s(t._f("mask")(e.properties.mask_adult))+" ")]),n("button",{class:{soldout:!e.properties.mask_child}},[t._v(" 兒童："+t._s(t._f("mask")(e.properties.mask_child))+" ")])])])],1)})),1)],1)],1)},l=[],d=(n("d81d"),n("2699")),p=n("a40a"),f=n("4e2b"),m=n("c8b6"),v=n("f60f"),h=n("ca9f"),_=n.n(h),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category",class:{close:!t.isOpen}},[n("div",{staticClass:"search city-selector-set"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected.country,expression:"selected.country"}],staticClass:"country",attrs:{name:"country"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.selected,"country",e.target.multiple?n:n[0])},function(e){t.selected.dist=null}]}},t._l(t.country,(function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected.dist,expression:"selected.dist"}],staticClass:"dist",attrs:{name:"dist"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.selected,"dist",e.target.multiple?n:n[0])},function(e){return t.passLatLng(!1)}]}},[n("option",{attrs:{value:"null",selected:""}},[t._v("-- 請選擇 --")]),t._l(t.dist,(function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2),n("p",[t._v(" 有取得口罩數量的藥局有 "),n("span",[t._v(" "+t._s(t.list.filter((function(t){return t.mask_child||t.mask_adult})).length)+" ")]),t._v(" 家 ")])]),n("ul",{staticClass:"list"},t._l(t.list,(function(e,r){return n("li",{key:r},[n("h3",[t._v(t._s(e.name))]),n("p",[n("i",{staticClass:"icon_pin"}),t._v(t._s(e.address))]),n("p",[n("i",{staticClass:"icon_tel"}),t._v(t._s(e.phone))]),n("div",{staticClass:"btnWrap"},[n("button",{class:{soldout:!e.mask_adult}},[t._v(" 成人："+t._s(t._f("mask")(e.mask_adult))+" ")]),n("button",{class:{soldout:!e.mask_child}},[t._v(" 兒童："+t._s(t._f("mask")(e.mask_child))+" ")])])])})),0),n("button",{staticClass:"toggleBtn",on:{click:function(e){t.isOpen=!t.isOpen}}},[n("i",{staticClass:"icon_arrow",class:{close:!t.isOpen}})])])},g=[],b=(n("caad"),n("c975"),n("2532"),n("96cf"),n("1da1")),k={name:"searchBar",props:{properties:Array},data:function(){return{isOpen:!0,twCity:[],api:[],selected:{country:"台北市",dist:null}}},created:function(){this.getAPI(),this.getCountry()},methods:{getAPI:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR14GsJ3L_SUQSTO1F9ru1pydJrv2t9KJA5xQqqhw5Fode7Y7VGubLGjnBM");case 2:n=e.sent,r=n.data,t.api=r.features;case 5:case"end":return e.stop()}}),e)})))()},getCountry:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("./latlng.json");case 3:n=e.sent,r=n.data,t.twCity=r,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},passLatLng:function(){var t=this,e=this.api.filter((function(e){return e.properties.address.includes(t.selected.country)&&e.properties.address.includes(t.selected.dist)}));this.$emit("pass-evt",e)}},computed:{country:function(){return this.twCity.map((function(t){return t.city})).filter((function(t,e,n){return n.indexOf(t)===e}))},dist:function(){var t=this;return this.twCity.filter((function(e){return e.city===t.selected.country})).map((function(t){return t.district})).filter((function(t,e,n){return n.indexOf(t)===e}))},list:function(){var t=this;return this.api.map((function(t){return t.properties})).filter((function(e){return t.selected.dist?e.address.includes(t.selected.country)&&e.address.includes(t.selected.dist):e.address.includes(t.selected.country)}))}}},w=k,O=(n("9a1d"),n("2877")),x=Object(O["a"])(w,y,g,!1,null,"ebe2fd0a",null),C=x.exports,j={name:"app",components:{searchBar:C,LMap:d["a"],LTileLayer:p["a"],LMarker:f["a"],LControlZoom:m["a"],LPopup:v["a"],"v-marker-cluster":_.a},data:function(){return{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",center:[23.8759391,120.588669],zoom:8,bounds:null,list:[]}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t},listMask:function(t){var e=this;this.list=t,this.center=[t[0].geometry.coordinates[1],t[0].geometry.coordinates[0]],this.zoom=13,setTimeout((function(){e.center=[t[0].geometry.coordinates[1],t[0].geometry.coordinates[0]]}),500)}},computed:{markList:function(){var t=this.list.map((function(t){return t.geometry.coordinates}));return t}}},L=j,P=(n("5c0b"),Object(O["a"])(L,u,l,!1,null,null,null)),U=P.exports;n("6cc5");delete c["Icon"].Default.prototype._getIconUrl,c["Icon"].Default.mergeOptions({iconRetinaUrl:n("c384"),iconUrl:n("c384"),shadowUrl:n("e2b9")}),r["a"].use(i.a,a.a),r["a"].config.productionTip=!1,r["a"].filter("mask",(function(t){return t?"".concat(t,"個"):"已售完"})),new r["a"]({render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"9a1d":function(t,e,n){"use strict";var r=n("ea4a"),s=n.n(r);s.a},"9c0c":function(t,e,n){},c384:function(t,e,n){t.exports=n.p+"img/mark.77be2b02.svg"},ea4a:function(t,e,n){}});
//# sourceMappingURL=app.73ebc348.js.map