"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1586],{11586:(e,s,r)=>{r.r(s),r.d(s,{default:()=>g});var a=r(9950),n=r(59233),i=r(23263),l=r(48538),t=r(87094),d=r(41988),u=r(55902),c=r(70030),p=r(52281),o=r(85923),A=r(91854),m=r(74623),h=r(9690),j=r(81446),x=r(13311),f=r(44414);function g(){const{t:e}=(0,c.B)(),[s]=n.A.useForm(),{activeMenu:r}=(0,A.d4)((e=>e.menu),A.bN),g=(0,A.wA)(),[v,b]=(0,a.useState)(!1),[q,_]=(0,a.useState)(!1),{isDemo:y}=(0,x.A)();(0,a.useEffect)((()=>()=>{const e=s.getFieldsValue(!0);g((0,m.Ok)({activeMenu:r,data:e}))}),[]);function k(){b(!0),p.A.get().then((e=>{const r=(e=>{const s=e.map((e=>({[e.key]:e.value})));return Object.assign({},...s)})(e.data);s.setFieldsValue(r)})).finally((()=>{b(!1),g((0,m.km)(r))}))}(0,a.useEffect)((()=>{r.refetch&&k()}),[r.refetch]);return(0,f.jsx)(n.A,{layout:"vertical",form:s,name:"global-settings",onFinish:s=>{var r;r=s,_(!0),p.A.update(r).then((()=>{o.oR.success(e("successfully.updated")),g((0,h.Uc)())})).finally((()=>_(!1)))},initialValues:{...r.data},children:v?(0,f.jsx)(j.A,{}):(0,f.jsx)(i.A,{title:e("social.settings"),extra:(0,f.jsx)(l.A,{type:"primary",onClick:()=>{y?o.oR.warning(e("cannot.work.demo")):s.submit()},loading:q,children:e("save")}),children:(0,f.jsxs)(t.A,{gutter:12,children:[(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(n.A.Item,{label:"Vendor App IOS",name:"vendor_app_ios",rules:[{required:!0,message:e("required")}],children:(0,f.jsx)(u.A,{})})}),(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(n.A.Item,{label:"Vendor App Android",name:"vendor_app_android",rules:[{required:!0,message:e("required")}],children:(0,f.jsx)(u.A,{})})}),(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(n.A.Item,{label:"Delivery App IOS",name:"delivery_app_ios",rules:[{required:!0,message:e("required")}],children:(0,f.jsx)(u.A,{})})}),(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(n.A.Item,{label:"Delivery App Android",name:"delivery_app_android",rules:[{required:!0,message:e("required")}],children:(0,f.jsx)(u.A,{})})}),(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(n.A.Item,{label:"Customer App IOS",name:"customer_app_ios",rules:[{required:!0,message:e("required")}],children:(0,f.jsx)(u.A,{})})}),(0,f.jsx)(d.A,{span:12,children:(0,f.jsx)(n.A.Item,{label:"Customer App Android",name:"customer_app_android",rules:[{required:!0,message:e("required")}],children:(0,f.jsx)(u.A,{})})})]})})})}}}]);