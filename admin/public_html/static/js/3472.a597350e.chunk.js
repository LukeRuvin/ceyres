"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3472],{8168:(e,s,a)=>{function t(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(s,{A:()=>t})},34422:(e,s,a)=>{a.d(s,{Q:()=>n});var t=a(59051),l=a.n(t);const n=[{title:"monday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"tuesday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"wednesday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"thursday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"friday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"saturday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")},{title:"sunday",disabled:!1,from:l()("01:00:00","HH:mm:ss"),to:l()("23:00:00","HH:mm:ss")}]},35116:(e,s,a)=>{a.d(s,{A:()=>o});a(9950);var t=a(48538),l=a(44070),n=a(85923),r=a(70030),i=a(13311),d=a(44414);function o(e){let{size:s="",onClick:a,type:o="default",...c}=e;const{t:m}=(0,r.B)(),{isDemo:u}=(0,i.A)();return(0,d.jsx)(t.A,{size:s,icon:(0,d.jsx)(l.A,{}),onClick:e=>{u?n.oR.warning(m("cannot.work.demo")):a(e)},type:o,...c})}},43472:(e,s,a)=>{a.d(s,{A:()=>oe});var t=a(9950),l=a(59233),n=a(87094),r=a(41988),i=a(55902),d=a(40577),o=a(86971),c=a(99674),m=a(80737),u=a(48538),p=a(91854),h=a(70030),v=a(48970),x=a(59051),j=a.n(x),A=a(85923),f=a(74623),g=a(28429),b=a(84506),y=a(44414);const w=e=>{var s,a,x,w,_,k,H;let{form:S,handleSubmit:I}=e;const{t:q}=(0,h.B)(),C=(0,p.wA)(),N=(0,g.Zp)(),{state:P}=(0,g.zy)(),{uuid:D}=(0,g.g)(),{myShop:M}=(0,p.d4)((e=>e.myShop),p.bN),{activeMenu:Y}=(0,p.d4)((e=>e.menu),p.bN),[E,O]=(0,t.useState)(!1),[V,T]=(0,t.useState)(null!==(s=Y.data)&&void 0!==s&&null!==(a=s.img)&&void 0!==a&&a.length?[{name:null===(x=Y.data)||void 0===x?void 0:x.img}]:[]),[F,B]=(0,t.useState)(null);return(0,y.jsxs)(l.A,{form:S,layout:"vertical",onFinish:e=>{var s;const a={...e,birthday:j()(e.birthday).format("YYYY-MM-DD"),images:[null===V||void 0===V||null===(s=V[0])||void 0===s?void 0:s.name],shop_id:[null===M||void 0===M?void 0:M.id],role:"master"},t="seller/invitations/masters";O(!0),I(a).then((()=>{A.oR.success(q("successfully.created")),(0,p.vA)((()=>{C((0,f.EK)({...Y,nextUrl:t})),C((0,b.w)(null===P||void 0===P?void 0:P.paramsData))})),N(`/${t}`)})).catch((e=>B(e.response.data.params))).finally((()=>O(!1)))},children:[(0,y.jsxs)(n.A,{gutter:12,children:[(0,y.jsx)(r.A,{span:24,children:(0,y.jsx)(l.A.Item,{name:"avatar",label:q("images"),rules:[{required:!(null!==V&&void 0!==V&&V.length),message:q("required")}],children:(0,y.jsx)(v.A,{type:"users",imageList:V,setImageList:T,form:S,multiple:!1,name:"logo_img"})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("firstname"),name:"firstname",help:null===F||void 0===F||null===(w=F.firstname)||void 0===w?void 0:w[0],validateStatus:null!==F&&void 0!==F&&F.firstname?"error":"success",rules:[{required:!0,message:q("required")}],children:(0,y.jsx)(i.A,{className:"w-100",maxLength:20})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("lastname"),name:"lastname",help:null===F||void 0===F||null===(_=F.lastname)||void 0===_?void 0:_[0],validateStatus:null!==F&&void 0!==F&&F.lastname?"error":"success",rules:[{required:!0,message:q("required")}],children:(0,y.jsx)(i.A,{className:"w-100",maxLength:20})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("phone"),name:"phone",help:null===F||void 0===F||null===(k=F.phone)||void 0===k?void 0:k[0],validateStatus:null!==F&&void 0!==F&&F.phone?"error":"success",rules:[{required:!0,message:q("required")}],children:(0,y.jsx)(d.A,{min:0,className:"w-100"})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("birthday"),name:"birthday",rules:[{required:!0,message:q("required")}],children:(0,y.jsx)(o.A,{className:"w-100",disabledDate:e=>j()().add(-18,"years")<=e,defaultPickerValue:j()().add(-18,"years")})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("gender"),name:"gender",rules:[{required:!0,message:q("required")}],children:(0,y.jsxs)(c.A,{picker:"dayTime",className:"w-100",children:[(0,y.jsx)(c.A.Option,{value:"male",children:q("male")},"male"),(0,y.jsx)(c.A.Option,{value:"female",children:q("female")},"female")]})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("email"),name:"email",help:null===F||void 0===F||null===(H=F.email)||void 0===H?void 0:H[0],validateStatus:null!==F&&void 0!==F&&F.email?"error":"success",rules:[{required:!0,message:q("required")},{type:"email",message:q("invalid.email")}],children:(0,y.jsx)(i.A,{type:"email",className:"w-100"})})}),!D&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("password"),name:"password",help:null!==F&&void 0!==F&&F.password?F.password[0]:null,validateStatus:null!==F&&void 0!==F&&F.password?"error":"success",rules:[{required:!0,message:q("required")}],children:(0,y.jsx)(i.A.Password,{type:"password",className:"w-100",placeholder:"********"})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(l.A.Item,{label:q("password.confirmation"),help:null!==F&&void 0!==F&&F.password_confirmation?F.password_confirmation[0]:null,validateStatus:null!==F&&void 0!==F&&F.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:q("required")},e=>{let{getFieldValue:s}=e;return{validator:(e,a)=>a&&s("password")!==a?Promise.reject(q("two.passwords.dont.match")):Promise.resolve()}}],children:(0,y.jsx)(i.A.Password,{type:"password",placeholder:"********"})})})]})]}),(0,y.jsx)(m.A,{wrap:!0,children:(0,y.jsx)(u.A,{type:"primary",htmlType:"submit",loading:E,children:q("submit")})})]})};var _=a(54909),k=a(12916),H=a(23263),S=a(57796),I=a(25933),q=a(50384),C=a(34422),N=a(13239),P=a(94118),D=a(9213),M=a(82371);const Y="dashboard/seller/master-closed-dates",E=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M.A.get(`${Y}/${e}`,{params:s})},O=(e,s)=>M.A.put(`${Y}/${e}`,s),V={getAll:()=>M.A.get("dashboard/seller/user-working-days"),getById:e=>(0,M.A)(`dashboard/seller/user-working-days/${e}`),update:(e,s)=>M.A.put(`dashboard/seller/user-working-days/${e}`,s,{})};var T=a(51066);const F=e=>{var s;let{}=e;const{t:a}=(0,h.B)(),[i]=l.A.useForm(),d=[{from:new Date(1900,4,18),to:new Date(j()().subtract(1,"days"))}],{activeMenu:o}=(0,p.d4)((e=>e.menu),p.bN),c=null===o||void 0===o||null===(s=o.data)||void 0===s?void 0:s.master_id,[v,x]=(0,t.useState)(!0),[f,g]=(0,t.useState)([]),[b,w]=(0,t.useState)(!1),[_,M]=(0,t.useState)(!1),[Y,F]=(0,t.useState)(new Array(7).fill(!1)),B=(0,p.d4)((e=>{var s,a;return null===(s=e.globalSettings)||void 0===s||null===(a=s.settings)||void 0===a?void 0:a.using_12_hour_format}),p.bN),z=(0,T.Q)(),R=(e,s)=>{const a=[];for(let t=e;t<s;t++)a.push(t);return a},$=()=>({disabledHours:()=>R(0,1),disabledMinutes:()=>R(0,0),disabledSeconds:()=>R(0,60)});(0,t.useEffect)((()=>{M(!0),(async()=>{try{M(!0),await Promise.all([E(c).then((e=>{const s=e.data.closed_dates.map((e=>new Date(e.date)));g(s)})),V.getById(c).then((e=>{F(0!==e.data.dates.length?e.data.dates.map((e=>e.disabled)):[]),0!==e.data.dates.length&&i.setFieldsValue({working_days:e.data.dates.map((e=>({title:e.day,from:j()(e.from,"HH:mm:ss"),to:j()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)})))})}))])}finally{M(!1)}})().then()}),[]);const L=f&&f.length>0?(0,y.jsxs)(n.A,{children:[(0,y.jsx)(k.A,{style:{fontSize:14,padding:"4px 10px",width:"100%",marginTop:"10px"},children:a("Your.existing.vacations")}),(0,y.jsxs)(r.A,{span:24,className:"mt-2",children:[f.slice(0,v?1:f.length).map(((e,s)=>(0,y.jsxs)(m.A,{className:"d-flex justify-content-between",style:{borderBottom:"1px solid #4D5B75"},children:[(0,y.jsx)(r.A,{span:24,style:{fontSize:14,marginTop:"8px"},children:j()(e).format("YYYY-MM-DD")}),(0,y.jsx)(r.A,{span:24,children:(0,y.jsx)(k.A,{color:"red",className:"cursor-pointer mt-3 mb-2",style:{fontSize:14},onClick:()=>{return s=e,g(f.filter((e=>e!==s)));var s},children:a("remove")})})]},s))),(0,y.jsx)(u.A,{className:"mt-3 w-100",onClick:()=>{x(!v)},children:v?(0,y.jsx)(q.U29,{}):(0,y.jsx)(q.ZXT,{})})]})]}):(0,y.jsx)(k.A,{style:{fontSize:14,padding:"4px 10px",width:"100%"},children:"Please pick one or more days."});return(0,t.useEffect)((()=>{i.setFieldsValue({working_days:C.Q})}),[]),(0,y.jsx)(H.A,{loading:_,children:(0,y.jsxs)(l.A,{onFinish:e=>{w(!0);const s={dates:e.working_days.map((e=>({day:e.title,from:j()(e.from?e.from:"00").format("HH:mm"),to:j()(e.to?e.to:"00").format("HH:mm"),disabled:e.disabled})))},t={dates:f?f.map((e=>j()(e).format("YYYY-MM-DD"))):void 0,master_id:c};Promise.all([O(c,t),V.update(c,s)]).then((e=>{A.oR.success(a("successfully.created"))})).finally((()=>{w(!1)}))},form:i,children:[(0,y.jsxs)(n.A,{gutter:12,children:[(0,y.jsx)(r.A,{span:12,children:(0,y.jsx)(H.A,{title:a("master.working.days"),children:(0,y.jsx)(l.A.List,{name:"working_days",children:e=>(0,y.jsx)("div",{children:e.map(((e,s)=>(0,y.jsxs)(n.A,{gutter:12,align:"center",children:[(0,y.jsx)(r.A,{span:7,children:(0,y.jsx)(l.A.Item,{name:[s,"day"],children:(0,y.jsx)("span",{children:a(C.Q[s].title)})})}),Y[e.key]?(0,y.jsx)(r.A,{span:13,className:"mt-2",children:(0,y.jsx)("span",{children:a("shop.closed")})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.A,{span:7,children:(0,y.jsx)(l.A.Item,{rules:[{required:!1===Y[e.key]}],name:[s,"from"],children:(0,y.jsx)(S.A,{format:z,use12Hour:"1"===B,disabledTime:$,picker:"time",placeholder:a("start.time")})})}),(0,y.jsx)(r.A,{span:6,children:(0,y.jsx)(l.A.Item,{rules:[{required:!1===Y[e.key]}],name:[s,"to"],children:(0,y.jsx)(S.A,{format:z,use12Hour:"1"===B,disabledTime:$,picker:"time",placeholder:a("end.time")})})})]}),(0,y.jsx)(r.A,{span:4,children:(0,y.jsx)(l.A.Item,{name:[s,"disabled"],valuePropName:"checked",children:(0,y.jsx)(I.A,{checkedChildren:(0,y.jsx)(N.A,{}),unCheckedChildren:(0,y.jsx)(P.A,{}),checked:Y[e.key],onChange:()=>(e=>{const s=[...Y];s[e]=!Y[e],F(s)})(e.key)})})})]},e.key)))})})})}),(0,y.jsx)(r.A,{span:12,children:(0,y.jsxs)(H.A,{title:a("master.closed.days"),children:[(0,y.jsx)("p",{children:a("restaurant.closed.days.text")}),!_&&(0,y.jsx)(l.A.Item,{rules:[{required:!1,message:a("required")}],children:(0,y.jsx)(D.hv,{className:"datepicker",mode:"multiple",disabled:d,min:1,selected:f,onSelect:g,footer:L,showOutsideDays:!0})})]})})]}),(0,y.jsx)(u.A,{type:"primary",htmlType:"submit",loading:b,children:a("submit")})]})})};var B=a(55386),z=a(52913),R=a(24513),$=a(44070),L=a(53387),Q=a(35116),K=a(8168),G=a(76083),U=a(43194),Z=a(48676);const X=function(e){var s,a,l;let{setVisibleComponent:n,setEditId:r}=e;const{t:i}=(0,h.B)(),d=(0,p.wA)(),{setIsModalVisible:o}=(0,t.useContext)(B.o),{activeMenu:c}=(0,p.d4)((e=>e.menu),p.bN),{disabledTimes:v,params:x,meta:j,loading:g}=(0,p.d4)((e=>e.disabledTimes),p.bN),[b,w]=(0,t.useState)(!1),[_,k]=(0,t.useState)(),[S,I]=(0,t.useState)(null),q=null===c||void 0===c?void 0:c.data,C={search:null===q||void 0===q?void 0:q.search,sort:null===q||void 0===q?void 0:q.sort,column:null===q||void 0===q?void 0:q.column,master_id:null===q||void 0===q?void 0:q.master_id,...x},[N]=(0,t.useState)([{title:i("id"),dataIndex:"id",is_show:!0,sorter:!0,key:"id"},{title:i("title"),dataIndex:"title",is_show:!0,key:"title"},{title:i("repeats"),is_show:!0,dataIndex:"repeats",key:"repeats"},{title:i("date"),dataIndex:"date",key:"date",is_show:!0},{title:i("from"),dataIndex:"from",key:"from",is_show:!0},{title:i("to"),dataIndex:"to",key:"to",is_show:!0},{title:i("options"),dataIndex:"options",key:"options",is_show:!0,render:(e,s)=>(0,y.jsxs)(m.A,{children:[(0,y.jsx)(u.A,{type:"primary",icon:(0,y.jsx)(R.A,{}),onClick:()=>{D(s.id)}}),(0,y.jsx)(Q.A,{icon:(0,y.jsx)($.A,{}),onClick:()=>{k([s.id]),o(!0),I("delete")}})]})}]),P={selectedRowKeys:_,onChange:e=>{k(e)}},D=e=>{r(e),n("edit-form")};return(0,t.useEffect)((()=>{c.refetch&&(d((0,Z.aT)(C)),d((0,f.km)(c)))}),[c.refetch]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(H.A,{title:i("disabled.times"),children:[(0,y.jsxs)("div",{className:"flex align-items-center justify-content-between mb-4",children:[(0,y.jsx)(u.A,{type:"primary",icon:(0,y.jsx)(L.A,{}),onClick:()=>{n("add-form")},children:i("add.disabled.time")}),(0,y.jsx)(u.A,{onClick:()=>{null===_||0===_.length?A.oR.warning(i("select.the.product")):(o(!0),I("all.delete"))},icon:(0,y.jsx)($.A,{}),children:i("delete.selected")})]}),(0,y.jsx)(z.A,{scroll:{x:!0},rowSelection:P,columns:null===N||void 0===N?void 0:N.filter((e=>e.is_show)),dataSource:v,loading:g,pagination:{pageSize:null===x||void 0===x?void 0:x.perPage,page:(null===(s=c.data)||void 0===s?void 0:s.page)||1,total:null===j||void 0===j?void 0:j.total,defaultCurrent:null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.page,current:null===(l=c.data)||void 0===l?void 0:l.page},rowKey:e=>e.id,onChange:function(e,s,a){const{pageSize:t,current:l}=e,{field:n,order:r}=a,i=(0,K.A)(r);d((0,f.Ok)({activeMenu:c,data:{...c.data,perPage:t,page:l,column:n,sort:i}}))}})]}),(0,y.jsx)(G.A,{click:()=>{w(!0);const e={...Object.assign({},..._.map(((e,s)=>({[`ids[${s}]`]:e}))))};U.b.delete(e).then((()=>{A.oR.success(i("successfully.deleted")),k(null),o(!1),I(""),d((0,Z.aT)(C))})).finally((()=>w(!1)))},text:S,setText:k,loading:b})]})};var J=a(71999),W=a(40895);const ee=["dont_repeat","day","week","month","custom"],se=["day","week","month"],ae=["never","date","after"],te=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];const le=function(e){let{initialValues:s={},onSubmit:a,setVisibleComponent:m}=e;const{t:v}=(0,h.B)(),x=(0,p.wA)(),{activeMenu:f}=(0,p.d4)((e=>e.menu)),g=(0,p.d4)((e=>{var s,a;return null===(s=e.globalSettings)||void 0===s||null===(a=s.settings)||void 0===a?void 0:a.using_12_hour_format}),p.bN),[b,w]=(0,t.useState)((null===s||void 0===s?void 0:s.repeats)||""),[_,k]=(0,t.useState)((null===s||void 0===s?void 0:s.end_type)||""),[H,q]=(0,t.useState)((null===s||void 0===s?void 0:s.custom_repeat_type)||""),[C,N]=(0,t.useState)(!1),{defaultLang:P,languages:D}=(0,p.d4)((e=>e.formLang),p.bN),M=(0,T.Q)();return(0,y.jsxs)(l.A,{initialValues:s,layout:"vertical",onFinish:e=>{var s,t,l,n;N(!0);const r=void 0!==e.end_value?"date"===_?j()(null===e||void 0===e?void 0:e.end_value_date).format("YYYY-MM-DD"):null===e||void 0===e?void 0:e.end_value_number:void 0,i="custom"===b?"week"===H?[null===e||void 0===e||null===(s=e.custom_repeat_value)||void 0===s?void 0:s.every,...null===e||void 0===e||null===(t=e.custom_repeat_value)||void 0===t?void 0:t.weekDays]:[null===e||void 0===e||null===(l=e.custom_repeat_value)||void 0===l?void 0:l.every]:void 0,d={...e,date:j()(null===e||void 0===e?void 0:e.date).format("YYYY-MM-DD"),from:j()(null===e||void 0===e?void 0:e.from).format("HH:mm"),to:j()(null===e||void 0===e?void 0:e.to).format("HH:mm"),end_value:r,can_booking:null!==e&&void 0!==e&&e.can_booking?1:0,custom_repeat_value:i,master_id:null===(n=f.data)||void 0===n?void 0:n.master_id};return delete d.end_value_date,delete d.end_value_number,a(d).then((()=>{var e;A.oR.success("successfully.added"),m("table"),x((0,Z.aT)({master_id:null===(e=f.data)||void 0===e?void 0:e.master_id}))})).finally((()=>{N(!1)}))},children:[(0,y.jsxs)(n.A,{gutter:24,children:[(0,y.jsx)(W.A,{orientation:"left",plain:!0,children:v("overview")}),(0,y.jsx)(r.A,{span:8,children:D.map((e=>(0,y.jsx)(l.A.Item,{label:v("name"),name:`title[${e.locale}]`,rules:[{validator:(s,a)=>a||(null===e||void 0===e?void 0:e.locale)!==P?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(v("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.length)<2?Promise.reject(new Error(v("min.2.letters"))):Promise.resolve():Promise.reject(new Error(v("required")))}],hidden:e.locale!==P,children:(0,y.jsx)(i.A,{})},"title"+e.id)))}),(0,y.jsx)(r.A,{span:8,children:D.map((e=>(0,y.jsx)(l.A.Item,{label:v("description"),name:`description[${e.locale}]`,rules:[{validator:(s,a)=>a||(null===e||void 0===e?void 0:e.locale)!==P?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(v("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<5?Promise.reject(new Error(v("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(v("required")))}],hidden:e.locale!==P,children:(0,y.jsx)(i.A,{maxLength:150})},"description"+e.locale)))}),(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"can_booking",label:v("can.booking"),valuePropName:"can_booking",children:(0,y.jsx)(I.A,{defaultChecked:s.can_booking})})}),(0,y.jsx)(W.A,{orientation:"left",plain:!0,children:v("date")}),(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"date",label:v("date"),rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(o.A,{className:"w-100"})})}),(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"from",label:v("from"),rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(S.A,{use12Hours:"1"===g,className:"w-100",format:M})})}),(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"to",label:v("to"),rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(S.A,{className:"w-100",use12Hours:"1"===g,format:M})})}),(0,y.jsx)(W.A,{orientation:"left",plain:!0,children:v("repeat")}),(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"repeats",label:v("repeats"),rules:[{required:!0,message:v("required")}],help:"month"===b?`Repeat on the ${j()().date()} of every month`:void 0,children:(0,y.jsx)(c.A,{onChange:w,children:ee.map((e=>(0,y.jsx)(c.A.Option,{value:e,children:v(e)},e)))})})}),"custom"===b&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(W.A,{orientation:"left",plain:!0,children:v("custom.repeat")}),(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{label:v("every"),children:(0,y.jsxs)(n.A,{children:[(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:["custom_repeat_value","every"],rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(d.A,{min:1,className:"w-100"})})}),(0,y.jsx)(r.A,{span:16,children:(0,y.jsx)(l.A.Item,{name:["custom_repeat_type"],rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(c.A,{onChange:q,children:se.map((e=>(0,y.jsx)(c.A.Option,{value:e,children:v(e)},e)))})})})]})})}),"week"===H&&(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:["custom_repeat_value","weekDays"],rules:[{required:!0,message:v("required")}],label:v("on.days"),children:(0,y.jsx)(c.A,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Please select",children:te.map((e=>(0,y.jsx)(c.A.Option,{value:e,children:v(e)},e)))})})})]}),"dont_repeat"!==b&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(W.A,{orientation:"left",plain:!0,children:v("ends")}),(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"end_type",label:v("end.type"),rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(c.A,{onChange:k,children:ae.map((e=>(0,y.jsx)(c.A.Option,{value:e,children:v(e)},e)))})})}),"date"===_?(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"end_value_date",label:v("end.value"),rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(o.A,{className:"w-100"})})}):"after"===_?(0,y.jsx)(r.A,{span:8,children:(0,y.jsx)(l.A.Item,{name:"end_value_number",label:v("occurrences"),rules:[{required:!0,message:v("required")}],children:(0,y.jsx)(d.A,{min:1,className:"w-100"})})}):null]})]}),(0,y.jsx)(u.A,{type:"primary",htmlType:"submit",loading:C,children:v("submit")})]})};const ne=function(e){let{setVisibleComponent:s}=e;const{t:a}=(0,h.B)();return(0,y.jsx)(H.A,{extra:(0,y.jsxs)(m.A,{children:[(0,y.jsx)(u.A,{onClick:()=>s("table"),children:a("back")}),(0,y.jsx)(J.A,{})]}),children:(0,y.jsx)(le,{onSubmit:e=>U.b.create(e),setVisibleComponent:s})})};const re=function(e){let{setVisibleComponent:s,editId:a}=e;const{t:l}=(0,h.B)(),{languages:n}=(0,p.d4)((e=>e.formLang)),[r,i]=(0,t.useState)(!1),[d,o]=(0,t.useState)({});function c(e){if(!e)return{};const{translations:s=[]}=e,a=n.map((e=>{var a,t;return{[`title[${e.locale}]`]:null===(a=s.find((s=>s.locale===e.locale)))||void 0===a?void 0:a.title,[`description[${e.locale}]`]:null===(t=s.find((s=>s.locale===e.locale)))||void 0===t?void 0:t.description}}));return Object.assign({},...a)}return(0,t.useEffect)((()=>{var e;e=a,i(!0),U.b.getById(e).then((e=>{let{data:s}=e;const a={...s,...c(s),can_booking:Boolean(s.can_booking),date:j()(s.date),from:j()(s.from,"HH:mm"),to:j()(s.to,"HH:mm")};var t;s.end_value&&("date"===s.end_type?a.end_value_date=j()(s.end_value):a.end_value_number=s.end_value),"custom"===s.repeats&&(a.custom_repeat_value={},a.custom_repeat_value.every=null===s||void 0===s?void 0:s.custom_repeat_value[0],"week"===s.custom_repeat_type&&(a.custom_repeat_value.weekDays=null===s||void 0===s||null===(t=s.custom_repeat_value)||void 0===t?void 0:t.slice(1))),o(a)})).catch((e=>{throw e})).finally((()=>{i(!1)}))}),[]),(0,y.jsx)(H.A,{title:l("edit.disabled.time"),loading:r,extra:(0,y.jsxs)(m.A,{children:[(0,y.jsx)(u.A,{onClick:()=>s("table"),children:l("back")}),(0,y.jsx)(J.A,{})]}),children:!r&&(0,y.jsx)(le,{initialValues:d,onSubmit:e=>U.b.update(a,e),setVisibleComponent:s})})};const ie=function(){const[e,s]=(0,t.useState)("table"),[a,l]=(0,t.useState)();switch(e){case"table":return(0,y.jsx)(X,{setVisibleComponent:s,setEditId:l});case"add-form":return(0,y.jsx)(ne,{setVisibleComponent:s});case"edit-form":return(0,y.jsx)(re,{editId:a,setVisibleComponent:s});default:return(0,y.jsx)(X,{})}},{TabPane:de}=_.A,oe=e=>{let{form:s,handleSubmit:a}=e;const{t:t}=(0,h.B)(),{uuid:l}=(0,g.g)();return(0,y.jsx)(y.Fragment,{children:void 0===l?(0,y.jsx)(w,{form:s,handleSubmit:a}):(0,y.jsxs)(_.A,{tabPosition:"left",size:"small",children:[(0,y.jsx)(de,{tab:t("user"),children:(0,y.jsx)(w,{form:s,handleSubmit:a})},"user"),(0,y.jsx)(de,{tab:t("working.and.closed.days"),children:(0,y.jsx)(F,{})},"closed_days"),(0,y.jsx)(de,{tab:t("disabled.times"),children:(0,y.jsx)(ie,{})},"disabled_times")]})})}},51066:(e,s,a)=>{a.d(s,{Q:()=>n});var t=a(17706),l=a(80415);const n=()=>{var e,s,a,n;return null!==(e=null===(s=t.M.getState())||void 0===s||null===(a=s.globalSettings)||void 0===a||null===(n=a.settings)||void 0===n?void 0:n.hour_format)&&void 0!==e?e:l.G}},53387:(e,s,a)=>{a.d(s,{A:()=>d});var t=a(89379),l=a(9950);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var r=a(25085),i=function(e,s){return l.createElement(r.A,(0,t.A)((0,t.A)({},e),{},{ref:s,icon:n}))};const d=l.forwardRef(i)},57796:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(58168),l=a(9950),n=a(86971),r=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)s.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]])}return a},i=n.A.TimePicker,d=n.A.RangePicker,o=l.forwardRef((function(e,s){return l.createElement(d,(0,t.A)({},e,{dropdownClassName:e.popupClassName,picker:"time",mode:void 0,ref:s}))})),c=l.forwardRef((function(e,s){var a=e.addon,n=e.renderExtraFooter,d=e.popupClassName,o=r(e,["addon","renderExtraFooter","popupClassName"]),c=l.useMemo((function(){return n||(a||void 0)}),[a,n]);return l.createElement(i,(0,t.A)({},o,{dropdownClassName:d,mode:void 0,ref:s,renderExtraFooter:c}))}));c.displayName="TimePicker",c.RangePicker=o;const m=c},80415:(e,s,a)=>{a.d(s,{G:()=>r,HV:()=>l,LH:()=>t,PR:()=>n,wO:()=>d,xt:()=>i});const t={new:[1,2,3,4,5],accepted:[1,2,3,4,5],ready:[1,2,3,4,5],on_a_way:[1,2,3,4,5],delivered:[1,2,3,4,5],canceled:[1,2,3,4,5],cooking:[1,2,3,4,5]},l=(new Date,new Date,["new","accepted","ready","on_a_way","pause","delivered","canceled"]),n=30,r="HH:mm",i="hh:mm a",d=!0}}]);