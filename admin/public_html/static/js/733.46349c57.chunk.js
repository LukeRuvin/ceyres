"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[733],{10733:(e,t,s)=>{s.r(t),s.d(t,{default:()=>N});var a=s(9950),l=s(28429),n=s(85923),i=s(59233),u=s(23263),d=s(87094),r=s(41988),o=s(40577),c=s(86971),m=s(25933),p=s(48538),x=s(91854),b=s(74623),v=s(67231),h=s(70030),f=s(59051),j=s.n(f),A=s(58358),_=s(39095),y=s(85023),g=s(81446),k=s(44414);const N=()=>{const{t:e}=(0,h.B)(),{activeMenu:t}=(0,x.d4)((e=>e.menu),x.bN),s=(0,x.wA)(),[f]=i.A.useForm(),N=(0,l.Zp)(),[S,q]=(0,a.useState)(!1),[Y,w]=(0,a.useState)(!1),{myShop:D}=(0,x.d4)((e=>e.myShop),x.bN),{id:F}=(0,l.g)();(0,a.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);e.expired_at=JSON.stringify(null===e||void 0===e?void 0:e.expired_at),s((0,b.Ok)({activeMenu:t,data:e}))}),[]);const I=e=>{w(!0),_.A.getById(e).then((e=>{!function(e){var t,s,a,l,n;f.setFieldsValue({...e,expired_at:j()(e.expired_at,"YYYY-MM-DD"),bonus_stock_id:{label:(null===e||void 0===e||null===(t=e.bonusStock)||void 0===t||null===(s=t.product)||void 0===s||null===(a=s.translation)||void 0===a?void 0:a.title)+" "+(null===(l=e.bonusStock)||void 0===l?void 0:l.extras.map((e=>e.value)).join(", ")),value:null===e||void 0===e||null===(n=e.bonusStock)||void 0===n?void 0:n.id}}),w(!1)}(e.data)})).finally((()=>s((0,b.km)(t))))};(0,a.useEffect)((()=>{t.refetch&&I(F)}),[t.refetch]);return(0,k.jsx)(u.A,{title:e("edit.bonus"),className:"h-100",children:Y?(0,k.jsx)(g.A,{}):(0,k.jsxs)(i.A,{name:"bonus-add",layout:"vertical",onFinish:a=>{const l={expired_at:j()(a.expired_at).format("YYYY-MM-DD"),status:a.status,type:"sum",value:a.value,bonus_stock_id:a.bonus_stock_id.value,bonus_quantity:a.bonus_quantity,bonusable_id:D.id};q(!0);const i="seller/bonus/shop";_.A.update(F,l).then((()=>{n.oR.success(e("successfully.created")),s((0,b.EK)({...t,nextUrl:i})),N(`/${i}`),s((0,A.S)())})).finally((()=>q(!1)))},form:f,initialValues:{status:!0,...t.data,...(()=>{var e,s;if(null===(e=t.data)||void 0===e||!e.expired_at)return{};const a=JSON.parse(null===(s=t.data)||void 0===s?void 0:s.expired_at);return{expired_at:j()(a,"HH:mm:ss")}})()},className:"d-flex flex-column h-100",children:[(0,k.jsxs)(d.A,{gutter:12,children:[(0,k.jsx)(r.A,{span:12,children:(0,k.jsx)(i.A.Item,{label:e("order.amount"),name:"value",rules:[{required:!0,message:e("required")},{type:"number",min:1,message:e("min.1")}],children:(0,k.jsx)(o.A,{className:"w-100"})})}),(0,k.jsx)(r.A,{span:12,children:(0,k.jsx)(i.A.Item,{label:e("bonus.product.stock"),name:"bonus_stock_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(y.D,{fetchOptions:function(){return v.A.getStock({active:1,status:"published"}).then((e=>e.data.map((e=>({label:e.product.translation.title+""+(e.extras.length>0?`: ${e.extras.map((e=>e.value)).join(", ")}`:""),value:e.id})))))},debounceTimeout:200})})}),(0,k.jsx)(r.A,{span:12,children:(0,k.jsx)(i.A.Item,{label:e("bonus.product.quantity"),name:"bonus_quantity",rules:[{required:!0,message:e("required")},{type:"number",min:1,message:e("min.1")}],children:(0,k.jsx)(o.A,{className:"w-100"})})}),(0,k.jsx)(r.A,{span:12,children:(0,k.jsx)(i.A.Item,{name:"expired_at",label:e("expired.at"),rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{className:"w-100",placeholder:"",disabledDate:e=>j()().add(-1,"days")>=e})})}),(0,k.jsx)(r.A,{span:12,children:(0,k.jsx)(i.A.Item,{label:e("active"),name:"status",valuePropName:"checked",children:(0,k.jsx)(m.A,{})})})]}),(0,k.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,k.jsx)("div",{className:"pb-5",children:(0,k.jsx)(p.A,{type:"primary",htmlType:"submit",loading:S,children:e("submit")})})})]})})}},85023:(e,t,s)=>{s.d(t,{D:()=>u});var a=s(9950),l=s(99674),n=s(90650),i=s(44414);const u=e=>{let{fetchOptions:t,refetch:s=!1,value:u,...d}=e;const[r,o]=(0,a.useState)(!1),[c,m]=(0,a.useState)([]);"object"===typeof(null===u||void 0===u?void 0:u.label)&&null!==(null===u||void 0===u?void 0:u.label)&&(u.label=u.label.value);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.A,{labelInValue:!0,filterOption:!1,notFoundContent:r?(0,i.jsx)(n.A,{size:"small"}):"no results",value:u,...d,options:r?[]:c,onFocus:()=>{c.length&&!s||(o(!0),t().then((e=>{m(e),o(!1)})))},getPopupContainer:e=>e.parentNode})})}}}]);