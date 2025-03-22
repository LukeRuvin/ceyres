"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7271],{47271:(e,t,l)=>{l.r(t),l.d(t,{default:()=>k});var r=l(9950),a=l(59233),i=l(23263),s=l(87094),n=l(41988),o=l(55902),c=l(99674),d=l(25933),u=l(48538),m=l(90650),v=l(85923),p=l(28429),h=l(71999),g=l(98591),j=l(91854),x=l(74623),A=l(62572),y=l(85427),f=l(70030),w=l(48970),b=l(44414);const k=()=>{var e,t;const{t:l}=(0,f.B)(),k=(0,p.Zp)(),P=(0,j.wA)(),{activeMenu:E}=(0,j.d4)((e=>e.menu),j.bN),{params:I}=(0,j.d4)((e=>e.careerCategory),j.bN),[$,N]=(0,r.useState)(!1),[q,S]=(0,r.useState)(null!==(e=E.data)&&void 0!==e&&e.image?[null===(t=E.data)||void 0===t?void 0:t.image]:[]),[F]=a.A.useForm(),[L,z]=(0,r.useState)(!1),[C,V]=(0,r.useState)(null),{uuid:B}=(0,p.g)(),{defaultLang:M,languages:O}=(0,j.d4)((e=>e.formLang),j.bN);(0,r.useEffect)((()=>()=>{const e=F.getFieldsValue(!0);P((0,x.Ok)({activeMenu:E,data:e}))}),[]);const _=e=>({name:e,url:e});function K(e){if(!e)return{};const{translations:t}=e,l=O.map((e=>{var l,r;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title,[`description[${e.locale}]`]:null===(r=t.find((t=>t.locale===e.locale)))||void 0===r?void 0:r.description}}));return Object.assign({},...l)}return(0,r.useEffect)((()=>{var e;E.refetch&&(e=B,N(!0),A.A.getById(e).then((e=>{let t=e.data;const l={...t,...K(t),image:[_(t.img)],keywords:t.keywords.split(",")};F.setFieldsValue(l),S([_(t.img)])})).finally((()=>{N(!1),P((0,x.km)(E))})))}),[E.refetch]),(0,b.jsx)(i.A,{title:l("clone.category"),extra:(0,b.jsx)(h.A,{}),children:$?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,b.jsx)(m.A,{size:"large",className:"mt-5 pt-5"})}):(0,b.jsxs)(a.A,{name:"basic",layout:"vertical",onFinish:e=>{var t;z(!0);const r={...e,type:"career",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:null,"images[0]":null===(t=q[0])||void 0===t?void 0:t.name},a="catalog/career-categories";A.A.create(r).then((()=>{v.oR.success(l("successfully.updated")),P((0,x.EK)({...E,nextUrl:a})),P((0,y.b)(I)),k(`/${a}`)})).catch((e=>V(e.response.data.params))).finally((()=>z(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...E.data},form:F,children:[(0,b.jsxs)(s.A,{gutter:12,children:[(0,b.jsx)(n.A,{span:12,children:O.map(((e,t)=>(0,b.jsx)(a.A.Item,{label:l("name"),name:`title[${e.locale}]`,help:C&&C[`title.${M}`]?C[`title.${M}`][0]:null,validateStatus:C?"error":"success",rules:[{validator:(t,r)=>r||(null===e||void 0===e?void 0:e.locale)!==M?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(l("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(l("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(l("required")))}],hidden:e.locale!==M,children:(0,b.jsx)(o.A,{})},e.title+t)))}),(0,b.jsx)(n.A,{span:12,children:O.map(((e,t)=>(0,b.jsx)(a.A.Item,{label:l("description"),name:`description[${e.locale}]`,rules:[{validator:(t,r)=>r||(null===e||void 0===e?void 0:e.locale)!==M?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(l("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<5?Promise.reject(new Error(l("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(l("required")))}],hidden:e.locale!==M,children:(0,b.jsx)(g.A,{rows:4})},e.locale+t)))}),(0,b.jsx)(n.A,{span:12,children:(0,b.jsx)(a.A.Item,{label:l("keywords"),name:"keywords",rules:[{required:!0,message:l("required")}],children:(0,b.jsx)(c.A,{mode:"tags",style:{width:"100%"}})})}),(0,b.jsx)(n.A,{span:4,children:(0,b.jsx)(a.A.Item,{label:l("image"),name:"images",rules:[{validator:(e,t)=>0===(null===q||void 0===q?void 0:q.length)?Promise.reject(new Error(l("required"))):Promise.resolve()}],children:(0,b.jsx)(w.A,{type:"categories",imageList:q,setImageList:S,form:F,multiple:!1})})}),(0,b.jsx)(n.A,{span:2,children:(0,b.jsx)(a.A.Item,{label:l("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(d.A,{})})})]}),(0,b.jsx)(u.A,{type:"primary",htmlType:"submit",loading:L,children:l("submit")})]})})}}}]);