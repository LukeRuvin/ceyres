"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5791],{6566:(e,l,i)=>{i.d(l,{A:()=>n});var a=i(17706);const n=()=>{var e,l;const i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IS_DEMO:"true"}.MAP_API_KEY,{google_map_key:n}=null===(e=a.M.getState())||void 0===e||null===(l=e.globalSettings)||void 0===l?void 0:l.settings;return n||i}},28156:(e,l,i)=>{i.d(l,{A:()=>E});var a=i(9950),n=i(54909),t=i(70030),s=i(59233),o=i(87094),d=i(41988),r=i(55902),u=i(40577),c=i(86971),v=i(99674),m=i(80737),h=i(48538),p=i(91854),g=i(48970),A=i(59051),x=i.n(A),y=i(85923),j=i(74623),b=i(28429),f=i(29514),S=i(44414);const _=e=>{var l,i,n,A,_,w,q;let{form:I,handleSubmit:C}=e;const{t:k}=(0,t.B)(),N=(0,p.wA)(),F=(0,b.Zp)(),{state:L}=(0,b.zy)(),{uuid:P}=(0,b.g)(),{myShop:O}=(0,p.d4)((e=>e.myShop),p.bN),{activeMenu:E}=(0,p.d4)((e=>e.menu),p.bN),[D,M]=(0,a.useState)(!1),[T,z]=(0,a.useState)(null!==(l=E.data)&&void 0!==l&&null!==(i=l.img)&&void 0!==i&&i.length?[{name:null===(n=E.data)||void 0===n?void 0:n.img}]:[]),[V,B]=(0,a.useState)(null);return(0,S.jsxs)(s.A,{form:I,layout:"vertical",onFinish:e=>{var l;const i={...e,birthday:x()(e.birthday).format("YYYY-MM-DD"),images:[null===T||void 0===T||null===(l=T[0])||void 0===l?void 0:l.name],shop_id:[null===O||void 0===O?void 0:O.id],role:"deliveryman"},a="seller/invitations/deliverymen";M(!0),C(i).then((()=>{y.oR.success(k("successfully.created")),(0,p.vA)((()=>{N((0,j.EK)({...E,nextUrl:a})),N((0,f.d8)(null===L||void 0===L?void 0:L.paramsData))})),F(`/${a}`)})).catch((e=>B(e.response.data.params))).finally((()=>M(!1)))},children:[(0,S.jsxs)(o.A,{gutter:12,children:[(0,S.jsx)(d.A,{span:24,children:(0,S.jsx)(s.A.Item,{name:"avatar",label:k("images"),rules:[{required:!(null!==T&&void 0!==T&&T.length),message:k("required")}],children:(0,S.jsx)(g.A,{type:"users",imageList:T,setImageList:z,form:I,multiple:!1,name:"logo_img"})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("firstname"),name:"firstname",help:null===V||void 0===V||null===(A=V.firstname)||void 0===A?void 0:A[0],validateStatus:null!==V&&void 0!==V&&V.firstname?"error":"success",rules:[{required:!0,message:k("required")}],children:(0,S.jsx)(r.A,{className:"w-100",maxLength:20})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("lastname"),name:"lastname",help:null===V||void 0===V||null===(_=V.lastname)||void 0===_?void 0:_[0],validateStatus:null!==V&&void 0!==V&&V.lastname?"error":"success",rules:[{required:!0,message:k("required")}],children:(0,S.jsx)(r.A,{className:"w-100",maxLength:20})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("phone"),name:"phone",help:null===V||void 0===V||null===(w=V.phone)||void 0===w?void 0:w[0],validateStatus:null!==V&&void 0!==V&&V.phone?"error":"success",rules:[{required:!0,message:k("required")}],children:(0,S.jsx)(u.A,{min:0,className:"w-100"})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("birthday"),name:"birthday",rules:[{required:!0,message:k("required")}],children:(0,S.jsx)(c.A,{className:"w-100",disabledDate:e=>x()().add(-18,"years")<=e,defaultPickerValue:x()().add(-18,"years")})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("gender"),name:"gender",rules:[{required:!0,message:k("required")}],children:(0,S.jsxs)(v.A,{picker:"dayTime",className:"w-100",children:[(0,S.jsx)(v.A.Option,{value:"male",children:k("male")},"male"),(0,S.jsx)(v.A.Option,{value:"female",children:k("female")},"female")]})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("email"),name:"email",help:null===V||void 0===V||null===(q=V.email)||void 0===q?void 0:q[0],validateStatus:null!==V&&void 0!==V&&V.email?"error":"success",rules:[{required:!0,message:k("required")},{type:"email",message:k("invalid.email")}],children:(0,S.jsx)(r.A,{type:"email",className:"w-100"})})}),"undefined"===P&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("password"),name:"password",help:null!==V&&void 0!==V&&V.password?V.password[0]:null,validateStatus:null!==V&&void 0!==V&&V.password?"error":"success",rules:[{required:!0,message:k("required")}],children:(0,S.jsx)(r.A.Password,{type:"password",className:"w-100",placeholder:"********",autoComplete:"new-password"})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:k("password.confirmation"),help:null!==V&&void 0!==V&&V.password_confirmation?V.password_confirmation[0]:null,validateStatus:null!==V&&void 0!==V&&V.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:k("required")},e=>{let{getFieldValue:l}=e;return{validator:(e,i)=>i&&l("password")!==i?Promise.reject(k("two.passwords.dont.match")):Promise.resolve()}}],children:(0,S.jsx)(r.A.Password,{type:"password",placeholder:"********",autoComplete:"new-password"})})})]})]}),(0,S.jsx)(m.A,{wrap:!0,children:(0,S.jsx)(h.A,{type:"primary",htmlType:"submit",loading:D,children:k("submit")})})]})};var w=i(23263),q=i(25933),I=i(47992),C=i(68073),k=i(78498),N=i(29597),F=i(66209);const L=[{label:"Benzine",value:"benzine"},{label:"Diesel",value:"diesel"},{label:"Gas",value:"gas"},{label:"Motorbike",value:"motorbike"},{label:"Bike",value:"bike"},{label:"Foot",value:"foot"},{label:"Electric",value:"electric"}],P=()=>{var e,l,i;const{t:n}=(0,t.B)(),[u]=s.A.useForm(),{uuid:c}=(0,b.g)(),{settings:m}=(0,p.d4)((e=>e.globalSettings),p.bN),{activeMenu:A}=(0,p.d4)((e=>e.menu),p.bN),{myShop:x}=(0,p.d4)((e=>e.myShop),p.bN),j=null===(e=A.data)||void 0===e?void 0:e.deliveryman_settings_id,f=null===(l=A.data)||void 0===l?void 0:l.deliveryman_id,[_,P]=(0,a.useState)(null===(i=u.getFieldsValue())||void 0===i?void 0:i.country),[O,E]=(0,a.useState)(!1),[D,M]=(0,a.useState)([]),[T,z]=(0,a.useState)(!1),[V,B]=(0,a.useState)((0,N.A)(m));(0,a.useEffect)((()=>{var e;c&&null!==(e=A.data)&&void 0!==e&&e.deliveryman_settings_id&&K()}),[c]);const R=e=>e.map((e=>({uid:e.id,name:e.path,url:e.path}))),K=()=>{z(!0),F.A.getDeliverymanSettings(j).then((e=>{var l,i,a,n,t,s,o,d,r,c,v,m,h,p,g,A,x,y,j,b,f,S,_,w;const q={...e.data,country:{label:null===(l=e.data)||void 0===l||null===(i=l.country)||void 0===i||null===(a=i.translation)||void 0===a?void 0:a.title,value:null===(n=e.data)||void 0===n||null===(t=n.country)||void 0===t?void 0:t.id,key:null===(s=e.data)||void 0===s||null===(o=s.country)||void 0===o?void 0:o.region_id},city:{label:null===(d=e.data)||void 0===d||null===(r=d.city)||void 0===r||null===(c=r.translation)||void 0===c?void 0:c.title,value:null===(v=e.data)||void 0===v||null===(m=v.city)||void 0===m?void 0:m.id},user_id:{label:(null===(h=e.data.deliveryman)||void 0===h?void 0:h.firstname)+" "+(null===(p=e.data.deliveryman)||void 0===p?void 0:p.firstname),value:null===(g=e.data.deliveryman)||void 0===g?void 0:g.id,images:R(e.data.galleries),location:{lat:null===(A=e.data)||void 0===A||null===(x=A.location)||void 0===x?void 0:x.latitude,lng:null===(y=e.data)||void 0===y||null===(j=y.location)||void 0===j?void 0:j.longitude}}};P(null===q||void 0===q?void 0:q.country),B({lat:null===(b=e.data)||void 0===b||null===(f=b.location)||void 0===f?void 0:f.latitude,lng:null===(S=e.data)||void 0===S||null===(_=S.location)||void 0===_?void 0:_.longitude}),M(R(null===e||void 0===e||null===(w=e.data)||void 0===w?void 0:w.galleries)),u.setFieldsValue(q)})).finally((()=>z(!1)))};return(0,S.jsx)(w.A,{loading:T,children:(0,S.jsxs)(s.A,{form:u,layout:"vertical",onFinish:e=>{var l,i,a,t,s;E(!0);const o={...e,user_id:f,images:null!==(l=D[0])&&void 0!==l&&l.name?null===D||void 0===D?void 0:D.map((e=>null===e||void 0===e?void 0:e.name)):void 0,country_id:null===e||void 0===e||null===(i=e.country)||void 0===i?void 0:i.value,city_id:null===e||void 0===e||null===(a=e.city)||void 0===a?void 0:a.value,region_id:null===e||void 0===e||null===(t=e.country)||void 0===t?void 0:t.key,location:{latitude:V.lat,longitude:V.lng},online:Boolean(e.online)};delete o.country,delete o.city,null!==(s=A.data)&&void 0!==s&&s.delivery_man_setting?F.A.updateDeliverymanSettings(j,o).then((()=>y.oR.success(n("successfully.updated")))).finally((()=>E(!1))):F.A.createDeliverymanSettings(o).then((()=>y.oR.success(n("successfully.created")))).finally((()=>E(!1)))},initialValues:{online:!1},children:[(0,S.jsxs)(o.A,{gutter:12,children:[(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:n("brand"),name:"brand",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(r.A,{maxLength:20})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:n("model"),name:"model",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(r.A,{maxLength:20})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:n("type.of.technique"),name:"type_of_technique",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(v.A,{options:L})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:n("car.number"),name:"number",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(r.A,{maxLength:20})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:n("car.color"),name:"color",rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(r.A,{maxLength:20})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{name:"country",label:n("country"),rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(I.G,{fetchOptions:e=>{var l;const i={search:e,perPage:10,page:1,has_price:1,shop_id:null===x||void 0===x?void 0:x.id};return null!==e&&void 0!==e&&null!==(l=e.trim())&&void 0!==l&&l.length||delete i.search,C.A.getCountries(i).then((e=>{let{data:l}=e;return null===l||void 0===l?void 0:l.flatMap((e=>{var l;return{label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.region_id}}))}))},placeholder:n("select.country"),onChange:e=>{u.setFieldsValue({city:[]}),P(e)},onClear:()=>{u.setFieldsValue({city:[]}),P(null)},autocomplete:"none"})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{name:"city",label:n("city"),rules:[{required:!0,message:n("required")}],children:(0,S.jsx)(I.G,{fetchOptions:e=>{var l,i,a;const n={search:e,perPage:10,page:1,country_id:null===(l=u.getFieldsValue())||void 0===l||null===(i=l.country)||void 0===i?void 0:i.value,has_price:1,shop_id:null===x||void 0===x?void 0:x.id};return null!==e&&void 0!==e&&null!==(a=e.trim())&&void 0!==a&&a.length||delete n.search,C.A.getCities(n).then((e=>{let{data:l}=e;return null===l||void 0===l?void 0:l.flatMap((e=>{var l;return{label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},placeholder:n("select.city"),refetchOptions:!0,disabled:!_,autocomplete:"none"})})}),(0,S.jsx)(d.A,{span:12,children:(0,S.jsx)(s.A.Item,{label:n("image"),name:"images",rules:[{required:!(null!==D&&void 0!==D&&D.length),message:n("required")}],children:(0,S.jsx)(g.A,{type:"deliveryman/settings",imageList:D,setImageList:M,form:u,multiple:!0})})}),(0,S.jsx)(d.A,{span:6,children:(0,S.jsx)(s.A.Item,{label:n("online"),name:"online",valuePropName:"checked",children:(0,S.jsx)(q.A,{})})}),(0,S.jsx)(d.A,{span:24,children:(0,S.jsx)(s.A.Item,{label:n("map"),name:"location",children:(0,S.jsx)(k.A,{location:V,setLocation:B})})})]}),(0,S.jsx)(h.A,{type:"primary",htmlType:"submit",loading:O,children:n("submit")})]})})},{TabPane:O}=n.A,E=e=>{let{form:l,handleSubmit:i}=e;const{t:a}=(0,t.B)(),{uuid:s}=(0,b.g)();return(0,S.jsx)(S.Fragment,{children:void 0===s?(0,S.jsx)(_,{form:l,handleSubmit:i}):(0,S.jsxs)(n.A,{tabPosition:"left",size:"small",children:[(0,S.jsx)(O,{tab:a("user"),children:(0,S.jsx)(_,{form:l,handleSubmit:i})},"user"),(0,S.jsx)(O,{tab:a("deliveryman"),children:(0,S.jsx)(P,{form:l,handleSubmit:i})},"deliveryman")]})})}},29597:(e,l,i)=>{function a(e){var l;if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const i=null===e||void 0===e||null===(l=e.location)||void 0===l?void 0:l.split(", ");return{lat:Number(null===i||void 0===i?void 0:i[0]),lng:Number(null===i||void 0===i?void 0:i[1])}}i.d(l,{A:()=>a})},47992:(e,l,i)=>{i.d(l,{G:()=>r});var a=i(9950),n=i(95491),t=i.n(n),s=i(99674),o=i(90650),d=i(44414);const r=e=>{let{fetchOptions:l,debounceTimeout:i=400,onClear:n,refetchOptions:r=!1,...u}=e;const[c,v]=(0,a.useState)(!1),[m,h]=(0,a.useState)([]),p=(0,a.useMemo)((()=>t()((e=>{h([]),v(!0),l(e).then((e=>{h(e),v(!1)}))}),i)),[l,i]);return(0,d.jsx)(s.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),n&&n()},notFoundContent:c?(0,d.jsx)(o.A,{size:"small"}):"no results",...u,options:m,onFocus:()=>{m.length&&!r||p("")}})}},68073:(e,l,i)=>{i.d(l,{A:()=>n});var a=i(82371);const n={getCountries:e=>a.A.get("rest/countries",{params:e}),getCities:e=>a.A.get("rest/cities",{params:e})}},78498:(e,l,i)=>{i.d(l,{A:()=>g});var a=i(9950),n=i(97239);const t=i.p+"static/media/pin.0e41858db80c699cd8a2.png";var s=i(96011),o=i.n(s),d=i(63620);async function r(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.CJ,i={latlng:`${null===e||void 0===e?void 0:e.lat},${null===e||void 0===e?void 0:e.lng}`,key:l};return o().get("https://maps.googleapis.com/maps/api/geocode/json",{params:i}).then((e=>{var l;let{data:i}=e;return null===(l=i.results[0])||void 0===l?void 0:l.formatted_address})).catch((e=>"not found"))}var u=i(39174),c=i(85923),v=i(70030),m=i(6566),h=i(44414);const p=(0,m.A)();const g=(0,n.GoogleApiWrapper)({apiKey:p,libraries:["places","geometry"]})((function(e){var l,i;const[s,o]=(0,a.useState)(),{t:d}=(0,v.B)(),m=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const l={lat:e.coords.latitude,lng:e.coords.longitude};o(l)}),(function(e){c.oR.warning(d("turn.on.gps"))}))};(0,a.useEffect)((()=>{m()}),[]);const g=[{lat:Number(null===e||void 0===e||null===(l=e.location)||void 0===l?void 0:l.lat)||0,lng:Number(null===e||void 0===e||null===(i=e.location)||void 0===i?void 0:i.lng)||0}];for(var A=new e.google.maps.LatLngBounds,x=0;x<g.length;x++)A.extend(g[x]);return(0,h.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,h.jsx)("button",{className:"map-button",type:"button",onClick:()=>{m(),s&&(async l=>{const i={lat:null===l||void 0===l?void 0:l.lat,lng:null===l||void 0===l?void 0:l.lng};e.setLocation(i);const a=await r(i,p);e.setAddress(a)})(s)},children:(0,h.jsx)(u.uFi,{})}),(0,h.jsx)(n.Map,{cursor:"pointer",onClick:async(l,i,a)=>{const{latLng:n}=a,t={lat:n.lat(),lng:n.lng()};e.setLocation(t);const s=await r(t,p);e.setAddress(s)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,h.jsx)(n.Marker,{position:e.location,icon:{url:t,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))}}]);