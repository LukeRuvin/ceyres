"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6177],{86177:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var l=n(54909),i=n(12916),s=n(80737),a=n(48538),o=n(23263),d=n(52913),r=n(70030),c=n(24513),u=n(12678),v=n(9950),h=n(91854),p=n(88986),x=n(49743),j=n(74623),m=n(59233),y=n(82706),A=n(87094),g=n(41988),k=n(99674),f=n(44414);const b=["new","progress","booked","ended","canceled"],w=e=>{let{data:t,handleSubmit:n,handleClose:l}=e;const{t:i}=(0,r.B)(),[o]=m.A.useForm(),[d,c]=(0,v.useState)(!1);return(0,f.jsx)(y.A,{visible:!!t,footer:(0,f.jsxs)(s.A,{children:[(0,f.jsx)(a.A,{onClick:l,children:i("cancel")}),(0,f.jsx)(a.A,{type:"primary",onClick:()=>o.submit(),loading:d,children:i("save")})]}),onCancel:l,children:(0,f.jsx)(m.A,{form:o,initialValues:{status:null===t||void 0===t?void 0:t.status},layout:"vertical",onFinish:e=>{c(!0);const i={status:null===e||void 0===e?void 0:e.status};n(null===t||void 0===t?void 0:t.id,i).then((()=>l())).finally((()=>c(!1)))},children:(0,f.jsx)(A.A,{gutter:12,children:(0,f.jsx)(g.A,{span:24,children:(0,f.jsx)(m.A.Item,{name:"status",label:i("status"),children:(0,f.jsx)(k.A,{children:b.map((e=>(0,f.jsx)(k.A.Option,{value:e,children:i(e)})))})})})})})})};var _=n(43957),C=n(8297),I=n(35116),S=n(76083),$=n(85923),O=n(55386),z=n(53774),B=n(59051),M=n.n(B),Y=n(22763),F=n(65820);const P=()=>{var e;const{t:t}=(0,r.B)(),n=(0,F.s)(),[l,i]=(0,v.useState)(null),[s,d]=(0,v.useState)(!1),c=null===(e=n.values)||void 0===e?void 0:e.bookingId;if((0,v.useEffect)((()=>{if(c){(()=>{d(!0),_.A.getById(c).then((e=>i(null===e||void 0===e?void 0:e.data))).catch((e=>{console.error(e)})).finally((()=>d(!1)))})()}}),[c]),!c)return null;const u=()=>{n.clear(),i(null)};return(0,f.jsx)(y.A,{visible:!!c,onCancel:u,title:`${t("booking.details")} #${c}`,footer:(0,f.jsx)(a.A,{onClick:u,children:t("close")}),width:1e3,children:(0,f.jsx)(o.A,{loading:s,children:(0,f.jsx)(Y.A,{data:l})})})};var D=n(51066);const{TabPane:E}=l.A,N=["all","offline_in","offline_out","online"];function T(){const{t:e}=(0,r.B)(),t=(0,h.wA)(),{activeMenu:n}=(0,h.d4)((e=>e.menu),h.bN),m=(0,D.Q)(),{bookings:y,params:A,loading:g,meta:k}=(0,h.d4)((e=>e.bookings),h.bN),b=(0,F.s)(),{setIsModalVisible:B}=(0,v.useContext)(O.o),[Y,T]=(0,v.useState)(null),[V,Q]=(0,v.useState)(!1),[R,q]=(0,v.useState)({...A}),[G,H]=(0,v.useState)(null),J=[{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("name.client"),dataIndex:"user",key:"name.client",is_show:!0,render:e=>`${(null===e||void 0===e?void 0:e.firstname)||""} ${(null===e||void 0===e?void 0:e.lastname)||""}`},{title:e("contact"),dataIndex:"master",key:"contact",is_show:!0,render:t=>t.phone?(0,f.jsxs)("a",{href:`tel:+${null===t||void 0===t?void 0:t.phone}`,children:[" +",null===t||void 0===t?void 0:t.phone]}):e("unknown")},{title:e("service"),dataIndex:"service_master",key:"service",is_show:!0,render:e=>{var t,n;return null===e||void 0===e||null===(t=e.service)||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title}},{title:e("start.date"),dataIndex:"start_date",key:"start_date",is_show:!0,render:e=>M().utc(e).format(`YYYY-MM-DD ${m}`)},{title:e("payment.type"),dataIndex:"transaction",key:"payment.type",is_show:!0,render:t=>{var n;return(0,f.jsx)(i.A,{children:e(null===t||void 0===t||null===(n=t.payment_system)||void 0===n?void 0:n.tag)})}},{title:e("master"),dataIndex:"master",key:"master",is_show:!0,render:e=>`${(null===e||void 0===e?void 0:e.firstname)||""} ${(null===e||void 0===e?void 0:e.lastname)||""}`},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:e=>{var t;return`${(null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)||"--"}`}},{title:e("type"),dataIndex:"type",key:"type",is_show:!1},{title:e("status"),dataIndex:"status",key:"status",is_show:!0,render:(t,n)=>{const l=(t,l)=>(0,f.jsxs)("div",{children:[(0,f.jsx)(i.A,{color:t,children:e(l)}),"ended"!==l&&"canceled"!==l&&(0,f.jsx)(c.A,{onClick:e=>{e.stopPropagation(),H({status:l,id:null===n||void 0===n?void 0:n.id})}})]});switch(t){case"new":return l("blue",t);case"canceled":return l("red",t);case"booked":return l("yellow",t);case"progress":return l("rgba(23,128,184,0.56)",t);default:return l("cyan",t)}}},{title:e("price"),dataIndex:"price",key:"price",is_show:!0,render:(e,t)=>{var n,l;return(0,z.default)(e,null===t||void 0===t||null===(n=t.currency)||void 0===n?void 0:n.symbol,null===t||void 0===t||null===(l=t.currency)||void 0===l?void 0:l.position)}},{title:e("options"),key:"options",is_show:!0,render:e=>(0,f.jsxs)(s.A,{children:[(0,f.jsx)(a.A,{icon:(0,f.jsx)(u.A,{}),onClick:()=>{b.set("bookingId",null===e||void 0===e?void 0:e.id)}}),(0,f.jsx)(I.A,{onClick:()=>{B(!0),T([null===e||void 0===e?void 0:e.id])}})]})}];(0,v.useEffect)((()=>{n.refetch&&(0,h.vA)((()=>{t((0,x.jO)(R)),t((0,j.km)(n))}))}),[n.refetch]),(0,p.A)((()=>{t((0,x.jO)(R))}),[R]);const K=(e,t)=>{q((n=>{if("all"===t){const t={...n};return delete t[e],{...t,page:1}}return{...n,[e]:t,page:1}}))};return(0,f.jsxs)(v.Fragment,{children:[(0,f.jsx)(o.A,{children:(0,f.jsx)(s.A,{children:(0,f.jsx)(C.A,{handleChange:e=>{setTimeout((()=>{K("search",e)}),500)},placeholder:e("search")})})}),(0,f.jsxs)(o.A,{children:[(0,f.jsx)(l.A,{type:"card",onChange:e=>K("type",e),children:N.map((t=>(0,f.jsx)(E,{tab:e(t)},t)))}),(0,f.jsx)(d.A,{columns:null===J||void 0===J?void 0:J.filter((e=>null===e||void 0===e?void 0:e.is_show)),dataSource:y,loading:g,scroll:{x:!0},pagination:{pageSize:null===k||void 0===k?void 0:k.per_page,current:null===k||void 0===k?void 0:k.current_page,total:null===k||void 0===k?void 0:k.total},onChange:e=>{const{pageSize:t,current:n}=e,l={...R,perPage:t,page:n};q((e=>({...e,...l})))}})]}),G&&(0,f.jsx)(w,{data:G,handleClose:()=>H(null),handleSubmit:(e,l)=>_.A.changeStatus(e,l).then((()=>(0,h.vA)((()=>{t((0,x.jO)(R)),t((0,j.km)(n))}))))}),(0,f.jsx)(S.A,{click:()=>{Q(!0);const t={...Object.assign({},...Y.map(((e,t)=>({[`ids[${t}]`]:e}))))};_.A.delete(t).then((()=>{$.oR.success(e("successfully.deleted")),T(null),B(!1),q((e=>({...e,page:1})))})).finally((()=>Q(!1)))},text:e("are.you.sure"),loading:V}),(0,f.jsx)(P,{})]})}}}]);