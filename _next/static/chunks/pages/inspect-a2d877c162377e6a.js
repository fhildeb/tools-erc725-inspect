(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{47136:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inspect",function(){return n(78071)}])},94802:function(e,t,n){"use strict";n.d(t,{$:function(){return r},D:function(){return s}});var r="https://rpc.l14.lukso.network",s="https://ipfs.lukso.network/ipfs"},49940:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(34051),s=n.n(r),a=n(67294),c=n(3283),i=n.n(c),u=n(94802);function o(e,t,n,r,s,a,c){try{var i=e[a](c),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(r,s)}function l(){var e=(0,a.useState)(),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){var e,t=(e=s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(i())(u.$),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){o(a,r,s,c,i,"next",e)}function i(e){o(a,r,s,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();e().then((function(e){n(e)}))}),[]),t}},78071:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(34051),s=n.n(r),a=n(85893),c=n(11163),i=n(9008),u=n.n(i),o=n(67294),l=n(18269),d=n(61903),p=n(49940);function h(e,t,n,r,s,a,c){try{var i=e[a](c),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(r,s)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){h(a,r,s,c,i,"next",e)}function i(e){h(a,r,s,c,i,"throw",e)}c(void 0)}))}}var v=function(){var e=f(s().mark((function e(t,n,r){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new r.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes[]",name:"",internalType:"bytes[]"}],name:"getDataMultiple",inputs:[{type:"bytes32[]",name:"_keys",internalType:"bytes32[]"}]}],t),c=[],e.prev=2,e.next=5,a.methods.getDataMultiple(n).call();case 5:c=e.sent,e.next=15;break;case 8:return e.prev=8,e.t0=e.catch(2),console.log(e.t0.message),console.log("getDataMultiple not working, fetching with getData"),e.next=14,Promise.all(n.map((function(e){return m(t,r,e)})));case 14:c=e.sent;case 15:return e.abrupt("return",c);case 16:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var e=f(s().mark((function e(t,n,r){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new n.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes",name:"_value",internalType:"bytes"}],name:"getData",inputs:[{type:"bytes32",name:"_key",internalType:"bytes32"}]}],t),e.prev=2,e.next=5,a.methods.getData(r).call();case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(){var e=f(s().mark((function e(t,n,r){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new r.eth.Contract([{stateMutability:"view",type:"function",inputs:[{internalType:"bytes32[]",name:"_keys",type:"bytes32[]"}],name:"getData",outputs:[{internalType:"bytes[]",name:"values",type:"bytes[]"}]}],t),c=[],e.prev=2,e.next=5,a.methods.getData(n).call();case 5:c=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return e.abrupt("return",c);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),y=function(){var e=f(s().mark((function e(t,n){var r,a,c,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new n.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"supportsInterface",inputs:[{type:"bytes4",name:"interfaceId",internalType:"bytes4"}]}],t),a=!1,e.prev=2,e.next=5,r.methods.supportsInterface("0x44c028fe").call();case 5:a=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return c=!1,e.prev=12,e.next=15,r.methods.supportsInterface("0x5a988c0f").call();case 15:c=e.sent,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(12),console.log(e.t1.message);case 21:if(i=!1,c){e.next=32;break}return e.prev=23,e.next=26,r.methods.supportsInterface("0x2bd57b73").call();case 26:i=e.sent,e.next=32;break;case 29:e.prev=29,e.t2=e.catch(23),console.log(e.t2.message);case 32:return e.abrupt("return",{isErc725X:a,isErc725YLegacy:i,isErc725Y:c});case 33:case"end":return e.stop()}}),e,null,[[2,8],[12,18],[23,29]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=f(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new n.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes32[]",name:"",internalType:"bytes32[]"}],name:"allDataKeys",inputs:[]}],t),a=[],e.prev=2,e.next=5,r.methods.allDataKeys().call();case 5:a=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}(),k=n(87918),g=n(78645),j=function(e){var t=e.address,n=e.showInspectButton,r=void 0===n||n;return(0,a.jsxs)("div",{className:"buttons is-centered are-small pt-2",children:[(0,a.jsx)("a",{className:"button is-primary is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/".concat(t),children:"View on UP as Profile \ud83e\uddd1\u200d\ud83c\udfa4"}),(0,a.jsx)("a",{className:"button is-info is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/asset/".concat(t),children:"View on UP as Asset \ud83d\udc57"}),(0,a.jsx)("a",{className:"button is-link is-light",target:"_blank",rel:"noreferrer",href:"https://blockscout.com/lukso/l14/address/".concat(t),children:"View on Blockscout \u26d3"}),r&&(0,a.jsx)("a",{className:"button is-link is-light",href:"".concat(window.location.href.split("?")[0],"?address=").concat(t),children:"ERC725 Inspect \ud83d\udd0d"})]})},w=n(94802);var N=function(e){var t=e.erc725JSONSchema,n=e.value;if("Address"===t.valueContent)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("code",{children:n}),(0,a.jsx)(j,{address:n})]});var r,s=[t],c=new g.pY(s);try{r=c.decodeData(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t.name,n))}catch(i){return(0,a.jsx)("span",{children:"Can't decode this key"})}try{return(0,a.jsxs)("div",{children:[(0,a.jsx)("pre",{children:JSON.stringify(r[t.name],null,4)}),r[t.name].url&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{children:["URL: ",r[t.name].url]})," -"," ",-1!==r[t.name].url.indexOf("ipfs://")&&(0,a.jsxs)(a.Fragment,{children:["[",(0,a.jsx)("a",{className:"has-text-link",target:"_blank",rel:"noreferrer",href:"".concat(w.D,"/").concat(r[t.name].url.replace("ipfs://","")),children:"LUKSO IPFS"}),"]"]})]})]})}catch(u){return(0,a.jsx)("span",{children:"Can't decode this key"})}},E=JSON.parse('[{"name":"SupportedStandards:ERC725Account","key":"0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6","keyType":"Singleton","valueContent":"0xafdeb5d6","valueType":"bytes"}]');function C(e,t,n,r,s,a,c){try{var i=e[a](c),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(r,s)}var S=new g.ZP([]),T=function(e){var t=e.address,n=e.isErc725Y,r=e.isErc725YLegacy,c=(0,o.useState)([]),i=c[0],u=c[1],l=(0,p.Z)();return(0,o.useEffect)((function(){var e=function(){var e,a=(e=s().mark((function e(){var a,c,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}return e.abrupt("return");case 2:if(n||r){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,b(t,l);case 7:if(a=e.sent,c=[],!n){e.next=15;break}return e.next=12,x(t,a,l);case 12:c=e.sent,e.next=18;break;case 15:return e.next=17,v(t,a,l);case 17:c=e.sent;case 18:console.log(a),i=S.getSchema(a,E),console.log("schema",i),u(a.map((function(e,t){return{key:e,value:c[t],schema:i[e]||{name:"UNKNOWN",key:e,keyType:"UNKNOWN",valueContent:"UNKNOWN",valueType:"UNKNOWN"}}}))),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(4),u([]);case 27:case"end":return e.stop()}}),e,null,[[4,24]])})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){C(a,r,s,c,i,"next",e)}function i(e){C(a,r,s,c,i,"throw",e)}c(void 0)}))});return function(){return a.apply(this,arguments)}}();e()}),[t,l,n,r]),n||r?(0,a.jsx)("div",{className:"columns is-multiline",children:i.map((function(e){return(0,a.jsx)("div",{className:"column is-full",children:(0,a.jsxs)("div",{className:"content py-5",children:[(0,a.jsxs)("h4",{className:"title is-4",children:[e.schema.name," ",(0,a.jsx)(k.Z,{label:e.schema.keyType,color:"success",variant:"outlined",size:"small"})]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Key: ",(0,a.jsx)("code",{children:e.schema.key})]}),(0,a.jsxs)("li",{children:["Raw value"," ",(0,a.jsx)("span",{className:"tag is-link is-light",children:e.schema.valueType}),": ",(0,a.jsx)("code",{children:e.value})]}),(0,a.jsxs)("li",{children:["Decoded value"," ",(0,a.jsx)("span",{className:"tag is-link is-light",children:e.schema.valueContent}),":"," ",(0,a.jsx)(N,{erc725JSONSchema:e.schema,value:e.value})]}),"AddressMappingWithGrouping"===e.schema.keyType&&(0,a.jsxs)("li",{children:["Mapped address:"," ",(0,a.jsxs)("code",{children:["0x",e.schema.name.split(":").pop()]})," ",(0,a.jsx)(j,{address:"0x".concat(e.schema.name.split(":").pop())})]})]})]})},e.key)}))}):null};function P(e,t,n,r,s,a,c){try{var i=e[a](c),u=i.value}catch(o){return void n(o)}i.done?t(u):Promise.resolve(u).then(r,s)}var _=function(){var e=(0,c.useRouter)(),t=(0,o.useState)("0xb8E120e7e5EAe7bfA629Db5CEFfA69C834F74e99"),n=t[0],r=t[1],i=(0,o.useState)(!1),h=i[0],f=i[1],v=(0,o.useState)(!1),m=v[0],x=v[1],b=(0,o.useState)(!1),k=b[0],g=b[1],w=(0,o.useState)(!1),N=w[0],E=w[1],C=(0,o.useState)("Copy share link"),S=C[0],_=C[1],R=(0,o.useState)(""),D=R[0],O=R[1],Y=(0,p.Z)();return(0,o.useEffect)((function(){e.query.address&&r(e.query.address)}),[e.query.address]),(0,o.useEffect)((function(){var t=function(){var t,r=(t=s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Y){t.next=2;break}return t.abrupt("return");case 2:if(x(!1),g(!1),E(!1),O(""),_("Copy share link"),(0,l.isAddress)(n)){t.next=10;break}return O("Address is not valid"),t.abrupt("return");case 10:return e.push("/inspect?address=".concat(n)),f(!0),t.next=14,y(n,Y);case 14:r=t.sent,console.log(r),x(r.isErc725X),g(r.isErc725Y),E(r.isErc725YLegacy),f(!1);case 20:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function c(e){P(a,r,s,c,i,"next",e)}function i(e){P(a,r,s,c,i,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[n,Y]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u(),{children:(0,a.jsx)("title",{children:"Inspect - ERC725 Tools"})}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("article",{className:"message is-info",children:(0,a.jsxs)("div",{className:"message-body",children:["This tool will fetch all data keys of"," ",(0,a.jsx)("a",{href:"https://github.com/ERC725Alliance/ERC725",children:"ERC725Y"})," smart contract and attempt to match them with their"," ",(0,a.jsx)("a",{href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md",children:"LSP2 ERC725YJSONSchema"}),".",(0,a.jsx)("br",{}),"The erc725.js lib provides a"," ",(0,a.jsx)("a",{href:"https://docs.lukso.tech/tools/erc725js/classes/ERC725#getschema",children:"getSchema"})," ","method to decode the keys."]})}),(0,a.jsxs)("div",{className:"columns",children:[(0,a.jsxs)("div",{className:"column is-5",children:[(0,a.jsx)(d.Z,{label:"ERC725 Address",fullWidth:!0,type:"text",value:n,onChange:function(e){r(e.target.value)},placeholder:"ERC725 Contract Address",error:""!==D}),(0,a.jsxs)("div",{className:"field",children:[!D&&!m&&!k&&!N&&(0,a.jsx)("p",{className:"help is-danger",children:"ERC725X: \u274c - ERC725Y: \u274c"}),(m||k||N)&&(0,a.jsxs)("p",{className:"help is-success",children:["ERC725X: ",m?"\u2705":"\u274c"," - ERC725Y",N?" (legacy)":"",":"," ",k||N?"\u2705":"\u274c"]})]})]}),(0,a.jsx)("div",{className:"column",children:(0,a.jsx)("div",{className:"field",children:(0,a.jsx)("p",{className:"control",children:(0,a.jsx)("button",{disabled:!!D,className:"button is-success",onClick:function(){navigator.clipboard.writeText("".concat(window.location.href.split("?")[0],"?address=").concat(n)),_("Address copied in clipboard")},children:S})})})})]}),(0,a.jsx)("div",{className:"container is-fluid",children:(0,a.jsx)("div",{className:"columns is-vcentered",children:(0,a.jsx)("div",{className:"column is-offset-one-quarter is-half has-text-centered",children:!D&&(0,a.jsx)(j,{address:n,showInspectButton:!1})})})}),(0,a.jsx)("div",{className:"container is-fluid",children:!h&&(0,a.jsx)(T,{address:n,isErc725YLegacy:N,isErc725Y:k})})]})]})}},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}},function(e){e.O(0,[482,714,594,534,645,774,888,179],(function(){return t=47136,e(e.s=t);var t}));var t=e.O();_N_E=t}]);