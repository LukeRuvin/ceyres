"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1543],{16215:(e,t,n)=>{var r=n(6305).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=u.useRef();return t.current=e,u.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[])};var u=r(n(9950))},30358:(e,t,n)=>{var r=n(6305).default,u=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=a.useRef(!1),n=a.useState(e),r=(0,o.default)(n,2),u=r[0],f=r[1];return a.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[u,function(e,n){if(n&&t.current)return;f(e)}]};var o=u(n(85715)),a=r(n(9950))},46078:(e,t,n)=>{var r=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useComposeRef=t.supportRef=t.supportNodeRef=t.getNodeRef=t.fillRef=t.composeRef=void 0;var u=r(n(73738)),o=n(9950),a=n(26429),f=r(n(40525)),l=r(n(56039)),c=Number(o.version.split(".")[0]),i=t.fillRef=function(e,t){"function"===typeof e?e(t):"object"===(0,u.default)(e)&&e&&"current"in e&&(e.current=t)},d=t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(Boolean);return r.length<=1?r[0]:function(e){t.forEach((function(t){i(t,e)}))}},p=(t.useComposeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,f.default)((function(){return d.apply(void 0,t)}),t,(function(e,t){return e.length!==t.length||e.every((function(e,n){return e!==t[n]}))}))},t.supportRef=function(e){var t,n;if(!e)return!1;if(s(e)&&c>=19)return!0;var r=(0,a.isMemo)(e)?e.type.type:e.type;return!!("function"!==typeof r||null!==(t=r.prototype)&&void 0!==t&&t.render||r.$$typeof===a.ForwardRef)&&!!("function"!==typeof e||null!==(n=e.prototype)&&void 0!==n&&n.render||e.$$typeof===a.ForwardRef)});function s(e){return(0,o.isValidElement)(e)&&!(0,l.default)(e)}t.supportNodeRef=function(e){return s(e)&&p(e)},t.getNodeRef=function(e){if(e&&s(e)){var t=e;return t.props.propertyIsEnumerable("ref")?t.props.ref:t.ref}return null}},53542:(e,t,n)=>{var r=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t||{},r=n.defaultValue,c=n.value,i=n.onChange,d=n.postState,p=(0,f.default)((function(){return l(c)?c:l(r)?"function"===typeof r?r():r:"function"===typeof e?e():e})),s=(0,u.default)(p,2),v=s[0],m=s[1],y=void 0!==c?c:v,h=d?d(y):y,b=(0,o.default)(i),R=(0,f.default)([y]),j=(0,u.default)(R,2),g=j[0],_=j[1];(0,a.useLayoutUpdateEffect)((function(){var e=g[0];v!==e&&b(v,e)}),[g]),(0,a.useLayoutUpdateEffect)((function(){l(c)||m(c)}),[c]);var w=(0,o.default)((function(e,t){m(e,t),_([y],t)}));return[h,w]};var u=r(n(85715)),o=r(n(16215)),a=n(85080),f=r(n(30358));function l(e){return void 0!==e}},56039:(e,t,n)=>{var r=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e&&"object"===(0,u.default)(e)&&(e.$$typeof===o||e.$$typeof===a)&&e.type===f};var u=r(n(73738)),o=Symbol.for("react.element"),a=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment")},85080:(e,t,n)=>{var r=n(24994).default,u=n(6305).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutUpdateEffect=t.default=void 0;var o=u(n(9950)),a=(0,r(n(66499)).default)()?o.useLayoutEffect:o.useEffect,f=function(e,t){var n=o.useRef(!0);a((function(){return e(n.current)}),t),a((function(){return n.current=!1,function(){n.current=!0}}),[])};t.useLayoutUpdateEffect=function(e,t){f((function(t){if(!t)return e()}),t)},t.default=f},92526:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(9950);var r=n(23263),u=n(91854),o=n(70030),a=n(72540),f=n(88349),l=n(85923),c=n(74623),i=n(37963),d=n(59759),p=n(44414);function s(){const{t:e}=(0,o.B)(),t=(0,u.wA)(),{activeMenu:n}=(0,u.d4)((e=>e.menu),u.bN),s=e=>({uid:e.name,name:e.name,status:"done",url:e.name,created:!0});return(0,p.jsx)(r.A,{title:e("import"),children:(0,p.jsxs)(a.A,{name:"file",multiple:!1,maxCount:1,customRequest:r=>{let{file:u,onSuccess:o}=r;const a=new FormData;a.append("file",u),i.A.import(a).then((r=>{l.oR.success(e("successfully.import")),t((0,c.Ok)({activeMenu:n,data:s(u)})),o("ok"),t((0,d.$F)())}))},defaultFileList:null!==n&&void 0!==n&&n.data?[null===n||void 0===n?void 0:n.data]:null,accept:".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",children:[(0,p.jsx)("p",{className:"ant-upload-drag-icon",children:(0,p.jsx)(f.A,{})}),(0,p.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,p.jsx)("p",{className:"ant-upload-hint",children:"Import brands from file to this area"})]})})}},98812:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tupleNum=t.tuple=void 0;t.tuple=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t};t.tupleNum=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}}}]);