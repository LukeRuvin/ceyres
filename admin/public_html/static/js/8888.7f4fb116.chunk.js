"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8888],{49:(e,t,l)=>{l.d(t,{A:()=>h});var n=l(59233),i=l(23263),a=l(87094),s=l(41988),r=l(55902),o=l(48538),c=l(71999),u=(l(9950),l(70030)),d=l(91854),m=l(44414);function h(e){let{data:t,onFinish:l,isSubmitting:h}=e;const{t:p}=(0,u.B)(),{languages:A,defaultLang:f}=(0,d.d4)((e=>e.formLang),d.bN),[g]=n.A.useForm();return(0,m.jsx)(i.A,{title:p(t?"edit.option":"add.option"),extra:(0,m.jsx)(c.A,{}),children:(0,m.jsx)(n.A,{form:g,layout:"vertical",onFinish:l,initialValues:{...function(e){if(!e)return{};const{translations:t}=e,l=A.map((e=>{var l;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title}}));return Object.assign({},...l)}(t)},children:(0,m.jsxs)(a.A,{gutter:12,children:[(0,m.jsx)(s.A,{span:24,children:A.map((e=>(0,m.jsx)(n.A.Item,{label:p("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===f,message:p("requried")}],hidden:e.locale!==f,children:(0,m.jsx)(r.A,{})},"title"+e.locale)))}),(0,m.jsx)(s.A,{span:4,children:(0,m.jsx)(o.A,{htmlType:"submit",type:"primary",loading:h,children:p("save")})})]})})})}},31281:(e,t,l)=>{function n(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=e.map((e=>({[e.locale]:""===t[`${l}[${e.locale}]`]?void 0:t[`${l}[${e.locale}]`]})));return Object.assign({},...n)}l.d(t,{A:()=>n})},38888:(e,t,l)=>{l.r(t),l.d(t,{default:()=>h});var n=l(9950),i=l(49),a=l(62335),s=l(70030),r=l(85923),o=l(31281),c=l(91854),u=l(28429),d=l(74623),m=l(44414);function h(){const[e,t]=(0,n.useState)(!1),{languages:l}=(0,c.d4)((e=>e.formLang),c.bN),{t:h}=(0,s.B)(),{activeMenu:p}=(0,c.d4)((e=>e.menu)),A=(0,c.wA)(),f=(0,u.Zp)();return(0,m.jsx)(i.A,{onFinish:e=>{t(!0),a.A.create({title:(0,o.A)(l,e,"title")}).then((()=>{f("/options"),r.oR.success(h("created.succesfully"));A((0,d.EK)({...p,nextUrl:"options"}))})).finally((()=>t(!1)))},isSubmitting:e})}}}]);