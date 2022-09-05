(()=>{"use strict";var n={315:(n,e,t)=>{t.d(e,{Z:()=>a});var A=t(537),o=t.n(A),r=t(645),i=t.n(r)()(o());i.push([n.id,"*{box-sizing:border-box}body,#app{width:100%;margin:0;padding:0}#app main{display:flex;flex-direction:column;width:100%;padding:20px;max-width:1000px;margin-left:auto;margin-right:auto}#app nav{background-color:#edebd7;width:100%;padding:20px;display:flex;justify-content:flex-start;align-items:center}#app nav img{display:inline;width:50px;height:50px}#app nav .left{display:flex;justify-content:flex-start;align-items:center;flex-grow:1;gap:1rem}#app nav .right{display:flex;justify-content:flex-end;align-items:center;flex-grow:1}#app nav a{color:#222;font-size:1.2rem;font-weight:400;text-decoration:none}#app nav a:hover{color:#000;text-decoration:underline}#app nav a.is-active{color:#000;font-weight:700}button{font-size:1rem;border-radius:10px;padding:5px 20px;border:none;background-color:#aaa;cursor:pointer}button:hover{background-color:#999}.quote-generator{display:flex;flex-direction:row;padding:10px;width:100%;border-bottom:solid;align-items:center}.quote-generator .quote{font-size:1.2rem}.quote-generator .left,.quote-generator .right{display:flex;flex-direction:row;flex-grow:1;flex-basis:0px;gap:10px}.quote-generator .right{justify-content:flex-end;flex-direction:column;align-items:flex-end}.quote-favorite{display:flex;flex-direction:column;padding:10px;width:100%;max-width:1000px;margin-left:auto;margin-right:auto;justify-content:center}.quote-favorite .quote{font-size:1.2rem}.quote-favorite>.row{display:flex;flex-direction:row;border-bottom:dashed;padding:10px}.quote-favorite>.row .left,.quote-favorite>.row .right{display:flex;flex-direction:row;flex-grow:1;flex-basis:0px;gap:10px}.quote-favorite>.row .right{justify-content:flex-end;flex-direction:column;align-items:flex-end}.form{display:flex;flex-direction:column;width:100%;gap:20px}input{font-size:1.1rem;border-radius:10px;padding:10px 30px}","",{version:3,sources:["webpack://./src/styles/style.scss"],names:[],mappings:"AACA,EACE,qBAAA,CAGF,UACE,UAAA,CACA,QAAA,CACA,SAAA,CAKF,UACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,YAAA,CACA,gBAAA,CACA,gBAAA,CACA,iBAAA,CAKF,SACE,wBAAA,CACA,UAAA,CACA,YAAA,CACA,YAAA,CACA,0BAAA,CACA,kBAAA,CAEA,aACE,cAAA,CACA,UAAA,CACA,WAAA,CAGF,eACE,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,WAAA,CACA,QAAA,CAGF,gBACE,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,WAAA,CAGF,WACE,UAAA,CACA,gBAAA,CACA,eAAA,CACA,oBAAA,CAEA,iBACE,UAAA,CACA,yBAAA,CAGF,qBACE,UAAA,CACA,eAAA,CAON,OACE,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,qBAAA,CACA,cAAA,CAEA,aACE,qBAAA,CAOJ,iBACE,YAAA,CACA,kBAAA,CACA,YAAA,CACA,UAAA,CACA,mBAAA,CACA,kBAAA,CAEA,wBACE,gBAAA,CAGF,+CACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,cAAA,CACA,QAAA,CAGF,wBACE,wBAAA,CACA,qBAAA,CACA,oBAAA,CAKJ,gBACE,YAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CACA,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,sBAAA,CAEA,uBACE,gBAAA,CAGF,qBACE,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,YAAA,CAEA,uDACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,cAAA,CACA,QAAA,CAGF,4BACE,wBAAA,CACA,qBAAA,CACA,oBAAA,CAON,MACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,QAAA,CAGF,MACE,gBAAA,CACA,kBAAA,CACA,iBAAA",sourcesContent:["\n* {\n  box-sizing: border-box;\n}\n\nbody, #app {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n// BASIC STYLING\n\n#app main {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 20px;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n// NAVIGATION\n\n#app nav {\n  background-color: #EDEBD7;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  img {\n    display: inline;\n    width: 50px;\n    height: 50px;\n  }\n\n  .left {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-grow: 1;\n    gap: 1rem;\n  }\n\n  .right {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-grow: 1;\n  }\n\n  a {\n    color: #222;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-decoration: none;\n\n    &:hover {\n      color: black;\n      text-decoration: underline;\n    }\n\n    &.is-active {\n      color: black;\n      font-weight: 700;;\n    }\n  }\n}\n\n// GENERAL\n\nbutton {\n  font-size: 1rem;\n  border-radius: 10px;\n  padding: 5px 20px;\n  border: none;\n  background-color: #aaa;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #999;\n  }\n}\n\n\n// QUOTES\n\n.quote-generator {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  width: 100%;\n  border-bottom: solid;\n  align-items: center;\n\n  .quote {\n    font-size: 1.2rem;\n  }\n\n  .left, .right {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-basis: 0px;\n    gap: 10px;\n  }\n\n  .right {\n    justify-content: flex-end;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n}\n\n\n.quote-favorite {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 100%;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n\n  .quote {\n    font-size: 1.2rem;\n  }\n\n  > .row {\n    display: flex;\n    flex-direction: row;\n    border-bottom: dashed;\n    padding: 10px;\n\n    .left, .right {\n      display: flex;\n      flex-direction: row;\n      flex-grow: 1;\n      flex-basis: 0px;\n      gap: 10px;\n    }\n  \n    .right {\n      justify-content: flex-end;\n      flex-direction: column;\n      align-items: flex-end;\n    }\n  }\n}\n\n// FORM\n\n.form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 20px;\n}\n\ninput {\n  font-size: 1.1rem;\n  border-radius: 10px;\n  padding: 10px 30px;\n}\n"],sourceRoot:""}]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",A=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),A&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),A&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,A,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(A)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);A&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),r="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,A=0;A<e.length;A++)if(e[A].identifier===n){t=A;break}return t}function A(n,A){for(var r={},i=[],a=0;a<n.length;a++){var c=n[a],s=A.base?c[0]+A.base:c[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=o(p,A);A.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=A(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var a=t(r[i]);e[a].references--}for(var c=A(n,o),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var A=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var A="";t.supports&&(A+="@supports (".concat(t.supports,") {")),t.media&&(A+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(A+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),A+=t.css,o&&(A+="}"),t.media&&(A+="}"),t.supports&&(A+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(A,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(A){var o=e[A];if(void 0!==o)return o.exports;var r=e[A]={id:A,exports:{}};return n[A](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var A in e)t.o(e,A)&&!t.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:e[A]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="/",t.nc=void 0,(()=>{var n=t(379),e=t.n(n),A=t(795),o=t.n(A),r=t(569),i=t.n(r),a=t(565),c=t.n(a),s=t(216),l=t.n(s),d=t(589),u=t.n(d),p=t(315),f={};function C(n,e){return void 0===e&&(e=function(){return[]}),function(t){var A,o=document.createElement(n),r=e(t).map((function(n){return n}));return o.append.apply(o,r),t.id&&(o.id=t.id),t.classes&&(A=o.classList).add.apply(A,t.classes),t.onClick&&o.addEventListener("click",t.onClick),t.onBlur&&o.addEventListener("blur",t.onBlur),t.onInput&&o.addEventListener("input",t.onInput),t.onSubmit&&o.addEventListener("submit",t.onSubmit),t.attributes&&Object.entries(t.attributes).forEach((function(n){var e=n[0],t=n[1];return o.setAttribute(e,t)})),o}}f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var x={reload:function(){return null},rootElem:null};const g=t.p+"assets/logo.webp",m=C("a",(function(n){return[n.text]}));var v,h=function(){return h=Object.assign||function(n){for(var e,t=1,A=arguments.length;t<A;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h.apply(this,arguments)};!function(n){n[n.home=0]="home",n[n.contents=1]="contents",n[n.about=2]="about"}(v||(v={}));var b=C("div",(function(n){return[m({classes:n.page===v.home?["is-active"]:void 0,text:"Home",attributes:{href:"/"}}),m({classes:n.page===v.contents?["is-active"]:void 0,text:"Contents",attributes:{href:"/contents"}}),m({classes:n.page===v.about?["is-active"]:void 0,text:"About",attributes:{href:"/about"}})]})),y=C("div",(function(){return[C("img")({attributes:{src:g,alt:"Logo"}})]}));const w=C("nav",(function(n){return[b(h({classes:["left"]},n)),y({})]}));var B=C("main",(function(){return["Home"]}));!function(n,e){var t=document.getElementById("app");if(!t)throw new Error('Root element with id "'.concat("app","\" couldn't be found"));var A=function(){t.children&&t.children.length>0&&t.childNodes.forEach((function(n){return n.remove()})),t.append(e({}))};A(),x.reload=A,x.rootElem=t}(0,C("div",(function(){return[w({page:v.home}),B({})]})))})()})();
//# sourceMappingURL=index.bundle.js.map