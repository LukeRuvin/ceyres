"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7459],{31281:(e,l,t)=>{function i(e,l){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const i=e.map((e=>({[e.locale]:""===l[`${t}[${e.locale}]`]?void 0:l[`${t}[${e.locale}]`]})));return Object.assign({},...i)}t.d(l,{A:()=>i})},33241:(e,l,t)=>{t.d(l,{A:()=>y});var i=t(59233),n=t(87094),r=t(41988),s=t(40577),a=t(55902),o=t(25933),c=t(48538),d=t(47992),u=t(9950),v=t(54764),m=t(70030),h=t(91854),A=t(28429),p=t(85923),x=t(74623),f=t(43394),j=t(31281),g=t(48970),b=t(44414);const y=function(e){var l,t;let{form:y,onSubmit:S}=e;const{t:C}=(0,m.B)(),I=(0,A.Zp)(),k=(0,h.wA)(),{defaultLang:w,languages:F}=(0,h.d4)((e=>e.formLang),h.bN),{defaultCurrency:N}=(0,h.d4)((e=>e.currency),h.bN),{activeMenu:O}=(0,h.d4)((e=>e.menu),h.bN),{state:$}=(0,A.zy)(),[q,z]=(0,u.useState)(!1),[L,B]=(0,u.useState)((null===(l=O.data)||void 0===l||null===(t=l.serviceExtrasForm)||void 0===t?void 0:t.img)||[]);return(0,b.jsxs)(i.A,{form:y,layout:"vertical",onFinish:e=>{var l;const t={active:e.active?1:0,service_id:e.service.value,title:(0,j.A)(F,e,"title"),price:e.price||0,img:null===L||void 0===L||null===(l=L[0])||void 0===l?void 0:l.url};z(!0),S(t).then((()=>{const e="service-extra";p.oR.success(C("successfully.created")),y.resetFields(),(0,h.vA)((()=>{k((0,x.EK)({...O,nextUrl:e})),k((0,f.Y)(null===$||void 0===$?void 0:$.params))})),I(`/${e}`)})).finally((()=>z(!1)))},initialValues:{active:!0},children:[(0,b.jsxs)(n.A,{gutter:12,children:[(0,b.jsx)(r.A,{span:12,children:(0,b.jsx)(i.A.Item,{label:C("service"),name:"service",rules:[{required:!0,message:"required"}],children:(0,b.jsx)(d.G,{fetchOptions:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const l={search:null!==e&&void 0!==e&&e.length?e:void 0,perPage:10,page:1};return v.A.getAll(l).then((e=>{var l;return null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||C("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},refetchOptions:!0})})}),(0,b.jsx)(r.A,{span:12,children:(0,b.jsx)(i.A.Item,{label:C("price"),name:"price",rules:[{required:!0}],children:(0,b.jsx)(s.A,{className:"w-100",addonAfter:"after"===(null===N||void 0===N?void 0:N.position)&&(null===N||void 0===N?void 0:N.symbol),addonBefore:"before"===(null===N||void 0===N?void 0:N.position)&&(null===N||void 0===N?void 0:N.symbol)})})}),(0,b.jsx)(r.A,{span:12,children:F.map(((e,l)=>(0,b.jsx)(i.A.Item,{label:C("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===w,message:C("required")}],hidden:e.locale!==w,children:(0,b.jsx)(a.A,{})},"title"+l)))}),(0,b.jsx)(r.A,{span:6,children:(0,b.jsx)(i.A.Item,{label:C("image"),name:"image",children:(0,b.jsx)(g.A,{type:"service_extras",imageList:L,setImageList:B,form:y,multiple:!1})})}),(0,b.jsx)(r.A,{children:(0,b.jsx)(i.A.Item,{label:C("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(o.A,{})})})]}),(0,b.jsx)(c.A,{type:"primary",htmlType:"submit",loading:q,children:C("submit")})]})}},37459:(e,l,t)=>{t.r(l),t.d(l,{default:()=>d});var i=t(59233),n=t(23263),r=t(70030),s=t(71999),a=t(62110),o=t(33241),c=t(44414);const d=function(){const{t:e}=(0,r.B)(),[l]=i.A.useForm();return(0,c.jsx)(n.A,{title:e("create.service.extra"),extra:(0,c.jsx)(s.A,{}),children:(0,c.jsx)(o.A,{form:l,onSubmit:e=>a.A.create(e)})})}},47992:(e,l,t)=>{t.d(l,{G:()=>c});var i=t(9950),n=t(95491),r=t.n(n),s=t(99674),a=t(90650),o=t(44414);const c=e=>{let{fetchOptions:l,debounceTimeout:t=400,onClear:n,refetchOptions:c=!1,...d}=e;const[u,v]=(0,i.useState)(!1),[m,h]=(0,i.useState)([]),A=(0,i.useMemo)((()=>r()((e=>{h([]),v(!0),l(e).then((e=>{h(e),v(!1)}))}),t)),[l,t]);return(0,o.jsx)(s.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:A,onClear:()=>{A(""),n&&n()},notFoundContent:u?(0,o.jsx)(a.A,{size:"small"}):"no results",...d,options:m,onFocus:()=>{m.length&&!c||A("")}})}}}]);