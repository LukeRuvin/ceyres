"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1623],{1623:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(9950),l=s(28429),n=s(85923),i=s(59233),r=s(23263),u=s(87094),d=s(41988),o=s(48538),c=s(91854),m=s(74623),h=s(67231),p=s(47992),f=s(70030),x=s(40337),g=s(74115),A=s(81446),v=s(48970),b=s(44414);const j=()=>{var e,t;const{t:s}=(0,f.B)(),{activeMenu:j}=(0,c.d4)((e=>e.menu),c.bN),y=(0,c.wA)(),[S]=i.A.useForm(),k=(0,l.Zp)(),{id:w}=(0,l.g)(),{myShop:C}=(0,c.d4)((e=>e.myShop),c.bN),[F,I]=(0,a.useState)(null!==(e=j.data)&&void 0!==e&&e.images?[null===(t=j.data)||void 0===t?void 0:t.images[0]]:[]),[N,O]=(0,a.useState)(!1),[_,q]=(0,a.useState)(!1);(0,a.useEffect)((()=>()=>{const e=S.getFieldsValue(!0);y((0,m.Ok)({activeMenu:j,data:e}))}),[]);const V=e=>e.map((e=>({name:e,url:e})));return(0,a.useEffect)((()=>{var e;j.refetch&&(e=w,q(!0),x.A.getById(e).then((e=>{let{data:t}=e;S.setFieldsValue({...t,image:V(t.file_urls),products:{label:t.product.translation.title,value:t.product.id}}),I(V(t.file_urls))})).finally((()=>{q(!1),y((0,m.km)(j))})))}),[j.refetch]),(0,b.jsx)(r.A,{title:s("edit.story"),className:"h-100",children:_?(0,b.jsx)(A.A,{}):(0,b.jsxs)(i.A,{name:"story-add",layout:"vertical",onFinish:e=>{const t={...Object.assign({},...F.map(((e,t)=>({[`file_urls[${t}]`]:e.name})))),product_id:e.products.value};O(!0);const a="seller/stories";x.A.update(w,t).then((()=>{const e={shop_id:C.id};n.oR.success(s("successfully.updated")),(0,c.vA)((()=>{y((0,m.EK)({...j,nextUrl:a})),y((0,g.I$)(e))})),k(`/${a}`)})).finally((()=>O(!1)))},form:S,initialValues:{active:!0,...j.data},className:"d-flex flex-column h-100",children:[(0,b.jsxs)(u.A,{gutter:12,children:[(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)(i.A.Item,{label:s("products"),name:"products",rules:[{required:!1,message:s("required")}],children:(0,b.jsx)(p.G,{fetchOptions:function(e){const t={search:e,shop_id:C.id,status:"published",active:1,rest:1};return h.A.getAll(t).then((e=>e.data.map((e=>({label:e.translation.title,value:e.id,key:e.id})))))},debounceTimeout:200})})}),(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)(i.A.Item,{label:s("image"),name:"image",rules:[{required:0===F.length,message:s("required")}],children:(0,b.jsx)(v.A,{type:"banners",imageList:F,setImageList:I,form:S,multiple:!1})})})]}),(0,b.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,b.jsx)("div",{className:"pb-5",children:(0,b.jsx)(o.A,{type:"primary",htmlType:"submit",loading:N,children:s("submit")})})})]})})}},47992:(e,t,s)=>{s.d(t,{G:()=>d});var a=s(9950),l=s(95491),n=s.n(l),i=s(99674),r=s(90650),u=s(44414);const d=e=>{let{fetchOptions:t,debounceTimeout:s=400,onClear:l,refetchOptions:d=!1,...o}=e;const[c,m]=(0,a.useState)(!1),[h,p]=(0,a.useState)([]),f=(0,a.useMemo)((()=>n()((e=>{p([]),m(!0),t(e).then((e=>{p(e),m(!1)}))}),s)),[t,s]);return(0,u.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:f,onClear:()=>{f(""),l&&l()},notFoundContent:c?(0,u.jsx)(r.A,{size:"small"}):"no results",...o,options:h,onFocus:()=>{h.length&&!d||f("")}})}}}]);