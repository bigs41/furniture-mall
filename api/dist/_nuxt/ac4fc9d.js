(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1356:function(t,e,r){"use strict";r.r(e);var n=r(18),c=(r(14),r(8),r(26),r(53),r(95),r(45),r(66)),o=r(13),l=r.n(o),d={data:function(){return{field:{}}},methods:{syncData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/products/".concat(t.$route.params.id));case 2:r=e.sent,t.field=l.a.get(r.data,"data",{}),delete t.field._id,delete t.field.__v,delete t.field.id;case 7:case"end":return e.stop()}}),e)})))()},back:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:path=l.a.filter(t.$route.path.split("/")),path=l.a.filter(path,(function(t,e){return e!=path.length-1})),path=l.a.join(path,"/"),t.$router.push("/".concat(path));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.syncData();case 2:console.log(t.field);case 3:case"end":return e.stop()}}),e)})))()}},f=r(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"20px"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col d-flex justify-content-end"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.back()}}},[t._v(t._s(t.$t("back")))])])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",t._l(Object.entries(t.field),(function(e,n){return r("div",{key:n,staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v(t._s(e[0]))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e[1],expression:"value[1]"}],staticClass:"form-control",attrs:{type:"text",disabled:"",placeholder:"Name"},domProps:{value:e[1]},on:{input:function(r){r.target.composing||t.$set(e,1,r.target.value)}}})])})),0)]),t._v(" "),r("div",{staticClass:"card-footer text-muted"})])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col d-flex justify-content-start"},[r("h4",[t._v("Products")])])}],!1,null,null,null);e.default=component.exports}}]);