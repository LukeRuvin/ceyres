"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3347],{43347:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g});var l=n(9950),o=n(49326),i=n(86366),d=n(23263),r=n(82498),u=n(57844),a=n(649),v=n(59585),s=n(44832),c=n(71999),p=n(91854),x=n(70030),j=n(29657),A=n(4895),f=n(66753),h=n(44414);const{Step:m}=i.A,g=()=>{var t,e,n,g,y;const{t:C}=(0,x.B)(),{activeMenu:S}=(0,p.d4)((t=>t.menu),p.bN),[k,w]=(0,l.useState)((null===(t=S.data)||void 0===t?void 0:t.step)||0),[F,b]=(0,l.useState)(o.C),{extras:z}=(null===S||void 0===S?void 0:S.data)||{},G=null===S||void 0===S||null===(e=S.data)||void 0===e?void 0:e.digital,M=null===z||void 0===z?void 0:z.some((t=>{var e;return"color"===(null===t||void 0===t||null===(e=t.group)||void 0===e?void 0:e.type)})),N=(0,l.useMemo)((()=>null===z||void 0===z?void 0:z.find((t=>{var e;return"color"===(null===t||void 0===t||null===(e=t.group)||void 0===e?void 0:e.type)}))),[z]),B=Array.from(new Set(null===N||void 0===N||null===(n=N.values)||void 0===n?void 0:n.map((t=>t.value)))).map((t=>{var e;return null===N||void 0===N||null===(e=N.values)||void 0===e?void 0:e.find((e=>e.value===t))})).filter((t=>"color"===t.group_type)),E=()=>{w(k+1)},P=()=>{w(k-1)};return(0,l.useEffect)((()=>{G?b(o.C.filter((t=>"product.extras"!==t.title))):!1===G&&b(o.C.filter((t=>"product.digital"!==t.title))),b(M?t=>t:t=>t.filter((t=>"Gallery"!==t.title)))}),[M,G]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.A,{title:C("add.product"),extra:(0,h.jsx)(c.A,{}),children:(0,h.jsx)(i.A,{current:k,children:F.map((t=>(0,h.jsx)(m,{title:C(t.title)},t.title)))})}),(0,h.jsxs)("div",{className:"steps-content",children:["First-content"===F[k].content&&(0,h.jsx)(s.A,{next:E}),(null===(g=S.data)||void 0===g?void 0:g.digital)&&"Product-digital"===F[k].content&&(0,h.jsx)(A.A,{next:E,prev:P}),!(null!==(y=S.data)&&void 0!==y&&y.digital)&&"Second-content"===F[k].content&&(0,h.jsx)(v.A,{next:E,prev:P}),"Third-content"===F[k].content&&(0,h.jsx)(a.A,{next:E,prev:P}),"wholesale-content"===F[k].content&&(0,h.jsx)(f.A,{next:E,prev:P}),(null===B||void 0===B?void 0:B.length)>0&&"Gallery-content"===F[k].content&&(0,h.jsx)(j.A,{next:E,prev:P}),"Fourth-content"===F[k].content&&(0,h.jsx)(r.A,{next:E,prev:P}),"Finish-content"===F[k].content&&(0,h.jsx)(u.A,{prev:P})]})]})}}}]);