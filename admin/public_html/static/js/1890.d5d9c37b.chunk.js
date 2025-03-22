"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1890],{8168:(e,t,i)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}i.d(t,{A:()=>n})},28645:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(9950),l=i(66362),d=i(69216),r=i(80737),a=i(25933),o=i(57811),s=i(81541),c=i(48538),u=i(89323),v=i(70030),h=i(44414);const{Text:p}=l.A,m=e=>{let{columns:t=[],setColumns:i,style:l,size:m="",iconOnly:x}=e;const{t:g}=(0,v.B)(),[y,A]=(0,n.useState)(!1),f=(0,h.jsx)(d.A,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(d.A.Item,{children:(0,h.jsxs)(r.A,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(a.A,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));i(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(o.A,{overlay:f,trigger:["click"],onVisibleChange:e=>{A(e)},visible:y,children:(0,h.jsx)(s.A,{title:g("change.columns"),children:(0,h.jsx)(c.A,{style:{...l},size:m,icon:(0,h.jsx)(u.A,{}),children:x?null:g("Columns")})})})}},35116:(e,t,i)=>{i.d(t,{A:()=>s});i(9950);var n=i(48538),l=i(44070),d=i(85923),r=i(70030),a=i(13311),o=i(44414);function s(e){let{size:t="",onClick:i,type:s="default",...c}=e;const{t:u}=(0,r.B)(),{isDemo:v}=(0,a.A)();return(0,o.jsx)(n.A,{size:t,icon:(0,o.jsx)(l.A,{}),onClick:e=>{v?d.oR.warning(u("cannot.work.demo")):i(e)},type:s,...c})}},53387:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(89379),l=i(9950);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var r=i(25085),a=function(e,t){return l.createElement(r.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:d}))};const o=l.forwardRef(a)},53774:(e,t,i)=>{function n(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?`${i} ${e}`:`${e} ${i}`}i.r(t),i.d(t,{default:()=>n})},61890:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var n=i(9950),l=i(80737),d=i(48538),r=i(23263),a=i(52913),o=i(28429),s=i(24513),c=i(44070),u=i(53387),v=i(76083),h=i(55386),p=i(91854),m=i(74623),x=i(70498),g=i(58268),y=i(85923),A=i(70030),f=i(35116),j=i(28645),w=i(88986),k=i(8168),z=i(53774),C=i(44414);const b=()=>{var e,t,i;const{t:b}=(0,A.B)(),V=(0,p.wA)(),H=(0,o.Zp)(),{setIsModalVisible:I}=(0,n.useContext)(h.o),[_,R]=(0,n.useState)(!1),{activeMenu:S}=(0,p.d4)((e=>e.menu),p.bN),{deliveryPrice:$,meta:M,loading:P,params:B}=(0,p.d4)((e=>e.deliveryPrice),p.bN),{defaultCurrency:N}=(0,p.d4)((e=>e.currency),p.bN),[E,O]=(0,n.useState)(null),K=S.data,T={perPage:null===K||void 0===K?void 0:K.perPage,page:null===K||void 0===K?void 0:K.page},[X,D]=(0,n.useState)([{title:b("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:b("country"),dataIndex:"country",key:"country",is_show:!0,render:e=>{var t,i;return null!==(t=null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title)&&void 0!==t?t:"--"}},{title:b("region"),dataIndex:"region",key:"region",is_show:!0,render:e=>{var t,i;return null!==(t=null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title)&&void 0!==t?t:"--"}},{title:b("city"),dataIndex:"city",key:"city",is_show:!0,render:e=>{var t,i;return null!==(t=null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title)&&void 0!==t?t:"--"}},{title:b("area"),dataIndex:"area",key:"area",is_show:!0,render:e=>{var t,i;return null!==(t=null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title)&&void 0!==t?t:"--"}},{title:b("price"),dataIndex:"price",key:"price",is_show:!0,render:e=>(0,z.default)(e,null===N||void 0===N?void 0:N.symbol)},{title:b("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,C.jsxs)(l.A,{children:[(0,C.jsx)(d.A,{type:"primary",icon:(0,C.jsx)(s.A,{}),onClick:()=>F(t)}),(0,C.jsx)(f.A,{icon:(0,C.jsx)(c.A,{}),onClick:()=>{I(!0),O([t.id])}})]})}]),F=e=>{V((0,m.X4)({url:`seller/delivery-price/${e.id}`,id:"price.edit",name:b("edit.delivery.price")})),H(`${e.id}`)};(0,w.A)((()=>{V((0,g.Rm)(T))}),[S.data]),(0,n.useEffect)((()=>{S.refetch&&(V((0,g.Rm)(T)),V((0,m.km)(S)))}),[S.refetch]);const Z={selectedRowKeys:E,onChange:e=>{O(e)}};return(0,C.jsxs)(r.A,{title:b("delivery.price"),extra:(0,C.jsxs)(l.A,{wrap:!0,children:[(0,C.jsx)(d.A,{type:"primary",icon:(0,C.jsx)(u.A,{}),onClick:()=>{V((0,m.X4)({id:"delivery-price/add",url:"seller/delivery-price/add",name:b("add.delivery.price")})),H("add")},children:b("add.delivery.price")}),(0,C.jsx)(f.A,{size:"",onClick:()=>{null===E||0===E.length?y.oR.warning(b("select.the.product")):I(!0)},children:b("delete.selected")}),(0,C.jsx)(j.A,{setColumns:D,columns:X})]}),children:[(0,C.jsx)(a.A,{scroll:{x:!0},rowSelection:Z,columns:null===X||void 0===X?void 0:X.filter((e=>e.is_show)),dataSource:$,pagination:{pageSize:B.perPage,page:(null===(e=S.data)||void 0===e?void 0:e.page)||1,total:M.total,defaultCurrent:null===(t=S.data)||void 0===t?void 0:t.page,current:null===(i=S.data)||void 0===i?void 0:i.page},rowKey:e=>e.id,loading:P,onChange:function(e,t,i){const{pageSize:n,current:l}=e,{field:d,order:r}=i,a=(0,k.A)(r);V((0,m.Ok)({activeMenu:S,data:{...S.data,perPage:n,page:l,column:d,sort:a}}))}}),(0,C.jsx)(v.A,{click:()=>{R(!0);const e={...Object.assign({},...E.map(((e,t)=>({[`ids[${t}]`]:e}))))};x.A.delete(e).then((()=>{V((0,g.Rm)({})),y.oR.success(b("successfully.deleted")),I(!1)})).finally((()=>{R(!1)}))},text:b("delete"),loading:_,setText:O})]})}},89323:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(89379),l=i(9950);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var r=i(25085),a=function(e,t){return l.createElement(r.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:d}))};const o=l.forwardRef(a)}}]);