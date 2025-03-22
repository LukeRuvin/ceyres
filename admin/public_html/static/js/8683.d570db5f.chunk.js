"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8683],{8297:(e,t,l)=>{l.d(t,{A:()=>c});var a=l(9950),n=l(55902),s=l(41397),i=l(60767),o=l(44414);function c(e){let{handleChange:t,defaultValue:l,resetSearch:c,...r}=e;const[d,u]=(0,a.useState)(l),h=(0,a.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(l)}),[c]),(0,o.jsx)(n.A,{value:d,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,o.jsx)(i.A,{}),...r})}},28645:(e,t,l)=>{l.d(t,{A:()=>x});var a=l(9950),n=l(66362),s=l(69216),i=l(80737),o=l(25933),c=l(57811),r=l(81541),d=l(48538),u=l(89323),h=l(70030),v=l(44414);const{Text:m}=n.A,x=e=>{let{columns:t=[],setColumns:l,style:n,size:x="",iconOnly:A}=e;const{t:p}=(0,h.B)(),[g,j]=(0,a.useState)(!1),f=(0,v.jsx)(s.A,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,v.jsx)(s.A.Item,{children:(0,v.jsxs)(i.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(o.A,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(a)}(e),disabled:1===a})]})},e+a)))});return(0,v.jsx)(c.A,{overlay:f,trigger:["click"],onVisibleChange:e=>{j(e)},visible:g,children:(0,v.jsx)(r.A,{title:p("change.columns"),children:(0,v.jsx)(d.A,{style:{...n},size:x,icon:(0,v.jsx)(u.A,{}),children:A?null:p("Columns")})})})}},35116:(e,t,l)=>{l.d(t,{A:()=>r});l(9950);var a=l(48538),n=l(44070),s=l(85923),i=l(70030),o=l(13311),c=l(44414);function r(e){let{size:t="",onClick:l,type:r="default",...d}=e;const{t:u}=(0,i.B)(),{isDemo:h}=(0,o.A)();return(0,c.jsx)(a.A,{size:t,icon:(0,c.jsx)(n.A,{}),onClick:e=>{h?s.oR.warning(u("cannot.work.demo")):l(e)},type:r,...d})}},38683:(e,t,l)=>{l.r(t),l.d(t,{default:()=>I});var a=l(9950),n=l(24513),s=l(44070),i=l(53387),o=l(80737),c=l(12916),r=l(48538),d=l(23263),u=l(52913),h=l(55386),v=l(85923),m=l(76083),x=l(91854),A=l(74623),p=l(62572),g=l(82743),j=l(70030),f=l(35116),y=l(28645),C=l(8297),w=l(88986),b=l(59233),k=l(82706),z=l(55902),V=l(71999),M=l(44414);const S=e=>{let{isModalOpen:t,handleCancel:l}=e;const{t:a}=(0,j.B)(),n=(0,x.wA)(),{activeMenu:s}=(0,x.d4)((e=>e.menu),x.bN),[i]=b.A.useForm(),{defaultLang:o,languages:c}=(0,x.d4)((e=>e.formLang),x.bN);return(0,M.jsx)(k.A,{visible:t,title:a("add.menu.category"),onCancel:l,footer:[(0,M.jsx)(r.A,{type:"primary",onClick:()=>i.submit(),children:a("save")},"saveBtn"),(0,M.jsx)(r.A,{type:"default",onClick:l,children:a("cancel")},"cancelBtn")],children:(0,M.jsx)(d.A,{extra:(0,M.jsx)(V.A,{}),children:(0,M.jsx)(b.A,{name:"basic",layout:"vertical",onFinish:e=>{const t={type:"menu",...e};p.A.create(t).then((()=>{v.oR.success(a("successfully.created")),l(),n((0,A.Ms)(s))})).catch((e=>console.error(e)))},initialValues:{...s.data},form:i,children:c.map(((e,t)=>(0,M.jsx)(b.A.Item,{label:a("name"),name:`title[${e.locale}]`,rules:[{validator:(t,l)=>l||(null===e||void 0===e?void 0:e.locale)!==o?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(a("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(a("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(a("required")))}],hidden:e.locale!==o,children:(0,M.jsx)(z.A,{placeholder:a("name"),className:"w-100"})},e.title+t)))})})})},B=e=>{let{isModalOpen:t,handleCancel:l}=e;const{t:n}=(0,j.B)(),s=(0,x.wA)(),{activeMenu:i}=(0,x.d4)((e=>e.menu),x.bN),[o,c]=(0,a.useState)(!1),[u]=b.A.useForm(),[h,m]=(0,a.useState)(!1),{defaultLang:g,languages:f}=(0,x.d4)((e=>e.formLang),x.bN),y=null===t||void 0===t?void 0:t.uuid;function C(e){if(!e)return{};const{translations:t}=e,l=f.map((e=>{var l;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title}}));return Object.assign({},...l)}return(0,a.useEffect)((()=>{var e;t&&(e=t.uuid,c(!0),p.A.getById(e).then((e=>{const t={...C(e.data)};u.setFieldsValue(t)})).finally((()=>{c(!1),s((0,A.km)(i))})))}),[t]),(0,M.jsx)(k.A,{visible:t,title:n("edit.menu.category"),onCancel:l,footer:[(0,M.jsx)(r.A,{loading:h,type:"primary",onClick:()=>u.submit(),children:n("save")},"saveBtn"),(0,M.jsx)(r.A,{type:"default",onClick:l,children:n("cancel")},"cancelBtn")],children:(0,M.jsx)(d.A,{extra:(0,M.jsx)(V.A,{}),loading:o,children:(0,M.jsx)(b.A,{name:"basic",layout:"vertical",onFinish:e=>{m(!0);const a={...e,type:"menu"};console.log("isModalOpen => ",t),p.A.update(y,a).then((()=>{v.oR.success(n("successfully.updated")),l(),s((0,A.Ms)(i))})).catch((e=>console.error(e.response.data.params))).finally((()=>m(!1)))},initialValues:{...i.data},form:u,children:f.map(((e,t)=>(0,M.jsx)(b.A.Item,{label:n("name"),name:`title[${e.locale}]`,rules:[{required:e.locale===g,message:n("required")}],hidden:e.locale!==g,children:(0,M.jsx)(z.A,{placeholder:n("name"),className:"w-100"})},e.title+t)))})})})},H=["blue","red","gold","volcano","cyan","lime"],I=()=>{var e,t;const{t:l}=(0,j.B)(),b=(0,x.wA)(),[k,z]=(0,a.useState)([{title:l("id"),dataIndex:"id",key:"id",is_show:!0},{title:l("name"),dataIndex:"name",key:"name",is_show:!0,render:(e,t)=>{var l;return null===(l=t.translation)||void 0===l?void 0:l.title}},{title:l("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var l;return(0,M.jsx)(o.A,{children:null===(l=t.locales)||void 0===l?void 0:l.map(((e,t)=>(0,M.jsx)(c.A,{className:"text-uppercase",color:[H[t]],children:e})))})}},{title:l("status"),dataIndex:"active",key:"active",is_show:!0,render:e=>e?(0,M.jsxs)(c.A,{color:"cyan",children:[" ",l("active")]}):(0,M.jsx)(c.A,{color:"yellow",children:l("inactive")})},{title:l("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,M.jsxs)(o.A,{children:[(0,M.jsx)(r.A,{type:"primary",icon:(0,M.jsx)(n.A,{}),onClick:()=>F(t)}),(0,M.jsx)(f.A,{icon:(0,M.jsx)(s.A,{}),onClick:()=>{N([t.id]),_(!1),V(!0),K(!0)}})]})}]),{setIsModalVisible:V}=(0,a.useContext)(h.o),[I,N]=(0,a.useState)(null),[O,_]=(0,a.useState)(!1),[E,R]=(0,a.useState)(null),[P,F]=(0,a.useState)(null),[L,$]=(0,a.useState)(!1),[q,K]=(0,a.useState)(null),{activeMenu:T}=(0,x.d4)((e=>e.menu),x.bN),{menuCategories:D,meta:W,loading:G}=(0,x.d4)((e=>e.menuCategory),x.bN),J=T.data,Q={search:null===J||void 0===J?void 0:J.search,perPage:null===J||void 0===J?void 0:J.perPage,page:null===J||void 0===J?void 0:J.page,status:(null===J||void 0===J?void 0:J.role)||"published"};(0,a.useEffect)((()=>{T.refetch&&(b((0,g.s)(Q)),b((0,A.km)(T)))}),[T.refetch]),(0,w.A)((()=>{b((0,g.s)(Q))}),[T.data]);const U={selectedRowKeys:I,onChange:e=>{N(e)}};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(d.A,{className:"p-0",children:(0,M.jsxs)(o.A,{wrap:!0,size:[14,20],children:[(0,M.jsx)(C.A,{placeholder:l("search"),className:"w-25",handleChange:e=>{(e=>{const t=T.data;b((0,A.Ok)({activeMenu:T,data:{...t,...e}}))})({search:e})},defaultValue:null===(e=T.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(t=T.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,M.jsx)(f.A,{size:"",onClick:()=>{null===I||0===I.length?v.oR.warning(l("select.the.product")):(V(!0),K(!1))},children:l("delete.selected")}),(0,M.jsx)(r.A,{type:"primary",icon:(0,M.jsx)(i.A,{}),onClick:()=>R(!0),children:l("add.category")}),(0,M.jsx)(y.A,{columns:k,setColumns:z})]})}),(0,M.jsx)(d.A,{title:l("menu.categories"),children:(0,M.jsx)(u.A,{scroll:{x:!0},rowSelection:U,columns:null===k||void 0===k?void 0:k.filter((e=>e.is_show)),dataSource:D,pagination:{pageSize:W.per_page,page:(null===J||void 0===J?void 0:J.page)||1,total:W.total,defaultCurrent:null===J||void 0===J?void 0:J.page},rowKey:e=>e.id,onChange:e=>{const{pageSize:t,current:l}=e;b((0,A.Ok)({activeMenu:T,data:{...T.data,perPage:t,page:l}}))},loading:G})}),(0,M.jsx)(m.A,{click:()=>{$(!0);const e={...Object.assign({},...I.map(((e,t)=>({[`ids[${t}]`]:e}))))};p.A.delete(e).then((()=>{b((0,g.s)(Q)),v.oR.success(l("successfully.deleted"))})).finally((()=>{V(!1),$(!1),K(null),N(null)}))},text:l(O?"set.active.category":q?"delete":"all.delete"),setText:N,loading:L}),E&&(0,M.jsx)(S,{isModalOpen:E,handleCancel:()=>R(null)}),P&&(0,M.jsx)(B,{isModalOpen:P,handleCancel:()=>F(null)})]})}},53387:(e,t,l)=>{l.d(t,{A:()=>c});var a=l(89379),n=l(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=l(25085),o=function(e,t){return n.createElement(i.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:s}))};const c=n.forwardRef(o)},89323:(e,t,l)=>{l.d(t,{A:()=>c});var a=l(89379),n=l(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=l(25085),o=function(e,t){return n.createElement(i.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:s}))};const c=n.forwardRef(o)}}]);