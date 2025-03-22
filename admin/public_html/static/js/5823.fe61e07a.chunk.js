"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5823],{25823:(e,a,l)=>{l.r(a),l.d(a,{default:()=>k});var t=l(9950),r=l(59233),i=l(23263),n=l(87094),s=l(41988),d=l(55902),o=l(99674),u=l(40577),c=l(25933),m=l(48538),v=l(85923),p=l(28429),h=l(71999),j=l(98591),x=l(91854),A=l(74623),g=l(62572),y=l(70030),b=l(48970),w=l(27276),f=l(44414);const k=()=>{var e,a;const{t:l}=(0,y.B)(),k=(0,p.Zp)(),P=(0,x.wA)(),[q,E]=(0,t.useState)("main"),{activeMenu:I}=(0,x.d4)((e=>e.menu),x.bN),[S,_]=(0,t.useState)(null!==(e=I.data)&&void 0!==e&&e.image?[null===(a=I.data)||void 0===a?void 0:a.image]:[]),[L]=r.A.useForm(),[F,$]=(0,t.useState)(!1),[C,N]=(0,t.useState)(null),{defaultLang:z,languages:O}=(0,x.d4)((e=>e.formLang),x.bN);(0,t.useEffect)((()=>()=>{const e=L.getFieldsValue(!0);P((0,A.Ok)({activeMenu:I,data:e}))}),[]);return(0,f.jsx)(i.A,{title:l("add.category"),extra:(0,f.jsx)(h.A,{}),children:(0,f.jsxs)(r.A,{name:"basic",layout:"vertical",onFinish:e=>{var a,t,r;$(!0);const i={...e,type:null!==(a=e.parent_id)&&void 0!==a&&a.value?q:"main",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:null===(t=e.parent_id)||void 0===t?void 0:t.value,"images[0]":null===(r=S[0])||void 0===r?void 0:r.name},n="catalog/categories";g.A.create(i).then((()=>{v.oR.success(l("successfully.created")),P((0,A.EK)({...I,nextUrl:n})),k(`/${n}`)})).catch((e=>N(e.response.data.params))).finally((()=>$(!1)))},initialValues:{active:!0,...I.data},form:L,children:[(0,f.jsxs)(n.A,{gutter:12,children:[(0,f.jsx)(s.A,{span:12,children:O.map(((e,a)=>(0,f.jsx)(r.A.Item,{label:l("name"),name:`title[${e.locale}]`,help:C&&C[`title.${z}`]?C[`title.${z}`][0]:null,validateStatus:C?"error":"success",rules:[{required:!0,validator:(a,t)=>t||(null===e||void 0===e?void 0:e.locale)!==z?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(l("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(l("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(l("required")))}],hidden:e.locale!==z,children:(0,f.jsx)(d.A,{placeholder:l("name")})},e.title+a)))}),(0,f.jsx)(s.A,{span:12,children:O.map(((e,a)=>(0,f.jsx)(r.A.Item,{label:l("description"),name:`description[${e.locale}]`,rules:[{required:!0,validator:(a,t)=>t||(null===e||void 0===e?void 0:e.locale)!==z?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(l("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<5?Promise.reject(new Error(l("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(l("required")))}],hidden:e.locale!==z,children:(0,f.jsx)(j.A,{rows:4,maxLength:150})},e.locale+a)))}),(0,f.jsx)(s.A,{span:12,children:(0,f.jsx)(r.A.Item,{label:l("keywords"),name:"keywords",rules:[{required:!0,message:l("required")}],children:(0,f.jsx)(o.A,{mode:"tags",style:{width:"100%"}})})}),(0,f.jsx)(s.A,{span:12,children:(0,f.jsx)(r.A.Item,{label:l("parent.category"),name:"parent_id",rules:[{required:!1,message:l("required")}],children:(0,f.jsx)(w.v,{refetch:!0,fetchOptions:async function(){return g.A.getAll({perPage:100,type:"main"}).then((e=>e.data.map((e=>{var a,l;return{label:null===(a=e.translation)||void 0===a?void 0:a.title,value:e.id,key:e.id,type:"main",children:null===(l=e.children)||void 0===l?void 0:l.map((e=>{var a,l;return{label:null===(a=e.translation)||void 0===a?void 0:a.title,value:e.id,key:e.id,type:"sub_main",disabled:"child"===e.type,children:null===(l=e.children)||void 0===l?void 0:l.map((e=>{var a;return{label:null===(a=e.translation)||void 0===a?void 0:a.title,value:e.id,key:e.id,disabled:!0,type:"child"}}))}}))}}))))},onSelect:(e,a,l)=>{const{type:t}=a||{};E("main"===t?"sub_main":"sub_main"===t?"child":"main")},allowClear:!0})})}),(0,f.jsx)(s.A,{span:12,children:(0,f.jsx)(r.A.Item,{name:"input",label:l("input"),rules:[{required:!0,message:l("required")}],children:(0,f.jsx)(u.A,{min:0,parser:e=>parseInt(e,10),max:9999999,className:"w-100"})})}),(0,f.jsx)(s.A,{span:4,children:(0,f.jsx)(r.A.Item,{label:l("image"),name:"images",rules:[{validator:()=>0===(null===S||void 0===S?void 0:S.length)?Promise.reject(new Error(l("required"))):Promise.resolve()}],children:(0,f.jsx)(b.A,{type:"categories",imageList:S,setImageList:_,form:L,multiple:!1})})}),(0,f.jsx)(s.A,{span:2,children:(0,f.jsx)(r.A.Item,{label:l("active"),name:"active",valuePropName:"checked",children:(0,f.jsx)(c.A,{})})})]}),(0,f.jsx)(m.A,{type:"primary",htmlType:"submit",loading:F,children:l("submit")})]})})}},27276:(e,a,l)=>{l.d(a,{v:()=>s});var t=l(9950),r=l(90777),i=l(90650),n=l(44414);const s=e=>{let{fetchOptions:a,refetch:l=!1,...s}=e;const[d,o]=(0,t.useState)(!1),[u,c]=(0,t.useState)([]);return(0,n.jsx)(r.A,{treeLine:!0,treeData:d?[]:u,treeDefaultExpandAll:!0,labelInValue:!0,onFocus:()=>{u.length&&!l||(o(!0),a().then((e=>{c(e),o(!1)})))},notFoundContent:d?(0,n.jsx)(i.A,{size:"small"}):"no results",...s})}}}]);