"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4442],{8168:(e,t,i)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}i.d(t,{A:()=>n})},28645:(e,t,i)=>{i.d(t,{A:()=>g});var n=i(9950),d=i(66362),l=i(69216),a=i(80737),o=i(25933),r=i(57811),s=i(81541),c=i(48538),u=i(89323),v=i(70030),h=i(44414);const{Text:p}=d.A,g=e=>{let{columns:t=[],setColumns:i,style:d,size:g="",iconOnly:m}=e;const{t:x}=(0,v.B)(),[y,f]=(0,n.useState)(!1),A=(0,h.jsx)(l.A,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(l.A.Item,{children:(0,h.jsxs)(a.A,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(o.A,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));i(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(r.A,{overlay:A,trigger:["click"],onVisibleChange:e=>{f(e)},visible:y,children:(0,h.jsx)(s.A,{title:x("change.columns"),children:(0,h.jsx)(c.A,{style:{...d},size:g,icon:(0,h.jsx)(u.A,{}),children:m?null:x("Columns")})})})}},34442:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(9950),d=i(72243),l=i(80737),a=i(48538),o=i(23263),r=i(52913),s=i(63620),c=i(28429),u=i(24513),v=i(44070),h=i(53387),p=i(76083),g=i(55386),m=i(91854),x=i(74623),y=i(40011),f=i(32959),A=i(85923),w=i(70030),k=i(35116),j=i(28645),z=i(88986),C=i(8168),_=i(53774),b=i(44414);const I=()=>{var e,t,i;const{t:I}=(0,w.B)(),V=(0,m.wA)(),H=(0,c.Zp)(),{setIsModalVisible:S}=(0,n.useContext)(g.o),[$,M]=(0,n.useState)(!1),{activeMenu:N}=(0,m.d4)((e=>e.menu),m.bN),{defaultLang:P}=(0,m.d4)((e=>e.formLang),m.bN),{deliveryPoints:R,meta:B,loading:D,params:E}=(0,m.d4)((e=>e.deliveryPoint),m.bN),{defaultCurrency:O}=(0,m.d4)((e=>e.currency),m.bN),[K,L]=(0,n.useState)(null),T=N.data,X={perPage:null===T||void 0===T?void 0:T.perPage,page:null===T||void 0===T?void 0:T.page},[F,Z]=(0,n.useState)([{title:I("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:I("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,b.jsx)(d.A,{src:s.sE+e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})},{title:I("title"),dataIndex:"translation",key:"title",is_show:!0,render:(e,t)=>null===e||void 0===e?void 0:e.title},{title:I("address"),dataIndex:"address",key:"address",is_show:!0,render:(e,t)=>null===e||void 0===e?void 0:e[P||"en"]},{title:I("country"),dataIndex:"country",key:"country",is_show:!0,render:(e,t)=>{var i;return null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title}},{title:I("region"),dataIndex:"region",key:"region",is_show:!0,render:(e,t)=>{var i;return null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title}},{title:I("city"),dataIndex:"city",key:"city",is_show:!0,render:(e,t)=>{var i;return null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title}},{title:I("area"),dataIndex:"area",key:"area",is_show:!0,render:(e,t)=>{var i;return null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title}},{title:I("fitting_rooms"),dataIndex:"fitting_rooms",key:"fitting_rooms",is_show:!0,render:(e,t)=>e},{title:I("price"),dataIndex:"price",key:"price",is_show:!0,render:(e,t)=>(0,_.default)(e,null===O||void 0===O?void 0:O.symbol,null===O||void 0===O?void 0:O.position)},{title:I("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,b.jsxs)(l.A,{children:[(0,b.jsx)(a.A,{type:"primary",icon:(0,b.jsx)(u.A,{}),onClick:()=>q(t)}),(0,b.jsx)(k.A,{icon:(0,b.jsx)(v.A,{}),onClick:()=>{S(!0),L([t.id])}})]})}]),q=e=>{V((0,x.X4)({url:`delivery-point/${e.id}`,id:"point.edit",name:I("edit.delivery.point")})),H(`/delivery-point/${e.id}`)};(0,z.A)((()=>{V((0,f.D)(X))}),[N.data]),(0,n.useEffect)((()=>{N.refetch&&(V((0,f.D)(X)),V((0,x.km)(N)))}),[N.refetch]);const G={selectedRowKeys:K,onChange:e=>{L(e)}};return(0,b.jsxs)(o.A,{title:I("delivery.points"),extra:(0,b.jsxs)(l.A,{wrap:!0,children:[(0,b.jsx)(a.A,{type:"primary",icon:(0,b.jsx)(h.A,{}),onClick:()=>{V((0,x.X4)({id:"delivery-point/add",url:"delivery-point/add",name:I("add.delivery.point")})),H("/delivery-point/add")},children:I("add.point")}),(0,b.jsx)(k.A,{size:"",onClick:()=>{null===K||0===K.length?A.oR.warning(I("select.the.product")):S(!0)},children:I("delete.selected")}),(0,b.jsx)(j.A,{setColumns:Z,columns:F})]}),children:[(0,b.jsx)(r.A,{scroll:{x:!0},rowSelection:G,columns:null===F||void 0===F?void 0:F.filter((e=>e.is_show)),dataSource:R,pagination:{pageSize:E.perPage,page:(null===(e=N.data)||void 0===e?void 0:e.page)||1,total:B.total,defaultCurrent:null===(t=N.data)||void 0===t?void 0:t.page,current:null===(i=N.data)||void 0===i?void 0:i.page},rowKey:e=>e.id,loading:D,onChange:function(e,t,i){const{pageSize:n,current:d}=e,{field:l,order:a}=i,o=(0,C.A)(a);V((0,x.Ok)({activeMenu:N,data:{...N.data,perPage:n,page:d,column:l,sort:o}}))}}),(0,b.jsx)(p.A,{click:()=>{M(!0);const e={...Object.assign({},...K.map(((e,t)=>({[`ids[${t}]`]:e}))))};y.A.delete(e).then((()=>{V((0,f.D)()),A.oR.success(I("successfully.deleted")),S(!1)})).finally((()=>{M(!1)}))},text:I("delete"),loading:$,setText:L})]})}},35116:(e,t,i)=>{i.d(t,{A:()=>s});i(9950);var n=i(48538),d=i(44070),l=i(85923),a=i(70030),o=i(13311),r=i(44414);function s(e){let{size:t="",onClick:i,type:s="default",...c}=e;const{t:u}=(0,a.B)(),{isDemo:v}=(0,o.A)();return(0,r.jsx)(n.A,{size:t,icon:(0,r.jsx)(d.A,{}),onClick:e=>{v?l.oR.warning(u("cannot.work.demo")):i(e)},type:s,...c})}},53387:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(89379),d=i(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=i(25085),o=function(e,t){return d.createElement(a.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:l}))};const r=d.forwardRef(o)},53774:(e,t,i)=>{function n(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===t?`${i} ${e}`:`${e} ${i}`}i.r(t),i.d(t,{default:()=>n})},89323:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(89379),d=i(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=i(25085),o=function(e,t){return d.createElement(a.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:l}))};const r=d.forwardRef(o)}}]);