(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/loding/registered/registered"],{4156:function(e,t,o){"use strict";var n=o("fa8a"),a=o.n(n);a.a},"4eb9":function(e,t,o){"use strict";o("7ed1");var n=i(o("b0ce")),a=i(o("e317"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(a.default))},"8c54":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"page"},[o("view",{staticClass:"content"},[o("view",{staticClass:"username grace-flex grace-flex-vcenter"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入你的名字",eventid:"f45e9094-0"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),o("image",{class:e.name?"active":"",attrs:{src:"../../../static/LoginImg/dow.png",eventid:"f45e9094-1"},on:{click:e.remove}})]),o("mycodeinput",{ref:"codePhone",attrs:{mpcomid:"f45e9094-0"}}),o("myPhoneinput",{ref:"code",attrs:{mpcomid:"f45e9094-1"}}),o("mypassword",{ref:"password",attrs:{mpcomid:"f45e9094-2"}}),o("view",{staticClass:"work_title grace-space-between"},[o("text",[e._v("请选择工作类型")]),o("text",{class:e.full?"active title1":"title1",attrs:{eventid:"f45e9094-2"},on:{click:function(t){e.changefull(!1)}}},[e._v("兼职")]),o("text",{class:e.full?"title1":"active title1",attrs:{eventid:"f45e9094-3"},on:{click:function(t){e.changefull(!0)}}},[e._v("全职")])]),o("view",{staticClass:"user-car"},[e._v("请上传身份证正反面")]),o("view",{staticClass:"card grace-rows"},[o("view",{staticClass:"vice grace-columns"},[o("image",{attrs:{src:e.photo1?e.photo1:"../../../static/LoginImg/user-car.png",eventid:"f45e9094-4"},on:{click:function(t){e.anti(!0)}}}),o("text",[e._v("正面")])]),o("view",{staticClass:"vice grace-columns"},[o("image",{attrs:{src:e.photo2?e.photo1:"../../../static/LoginImg/user-car.png",eventid:"f45e9094-5"},on:{click:function(t){e.anti(!1)}}}),o("text",[e._v("反面")])])]),o("view",{staticClass:"msg grace-rows"},[o("view",{class:e.ok?"ojbk":"",attrs:{eventid:"f45e9094-6"},on:{click:e.agree}}),e._m(0)]),o("button",{staticClass:"btn-reg active",attrs:{eventid:"f45e9094-7"},on:{click:e.login}},[e._v("注册")])],1)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("text",{attrs:{"grace-rows":""}},[e._v("点击“立即注册”按钮即同意"),o("text",[e._v("《校餐宝隐私政策》")]),e._v("及"),o("text",[e._v("《校餐 宝用户服务协议》")])])}];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},cd9d:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(o("8fbc")),a=s(o("2b0d")),i=s(o("09f3"));function s(e){return e&&e.__esModule?e:{default:e}}var c={name:"regisrered",data:function(){return{full:!0,ok:!1,photo1:"",photo2:"",name:""}},computed:{full_time:function(){return this.full?"1":"2"}},components:{myPhoneinput:a.default,mycodeinput:n.default,mypassword:i.default},methods:{agree:function(){this.ok=!this.ok},changefull:function(e){this.full=!e},anti:function(t){var o=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){t?o.photo1=e.tempFilePaths[0]:o.photo2=e.tempFilePaths[0]}})},login:function(){var t=this,o=[{name:"photo1",uri:this.photo1},{name:"photo2",uri:this.photo2}];e.uploadFile({url:"https://xchl.utobang.com/api/courier",files:o,header:{"content-type":"multipart/form-data"},formData:{name:this.name,phone:this.$refs.codePhone.phone,code:this.$refs.code.code,password:this.$refs.password.password,full_time:this.full_time,school_id:1},success:function(e){console.log(JSON.stringify(e)),"200"==e.status_code&&(t.$mUtils.msg({title:"注册成功"}),t.$store.commit("set_token",res.data.token.access_token),t.$store.commit("set_info",res.data.courier),t.$mRouterConfig.switchTab({router:t.$mRouter.home}))}})},remove:function(){this.name=""}}};t.default=c}).call(this,o("6e42")["default"])},e317:function(e,t,o){"use strict";o.r(t);var n=o("8c54"),a=o("e80b");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("4156");var s=o("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"92bf74c0",null);t["default"]=c.exports},e80b:function(e,t,o){"use strict";o.r(t);var n=o("cd9d"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},fa8a:function(e,t,o){}},[["4eb9","common/runtime","common/vendor"]]]);