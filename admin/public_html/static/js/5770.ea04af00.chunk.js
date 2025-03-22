"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5770],{8168:(e,i,l)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}l.d(i,{A:()=>n})},47992:(e,i,l)=>{l.d(i,{G:()=>r});var n=l(9950),t=l(95491),s=l.n(t),o=l(99674),d=l(90650),a=l(44414);const r=e=>{let{fetchOptions:i,debounceTimeout:l=400,onClear:t,refetchOptions:r=!1,...u}=e;const[v,c]=(0,n.useState)(!1),[p,h]=(0,n.useState)([]),m=(0,n.useMemo)((()=>s()((e=>{h([]),c(!0),i(e).then((e=>{h(e),c(!1)}))}),l)),[i,l]);return(0,a.jsx)(o.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),t&&t()},notFoundContent:v?(0,a.jsx)(d.A,{size:"small"}):"no results",...u,options:p,onFocus:()=>{p.length&&!r||m("")}})}},53774:(e,i,l)=>{function n(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const l=Number(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===i?`${l} ${e}`:`${e} ${l}`}l.r(i),l.d(i,{default:()=>n})},65770:(e,i,l)=>{l.r(i),l.d(i,{default:()=>S});var n=l(70030),t=l(12916),s=l(48538),o=l(23263),d=l(52913),a=l(9950),r=l(91854),u=l(74623),v=l(86031),c=l(8168),p=l(88986),h=l(53774),m=l(12678),x=l(82706),b=l(91524),f=l(81446),g=l(44555),A=l(44414);function j(e){var i,l,t,o,d,u;let{id:v,handleCancel:c}=e;const[p,m]=(0,a.useState)({}),[j,_]=(0,a.useState)(!1),{t:w}=(0,n.B)(),{defaultCurrency:y}=(0,r.d4)((e=>e.currency),r.bN);return(0,a.useEffect)((()=>{!function(e){_(!0),g.A.getById(e).then((e=>m(e.data))).finally((()=>_(!1)))}(v)}),[v]),(0,A.jsx)(x.A,{visible:!!v,title:w("membership"),onCancel:c,footer:(0,A.jsx)(s.A,{type:"default",onClick:c,children:w("cancel")}),children:j?(0,A.jsx)(f.A,{}):(0,A.jsxs)(b.A,{bordered:!0,children:[(0,A.jsx)(b.A.Item,{span:3,label:w("id"),children:p.id}),(0,A.jsx)(b.A.Item,{span:3,label:w("membership.id"),children:null===(i=p.member_ship)||void 0===i?void 0:i.id}),(0,A.jsx)(b.A.Item,{span:3,label:w("membership"),children:null===(l=p.member_ship)||void 0===l||null===(t=l.translation)||void 0===t?void 0:t.title}),(0,A.jsx)(b.A.Item,{span:3,label:w("price"),children:(0,h.default)(null===p||void 0===p?void 0:p.price,null===y||void 0===y?void 0:y.symbol,null===y||void 0===y?void 0:y.position)}),(0,A.jsx)(b.A.Item,{span:3,label:w("sessions"),children:p.sessions}),(0,A.jsx)(b.A.Item,{span:3,label:w("sessions.count"),children:p.sessions_count}),(0,A.jsx)(b.A.Item,{span:3,label:w("user.id"),children:null===(o=p.user)||void 0===o?void 0:o.id}),(0,A.jsxs)(b.A.Item,{span:3,label:w("user"),children:[null===(d=p.user)||void 0===d?void 0:d.firstname," ",null===(u=p.user)||void 0===u?void 0:u.lastname]})]})})}var _=l(80737),w=l(47992),y=l(55660),k=l(54764),C=l(53271);const I=()=>{const{t:e}=(0,n.B)(),i=(0,r.wA)(),{activeMenu:l}=(0,r.d4)((e=>e.menu),r.bN),t=e=>{const n=l.data;i((0,u.Ok)({activeMenu:l,data:{...n,...e}}))};return(0,A.jsxs)(_.A,{wrap:!0,children:[(0,A.jsx)(w.G,{fetchOptions:e=>{const i={perPage:10,page:1,search:e};return y.A.getAll(i).then((e=>{var i;return null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.map((e=>{var i;return{label:null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},className:"w-200px",placeholder:e("select.shop"),onChange:e=>t({shop_id:null===e||void 0===e?void 0:e.value})}),(0,A.jsx)(w.G,{fetchOptions:e=>{const i={perPage:10,page:1,search:e};return k.A.getAll(i).then((e=>{var i;return null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.map((e=>{var i;return{label:null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},className:"w-200px",placeholder:e("select.service"),onChange:e=>t({service_id:null===e||void 0===e?void 0:e.value})}),(0,A.jsx)(w.G,{fetchOptions:e=>{const i={parPage:10,page:1,search:e};return C.A.getAll(i).then((e=>{var i;return null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.map((e=>({label:`${null===e||void 0===e?void 0:e.firstname} ${null===e||void 0===e?void 0:e.lastname}`,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id})))}))},className:"w-200px",placeholder:e("select.user"),onChange:e=>t({user_id:null===e||void 0===e?void 0:e.value})})]})};const S=function(){var e,i,l;const{t:x}=(0,n.B)(),b=(0,r.wA)(),{activeMenu:f}=(0,r.d4)((e=>e.menu),r.bN),[g,_]=(0,a.useState)({shop:{}}),{defaultCurrency:w}=(0,r.d4)((e=>e.currency),r.bN),{userMemberships:y,loading:k,meta:C,params:S}=(0,r.d4)((e=>e.userMemberships),r.bN),[N,O]=(0,a.useState)(null),$=f.data,M={sort:null===$||void 0===$?void 0:$.sort,column:null===$||void 0===$?void 0:$.column,perPage:null===$||void 0===$?void 0:$.perPage,page:null===$||void 0===$?void 0:$.page,shop_id:null===$||void 0===$?void 0:$.shop_id,service_id:null===$||void 0===$?void 0:$.service_id,user_id:null===$||void 0===$?void 0:$.user_id},P=[{title:x("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:x("user_id"),dataIndex:"user_id",key:"user_id",is_show:!0},{title:x("membership"),dataIndex:"membership",key:"membership",is_show:!0,render:(e,i)=>{var l,n;return null===i||void 0===i||null===(l=i.member_ship)||void 0===l||null===(n=l.translation)||void 0===n?void 0:n.title}},{title:x("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:(e,i)=>{var l,n;return null===i||void 0===i||null===(l=i.member_ship.shop)||void 0===l||null===(n=l.translation)||void 0===n?void 0:n.title}},{title:x("price"),dataIndex:"price",key:"price",is_show:!0,render:(e,i)=>(0,h.default)(null===i||void 0===i?void 0:i.price,null===w||void 0===w?void 0:w.symbol,null===w||void 0===w?void 0:w.position)},{title:x("sessions"),dataIndex:"sessions",key:"sessions",is_show:!0},{title:x("transaction"),dataIndex:"transaction",key:"transaction",is_show:!0,render:(e,i)=>{var l;const n=(null===(l=i.transaction)||void 0===l?void 0:l.status)||"not.paid";return"not.paid"===n?(0,A.jsx)(t.A,{children:x(n)}):"paid"===n?(0,A.jsx)(t.A,{color:"cyan",children:x(n)}):(0,A.jsx)(t.A,{color:"warning",children:x(n)})}},{title:x("options"),key:"options",is_show:!0,render:(e,i)=>(0,A.jsx)(s.A,{icon:(0,A.jsx)(m.A,{}),onClick:()=>z(i)})}],z=e=>{O(e.id)};return(0,p.A)((()=>{b((0,v.L1)(M))}),[f.data]),(0,a.useEffect)((()=>{f.refetch&&(b((0,u.km)(f)),b((0,v.L1)()))}),[f.refetch]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o.A,{children:(0,A.jsx)(I,{filters:g,setFilters:_})}),(0,A.jsx)(o.A,{title:x("user.memberships"),children:(0,A.jsx)(d.A,{scroll:{x:!0},columns:null===P||void 0===P?void 0:P.filter((e=>e.is_show)),dataSource:y,loading:k,pagination:{pageSize:S.perPage,page:(null===(e=f.data)||void 0===e?void 0:e.page)||1,total:C.total,defaultCurrent:null===(i=f.data)||void 0===i?void 0:i.page,current:null===(l=f.data)||void 0===l?void 0:l.page},rowKey:e=>e.id,onChange:function(e,i,l){const{pageSize:n,current:t}=e,{field:s,order:o}=l,d=(0,c.A)(o);b((0,u.Ok)({activeMenu:f,data:{...$,perPage:n,page:t,column:s,sort:d}}))}})}),N&&(0,A.jsx)(j,{id:N,handleCancel:()=>O(null)})]})}}}]);