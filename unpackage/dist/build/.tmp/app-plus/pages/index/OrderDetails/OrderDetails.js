(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/OrderDetails/OrderDetails"],{"073d":function(t,e,a){},"1b50":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{detail1:null}},methods:{songda:function(e){var a=this;console.log(e),this.$api.determine(e).then(function(e){"success"==e.status&&200==e.status_code&&(a.$mUtils.msg({title:e.data.message}),setTimeout(function(){t.navigateBack({delta:1})},1500))})}},computed:{detail:function(){return JSON.parse(this.detail1)}},onLoad:function(t){this.detail1=t.titl1}};e.default=a}).call(this,a("6e42")["default"])},"5a41":function(t,e,a){"use strict";var s=a("073d"),i=a.n(s);i.a},6279:function(t,e,a){"use strict";a("7ed1");var s=c(a("b0ce")),i=c(a("fafd"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},bca5:function(t,e,a){"use strict";a.r(e);var s=a("1b50"),i=a.n(s);for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);e["default"]=i.a},fa87:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"page"},[t._m(0),a("view",{staticClass:"orderderails grace-columns"},[a("view",{staticClass:"few  grace-space-between "},[a("text",[t._v("#"+t._s(t.detail.id))]),a("text",[t._v("尽快送达")]),a("text",[t._v(t._s(t.detail.total/100))])]),a("view",{staticClass:"adderss grace-columns"},[a("view",{staticClass:"grace-rows"},[t._m(1),a("view",{staticClass:"ad_right"},[a("view",[t._v(t._s(t.detail.store.name))]),a("view",{staticClass:"ac"},[t._v(t._s(t.detail.store.address))]),a("view",[t._v(t._s(t.detail.customer_address.school_building.name))])])])]),a("view",{staticClass:"article grace-columns"},t._l(t.detail.products,function(e,s){return a("view",{key:e.id,staticClass:"items grace-space-between"},[a("text",{staticClass:"article_name"},[t._v(t._s(e.name))]),a("text",{staticClass:"article_count"},[t._v("*"+t._s(e.quantity))]),a("text",{staticClass:"article_pir"},[t._v("￥"+t._s(e.price/100))])])})),a("view",{staticClass:"rm remarks grace-space-between"},[a("text",{staticClass:"marks_b"},[t._v("备注")]),a("text",{staticClass:"marks_s"},[t._v(t._s(t.detail.comment))])]),a("view",{staticClass:"rm order_num grace-space-between"},[a("text",[t._v("订单号")]),a("text",[t._v(t._s(t.detail.order_number))])]),a("view",{staticClass:"rm dow_time grace-space-between"},[a("text",[t._v("下单时间")]),a("view",[t._v(t._s(t.detail.created_at))])])]),a("view",{directives:[{name:"show",rawName:"v-show",value:6==t.detail.status,expression:"detail.status == 6? true:false"}],staticClass:"option grace-rows"},[a("view",[t._v(t._s(t.detail.customer_address.phone))]),a("view",[t._v(t._s(t.detail.store.phone))]),a("view",{staticStyle:{color:"#1A7AFC"},attrs:{eventid:"50c00cfd-0"},on:{click:function(e){t.songda(t.detail.id)}}},[t._v("确定送达")])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"delivery"},[a("text",[t._v("正在配送")]),a("text",{staticClass:"icon-arrow-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"ad_left"},[a("view",[t._v("取货")]),a("view",[t._v("送货")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},fafd:function(t,e,a){"use strict";a.r(e);var s=a("fa87"),i=a("bca5");for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);a("5a41");var n=a("2877"),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"391f0c4c",null);e["default"]=r.exports}},[["6279","common/runtime","common/vendor"]]]);