"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8971],{2840:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee,steps:()=>X});var a=n(9950),l=n(86366),s=n(87094),i=n(41988),r=n(23263),d=n(59233),o=n(92759),c=n(40577),u=n(25933),m=n(55902),v=n(48538),p=n(91854),h=n(74623),g=n(70030),x=n(31281),A=n(71999),j=n(48970),y=n(40011),f=n(79406),b=n(2905),w=n(78687),_=n(82206),k=n(78498),S=n(64988),N=n(29597),H=n(28257),q=n(44414);const F=e=>{let{next:t}=e;const{t:n}=(0,g.B)(),{activeMenu:l}=(0,p.d4)((e=>e.menu),p.bN),{settings:F}=(0,p.d4)((e=>e.globalSettings),p.bN),C=(0,p.wA)(),[I]=d.A.useForm(),[P,O]=(0,a.useState)([]),[L,D]=(0,a.useState)((0,N.A)(F)),[B,M]=(0,a.useState)(!1),[E,R]=(0,a.useState)({}),[T,$]=(0,a.useState)(""),{country:V,region:Y,city:z}=E,{languages:K,defaultLang:W}=(0,p.d4)((e=>e.formLang),p.bN);return(0,q.jsxs)(d.A,{name:"add.delivery.point",layout:"vertical",onFinish:e=>{var a;const{area:s,city:i,country:r,region:d,price:c,fitting_rooms:u,active:m}=e,v={price:c,fitting_rooms:u,location:{latitude:null===L||void 0===L?void 0:L.lat,longitude:null===L||void 0===L?void 0:L.lng},active:m?1:0,area_id:null===s||void 0===s?void 0:s.value,city_id:null===i||void 0===i?void 0:i.value,country_id:null===r||void 0===r?void 0:r.value,region_id:null===d||void 0===d?void 0:d.value,images:P.map((e=>e.name)),title:(0,x.A)(K,e,"title"),address:(0,x.A)(K,e,"address")};null!==l&&void 0!==l&&null!==(a=l.data)&&void 0!==a&&a.id?t():(M(!0),y.A.create(v).then((e=>{let{data:a}=e;o.Ay.success(n("successfully.created"));const s=I.getFieldsValue(!0);C((0,h.Ok)({activeMenu:l,data:{...s,id:a.id}})),t()})).finally((()=>M(!1))))},form:I,initialValues:{clickable:!0,...l.data},children:[(0,q.jsxs)(s.A,{gutter:[24,24],children:[(0,q.jsx)(i.A,{span:12,children:(0,q.jsxs)(r.A,{title:n("deliveryzone"),className:"h-100",children:[(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("region"),name:"region",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10};return b.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,onChange:e=>{R((t=>({...t,region:e}))),I.resetFields(["city","area","country"])}})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("country"),name:"country",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10,region_id:null===Y||void 0===Y?void 0:Y.value};return w.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,onChange:e=>{R((t=>({...t,country:e}))),I.resetFields(["city","area"])},disabled:!Boolean(null===Y||void 0===Y?void 0:Y.value)})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("city"),name:"city",rules:[{required:!1,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10,country_id:null===V||void 0===V?void 0:V.value};return _.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===V||void 0===V?void 0:V.value),onChange:e=>{R((t=>({...t,city:e}))),I.resetFields(["area"])}})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("area"),name:"area",rules:[{required:!1,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10,city_id:null===z||void 0===z?void 0:z.value};return S.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===z||void 0===z?void 0:z.value)})})})]})}),(0,q.jsx)(i.A,{span:12,children:(0,q.jsxs)(r.A,{title:n("pricing"),className:"h-100",children:[(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("price"),name:"price",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(c.A,{className:"w-100"})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("fitting_rooms"),name:"fitting_rooms",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(c.A,{className:"w-100"})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsxs)(s.A,{gutter:24,children:[(0,q.jsx)(i.A,{span:12,children:(0,q.jsx)(d.A.Item,{rules:[{required:!1,message:n("required")}],label:n("image"),name:"images",children:(0,q.jsx)(j.A,{type:"products",imageList:P,setImageList:O,form:I,length:"1",multiple:!1})})}),(0,q.jsx)(i.A,{span:12,children:(0,q.jsx)(d.A.Item,{label:n("active"),name:"active",valuePropName:"checked",children:(0,q.jsx)(u.A,{})})})]})})]})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(r.A,{title:n("address"),extra:(0,q.jsx)(A.A,{}),children:(0,q.jsxs)(s.A,{gutter:12,children:[(0,q.jsx)(i.A,{span:12,children:(0,q.jsx)(H.A,{setLocation:D,value:T,setValue:$})}),(0,q.jsx)(i.A,{span:12,children:K.map(((e,t)=>(0,q.jsx)(d.A.Item,{label:n("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===W,message:n("required")}],hidden:e.locale!==W,children:(0,q.jsx)(m.A,{})},"title"+t)))}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(k.A,{location:L,setLocation:D,setAddress:e=>I.setFieldsValue({[`address[${W}]`]:e})})})]})})})]}),(0,q.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end mt-4",children:(0,q.jsx)("div",{className:"pb-5",children:(0,q.jsx)(v.A,{type:"primary",htmlType:"submit",loading:B,children:n("submit")})})})]})};var C=n(74635),I=n(81446),P=n(59051),O=n.n(P),L=n(82371);const D={getById:e=>L.A.get(`dashboard/admin/delivery-point-working-days/${e}`),create:e=>L.A.post("dashboard/admin/delivery-point-working-days",e,{}),update:(e,t)=>L.A.put(`dashboard/admin/delivery-point-working-days/${e}`,t,{}),delete:e=>L.A.delete("dashboard/admin/delivery-point-working-days",{params:e})},B={getById:e=>L.A.get(`dashboard/admin/delivery-point-closed-dates/${e}`),create:e=>L.A.post("dashboard/admin/delivery-point-closed-dates",e,{}),update:(e,t)=>L.A.put(`dashboard/admin/delivery-point-closed-dates/${e}`,t,{}),delete:e=>L.A.delete("dashboard/admin/shop-closed-dates/delete",{params:e})};var M=n(34422),E=n(12916),R=n(80737),T=n(57796),$=n(50384),V=n(13239),Y=n(94118),z=n(9213),K=n(51066);const W=e=>{let{onFinish:t,prev:n,form:l,lines:o,loadingBtn:c,days:m,setDays:h,setLines:x,weeks:A}=e;const{t:j}=(0,g.B)(),y=[{from:new Date(1900,4,18),to:new Date(O()().subtract(1,"days"))}],[f,b]=(0,a.useState)(!0),w=(0,p.d4)((e=>{var t,n;return null===(t=e.globalSettings)||void 0===t||null===(n=t.settings)||void 0===n?void 0:n.using_12_hour_format}),p.bN),_=(0,K.Q)(),k=m&&m.length>0?(0,q.jsxs)(s.A,{children:[(0,q.jsx)(E.A,{style:{fontSize:14,padding:"4px 10px",width:"100%",marginTop:"10px"},children:j("Your.existing.vacations")}),(0,q.jsxs)(i.A,{span:24,className:"mt-2",children:[m.slice(0,f?1:m.length).map(((e,t)=>(0,q.jsxs)(R.A,{className:"d-flex justify-content-between",style:{borderBottom:"1px solid #4D5B75"},children:[(0,q.jsx)(i.A,{span:24,style:{fontSize:14,marginTop:"8px"},children:O()(e).format("YYYY-MM-DD")}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(E.A,{color:"red",className:"cursor-pointer mt-3 mb-2",style:{fontSize:14},onClick:()=>{return t=e,h(m.filter((e=>e!==t)));var t},children:j("remove")})})]},t))),(0,q.jsx)(v.A,{className:"mt-3 w-100",onClick:()=>{b(!f)},children:f?(0,q.jsx)($.U29,{}):(0,q.jsx)($.ZXT,{})})]})]}):(0,q.jsx)(E.A,{style:{fontSize:14,padding:"4px 10px",width:"100%"},children:"Please pick one or more days."}),S=(e,t)=>{const n=[];for(let a=e;a<t;a++)n.push(a);return n},N=()=>({disabledHours:()=>S(0,1),disabledMinutes:()=>S(0,0),disabledSeconds:()=>S(0,60)});return(0,q.jsx)(d.A,{form:l,layout:"vertical",onFinish:t,children:(0,q.jsxs)(s.A,{gutter:[24,24],children:[(0,q.jsx)(i.A,{span:12,children:(0,q.jsx)(r.A,{title:j("deliverypoint.working.days"),className:"h-100",children:(0,q.jsx)(s.A,{gutter:24,children:(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.List,{name:"working_days",children:e=>(0,q.jsx)("div",{children:e.map(((e,t)=>(0,q.jsxs)(s.A,{gutter:24,align:"center",children:[(0,q.jsx)(i.A,{span:7,children:(0,q.jsx)(d.A.Item,{name:[t,"day"],children:(0,q.jsx)("span",{children:j(A[t].title)})})}),o[e.key]?(0,q.jsx)(i.A,{span:13,className:"mt-2",children:(0,q.jsx)("span",{children:j("shop.closed")})}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(i.A,{span:7,children:(0,q.jsx)(d.A.Item,{rules:[{required:!1===o[e.key]}],name:[t,"from"],children:(0,q.jsx)(T.A,{format:_,use12Hour:"1"===w,disabledTime:N,picker:"time",placeholder:j("start.time")})})}),(0,q.jsx)(i.A,{span:6,children:(0,q.jsx)(d.A.Item,{rules:[{required:!1===o[e.key]}],name:[t,"to"],children:(0,q.jsx)(T.A,{format:_,use12Hour:"1"===w,disabledTime:N,picker:"time",placeholder:j("end.time")})})})]}),(0,q.jsx)(i.A,{span:4,children:(0,q.jsx)(d.A.Item,{name:[t,"disabled"],valuePropName:"checked",children:(0,q.jsx)(u.A,{checkedChildren:(0,q.jsx)(V.A,{}),unCheckedChildren:(0,q.jsx)(Y.A,{}),checked:o[e.key],onChange:()=>(e=>{const t=[...o];t[e]=!o[e],x(t)})(e.key)})})})]},e.key)))})})})})})}),(0,q.jsx)(i.A,{span:12,children:(0,q.jsxs)(r.A,{title:j("deliverypoint.closed.days"),className:"h-100",children:[(0,q.jsx)("p",{children:j("deliverypoint.closed.days.text")}),(0,q.jsx)(d.A.Item,{rules:[{required:!1,message:j("required")}],children:(0,q.jsx)(z.hv,{className:"datepicker",mode:"multiple",disabled:y,min:1,selected:m,onSelect:h,footer:k,showOutsideDays:!0})})]})}),(0,q.jsxs)(i.A,{span:24,className:"d-flex justify-content-between",children:[(0,q.jsx)(v.A,{htmlType:"submit",onClick:()=>n(),children:j("prev")}),(0,q.jsx)(v.A,{type:"primary",htmlType:"submit",loading:c,children:j("submit")})]})]})})};var Q=n(28429),U=n(32959);const G=e=>{let{prev:t}=e;const[n]=d.A.useForm(),l=(0,Q.Zp)(),s=(0,p.wA)(),{activeMenu:i}=(0,p.d4)((e=>e.menu),p.bN),[r,o]=(0,a.useState)([]),[c,u]=(0,a.useState)(new Array(7).fill(!1)),[m,v]=(0,a.useState)(!1),[g,x]=(0,a.useState)(!1),A=(0,a.useMemo)((()=>{var e;return null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.id}),[null===i||void 0===i?void 0:i.data]);return(0,a.useEffect)((()=>{n.setFieldsValue({working_days:M.Q}),A&&(x(!0),B.getById(A).then((e=>{o(e.data.closed_dates.filter((e=>e.day>O()(new Date).format("YYYY-MM-DD"))).map((e=>new Date(e.day))))})),D.getById(A).then((e=>{u(0!==e.data.dates.length?e.data.dates.map((e=>e.disabled)):[]),0!==e.data.dates.length&&n.setFieldsValue({working_days:e.data.dates.map((e=>({title:e.day,from:O()(e.from,"HH:mm:ss"),to:O()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)})))})})).finally((()=>x(!1))))}),[]),(0,q.jsx)(q.Fragment,{children:g?(0,q.jsx)(I.A,{}):(0,q.jsx)(W,{onFinish:e=>{v(!0);const t={delivery_point_id:A,dates:r?r.map((e=>O()(e).format("YYYY-MM-DD"))):void 0},n={delivery_point_id:A,dates:e.working_days.map((e=>({day:e.title,from:O()(e.from?e.from:"00").format("HH:mm"),to:O()(e.to?e.to:"00").format("HH:mm"),disabled:e.disabled})))};0!==e.working_days.length&&D.update(A,n).then((()=>{})).finally((()=>v(!1))),B.update(A,t).then((()=>{const e="delivery-point";s((0,h.EK)({...i,nextUrl:e})),l(`/${e}`),s((0,U.D)())})).finally((()=>v(!1)))},prev:t,form:n,lines:c,loadingBtn:m,days:r,setDays:o,setLines:u,weeks:M.Q})})},J=e=>{let{next:t}=e;const{t:n}=(0,g.B)(),{id:l}=(0,Q.g)(),{activeMenu:N}=(0,p.d4)((e=>e.menu),p.bN),F=(0,p.wA)(),[C]=d.A.useForm(),[I,P]=(0,a.useState)([]),[O,L]=(0,a.useState)([]),[D,B]=(0,a.useState)(""),[M,E]=(0,a.useState)(!1),[R,T]=(0,a.useState)({}),[$,V]=(0,a.useState)(""),{country:Y,region:z,city:K}=R,{languages:W,defaultLang:U}=(0,p.d4)((e=>e.formLang),p.bN);function G(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=W.map((e=>{var n,a;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`address[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.address}}));return Object.assign({},...n)}(0,a.useEffect)((()=>{l&&(L(!0),y.A.getById(l).then((e=>{var t,n,a,l,s,i,r;let{data:d}=e;const{city:o,country:c,region:u,area:m,...v}=d,p=`address[${U}]`,h={area:{label:null===m||void 0===m||null===(t=m.translation)||void 0===t?void 0:t.title,value:null===m||void 0===m?void 0:m.id},city:{label:null===o||void 0===o||null===(n=o.translation)||void 0===n?void 0:n.title,value:null===o||void 0===o?void 0:o.id},country:{label:null===c||void 0===c||null===(a=c.translation)||void 0===a?void 0:a.title,value:null===c||void 0===c?void 0:c.id},region:{label:null===u||void 0===u||null===(l=u.translation)||void 0===l?void 0:l.title,value:null===u||void 0===u?void 0:u.id}},g={...G(d),...h,...v,[p]:null===(s=d.address)||void 0===s?void 0:s[U]};C.setFieldsValue(g),P([{name:d.img}]),T(h),B({lat:null===(i=d.location)||void 0===i?void 0:i.latitude,lng:null===(r=d.location)||void 0===r?void 0:r.longitude})})).catch((e=>{console.error(e)})).finally((()=>L(!1))))}),[l]);return(0,q.jsxs)(d.A,{name:"add.delivery.point",layout:"vertical",onFinish:e=>{const{area:a,city:s,country:i,region:r,price:d,fitting_rooms:c,active:u}=e,m={price:d,fitting_rooms:c,location:{latitude:null===D||void 0===D?void 0:D.lat,longitude:null===D||void 0===D?void 0:D.lng},active:u?1:0,area_id:null===a||void 0===a?void 0:a.value,city_id:null===s||void 0===s?void 0:s.value,country_id:null===i||void 0===i?void 0:i.value,region_id:null===r||void 0===r?void 0:r.value,images:I.map((e=>e.name)),title:(0,x.A)(W,e,"title"),address:(0,x.A)(W,e,"address")};E(!0),y.A.update(l,m).then((()=>{o.Ay.success(n("successfully.created"));const e=C.getFieldsValue(!0);F((0,h.Ok)({activeMenu:N,data:{...e,id:l}})),t()})).finally((()=>E(!1)))},form:C,initialValues:{clickable:!0,...N.data},children:[(0,q.jsxs)(s.A,{gutter:[24,24],children:[(0,q.jsx)(i.A,{span:12,children:(0,q.jsxs)(r.A,{title:n("deliveryzone"),className:"h-100",loading:O,children:[(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("region"),name:"region",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10};return b.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,onChange:e=>{T((t=>({...t,region:e}))),C.resetFields(["city","area","country"])}})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("country"),name:"country",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10,region_id:null===z||void 0===z?void 0:z.value};return w.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,onChange:e=>{T((t=>({...t,country:e}))),C.resetFields(["city","area"])},disabled:!Boolean(null===z||void 0===z?void 0:z.value)})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("city"),name:"city",rules:[{required:!1,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10,country_id:null===Y||void 0===Y?void 0:Y.value};return _.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===Y||void 0===Y?void 0:Y.value),onChange:e=>{T((t=>({...t,city:e}))),C.resetFields(["area"])}})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("area"),name:"area",rules:[{required:!1,message:n("required")}],children:(0,q.jsx)(f.a,{fetchOptions:async function(e){const t={search:e,status:1,perPage:10,city_id:null===K||void 0===K?void 0:K.value};return S.A.get(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.translation.title||"no name",value:e.id})))}))},dropdownRender:e=>(0,q.jsx)(q.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===K||void 0===K?void 0:K.value)})})})]})}),(0,q.jsx)(i.A,{span:12,children:(0,q.jsxs)(r.A,{title:n("pricing"),className:"h-100",loading:O,children:[(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("price"),name:"price",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(c.A,{className:"w-100"})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(d.A.Item,{label:n("fitting_rooms"),name:"fitting_rooms",rules:[{required:!0,message:n("required")}],children:(0,q.jsx)(c.A,{className:"w-100"})})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsxs)(s.A,{gutter:24,children:[(0,q.jsx)(i.A,{span:12,children:(0,q.jsx)(d.A.Item,{rules:[{required:!1,message:n("required")}],label:n("image"),name:"images",children:(0,q.jsx)(j.A,{type:"products",imageList:I,setImageList:P,form:C,length:"1",multiple:!1})})}),(0,q.jsx)(i.A,{span:12,children:(0,q.jsx)(d.A.Item,{label:n("active"),name:"active",valuePropName:"checked",children:(0,q.jsx)(u.A,{})})})]})})]})}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(r.A,{title:n("address"),loading:O,extra:(0,q.jsx)(A.A,{}),children:(0,q.jsxs)(s.A,{gutter:12,children:[(0,q.jsx)(i.A,{span:12,children:(0,q.jsx)(H.A,{setLocation:B,value:$,setValue:V})}),(0,q.jsx)(i.A,{span:12,children:W.map(((e,t)=>(0,q.jsx)(d.A.Item,{label:n("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===U,message:n("required")}],hidden:e.locale!==U,children:(0,q.jsx)(m.A,{})},"title"+t)))}),(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(k.A,{location:D,setLocation:B,setAddress:e=>C.setFieldsValue({[`address[${U}]`]:e})})})]})})})]}),(0,q.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end",children:(0,q.jsx)("div",{className:"pb-5",children:(0,q.jsx)(v.A,{type:"primary",htmlType:"submit",loading:M,children:n("submit")})})})]})},{Step:Z}=l.A,X=[{title:"delivery.point",content:"Delivery point"},{title:"working days",content:"Working days"}],ee=()=>{var e,t,n;const[d,o]=(0,a.useState)(0),{id:c}=(0,Q.g)(),u=()=>{o(d+1)};return(0,q.jsxs)(s.A,{gutter:[24,24],children:[(0,q.jsx)(i.A,{span:24,children:(0,q.jsx)(r.A,{className:"mb-0",children:(0,q.jsx)(l.A,{current:d,children:X.map((e=>(0,q.jsx)(Z,{title:(0,C.t)(e.title)},e.title)))})})}),(0,q.jsxs)(i.A,{span:24,children:["Delivery point"===(null===(e=X[d])||void 0===e?void 0:e.content)&&!c&&(0,q.jsx)(F,{next:u}),"Delivery point"===(null===(t=X[d])||void 0===t?void 0:t.content)&&c&&(0,q.jsx)(J,{next:u}),"Working days"===(null===(n=X[d])||void 0===n?void 0:n.content)&&(0,q.jsx)(G,{next:u,prev:()=>{o(d-1)}})]})]})}},6566:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(17706);const l=()=>{var e,t;const n={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IS_DEMO:"true"}.MAP_API_KEY,{google_map_key:l}=null===(e=a.M.getState())||void 0===e||null===(t=e.globalSettings)||void 0===t?void 0:t.settings;return l||n}},28257:(e,t,n)=>{n.d(t,{A:()=>v});n(9950);var a=n(84619),l=n(96011),s=n.n(l),i=n(63620);var r=n(91854),d=n(99674),o=n(59233),c=n(74635),u=n(44414);const m=i.bo?{componentRestrictions:{country:i.bo}}:{},v=e=>{let{value:t,setValue:n,setLocation:l,withLanguages:v=!0}=e;const{placePredictions:p,getPlacePredictions:h,isPlacePredictionsLoading:g}=(0,a.A)({apiKey:i.CJ,libraries:["places","geocode"],options:m}),{defaultLang:x,languages:A}=(0,r.d4)((e=>e.formLang),r.bN),j=()=>(0,u.jsx)(d.A,{allowClear:!0,searchValue:t,showSearch:!0,autoClearSearchValue:!0,loading:g,options:null===p||void 0===p?void 0:p.map((e=>({label:e.description,value:e.description}))),onSearch:e=>{n(e),e.length>0&&h({input:e})},onSelect:async e=>{const t=await async function(e){let t={address:e,key:arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.CJ};return s().get("https://maps.googleapis.com/maps/api/geocode/json",{params:t}).then((e=>{let{data:t}=e;return t.results[0]})).catch((e=>"not found"))}(e);l({lat:null===t||void 0===t?void 0:t.geometry.location.lat,lng:null===t||void 0===t?void 0:t.geometry.location.lng})},getPopupContainer:e=>e.parentNode});return v?(0,u.jsx)(u.Fragment,{children:A.map(((e,t)=>(0,u.jsx)(o.A.Item,{label:(0,c.t)("address"),name:`address[${e.locale}]`,rules:[{required:e.locale===x,message:(0,c.t)("required")}],hidden:e.locale!==x,children:j()},"address"+t)))}):(0,u.jsx)(o.A.Item,{label:(0,c.t)("address"),name:"address",rules:[{required:!0,message:(0,c.t)("required")}],children:j()})}},29597:(e,t,n)=>{function a(e){var t;if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const n=null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.split(", ");return{lat:Number(null===n||void 0===n?void 0:n[0]),lng:Number(null===n||void 0===n?void 0:n[1])}}n.d(t,{A:()=>a})},31281:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t[`${n}[${e.locale}]`]?void 0:t[`${n}[${e.locale}]`]})));return Object.assign({},...a)}n.d(t,{A:()=>a})},34422:(e,t,n)=>{n.d(t,{Q:()=>s});var a=n(59051),l=n.n(a);const s=[{title:"monday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"tuesday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"wednesday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"thursday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"friday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"saturday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"sunday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")}]},51066:(e,t,n)=>{n.d(t,{Q:()=>s});var a=n(17706),l=n(80415);const s=()=>{var e,t,n,s;return null!==(e=null===(t=a.M.getState())||void 0===t||null===(n=t.globalSettings)||void 0===n||null===(s=n.settings)||void 0===s?void 0:s.hour_format)&&void 0!==e?e:l.G}},57796:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(58168),l=n(9950),s=n(86971),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},r=s.A.TimePicker,d=s.A.RangePicker,o=l.forwardRef((function(e,t){return l.createElement(d,(0,a.A)({},e,{dropdownClassName:e.popupClassName,picker:"time",mode:void 0,ref:t}))})),c=l.forwardRef((function(e,t){var n=e.addon,s=e.renderExtraFooter,d=e.popupClassName,o=i(e,["addon","renderExtraFooter","popupClassName"]),c=l.useMemo((function(){return s||(n||void 0)}),[n,s]);return l.createElement(r,(0,a.A)({},o,{dropdownClassName:d,mode:void 0,ref:t,renderExtraFooter:c}))}));c.displayName="TimePicker",c.RangePicker=o;const u=c},78498:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(9950),l=n(97239);const s=n.p+"static/media/pin.0e41858db80c699cd8a2.png";var i=n(96011),r=n.n(i),d=n(63620);async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.CJ,n={latlng:`${null===e||void 0===e?void 0:e.lat},${null===e||void 0===e?void 0:e.lng}`,key:t};return r().get("https://maps.googleapis.com/maps/api/geocode/json",{params:n}).then((e=>{var t;let{data:n}=e;return null===(t=n.results[0])||void 0===t?void 0:t.formatted_address})).catch((e=>"not found"))}var c=n(39174),u=n(85923),m=n(70030),v=n(6566),p=n(44414);const h=(0,v.A)();const g=(0,l.GoogleApiWrapper)({apiKey:h,libraries:["places","geometry"]})((function(e){var t,n;const[i,r]=(0,a.useState)(),{t:d}=(0,m.B)(),v=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const t={lat:e.coords.latitude,lng:e.coords.longitude};r(t)}),(function(e){u.oR.warning(d("turn.on.gps"))}))};(0,a.useEffect)((()=>{v()}),[]);const g=[{lat:Number(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.lat)||0,lng:Number(null===e||void 0===e||null===(n=e.location)||void 0===n?void 0:n.lng)||0}];for(var x=new e.google.maps.LatLngBounds,A=0;A<g.length;A++)x.extend(g[A]);return(0,p.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,p.jsx)("button",{className:"map-button",type:"button",onClick:()=>{v(),i&&(async t=>{const n={lat:null===t||void 0===t?void 0:t.lat,lng:null===t||void 0===t?void 0:t.lng};e.setLocation(n);const a=await o(n,h);e.setAddress(a)})(i)},children:(0,p.jsx)(c.uFi,{})}),(0,p.jsx)(l.Map,{cursor:"pointer",onClick:async(t,n,a)=>{const{latLng:l}=a,s={lat:l.lat(),lng:l.lng()};e.setLocation(s);const i=await o(s,h);e.setAddress(i)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,p.jsx)(l.Marker,{position:e.location,icon:{url:s,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},79406:(e,t,n)=>{n.d(t,{a:()=>o});var a=n(9950),l=n(95491),s=n.n(l),i=n(99674),r=n(90650),d=n(44414);const o=e=>{let{fetchOptions:t,debounceTimeout:n=400,refetch:l=!1,...o}=e;const[c,u]=(0,a.useState)(!1),[m,v]=(0,a.useState)([]),p=(0,a.useMemo)((()=>s()((e=>{v([]),u(!0),t(e).then((e=>{v(e),u(!1)}))}),n)),[t,n]);return(0,d.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>p(""),filterOption:!1,onSearch:p,notFoundContent:c?(0,d.jsx)(r.A,{size:"small"}):"no results",...o,options:m,onFocus:()=>{m.length&&!l||p("")}})}},80415:(e,t,n)=>{n.d(t,{G:()=>i,HV:()=>l,LH:()=>a,PR:()=>s,wO:()=>d,xt:()=>r});const a={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]},l=(new Date,new Date,["new","accepted","ready","on_a_way","pause","delivered","canceled"]),s=30,i="HH:mm",r="hh:mm a",d=!0}}]);