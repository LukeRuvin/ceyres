"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4446],{4895:(e,t,l)=>{l.d(t,{A:()=>v});l(9950);var a=l(23263),n=l(80737),i=l(48538),s=l(70030),r=l(72540),o=l(88349),d=l(85923),c=l(9320),u=l(91854),p=l(44414);function v(e){let{prev:t,next:l}=e;const{t:v}=(0,s.B)(),{activeMenu:m}=(0,u.d4)((e=>e.menu),u.bN);return(0,p.jsxs)(a.A,{bordered:!1,className:"mb-0",children:[(0,p.jsxs)(r.A,{name:"file",multiple:!1,maxCount:1,customRequest:e=>{var t;let{file:l,onSuccess:a,onError:n}=e;const i=new FormData;i.append("file",l),i.append("active",1),i.append("product_id",null===(t=m.data)||void 0===t?void 0:t.id),c.A.create(i).then((()=>{d.oR.success(v("successfully.import")),a("ok")})).catch((e=>{console.log("upload error",e),n("error"),d.oR.error(v("file.upload.error"))}))},accept:".zip",children:[(0,p.jsx)("p",{className:"ant-upload-drag-icon",children:(0,p.jsx)(o.A,{})}),(0,p.jsx)("p",{className:"ant-upload-text",children:v("upload-drag")}),(0,p.jsx)("p",{className:"ant-upload-hint",children:v("upload-text")})]}),(0,p.jsxs)(n.A,{className:"mt-3",children:[(0,p.jsx)(i.A,{onClick:t,children:v("prev")}),(0,p.jsx)(i.A,{type:"primary",onClick:l,children:v("next")})]})]})}},9320:(e,t,l)=>{l.d(t,{A:()=>n});var a=l(82371);const n={create:e=>a.A.post("dashboard/admin/digital-files",e,{})}},29657:(e,t,l)=>{l.d(t,{A:()=>A});var a=l(9950),n=l(98485),i=l(74635),s=l(23263),r=l(81541),o=l(80737),d=l(87094),c=l(41988),u=l(74947),p=l(40895),v=l(48538),m=l(44738),x=l(91854),f=l(62341),h=l(47933),g=l(44414);const A=e=>{var t;let{prev:l,next:A}=e;const[j,y]=(0,a.useState)([]),{activeMenu:b}=(0,x.d4)((e=>e.menu),x.bN),{newExtras:k}=(null===b||void 0===b?void 0:b.data)||{},C=(0,a.useMemo)((()=>null===k||void 0===k?void 0:k.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[k]),N=Array.from(new Set(null===C||void 0===C||null===(t=C.values)||void 0===t?void 0:t.map((e=>e.value)))).map((e=>{var t;return null===C||void 0===C||null===(t=C.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type)),S=e=>({uid:e.path,name:e.path,status:"done",url:e.path,created:!0});return(0,a.useEffect)((()=>{(()=>{const e=b.data.stocks.map((e=>{let{id:t,galleries:l}=e;return{id:t,images:(null===l||void 0===l?void 0:l.map(S))||[]}}));y(e)})()}),[b.data]),(0,g.jsxs)(s.A,{title:(0,g.jsx)(r.A,{placement:"topLeft",title:"In the process of internal desktop applications development",children:(0,g.jsxs)(o.A,{children:[(0,i.t)("add.media.file"),(0,g.jsx)(n.A,{style:{fontSize:16,cursor:"pointer"}})]})}),children:[(0,g.jsx)(d.A,{gutter:[24,24],children:null===N||void 0===N?void 0:N.map((e=>{let{label:t,stock_id:l,value:a}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c.A,{span:24,children:[(0,g.jsx)(o.A,{className:"mb-4",children:(0,g.jsx)(u.A,{color:t||a,className:"extras-color-badge",text:`${t||a} - ${(0,m.n)(t||a)}`})}),(0,g.jsx)(f.A,{id:l,fileList:j,setFileList:y,type:"stocks"})]}),(0,g.jsx)(p.A,{})]})}))}),(0,g.jsxs)(o.A,{className:"mt-4",children:[(0,g.jsx)(v.A,{onClick:l,children:(0,i.t)("prev")}),(0,g.jsx)(v.A,{type:"primary",htmlType:"submit",onClick:()=>{if(!j.length)return void A();const e=j.map((e=>({...e,images:e.images.map((e=>e.name))})));h.A.updateStocks({data:e}).then((()=>{A()})).catch((e=>{console.log(e)}))},children:(0,i.t)("next")})]})]})}},62341:(e,t,l)=>{l.d(t,{A:()=>u});var a=l(9950),n=l(90650),i=l(66876),s=l(92759),r=l(8750),o=l(64924),d=l(70030),c=l(44414);const u=e=>{let{fileList:t=[],setFileList:l,type:u,id:p}=e;const{t:v}=(0,d.B)(),[m,x]=(0,a.useState)(!1),f=m?(0,c.jsx)(n.A,{}):(0,c.jsx)(r.A,{}),h=t.find((e=>e.id===p))||[];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.A,{listType:"picture-card",fileList:(null===h||void 0===h?void 0:h.galleries)||(null===h||void 0===h?void 0:h.images),customRequest:e=>{let{file:a,onSuccess:n}=e;x(!0);const i=new FormData;i.append("image",a),i.append("type",u),o.A.upload(i).then((e=>{let{data:a}=e;((e,a)=>{if(t.findIndex((t=>t.id===e))>=0){const n=t.map((t=>t.id===e?{id:e,images:[...t.images,a]}:t));l(n)}else l((t=>[...t,{id:e,images:[a]}]))})(p,(e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0}))(a)),n("ok")})).finally((()=>{x(!1)}))},onRemove:e=>{const a=t.map((t=>{if(t.id===p){const l=t.images.filter((t=>t.uid!==e.uid));return 0===l.length?null:{...t,images:l}}return t})).filter((e=>null!==e));l(a)},showUploadList:!0,accept:".png,.jpg,.jpeg,.webp",beforeUpload:e=>!!(e.size/1024/1024<2)||(s.Ay.error(v("max.2.mb")),!1),children:f})})}},65820:(e,t,l)=>{l.d(t,{s:()=>s});var a=l(28429),n=l(21215),i=l.n(n);const s=()=>{const e=(0,a.Zp)(),t=(0,a.zy)(),l=i().parse(t.search,{ignoreQueryPrefix:!0});return{values:l,set:(t,a)=>e({search:i().stringify({...l,[t]:a})}),reset:t=>{const a={...l};a[t]&&delete a[t],e({search:i().stringify({...a})})},clear:()=>e({search:i().stringify({})}),merge:t=>e({search:i().stringify({...l,...t})})}}},84446:(e,t,l)=>{l.r(t),l.d(t,{default:()=>C});var a=l(9950),n=l(49326),i=l(86366),s=l(23263),r=l(90650),o=l(82498),d=l(57844),c=l(649),u=l(59585),p=l(44832),v=l(71999),m=l(28429),x=l(47933),f=l(91854),h=l(74623),g=l(70030),A=l(65820),j=l(4895),y=l(29657),b=l(44414);const{Step:k}=i.A,C=()=>{var e,t,l,C,N;const{t:S}=(0,g.B)(),{uuid:w}=(0,m.g)(),F=(0,A.s)(),{activeMenu:L}=(0,f.d4)((e=>e.menu),f.bN),{languages:z}=(0,f.d4)((e=>e.formLang),f.bN),M=(0,f.wA)(),$=Number((null===(e=F.values)||void 0===e?void 0:e.step)||0),[E,R]=(0,a.useState)(L.refetch),[B,_]=(0,a.useState)(n.C),{extras:I}=(null===L||void 0===L?void 0:L.data)||{},O=null===L||void 0===L||null===(t=L.data)||void 0===t?void 0:t.digital,T=null===I||void 0===I?void 0:I.some((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)})),q=(0,a.useMemo)((()=>null===I||void 0===I?void 0:I.find((e=>{var t;return"color"===(null===e||void 0===e||null===(t=e.group)||void 0===t?void 0:t.type)}))),[I]),D=Array.from(new Set(null===q||void 0===q||null===(l=q.values)||void 0===l?void 0:l.map((e=>e.value)))).map((e=>{var t;return null===q||void 0===q||null===(t=q.values)||void 0===t?void 0:t.find((t=>t.value===e))})).filter((e=>"color"===e.group_type)),G=()=>{const e=$+1;F.set("step",e)},P=()=>{const e=$-1;F.set("step",e)},U=e=>e?{label:e.translation?e.translation.title:e.title,value:e.id}:null;function Q(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,l=z.map((e=>{var l,a;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...l)}(0,a.useEffect)((()=>{L.refetch&&function(e){R(!0),x.A.getById(e).then((e=>{const t={...e.data,...Q(e.data),shop:U(e.data.shop),category:U(e.data.category),brand:U(e.data.brand),unit:U(e.data.unit),images:(l=e.data.galleries,l.map((e=>({uid:e.id,name:e.path,url:e.path})))),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};var l;M((0,h.Ok)({activeMenu:L,data:t}))})).finally((()=>{R(!1),M((0,h.km)(L))}))}(w)}),[L.refetch]);return(0,a.useEffect)((()=>{O?_(n.C.filter((e=>"product.extras"!==e.title))):!1===O&&_(n.C.filter((e=>"product.digital"!==e.title))),_(T?e=>e:e=>e.filter((e=>"Gallery"!==e.title)))}),[T,O]),(0,b.jsxs)(s.A,{title:S("clone.product"),extra:(0,b.jsx)(v.A,{}),children:[(0,b.jsx)(i.A,{current:$,onChange:e=>{M((0,h.Ok)({activeMenu:L,data:{...L.data,step:e}})),F.set("step",e)},children:n.C.map((e=>(0,b.jsx)(k,{title:S(e.title)},e.title)))}),E?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(r.A,{size:"large",className:"py-5"})}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===n.C[$].content&&(0,b.jsx)(p.A,{next:G}),(null===(C=L.data)||void 0===C?void 0:C.digital)&&"Product-digital"===B[$].content&&(0,b.jsx)(j.A,{next:G,prev:P}),!(null!==(N=L.data)&&void 0!==N&&N.digital)&&"Second-content"===B[$].content&&(0,b.jsx)(u.A,{next:G,prev:P}),"Third-content"===n.C[$].content&&(0,b.jsx)(c.A,{next:G,prev:P}),(null===D||void 0===D?void 0:D.length)>0&&"Gallery-content"===n.C[$].content&&(0,b.jsx)(y.A,{next:G,prev:P}),"Fourth-content"===n.C[$].content&&(0,b.jsx)(o.A,{next:G,prev:P}),"Finish-content"===n.C[$].content&&(0,b.jsx)(d.A,{prev:P})]})]})}}}]);