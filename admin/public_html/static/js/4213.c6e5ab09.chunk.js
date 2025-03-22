"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4213],{8297:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(9950),r=a(55902),s=a(41397),n=a(60767),i=a(44414);function o(e){let{handleChange:t,defaultValue:a,resetSearch:o,...d}=e;const[c,u]=(0,l.useState)(a),m=(0,l.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,l.useEffect)((()=>{u(a)}),[o]),(0,i.jsx)(r.A,{value:c,onChange:e=>{u(e.target.value),m(e.target.value)},prefix:(0,i.jsx)(n.A,{}),...d})}},44213:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var l=a(9950),r=a(59233),s=a(55902),n=a(48538),i=a(23263),o=a(80737),d=a(99674),c=a(52913),u=a(81061),m=a(85923),h=a(24513),p=a(44070),x=a(53387),v=a(82706),A=a(87094),j=a(41988),g=a(70030),f=a(44414);function b(e){let{visible:t,setVisible:a,languages:i,refetch:o}=e;const{t:c}=(0,g.B)(),[h,p]=(0,l.useState)(!1),[x]=r.A.useForm(),b=()=>{a(!1)};return(0,f.jsx)(v.A,{visible:t,title:c("add.translation"),onCancel:b,footer:[(0,f.jsx)(n.A,{type:"primary",form:"translation-form",htmlType:"submit",loading:h,children:c("create")},"create-translation"),(0,f.jsx)(n.A,{type:"default",onClick:b,children:c("cancel")},"create-translation-cancel")],children:(0,f.jsx)(r.A,{id:"translation-form",name:"translation",layout:"vertical",onFinish:e=>{p(!0),u.A.create(e).then((()=>{m.oR.success(c("successfully.created")),a(!1),o()})).finally((()=>p(!1)))},form:x,initialValues:{group:"web"},children:(0,f.jsxs)(A.A,{gutter:12,children:[(0,f.jsx)(j.A,{span:24,children:(0,f.jsx)(r.A.Item,{label:c("name"),name:"key",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(c("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(c("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(c("required")))}],children:(0,f.jsx)(s.A,{})})}),(0,f.jsx)(j.A,{span:24,children:(0,f.jsx)(r.A.Item,{label:c("group"),name:"group",rules:[{required:!0,message:""}],children:(0,f.jsxs)(d.A,{children:[(0,f.jsx)(d.A.Option,{value:"web",children:c("web")}),(0,f.jsx)(d.A.Option,{value:"mobile",children:c("mobile")}),(0,f.jsx)(d.A.Option,{value:"errors",children:c("errors")})]})})}),i.map(((e,t)=>(0,f.jsx)(j.A,{span:24,children:(0,f.jsx)(r.A.Item,{label:`${c("translation")} (${e.locale})`,name:`value[${e.locale}]`,rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(c("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(c("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(c("required")))}],children:(0,f.jsx)(s.A,{})})},t)))]})})})}var y=a(91854),w=a(8297),S=a(38525),k=a(74623),C=a(28429),I=a(63620),P=a(76083),E=a(55386);const O=l.createContext(null),R=e=>{let{index:t,...a}=e;const[l]=r.A.useForm();return(0,f.jsx)(r.A,{form:l,component:!1,children:(0,f.jsx)(O.Provider,{value:l,children:(0,f.jsx)("tr",{...a})})})},V=e=>{let{title:t,editable:a,children:n,dataIndex:i,record:o,handleSave:d,...c}=e;const{t:u}=(0,g.B)(),[m,p]=(0,l.useState)(!1),x=(0,l.useRef)(null),v=(0,l.useContext)(O);(0,l.useEffect)((()=>{m&&x.current.focus()}),[m]);const A=()=>{p(!m),v.setFieldsValue({[i]:o[i]})},j=async()=>{try{const e=await v.validateFields();A(),d({...o,...e,dataIndex:i})}catch(e){console.log("Save failed:",e)}};let b=n;return a&&(b=m?(0,f.jsx)(r.A.Item,{style:{margin:0},name:i,rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(u("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(u("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(u("required")))}],children:(0,f.jsx)(s.A,{ref:x,onPressEnter:j,onBlur:j})}):(0,f.jsxs)("div",{className:"editable-cell-value-wrap cursor-pointer d-flex justify-content-between align-items-center",style:{paddingRight:24},onClick:A,children:[(0,f.jsx)("div",{className:"w-100",children:n}),(0,f.jsx)(h.A,{})]})),(0,f.jsx)("td",{...c,children:b})};function $(){const{t:e}=(0,g.B)(),t=(0,y.wA)(),a=(0,C.Zp)(),{setIsModalVisible:r}=(0,l.useContext)(E.o),[s,h]=(0,l.useState)([]),[v,A]=(0,l.useState)(10),[j,O]=(0,l.useState)(1),[$,z]=(0,l.useState)(0),[B,F]=(0,l.useState)(!1),[M,N]=(0,l.useState)(null),[q,H]=(0,l.useState)(null),[W,K]=(0,l.useState)(null),[L,T]=(0,l.useState)(!1),[X,Z]=(0,l.useState)(0),{languages:_}=(0,y.d4)((e=>e.formLang),y.bN),[D,G]=(0,l.useState)(""),[J,Q]=(0,l.useState)(""),[U,Y]=(0,l.useState)(!1),[ee,te]=(0,l.useState)(null),[ae,le]=(0,l.useState)(!1),re=(0,l.useMemo)((()=>[{title:e("name"),dataIndex:"key",sorter:(e,t,a)=>se(a,"key"),width:250,fixed:"left"},{title:e("group"),dataIndex:"group",sorter:(e,t,a)=>se(a,"group"),width:150,fixed:"left"},{title:e("options"),dataIndex:"key",width:100,fixed:"center",render:e=>(0,f.jsx)(n.A,{icon:(0,f.jsx)(p.A,{}),onClick:()=>{te([e]),r(!0)}})},..._.filter((e=>!D||e.locale===D)).map((e=>({title:e.title,dataIndex:`value[${e.locale}]`,editable:!0,width:300})))]),[_,D]);function se(e,t){let a;switch(e){case"ascend":a="asc";break;case"descend":a="desc"}H(a),K(t)}function ne(){F(!0);const e={perPage:v,skip:X,group:M,sort:q,column:W,search:J};u.A.getAll(e).then((e=>{let{data:t}=e;const a=Object.entries(t.translations).map((e=>({key:e[0],group:e[1][0].group,...Object.assign({},..._.map((t=>{var a;return{[`value[${t.locale}]`]:null===(a=e[1].find((e=>e.locale===t.locale)))||void 0===a?void 0:a.value}})))})));h(a),z(t.total)})).finally((()=>F(!1)))}(0,l.useEffect)((()=>{ne()}),[v,M,q,W,X,J]);const ie=e=>{const{dataIndex:t,key:a}=e,l=[...s],r=l.findIndex((t=>e.key===t.key)),n=l[r];if(n[t]===e[t])return;l.splice(r,1,{...n,...e}),h(l);!function(e,t){u.A.update(e,t).then((e=>m.oR.success(e.message)))}(a,{...e,value:void 0,dataIndex:void 0,key:void 0})};const oe={body:{row:R,cell:V}},de=re.map((e=>e.editable?{...e,onCell:t=>({record:t,editable:e.editable,dataIndex:e.dataIndex,title:e.title,fixed:e.fixed,handleSave:ie})}:e));return(0,f.jsxs)(i.A,{extra:(0,f.jsxs)(o.A,{wrap:!0,children:[(0,f.jsx)(w.A,{placeholder:e("search"),handleChange:e=>Q(e)}),(0,f.jsxs)(d.A,{style:{minWidth:150},value:D,onChange:e=>G(e),placeholder:e("select.language"),children:[(0,f.jsx)(d.A.Option,{value:"",children:e("all")}),_.map((e=>(0,f.jsx)(d.A.Option,{value:e.locale,children:e.title},e.locale)))]}),(0,f.jsxs)(d.A,{style:{minWidth:150},value:M,onChange:e=>N(e),placeholder:e("select.group"),children:[(0,f.jsx)(d.A.Option,{value:"",children:e("all")}),(0,f.jsx)(d.A.Option,{value:"web",children:e("web")}),(0,f.jsx)(d.A.Option,{value:"mobile",children:e("mobile")}),(0,f.jsx)(d.A.Option,{value:"errors",children:e("errors")})]}),(0,f.jsxs)(n.A,{onClick:()=>{Y(!0),u.A.export().then((e=>{window.location.href=I.bb+e.data.file_name})).finally((()=>Y(!1)))},loading:U,children:[(0,f.jsx)(S.I8R,{className:"mr-2"}),e("export")]}),(0,f.jsxs)(n.A,{onClick:()=>{t((0,k.X4)({id:"translation-import",url:"settings/translations/import",name:e("translation.import")})),a("import")},children:[(0,f.jsx)(S.I8R,{className:"mr-2"}),e("import")]}),(0,f.jsx)(n.A,{icon:(0,f.jsx)(x.A,{}),type:"primary",onClick:()=>T(!0),children:e("add.translation")})]}),children:[(0,f.jsx)(c.A,{components:oe,columns:de,dataSource:s,pagination:{pageSize:v,page:j,total:$},rowKey:e=>e.id,onChange:e=>{const{pageSize:t,current:a}=e,l=(a-1)*t;A(t),O(a),Z(l)},loading:B,scroll:{x:1500}}),L&&(0,f.jsx)(b,{visible:L,setVisible:T,languages:_,refetch:ne}),(0,f.jsx)(P.A,{click:()=>{le(!0);const t={...Object.assign({},...ee.map(((e,t)=>({[`ids[${t}]`]:e}))))};u.A.delete(t).then((()=>{ne(),m.oR.success(e("successfully.deleted")),r(!1),te(null)})).finally((()=>le(!1)))},text:e("are.you.sure.you.want.to.delete.the.selected.translation"),loading:ae})]})}},53387:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(89379),r=a(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var n=a(25085),i=function(e,t){return r.createElement(n.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:s}))};const o=r.forwardRef(i)},81061:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(82371),r=a(7272);const s={getAll:e=>l.A.get("dashboard/admin/translations/paginate",{params:e}),delete:e=>l.A.delete("dashboard/admin/translations/delete",{params:e}),getById:(e,t)=>l.A.get(`dashboard/admin/translations/${e}`,{params:t}),create:e=>l.A.post("dashboard/admin/translations",{},{params:e}),update:(e,t)=>l.A.put(`dashboard/admin/translations/${e}`,{},{params:t}),export:e=>l.A.get("dashboard/admin/translations/export",{params:e}),import:e=>r.A.post("dashboard/admin/translations/import",e)}}}]);