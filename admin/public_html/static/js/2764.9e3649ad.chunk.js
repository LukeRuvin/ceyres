(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2764],{8168:(e,t,l)=>{"use strict";function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}l.d(t,{A:()=>n})},8297:(e,t,l)=>{"use strict";l.d(t,{A:()=>s});var n=l(9950),i=l(55902),o=l(41397),a=l(60767),d=l(44414);function s(e){let{handleChange:t,defaultValue:l,resetSearch:s,...r}=e;const[c,u]=(0,n.useState)(l),v=(0,n.useMemo)((()=>(0,o.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(l)}),[s]),(0,d.jsx)(i.A,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,d.jsx)(a.A,{}),...r})}},13700:(e,t,l)=>{"use strict";l.d(t,{A:()=>s});var n=l(89379),i=l(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};var a=l(25085),d=function(e,t){return i.createElement(a.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:o}))};const s=i.forwardRef(d)},26714:(e,t,l)=>{"use strict";l.d(t,{A:()=>g});var n=l(9950),i=l(48946),o=l(39362),a=l.n(o),d=l(81446),s=l(23263),r=l(82706),c=l(48538),u=l(87094),v=l(41988),h=l(70030),p=l(50384),y=l(68873),m=l(28429),f=l(44414);const x=s.A.Meta,g=e=>{let{id:t,handleCancel:l}=e;const[o,g]=(0,n.useState)(null),{t:A}=(0,h.B)(),j=(0,m.Zp)();return(0,f.jsx)(f.Fragment,{children:o?(0,f.jsx)(d.A,{}):(0,f.jsx)(r.A,{visible:!!t,title:A("selected.download"),closable:!1,handleCancel:l,footer:[(0,f.jsx)(c.A,{type:"default",onClick:l,children:A("cancel")},"cancelBtn")],children:(0,f.jsxs)(u.A,{children:[(0,f.jsx)(v.A,{span:12,children:(0,f.jsx)(s.A,{title:A("download.pdf"),onClick:()=>function(e){g(!0),i.A.orderExport(e).then((t=>{a()(t,`invoice_${e}.pdf`,"application/pdf"),l()})).finally((()=>g(!1)))}(t),className:"text-center cursor-pointer",children:(0,f.jsx)(x,{className:"d-flex align-items-center justify-content-center",title:(0,f.jsx)(p.yos,{size:80})})})}),(0,f.jsx)(v.A,{span:12,children:(0,f.jsx)(s.A,{title:A("download.check"),onClick:()=>(e=>{j(`/orders/generate-invoice/${e}`)})(t),className:"text-center cursor-pointer",children:(0,f.jsx)(x,{className:"d-flex align-items-center justify-content-center",title:(0,f.jsx)(y.TBA,{size:85})})})})]})})})}},28645:(e,t,l)=>{"use strict";l.d(t,{A:()=>y});var n=l(9950),i=l(66362),o=l(69216),a=l(80737),d=l(25933),s=l(57811),r=l(81541),c=l(48538),u=l(89323),v=l(70030),h=l(44414);const{Text:p}=i.A,y=e=>{let{columns:t=[],setColumns:l,style:i,size:y="",iconOnly:m}=e;const{t:f}=(0,v.B)(),[x,g]=(0,n.useState)(!1),A=(0,h.jsx)(o.A,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(o.A.Item,{children:(0,h.jsxs)(a.A,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(d.A,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(s.A,{overlay:A,trigger:["click"],onVisibleChange:e=>{g(e)},visible:x,children:(0,h.jsx)(r.A,{title:f("change.columns"),children:(0,h.jsx)(c.A,{style:{...i},size:y,icon:(0,h.jsx)(u.A,{}),children:m?null:f("Columns")})})})}},35116:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});l(9950);var n=l(48538),i=l(44070),o=l(85923),a=l(70030),d=l(13311),s=l(44414);function r(e){let{size:t="",onClick:l,type:r="default",...c}=e;const{t:u}=(0,a.B)(),{isDemo:v}=(0,d.A)();return(0,s.jsx)(n.A,{size:t,icon:(0,s.jsx)(i.A,{}),onClick:e=>{v?o.oR.warning(u("cannot.work.demo")):l(e)},type:r,...c})}},39362:function(e,t){var l,n,i;n=[],void 0===(i="function"===typeof(l=function(){return function e(t,l,n){var i,o,a=window,d="application/octet-stream",s=n||d,r=t,c=!l&&!n&&r,u=document.createElement("a"),v=function(e){return String(e)},h=a.Blob||a.MozBlob||a.WebKitBlob||v,p=l||"download";if(h=h.call?h.bind(a):Blob,"true"===String(this)&&(s=(r=[r,s])[0],r=r[1]),c&&c.length<2048&&(p=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var y=new XMLHttpRequest;return y.open("GET",c,!0),y.responseType="blob",y.onload=function(t){e(t.target.response,p,d)},setTimeout((function(){y.send()}),0),y}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(r)){if(!(r.length>2096103.424&&h!==v))return navigator.msSaveBlob?navigator.msSaveBlob(g(r),p):A(r);s=(r=g(r)).type||d}else if(/([\x80-\xff])/.test(r)){for(var m=0,f=new Uint8Array(r.length),x=f.length;m<x;++m)f[m]=r.charCodeAt(m);r=new h([f],{type:s})}function g(e){for(var t=e.split(/[:;,]/),l=t[1],n=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),i=n.length,o=0,a=new Uint8Array(i);o<i;++o)a[o]=n.charCodeAt(o);return new h([a],{type:l})}function A(e,t){if("download"in u)return u.href=e,u.setAttribute("download",p),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout((function(){a.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,d)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var l=document.createElement("iframe");document.body.appendChild(l),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,d)),l.src=e,setTimeout((function(){document.body.removeChild(l)}),333)}if(i=r instanceof h?r:new h([r],{type:s}),navigator.msSaveBlob)return navigator.msSaveBlob(i,p);if(a.URL)A(a.URL.createObjectURL(i),!0);else{if("string"===typeof i||i.constructor===v)try{return A("data:"+s+";base64,"+a.btoa(i))}catch(j){return A("data:"+s+","+encodeURIComponent(i))}(o=new FileReader).onload=function(e){A(this.result)},o.readAsDataURL(i)}return!0}})?l.apply(t,n):l)||(e.exports=i)},48946:(e,t,l)=>{"use strict";l.d(t,{A:()=>i});var n=l(82371);const i={orderExport:(e,t)=>n.A.get(`dashboard/user/export/order/${e}/pdf`,{params:t,responseType:"blob"})}},65820:(e,t,l)=>{"use strict";l.d(t,{s:()=>a});var n=l(28429),i=l(21215),o=l.n(i);const a=()=>{const e=(0,n.Zp)(),t=(0,n.zy)(),l=o().parse(t.search,{ignoreQueryPrefix:!0});return{values:l,set:(t,n)=>e({search:o().stringify({...l,[t]:n})}),reset:t=>{const n={...l};n[t]&&delete n[t],e({search:o().stringify({...n})})},clear:()=>e({search:o().stringify({})}),merge:t=>e({search:o().stringify({...l,...t})})}}},72764:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>ie});var n=l(9950),i=l(54909),o=l(86971),a=l(12916),d=l(48538),s=l(80737),r=l(23263),c=l(81541),u=l(52913),v=l(28429),h=l(42074),p=l(24513),y=l(12678),m=l(44070),f=l(98114),x=l(13700),g=l(53387),A=l(91854),j=l(74623),w=l(83645),b=l(70030),k=l(88986),C=l(53177),_=l(8168),M=l(8297),S=l(51242),Y=l(53774),z=l(47992),D=l(53271),N=l(56592),O=l(23283),V=l(28645),H=l(90352),P=l(38635),$=l(26714),R=l(85923),B=l(35116),I=l(23758),T=l(55386),G=l(76083),U=l(59051),E=l.n(U),L=l(63620),K=l(39174),F=l(38525),Z=l(58547),X=l(65820),Q=l(91258),q=l(2905),W=l(78687),J=l(82206),ee=l(51066),te=l(44414);const{TabPane:le}=i.A,{RangePicker:ne}=o.A;function ie(){var e,t,l,o,U,ie,oe,ae,de,se,re,ce,ue,ve;const{type:he}=(0,v.g)(),pe=(0,A.wA)(),ye=(0,v.Zp)(),{t:me}=(0,b.B)(),{defaultCurrency:fe}=(0,A.d4)((e=>e.currency),A.bN),{statusList:xe}=(0,A.d4)((e=>e.orderStatus),A.bN),[ge,Ae]=(0,n.useState)(null),[je,we]=(0,n.useState)(null),[be,ke]=(0,n.useState)(null),[Ce,_e]=(0,n.useState)(null),[Me,Se]=(0,h.ok)(),Ye=Me.get("type"),ze=(0,ee.Q)(),De=[{name:"all",id:"0",active:!0,sort:0},...xe],Ne=e=>{pe((0,j.X4)({url:`order/details${2===e.type?"/seller":""}/${e.id}`,id:"order_details",name:me("order.details")})),ye(`/order/details${2===e.type?"/seller":""}/${e.id}`)},[Oe,Ve]=(0,n.useState)([{title:me("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:me("client"),is_show:!0,dataIndex:"user",key:"user",render:e=>e?(0,te.jsxs)("div",{children:[(null===e||void 0===e?void 0:e.firstname)||""," ",(null===e||void 0===e?void 0:e.lastname)||""]}):(0,te.jsx)(a.A,{color:"red",children:me("deleted.user")})},{title:me("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,te.jsxs)("div",{className:"cursor-pointer",children:["new"===e?(0,te.jsx)(a.A,{color:"blue",children:me(e)}):"canceled"===e?(0,te.jsx)(a.A,{color:"error",children:me(e)}):(0,te.jsx)(a.A,{color:"cyan",children:me(e)}),"delivered"!==e&&"canceled"!==e&&2!==t.type?(0,te.jsx)(p.A,{onClick:e=>{e.stopPropagation(),Ae(null===t||void 0===t?void 0:t.id)}}):""]})},{title:me("deliveryman"),is_show:!0,dataIndex:"deliveryman",key:"deliveryman",render:(e,t)=>(0,te.jsx)("div",{children:"ready"===t.status&&"delivery"===t.delivery_type&&2!==t.type?(0,te.jsx)(d.A,{type:"link",onClick:()=>_e(t),children:(0,te.jsxs)(s.A,{children:[e?`${e.firstname} ${e.lastname}`:me("add.deliveryman"),(0,te.jsx)(p.A,{})]})}):(0,te.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})})},{title:me("number.of.products"),dataIndex:"order_details_count",key:"order_details_count",is_show:!0,render:e=>(0,te.jsxs)("div",{className:"text-lowercase",children:[e||0," ",me("products")]})},{title:me("amount"),is_show:!0,dataIndex:"total_price",key:"total_price",render:(e,t)=>{var l,n,i,o;const a=null===(l=t.transaction)||void 0===l?void 0:l.status;return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{children:(0,Y.default)(e,null===t||void 0===t||null===(n=t.currency)||void 0===n?void 0:n.symbol,null===t||void 0===t||null===(i=t.currency)||void 0===i?void 0:i.position)}),(0,te.jsx)("br",{}),(0,te.jsx)("span",{className:"progress"===a?"text-primary":"paid"===a?"text-success":"rejected"===a?"text-danger":"text-info",children:null===(o=t.transaction)||void 0===o?void 0:o.status})]})}},{title:me("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:e=>{var t;return me(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}},{title:me("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at",render:e=>E()(e).format(`YYYY-MM-DD ${ze}`)},{title:me("delivery.date"),is_show:!0,dataIndex:"delivery_date",key:"delivery_date",render:e=>E()(e).format(`YYYY-MM-DD ${ze}`)},{title:me("options"),is_show:!0,key:"options",render:(e,t)=>(0,te.jsxs)(s.A,{children:[(0,te.jsx)(d.A,{icon:(0,te.jsx)(K.kMs,{}),onClick:e=>{e.stopPropagation(),we(t.id)}}),(0,te.jsx)(d.A,{icon:(0,te.jsx)(y.A,{}),onClick:e=>{e.stopPropagation(),Ne(t)}}),(0,te.jsx)(d.A,{type:"primary",icon:(0,te.jsx)(p.A,{}),onClick:e=>{e.stopPropagation(),(e=>{(0,A.vA)((()=>{pe((0,S.Uy)()),pe((0,j.X4)({url:`order/${e.id}`,id:"order_edit",name:me("edit.order")}))})),ye(`/order/${e.id}`)})(t)},disabled:"delivered"===t.status||"canceled"===t.status||2===t.type}),(0,te.jsx)(B.A,{icon:(0,te.jsx)(m.A,{}),onClick:e=>{e.stopPropagation(),Ee([t.id]),He(!0),Ke(!0)}}),(0,te.jsx)(d.A,{icon:(0,te.jsx)(f.A,{}),onClick:e=>{e.stopPropagation(),ke(t.id)}})]})}]),{setIsModalVisible:He}=(0,n.useContext)(T.o),[Pe,$e]=(0,n.useState)(!1),{activeMenu:Re}=(0,A.d4)((e=>e.menu),A.bN),Be=(0,X.s)(),[Ie,Te]=(0,n.useState)(Be.values.status||"all"),Ge=(null===(e=Re.data)||void 0===e?void 0:e.role)||Ie,[Ue,Ee]=(0,n.useState)(null),[Le,Ke]=(0,n.useState)(null),[Fe,Ze]=(0,n.useState)(!1),[Xe,Qe]=(0,n.useState)(E()().subtract(1,"months"),E()()),{orders:qe,loading:We,params:Je,meta:et}=(0,A.d4)((e=>e.orders),A.bN),tt=Re.data,lt={search:null===tt||void 0===tt?void 0:tt.search,sort:null===tt||void 0===tt?void 0:tt.sort,column:null===tt||void 0===tt?void 0:tt.column,perPage:null===tt||void 0===tt?void 0:tt.perPage,page:null===tt||void 0===tt?void 0:tt.page,user_id:null===tt||void 0===tt?void 0:tt.user_id,region_id:null===tt||void 0===tt||null===(t=tt.region)||void 0===t?void 0:t.value,country_id:null===tt||void 0===tt||null===(l=tt.country)||void 0===l?void 0:l.value,city_id:null===tt||void 0===tt||null===(o=tt.city)||void 0===o?void 0:o.value,status:"all"===Ge?void 0:Ge,type:"all"===Ye?void 0:"1",shop_id:null!==(null===(U=Re.data)||void 0===U?void 0:U.shop_id)?null===(ie=Re.data)||void 0===ie?void 0:ie.shop_id:null,delivery_type:"scheduled"!==he?he:void 0,delivery_date_from:"scheduled"===he?E()().add(1,"day").format("YYYY-MM-DD"):void 0,date_from:(null===Xe||void 0===Xe||null===(oe=Xe[0])||void 0===oe?void 0:oe.format("YYYY-MM-DD"))||null,date_to:(null===Xe||void 0===Xe||null===(ae=Xe[1])||void 0===ae?void 0:ae.format("YYYY-MM-DD"))||null};(0,k.A)((()=>{pe((0,C.Gb)(lt))}),[tt,Xe,he]);const nt=(e,t)=>{pe((0,j.Ok)({activeMenu:Re,data:{...tt,[t]:e}}))};const it=()=>{Ae(null),_e(null),we(null),ke(null)};(0,n.useEffect)((()=>{(0,A.vA)((()=>{pe((0,C.Gb)(lt)),pe((0,j.km)(Re))}))}),[null===Re||void 0===Re?void 0:Re.refetch,Ye]),(0,n.useEffect)((()=>{pe((0,H.rA)({}));const e=(0,w.A)((()=>pe((0,C.Gb)(lt))));return()=>clearInterval(e)}),[]);const ot={selectedRowKeys:Ue,onChange:e=>{Ee(e)}};return(0,te.jsxs)(te.Fragment,{children:[(0,te.jsxs)(s.A,{className:"justify-content-end w-100 mb-3",children:["all"!==Ye&&(0,te.jsx)(Q.A,{listType:"orders"}),(0,te.jsxs)(d.A,{onClick:()=>{$e(!0),I.A.export(lt).then((e=>{var t;return window.location.href=L.bb+(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.file_name)})).finally((()=>$e(!1)))},loading:Pe,style:{width:"100%"},children:[(0,te.jsx)(F.$tV,{className:"mr-2"}),me("export")]}),(0,te.jsx)(d.A,{onClick:()=>{(0,A.vA)((()=>{pe((0,C.gw)()),pe((0,j.Ok)({activeMenu:Re,data:null})),pe((0,C.Gb)({status:null,page:null===tt||void 0===tt?void 0:tt.page,perPage:20}))}))},style:{width:"100%"},icon:(0,te.jsx)(x.A,{}),children:me("clear")}),(0,te.jsx)(d.A,{type:"primary",icon:(0,te.jsx)(g.A,{}),onClick:()=>{(0,A.vA)((()=>{pe((0,S.Uy)()),pe((0,j.wr)({id:"pos.system_01",name:"pos.system",url:"pos-system"}))})),ye("/pos-system")},style:{width:"100%"},children:me("add.order")})]}),(0,te.jsx)(r.A,{children:(0,te.jsxs)(s.A,{wrap:!0,className:"order-filter",children:[(0,te.jsx)(M.A,{defaultValue:null===tt||void 0===tt?void 0:tt.search,resetSearch:!(null!==tt&&void 0!==tt&&tt.search),placeholder:me("search"),handleChange:e=>nt(e,"search")}),(0,te.jsx)(z.G,{placeholder:me("select.shop"),fetchOptions:async function(e){const t={search:e,status:"approved"};return Z.A.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},style:{width:"100%"},onSelect:e=>nt(e.value,"shop_id"),onDeselect:()=>nt(null,"shop_id"),allowClear:!0,value:null===tt||void 0===tt?void 0:tt.shop_id}),(0,te.jsx)(z.G,{placeholder:me("select.client"),fetchOptions:async function(e){const t={search:e,perPage:10};return D.A.search(t).then((e=>{let{data:t}=e;return t.map((e=>({label:`${null===e||void 0===e?void 0:e.firstname} ${null===e||void 0===e?void 0:e.lastname}`,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id})))}))},onSelect:e=>nt(e.value,"user_id"),onDeselect:()=>nt(null,"user_id"),style:{width:"100%"},value:null===tt||void 0===tt?void 0:tt.user_id}),(0,te.jsx)(z.G,{placeholder:me("select.region"),fetchOptions:e=>{const t={search:e,perPage:10,page:1};return q.A.get(t).then((e=>{let{data:t}=e;return null===t||void 0===t?void 0:t.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},onSelect:e=>{pe((0,j.Ok)({activeMenu:Re,data:{...tt,region:e,country:null,city:null}}))},onDeselect:()=>{pe((0,j.Ok)({activeMenu:Re,data:{...tt,region:null,country:null,city:null}}))},allowClear:!0,style:{width:"100%"},value:null===tt||void 0===tt?void 0:tt.region,autoComplete:"none"}),(0,te.jsx)(z.G,{placeholder:me("select.country"),fetchOptions:e=>{var t,l;const n={search:e,perPage:10,page:1,region_id:null===Re||void 0===Re||null===(t=Re.data)||void 0===t||null===(l=t.region)||void 0===l?void 0:l.value};return W.A.get(n).then((e=>{let{data:t}=e;return null===t||void 0===t?void 0:t.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},refetchOptions:!0,onSelect:e=>{pe((0,j.Ok)({activeMenu:Re,data:{...tt,country:e,city:null}}))},onDeselect:()=>{pe((0,j.Ok)({activeMenu:Re,data:{...tt,country:null,city:null}}))},style:{width:"100%"},value:null===tt||void 0===tt?void 0:tt.country,autoComplete:"none",disabled:!(null!==tt&&void 0!==tt&&null!==(de=tt.region)&&void 0!==de&&de.value),allowClear:!0}),(0,te.jsx)(z.G,{placeholder:me("select.city"),fetchOptions:e=>{var t,l;const n={search:e,perPage:10,page:1,country_id:null===Re||void 0===Re||null===(t=Re.data)||void 0===t||null===(l=t.country)||void 0===l?void 0:l.value};return J.A.get(n).then((e=>{let{data:t}=e;return null===t||void 0===t?void 0:t.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},refetchOptions:!0,onSelect:e=>pe((0,j.Ok)({activeMenu:Re,data:{...tt,city:e}})),onDeselect:()=>pe((0,j.Ok)({activeMenu:Re,data:{...tt,city:null}})),style:{width:"100%"},value:null===tt||void 0===tt?void 0:tt.city,autoComplete:"none",disabled:!(null!==tt&&void 0!==tt&&null!==(se=tt.country)&&void 0!==se&&se.value)||!(null!==tt&&void 0!==tt&&null!==(re=tt.region)&&void 0!==re&&re.value),allowClear:!0}),(0,te.jsx)(ne,{value:Xe,onChange:e=>{nt((t=>{var l,n;return{...t,date_from:null===e||void 0===e||null===(l=e[0])||void 0===l?void 0:l.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(n=e[1])||void 0===n?void 0:n.format("YYYY-MM-DD")}})),Qe(e)},disabledDate:e=>e&&e>E()().endOf("day"),style:{width:"250px"}})]})}),(0,te.jsxs)(r.A,{children:[(0,te.jsxs)(s.A,{className:"justify-content-between align-items-start w-100",children:[(0,te.jsx)(i.A,{onChange:e=>{const t=e;pe((0,j.Ok)({activeMenu:Re,data:{role:t,page:1}})),Te(e),Me.set("status",t),Se(Me)},type:"card",activeKey:Ge,children:De.filter((e=>!0===e.active)).map((e=>(0,te.jsx)(le,{tab:me(e.name)},e.name)))}),(0,te.jsxs)(s.A,{children:[(0,te.jsx)(c.A,{title:me("delete.selected"),children:(0,te.jsx)(B.A,{type:"primary",onClick:()=>{null===Ue||0===Ue.length?R.oR.warning(me("select.the.product")):(He(!0),Ke(!1))}})}),(0,te.jsx)(V.A,{setColumns:Ve,columns:Oe,iconOnly:!0})]})]}),(0,te.jsx)(u.A,{scroll:{x:!0},rowSelection:ot,columns:null===Oe||void 0===Oe?void 0:Oe.filter((e=>e.is_show)),dataSource:qe,loading:We,pagination:{pageSize:Je.perPage,page:(null===(ce=Re.data)||void 0===ce?void 0:ce.page)||1,total:null===et||void 0===et?void 0:et.total,defaultCurrent:null===(ue=Re.data)||void 0===ue?void 0:ue.page,current:null===(ve=Re.data)||void 0===ve?void 0:ve.page},rowKey:e=>e.id,onChange:function(e,t,l){const{pageSize:n,current:i}=e,{field:o,order:a}=l,d=(0,_.A)(a);pe((0,j.Ok)({activeMenu:Re,data:{...tt,perPage:n,page:i,column:o,sort:d}}))},onRow:e=>({onClick:()=>{Ne(e)}})})]}),ge&&(0,te.jsx)(N.A,{orderId:ge,handleCancel:it,refetchPage:()=>(0,A.vA)((()=>{pe((0,C.Gb)(lt)),pe((0,j.km)(Re))}))}),Ce&&(0,te.jsx)(O.A,{orderDetails:Ce,handleCancel:it}),je&&(0,te.jsx)(P.A,{id:je,handleCancel:it}),be&&(0,te.jsx)($.A,{id:be,handleCancel:it}),(0,te.jsx)(G.A,{click:()=>{Ze(!0);const e={...Object.assign({},...Ue.map(((e,t)=>({[`ids[${t}]`]:e}))))};I.A.delete(e).then((()=>{R.oR.success(me("successfully.deleted")),He(!1),pe((0,C.Gb)(lt)),Ke(null)})).finally((()=>{Ee(null),Ze(!1)}))},text:me(Le?"delete":"all.delete"),loading:Fe,setText:Ee})]})}},83645:(e,t,l)=>{"use strict";l.d(t,{A:()=>a});var n=l(17706),i=l(80415);const o=2147483647;function a(e){let t=((e,t,l)=>{const o=Number(null===(e=n.M.getState())||void 0===e||null===(t=e.globalSettings)||void 0===t||null===(l=t.settings)||void 0===l?void 0:l.order_refresh_timeout);return!isNaN(o)?o:i.PR})();return t?(t>o&&(t=o),setInterval((()=>{e()}),1e3*Number(t))):null}},89323:(e,t,l)=>{"use strict";l.d(t,{A:()=>s});var n=l(89379),i=l(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=l(25085),d=function(e,t){return i.createElement(a.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:o}))};const s=i.forwardRef(d)},91258:(e,t,l)=>{"use strict";l.d(t,{A:()=>r});var n=l(24893),i=(l(9950),l(50384)),o=l(26678),a=l(28429),d=l(44414);const s=[{value:"orders-board",title:"Board",icon:(0,d.jsx)(o.oeo,{size:20})},{value:"orders",title:"List",icon:(0,d.jsx)(i.AyK,{size:20})}],r=e=>{let{listType:t}=e;const{type:l}=(0,a.g)(),i=(0,a.Zp)();return(0,d.jsx)(n.Ay.Group,{value:t,onChange:e=>{i(`/${e.target.value}${l?`/${l}`:""}`)},className:"float-right",buttonStyle:"solid",children:null===s||void 0===s?void 0:s.map((e=>(0,d.jsx)(n.Ay.Button,{value:e.value,children:(0,d.jsxs)("div",{className:"d-flex align-items-center",style:{gap:"10px"},children:[e.icon,e.title]})},e.value)))})}}}]);