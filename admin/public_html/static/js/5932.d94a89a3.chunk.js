"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5932],{28645:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(9950),l=n(66362),i=n(69216),a=n(80737),d=n(25933),r=n(57811),o=n(81541),c=n(48538),u=n(89323),h=n(70030),v=n(44414);const{Text:x}=l.A,m=e=>{let{columns:t=[],setColumns:n,style:l,size:m="",iconOnly:f}=e;const{t:A}=(0,h.B)(),[g,j]=(0,s.useState)(!1),w=(0,v.jsx)(i.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(i.A.Item,{children:(0,v.jsxs)(a.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(x,{children:e.title}),(0,v.jsx)(d.A,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(r.A,{overlay:w,trigger:["click"],onVisibleChange:e=>{j(e)},visible:g,children:(0,v.jsx)(o.A,{title:A("change.columns"),children:(0,v.jsx)(c.A,{style:{...l},size:m,icon:(0,v.jsx)(u.A,{}),children:f?null:A("Columns")})})})}},35116:(e,t,n)=>{n.d(t,{A:()=>o});n(9950);var s=n(48538),l=n(44070),i=n(85923),a=n(70030),d=n(13311),r=n(44414);function o(e){let{size:t="",onClick:n,type:o="default",...c}=e;const{t:u}=(0,a.B)(),{isDemo:h}=(0,d.A)();return(0,r.jsx)(s.A,{size:t,icon:(0,r.jsx)(l.A,{}),onClick:e=>{h?i.oR.warning(u("cannot.work.demo")):n(e)},type:o,...c})}},51066:(e,t,n)=>{n.d(t,{Q:()=>i});var s=n(17706),l=n(80415);const i=()=>{var e,t,n,i;return null!==(e=null===(t=s.M.getState())||void 0===t||null===(n=t.globalSettings)||void 0===n||null===(i=n.settings)||void 0===i?void 0:i.hour_format)&&void 0!==e?e:l.G}},75932:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var s=n(9950),l=n(12916),i=n(80737),a=n(48538),d=n(23263),r=n(52913),o=n(28429),c=n(12678),u=n(76083),h=n(55386),v=n(91854),x=n(74623),m=n(85923),f=n(70030),A=n(35116),g=n(28645),j=n(3950),w=n(51912),p=n(59051),k=n.n(p),y=n(51066),z=n(44414);function _(){const{t:e}=(0,f.B)(),t=(0,v.wA)(),n=(0,o.Zp)(),p=(0,y.Q)(),[_,C]=(0,s.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:e("client"),is_show:!0,dataIndex:"user",key:"user",render:(e,t)=>{var n,s;return(0,z.jsxs)("div",{children:[null===(n=t.order.user)||void 0===n?void 0:n.firstname," ",(null===(s=t.order.user)||void 0===s?void 0:s.lastname)||""]})}},{title:e("status"),is_show:!0,dataIndex:"status",key:"status",render:t=>(0,z.jsx)("div",{children:"new"===t?(0,z.jsx)(l.A,{color:"blue",children:e(t)}):"canceled"===t?(0,z.jsx)(l.A,{color:"error",children:e(t)}):(0,z.jsx)(l.A,{color:"cyan",children:e(t)})})},{title:e("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at",render:e=>k()(e).format(`YYYY-MM-DD ${p}`)},{title:e("options"),is_show:!0,key:"options",render:(s,l)=>(0,z.jsxs)(i.A,{children:[(0,z.jsx)(a.A,{icon:(0,z.jsx)(c.A,{}),onClick:()=>(s=>{t((0,x.X4)({url:`seller/refund/details/${s}`,id:"refund_details",name:e("refund.details")})),n(`/seller/refund/details/${s}`)})(l.id)}),(0,z.jsx)(A.A,{onClick:()=>{S([l.id]),b(!0),O(!0)}})]})}]),{setIsModalVisible:b}=(0,s.useContext)(h.o),[H,S]=(0,s.useState)(null),[V,I]=(0,s.useState)(!1),[M,O]=(0,s.useState)(null),{activeMenu:D}=(0,v.d4)((e=>e.menu),v.bN),{refund:R,meta:B,loading:N}=(0,v.d4)((e=>e.refund),v.bN);(0,s.useEffect)((()=>{D.refetch&&(t((0,j.OS)({})),t((0,x.km)(D)))}),[D.refetch]);const Y={id:H,onChange:e=>{S(e)}};return(0,z.jsxs)(d.A,{title:e("refunds"),extra:(0,z.jsxs)(i.A,{wrap:!0,children:[(0,z.jsx)(A.A,{className:"",onClick:()=>{null===H||0===H.length?m.oR.warning(e("select.the.product")):(b(!0),O(!1))},children:e("delete.selected")}),(0,z.jsx)(g.A,{columns:_,setColumns:C})]}),children:[(0,z.jsx)(r.A,{scroll:{x:!0},rowSelection:Y,columns:null===_||void 0===_?void 0:_.filter((e=>e.is_show)),dataSource:R,pagination:{pageSize:B.per_page,page:B.current_page,total:B.total},rowKey:e=>e.id,loading:N,onChange:e=>{const{pageSize:n,current:s}=e;t((0,j.OS)({perPage:n,page:s}))}}),(0,z.jsx)(u.A,{click:()=>{I(!0);const n={...Object.assign({},...H.map(((e,t)=>({[`ids[${t}]`]:e}))))};w.A.delete(n).then((()=>{t((0,j.OS)()),m.oR.success(e("successfully.deleted"))})).finally((()=>{b(!1),I(!1)}))},text:e(M?"delete":"all.delete"),loading:V,setText:S})]})}},80415:(e,t,n)=>{n.d(t,{G:()=>a,HV:()=>l,LH:()=>s,PR:()=>i,wO:()=>r,xt:()=>d});const s={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]},l=(new Date,new Date,["new","accepted","ready","on_a_way","pause","delivered","canceled"]),i=30,a="HH:mm",d="hh:mm a",r=!0},89323:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(89379),l=n(9950);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=n(25085),d=function(e,t){return l.createElement(a.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:i}))};const r=l.forwardRef(d)}}]);