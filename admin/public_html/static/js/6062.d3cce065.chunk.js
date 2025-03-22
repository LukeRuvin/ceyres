"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6062],{31281:(e,l,i)=>{function n(e,l){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=e.map((e=>({[e.locale]:""===l[`${i}[${e.locale}]`]?void 0:l[`${i}[${e.locale}]`]})));return Object.assign({},...n)}i.d(l,{A:()=>n})},41064:(e,l,i)=>{function n(e,l){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["title"];if(null===l||void 0===l||!l.translations)return{};const{translations:n}=l,a=(e,l)=>{const i=null===n||void 0===n?void 0:n.find((l=>(null===l||void 0===l?void 0:l.locale)===(null===e||void 0===e?void 0:e.locale)));return i||{[l]:""}},s=e.flatMap((e=>i.flatMap((l=>({[`${l}[${null===e||void 0===e?void 0:e.locale}]`]:a(e,l)[l]})))));return Object.assign({},...s)}i.d(l,{A:()=>n})},47992:(e,l,i)=>{i.d(l,{G:()=>r});var n=i(9950),a=i(95491),s=i.n(a),d=i(99674),t=i(90650),o=i(44414);const r=e=>{let{fetchOptions:l,debounceTimeout:i=400,onClear:a,refetchOptions:r=!1,...u}=e;const[v,c]=(0,n.useState)(!1),[m,h]=(0,n.useState)([]),p=(0,n.useMemo)((()=>s()((e=>{h([]),c(!0),l(e).then((e=>{h(e),c(!1)}))}),i)),[l,i]);return(0,o.jsx)(d.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),a&&a()},notFoundContent:v?(0,o.jsx)(t.A,{size:"small"}):"no results",...u,options:m,onFocus:()=>{m.length&&!r||p("")}})}},54347:(e,l,i)=>{i.d(l,{Hw:()=>s,K0:()=>n,V$:()=>a,my:()=>d});const n=["details","extras","faqs"],a=["new","accepted","canceled"],s=["online","offline_in","offline_out"],d=[{value:1,label:"male"},{value:2,label:"female"},{value:3,label:"all"}]},65820:(e,l,i)=>{i.d(l,{s:()=>d});var n=i(28429),a=i(21215),s=i.n(a);const d=()=>{const e=(0,n.Zp)(),l=(0,n.zy)(),i=s().parse(l.search,{ignoreQueryPrefix:!0});return{values:i,set:(l,n)=>e({search:s().stringify({...i,[l]:n})}),reset:l=>{const n={...i};n[l]&&delete n[l],e({search:s().stringify({...n})})},clear:()=>e({search:s().stringify({})}),merge:l=>e({search:s().stringify({...i,...l})})}}},66062:(e,l,i)=>{i.d(l,{A:()=>T});var n=i(23263),a=i(86366),s=i(54347),d=i(71999),t=i(70030),o=i(28429),r=i(9950),u=i(65820),v=i(91854),c=i(74623),m=i(59233),h=i(87094),p=i(41988),x=i(55902),A=i(40577),g=i(99674),j=i(48538),f=i(98591),y=i(47992),b=i(62572),q=i(55660),I=i(54764),k=i(41064),N=i(88986),w=i(31281),C=i(44414);const F=e=>{let{handleSubmit:l}=e;const{t:i}=(0,t.B)(),a=(0,v.wA)(),[d]=m.A.useForm(),{id:u}=(0,o.g)(),{activeMenu:F}=(0,v.d4)((e=>e.menu),v.bN),{defaultLang:S,languages:_}=(0,v.d4)((e=>e.formLang),v.bN),{defaultCurrency:$}=(0,v.d4)((e=>e.currency),v.bN),O=s.my.map((e=>({...e,label:i(e.label)}))),[B,V]=(0,r.useState)(void 0),[L,M]=(0,r.useState)(!1),[K,P]=(0,r.useState)(!1);(0,r.useEffect)((()=>{G()}),[]),(0,N.A)((()=>{F.refetch&&G()}),[F.refetch]);const E=(0,r.useCallback)((e=>{M(!0),I.A.getById(e).then((e=>{var l,n,a,s,t,o,r,u;let{data:v}=e;const c={...(0,k.A)(_,v,["title","description"]),category:{label:(null===v||void 0===v||null===(l=v.category)||void 0===l||null===(n=l.translation)||void 0===n?void 0:n.title)||i("N/A"),value:null===v||void 0===v||null===(a=v.category)||void 0===a?void 0:a.id,key:null===v||void 0===v||null===(s=v.category)||void 0===s?void 0:s.id},shop:{label:(null===v||void 0===v||null===(t=v.shop)||void 0===t||null===(o=t.translation)||void 0===o?void 0:o.title)||i("N/A"),value:null===v||void 0===v||null===(r=v.shop)||void 0===r?void 0:r.id,key:null===v||void 0===v||null===(u=v.shop)||void 0===u?void 0:u.id},price:(null===v||void 0===v?void 0:v.price)||0,interval:(null===v||void 0===v?void 0:v.interval)||0,pause:(null===v||void 0===v?void 0:v.pause)||0,commission_fee:(null===v||void 0===v?void 0:v.commission_fee)||0,status:{label:i(null===v||void 0===v?void 0:v.status),value:null===v||void 0===v?void 0:v.status,key:null===v||void 0===v?void 0:v.status},type:{label:i(null===v||void 0===v?void 0:v.type),value:null===v||void 0===v?void 0:v.type,key:null===v||void 0===v?void 0:v.type},gender:null!==v&&void 0!==v&&v.gender?O.find((e=>e.value===(null===v||void 0===v?void 0:v.gender))):O[0],status_note:null===v||void 0===v?void 0:v.status_note};V(null===c||void 0===c?void 0:c.status),d.setFieldsValue(c)})).finally((()=>M(!1)))}),[u]),G=()=>{u&&(E(u),a((0,c.km)(F)))};return(0,C.jsxs)(m.A,{form:d,layout:"vertical",onFinish:e=>{var i,n,a,s,d;const t={title:(0,w.A)(_,e),description:(0,w.A)(_,e,"description"),category_id:null===e||void 0===e||null===(i=e.category)||void 0===i?void 0:i.value,shop_id:null===e||void 0===e||null===(n=e.shop)||void 0===n?void 0:n.value,price:null===e||void 0===e?void 0:e.price,interval:null===e||void 0===e?void 0:e.interval,pause:null===e||void 0===e?void 0:e.pause,commission_fee:null===e||void 0===e?void 0:e.commission_fee,status:null===e||void 0===e||null===(a=e.status)||void 0===a?void 0:a.value,type:null===e||void 0===e||null===(s=e.type)||void 0===s?void 0:s.value,gender:null===e||void 0===e||null===(d=e.gender)||void 0===d?void 0:d.value,status_note:null===e||void 0===e?void 0:e.status_note};P(!0),l(t).finally((()=>P(!1)))},children:[(0,C.jsx)(n.A,{loading:L,children:(0,C.jsxs)(h.A,{gutter:12,children:[(0,C.jsx)(p.A,{span:12,children:_.map((e=>(0,C.jsx)(m.A.Item,{label:i("title"),name:`title[${(null===e||void 0===e?void 0:e.locale)||"en"}]`,hidden:(null===e||void 0===e?void 0:e.locale)!==S,rules:[{required:(null===e||void 0===e?void 0:e.locale)===S,message:i("required")},{type:"string",min:2,max:200,message:i("min.2.max.200.chars")}],children:(0,C.jsx)(x.A,{})},null===e||void 0===e?void 0:e.locale)))}),(0,C.jsx)(p.A,{span:12,children:_.map((e=>(0,C.jsx)(m.A.Item,{label:i("description"),name:`description[${(null===e||void 0===e?void 0:e.locale)||"en"}]`,hidden:(null===e||void 0===e?void 0:e.locale)!==S,rules:[{required:(null===e||void 0===e?void 0:e.locale)===S,message:i("required")},{type:"string",min:2,max:200,message:i("min.2.max.200.chars")}],children:(0,C.jsx)(f.A,{rows:2})},null===e||void 0===e?void 0:e.locale)))}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("category"),name:"category",rules:[{required:!0,message:i("required")}],children:(0,C.jsx)(y.G,{fetchOptions:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const l={search:null!==e&&void 0!==e&&e.length?e:void 0,perPage:20,page:1,type:"service"};return null===b.A||void 0===b.A?void 0:b.A.getAll(l).then((e=>{var l;return null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||i("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},allowClear:!1})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("shop"),name:"shop",rules:[{required:!0,message:"required"}],children:(0,C.jsx)(y.G,{fetchOptions:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const l={search:null!==e&&void 0!==e&&e.length?e:void 0,perPage:20,page:1};return q.A.getAll(l).then((e=>{var l;return null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||i("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},refetchOptions:!0})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("price"),name:"price",rules:[{required:!0,message:"required"},{type:"number",min:0,message:i("min.0")}],children:(0,C.jsx)(A.A,{className:"w-100",addonAfter:"after"===(null===$||void 0===$?void 0:$.position)&&(null===$||void 0===$?void 0:$.symbol),addonBefore:"before"===(null===$||void 0===$?void 0:$.position)&&(null===$||void 0===$?void 0:$.symbol)})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("duration"),name:"interval",rules:[{required:!0,message:"required"},{type:"number",min:0,message:i("min.0")}],children:(0,C.jsx)(A.A,{className:"w-100",addonAfter:i("minutes")})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("pause"),name:"pause",rules:[{required:!0,message:"required"},{type:"number",min:0,message:i("min.0")}],children:(0,C.jsx)(A.A,{className:"w-100",addonAfter:i("minutes")})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("commission.fee"),name:"commission_fee",rules:[{required:!0,message:"required"},{type:"number",min:0,message:i("min.0")}],children:(0,C.jsx)(A.A,{className:"w-100",addonAfter:"%"})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("status"),name:"status",rules:[{required:!0,message:"required"}],children:(0,C.jsx)(g.A,{labelInValue:!0,onChange:e=>V(e),children:s.V$.map(((e,l)=>(0,C.jsx)(g.A.Option,{value:e,children:i(e)},e+l)))})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("type"),name:"type",rules:[{required:!0,message:"required"}],children:(0,C.jsx)(g.A,{labelInValue:!0,children:s.Hw.map(((e,l)=>(0,C.jsx)(g.A.Option,{value:e,children:i(e)},e+l)))})})}),(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("gender"),name:"gender",rules:[{required:!0,message:i("required")}],children:(0,C.jsx)(g.A,{labelInValue:!0,children:O.map(((e,l)=>(0,C.jsx)(g.A.Option,{value:e.value,children:e.label},e.value+l)))})})}),(null===B||void 0===B?void 0:B.value)===s.V$[2]&&(0,C.jsx)(p.A,{span:12,children:(0,C.jsx)(m.A.Item,{label:i("status.note"),name:"status_note",rules:[{required:(null===B||void 0===B?void 0:B.value)===s.V$[2],message:i("required")}],children:(0,C.jsx)(f.A,{rows:4})})})]})}),(0,C.jsx)(n.A,{className:"formFooterButtonsContainer",children:(0,C.jsx)(j.A,{type:"primary",htmlType:"submit",loading:K,disabled:L,children:i("next")})})]})};var S=i(25933),_=i(48970),$=i(62466),O=i(44070),B=i(62110),V=i(82706),L=i(85923);const M=e=>{let{isOpen:l,handleClose:i,handleAddField:n,fetchOptions:a}=e;const{t:s}=(0,t.B)(),[d,o]=(0,r.useState)([]);return(0,C.jsxs)(V.A,{visible:l,onCancel:i,footer:!1,title:s("add.extra"),children:[(0,C.jsx)(h.A,{children:(0,C.jsx)(p.A,{span:24,children:(0,C.jsx)(y.G,{fetchOptions:a,allowClear:!1,onSelect:o,placeholder:s("select.extra"),className:"w-100"})})}),(0,C.jsx)("div",{className:"formFooterButtonsContainer mt-4",children:(0,C.jsx)(j.A,{htmlType:"button",type:"primary",onClick:()=>{null!==d&&void 0!==d&&d.value?n(d):L.oR.error(s("select.extra"))},children:s("add.extra")})})]})},K=e=>{let{prev:l,next:i}=e;const{t:a}=(0,t.B)(),{id:s}=(0,o.g)(),[d]=m.A.useForm(),u=(0,v.wA)(),{activeMenu:g}=(0,v.d4)((e=>e.menu),v.bN),{languages:f,defaultLang:b}=(0,v.d4)((e=>e.formLang),v.bN),{defaultCurrency:q}=(0,v.d4)((e=>e.currency),v.bN),[F,V]=(0,r.useState)(!1),[K,P]=(0,r.useState)(!1),[E,G]=(0,r.useState)([]),[T,z]=(0,r.useState)([]),[R,H]=(0,r.useState)(!1);(0,r.useEffect)((()=>{D()}),[]),(0,N.A)((()=>{g.refetch&&D()}),[g.refetch]);const Z=(0,r.useCallback)((e=>{V(!0),I.A.getById(e).then((e=>{var l,i;let{data:n}=e;const a=null===n||void 0===n||null===(l=n.service_extras)||void 0===l?void 0:l.map((e=>{var l;return{extra:{label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id},...(0,k.A)(f,e,["title"]),price:(null===e||void 0===e?void 0:e.price)||0,active:!(null===e||void 0===e||!e.active)}}));G(null===n||void 0===n||null===(i=n.service_extras)||void 0===i?void 0:i.map(((e,l)=>{var i;return{img:null!==e&&void 0!==e&&null!==(i=e.img)&&void 0!==i&&i.length?[(0,$.A)(null===e||void 0===e?void 0:e.img)]:[],fieldIndex:l}}))),d.setFieldsValue({extras:a})})).finally((()=>V(!1)))}),[s]),D=()=>{Z(s),u((0,c.km)(g))},Q=e=>{var l;const i=null===E||void 0===E||null===(l=E[e])||void 0===l?void 0:l.img;return(0,C.jsx)(p.A,{children:(0,C.jsx)(m.A.Item,{label:a("image"),name:[e,"image"],rules:[{required:!(null!==i&&void 0!==i&&i.length),message:a("required")}],children:(0,C.jsx)(_.A,{type:"service_extras",imageList:i,setImageList:l=>{G(null===E||void 0===E?void 0:E.map(((i,n)=>n===e?{...i,img:l}:i)))},form:d,multiple:!1})})})};return(0,C.jsxs)(m.A,{form:d,layout:"vertical",onFinish:e=>{var l;const n=null===e||void 0===e||null===(l=e.extras)||void 0===l?void 0:l.map(((e,l)=>{var i,n,a;return{active:null===e||void 0===e?void 0:e.active,price:null===e||void 0===e?void 0:e.price,title:(0,w.A)(f,e),img:null===E||void 0===E||null===(i=E[l])||void 0===i||null===(n=i.img)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.url}}));P(!0),I.A.createExtras(s,{extras:n}).then((()=>{L.oR.success(a("successfully.updated")),i()})).finally((()=>P(!1)))},children:[(0,C.jsx)(n.A,{loading:F,children:(0,C.jsx)(m.A.List,{name:"extras",children:(e,l)=>{let{add:i,remove:n}=l;return(0,C.jsxs)(C.Fragment,{children:[e.map(((l,i)=>{let{key:s,name:d,...t}=l;return(0,C.jsxs)(h.A,{gutter:12,className:"mb-3",children:[(0,C.jsx)(p.A,{span:6,children:(0,C.jsx)(m.A.Item,{label:a("extra"),name:[i,"extra"],rules:[{required:!0,message:a("required")}],children:(0,C.jsx)(y.G,{disabled:!0})})}),Q(i),(0,C.jsx)(p.A,{span:6,children:f.map((e=>(0,C.jsx)(m.A.Item,{label:a("title"),name:[i,`title[${(null===e||void 0===e?void 0:e.locale)||"en"}]`],hidden:(null===e||void 0===e?void 0:e.locale)!==b,rules:[{required:(null===e||void 0===e?void 0:e.locale)===b,message:a("required")},{type:"string",min:2,max:200,message:a("min.2.max.200.chars")}],children:(0,C.jsx)(x.A,{})},[i,null===e||void 0===e?void 0:e.locale])))}),(0,C.jsx)(p.A,{span:6,children:(0,C.jsx)(m.A.Item,{label:a("price"),name:[i,"price"],rules:[{required:!0,message:a("required")}],children:(0,C.jsx)(A.A,{className:"w-100",addonBefore:"before"===(null===q||void 0===q?void 0:q.position)&&(null===q||void 0===q?void 0:q.symbol),addonAfter:"after"===(null===q||void 0===q?void 0:q.position)&&(null===q||void 0===q?void 0:q.symbol)})})}),(0,C.jsx)(p.A,{children:(0,C.jsx)(m.A.Item,{label:a("active"),name:[i,"active"],valuePropName:"checked",children:(0,C.jsx)(S.A,{})})}),(0,C.jsx)(p.A,{className:"ml-5",children:(0,C.jsx)(m.A.Item,{label:" ",children:(0,C.jsx)(j.A,{type:"danger",onClick:()=>((e,l)=>{G(E.filter(((l,i)=>i!==e))),l()})(i,(()=>n(d))),icon:(0,C.jsx)(O.A,{}),disabled:1===(null===e||void 0===e?void 0:e.length)})})})]},d)})),(0,C.jsx)(j.A,{type:"dashed",onClick:()=>{H(!0)},className:"w-100 mt-3",children:a("add.field")})]})}})}),(0,C.jsx)(n.A,{children:(0,C.jsxs)("div",{className:"formFooterButtonsContainer",children:[(0,C.jsx)(j.A,{onClick:l,children:a("prev")}),(0,C.jsx)(j.A,{type:"primary",htmlType:"submit",loading:K,children:a("next")})]})}),R&&(0,C.jsx)(M,{handleAddField:e=>{var l;H(!1);const i=T.find((l=>(null===l||void 0===l?void 0:l.id)===(null===e||void 0===e?void 0:e.value)));G([...E,{img:null!==i&&void 0!==i&&null!==(l=i.img)&&void 0!==l&&l.length?[(0,$.A)(null===i||void 0===i?void 0:i.img)]:[],fields:null===E||void 0===E?void 0:E.length}]),d.setFieldsValue({extras:[...d.getFieldValue("extras"),{extra:e,...(0,k.A)(f,i,["title"]),price:(null===i||void 0===i?void 0:i.price)||0,active:!(null===i||void 0===i||!i.active)}]})},handleClose:()=>H(!1),isOpen:R,fetchOptions:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const l={search:null!==e&&void 0!==e&&e.length?e:void 0,page:1,perPage:20};return B.A.getAll(l).then((e=>{var l;return z(null===e||void 0===e?void 0:e.data),null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))}})]})};var P=i(5478),E=i(8750);const G=e=>{let{prev:l,next:i}=e;const{t:a}=(0,t.B)(),{id:s}=(0,o.g)(),[d]=m.A.useForm(),u=(0,v.wA)(),{activeMenu:A}=(0,v.d4)((e=>e.menu),v.bN),{languages:g,defaultLang:f}=(0,v.d4)((e=>e.formLang),v.bN),[y,b]=(0,r.useState)(!1),[q,F]=(0,r.useState)(!1),_=(0,r.useCallback)((e=>{F(!0),I.A.getById(e).then((e=>{var l;let{data:i}=e;const n=null===i||void 0===i||null===(l=i.service_faqs)||void 0===l?void 0:l.map((e=>({...(0,k.A)(g,e,["question","answer"]),active:!(null===e||void 0===e||!e.active)})));d.setFieldsValue({faqs:n})})).finally((()=>F(!1)))}),[s]),$=()=>{_(s),u((0,c.km)(A))};(0,r.useEffect)((()=>{$()}),[]),(0,N.A)((()=>{A.refetch&&$()}),[A.refetch]);return(0,C.jsxs)(m.A,{form:d,layout:"vertical",onFinish:e=>{var l;const n=null===e||void 0===e||null===(l=e.faqs)||void 0===l?void 0:l.map((e=>({active:null!==e&&void 0!==e&&e.active?1:0,question:(0,w.A)(g,e,"question"),answer:(0,w.A)(g,e,"answer"),type:"web"})));b(!0),I.A.createFaqs(s,{faqs:n}).then((()=>{L.oR.success(a("successfully.updated")),i()})).finally((()=>b(!1)))},children:[(0,C.jsx)(n.A,{loading:q,children:(0,C.jsx)(m.A.List,{name:"faqs",children:(e,l)=>{let{add:i,remove:n}=l;return(0,C.jsxs)(C.Fragment,{children:[e.map((l=>{let{key:i,name:s}=l;return(0,C.jsxs)(h.A,{style:{display:"flex",marginBottom:8},align:"baseline",gutter:24,className:"mb-3",children:[(0,C.jsx)(p.A,{span:10,children:g.map((e=>(0,C.jsx)(m.A.Item,{label:a("question"),name:[s,`question[${(null===e||void 0===e?void 0:e.locale)||"en"}]`],hidden:(null===e||void 0===e?void 0:e.locale)!==f,rules:[{required:(null===e||void 0===e?void 0:e.locale)===f,message:a("required")},{type:"string",min:2,max:200,message:a("min.2.max.200.chars")}],children:(0,C.jsx)(x.A,{})},[s,null===e||void 0===e?void 0:e.locale])))}),(0,C.jsx)(p.A,{span:10,children:g.map((e=>(0,C.jsx)(m.A.Item,{label:a("answer"),name:[s,`answer[${(null===e||void 0===e?void 0:e.locale)||"en"}]`],hidden:(null===e||void 0===e?void 0:e.locale)!==f,rules:[{required:(null===e||void 0===e?void 0:e.locale)===f,message:a("required")},{type:"string",min:2,max:200,message:a("min.2.max.200.chars")}],children:(0,C.jsx)(x.A,{})},[s,null===e||void 0===e?void 0:e.locale])))}),(0,C.jsx)(p.A,{children:(0,C.jsx)(m.A.Item,{label:a("active"),name:[s,"active"],valuePropName:"checked",children:(0,C.jsx)(S.A,{})})}),(0,C.jsx)(m.A.Item,{label:" ",children:(0,C.jsx)(j.A,{type:"danger",onClick:()=>n(s),icon:(0,C.jsx)(O.A,{}),disabled:1===(null===e||void 0===e?void 0:e.length)})})]},i)})),(0,C.jsx)(m.A.Item,{children:(0,C.jsx)(j.A,{type:"dashed",onClick:()=>i({active:!0}),block:!0,icon:(0,C.jsx)(E.A,{}),children:a("add.faq")})})]})}})}),(0,C.jsx)(n.A,{children:(0,C.jsxs)("div",{className:"formFooterButtonsContainer",children:[(0,C.jsx)(j.A,{onClick:l,children:a("prev")}),(0,C.jsx)(j.A,{type:"primary",htmlType:"submit",loading:y,children:a("next")})]})})]})},T=e=>{var l;let{handleSubmitDetails:i}=e;const{t:m}=(0,t.B)(),{id:h}=(0,o.g)(),p=(0,o.Zp)(),x=(0,u.s)(),A=(0,v.wA)(),{activeMenu:g}=(0,v.d4)((e=>e.menu),v.bN),[j,f]=(0,r.useState)(Number((null===(l=x.values)||void 0===l?void 0:l.step)||1)),y=()=>{const e=j+1;x.set("step",e),f(e)},b=()=>{const e=j-1;x.set("step",e),f(e)},q={details:e=>i(e).then((e=>{var l;h?y():p(`/services/${null===(l=e.data)||void 0===l?void 0:l.id}?step=2`)}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(n.A,{title:m(h?"edit.service":"create.service"),extra:(0,C.jsx)(d.A,{}),children:(0,C.jsx)(a.A,{current:j-1,onChange:async e=>{h&&await(async e=>{x.set("step",e+1),f(e+1)})(e)},children:s.K0.map((e=>(0,C.jsx)(a.A.Step,{title:m(e)},e)))})}),"details"===s.K0[j-1]&&(0,C.jsx)(F,{handleSubmit:q.details}),"extras"===s.K0[j-1]&&(0,C.jsx)(K,{prev:b,next:y}),"faqs"===s.K0[j-1]&&(0,C.jsx)(G,{prev:b,next:()=>{const e="services";A((0,c.EK)({...g,nextUrl:e})),A((0,P.jg)({})),p(`/${e}`)}})]})}}}]);