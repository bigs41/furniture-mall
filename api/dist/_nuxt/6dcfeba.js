(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1333:function(e,t,r){"use strict";r.r(t);var n=r(18),c=(r(45),r(66)),o={data:function(){return{isLoading:!1,selected:[],tempsearch:"",search:"",headers:[{text:"Name",value:"name",filterable:!0},{text:"Sku",value:"sku",filterable:!0},{text:"Stock",value:"stock",filterable:!0}],isCreate:!1,isEdit:!1,isDelete:!1}},methods:{syncData:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.$refs.apiTable.loading=!0,t.next=5,c.a.get("/api/products/syncZortout");case 5:return t.sent,t.next=8,e.$refs.apiTable.getData();case 8:e.$refs.apiTable.loading=!1,e.isLoading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}},watch:{},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$checkPermission("product","create").then((function(t){e.isCreate=t})),e.$checkPermission("product","edit").then((function(t){e.isEdit=t})),e.$checkPermission("product","remove").then((function(t){e.isDelete=t}));case 3:case"end":return t.stop()}}),t)})))()}},l=r(2),d=r(29),h=r.n(d),f=r(185),m=r(310),v=r(122),k=r(1241),x=r(99),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-body",[r("div",[r("v-card",{attrs:{outlined:""}},[r("v-card-title",[r("h1",[e._v("Product")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{staticClass:"mr-5",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"",solo:"",dense:"","hide-details":""},on:{"click:append":function(t){e.search=e.tempsearch},enter:function(t){e.search=e.tempsearch}},model:{value:e.tempsearch,callback:function(t){e.tempsearch=t},expression:"tempsearch"}}),e._v(" "),e.isCreate?r("v-btn",{attrs:{dark:"",color:"teal",loading:e.isLoading},on:{click:e.syncData}},[e._v("sync")]):e._e()],1),e._v(" "),r("v-api-table",{ref:"apiTable",attrs:{headers:e.headers,url:"/api/products","item-key":"_id",search:e.search,searchFields:["name","sku"],"pagination-number":"","hide-default-footer":""},on:{"click:row":function(t){e.$router.push(e.$route.path+"/"+t._id)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;h()(component,{VApiTable:r(733).default,VBody:r(732).default}),h()(component,{VBtn:f.a,VCard:m.a,VCardTitle:v.d,VSpacer:k.a,VTextField:x.a})}}]);