"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[441],{55375:function(ee,j,n){n.d(j,{Jy:function(){return u},Wk:function(){return k},fk:function(){return I},lu:function(){return a},ri:function(){return v},rl:function(){return L},wn:function(){return F}});var Q="SQL\u4E4B\u7236",u=["tinyint","smallint","mediumint","int","bigint","float","double","decimal","date","time","year","datetime","timestamp","char","varchar","tinytext","text","mediumtext","longtext","tinyblob","blob","mediumblob","longblob","binary","varbinary"],L=["CURRENT_TIMESTAMP"],a={fieldName:"username",comment:"\u7528\u6237\u540D",defaultValue:void 0,fieldType:"varchar(256)",mockType:"\u968F\u673A",mockParams:"\u4EBA\u540D",notNull:!0,primaryKey:!1,autoIncrement:!1},v=[{fieldName:"id",comment:"\u4E3B\u952E",defaultValue:void 0,fieldType:"bigint",mockType:"\u4E0D\u6A21\u62DF",notNull:!0,primaryKey:!0,autoIncrement:!0},{fieldName:"create_time",comment:"\u521B\u5EFA\u65F6\u95F4",defaultValue:"CURRENT_TIMESTAMP",fieldType:"datetime",mockType:"\u4E0D\u6A21\u62DF",notNull:!0,primaryKey:!1,autoIncrement:!1},{fieldName:"update_time",comment:"\u66F4\u65B0\u65F6\u95F4",defaultValue:"CURRENT_TIMESTAMP",fieldType:"datetime",mockType:"\u4E0D\u6A21\u62DF",notNull:!0,primaryKey:!1,autoIncrement:!1,onUpdate:"CURRENT_TIMESTAMP"},{fieldName:"is_deleted",comment:"\u662F\u5426\u5220\u9664(0-\u672A\u5220, 1-\u5DF2\u5220)",defaultValue:"0",fieldType:"tinyint",mockType:"\u4E0D\u6A21\u62DF",notNull:!0,primaryKey:!1,autoIncrement:!1}],I=["\u56FA\u5B9A","\u968F\u673A","\u9012\u589E","\u89C4\u5219","\u8BCD\u5E93","\u4E0D\u6A21\u62DF"],F=["\u5B57\u7B26\u4E32","\u6574\u6570","\u5C0F\u6570","\u65E5\u671F","\u65F6\u95F4\u6233","\u7F51\u5740","IP","\u90AE\u7BB1","\u624B\u673A\u53F7","\u4EBA\u540D","\u57CE\u5E02","\u5927\u5B66"],k={0:{text:"\u5F85\u5BA1\u6838"},1:{text:"\u901A\u8FC7"},2:{text:"\u62D2\u7EDD"}}},74926:function(ee,j,n){n.r(j),n.d(j,{default:function(){return y}});var Q=n(42122),u=n.n(Q),L=n(17061),a=n.n(L),v=n(17156),I=n.n(v),F=n(27424),k=n.n(F),V=n(55375),w=n(91154),S=n(64463),f=n(48086),$=n(19650),Y=n(27049),b=n(97272),z=n(24565),N=n(71577),G=n(67294),O=n(50146),s=n(85893),K=function(){var e=I()(a()().mark(function o(m){var p;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=f.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),t.prev=1,t.next=4,(0,w.ap)(u()({},m));case 4:return p(),f.ZP.success("\u6DFB\u52A0\u6210\u529F"),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(1),p(),f.ZP.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),t.abrupt("return",!1);case 14:case"end":return t.stop()}},o,null,[[1,9]])}));return function(m){return e.apply(this,arguments)}}(),X=function(o){var m=o.modalVisible,p=o.columns,E=o.onSubmit,t=o.onCancel;return(0,s.jsx)(O.Z,{destroyOnClose:!0,title:"\u65B0\u5EFA",open:m,onCancel:function(){return t()},footer:null,children:(0,s.jsx)(S.QVr,{onSubmit:function(){var R=I()(a()().mark(function A(_){var U;return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,K(_);case 2:U=P.sent,U&&(E==null||E());case 4:case"end":return P.stop()}},A)}));return function(A){return R.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:p})})},W=X,q=function(){var e=I()(a()().mark(function o(m){var p;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=f.ZP.loading("\u6B63\u5728\u66F4\u65B0"),t.prev=1,t.next=4,(0,w.Jn)(m);case 4:return p(),f.ZP.success("\u66F4\u65B0\u6210\u529F"),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(1),p(),f.ZP.error("\u66F4\u65B0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),t.abrupt("return",!1);case 14:case"end":return t.stop()}},o,null,[[1,9]])}));return function(m){return e.apply(this,arguments)}}(),J=function(o){var m=o.oldData,p=o.columns,E=o.modalVisible,t=o.onSubmit,R=o.onCancel;return(0,s.jsx)(O.Z,{destroyOnClose:!0,title:"\u66F4\u65B0",open:E,onCancel:function(){return R()},footer:null,children:(0,s.jsx)(S.QVr,{onSubmit:function(){var A=I()(a()().mark(function _(U){var B;return a()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,q(u()(u()({},U),{},{id:m.id}));case 2:B=D.sent,B&&(t==null||t());case 4:case"end":return D.stop()}},_)}));return function(_){return A.apply(this,arguments)}}(),rowKey:"id",type:"form",form:{initialValues:m},columns:p})})},r=J,i=function(){var o=(0,G.useState)(!1),m=k()(o,2),p=m[0],E=m[1],t=(0,G.useState)(!1),R=k()(t,2),A=R[0],_=R[1],U=(0,G.useState)({}),B=k()(U,2),P=B[0],D=B[1],H=(0,G.useRef)(),te=function(){var T=I()(a()().mark(function C(d){var h,g;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(h=f.ZP.loading("\u6B63\u5728\u5220\u9664"),d!=null&&d.id){l.next=3;break}return l.abrupt("return");case 3:return l.prev=3,l.next=6,(0,w.G9)({id:d.id});case 6:f.ZP.success("\u64CD\u4F5C\u6210\u529F"),(g=H.current)===null||g===void 0||g.reload(),l.next=13;break;case 10:l.prev=10,l.t0=l.catch(3),f.ZP.error("\u64CD\u4F5C\u5931\u8D25\uFF0C"+l.t0.message);case 13:return l.prev=13,h(),l.finish(13);case 16:case"end":return l.stop()}},C,null,[[3,10,13,16]])}));return function(d){return T.apply(this,arguments)}}(),ne=function(){var T=I()(a()().mark(function C(d,h){var g,M;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return g=f.ZP.loading("\u5904\u7406\u4E2D"),c.prev=1,c.next=4,(0,w.Jn)({id:d.id,reviewStatus:h});case 4:f.ZP.success("\u64CD\u4F5C\u6210\u529F"),(M=H.current)===null||M===void 0||M.reload(),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),f.ZP.error("\u64CD\u4F5C\u5931\u8D25\uFF0C"+c.t0.message);case 11:return c.prev=11,g(),c.finish(11);case 14:case"end":return c.stop()}},C,null,[[1,8,11,14]])}));return function(d,h){return T.apply(this,arguments)}}(),x=[{title:"id",dataIndex:"id",valueType:"index"},{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u5185\u5BB9",dataIndex:"content",valueType:"textarea"},{title:"\u5BA1\u6838\u72B6\u6001",dataIndex:"reviewStatus",valueEnum:V.Wk},{title:"\u5BA1\u6838\u4FE1\u606F",dataIndex:"reviewMessage"},{title:"\u521B\u5EFA\u8005",dataIndex:"userId",valueType:"text",hideInForm:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime",sorter:!0,hideInForm:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(C,d){return(0,s.jsxs)($.Z,{split:(0,s.jsx)(Y.Z,{type:"vertical"}),children:[(0,s.jsx)(b.Z.Link,{onClick:function(){D(d),_(!0)},children:"\u4FEE\u6539"}),d.reviewStatus!==1&&(0,s.jsx)(b.Z.Link,{onClick:function(){ne(d,1)},children:"\u901A\u8FC7"}),d.reviewStatus!==2&&(0,s.jsx)(b.Z.Link,{type:"danger",onClick:function(){ne(d,2)},children:"\u62D2\u7EDD"}),(0,s.jsx)(z.Z,{title:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u4E48\uFF1F",onConfirm:function(){return te(d)},okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",children:(0,s.jsx)(b.Z.Link,{type:"danger",children:"\u5220\u9664"})})]})}}];return(0,s.jsxs)(S._zJ,{children:[(0,s.jsx)(S.QVr,{headerTitle:"\u8868\u4FE1\u606F\u7BA1\u7406",actionRef:H,rowKey:"id",search:{labelWidth:"auto",defaultCollapsed:!1},toolBarRender:function(){return[(0,s.jsx)(N.Z,{type:"primary",onClick:function(){return E(!0)},children:"\u65B0\u5EFA"},"1")]},request:function(){var T=I()(a()().mark(function C(d,h){var g,M,l,c,re;return a()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:g=u()({},d);for(M in h)g.sortField=M,g.sortOrder=h[M];return Z.next=4,(0,w.ti)(g);case 4:return l=Z.sent,c=l.data,re=l.code,Z.abrupt("return",{data:(c==null?void 0:c.records)||[],success:re===0,total:c.total});case 8:case"end":return Z.stop()}},C)}));return function(C,d){return T.apply(this,arguments)}}(),columns:x}),(0,s.jsx)(W,{modalVisible:p,columns:x,onSubmit:function(){},onCancel:function(){return E(!1)}}),(0,s.jsx)(r,{modalVisible:A,oldData:P,columns:x,onSubmit:function(){},onCancel:function(){return _(!1)}})]})},y=i},91154:function(ee,j,n){n.d(j,{G9:function(){return X},Jn:function(){return s},Lj:function(){return q},ap:function(){return z},lU:function(){return f},mX:function(){return w},ti:function(){return Y}});var Q=n(17061),u=n.n(Q),L=n(17156),a=n.n(L),v=n(18036);function I(r){return F.apply(this,arguments)}function F(){return F=_asyncToGenerator(_regeneratorRuntime().mark(function r(i){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/field_info/list",{method:"GET",params:i}));case 1:case"end":return e.stop()}},r)})),F.apply(this,arguments)}function k(r){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime().mark(function r(i){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/field_info/my/list",{method:"GET",params:i}));case 1:case"end":return e.stop()}},r)})),V.apply(this,arguments)}function w(r){return S.apply(this,arguments)}function S(){return S=a()(u()().mark(function r(i){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.request)("/field_info/my/add/list/page",{method:"GET",params:i}));case 1:case"end":return e.stop()}},r)})),S.apply(this,arguments)}function f(r){return $.apply(this,arguments)}function $(){return $=a()(u()().mark(function r(i){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.request)("/field_info/my/list/page",{method:"GET",params:i}));case 1:case"end":return e.stop()}},r)})),$.apply(this,arguments)}function Y(r){return b.apply(this,arguments)}function b(){return b=a()(u()().mark(function r(i){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.request)("/field_info/list/page",{method:"GET",params:i}));case 1:case"end":return e.stop()}},r)})),b.apply(this,arguments)}function z(r){return N.apply(this,arguments)}function N(){return N=a()(u()().mark(function r(i){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.request)("/field_info/add",{method:"POST",headers:{"Content-Type":"application/json"},data:i}));case 1:case"end":return e.stop()}},r)})),N.apply(this,arguments)}function G(r){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function r(i){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/field_info/get",{method:"GET",params:{id:i}}));case 1:case"end":return e.stop()}},r)})),O.apply(this,arguments)}function s(r){return K.apply(this,arguments)}function K(){return K=a()(u()().mark(function r(i){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.request)("/field_info/update",{method:"POST",headers:{"Content-Type":"application/json"},data:i}));case 1:case"end":return e.stop()}},r)})),K.apply(this,arguments)}function X(r){return W.apply(this,arguments)}function W(){return W=a()(u()().mark(function r(i){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.request)("/field_info/delete",{method:"POST",headers:{"Content-Type":"application/json"},data:i}));case 1:case"end":return e.stop()}},r)})),W.apply(this,arguments)}function q(r){return J.apply(this,arguments)}function J(){return J=a()(u()().mark(function r(i){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.request)("/field_info/generate/sql",{method:"POST",headers:{"Content-Type":"application/json"},data:i}));case 1:case"end":return e.stop()}},r)})),J.apply(this,arguments)}}}]);
