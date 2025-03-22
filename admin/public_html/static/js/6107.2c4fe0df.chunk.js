"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6107],{6107:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var i=a(9950),l=a(49326),n=a(86366),o=a(23263),r=a(90650),d=a(82498),s=a(57844),u=a(649),v=a(59585),c=a(44832),p=a(71999),g=a(28429),x=a(47933),m=a(91854),f=a(74623),h=a(70030),y=a(65820),_=a(29657),j=a(4895),k=a(66753),A=a(44414);const{Step:b}=n.A,w=()=>{var e,t,a,w,q;const{t:C}=(0,h.B)(),{uuid:N}=(0,g.g)(),F=(0,y.s)(),{activeMenu:M}=(0,m.d4)((e=>e.menu),m.bN),{languages:O}=(0,m.d4)((e=>e.formLang),m.bN),S=(0,m.wA)(),$=Number((null===(e=F.values)||void 0===e?void 0:e.step)||0),[z,E]=(0,i.useState)(M.refetch),[B,G]=(0,i.useState)(l.C),{extras:P}=(null===M||void 0===M?void 0:M.data)||{},V=null===M||void 0===M||null===(t=M.data)||void 0===t?void 0:t.digital,D=null===P||void 0===P?void 0:P.some((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)})),I=(0,i.useMemo)((()=>null===P||void 0===P?void 0:P.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[P]);Array.from(new Set(null===I||void 0===I||null===(a=I.values)||void 0===a?void 0:a.map((e=>e.value)))).map((e=>{var t;return null===I||void 0===I||null===(t=I.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type));(0,i.useEffect)((()=>{V?G(l.C.filter((e=>"product.extras"!==e.title))):!1===V&&G(l.C.filter((e=>"product.digital"!==e.title))),G(D?e=>e:e=>e.filter((e=>"Gallery"!==e.title)))}),[D,V]);const L=()=>{const e=$+1;F.set("step",e)},Q=()=>{const e=$-1;F.set("step",e)},T=e=>{const t={images:[],previews:[]},a=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.preview,url:e.preview}))),i=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:!0})));return t.previews=a,t.images=i,t},Z=e=>e?{label:e.translation?e.translation.title:e.title,value:e.id,key:e.id}:null;function H(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=O.map((e=>{var a,i;return{[`title[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,[`description[${e.locale}]`]:null===(i=t.find((t=>t.locale===e.locale)))||void 0===i?void 0:i.description}}));return Object.assign({},...a)}(0,i.useEffect)((()=>{M.refetch&&function(e){E(!0),x.A.getById(e).then((e=>{var t,a,i,l,n,o;const r={};e.data.stocks.forEach((e=>{e.extras.forEach((t=>{var a,i,l,n,o;t.extra_group_id in r?null!==(a=r[t.extra_group_id].values)&&void 0!==a&&a.some((e=>{var a;return e.value===(null===(a=t.value)||void 0===a?void 0:a.id)}))||null===(i=r[t.extra_group_id].values)||void 0===i||i.push({value:t.value.id,label:null===(l=t.value)||void 0===l?void 0:l.value,stock_id:e.id}):r[t.extra_group_id]={group:t.group,label:null===(n=t.group.translation)||void 0===n?void 0:n.title,value:t.extra_group_id,id:t.extra_group_id,stock_id:e.id,values:[{value:t.value.id,label:null===(o=t.value)||void 0===o?void 0:o.value,stock_id:e.id}]}}))}));const d={...e.data,...H(e.data),shop:Z(e.data.shop),category:Z(e.data.category),brand:Z(e.data.brand),unit:Z(e.data.unit),images:(s=e.data.galleries,s.map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:Boolean(e.preview)})))),initialMediaFile:T(e.data.galleries),extras:Object.values(r),stocks:e.data.stocks.map((e=>({...e,...Object.assign({},...e.extras.map(((e,t)=>({[`extras[${t}]`]:e.id})))),quantity:e.quantity||0,price:e.price||0,extras:void 0}))),stocksData:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.stocks,properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0,min_qty:null===(a=e.data)||void 0===a?void 0:a.min_qty,max_qty:null===(i=e.data)||void 0===i?void 0:i.max_qty,tax:null===(l=e.data)||void 0===l?void 0:l.tax,interval:null===(n=e.data)||void 0===n?void 0:n.interval,age_limit:null===(o=e.data)||void 0===o?void 0:o.age_limit};var s;S((0,f.Ok)({activeMenu:M,data:d}))})).finally((()=>{E(!1),S((0,f.km)(M))}))}(N)}),[M.refetch]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o.A,{title:C("edit.product"),extra:(0,A.jsx)(p.A,{}),children:(0,A.jsx)(n.A,{current:$,onChange:e=>{S((0,f.Ok)({activeMenu:M,data:{...M.data,step:e}})),F.set("step",e)},children:B.map((e=>(0,A.jsx)(b,{title:C(e.title)},e.title)))})}),z?(0,A.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,A.jsx)(r.A,{size:"large",className:"py-5"})}):(0,A.jsxs)("div",{className:"",children:["First-content"===B[$].content&&(0,A.jsx)(c.A,{next:L,action_type:"edit"}),(null===(w=M.data)||void 0===w?void 0:w.digital)&&"Product-digital"===B[$].content&&(0,A.jsx)(j.A,{next:L,prev:Q}),!(null!==(q=M.data)&&void 0!==q&&q.digital)&&"Second-content"===B[$].content&&(0,A.jsx)(v.A,{next:L,prev:Q}),"Third-content"===B[$].content&&(0,A.jsx)(u.A,{next:L,prev:Q}),"wholesale-content"===B[$].content&&(0,A.jsx)(k.A,{next:L,prev:Q}),D>0&&"Gallery-content"===B[$].content&&(0,A.jsx)(_.A,{next:L,prev:Q}),"Fourth-content"===B[$].content&&(0,A.jsx)(d.A,{next:L,prev:Q}),"Finish-content"===B[$].content&&(0,A.jsx)(s.A,{prev:Q})]})]})}},65820:(e,t,a)=>{a.d(t,{s:()=>o});var i=a(28429),l=a(21215),n=a.n(l);const o=()=>{const e=(0,i.Zp)(),t=(0,i.zy)(),a=n().parse(t.search,{ignoreQueryPrefix:!0});return{values:a,set:(t,i)=>e({search:n().stringify({...a,[t]:i})}),reset:t=>{const i={...a};i[t]&&delete i[t],e({search:n().stringify({...i})})},clear:()=>e({search:n().stringify({})}),merge:t=>e({search:n().stringify({...a,...t})})}}}}]);