(this["webpackJsonperc725-inspect"]=this["webpackJsonperc725-inspect"]||[]).push([[0],{127:function(e,t,a){},231:function(e,t,a){},238:function(e,t){},267:function(e,t){},269:function(e,t){},345:function(e,t){},347:function(e,t){},380:function(e,t){},385:function(e,t){},387:function(e,t){},394:function(e,t){},407:function(e,t){},430:function(e,t){},439:function(e,t){},441:function(e,t){},518:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a.n(n),c=a(219),r=a.n(c),i=(a(231),a(120)),l=a(6),d=a.n(l),u=a(28),o=a(19),b=a(5),p=a(16),f=(a(127),a(220)),j=a.n(f);function h(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new j.a("https://rpc.l14.lukso.network"),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){s(e)}))}),[]),a}var y=function(){var e=Object(u.a)(d.a.mark((function e(t,a,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new n.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes[]",name:"",internalType:"bytes[]"}],name:"getDataMultiple",inputs:[{type:"bytes32[]",name:"_keys",internalType:"bytes32[]"}]}],t),c=[],e.prev=2,e.next=5,s.methods.getDataMultiple(a).call();case 5:c=e.sent,e.next=15;break;case 8:return e.prev=8,e.t0=e.catch(2),console.log(e.t0.message),console.log("getDataMultiple not working, fetching with getData"),e.next=14,Promise.all(a.map((function(e){return v(t,n,e)})));case 14:c=e.sent;case 15:return e.abrupt("return",c);case 16:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(d.a.mark((function e(t,a,n){var s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new a.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes",name:"_value",internalType:"bytes"}],name:"getData",inputs:[{type:"bytes32",name:"_key",internalType:"bytes32"}]}],t),e.prev=1,e.next=4,s.methods.getData(n).call();case 4:c=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new a.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"supportsInterface",inputs:[{type:"bytes4",name:"interfaceId",internalType:"bytes4"}]}],t),s=!1,e.prev=2,e.next=5,n.methods.supportsInterface("0x44c028fe").call();case 5:s=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return c=!1,e.prev=12,e.next=15,n.methods.supportsInterface("0x2bd57b73").call();case 15:c=e.sent,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(12),console.log(e.t1.message);case 21:return e.abrupt("return",{isErc725X:s,isErc725Y:c});case 22:case"end":return e.stop()}}),e,null,[[2,8],[12,18]])})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new a.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bytes32[]",name:"",internalType:"bytes32[]"}],name:"allDataKeys",inputs:[]}],t),s=[],e.prev=2,e.next=5,n.methods.allDataKeys().call();case 5:s=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,a){return e.apply(this,arguments)}}(),O=a(1),k=function(e){var t=e.address,a=e.showInspectButton,n=void 0===a||a;return Object(O.jsxs)("div",{className:"buttons is-centered are-small pt-2",children:[Object(O.jsx)("a",{className:"button is-primary is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/".concat(t),children:"View on UP as Profile \ud83e\uddd1\u200d\ud83c\udfa4"}),Object(O.jsx)("a",{className:"button is-info is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/asset/".concat(t),children:"View on UP as Asset \ud83d\udc57"}),Object(O.jsx)("a",{className:"button is-link is-light",target:"_blank",rel:"noreferrer",href:"https://blockscout.com/lukso/l14/address/".concat(t),children:"View on Blockscout \u26d3"}),n&&Object(O.jsx)("a",{className:"button is-link is-light",href:"".concat(window.location.href.split("?")[0],"?address=").concat(t),children:"ERC725 Inspect \ud83d\udd0d"})]})},g=a(20),N=a(224),T=function(e){var t=e.erc725JSONSchema,a=e.value;if("Address"===t.valueContent)return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("code",{children:a}),Object(O.jsx)(k,{address:a})]});var n,s=[t],c=new N.a(s);try{n=c.decodeData(Object(g.a)({},t.name,a))}catch(r){return Object(O.jsx)("span",{children:"Can't decode this key"})}console.log(n);try{return Object(O.jsxs)("div",{children:[Object(O.jsx)("pre",{children:JSON.stringify(n[t.name],null,4)}),n[t.name].url&&Object(O.jsxs)("span",{children:["URL: ",n[t.name].url]})]})}catch(r){return Object(O.jsx)("span",{children:"Can't decode this key"})}},w=function(e){var t=e.address,a=e.isErc725Y,s=Object(n.useState)([]),c=Object(o.a)(s,2),r=c[0],i=c[1],l=h();return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,m(t,l);case 5:return n=e.sent,e.next=8,y(t,n,l);case 8:s=e.sent,i(n.map((function(e,t){return{key:e,value:s[t]}}))),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),i([]);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[t,l,a]),a?Object(O.jsx)("div",{className:"columns is-multiline",children:r.map((function(e){var t=function(e){switch(e){case"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abf0613c":return{name:"SupportedStandards:LSP4DigitalCertificate",key:"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abf0613c",keyType:"Mapping",valueContent:"0xabf0613c",valueType:"bytes"};case"0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e":return{name:"LSP4Metadata",key:"0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e",keyType:"Singleton",valueContent:"JSONURL",valueType:"bytes"};case"0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7":return{name:"LSP4Creators[]",key:"0x114bd03b3a46d48759680d81ebb2b414fda7d030a7105a851867accf1c2352e7",keyType:"Array",valueContent:"Number",valueType:"uint256",elementValueContent:"Address",elementValueType:"address"};case"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6":return{name:"SupportedStandards:LSP3UniversalProfile",key:"0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6",keyType:"Mapping",valueContent:"0xabe425d6",valueType:"bytes"};case"0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0":return{name:"LSP3IssuedAssets[]",key:"0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0",keyType:"Array",valueContent:"Number",valueType:"uint256",elementValueContent:"Address",elementValueType:"address"};case"0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6":return{name:"SupportedStandards:ERC725Account",key:"0xeafec4d89fa9619884b6b89135626455000000000000000000000000afdeb5d6",keyType:"Singleton",valueContent:"0xafdeb5d6",valueType:"bytes"};case"0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47":return{name:"LSP1UniversalReceiverDelegate",key:"0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47",keyType:"Singleton",valueContent:"Address",valueType:"address"};case"0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5":return{name:"LSP3Profile",key:"0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",keyType:"Singleton",valueContent:"JSONURL",valueType:"bytes"};case"0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3":return{name:"AddressPermissions[]",key:"0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3",keyType:"Array",valueContent:"Address",valueType:"address"}}if(-1!==e.indexOf("0xeafec4d89fa9619884b6b89135626455000000000000000000000000"))return{name:"SupportedStandards:?????????",key:e,keyType:"Mapping",valueContent:e.substr(58),valueType:"bytes"};if(-1!==e.indexOf("0x4b80742d0000000082ac0000")){var t=e.substr(26);return{name:"AddressPermissions:Permissions:".concat(t),key:e,keyType:"AddressMappingWithGrouping",valueContent:"BitArray",valueType:"bytes4"}}if(-1!==e.indexOf("0x4b80742d00000000c6dd0000")){var a=e.substr(26);return{name:"AddressPermissions:AllowedAddresses:".concat(a),key:e,keyType:"AddressMappingWithGrouping",valueContent:"Address",valueType:"address[]"}}if(-1!==e.indexOf("0x4b80742d000000008efe0000")){var n=e.substr(26);return{name:"AddressPermissions:AllowedFunctions:".concat(n),key:e,keyType:"AddressMappingWithGrouping",valueContent:"Bytes4",valueType:"bytes4[]"}}if(-1!==e.indexOf("0x4b80742d000000003efa0000")){var s=e.substr(26);return{name:"AddressPermissions:AllowedStandards:".concat(s),key:e,keyType:"AddressMappingWithGrouping",valueContent:"Bytes4",valueType:"bytes4[]"}}if(-1!==e.indexOf("0x114bd03b3a46d48759680d81ebb2b414")){var c=parseInt(e.substr(34),10);return{name:"LSP4Creators[".concat(c,"]"),key:e,keyType:"Singleton",valueContent:"Address",valueType:"address"}}if(-1!==e.indexOf("0x3a47ab5bd3a594c3a8995f8fa58d0876")){var r=parseInt(e.substr(34),10);return{name:"LSP3IssuedAssets[".concat(r,"]"),key:e,keyType:"Singleton",valueContent:"Address",valueType:"address"}}return{name:"UNKNOWN",key:e,keyType:"UNKNOWN",valueContent:"UNKNOWN",valueType:"UNKNOWN"}}(e.key);return Object(O.jsx)("div",{className:"column is-half",children:Object(O.jsxs)("div",{className:"content py-5",children:[Object(O.jsxs)("h4",{className:"title is-4",children:[t.name," ",Object(O.jsx)("span",{className:"tag is-link is-light",children:t.keyType})]}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Key: ",Object(O.jsx)("code",{children:t.key})]}),Object(O.jsxs)("li",{children:["Raw value"," ",Object(O.jsx)("span",{className:"tag is-link is-light",children:t.valueType}),": ",Object(O.jsx)("code",{children:e.value})]}),Object(O.jsxs)("li",{children:["Decoded value"," ",Object(O.jsx)("span",{className:"tag is-link is-light",children:t.valueContent}),":"," ",Object(O.jsx)(T,{erc725JSONSchema:t,value:e.value})]}),"AddressMappingWithGrouping"===t.keyType&&Object(O.jsxs)("li",{children:["Mapped address:"," ",Object(O.jsxs)("code",{children:["0x",t.name.split(":").pop()]})," ",Object(O.jsx)(k,{address:"0x".concat(t.name.split(":").pop())})]})]})]},e.key)})}))}):null},C=function(){return Object(O.jsx)("nav",{className:"navbar is-light",children:Object(O.jsxs)("div",{className:"navbar-menu is-active",children:[Object(O.jsx)("div",{className:"navbar-start",children:Object(O.jsx)("a",{className:"navbar-item",href:"/",children:"ERC725 Inspect \ud83d\udcdd\ud83d\udd0d"})}),Object(O.jsxs)("div",{className:"navbar-end",children:[Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsx)("div",{className:"buttons",children:Object(O.jsx)("a",{href:"https://github.com/lukso-network/LIPs/tree/master/LSPs",className:"button is-light",children:"LUKSO LSPs"})})}),Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsx)("div",{className:"buttons",children:Object(O.jsx)("a",{href:"https://docs.lukso.tech/networks/l14-testnet",className:"button is-light",children:"Network: LUKSO L14"})})}),Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsx)("div",{className:"field is-grouped",children:Object(O.jsx)("p",{className:"control",children:Object(O.jsx)("a",{className:"button is-primary",href:"https://github.com/Hugoo/erc725-inspect/",children:Object(O.jsx)("span",{children:"GitHub"})})})})})]})]})})};var S=function(){var e=new URLSearchParams(Object(p.d)().search),t=Object(n.useState)(e.get("address")||"0xb8E120e7e5EAe7bfA629Db5CEFfA69C834F74e99"),a=Object(o.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],f=i[1],j=Object(n.useState)(!1),y=Object(o.a)(j,2),v=y[0],m=y[1],g=Object(n.useState)(!1),N=Object(o.a)(g,2),T=N[0],S=N[1],A=Object(n.useState)("Copy share link"),P=Object(o.a)(A,2),E=P[0],L=P[1],M=Object(n.useState)(""),I=Object(o.a)(M,2),D=I[0],R=I[1],U=h();return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U){e.next=2;break}return e.abrupt("return");case 2:if(m(!1),S(!1),R(""),Object(b.isAddress)(s)){e.next=8;break}return R("Address is not valid"),e.abrupt("return");case 8:return f(!0),e.next=11,x(s,U);case 11:t=e.sent,m(t.isErc725X),S(t.isErc725Y),f(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s,U]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C,{}),Object(O.jsxs)("section",{className:"section",children:[Object(O.jsx)("div",{className:"container is-fluid",children:Object(O.jsx)("div",{className:"columns is-vcentered",children:Object(O.jsxs)("div",{className:"column is-offset-one-quarter is-half has-text-centered",children:[Object(O.jsxs)("div",{className:"field",children:[Object(O.jsx)("div",{className:"control ".concat(l&&"is-loading"),children:Object(O.jsx)("input",{className:"input is-rounded has-text-centered is-medium ".concat(""===D&&(v||T)?"is-success":"is-danger"),type:"text",placeholder:"ERC725 Contract Address",value:s,onChange:function(e){c(e.target.value)}})}),D&&Object(O.jsx)("p",{className:"help is-danger",children:D}),!D&&!v&&!T&&Object(O.jsx)("p",{className:"help is-danger",children:"ERC725X: \u274c - ERC725Y: \u274c"}),(v||T)&&Object(O.jsxs)("p",{className:"help is-success",children:["ERC725X: ",v?"\u2705":"\u274c"," - ERC725Y:"," ",T?"\u2705":"\u274c"]})]}),Object(O.jsx)("div",{className:"field",children:Object(O.jsx)("p",{className:"control",children:Object(O.jsx)("button",{disabled:!!D,className:"button is-success",onClick:function(){navigator.clipboard.writeText("".concat(window.location.href.split("?")[0],"?address=").concat(s)),L("Address copied in clipboard")},children:E})})}),!D&&Object(O.jsx)(k,{address:s,showInspectButton:!1})]})})}),Object(O.jsx)("div",{className:"container is-fluid",children:!l&&Object(O.jsx)(w,{address:s,isErc725Y:T})})]})]})},A=function(){return Object(O.jsx)(i.a,{children:Object(O.jsx)(S,{})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,522)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root")),P()}},[[518,1,2]]]);
//# sourceMappingURL=main.da4fe32f.chunk.js.map