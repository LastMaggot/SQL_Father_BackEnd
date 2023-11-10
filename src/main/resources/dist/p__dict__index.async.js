"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[918],{53386:function(jt,K,e){e.r(K),e.d(K,{default:function(){return St}});var q=e(27424),u=e.n(q),_=e(42122),x=e.n(_),tt=e(17061),H=e.n(tt),et=e(17156),at=e.n(et),nt=e(74278),rt=e(7189),E=e(93955),T=e(18036),S=e(48086),O=e(38272),V=e(19650),Q=e(60331),X=e(97272),st=e(27049),y=e(71577),ut=e(24565),it=e(273),s=e(67294),t=e(85893),ot=function(r){var c=r.dataList,i=r.pagination,j=r.loading,v=r.showTag,Z=v===void 0?!0:v,F=(0,s.useState)(!1),o=u()(F,2),L=o[0],C=o[1],l=(0,s.useState)(0),I=u()(l,2),A=I[0],J=I[1],M=(0,s.useState)(),R=u()(M,2),B=R[0],G=R[1],z=(0,s.useState)(!1),U=u()(z,2),$=U[0],P=U[1],W=(0,T.useModel)("@@initialState"),m=W.initialState,h=m==null?void 0:m.loginUser,N=function(){var p=at()(H()().mark(function n(d){var g;return H()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(g=S.ZP.loading("\u6B63\u5728\u5220\u9664"),d){a.next=3;break}return a.abrupt("return",!0);case 3:return a.prev=3,a.next=6,(0,E.KF)({id:d});case 6:S.ZP.success("\u64CD\u4F5C\u6210\u529F"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(3),S.ZP.error("\u64CD\u4F5C\u5931\u8D25\uFF0C"+a.t0.message);case 12:return a.prev=12,g(),a.finish(12);case 15:case"end":return a.stop()}},n,null,[[3,9,12,15]])}));return function(d){return p.apply(this,arguments)}}();return(0,t.jsxs)("div",{className:"dict-list",children:[(0,t.jsx)(O.ZP,{itemLayout:"vertical",size:"large",loading:j,pagination:i,dataSource:c,renderItem:function(n,d){return(0,t.jsxs)(O.ZP.Item,{children:[(0,t.jsx)(O.ZP.Item.Meta,{title:(0,t.jsxs)(V.Z,{align:"center",children:[(0,t.jsx)("div",{children:n.name}),(0,t.jsxs)("div",{children:[Z&&n.reviewStatus===1&&(0,t.jsx)(Q.Z,{color:"success",children:"\u516C\u5F00"}),n.userId===1&&(0,t.jsx)(Q.Z,{color:"gold",children:"\u5B98\u65B9"})]})]}),description:(0,t.jsx)(X.Z.Paragraph,{type:"secondary",ellipsis:{rows:6,expandable:!0,symbol:"\u5C55\u5F00"},copyable:!0,children:JSON.parse(n.content).join(",")})}),(0,t.jsxs)(V.Z,{split:(0,t.jsx)(st.Z,{type:"vertical"}),style:{fontSize:14},children:[(0,t.jsx)(X.Z.Text,{type:"secondary",children:n.createTime.toString().split("T")[0]}),(0,t.jsx)(y.Z,{type:"text",loading:$,onClick:function(){P(!0),(0,E.Zw)(n.id).then(function(f){G(f.data)}).catch(function(f){S.ZP.error("\u590D\u5236\u5931\u8D25\uFF0C"+f.message)}).finally(function(){return P(!1)})},children:"\u751F\u6210\u8868"}),(0,t.jsx)(y.Z,{type:"text",onClick:function(){J(n.id),C(!0)},children:"\u4E3E\u62A5"}),h&&h.id===n.userId&&(0,t.jsx)(ut.Z,{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u4E48\uFF1F",onConfirm:function(){N(n.id)},children:(0,t.jsx)(y.Z,{type:"text",danger:!0,children:"\u5220\u9664"})})]})]},d)}}),(0,t.jsx)(rt.Z,{visible:L,reportedId:A,onClose:function(){C(!1)}}),(0,t.jsx)(it.Z,{title:"\u751F\u6210\u5B57\u5178\u8868\u6210\u529F",contentWrapperStyle:{width:"80%",minWidth:320},open:!!B,onClose:function(){return G(void 0)},children:(0,t.jsx)(nt.Z,{result:B,showCard:!1})})]})},lt=ot,dt=e(91894),ct=e(4107),vt=e(14277),Y=10,ht=function(r){var c=r.title,i=c===void 0?"\u516C\u5F00\u8BCD\u5E93":c,j=r.needLogin,v=j===void 0?!1:j,Z=r.showTag,F=Z===void 0?!0:Z,o=r.onLoad,L=r.onImport,C=(0,s.useState)([]),l=u()(C,2),I=l[0],A=l[1],J=(0,s.useState)(0),M=u()(J,2),R=M[0],B=M[1],G=(0,s.useState)(!0),z=u()(G,2),U=z[0],$=z[1],P={current:1,pageSize:Y,sortField:"createTime",sortOrder:"descend"},W=(0,s.useState)(P),m=u()(W,2),h=m[0],N=m[1],p=(0,T.useModel)("@@initialState"),n=p.initialState,d=n==null?void 0:n.loginUser,g=function(){(0,E.Lp)(x()(x()({},h),{},{reviewStatus:1})).then(function(a){A(a.data.records),B(a.data.total)}).catch(function(a){S.ZP.error("\u52A0\u8F7D\u5931\u8D25\uFF0C"+a.message)})};return(0,s.useEffect)(function(){v&&!d||($(!0),o?o(h,A,B):g(),$(!1))},[h]),(0,t.jsx)("div",{className:"dict-info-card",children:(0,t.jsx)(dt.Z,{title:i,extra:(0,t.jsx)(T.Link,{to:"/",children:(0,t.jsx)(y.Z,{type:"primary",children:"\u521B\u5EFA\u8BCD\u5E93"})}),children:!v||d?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V.Z,{children:(0,t.jsx)(ct.Z.Search,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",enterButton:"\u641C\u7D22",onSearch:function(a){N(x()(x()({},P),{},{name:a}))}})}),(0,t.jsx)(lt,{pagination:{total:R,onChange:function(a){N(x()(x()({},h),{},{current:a})),window.scrollTo({top:0})},pageSize:Y},dataList:I,loading:U,showTag:F,onImport:L})]}):(0,t.jsx)(vt.Z,{description:(0,t.jsx)(T.Link,{to:"/user/login",children:(0,t.jsx)(y.Z,{type:"primary",ghost:!0,style:{marginTop:8},children:"\u8BF7\u5148\u767B\u5F55"})})})})})},w=ht,gt=e(64463),D=e(47933),ft=e(71230),b=e(15746),xt=function(){var r=(0,s.useState)("half"),c=u()(r,2),i=c[0],j=c[1],v=function(o,L,C){(0,E.hI)(o).then(function(l){L(l.data.records),C(l.data.total)}).catch(function(l){S.ZP.error("\u52A0\u8F7D\u5931\u8D25\uFF0C"+l.message)})},Z=function(o){j(o.target.value)};return(0,t.jsx)("div",{id:"indexPage",children:(0,t.jsx)(gt._zJ,{title:(0,t.jsxs)(t.Fragment,{children:["\u4F7F\u7528\u73B0\u6210\u7684\u8BCD\u5E93\u6765\u751F\u6210\u7279\u5B9A\u6570\u636E\uFF0C\u6216\u7528\u4F5C\u7814\u7A76\u6570\u636E\u96C6\uFF01",(0,t.jsx)("a",{href:"https://www.bilibili.com/video/BV1eP411N7B7/",target:"_blank",rel:"noreferrer",children:"\u67E5\u770B\u89C6\u9891\u6559\u7A0B"})]}),extra:(0,t.jsxs)("div",{style:{marginLeft:0},children:["\u5207\u6362\u5E03\u5C40\uFF1A",(0,t.jsxs)(D.ZP.Group,{onChange:Z,value:i,children:[(0,t.jsx)(D.ZP.Button,{value:"input",children:"\u516C\u5F00"}),(0,t.jsx)(D.ZP.Button,{value:"half",children:"\u540C\u5C4F"}),(0,t.jsx)(D.ZP.Button,{value:"output",children:"\u4E2A\u4EBA"})]})]}),children:(0,t.jsxs)(ft.Z,{gutter:[12,12],children:[(0,t.jsx)(b.Z,{xs:24,xl:i==="half"?12:24,order:i==="output"?2:1,children:(0,t.jsx)(w,{title:"\u516C\u5F00\u8BCD\u5E93",showTag:!1})}),(0,t.jsx)(b.Z,{xs:24,xl:i==="half"?12:24,order:i==="output"?1:2,children:(0,t.jsx)(w,{title:"\u4E2A\u4EBA\u8BCD\u5E93",onLoad:v,needLogin:!0})})]})})})},St=xt}}]);
