"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7009],{7009:(e,s,r)=>{r.r(s),r.d(s,{default:()=>f});var t=r(9950),l=r(28429),a=r(85923),i=r(59233),m=r(23263),n=r(87094),d=r(41988),o=r(55902),c=r(40577),u=r(25933),p=r(48538),h=r(91854),j=r(74623),x=r(70030),v=r(7843),A=r(98459),b=r(44414);const f=()=>{const{t:e}=(0,x.B)(),{activeMenu:s}=(0,h.d4)((e=>e.menu),h.bN),r=(0,h.wA)(),[f]=i.A.useForm(),g=(0,l.Zp)(),[w,_]=(0,t.useState)(!1);(0,t.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);r((0,j.Ok)({activeMenu:s,data:e}))}),[]);return(0,b.jsx)(m.A,{title:e("add.email.provider"),className:"h-100",children:(0,b.jsxs)(i.A,{name:"email-provider-add",layout:"vertical",onFinish:t=>{const l={smtp_auth:t.smtp_auth,smtp_debug:t.smtp_debug,port:t.port,password:t.password,from_to:t.from_to,host:t.host,active:Number(t.active),from_site:t.from_site};_(!0);const i="settings/emailProviders";v.A.create(l).then((()=>{a.oR.success(e("successfully.created")),r((0,j.EK)({...s,nextUrl:i})),g(`/${i}`),r((0,A.o)({}))})).finally((()=>_(!1)))},form:f,initialValues:{smtp_debug:!0,smtp_auth:!0,active:!0,...s.data},className:"d-flex flex-column h-100",children:[(0,b.jsxs)(n.A,{gutter:12,children:[(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)(i.A.Item,{rules:[{required:!0,message:e("required")},{type:"email",message:e("invalid.email")}],label:e("email"),name:"from_to",children:(0,b.jsx)(o.A,{placeholder:"Email"})})}),(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)(i.A.Item,{rules:[{required:!0,message:e("required")},{type:"string",min:6,message:e("min.6.letters")}],label:e("password"),name:"password",normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,b.jsx)(o.A.Password,{})})}),(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)(i.A.Item,{rules:[{validator:(s,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(e("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(e("required")))}],label:e("host"),name:"host",children:(0,b.jsx)(o.A,{})})}),(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)(i.A.Item,{rules:[{validator:(s,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(e("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(e("required")))}],label:e("from.site"),name:"from_site",children:(0,b.jsx)(o.A,{})})}),(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)(i.A.Item,{rules:[{required:!0,message:e("required")}],label:e("port"),name:"port",children:(0,b.jsx)(c.A,{min:0,className:"w-100"})})}),(0,b.jsx)(d.A,{span:8,children:(0,b.jsx)(i.A.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(u.A,{})})}),(0,b.jsx)(d.A,{span:8,children:(0,b.jsx)(i.A.Item,{valuePropName:"checked",label:e("smtp_debug"),name:"smtp_debug",children:(0,b.jsx)(u.A,{})})}),(0,b.jsx)(d.A,{span:8,children:(0,b.jsx)(i.A.Item,{valuePropName:"checked",label:e("smtp_auth"),name:"smtp_auth",children:(0,b.jsx)(u.A,{})})})]}),(0,b.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,b.jsx)("div",{className:"pb-5",children:(0,b.jsx)(p.A,{type:"primary",htmlType:"submit",loading:w,children:e("submit")})})})]})})}}}]);