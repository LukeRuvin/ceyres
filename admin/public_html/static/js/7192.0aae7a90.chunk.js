"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7192],{28645:(e,t,l)=>{l.d(t,{A:()=>m});var n=l(9950),a=l(66362),s=l(69216),i=l(80737),c=l(25933),d=l(57811),o=l(81541),r=l(48538),u=l(89323),g=l(70030),h=l(44414);const{Text:v}=a.A,m=e=>{let{columns:t=[],setColumns:l,style:a,size:m="",iconOnly:A}=e;const{t:x}=(0,g.B)(),[f,j]=(0,n.useState)(!1),p=(0,h.jsx)(s.A,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(s.A.Item,{children:(0,h.jsxs)(i.A,{className:"d-flex justify-content-between",children:[(0,h.jsx)(v,{children:e.title}),(0,h.jsx)(c.A,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(d.A,{overlay:p,trigger:["click"],onVisibleChange:e=>{j(e)},visible:f,children:(0,h.jsx)(o.A,{title:x("change.columns"),children:(0,h.jsx)(r.A,{style:{...a},size:m,icon:(0,h.jsx)(u.A,{}),children:A?null:x("Columns")})})})}},35116:(e,t,l)=>{l.d(t,{A:()=>o});l(9950);var n=l(48538),a=l(44070),s=l(85923),i=l(70030),c=l(13311),d=l(44414);function o(e){let{size:t="",onClick:l,type:o="default",...r}=e;const{t:u}=(0,i.B)(),{isDemo:g}=(0,c.A)();return(0,d.jsx)(n.A,{size:t,icon:(0,d.jsx)(a.A,{}),onClick:e=>{g?s.oR.warning(u("cannot.work.demo")):l(e)},type:o,...r})}},47192:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var n=l(9950),a=l(28429),s=l(72243),i=l(12916),c=l(80737),d=l(48538),o=l(23263),r=l(52913),u=l(24513),g=l(44070),h=l(53387),v=l(55386),m=l(85923),A=l(76083),x=l(12437),f=l(91854),j=l(74623),p=l(70030),y=l(69554),w=l(35116),k=l(88745),z=l(28645),C=l(13311),V=l(44414);const b=()=>{var e;const{t:t}=(0,p.B)(),[l,b]=(0,n.useState)(!1),[H,_]=(0,n.useState)(null),[I,S]=(0,n.useState)(""),{setIsModalVisible:R}=(0,n.useContext)(v.o),{activeMenu:M}=(0,f.d4)((e=>e.menu),f.bN),B=(0,f.wA)(),L=(0,a.Zp)(),{isDemo:N,demoFunc:D}=(0,C.A)(),{allLanguages:E,loading:$}=(0,f.d4)((e=>e.languages),f.bN),[K,O]=(0,n.useState)([{title:t("title"),dataIndex:"title",key:"title",is_show:!0},{title:t("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,V.jsx)(s.A,{src:(0,y.A)(e),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0},e+t.id)},{title:t("status"),dataIndex:"active",key:"active",is_show:!0,render:e=>e?(0,V.jsxs)(i.A,{color:"cyan",children:[" ",t("active")]}):(0,V.jsx)(i.A,{color:"yellow",children:t("inactive")})},{title:t("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,l)=>(0,V.jsxs)(c.A,{children:[(0,V.jsx)(d.A,{type:"primary",icon:(0,V.jsx)(u.A,{}),onClick:()=>(e=>{B((0,j.X4)({url:`language/${e.id}`,id:"language_edit",name:t("edit.language")})),L(`/language/${e.id}`)})(l)}),!(null!==l&&void 0!==l&&l.default)&&(0,V.jsx)(w.A,{icon:(0,V.jsx)(g.A,{}),onClick:()=>{1!==(null===E||void 0===E?void 0:E.length)?(_([l.id]),S("deleteLang"),R(!0)):m.oR.error(t("at.least.one.language"))}})]})}]);(0,n.useEffect)((()=>{M.refetch&&(B((0,k.l)()),B((0,j.km)(M)))}),[M.refetch]);return(0,V.jsxs)(o.A,{title:t("languages"),extra:(0,V.jsxs)(c.A,{children:[(0,V.jsx)(d.A,{icon:(0,V.jsx)(h.A,{}),type:"primary",onClick:()=>{B((0,j.X4)({id:"add.language",url:"language/add",name:t("add.language")})),L("/language/add")},children:t("add.language")}),(0,V.jsx)(z.A,{columns:K,setColumns:O})]}),children:[(0,V.jsx)(r.A,{scroll:{x:!0},columns:null===K||void 0===K?void 0:K.filter((e=>e.is_show)),dataSource:E,rowKey:e=>e.id,loading:$,pagination:!1,rowSelection:{selectedRowKeys:[null===(e=E.find((e=>e.default)))||void 0===e?void 0:e.id],type:"radio",onChange:e=>{N?D():(R(!0),_(e[0]),S(!0))}}}),(0,V.jsx)(A.A,{click:"deleteLang"===I?()=>{b(!0);const e={...Object.assign({},...H.map(((e,t)=>({[`ids[${t}]`]:e}))))};x.A.delete(e).then((()=>{R(!1),m.oR.success(t("successfully.deleted")),B((0,k.l)())})).finally((()=>{_(null),b(!1)}))}:()=>{b(!0),x.A.setDefault(H).then((()=>{m.oR.success(t("successfully.updated")),R(!1),B((0,k.l)())})).finally((()=>b(!1)))},text:t("deleteLang"!==I?"change.default.language":"delete"),loading:l})]})}},53387:(e,t,l)=>{l.d(t,{A:()=>d});var n=l(89379),a=l(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=l(25085),c=function(e,t){return a.createElement(i.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:s}))};const d=a.forwardRef(c)},89323:(e,t,l)=>{l.d(t,{A:()=>d});var n=l(89379),a=l(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=l(25085),c=function(e,t){return a.createElement(i.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:s}))};const d=a.forwardRef(c)}}]);