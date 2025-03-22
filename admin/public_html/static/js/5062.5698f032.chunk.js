"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5062],{6566:(e,l,i)=>{i.d(l,{A:()=>n});var d=i(17706);const n=()=>{var e,l;const i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IS_DEMO:"true"}.MAP_API_KEY,{google_map_key:n}=null===(e=d.M.getState())||void 0===e||null===(l=e.globalSettings)||void 0===l?void 0:l.settings;return n||i}},12970:(e,l,i)=>{function d(e){var l,i;let d=null===e||void 0===e?void 0:e.slice(0,1),n=null===e||void 0===e?void 0:e.lastIndexOf("@"),s=null===e||void 0===e?void 0:e.slice(1,n-1);s=null===(l=s)||void 0===l?void 0:l.replace(/./g,"*");let o=null===e||void 0===e?void 0:e.slice(n-1,e.length);return null===d||void 0===d||null===(i=d.concat(s))||void 0===i?void 0:i.concat(o)}i.d(l,{A:()=>d})},15062:(e,l,i)=>{i.r(l),i.d(l,{default:()=>W});var d=i(9950),n=i(80737),s=i(12916),o=i(72243),r=i(52913),t=i(23263),a=i(87094),c=i(41988),u=i(66362),v=i(74522),x=i(86366),h=i(90650),m=i(91524),p=i(48538),j=i(98252),y=i(74947),A=i(40895),g=i(99083),f=i(81419),b=i(24513),_=i(28429),N=i(42074),k=i(23758),w=i(69554),I=i(91854),Y=i(74623),S=i(70030),C=i(53774),D=i(31222),M=i(38635),$=i(74930),z=i(50384),R=i(39174),B=i(59051),q=i.n(B),H=i(90352),T=i(13311),E=i(12970),F=i(94117),L=i(85923),O=i(79930),P=i(91030),K=i(51066),V=i(44414);function W(){var e,l,i,B,W,G,Z,U,Q,X,J,ee,le,ie,de,ne,se,oe,re,te,ae,ce,ue,ve,xe,he,me,pe,je,ye,Ae,ge,fe,be,_e,Ne,ke,we,Ie,Ye,Se,Ce,De,Me,$e,ze,Re,Be,qe,He,Te,Ee,Fe,Le,Oe,Pe,Ke,Ve,We,Ge,Ze,Ue,Qe,Xe,Je,el,ll,il,dl,nl,sl,ol,rl,tl,al;const{activeMenu:cl}=(0,I.d4)((e=>e.menu),I.bN),{defaultCurrency:ul}=(0,I.d4)((e=>e.currency),I.bN),{defaultLang:vl}=(0,I.d4)((e=>e.formLang),I.bN),xl=cl.data,{t:hl}=(0,S.B)(),{id:ml}=(0,_.g)(),pl=(0,I.wA)(),jl=(0,_.Zp)(),yl=(0,d.useRef)(),Al=(0,d.useRef)(),{isDemo:gl}=(0,T.A)(),[fl,bl]=(0,d.useState)(null),[_l,Nl]=(0,d.useState)(!1),[kl,wl]=(0,d.useState)(!1),{statusList:Il}=(0,I.d4)((e=>e.orderStatus),I.bN),Yl=(0,K.Q)(),[Sl,Cl]=(0,d.useState)(!1),Dl=[{title:hl("id"),dataIndex:"id",key:"id",render:(e,l)=>{var i;return null===(i=l.stock)||void 0===i?void 0:i.id}},{title:hl("product.name"),dataIndex:"product",key:"product",render:(e,l)=>{var i,d,o,r,t;return(0,V.jsxs)(n.A,{direction:"vertical",className:"relative",children:[null===(i=l.stock)||void 0===i||null===(d=i.product)||void 0===d||null===(o=d.translation)||void 0===o?void 0:o.title,null===(r=l.stock)||void 0===r||null===(t=r.extras)||void 0===t?void 0:t.map((e=>{var l,i,d,n,o;return(0,V.jsxs)(s.A,{style:{display:"flex",width:"fit-content",justifyContent:"start",alignItems:"center",columnGap:"5px"},children:[null===(l=e.group)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title,":"," ","color"===(null===(d=e.group)||void 0===d?void 0:d.type)?(0,V.jsx)("span",{style:{display:"block",width:"19px",height:"19px",backgroundColor:null===(n=e.value)||void 0===n?void 0:n.value,border:"1px solid #080136",borderRadius:"50%"}}):null===(o=e.value)||void 0===o?void 0:o.value]},null===e||void 0===e?void 0:e.id)}))]})}},{title:hl("image"),dataIndex:"img",key:"img",render:(e,l)=>{var i,d;return(0,V.jsx)(o.A,{src:(0,w.A)(null===(i=l.stock)||void 0===i||null===(d=i.product)||void 0===d?void 0:d.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:hl("price"),dataIndex:"origin_price",key:"origin_price",render:(e,l)=>{var i,d,n;return(0,C.default)(null===l||void 0===l||null===(i=l.stock)||void 0===i?void 0:i.price,null===xl||void 0===xl||null===(d=xl.currency)||void 0===d?void 0:d.symbol,null===xl||void 0===xl||null===(n=xl.currency)||void 0===n?void 0:n.position)}},{title:hl("quantity"),dataIndex:"quantity",key:"quantity",render:e=>(0,V.jsx)("span",{children:e})},{title:hl("discount"),dataIndex:"rate_discount",key:"rate_discount",render:(e,l)=>{var i,d,n;return(0,C.default)(null===l||void 0===l||null===(i=l.stock)||void 0===i?void 0:i.discount,null===xl||void 0===xl||null===(d=xl.currency)||void 0===d?void 0:d.symbol,null===xl||void 0===xl||null===(n=xl.currency)||void 0===n?void 0:n.position)}},{title:hl("tax"),dataIndex:"tax",key:"tax",render:(e,l)=>{var i,d;return(0,C.default)(null===l||void 0===l?void 0:l.tax,null===xl||void 0===xl||null===(i=xl.currency)||void 0===i?void 0:i.symbol,null===xl||void 0===xl||null===(d=xl.currency)||void 0===d?void 0:d.position)}},{title:hl("total.price"),dataIndex:"total_price",key:"total_price",render:(e,l)=>{var i,d;return(0,C.default)(null===l||void 0===l?void 0:l.total_price,null===xl||void 0===xl||null===(i=xl.currency)||void 0===i?void 0:i.symbol,null===xl||void 0===xl||null===(d=xl.currency)||void 0===d?void 0:d.position)}}],Ml=[{title:hl("date"),dataIndex:"date",key:"date",render:e=>q()(e).format(`YYYY-MM-DD ${Yl}`)},{title:hl("document"),dataIndex:"document",key:"document"},{title:hl("number"),dataIndex:"number",key:"number"},{title:hl("total.price"),dataIndex:"price",key:"price"}],$l=[{price:(0,C.default)(null===xl||void 0===xl?void 0:xl.total_price,null===xl||void 0===xl||null===(e=xl.currency)||void 0===e?void 0:e.symbol,null===xl||void 0===xl||null===(l=xl.currency)||void 0===l?void 0:l.position),number:(0,V.jsxs)(N.N_,{to:`/orders/generate-invoice/${null===xl||void 0===xl?void 0:xl.id}`,children:["#",null===xl||void 0===xl?void 0:xl.id]}),document:hl("invoice"),date:q()(null===xl||void 0===xl?void 0:xl.created_at).format("YYYY-MM-DD HH:mm")},{price:"-",number:(0,V.jsxs)(N.N_,{to:`/orders/generate-invoice/${null===xl||void 0===xl?void 0:xl.id}`,children:["#",null===xl||void 0===xl?void 0:xl.id]}),document:hl("delivery.receipt"),date:q()(null===xl||void 0===xl?void 0:xl.created_at).format("YYYY-MM-DD HH:mm")}];function zl(){Nl(!0),k.A.getById(ml).then((e=>{let{data:l}=e;pl((0,Y.Ok)({activeMenu:cl,data:l}))})).finally((()=>{Nl(!1),pl((0,Y.km)(cl))}))}const Rl=(0,d.useCallback)((e=>{Cl(!0),k.A.updateTracking(null===xl||void 0===xl?void 0:xl.id,e).then((()=>{L.oR.success(hl("successfully.updated")),zl()})).finally((()=>{Cl(!1)}))}),[null===xl||void 0===xl?void 0:xl.id]);(0,d.useEffect)((()=>{cl.refetch&&(zl(),0===Il.length&&pl((0,H.rA)({})))}),[cl.refetch]);return(0,V.jsxs)("div",{className:"order_details",children:[(0,V.jsx)(t.A,{className:"order-details-info",title:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)($.iHs,{className:"mr-2 icon"}),`${hl("order")} ${null!==xl&&void 0!==xl&&xl.id?`#${null===xl||void 0===xl?void 0:xl.id} `:""}`," ",hl("from.order")," ",null===xl||void 0===xl||null===(i=xl.user)||void 0===i?void 0:i.firstname," ",(null===xl||void 0===xl||null===(B=xl.user)||void 0===B?void 0:B.lastname)||""]})}),(0,V.jsxs)(a.A,{gutter:24,children:[(0,V.jsx)(c.A,{span:24,children:(0,V.jsx)(t.A,{children:(0,V.jsxs)(n.A,{className:"justify-content-between w-100",children:[(0,V.jsxs)(n.A,{className:"align-items-start",children:[(0,V.jsx)(f.A,{className:"order-card-icon"}),(0,V.jsxs)("div",{className:"d-flex flex-column",children:[(0,V.jsx)(u.A.Text,{children:hl("delivery.date")}),_l?(0,V.jsx)(v.A.Button,{size:16}):(0,V.jsxs)(u.A.Text,{className:"order-card-title",children:[q()(null===xl||void 0===xl?void 0:xl.delivery_date).format(`YYYY-MM-DD ${Yl}`)," ",null===xl||void 0===xl?void 0:xl.delivery_time]})]})]}),(0,V.jsxs)(n.A,{className:"align-items-start",onClick:()=>Al.current.scrollIntoView({behavior:"smooth"}),children:[(0,V.jsx)(R.aOb,{className:"order-card-icon"}),(0,V.jsxs)("div",{className:"d-flex flex-column",children:[(0,V.jsx)(u.A.Text,{children:hl("total.price")}),_l?(0,V.jsx)(v.A.Button,{size:16,loading:_l}):(0,V.jsx)(u.A.Text,{className:"order-card-title",children:(0,C.default)(null===xl||void 0===xl?void 0:xl.total_price,null===xl||void 0===xl||null===(W=xl.currency)||void 0===W?void 0:W.symbol,null===xl||void 0===xl||null===(G=xl.currency)||void 0===G?void 0:G.position)})]})]}),(0,V.jsxs)(n.A,{className:"align-items-start",children:[(0,V.jsx)(R.j6C,{className:"order-card-icon"}),(0,V.jsxs)("div",{className:"d-flex flex-column",children:[(0,V.jsx)(u.A.Text,{children:hl("messages")}),_l?(0,V.jsx)(v.A.Button,{size:16}):(0,V.jsx)(u.A.Text,{className:"order-card-title",children:null!==xl&&void 0!==xl&&xl.review?1:0})]})]}),(0,V.jsxs)(n.A,{className:"align-items-start",onClick:()=>yl.current.scrollIntoView({behavior:"smooth"}),children:[(0,V.jsx)($.iHs,{className:"order-card-icon"}),(0,V.jsxs)("div",{className:"d-flex flex-column",children:[(0,V.jsx)(u.A.Text,{children:hl("products")}),_l?(0,V.jsx)(v.A.Button,{size:16}):(0,V.jsx)(u.A.Text,{className:"order-card-title",children:null===xl||void 0===xl||null===(Z=xl.details)||void 0===Z?void 0:Z.reduce(((e,l)=>e+l.quantity),0)})]})]})]})})}),"canceled"!==(null===xl||void 0===xl?void 0:xl.status)&&(0,V.jsx)(c.A,{span:24,children:(0,V.jsx)(t.A,{children:(0,V.jsx)(x.A,{current:null===Il||void 0===Il?void 0:Il.findIndex((e=>e.name===(null===xl||void 0===xl?void 0:xl.status))),children:null===Il||void 0===Il?void 0:Il.slice(0,-1).map((e=>(0,V.jsx)(x.A.Step,{title:hl(e.name)},e.id)))})})}),(0,V.jsxs)(c.A,{span:16,children:[(0,V.jsx)(h.A,{spinning:_l,children:(0,V.jsxs)(t.A,{style:{minHeight:"200px"},children:[(0,V.jsxs)("h3",{children:[hl("details"),":"]}),(0,V.jsxs)(a.A,{hidden:_l,className:"mb-3 order_detail",gutter:10,children:[(0,V.jsxs)(c.A,{span:12,children:[(0,V.jsxs)("div",{children:[hl("created.date.&.time"),":",(0,V.jsxs)("span",{className:"ml-2",children:[(0,V.jsx)(z.cCc,{className:"mr-1"})," ",q()(null===xl||void 0===xl?void 0:xl.created_at).format(`YYYY-MM-DD ${Yl}`)," "]})]}),(0,V.jsx)("br",{}),(0,V.jsxs)("div",{children:[hl("delivery.date.&.time"),":",(0,V.jsxs)("span",{className:"ml-2",children:[(0,V.jsx)(z.cCc,{className:"mr-1"})," ",q()(null===xl||void 0===xl?void 0:xl.delivery_date).format(`YYYY-MM-DD ${Yl}`)," ",null===xl||void 0===xl?void 0:xl.delivery_time]})]}),(0,V.jsx)("br",{}),(0,V.jsxs)("div",{children:[hl("payment.status"),":",(0,V.jsxs)("span",{style:{cursor:"pointer"},className:"ml-2",onClick:()=>wl(!0),children:[hl(null===xl||void 0===xl||null===(U=xl.transaction)||void 0===U?void 0:U.status)," ",(0,V.jsx)(b.A,{})]})]}),(0,V.jsx)("br",{}),(0,V.jsxs)("div",{children:[hl("note"),":",(0,V.jsx)("span",{className:"ml-2",children:hl(null!==xl&&void 0!==xl&&xl.note?null===xl||void 0===xl?void 0:xl.note:"")})]})]}),(0,V.jsxs)(c.A,{span:12,children:[(0,V.jsxs)("div",{children:[hl("status"),":",(0,V.jsx)("span",{className:"ml-2",children:"new"===(null===xl||void 0===xl?void 0:xl.status)?(0,V.jsx)(s.A,{color:"blue",children:hl(null===xl||void 0===xl?void 0:xl.status)}):"canceled"===(null===xl||void 0===xl?void 0:xl.status)?(0,V.jsx)(s.A,{color:"error",children:hl(null===xl||void 0===xl?void 0:xl.status)}):(0,V.jsx)(s.A,{color:"cyan",children:hl(null===xl||void 0===xl?void 0:xl.status)})})]}),(0,V.jsx)("br",{}),(0,V.jsxs)("div",{children:[hl("delivery.type"),":",(0,V.jsx)("span",{className:"ml-2",children:null===xl||void 0===xl?void 0:xl.delivery_type})]}),(0,V.jsx)("br",{}),(0,V.jsxs)("div",{children:[hl("payment.type"),":",(0,V.jsx)("span",{className:"ml-2",children:hl(null===xl||void 0===xl||null===(Q=xl.transaction)||void 0===Q||null===(X=Q.payment_system)||void 0===X?void 0:X.tag)})]}),(0,V.jsx)("br",{}),(0,V.jsxs)("div",{children:[hl("otp"),":",(0,V.jsx)("span",{className:"ml-2",children:null!==(J=null===xl||void 0===xl?void 0:xl.otp)&&void 0!==J?J:hl("N/A")})]})]})]}),(0,V.jsxs)(a.A,{hidden:_l,className:"mb-3 order_detail",children:[(0,V.jsxs)(c.A,{span:12,children:[(0,V.jsx)(m.A,{bordered:!0,title:hl("delivery.address"),children:null!==xl&&void 0!==xl&&xl.address?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(m.A.Item,{label:hl("street.house.number"),span:3,children:null!==(ee=null===xl||void 0===xl||null===(le=xl.address)||void 0===le?void 0:le.street_house_number)&&void 0!==ee?ee:hl("not.given")}),(0,V.jsx)(m.A.Item,{label:hl("zipcode"),span:3,children:null!==(ie=null!==(de=null===xl||void 0===xl||null===(ne=xl.address)||void 0===ne?void 0:ne.zipcode)&&void 0!==de?de:null===xl||void 0===xl||null===(se=xl.address)||void 0===se?void 0:se.zip_code)&&void 0!==ie?ie:hl("not.given")})]}):null!==xl&&void 0!==xl&&xl.my_address?(0,V.jsxs)(V.Fragment,{children:[(null===xl||void 0===xl||null===(oe=xl.my_address)||void 0===oe?void 0:oe.firstname)&&(0,V.jsx)(m.A.Item,{label:hl("firstname"),span:3,children:null===xl||void 0===xl||null===(re=xl.my_address)||void 0===re?void 0:re.firstname}),(null===xl||void 0===xl||null===(te=xl.my_address)||void 0===te?void 0:te.lastname)&&(0,V.jsx)(m.A.Item,{label:hl("lastname"),span:3,children:null===xl||void 0===xl||null===(ae=xl.my_address)||void 0===ae?void 0:ae.lastname}),(null===xl||void 0===xl||null===(ce=xl.my_address)||void 0===ce?void 0:ce.phone)&&(0,V.jsx)(m.A.Item,{label:hl("phone"),span:3,children:null!==xl&&void 0!==xl&&xl.my_address.phone.startsWith("+")?(0,V.jsx)("a",{href:`tel:${null===xl||void 0===xl?void 0:xl.my_address.phone}`,children:null===xl||void 0===xl?void 0:xl.my_address.phone}):(0,V.jsxs)("a",{href:`tel:+${null===xl||void 0===xl?void 0:xl.my_address.phone}`,children:["+",null===xl||void 0===xl?void 0:xl.my_address.phone]})}),(0,V.jsx)(m.A.Item,{label:hl("street.house.number"),span:3,children:null!==(ue=null===xl||void 0===xl||null===(ve=xl.my_address)||void 0===ve?void 0:ve.street_house_number)&&void 0!==ue?ue:hl("not.given")}),(0,V.jsx)(m.A.Item,{label:hl("street.house.number"),span:3,children:null!==(xe=null===xl||void 0===xl||null===(he=xl.my_address)||void 0===he?void 0:he.street_house_number)&&void 0!==xe?xe:hl("not.given")}),(0,V.jsx)(m.A.Item,{label:hl("zipcode"),span:3,children:null!==(me=null===xl||void 0===xl||null===(pe=xl.my_address)||void 0===pe?void 0:pe.zipcode)&&void 0!==me?me:hl("not.given")}),(null===xl||void 0===xl||null===(je=xl.my_address)||void 0===je?void 0:je.additional_details)&&(0,V.jsx)(m.A.Item,{label:hl("additional.details"),span:3,children:null===xl||void 0===xl||null===(ye=xl.my_address)||void 0===ye?void 0:ye.additional_details})]}):null!==xl&&void 0!==xl&&xl.delivery_point?(0,V.jsx)(V.Fragment,{children:(0,V.jsxs)("div",{children:[hl("address"),":"," ",null!==(Ae=null===xl||void 0===xl||null===(ge=xl.delivery_point)||void 0===ge||null===(fe=ge.address)||void 0===fe?void 0:fe[vl])&&void 0!==Ae?Ae:hl("no.address")]})}):"digital"===(null===xl||void 0===xl?void 0:xl.delivery_type)?(0,V.jsx)("div",{children:hl("digital.delivery")}):(0,V.jsx)("div",{children:hl("no.address")})}),(0,V.jsxs)(p.A,{className:"map_show mt-3",onClick:()=>bl(ml),children:[(0,V.jsx)(D.gwi,{style:{marginRight:"8px"}})," ",hl("show.locations")]})]}),(0,V.jsx)(c.A,{span:12,children:(0,V.jsx)(F.A,{orderId:ml})})]})]})}),(0,V.jsx)(t.A,{title:hl("documents"),children:(0,V.jsx)(r.A,{columns:Ml,dataSource:$l,pagination:!1,loading:_l})})]}),(0,V.jsxs)(c.A,{span:8,className:"order_info",children:[!(null===xl||void 0===xl||!xl.username)&&(0,V.jsxs)(t.A,{title:hl("order.receiver"),children:[(0,V.jsxs)("div",{className:"customer-info",children:[(0,V.jsx)("span",{className:"title",children:hl("name")}),(0,V.jsxs)("span",{className:"description",children:[(0,V.jsx)(z.tVJ,{}),null===xl||void 0===xl?void 0:xl.username]})]}),(0,V.jsxs)("div",{className:"customer-info",children:[(0,V.jsx)("span",{className:"title",children:hl("phone")}),(0,V.jsxs)("span",{className:"description",children:[(0,V.jsx)(z.s91,{}),null===xl||void 0===xl?void 0:xl.phone]})]})]}),2===(null===xl||void 0===xl?void 0:xl.type)&&"delivery"===(null===xl||void 0===xl?void 0:xl.delivery_type)&&(0,V.jsx)(t.A,{title:hl("tracking.info"),children:(0,V.jsx)(O.Y,{onSubmit:Rl,isSubmitting:Sl,initialData:{track_name:null===xl||void 0===xl?void 0:xl.track_name,track_id:null===xl||void 0===xl?void 0:xl.track_id,track_url:null===xl||void 0===xl?void 0:xl.track_url}})}),!(null===xl||void 0===xl||!xl.user)&&(0,V.jsx)(t.A,{title:(0,V.jsxs)(n.A,{children:[hl("customer.info"),(0,V.jsx)(b.A,{onClick:()=>(pl((0,Y.X4)({url:`users/user/${null===xl||void 0===xl?void 0:xl.user.uuid}`,id:"user_info",name:hl("user.info")})),void jl(`/users/user/${null===xl||void 0===xl?void 0:xl.user.uuid}`,{state:{user_id:null===xl||void 0===xl?void 0:xl.user.id}}))})]}),children:(0,V.jsxs)("div",{className:"d-flex w-100 customer-info-container",children:[_l?(0,V.jsx)(v.A.Avatar,{size:64,shape:"square"}):(0,V.jsx)(j.A,{shape:"square",size:64,src:null===xl||void 0===xl||null===(be=xl.user)||void 0===be?void 0:be.img}),(0,V.jsx)("h5",{className:"customer-name",children:_l?(0,V.jsx)(v.A.Button,{size:20,style:{width:70}}):(null===xl||void 0===xl||null===(_e=xl.user)||void 0===_e?void 0:_e.firstname)+" "+((null===xl||void 0===xl||null===(Ne=xl.user)||void 0===Ne?void 0:Ne.lastname)||"")}),(0,V.jsxs)("div",{className:"customer-info-detail",children:[(0,V.jsxs)("div",{className:"customer-info",children:[(0,V.jsx)("span",{className:"title",children:hl("phone")}),(0,V.jsxs)("span",{className:"description",children:[(0,V.jsx)(z.s91,{}),_l?(0,V.jsx)(v.A.Button,{size:16}):(null===xl||void 0===xl||null===(ke=xl.user)||void 0===ke?void 0:ke.phone)||"none"]})]}),(0,V.jsxs)("div",{className:"customer-info",children:[(0,V.jsx)("span",{className:"title",children:hl("email")}),(0,V.jsxs)("span",{className:"description",children:[(0,V.jsx)(D.mm2,{}),_l?(0,V.jsx)(v.A.Button,{size:16}):gl?(0,E.A)(null===xl||void 0===xl||null===(we=xl.user)||void 0===we?void 0:we.email):null===xl||void 0===xl||null===(Ie=xl.user)||void 0===Ie?void 0:Ie.email]})]}),(0,V.jsxs)("div",{className:"customer-info",children:[(0,V.jsx)("span",{className:"title",children:hl("registration.date")}),(0,V.jsxs)("span",{className:"description",children:[(0,V.jsx)(z.cCc,{}),_l?(0,V.jsx)(v.A.Button,{size:16}):q()(null===xl||void 0===xl||null===(Ye=xl.user)||void 0===Ye?void 0:Ye.created_at).format(`DD-MM-YYYY, ${Yl}`)]})]}),(0,V.jsxs)("div",{className:"customer-info",children:[(0,V.jsx)("span",{className:"title",children:hl("orders.count")}),(0,V.jsx)("span",{className:"description",children:_l?(0,V.jsx)(v.A.Button,{size:16}):(0,V.jsx)(y.A,{showZero:!0,style:{backgroundColor:"#3d7de3"},count:(null===xl||void 0===xl||null===(Se=xl.user)||void 0===Se?void 0:Se.orders_count)||0})})]}),(0,V.jsxs)("div",{className:"customer-info",children:[(0,V.jsx)("span",{className:"title",children:hl("spent.since.registration")}),(0,V.jsx)("span",{className:"description",children:_l?(0,V.jsx)(v.A.Button,{size:16}):(0,V.jsx)(y.A,{showZero:!0,style:{backgroundColor:"#48e33d"},count:(0,C.default)(null===xl||void 0===xl||null===(Ce=xl.user)||void 0===Ce?void 0:Ce.orders_sum_price,null===xl||void 0===xl||null===(De=xl.currency)||void 0===De?void 0:De.symbol,null===xl||void 0===xl||null===(Me=xl.currency)||void 0===Me?void 0:Me.position)})})]})]})]})}),(null===xl||void 0===xl?void 0:xl.shop)&&(0,V.jsx)(t.A,{title:`${hl("shop.details")}: #${null===xl||void 0===xl||null===($e=xl.shop)||void 0===$e?void 0:$e.id}`,loading:_l,children:(0,V.jsxs)(a.A,{gutter:12,children:[(0,V.jsxs)(c.A,{span:24,style:{display:"flex",columnGap:"20px",marginBottom:"20px"},children:[(0,V.jsx)("div",{style:{width:"100px",height:"100px",backgroundColor:"#f5f5f5",overflow:"hidden",borderRadius:"10px",position:"relative"},children:(0,V.jsx)(o.A,{alt:hl("shop.logo"),style:{objectFit:"contain"},src:(null===xl||void 0===xl||null===(ze=xl.shop)||void 0===ze?void 0:ze.logo_img)||"https://via.placeholder.com/150",width:100,height:100,preview:!1})}),(0,V.jsxs)("div",{style:{width:"calc(100% - 100px - 20px)"},children:[(0,V.jsx)("h5",{style:{maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:(null===xl||void 0===xl||null===(Re=xl.shop)||void 0===Re||null===(Be=Re.translation)||void 0===Be?void 0:Be.title)||"--"}),(0,V.jsx)("p",{children:null!==xl&&void 0!==xl&&null!==(qe=xl.shop)&&void 0!==qe&&qe.open?(0,V.jsx)(s.A,{color:"green",children:hl("open")}):(0,V.jsx)(s.A,{color:"red",children:hl("closed")})})]})]}),(0,V.jsxs)(c.A,{span:24,children:[(null===xl||void 0===xl||null===(He=xl.shop)||void 0===He?void 0:He.phone)&&(0,V.jsxs)("p",{children:[(0,V.jsxs)("strong",{children:[hl("phone"),":"]})," ",null===xl||void 0===xl||null===(Te=xl.shop)||void 0===Te?void 0:Te.phone]}),(null===xl||void 0===xl||null===(Ee=xl.shop)||void 0===Ee||null===(Fe=Ee.translation)||void 0===Fe?void 0:Fe.address)&&(0,V.jsxs)("p",{children:[(0,V.jsxs)("strong",{children:[hl("address"),":"]})," ",null===xl||void 0===xl||null===(Le=xl.shop)||void 0===Le||null===(Oe=Le.translation)||void 0===Oe?void 0:Oe.address]})]})]})}),(null===xl||void 0===xl?void 0:xl.review)&&!_l&&(0,V.jsx)(t.A,{title:hl("messages"),children:(0,V.jsxs)("div",{className:"order-message",children:[(0,V.jsx)("span",{className:"message",children:null===xl||void 0===xl||null===(Pe=xl.review)||void 0===Pe?void 0:Pe.comment}),(0,V.jsx)(n.A,{className:"w-100 justify-content-end",children:(0,V.jsx)("span",{className:"date",children:q()(null===xl||void 0===xl||null===(Ke=xl.review)||void 0===Ke?void 0:Ke.created_at).format(`YYYY-MM-DD ${Yl}`)})})]})})]}),(0,V.jsx)(c.A,{span:24,children:(0,V.jsxs)(t.A,{className:"w-100 order-table",title:hl("order.products"),children:[(0,V.jsx)(A.A,{}),(0,V.jsx)(r.A,{ref:yl,scroll:{x:!0},columns:Dl,dataSource:(null===(Ve=cl.data)||void 0===Ve?void 0:Ve.details)||[],loading:_l,rowKey:e=>e.id,pagination:!1,expandable:{expandedRowRender:e=>{if(null===e||void 0===e||!e.replace_stock)return;const l=[{title:hl("id"),dataIndex:"id",key:"id",render:(e,l)=>{var i;return null===l||void 0===l||null===(i=l.replace_stock)||void 0===i?void 0:i.id}},{title:hl("product.name"),dataIndex:"product",key:"product",render:(e,l)=>{var i,d,o,r,t;return(0,V.jsxs)(n.A,{direction:"vertical",className:"relative",children:[null===(i=l.replace_stock)||void 0===i||null===(d=i.product)||void 0===d||null===(o=d.translation)||void 0===o?void 0:o.title,null===(r=l.replace_stock)||void 0===r||null===(t=r.extras)||void 0===t?void 0:t.map((e=>{var l,i,d,n,o;return(0,V.jsxs)(s.A,{style:{display:"flex",width:"fit-content",justifyContent:"start",alignItems:"center",columnGap:"5px"},children:[null===(l=e.group)||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title,":"," ","color"===(null===(d=e.group)||void 0===d?void 0:d.type)?(0,V.jsx)("span",{style:{display:"block",width:"19px",height:"19px",backgroundColor:null===(n=e.value)||void 0===n?void 0:n.value,border:"1px solid #080136",borderRadius:"50%"}}):null===(o=e.value)||void 0===o?void 0:o.value]},null===e||void 0===e?void 0:e.id)}))]})}},{title:hl("image"),dataIndex:"img",key:"img",render:(e,l)=>{var i,d;return(0,V.jsx)(o.A,{src:(0,w.A)(null===l||void 0===l||null===(i=l.replace_stock)||void 0===i||null===(d=i.product)||void 0===d?void 0:d.img),alt:"product",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0})}},{title:hl("price"),dataIndex:"price",key:"price",render:(e,l)=>{var i,d,n;return(0,C.default)(null===l||void 0===l||null===(i=l.replace_stock)||void 0===i?void 0:i.price,null===xl||void 0===xl||null===(d=xl.currency)||void 0===d?void 0:d.symbol,null===xl||void 0===xl||null===(n=xl.currency)||void 0===n?void 0:n.position)}},{title:hl("quantity"),dataIndex:"replace_quantity",key:"replace_quantity",render:(e,l)=>(0,V.jsx)("span",{children:null===l||void 0===l?void 0:l.replace_quantity})},{title:hl("discount"),dataIndex:"discount",key:"discount",render:(e,l)=>{var i,d,n,s;return(0,C.default)(null!==(i=null===l||void 0===l||null===(d=l.replace_stock)||void 0===d?void 0:d.discount)&&void 0!==i?i:0,null===xl||void 0===xl||null===(n=xl.currency)||void 0===n?void 0:n.symbol,null===xl||void 0===xl||null===(s=xl.currency)||void 0===s?void 0:s.position)}},{title:hl("tax"),dataIndex:"tax",key:"tax",render:(e,l)=>{var i,d,n;return(0,C.default)(null===l||void 0===l||null===(i=l.replace_stock)||void 0===i?void 0:i.tax,null===xl||void 0===xl||null===(d=xl.currency)||void 0===d?void 0:d.symbol,null===xl||void 0===xl||null===(n=xl.currency)||void 0===n?void 0:n.position)}},{title:hl("total.price"),dataIndex:"total_price",key:"total_price",render:(e,l)=>{var i,d,n;return(0,C.default)(null===l||void 0===l||null===(i=l.replace_stock)||void 0===i?void 0:i.total_price,null===xl||void 0===xl||null===(d=xl.currency)||void 0===d?void 0:d.symbol,null===xl||void 0===xl||null===(n=xl.currency)||void 0===n?void 0:n.position)}}];return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("span",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,V.jsx)(g.A,{style:{padding:"10px",margin:"10px 0 50px 0",border:"2px solid #cad2de",borderRadius:"30%"},rotate:90})}),(0,V.jsx)(r.A,{columns:l,dataSource:[e],pagination:!1})]})},expandIcon:e=>{let{expanded:l,onExpand:i,record:d}=e;return(0,V.jsx)(g.A,{onClick:e=>i(d,e),rotate:90})},defaultExpandedRowKeys:["0"]}}),(0,V.jsxs)(n.A,{size:100,className:"d-flex justify-content-end w-100 order-table__summary",children:[(0,V.jsxs)("div",{children:[(0,V.jsxs)("span",{children:[hl("delivery.fee"),":"]}),(0,V.jsx)("br",{}),(0,V.jsxs)("span",{children:[hl("order.tax"),":"]}),(0,V.jsx)("br",{}),(0,V.jsxs)("span",{children:[hl("product"),":"]}),(0,V.jsx)("br",{}),(0,V.jsxs)("span",{children:[hl("discount"),":"]}),(0,V.jsx)("br",{}),(0,V.jsxs)("span",{children:[hl("service.fee"),":"]}),(0,V.jsx)("br",{}),(0,V.jsxs)("span",{children:[hl("tips"),":"]}),(0,V.jsx)("br",{}),(0,V.jsxs)("span",{children:[hl("coupon.price"),":"]}),(0,V.jsx)("br",{}),(0,V.jsxs)("h3",{children:[hl("total.price"),":"]})]}),(0,V.jsxs)("div",{children:[(0,V.jsx)("span",{children:(0,C.default)(null!==(We=null===xl||void 0===xl?void 0:xl.delivery_fee)&&void 0!==We?We:0,null===xl||void 0===xl||null===(Ge=xl.currency)||void 0===Ge?void 0:Ge.symbol,null===xl||void 0===xl||null===(Ze=xl.currency)||void 0===Ze?void 0:Ze.position)}),(0,V.jsx)("br",{}),(0,V.jsx)("span",{children:(0,C.default)(null===xl||void 0===xl?void 0:xl.tax,null===xl||void 0===xl||null===(Ue=xl.currency)||void 0===Ue?void 0:Ue.symbol,null===xl||void 0===xl||null===(Qe=xl.currency)||void 0===Qe?void 0:Qe.position)}),(0,V.jsx)("br",{}),(0,V.jsx)("span",{children:(0,C.default)(null===xl||void 0===xl?void 0:xl.origin_price,null===xl||void 0===xl||null===(Xe=xl.currency)||void 0===Xe?void 0:Xe.symbol,null===xl||void 0===xl||null===(Je=xl.currency)||void 0===Je?void 0:Je.position)}),(0,V.jsx)("br",{}),(0,V.jsx)("span",{children:(0,C.default)(null===xl||void 0===xl?void 0:xl.total_discount,null===xl||void 0===xl||null===(el=xl.currency)||void 0===el?void 0:el.symbol,null===xl||void 0===xl||null===(ll=xl.currency)||void 0===ll?void 0:ll.position)}),(0,V.jsx)("br",{}),(0,V.jsx)("span",{children:(0,C.default)(null===xl||void 0===xl?void 0:xl.service_fee,null===xl||void 0===xl||null===(il=xl.currency)||void 0===il?void 0:il.symbol,null===xl||void 0===xl||null===(dl=xl.currency)||void 0===dl?void 0:dl.position)}),(0,V.jsx)("br",{}),(0,V.jsx)("span",{children:(0,C.default)(null===xl||void 0===xl?void 0:xl.tips,null===xl||void 0===xl||null===(nl=xl.currency)||void 0===nl?void 0:nl.symbol,null===xl||void 0===xl||null===(sl=xl.currency)||void 0===sl?void 0:sl.position)}),(0,V.jsx)("br",{}),(0,V.jsx)("span",{children:(0,C.default)(null===xl||void 0===xl?void 0:xl.coupon_price,null===xl||void 0===xl||null===(ol=xl.currency)||void 0===ol?void 0:ol.symbol,null===xl||void 0===xl||null===(rl=xl.currency)||void 0===rl?void 0:rl.position)}),(0,V.jsx)("br",{}),(0,V.jsx)("h3",{ref:Al,children:(0,C.default)(null===xl||void 0===xl?void 0:xl.total_price,null===xl||void 0===xl||null===(tl=xl.currency)||void 0===tl?void 0:tl.symbol,null===xl||void 0===xl||null===(al=xl.currency)||void 0===al?void 0:al.position)})]})]})]})})]}),fl&&(0,V.jsx)(M.A,{id:fl,handleCancel:()=>{bl(null)}}),kl&&(0,V.jsx)(P.A,{orderId:ml,handleCancel:()=>wl(!1),transactionDetails:null===xl||void 0===xl?void 0:xl.transaction,fetchOrder:zl})]})}},29597:(e,l,i)=>{function d(e){var l;if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const i=null===e||void 0===e||null===(l=e.location)||void 0===l?void 0:l.split(", ");return{lat:Number(null===i||void 0===i?void 0:i[0]),lng:Number(null===i||void 0===i?void 0:i[1])}}i.d(l,{A:()=>d})},38635:(e,l,i)=>{i.d(l,{A:()=>D});var d=i(69286),n=i(86366),s=i(82706),o=i(48538),r=i(23263),t=i(87094),a=i(41988),c=i(12916),u=i(9950),v=i(70030),x=i(23758),h=i(81446),m=i(50384),p=i(91854),j=i(41478),y=i(29597),A=i(47965),g=i(31222),f=i(6604),b=i(68873),_=i(59051),N=i.n(_),k=i(6566),w=i(51066),I=i(44414);const Y=(0,k.A)(),{Step:S}=n.A,C=()=>(0,I.jsx)("div",{style:{position:"absolute",transform:"translate(-50%, -100%)"},children:(0,I.jsx)("img",{src:j,width:"50",alt:"Pin"})}),D=e=>{var l,i,j;let{id:_,handleCancel:k}=e;const{t:D}=(0,v.B)(),[M,$]=(0,u.useState)(null),[z,R]=(0,u.useState)(null),[B,q]=(0,u.useState)(null),{settings:H}=(0,p.d4)((e=>e.globalSettings),p.bN),T=(0,w.Q)(),E=(0,y.A)(H),[F,L]=(0,u.useState)(0),[O,P]=(0,u.useState)({lat:null===E||void 0===E?void 0:E.lat,lng:null===E||void 0===E?void 0:E.lng}),[K,V]=(0,u.useState)([{id:0,name:"new",icon:(0,I.jsx)(A.A,{})},{id:1,name:"accepted",icon:(0,I.jsx)(m.LW,{})},{id:2,name:"ready",icon:(0,I.jsx)(g.NtI,{})},{id:3,name:"on_a_way",icon:(0,I.jsx)(f.o2P,{})},{id:4,name:"delivered",icon:(0,I.jsx)(f.eDZ,{})}]);const{google_map_key:W}=(0,p.d4)((e=>e.globalSettings.settings),p.bN);return(0,u.useEffect)((()=>{$(!0),x.A.getById(_).then((e=>{var l,i,d,n,s,o,r;let{data:t}=e;V("canceled"===t.status?[{id:1,name:"new",icon:(0,I.jsx)(A.A,{})},{id:5,name:"canceled",icon:(0,I.jsx)(b.XfH,{})}]:K),L("canceled"===t.status?1:null===(l=K.find((e=>e.name===t.status)))||void 0===l?void 0:l.id);const a=null!==(i=null!==(d=null!==(n=null===t||void 0===t||null===(s=t.address)||void 0===s?void 0:s.location)&&void 0!==n?n:null===t||void 0===t||null===(o=t.my_address)||void 0===o?void 0:o.location)&&void 0!==d?d:null===t||void 0===t||null===(r=t.delivery_point)||void 0===r?void 0:r.location)&&void 0!==i?i:{latitude:null===E||void 0===E?void 0:E.lat,longitude:null===E||void 0===E?void 0:E.lng};P({lat:Number(null===a||void 0===a?void 0:a.latitude),lng:Number(null===a||void 0===a?void 0:a.longitude)}),q("canceled"===t.status?"error":"success"),R(t)})).finally((()=>{$(!1)}))}),[]),(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(s.A,{visible:!!_,title:D("show.locations"),onCancel:()=>k(),style:{minWidth:"80vw"},footer:[(0,I.jsx)(o.A,{type:"default",onClick:k,children:D("cancel")},"cancelBtn")],children:M?(0,I.jsx)(h.A,{}):(0,I.jsxs)(r.A,{children:[(0,I.jsx)(n.A,{current:F,status:B,className:"mb-5",children:null===K||void 0===K?void 0:K.map(((e,l)=>(0,I.jsx)(S,{title:D(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+l)))}),(0,I.jsxs)(t.A,{gutter:12,children:[(0,I.jsxs)(a.A,{span:12,children:[(0,I.jsxs)("h3",{children:[D("order.id")," #",null===z||void 0===z?void 0:z.id]}),(0,I.jsxs)("p",{children:[(0,I.jsx)(m.A5h,{})," ",N()(null===z||void 0===z?void 0:z.created_at).format(`YYYY-MM-DD ${T}`)]}),(0,I.jsxs)("p",{children:[D("scheduled.at")," ",N()(null===z||void 0===z?void 0:z.delivery_date).format(`YYYY-MM-DD ${T}`)]})]}),(0,I.jsxs)(a.A,{span:12,children:[(0,I.jsxs)("p",{children:[D("status")," ","new"===(null===z||void 0===z?void 0:z.status)?(0,I.jsx)(c.A,{color:"blue",children:D(null===z||void 0===z?void 0:z.status)}):"canceled"===(null===z||void 0===z?void 0:z.status)?(0,I.jsx)(c.A,{color:"error",children:D(null===z||void 0===z?void 0:z.status)}):(0,I.jsx)(c.A,{color:"cyan",children:D(null===z||void 0===z?void 0:z.status)})]}),(0,I.jsxs)("p",{children:[D("payment.method")," ",(0,I.jsx)("strong",{children:null===z||void 0===z||null===(l=z.transaction)||void 0===l||null===(i=l.payment_system)||void 0===i?void 0:i.tag})]}),(0,I.jsxs)("p",{children:[D("order.type")," ",(0,I.jsx)("strong",{children:null===z||void 0===z?void 0:z.delivery_type})]}),(0,I.jsxs)("p",{children:[D("payment.type")," ",(0,I.jsx)("strong",{children:null===z||void 0===z||null===(j=z.transaction)||void 0===j?void 0:j.status})]})]}),(0,I.jsxs)(a.A,{span:24,className:"mt-5",children:[(0,I.jsx)("h4",{children:D("map")}),(0,I.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,I.jsx)(d.Ay,{bootstrapURLKeys:{key:Y},defaultZoom:10,center:null!==O&&void 0!==O?O:E,options:{fullscreenControl:!1},children:(0,I.jsx)(C,{lat:null===O||void 0===O?void 0:O.lat,lng:null===O||void 0===O?void 0:O.lng})})})]})]})]})})})}},41478:(e,l,i)=>{e.exports=i.p+"static/media/user.fbe7078c52acde79652d.jpg"},51066:(e,l,i)=>{i.d(l,{Q:()=>s});var d=i(17706),n=i(80415);const s=()=>{var e,l,i,s;return null!==(e=null===(l=d.M.getState())||void 0===l||null===(i=l.globalSettings)||void 0===i||null===(s=i.settings)||void 0===s?void 0:s.hour_format)&&void 0!==e?e:n.G}},53774:(e,l,i)=>{function d(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===l?`${i} ${e}`:`${e} ${i}`}i.r(l),i.d(l,{default:()=>d})},79930:(e,l,i)=>{i.d(l,{Y:()=>c});var d=i(59233),n=i(87094),s=i(41988),o=i(55902),r=i(48538),t=i(70030),a=i(44414);const c=e=>{let{onSubmit:l,initialData:i,isSubmitting:c}=e;const{t:u}=(0,t.B)();return(0,a.jsx)(d.A,{layout:"vertical",initialValues:i,onFinish:l,children:(0,a.jsxs)(n.A,{children:[(0,a.jsx)(s.A,{span:24,children:(0,a.jsx)(d.A.Item,{label:u("tracking.name"),name:"track_name",rules:[{required:!0,message:u("required")}],children:(0,a.jsx)(o.A,{})})}),(0,a.jsx)(s.A,{span:24,children:(0,a.jsx)(d.A.Item,{label:u("tracking.id"),name:"track_id",rules:[{required:!0,message:u("required")}],children:(0,a.jsx)(o.A,{})})}),(0,a.jsx)(s.A,{span:24,children:(0,a.jsx)(d.A.Item,{label:u("tracking.url"),name:"track_url",rules:[{type:"url",message:u("should.be.url")}],children:(0,a.jsx)(o.A,{})})}),(0,a.jsx)(s.A,{span:7,children:(0,a.jsx)(r.A,{type:"primary",loading:c,htmlType:"submit",children:u("submit")})})]})})}},80415:(e,l,i)=>{i.d(l,{G:()=>o,HV:()=>n,LH:()=>d,PR:()=>s,wO:()=>t,xt:()=>r});const d={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]},n=(new Date,new Date,["new","accepted","ready","on_a_way","pause","delivered","canceled"]),s=30,o="HH:mm",r="hh:mm a",t=!0},91030:(e,l,i)=>{i.d(l,{A:()=>m});var d=i(9950),n=i(59233),s=i(82706),o=i(48538),r=i(87094),t=i(41988),a=i(99674),c=i(70030),u=i(85923),v=i(92270),x=i(44414);const h=["paid","canceled"];function m(e){let{transactionDetails:l,handleCancel:i,fetchOrder:m,orderId:p}=e;const[j]=n.A.useForm(),{t:y}=(0,c.B)(),[A,g]=(0,d.useState)(!1);return(0,x.jsx)(s.A,{visible:!!l,title:y("transaction.status"),closable:!1,footer:[(0,x.jsx)(o.A,{type:"primary",onClick:()=>j.submit(),loading:A,children:y("save")},"save-form"),(0,x.jsx)(o.A,{type:"default",onClick:i,children:y("cancel")},"cansel-modal")],children:(0,x.jsx)(n.A,{form:j,layout:"vertical",onFinish:e=>{g(!0),v.A.updateStatus(p,e).then((()=>{i(),m()})).catch((e=>u.oR.error(e.message))).finally((()=>g(!1)))},initialValues:{status:l.status},children:(0,x.jsx)(r.A,{gutter:12,children:(0,x.jsx)(t.A,{span:24,children:(0,x.jsx)(n.A.Item,{label:y("status"),name:"status",rules:[{validator:(e,l)=>"paid"===l||"canceled"===l?Promise.resolve():Promise.reject(new Error(y("required")))}],children:(0,x.jsx)(a.A,{children:h.map(((e,l)=>(0,x.jsx)(a.A.Option,{value:e,children:y(e)},l)))})})})})})})}},94117:(e,l,i)=>{i.d(l,{A:()=>m});var d=i(9950),n=i(70030),s=i(99163),o=i(85923),r=i(48538),t=i(12916),a=i(96011),c=i.n(a),u=i(63620),v=i(81446),x=i(44414);const h=`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${u.Lq}`;function m(e){let{orderId:l,showLink:i=!0,size:a=2}=e;const{t:m}=(0,n.B)(),[p,j]=(0,d.useState)(""),[y,A]=(0,d.useState)(!1),[g,f]=(0,d.useState)(null);return(0,d.useEffect)((()=>{(async()=>{A(!0);const e={dynamicLinkInfo:{domainUriPrefix:u.ac,link:`${u.CY}/orders/${l}`,androidInfo:{androidPackageName:u.xp},iosInfo:{iosBundleId:u.lu}}};try{const{data:l}=await c().post(h,e);f(null),j(null===l||void 0===l?void 0:l.shortLink)}catch(g){f(g),o.oR.error(g.message)}finally{A(!1)}})()}),[l]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("h3",{children:[m("qr_code"),":"]}),(0,x.jsx)("div",{children:y||g?g?(0,x.jsx)(t.A,{color:"red",children:m("smth.went.wrong")}):(0,x.jsx)(v.A,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{style:{width:100*a+"px",height:100*a+"px",borderRadius:"10px",overflow:g?"none":"hidden"},children:(0,x.jsx)(s.Xe,{size:500,id:"qrCode",includeMargin:!0,value:p,style:{width:"100%",aspectRatio:"1/1",height:"100%"},bgColor:"#fff",level:"H"})}),(0,x.jsx)("br",{}),i&&(0,x.jsx)(r.A,{type:"primary",href:p,target:"_blank",rel:"noreferrer",style:{width:100*a+"px"},children:m("link.to.order")})]})})]})}},99083:(e,l,i)=>{i.d(l,{A:()=>t});var d=i(89379),n=i(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};var o=i(25085),r=function(e,l){return n.createElement(o.A,(0,d.A)((0,d.A)({},e),{},{ref:l,icon:s}))};const t=n.forwardRef(r)}}]);