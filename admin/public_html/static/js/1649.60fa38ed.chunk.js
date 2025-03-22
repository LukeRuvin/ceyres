"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1649],{51649:(e,r,s)=>{s.r(r),s.d(r,{default:()=>P});var a=s(9950),l=s(59233),i=s(23263),n=s(87094),t=s(41988),d=s(55902),o=s(40577),m=s(86971),u=s(99674),c=s(48538),v=s(28429),p=s(85923),h=s(91854),j=s(74623),w=s(53271),A=s(3855),x=s(70030),f=s(59051),g=s.n(f),y=s(48970),b=s(44414);function P(){var e,r;const{t:s}=(0,x.B)(),[f]=l.A.useForm(),[P,q]=(0,a.useState)(null),[S,E]=(0,a.useState)(!1),I=(0,v.Zp)(),k=(0,h.d4)((e=>e.menu.activeMenu)),_=(0,h.wA)(),[N,F]=(0,a.useState)(null!==k&&void 0!==k&&null!==(e=k.data)&&void 0!==e&&e.image?[null===k||void 0===k||null===(r=k.data)||void 0===r?void 0:r.image]:[]);(0,a.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);e.birthday=JSON.stringify(null===e||void 0===e?void 0:e.birthday),_((0,j.Ok)({activeMenu:k,data:{...k.data,...e}}))}),[]);return(0,b.jsx)(i.A,{title:s("add.user"),children:(0,b.jsx)(l.A,{form:f,layout:"vertical",initialValues:{gender:"male",...k.data,...(()=>{var e,r;if(null===(e=k.data)||void 0===e||!e.birthday)return{};const s=JSON.parse(null===(r=k.data)||void 0===r?void 0:r.birthday);return{birthday:g()(s)}})()},onFinish:e=>{var r;E(!0);const a={firstname:e.firstname,lastname:e.lastname,email:e.user_email,phone:e.phone,birthday:g()(e.birthday).format("YYYY-MM-DD"),gender:e.gender,password_confirmation:e.password_confirmation,password:e.password,images:N[0]?[null===(r=N[0])||void 0===r?void 0:r.name]:void 0},l="users/user";w.A.create(a).then((()=>{p.oR.success(s("successfully.created")),(0,h.vA)((()=>{_((0,j.EK)({...k,nextUrl:l})),_((0,A.$3)({}))})),I(`/${l}`)})).catch((e=>q(e.response.data.params))).finally((()=>E(!1)))},children:(0,b.jsxs)(n.A,{gutter:12,children:[(0,b.jsx)(t.A,{span:24,children:(0,b.jsx)(l.A.Item,{rules:[{validator:()=>0===(null===N||void 0===N?void 0:N.length)?Promise.reject(new Error(s("required"))):Promise.resolve()}],label:s("avatar"),name:"images",children:(0,b.jsx)(y.A,{type:"users",imageList:N,setImageList:F,form:f,multiple:!1})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:s("firstname"),name:"firstname",help:null!==P&&void 0!==P&&P.firstname?P.firstname[0]:null,validateStatus:null!==P&&void 0!==P&&P.firstname?"error":"success",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(s("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(s("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(s("required")))}],children:(0,b.jsx)(d.A,{})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:"lastname",name:"lastname",help:null!==P&&void 0!==P&&P.lastname?P.lastname[0]:null,validateStatus:null!==P&&void 0!==P&&P.lastname?"error":"success",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(s("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(s("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(s("required")))}],children:(0,b.jsx)(d.A,{})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:s("phone"),name:"phone",help:null!==P&&void 0!==P&&P.phone?P.phone[0]:null,validateStatus:null!==P&&void 0!==P&&P.phone?"error":"success",rules:[{required:!0,message:s("required")}],children:(0,b.jsx)(o.A,{min:0,className:"w-100"})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:s("birthday"),name:"birthday",rules:[{required:!0,message:s("required")}],children:(0,b.jsx)(m.A,{className:"w-100",disabledDate:e=>g()().add(-18,"years")<=e,defaultPickerValue:g()().add(-18,"years")})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:s("gender"),name:"gender",rules:[{required:!0,message:s("required")}],children:(0,b.jsxs)(u.A,{picker:"dayTime",className:"w-100",children:[(0,b.jsx)(u.A.Option,{value:"male",children:s("male")}),(0,b.jsx)(u.A.Option,{value:"female",children:s("female")})]})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:s("email"),name:"user_email",help:null!==P&&void 0!==P&&P.email?P.email[0]:null,validateStatus:null!==P&&void 0!==P&&P.email?"error":"success",rules:[{required:!0,message:s("required")},{type:"email",message:s("invalid.email")}],children:(0,b.jsx)(d.A,{type:"email"})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:s("password"),name:"password",help:null!==P&&void 0!==P&&P.password?P.password[0]:null,validateStatus:null!==P&&void 0!==P&&P.password?"error":"success",rules:[{required:!0,message:s("required")},{validator:(e,r)=>r&&(null===r||void 0===r?void 0:r.toString().length)<6?Promise.reject(new Error(s("min.6.letters"))):Promise.resolve()}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,b.jsx)(d.A.Password,{type:"password",className:"w-100"})})}),(0,b.jsx)(t.A,{span:12,children:(0,b.jsx)(l.A.Item,{label:s("password.confirmation"),help:null!==P&&void 0!==P&&P.password_confirmation?P.password_confirmation[0]:null,validateStatus:null!==P&&void 0!==P&&P.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:s("required")},e=>{let{getFieldValue:r}=e;return{validator:(e,a)=>a&&r("password")!==a?Promise.reject(s("two.passwords.dont.match")):Promise.resolve()}}],normalize:e=>""===(null===e||void 0===e?void 0:e.trim())?null===e||void 0===e?void 0:e.trim():e,children:(0,b.jsx)(d.A.Password,{type:"password"})})}),(0,b.jsx)(c.A,{type:"primary",htmlType:"submit",loading:S,children:s("save")})]})})})}}}]);