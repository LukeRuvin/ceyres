"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4140],{4140:(e,l,t)=>{t.r(l),t.d(l,{default:()=>b});var n=t(9950),a=t(28429),s=t(85923),i=t(59233),u=t(23263),r=t(87094),o=t(41988),d=t(80737),c=t(48538),f=t(91854),h=t(74623),A=t(71999),m=t(31281),v=t(13790),g=t(70030),j=t(15249),p=t(92386),x=t(41064),q=t(81446),w=t(44414);function b(){const{t:e}=(0,g.B)(),{activeMenu:l}=(0,f.d4)((e=>e.menu),f.bN),{languages:t,defaultLang:b}=(0,f.d4)((e=>e.formLang),f.bN),{uuid:$}=(0,a.g)(),y=(0,f.wA)(),[k]=i.A.useForm(),F=(0,a.Zp)(),[M,C]=(0,n.useState)(!1),[E,I]=(0,n.useState)(!1);(0,n.useEffect)((()=>()=>{const e=k.getFieldsValue(!0);y((0,h.Ok)({activeMenu:l,data:e}))}),[]),(0,n.useEffect)((()=>{l.refetch&&function(e){I(!0),p.A.getById(e).then((e=>{let{data:l}=e;k.setFieldsValue((0,x.A)(t,l,["answer","question"]))})).finally((()=>{I(!1),y((0,h.km)(l))}))}($)}),[l.refetch]);return(0,w.jsx)(u.A,{title:e("edit.faq"),extra:(0,w.jsx)(A.A,{}),children:E?(0,w.jsx)(q.A,{}):(0,w.jsxs)(i.A,{name:"faq-edit",layout:"vertical",onFinish:n=>{const a={question:(0,m.A)(t,n,"question"),answer:(0,m.A)(t,n,"answer")};C(!0);const i="settings/faqs";p.A.update($,a).then((()=>{s.oR.success(e("successfully.updated")),y((0,h.EK)({...l,nextUrl:i})),F(`/${i}`),y((0,v.C)({}))})).finally((()=>C(!1)))},form:k,initialValues:null===l||void 0===l?void 0:l.data,children:[(0,w.jsx)(r.A,{gutter:12,children:(0,w.jsx)(o.A,{span:12,children:t.map((l=>(0,w.jsx)(i.A.Item,{label:e("question"),name:`question[${l.locale}]`,rules:[{required:l.locale===b,message:e("required")}],hidden:l.locale!==b,children:(0,w.jsx)(j.A,{rows:2})},"question"+l.locale)))})}),(0,w.jsx)(r.A,{gutter:12,children:(0,w.jsx)(o.A,{span:12,children:t.map((l=>(0,w.jsx)(i.A.Item,{label:e("answer"),name:`answer[${l.locale}]`,rules:[{required:l.locale===b,message:e("required")}],hidden:l.locale!==b,children:(0,w.jsx)(j.A,{rows:6})},"answer"+l.locale)))})}),(0,w.jsx)(d.A,{children:(0,w.jsx)(c.A,{type:"primary",htmlType:"submit",loading:M,children:e("save")})})]})})}},31281:(e,l,t)=>{function n(e,l){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=e.map((e=>({[e.locale]:""===l[`${t}[${e.locale}]`]?void 0:l[`${t}[${e.locale}]`]})));return Object.assign({},...n)}t.d(l,{A:()=>n})},41064:(e,l,t)=>{function n(e,l){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["title"];if(null===l||void 0===l||!l.translations)return{};const{translations:n}=l,a=(e,l)=>{const t=null===n||void 0===n?void 0:n.find((l=>(null===l||void 0===l?void 0:l.locale)===(null===e||void 0===e?void 0:e.locale)));return t||{[l]:""}},s=e.flatMap((e=>t.flatMap((l=>({[`${l}[${null===e||void 0===e?void 0:e.locale}]`]:a(e,l)[l]})))));return Object.assign({},...s)}t.d(l,{A:()=>n})}}]);