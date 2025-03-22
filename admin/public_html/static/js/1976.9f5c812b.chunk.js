"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1976],{3678:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(9950),i=n(59233),s=n(87094),l=n(41988),r=n(23263),o=n(55902),d=n(40577),c=n(25933),u=n(99674),m=n(48538),p=n(47992),v=n(58547),h=n(91854),x=n(47933),j=n(74623),A=n(63010),f=n(28429),g=n(70030),y=n(15249),b=n(44414);const k=e=>{let{next:t,action_type:n=""}=e;const{t:k}=(0,g.B)(),[q]=i.A.useForm(),w=(0,h.wA)(),{uuid:N}=(0,f.g)(),I=(0,f.Zp)(),[$,C]=(0,a.useState)(null),{activeMenu:E}=(0,h.d4)((e=>e.menu),h.bN),{defaultLang:P,languages:F}=(0,h.d4)((e=>e.formLang),h.bN),[O,S]=(0,a.useState)(!1),[M,_]=(0,a.useState)([]);(0,a.useEffect)((()=>()=>{const e=q.getFieldsValue(!0);w((0,j.Ok)({activeMenu:E,data:{...E.data,...e}}))}),[]);return(0,a.useEffect)((()=>{A.A.getAll({perPage:100,page:1,active:1}).then((e=>{let{data:t}=e;return _(function(e){return e.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}(t))}))}),[]),(0,b.jsxs)(i.A,{layout:"vertical",form:q,initialValues:{active:!0,...E.data},onFinish:e=>{var a,i;S(!0);const s={...e,min_qty:1,max_qty:1e3,active:Number(e.active),shop_id:null===(a=e.shop)||void 0===a?void 0:a.value,unit_id:null===(i=e.unit)||void 0===i?void 0:i.value,unit:void 0,addon:Number(1),shop:void 0};"edit"===n?function(e,n){x.A.update(N,n).then((()=>{w((0,j.Ok)({activeMenu:E,data:e})),t()})).catch((e=>C(e.response.data.params))).finally((()=>S(!1)))}(e,s):function(e,t){x.A.create(t).then((t=>{let{data:n}=t;w((0,j.W6)({id:`product-${n.uuid}`,url:`product/${n.uuid}`,name:k("add.product"),data:e,refetch:!1})),I(`/addon/${n.uuid}?step=1`)})).catch((e=>C(e.response.data.params))).finally((()=>S(!1)))}(e,s)},className:"addon-menu",children:[(0,b.jsxs)(s.A,{gutter:12,children:[(0,b.jsx)(l.A,{xs:24,sm:24,md:16,children:(0,b.jsx)(r.A,{title:k("basic.info"),children:(0,b.jsxs)(s.A,{gutter:24,children:[(0,b.jsx)(l.A,{span:24,children:F.map((e=>(0,b.jsx)(i.A.Item,{label:k("name"),name:`title[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==P?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(k("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(k("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(k("required")))}],hidden:e.locale!==P,children:(0,b.jsx)(o.A,{})},"name"+e.id)))}),(0,b.jsx)(l.A,{span:24,children:F.map((e=>(0,b.jsx)(i.A.Item,{label:k("description"),name:`description[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==P?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(k("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<5?Promise.reject(new Error(k("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(k("required")))}],hidden:e.locale!==P,children:(0,b.jsx)(y.A,{rows:4,span:4})},"description"+e.id)))}),(0,b.jsx)(l.A,{span:12,children:(0,b.jsx)(i.A.Item,{label:k("tax"),name:"tax",rules:[{validator:(e,t)=>t||0===t?t&&(t<0||t>100)?Promise.reject(new Error(k("must.be.between.0.and.100"))):Promise.resolve():Promise.reject(new Error(k("required")))}],children:(0,b.jsx)(d.A,{className:"w-100",addonAfter:"%"})})}),(0,b.jsx)(l.A,{span:12,children:(0,b.jsx)(i.A.Item,{label:k("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(c.A,{})})})]})})}),(0,b.jsxs)(l.A,{xs:24,sm:24,md:8,children:[(0,b.jsx)(r.A,{title:k("shop/restaurant"),children:(0,b.jsx)(i.A.Item,{name:"shop",rules:[{required:!0,message:k("required")}],children:(0,b.jsx)(p.G,{fetchOptions:async function(e){const t={search:e};return v.A.get(t).then((e=>e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id})))))},disabled:"edit"===n})})}),(0,b.jsx)(r.A,{title:k("addition"),children:(0,b.jsx)(i.A.Item,{label:k("unit"),name:"unit",rules:[{required:!0,message:k("required")}],children:(0,b.jsx)(u.A,{labelInValue:!0,filterOption:!1,options:M})})})]})]}),(0,b.jsx)(m.A,{type:"primary",htmlType:"submit",loading:O,children:k("next")})]})}},27720:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(9950),i=n(59233),s=n(87094),l=n(41988),r=n(40577),o=n(55902),d=n(80737),c=n(48538),u=n(91854),m=n(47933),p=n(70030),v=n(28429),h=n(74623),x=n(44414);const j=e=>{let{prev:t,next:n,current:j}=e;const{t:A}=(0,p.B)(),[f]=i.A.useForm(),{uuid:g}=(0,v.g)(),{activeMenu:y}=(0,u.d4)((e=>e.menu),u.bN),[b,k]=(0,a.useState)(null),q=(0,u.wA)();return(0,a.useEffect)((()=>{var e,t,n,a,i,s;q((0,h.Ms)(y)),f.setFieldsValue({price:null!==(e=y.data)&&void 0!==e&&null!==(t=e.stocks)&&void 0!==t&&t.length?y.data.stocks[0].price:[],quantity:null!==(n=y.data)&&void 0!==n&&null!==(a=n.stocks)&&void 0!==a&&a.length?y.data.stocks[0].quantity:[],sku:null!==(i=y.data)&&void 0!==i&&null!==(s=i.stocks)&&void 0!==s&&s.length?y.data.stocks[0].sku:[]})}),[]),(0,x.jsxs)(i.A,{layout:"vertical",form:f,onFinish:e=>{let t;k(!0),t=[{price:e.price,quantity:e.quantity,sku:e.sku}],m.A.stocks(g,{extras:t}).then((()=>n())).finally((()=>k(!1)))},children:[(0,x.jsxs)(s.A,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},children:[(0,x.jsx)(l.A,{children:(0,x.jsx)(i.A.Item,{label:A("price"),name:"price",rules:[{required:!0,message:A("required")}],children:(0,x.jsx)(r.A,{min:0,className:"w-100",style:{minWidth:200}})})}),(0,x.jsx)(l.A,{children:(0,x.jsx)(i.A.Item,{label:A("quantity"),name:"quantity",rules:[{required:!0,message:A("required")}],children:(0,x.jsx)(r.A,{min:1,className:"w-100",style:{minWidth:200}})})}),(0,x.jsx)(l.A,{children:(0,x.jsx)(i.A.Item,{label:A("sku"),name:"sku",children:(0,x.jsx)(o.A,{style:{minWidth:200}})})})]}),(0,x.jsxs)(d.A,{className:"mt-4",children:[(0,x.jsx)(c.A,{onClick:t,children:A("prev")}),(0,x.jsx)(c.A,{type:"primary",htmlType:"submit",loading:!!b,children:A("next")})]})]})}},31976:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(9950),i=n(88565),s=n(86366),l=n(23263),r=n(90650),o=n(60837),d=n(27720),c=n(3678),u=n(71999),m=n(28429),p=n(47933),v=n(91854),h=n(74623),x=n(70030),j=n(65820),A=n(44414);const{Step:f}=s.A,g=()=>{var e;const{t:t}=(0,x.B)(),{uuid:n}=(0,m.g)(),g=(0,j.s)(),{activeMenu:y}=(0,v.d4)((e=>e.menu),v.bN),{languages:b}=(0,v.d4)((e=>e.formLang),v.bN),k=(0,v.wA)(),q=Number((null===(e=g.values)||void 0===e?void 0:e.step)||0),[w,N]=(0,a.useState)(y.refetch),I=()=>{const e=q+1;g.set("step",e)},$=()=>{const e=q-1;g.set("step",e)},C=e=>e?{label:e.translation?e.translation.title:e.title,value:e.id}:null;function E(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=b.map((e=>{var n,a;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}(0,a.useEffect)((()=>{y.refetch&&function(e){N(!0),p.A.getById(e).then((e=>{var t;const n={...e.data,...E(e.data),shop:C(e.data.shop),category:C(e.data.category),brand:C(e.data.brand),unit:C(e.data.unit),images:(a=e.data.galleries,a.map((e=>({uid:e.id,name:e.path,url:e.path})))),extras:null===(t=e.data.stocks[0])||void 0===t?void 0:t.extras.map((e=>e.extra_group_id)),stocks:e.data.stocks.map((e=>({...e,...Object.assign({},...e.extras.map(((e,t)=>({[`extras[${t}]`]:e.id})))),quantity:e.quantity||0,extras:void 0}))),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};var a;k((0,h.Ok)({activeMenu:y,data:n}))})).finally((()=>{N(!1),k((0,h.km)(y))}))}(n)}),[y.refetch]);return(0,A.jsxs)(l.A,{title:t("addon.edit"),extra:(0,A.jsx)(u.A,{}),children:[(0,A.jsx)(s.A,{current:q,onChange:e=>{k((0,h.Ok)({activeMenu:y,data:{...y.data,step:e}})),g.set("step",e)},children:i.C.map((e=>(0,A.jsx)(f,{title:t(e.title)},e.title)))}),w?(0,A.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,A.jsx)(r.A,{size:"large",className:"py-5"})}):(0,A.jsxs)("div",{className:"steps-content",children:["First-content"===i.C[q].content&&(0,A.jsx)(c.A,{next:I,action_type:"edit"}),"Third-content"===i.C[q].content&&(0,A.jsx)(d.A,{next:I,prev:$,current:q}),"Finish-content"===i.C[q].content&&(0,A.jsx)(o.A,{prev:$})]})]})}},47992:(e,t,n)=>{n.d(t,{G:()=>d});var a=n(9950),i=n(95491),s=n.n(i),l=n(99674),r=n(90650),o=n(44414);const d=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:i,refetchOptions:d=!1,...c}=e;const[u,m]=(0,a.useState)(!1),[p,v]=(0,a.useState)([]),h=(0,a.useMemo)((()=>s()((e=>{v([]),m(!0),t(e).then((e=>{v(e),m(!1)}))}),n)),[t,n]);return(0,o.jsx)(l.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,onClear:()=>{h(""),i&&i()},notFoundContent:u?(0,o.jsx)(r.A,{size:"small"}):"no results",...c,options:p,onFocus:()=>{p.length&&!d||h("")}})}},60837:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(9950),i=n(91524),s=n(80737),l=n(48538),r=n(90650),o=n(91854),d=n(28429),c=n(74623),u=n(70030),m=n(47933),p=n(14863),v=n(44414);const h=e=>{var t,n,h;let{prev:x}=e;const{t:j}=(0,u.B)(),{activeMenu:A}=(0,o.d4)((e=>e.menu),o.bN),{defaultLang:f,languages:g}=(0,o.d4)((e=>e.formLang),o.bN),y=(0,d.Zp)(),b=(0,o.wA)(),[k,q]=(0,a.useState)({}),[w,N]=(0,a.useState)(null),{uuid:I}=(0,d.g)(),{params:$}=(0,o.d4)((e=>e.addons),o.bN);function C(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=g.map((e=>{var n,a;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{!function(e){N(!0),m.A.getById(e).then((e=>{const t={...e.data,...C(e.data),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};q(t)})).finally((()=>N(!1)))}(I)}),[]),w?(0,v.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,v.jsx)(r.A,{size:"large",className:"py-5"})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(i.A,{title:j("product.info"),bordered:!0,children:[(0,v.jsx)(i.A.Item,{label:`${j("title")} (${f})`,span:3,children:k[`title[${f}]`]}),(0,v.jsx)(i.A.Item,{label:`${j("description")} (${f})`,span:3,children:k[`description[${f}]`]}),(0,v.jsx)(i.A.Item,{label:j("shop"),span:1.5,children:null===(t=k.shop)||void 0===t?void 0:t.translation.title}),(0,v.jsx)(i.A.Item,{label:j("unit"),span:1.5,children:null===(n=k.unit)||void 0===n?void 0:n.translation.title}),(0,v.jsx)(i.A.Item,{label:j("tax"),children:k.tax}),(0,v.jsx)(i.A.Item,{label:j("min.quantity"),children:k.min_qty}),(0,v.jsx)(i.A.Item,{label:j("max.quantity"),children:k.max_qty})]}),null===(h=k.stocks)||void 0===h?void 0:h.map(((e,t)=>e?(0,v.jsxs)(i.A,{bordered:!0,className:"mt-4",children:[(0,v.jsx)(i.A.Item,{label:j("price"),span:2,children:e.price}),(0,v.jsx)(i.A.Item,{label:j("quantity"),span:2,children:e.quantity}),e.extras.map(((e,t)=>{var n,a;return(0,v.jsx)(i.A.Item,{label:null===e||void 0===e||null===(n=e.group)||void 0===n||null===(a=n.translation)||void 0===a?void 0:a.title,children:null===e||void 0===e?void 0:e.value},"extra"+t)}))]},"desc"+t):"")),(0,v.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,v.jsxs)(s.A,{wrap:!0,children:[(0,v.jsx)(l.A,{onClick:x,children:j("prev")}),(0,v.jsx)(l.A,{type:"primary",onClick:function(){const e={status:void 0,...$},t="catalog/addons";b((0,c.EK)({...A,nextUrl:t})),b((0,p.uC)(e)),y(`/${t}`)},children:j("finish")})]})})]})}},65820:(e,t,n)=>{n.d(t,{s:()=>l});var a=n(28429),i=n(21215),s=n.n(i);const l=()=>{const e=(0,a.Zp)(),t=(0,a.zy)(),n=s().parse(t.search,{ignoreQueryPrefix:!0});return{values:n,set:(t,a)=>e({search:s().stringify({...n,[t]:a})}),reset:t=>{const a={...n};a[t]&&delete a[t],e({search:s().stringify({...a})})},clear:()=>e({search:s().stringify({})}),merge:t=>e({search:s().stringify({...n,...t})})}}},88565:(e,t,n)=>{n.d(t,{C:()=>a});const a=[{title:"addons",content:"First-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]}}]);