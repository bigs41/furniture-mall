(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1346:function(t,e,l){"use strict";l.r(e);var r=l(18),n=(l(45),l(36),l(14),l(8),l(26),l(53),l(95),l(40),l(66)),d=l(13),o=l.n(d),c=l(78),v=l.n(c),f={layout:"manage-activity",data:function(){return{field:{id:null,name:null,list:[]},itemsStatus:[{value:!1,text:"Inactive"},{value:!0,text:"active"}],headers:[{text:"รหัสสินค้า",value:"sku",sortable:!1},{text:"ชื่อสินค้า",value:"name",sortable:!1},{text:"ราคาซื้อ",value:"sellprice",width:"10%",sortable:!1},{text:"ราคาขาย",value:"purchaseprice",width:"10%",sortable:!1},{text:"จำนวน",value:"quantity",width:"10%",sortable:!1}],prefix:"เพิ่ม"}},methods:{syncData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.a.get("/api/bundle/"+t.$route.params.id).then((function(e){t.field=o.a.get(e,"data.data",o.a.get(e,"data",{})),t.empty(t.field.products)||(t.field.products=v()(t.field.products).map((function(e){return e.quantity=v()(t.field.list).where("id",e.product_id).first().quantity,e})).all())}));case 1:case"end":return e.stop()}}),e)})))()},back:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:path=o.a.filter(t.$route.path.split("/")),path=o.a.filter(path,(function(t,e){return e!=path.length-1})),path=o.a.join(path,"/"),t.$router.push("/".concat(path));case 4:case"end":return e.stop()}}),e)})))()},save:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.post("/api/bundle/"+t.$route.params.id,{status:t.field.status}).then((function(e){t.back()}));case 2:case"end":return e.stop()}}),e)})))()}},created:function(){["create","add","0"].includes(this.$route.params.id)||(this.prefix="แก้ไข")},mounted:function(){["create","add","0"].includes(this.$route.params.id)||this.syncData()}},m=l(2),x=l(29),_=l.n(x),h=l(185),k=l(310),y=l(122),w=l(1242),$=l(39),C=l(1244),V=l(65),R=l(99),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("Headtitle",{attrs:{title:t.prefix+"เฟอร์นิเจอร์"}}),t._v(" "),l("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[l("v-card-text",[l("v-row",[l("v-col",{attrs:{md:"12",xd:"12",cols:"12"}},[l("v-row",[l("v-col",{attrs:{md:"3",xd:"3",cols:"12"}},[l("v-list-item-subtitle",{staticClass:"grey--text text--darken-1 body-1 pr-2 mb-2"},[t._v(t._s(t.$t("รหัสคอลเล็กชั่น")))]),t._v(" "),l("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"รหัสคอลเล็กชั่น",disabled:""},model:{value:t.field.code,callback:function(e){t.$set(t.field,"code",e)},expression:"field.code"}})],1),t._v(" "),l("v-col",{attrs:{md:"6",xd:"6",cols:"12"}},[l("v-list-item-subtitle",{staticClass:"grey--text text--darken-1 body-1 pr-2 mb-2"},[t._v(t._s(t.$t("ชื่อคอลเล็กชั่น")))]),t._v(" "),l("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"ชื่อคอลเล็กชั่น",disabled:""},model:{value:t.field.name,callback:function(e){t.$set(t.field,"name",e)},expression:"field.name"}})],1),t._v(" "),l("v-col",{attrs:{md:"3",xd:"3",cols:"12"}},[l("v-list-item-subtitle",{staticClass:"grey--text text--darken-1 body-1 pr-2 mb-2"},[t._v(t._s(t.$t("สถานะ")))]),t._v(" "),l("v-select",{attrs:{items:t.itemsStatus,outlined:"",dense:"","item-text":"text","item-value":"value"},model:{value:t.field.status,callback:function(e){t.$set(t.field,"status",e)},expression:"field.status"}})],1)],1),t._v(" "),l("v-row",[l("v-col",{attrs:{md:"3",xd:"3",cols:"12"}},[l("v-list-item-subtitle",{staticClass:"grey--text text--darken-1 body-1 pr-2 mb-2"},[t._v(t._s(t.$t("ราคาขายสินค้ารวม")))]),t._v(" "),l("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"ราคาขายสินค้ารวม",disabled:""},model:{value:t.field.sellpricetotal,callback:function(e){t.$set(t.field,"sellpricetotal",e)},expression:"field.sellpricetotal"}})],1),t._v(" "),l("v-col",{attrs:{md:"3",xd:"3",cols:"12"}},[l("v-list-item-subtitle",{staticClass:"grey--text text--darken-1 body-1 pr-2 mb-2"},[t._v(t._s(t.$t("ราคาขาย")))]),t._v(" "),l("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"ราคาขาย"},model:{value:t.field.sellprice,callback:function(e){t.$set(t.field,"sellprice",e)},expression:"field.sellprice"}})],1),t._v(" "),l("v-col",{attrs:{md:"3",xd:"3",cols:"12"}},[l("v-list-item-subtitle",{staticClass:"grey--text text--darken-1 body-1 pr-2 mb-2"},[t._v(t._s(t.$t("คงเหลือ")))]),t._v(" "),l("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"คงเหลือ",disabled:""},model:{value:t.field.stock,callback:function(e){t.$set(t.field,"stock",e)},expression:"field.stock"}})],1),t._v(" "),l("v-col",{attrs:{md:"3",xd:"3",cols:"12"}},[l("v-list-item-subtitle",{staticClass:"grey--text text--darken-1 body-1 pr-2 mb-2"},[t._v(t._s(t.$t("พร้อมขาย")))]),t._v(" "),l("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"พร้อมขาย",disabled:""},model:{value:t.field.availablestock,callback:function(e){t.$set(t.field,"availablestock",e)},expression:"field.availablestock"}})],1)],1)],1),t._v(" "),l("v-col",{attrs:{md:"12",xd:"12",cols:"12"}},[l("v-row",[l("v-col",[l("v-api-table-v2",{attrs:{"pagination-header":"",headers:t.headers,items:t.field.products,"hide-default-footer":""},scopedSlots:t._u([{key:"item.quantity",fn:function(e){var r=e.item;return[l("input",{directives:[{name:"model",rawName:"v-model",value:r.quantity,expression:"item.quantity"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:r.quantity},on:{input:function(e){e.target.composing||t.$set(r,"quantity",e.target.value)}}})]}}],null,!0)})],1)],1)],1)],1),t._v(" "),l("v-row",[l("v-col",[l("v-btn",{staticClass:"mr-4 while--text",attrs:{color:"#4d6785"},on:{click:function(e){return t.save()}}},[t._v(t._s(t.$t("บันทึก")))]),t._v(" "),l("v-btn",{staticClass:"mr-4",attrs:{color:"#d1d3d6"},on:{click:function(e){return t.back()}}},[t._v(t._s(t.$t("ย้อนกลับ")))])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{Headtitle:l(729).default,VApiTableV2:l(730).default}),_()(component,{VBtn:h.a,VCard:k.a,VCardText:y.c,VCol:w.a,VListItemSubtitle:$.b,VRow:C.a,VSelect:V.a,VTextField:R.a})}}]);