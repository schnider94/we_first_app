(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),o=n(26),i=n(372),a=n(327),s=n(97),c=n(109),u=n(985),f=n(874),l=n(648),p=n(644),d=n(205);e.exports=function(e){return new Promise((function(t,n){var A,h=e.data,m=e.headers,g=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(A),e.signal&&e.signal.removeEventListener("abort",A)}r.isFormData(h)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var C=new XMLHttpRequest;if(e.auth){var x=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(x+":"+y)}var b=s(e.baseURL,e.url);function E(){if(C){var r="getAllResponseHeaders"in C?c(C.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?C.response:C.responseText,status:C.status,statusText:C.statusText,headers:r,config:e,request:C};o((function(e){t(e),v()}),(function(e){n(e),v()}),i),C=null}}if(C.open(e.method.toUpperCase(),a(b,e.params,e.paramsSerializer),!0),C.timeout=e.timeout,"onloadend"in C?C.onloadend=E:C.onreadystatechange=function(){C&&4===C.readyState&&(0!==C.status||C.responseURL&&0===C.responseURL.indexOf("file:"))&&setTimeout(E)},C.onabort=function(){C&&(n(new l("Request aborted",l.ECONNABORTED,e,C)),C=null)},C.onerror=function(){n(new l("Network Error",l.ERR_NETWORK,e,C,C)),C=null},C.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new l(t,r.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,C)),C=null},r.isStandardBrowserEnv()){var w=(e.withCredentials||u(b))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;w&&(m[e.xsrfHeaderName]=w)}"setRequestHeader"in C&&r.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:C.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(C.withCredentials=!!e.withCredentials),g&&"json"!==g&&(C.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&C.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&C.upload&&C.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(A=function(e){C&&(n(!e||e&&e.type?new p:e),C.abort(),C=null)},e.cancelToken&&e.cancelToken.subscribe(A),e.signal&&(e.signal.aborted?A():e.signal.addEventListener("abort",A))),h||(h=null);var O=d(b);O&&-1===["http","https","file"].indexOf(O)?n(new l("Unsupported protocol "+O+":",l.ERR_BAD_REQUEST,e)):C.send(h)}))}},609:(e,t,n)=>{"use strict";var r=n(867),o=n(849),i=n(321),a=n(185),s=function e(t){var n=new i(t),s=o(i.prototype.request,n);return r.extend(s,i.prototype,n),r.extend(s,n),s.create=function(n){return e(a(t,n))},s}(n(546));s.Axios=i,s.CanceledError=n(644),s.CancelToken=n(972),s.isCancel=n(502),s.VERSION=n(288).version,s.toFormData=n(675),s.AxiosError=n(648),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=n(713),s.isAxiosError=n(268),e.exports=s,e.exports.default=s},972:(e,t,n)=>{"use strict";var r=n(644);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},644:(e,t,n)=>{"use strict";var r=n(648);function o(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}n(867).inherits(o,r,{__CANCEL__:!0}),e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),o=n(327),i=n(782),a=n(572),s=n(185),c=n(97),u=n(875),f=u.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!o){var l=[a,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(c),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var p=t;r.length;){var d=r.shift(),A=r.shift();try{p=d(p)}catch(e){A(e);break}}try{i=a(p)}catch(e){return Promise.reject(e)}for(;c.length;)i=i.then(c.shift(),c.shift());return i},l.prototype.getUri=function(e){e=s(this.defaults,e);var t=c(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(s(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}l.prototype[e]=t(),l.prototype[e+"Form"]=t(!0)})),e.exports=l},648:(e,t,n)=>{"use strict";var r=n(867);function o(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}r.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(o,a),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(e,t,n,a,s,c){var u=Object.create(i);return r.toFlatObject(e,u,(function(e){return e!==Error.prototype})),o.call(u,e.message,t,n,a,s),u.name=e.name,c&&Object.assign(u,c),u},e.exports=o},782:(e,t,n)=>{"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,n)=>{"use strict";var r=n(793),o=n(303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},572:(e,t,n)=>{"use strict";var r=n(867),o=n(527),i=n(502),a=n(546),s=n(644);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},26:(e,t,n)=>{"use strict";var r=n(648);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),o=n(546);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},546:(e,t,n)=>{"use strict";var r=n(867),o=n(16),i=n(648),a=n(874),s=n(675),c={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,l={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(f=n(448)),f),transformRequest:[function(e,t){if(o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,i=r.isObject(e),a=t&&t["Content-Type"];if((n=r.isFileList(e))||i&&"multipart/form-data"===a){var c=this.env&&this.env.FormData;return s(n?{"files[]":e}:e,c&&new c)}return i||"application/json"===a?(u(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw i.from(e,i.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(c)})),e.exports=l},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.27.2"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},623:e=>{e.exports=null},109:(e,t,n)=>{"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},205:e=>{"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},675:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||new FormData;var n=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(i,a){if(r.isPlainObject(i)||r.isArray(i)){if(-1!==n.indexOf(i))throw Error("Circular reference detected in "+a);n.push(i),r.forEach(i,(function(n,i){if(!r.isUndefined(n)){var s,c=a?a+"."+i:i;if(n&&!a&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(s=r.toArray(n)))return void s.forEach((function(e){!r.isUndefined(e)&&t.append(c,o(e))}));e(n,c)}})),n.pop()}else t.append(a,o(i))}(e),t}},875:(e,t,n)=>{"use strict";var r=n(288).version,o=n(648),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var a={};i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new o(i(r," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var a=r[i],s=t[a];if(s){var c=e[a],u=void 0===c||s(c,a,e);if(!0!==u)throw new o("option "+a+" must be "+u,o.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o("Unknown option "+a,o.ERR_BAD_OPTION)}},validators:i}},867:(e,t,n)=>{"use strict";var r,o=n(849),i=Object.prototype.toString,a=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function c(e){return Array.isArray(e)}function u(e){return void 0===e}var f=s("ArrayBuffer");function l(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=s("Date"),A=s("File"),h=s("Blob"),m=s("FileList");function g(e){return"[object Function]"===i.call(e)}var v=s("URLSearchParams");function C(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var x,y=(x="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return x&&e instanceof x});e.exports={isArray:c,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:p,isUndefined:u,isDate:d,isFile:A,isBlob:h,isFunction:g,isStream:function(e){return l(e)&&g(e.pipe)},isURLSearchParams:v,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:C,merge:function e(){var t={};function n(n,r){p(t[r])&&p(n)?t[r]=e(t[r],n):p(n)?t[r]=e({},n):c(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)C(arguments[r],n);return t},extend:function(e,t,n){return C(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,a={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)a[i=r[o]]||(t[i]=e[i],a[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(u(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:y,isFileList:m}},315:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"*{box-sizing:border-box}body,#app{width:100%;margin:0;padding:0}#app main{display:flex;flex-direction:column;width:100%;padding:20px;max-width:1000px;margin-left:auto;margin-right:auto}#app nav{background-color:#edebd7;width:100%;padding:20px;display:flex;justify-content:flex-start;align-items:center}#app nav img{display:inline;width:50px;height:50px}#app nav .left{display:flex;justify-content:flex-start;align-items:center;flex-grow:1;gap:1rem}#app nav .right{display:flex;justify-content:flex-end;align-items:center;flex-grow:1}#app nav a{color:#222;font-size:1.2rem;font-weight:400;text-decoration:none}#app nav a:hover{color:#000;text-decoration:underline}#app nav a.is-active{color:#000;font-weight:700}button{font-size:1rem;border-radius:10px;padding:5px 20px;border:none;background-color:#aaa;cursor:pointer}button:hover{background-color:#999}.quote-generator{display:flex;flex-direction:row;padding:10px;width:100%;border-bottom:solid;align-items:center}.quote-generator .quote{font-size:1.2rem}.quote-generator .left,.quote-generator .right{display:flex;flex-direction:row;flex-grow:1;flex-basis:0px;gap:10px}.quote-generator .right{justify-content:flex-end;flex-direction:column;align-items:flex-end}.quote-favorite{display:flex;flex-direction:column;padding:10px;width:100%;max-width:1000px;margin-left:auto;margin-right:auto;justify-content:center}.quote-favorite .quote{font-size:1.2rem}.quote-favorite>.row{display:flex;flex-direction:row;border-bottom:dashed;padding:10px}.quote-favorite>.row .left,.quote-favorite>.row .right{display:flex;flex-direction:row;flex-grow:1;flex-basis:0px;gap:10px}.quote-favorite>.row .right{justify-content:flex-end;flex-direction:column;align-items:flex-end}.form{display:flex;flex-direction:column;width:100%;gap:20px}input{font-size:1.1rem;border-radius:10px;padding:10px 30px}","",{version:3,sources:["webpack://./src/styles/style.scss"],names:[],mappings:"AACA,EACE,qBAAA,CAGF,UACE,UAAA,CACA,QAAA,CACA,SAAA,CAKF,UACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,YAAA,CACA,gBAAA,CACA,gBAAA,CACA,iBAAA,CAKF,SACE,wBAAA,CACA,UAAA,CACA,YAAA,CACA,YAAA,CACA,0BAAA,CACA,kBAAA,CAEA,aACE,cAAA,CACA,UAAA,CACA,WAAA,CAGF,eACE,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,WAAA,CACA,QAAA,CAGF,gBACE,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,WAAA,CAGF,WACE,UAAA,CACA,gBAAA,CACA,eAAA,CACA,oBAAA,CAEA,iBACE,UAAA,CACA,yBAAA,CAGF,qBACE,UAAA,CACA,eAAA,CAON,OACE,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,qBAAA,CACA,cAAA,CAEA,aACE,qBAAA,CAOJ,iBACE,YAAA,CACA,kBAAA,CACA,YAAA,CACA,UAAA,CACA,mBAAA,CACA,kBAAA,CAEA,wBACE,gBAAA,CAGF,+CACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,cAAA,CACA,QAAA,CAGF,wBACE,wBAAA,CACA,qBAAA,CACA,oBAAA,CAKJ,gBACE,YAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CACA,gBAAA,CACA,gBAAA,CACA,iBAAA,CACA,sBAAA,CAEA,uBACE,gBAAA,CAGF,qBACE,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,YAAA,CAEA,uDACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,cAAA,CACA,QAAA,CAGF,4BACE,wBAAA,CACA,qBAAA,CACA,oBAAA,CAON,MACE,YAAA,CACA,qBAAA,CACA,UAAA,CACA,QAAA,CAGF,MACE,gBAAA,CACA,kBAAA,CACA,iBAAA",sourcesContent:["\n* {\n  box-sizing: border-box;\n}\n\nbody, #app {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n// BASIC STYLING\n\n#app main {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 20px;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n// NAVIGATION\n\n#app nav {\n  background-color: #EDEBD7;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  img {\n    display: inline;\n    width: 50px;\n    height: 50px;\n  }\n\n  .left {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-grow: 1;\n    gap: 1rem;\n  }\n\n  .right {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-grow: 1;\n  }\n\n  a {\n    color: #222;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-decoration: none;\n\n    &:hover {\n      color: black;\n      text-decoration: underline;\n    }\n\n    &.is-active {\n      color: black;\n      font-weight: 700;;\n    }\n  }\n}\n\n// GENERAL\n\nbutton {\n  font-size: 1rem;\n  border-radius: 10px;\n  padding: 5px 20px;\n  border: none;\n  background-color: #aaa;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #999;\n  }\n}\n\n\n// QUOTES\n\n.quote-generator {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  width: 100%;\n  border-bottom: solid;\n  align-items: center;\n\n  .quote {\n    font-size: 1.2rem;\n  }\n\n  .left, .right {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-basis: 0px;\n    gap: 10px;\n  }\n\n  .right {\n    justify-content: flex-end;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n}\n\n\n.quote-favorite {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 100%;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n\n  .quote {\n    font-size: 1.2rem;\n  }\n\n  > .row {\n    display: flex;\n    flex-direction: row;\n    border-bottom: dashed;\n    padding: 10px;\n\n    .left, .right {\n      display: flex;\n      flex-direction: row;\n      flex-grow: 1;\n      flex-basis: 0px;\n      gap: 10px;\n    }\n  \n    .right {\n      justify-content: flex-end;\n      flex-direction: column;\n      align-items: flex-end;\n    }\n  }\n}\n\n// FORM\n\n.form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 20px;\n}\n\ninput {\n  font-size: 1.1rem;\n  border-radius: 10px;\n  padding: 10px 30px;\n}\n"],sourceRoot:""}]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var f=[].concat(e[u]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],f=i[u]||0,l="".concat(u," ").concat(f);i[u]=f+1;var p=n(l),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var A=o(d,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:A,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),u=0;u<i.length;u++){var f=n(i[u]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),u=n(216),f=n.n(u),l=n(589),p=n.n(l),d=n(315),A={};function h(e,t){return void 0===t&&(t=function(){return[]}),function(n){var r,o=document.createElement(e),i=t(n).map((function(e){return e}));return o.append.apply(o,i),n.id&&(o.id=n.id),n.classes&&(r=o.classList).add.apply(r,n.classes),n.onClick&&o.addEventListener("click",n.onClick),n.onBlur&&o.addEventListener("blur",n.onBlur),n.onInput&&o.addEventListener("input",n.onInput),n.onSubmit&&o.addEventListener("submit",n.onSubmit),n.attributes&&Object.entries(n.attributes).forEach((function(e){var t=e[0],n=e[1];return o.setAttribute(t,n)})),o}}A.styleTagTransform=p(),A.setAttributes=c(),A.insert=a().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=f(),t()(d.Z,A),d.Z&&d.Z.locals&&d.Z.locals;var m={reload:function(){return null},rootElem:null};const g=m;var v=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},C={set:function(e,t,n){var r=Reflect.set(e,t,n);return g.reload(),r},deleteProperty:function(e,t){return Reflect.deleteProperty(e,t),g.reload(),!0}},x={set:function(e,t,n){var r=Reflect.set(e,t,n);return g.reload(),r},deleteProperty:function(e,t){return Reflect.deleteProperty(e,t),g.reload(),!0}};const y={quotes:new Proxy([],{set:function(e,t,n){"length"!==t&&localStorage.setItem("quotes",JSON.stringify(v(v([],e,!0),[n],!1)));var r=Reflect.set(e,t,n);return g.reload(),r},deleteProperty:function(e,t){var n=parseInt(t.toString()),r=v([],e,!0);return r.splice(n,1),localStorage.setItem("quotes",JSON.stringify(r)),delete e[n],g.reload(),!0},get:function(e,t,n){var r=Reflect.get(e,t);return"length"===t&&0===r&&Object.assign(e,JSON.parse(localStorage.getItem("quotes"))),Reflect.get(e,t,n)}}),config:new Proxy({currentQuote:""},C),form:new Proxy({name:"",email:"",secret:"",rating:10},x)};var b=n(669),E=n.n(b);const w=n.p+"assets/logo.webp",O=h("a",(function(e){return[e.text]}));var R,B=function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},B.apply(this,arguments)};!function(e){e[e.home=0]="home",e[e.contents=1]="contents",e[e.about=2]="about"}(R||(R={}));var S=h("div",(function(e){return[O({classes:e.page===R.home?["is-active"]:void 0,text:"Home",attributes:{href:"/"}}),O({classes:e.page===R.contents?["is-active"]:void 0,text:"Contents",attributes:{href:"/contents"}}),O({classes:e.page===R.about?["is-active"]:void 0,text:"About",attributes:{href:"/about"}})]})),j=h("div",(function(){return[h("img")({attributes:{src:w,alt:"Logo"}})]}));const q=h("nav",(function(e){return[S(B({classes:["left"]},e)),j({})]})),N=h("button",(function(e){return[e.text]})),T=h("div",(function(e){return[h("div",(function(){return[h("span",(function(){return[e.quote?e.quote:"Click `Generate` to start generating quotes ----\x3e"]}))({classes:["quote"]})]}))({classes:["left"]}),h("div",(function(){return[N({text:"Generate",onClick:e.onReloadCurrentQuote}),N({text:"Favorite",onClick:e.onSaveToFavorite})]}))({classes:["right"]})]}));var U=function(){return U=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},U.apply(this,arguments)},P=h("div",(function(e){var t=e.text;return[h("span",(function(e){return[e.text]}))({classes:["quote"],text:t})]})),k=h("div",(function(e){return[N({onClick:function(){return e.onRemoveFromFavorite(e.quote)},text:"Remove"})]}));const _=h("div",(function(e){return[P({classes:["left"],text:e.quote}),k(U({classes:["right"]},e))]}));const F=h("div",(function(e){var t=e.quotes.map((function(t){return _({classes:["row"],quote:t,onRemoveFromFavorite:e.onRemoveFromFavorite})}));return function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([h("h1",(function(){return["Favorites"]}))({})],t,!0)}));var L=h("main",(function(){var e=function(){E().get("https://api.kanye.rest/").then((function(e){return e.data.quote})).catch((function(){return new Error("Error fetching quote")})).then((function(e){y.config.currentQuote=e}))};return[T({classes:["quote-generator"],onReloadCurrentQuote:e,onSaveToFavorite:function(){var t=y.config.currentQuote;t&&!y.quotes.includes(t)?(y.quotes.push(t),e()):e()},quote:y.config.currentQuote}),F({classes:["quote-favorite"],onRemoveFromFavorite:function(e){var t=y.quotes.findIndex((function(t){return e===t}));y.quotes.splice(t,1)},quotes:y.quotes})]}));!function(e,t){var n=document.getElementById("app");if(!n)throw new Error('Root element with id "'.concat("app","\" couldn't be found"));var r=function(){n.children&&n.children.length>0&&n.childNodes.forEach((function(e){return e.remove()})),n.append(t({}))};r(),m.reload=r,m.rootElem=n}(0,h("div",(function(){return[q({page:R.contents}),L({})]})))})()})();
//# sourceMappingURL=contents.bundle.js.map