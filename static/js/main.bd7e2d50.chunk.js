(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,r){t.exports=r(53)},33:function(t,e,r){},35:function(t,e,r){},53:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),o=r(23),i=r.n(o),c=(r(33),r(35),r(10)),l=r(0),s=r(6),u=r(4);var h=r(56).a.create({baseURL:"//app.toolszm.com/api",headers:{"Content-Type":"application/json"}});function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var p="suspendedStart",m="suspendedYield",d="executing",v="completed",y={};function g(){}function w(){}function E(){}var b={};s(b,i,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(T([])));L&&L!==r&&n.call(L,i)&&(b=L);var j=E.prototype=g.prototype=Object.create(b);function N(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){function r(a,o,i,c){var l=h(t[a],t,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(u).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e(function(e,a){r(t,n,e,a)})}return o=o?o.then(a,a):a()}})}function k(e,r,n){var a=p;return function(o,i){if(a===d)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=d;var s=h(e,r,n);if("normal"===s.type){if(a=n.done?v:m,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=v,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=h(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=E,a(j,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:w,configurable:!0}),w.displayName=s(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},N(O.prototype),s(O.prototype,c,function(){return this}),e.AsyncIterator=O,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new O(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},N(j),s(j,l,"Generator"),s(j,i,function(){return this}),s(j,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function p(){return(p=Object(s.a)(f().mark(function t(){var e,r;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("/me");case 3:if(200!==(e=t.sent).status){t.next=7;break}return r=e.data,t.abrupt("return",r);case 7:t.next=13;break;case 9:throw t.prev=9,t.t0=t.catch(0),console.error("Error:",t.t0),t.t0;case 13:case"end":return t.stop()}},t,null,[[0,9]])}))).apply(this,arguments)}var m=function(){return p.apply(this,arguments)},d=Object(n.createContext)(),v=function(t){var e=Object(n.useState)(),r=Object(u.a)(e,2),o=r[0],i=(r[1],Object(n.useState)(null)),c=Object(u.a)(i,2),l=c[0],s=c[1];return Object(n.useEffect)(function(){m().then(function(t){s(t)}).catch(function(t){console.log(t)})},[]),a.a.createElement(d.Provider,{value:{user:l,setUser:s,redirect:o}},t.children)};function y(){y=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",m="executing",d="completed",v={};function g(){}function w(){}function E(){}var b={};s(b,i,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(T([])));L&&L!==r&&n.call(L,i)&&(b=L);var j=E.prototype=g.prototype=Object.create(b);function N(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){function r(a,o,i,c){var l=h(t[a],t,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(u).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e(function(e,a){r(t,n,e,a)})}return o=o?o.then(a,a):a()}})}function k(e,r,n){var a=f;return function(o,i){if(a===m)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var s=h(e,r,n);if("normal"===s.type){if(a=n.done?d:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=d,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=E,a(j,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:w,configurable:!0}),w.displayName=s(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},N(O.prototype),s(O.prototype,c,function(){return this}),e.AsyncIterator=O,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new O(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},N(j),s(j,l,"Generator"),s(j,i,function(){return this}),s(j,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function g(){var t=Object(l.o)(),e=Object(n.useContext)(d),r=e.user,o=e.setUser,i=Object(n.useState)(null),c=Object(u.a)(i,2),h=c[0],f=c[1],p=Object(n.useState)(!1),m=Object(u.a)(p,2),v=m[0],g=m[1];r&&"/login"===window.location.pathname&&t("/dashboard");var w=Object(n.useState)(),E=Object(u.a)(w,2),b=E[0],x=E[1],L=Object(n.useState)(),j=Object(u.a)(L,2),N=j[0],O=j[1],k=function(){var e=Object(s.a)(y().mark(function e(r){var a,i,c,l;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),a={email:b,password:N},e.prev=2,e.next=5,fetch("//app.toolszm.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),credentials:"include"});case 5:if(!(i=e.sent).ok){e.next=13;break}return e.next=9,i.json();case 9:(c=e.sent).username&&(o(c),t("/dashboard"),Object(n.useEffect)()),e.next=18;break;case 13:return e.next=15,i.json();case 15:(l=e.sent)&&f(l.message),console.log(l);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),console.log("Error:",e.t0);case 23:case"end":return e.stop()}},e,null,[[2,20]])}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container-fluid p-0"},a.a.createElement("div",{className:"row m-0"},a.a.createElement("div",{className:"col-12 p-0"},a.a.createElement("div",{className:"login-card"},a.a.createElement("div",null,a.a.createElement("div",{className:"text-center"},a.a.createElement("img",{class:"img-fluid for-light",style:{height:"120px"},src:"logo.png",alt:"Toolszm"})),a.a.createElement("div",{className:"login-main"},a.a.createElement("form",{className:"theme-form",onSubmit:k},a.a.createElement("h4",{className:"text-center"},"Sign in to account"),a.a.createElement("p",{className:"text-center"},"Enter your email & password to login"),h&&a.a.createElement("div",{className:"alert alert-danger dark",role:"alert"},a.a.createElement("p",{className:" m-0",style:{color:"white"}},h)),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"col-form-label"},"Email Address"),a.a.createElement("input",{className:"form-control",type:"email",required:"required",placeholder:"Test@gmail.com",onChange:function(t){return x(t.target.value)}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"col-form-label"},"Password"),a.a.createElement("div",{className:"form-input position-relative"},a.a.createElement("input",{className:"form-control",type:v?"text":"password",name:"login[password]",required:"required",placeholder:"*********",onChange:function(t){return O(t.target.value)}}),a.a.createElement("div",{className:"showPassword"},a.a.createElement("span",{className:"show-hide",onClick:function(){g(!v)}}," ",v?"Hide":"Show")))),a.a.createElement("div",{className:"form-group mb-0"},a.a.createElement("div",{className:"text-end mt-3"},a.a.createElement("button",{className:"btn btn-primary btn-block w-100",type:"submit"},"Sign in                 ")))))))))))}function w(){return a.a.createElement("div",{className:"container-fluid p-0"},a.a.createElement("div",{className:"row m-0"},a.a.createElement("div",{className:"col-12 p-0"},a.a.createElement("div",{className:"login-card"},a.a.createElement("div",null,a.a.createElement("div",{className:"login-main"},a.a.createElement("form",{className:"theme-form"},a.a.createElement("h4",{className:"text-center"},"Create your account"),a.a.createElement("p",{className:"text-center"},"Enter your personal details to create account"),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"col-form-label pt-0"},"Your Name"),a.a.createElement("div",{className:"row g-2"},a.a.createElement("div",{className:"col-6"},a.a.createElement("input",{className:"form-control",type:"text",required:"",placeholder:"First name"})),a.a.createElement("div",{className:"col-6"},a.a.createElement("input",{className:"form-control",type:"text",required:"",placeholder:"Last name"})))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"col-form-label"},"Email Address"),a.a.createElement("input",{className:"form-control",type:"email",required:"",placeholder:"Test@gmail.com"})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"col-form-label"},"Password"),a.a.createElement("div",{className:"form-input position-relative"},a.a.createElement("input",{className:"form-control",type:"password",name:"login[password]",required:"",placeholder:"*********"}),a.a.createElement("div",{className:"show-hide"},a.a.createElement("span",{className:"show"})))),a.a.createElement("div",{className:"form-group"},a.a.createElement("div",{className:"checkbox p-0"},a.a.createElement("input",{id:"checkbox1",type:"checkbox"}),a.a.createElement("label",{className:"text-muted",htmlFor:"checkbox1"},"Agree with",a.a.createElement("a",{className:"ms-2",href:"#"},"Privacy Policy"))),a.a.createElement("button",{className:"btn btn-primary btn-block w-100 mt-3",type:"submit"},"Create Account")),a.a.createElement("div",{className:"login-social-title"},a.a.createElement("h6",null,"Or Sign in with                 ")),a.a.createElement("p",{className:"mt-4 mb-0 text-center"},"Already have an account?",a.a.createElement(c.b,{className:"ms-2",to:"/login"},"Sign in")))))))))}function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",m="executing",d="completed",v={};function y(){}function g(){}function w(){}var b={};s(b,i,function(){return this});var x=Object.getPrototypeOf,L=x&&x(x(T([])));L&&L!==r&&n.call(L,i)&&(b=L);var j=w.prototype=y.prototype=Object.create(b);function N(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){function r(a,o,i,c){var l=h(t[a],t,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(u).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e(function(e,a){r(t,n,e,a)})}return o=o?o.then(a,a):a()}})}function k(e,r,n){var a=f;return function(o,i){if(a===m)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var s=h(e,r,n);if("normal"===s.type){if(a=n.done?d:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=d,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=w,a(j,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},N(O.prototype),s(O.prototype,c,function(){return this}),e.AsyncIterator=O,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new O(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},N(j),s(j,l,"Generator"),s(j,i,function(){return this}),s(j,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function b(){var t=Object(n.useContext)(d),e=(t.user,t.setUser),r=function(){var t=Object(s.a)(E().mark(function t(){return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(null),t.next=3,h.get("/logout");case 3:Object(l.o)("/login");case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"page-header"},a.a.createElement("div",{className:"header-wrapper row m-0"},a.a.createElement("div",{className:"header-logo-wrapper col-auto p-0"},a.a.createElement("div",{className:"logo-header-main"},a.a.createElement("a",{href:"index.html"},a.a.createElement("img",{className:"img-fluid for-light img-100",src:"../assets/images/logo/logo2.png",alt:""}),a.a.createElement("img",{className:"img-fluid for-dark",src:"../assets/images/logo/logo.png",alt:""})))),a.a.createElement("div",{className:"left-header col horizontal-wrapper ps-0"}),a.a.createElement("div",{className:"nav-right col-6 pull-right right-header p-0"},a.a.createElement("ul",{className:"nav-menus"},a.a.createElement("li",null),a.a.createElement("li",{className:"profile-nav onhover-dropdown"},a.a.createElement("div",{className:"account-user"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-user"},a.a.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.a.createElement("circle",{cx:"12",cy:"7",r:"4"}))),a.a.createElement("ul",{className:"profile-dropdown onhover-show-div"},a.a.createElement("li",null,a.a.createElement("a",{onClick:r},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-log-out"},a.a.createElement("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),a.a.createElement("polyline",{points:"10 17 15 12 10 7"}),a.a.createElement("line",{x1:"15",y1:"12",x2:"3",y2:"12"})),a.a.createElement("span",null,"Log Out"))))))))))}function x(){return a.a.createElement("footer",{class:"footer"},a.a.createElement("div",{class:"container-fluid"},a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-md-6 p-0 footer-left"},a.a.createElement("p",{class:"mb-0"},"Toolszm - Group Buy Service Provider")))))}var L=function(t){var e=t.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"tap-top"},a.a.createElement("i",{"data-feather":"chevrons-up"})),a.a.createElement("div",{className:"page-wrapper compact-wrapper",id:"pageWrapper"},a.a.createElement(b,null),a.a.createElement("div",{className:"page-body-wrapper"},a.a.createElement("div",{class:"page-body"},e),a.a.createElement(x,null))))};function j(){j=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new G(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",m="executing",d="completed",v={};function y(){}function g(){}function w(){}var E={};s(E,i,function(){return this});var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,i)&&(E=x);var L=w.prototype=y.prototype=Object.create(E);function N(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){function r(a,o,i,c){var l=h(t[a],t,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(u).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e(function(e,a){r(t,n,e,a)})}return o=o?o.then(a,a):a()}})}function k(e,r,n){var a=f;return function(o,i){if(a===m)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var s=h(e,r,n);if("normal"===s.type){if(a=n.done?d:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=d,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=w,a(L,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},N(O.prototype),s(O.prototype,c,function(){return this}),e.AsyncIterator=O,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new O(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},N(L),s(L,l,"Generator"),s(L,i,function(){return this}),s(L,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function N(){var t=Object(l.o)(),e=Object(n.useContext)(d),r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],c=o[1];return Object(n.useEffect)(function(){function t(){return(t=Object(s.a)(j().mark(function t(){var e,r;return j().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("/tools");case 3:200===(e=t.sent).status&&(r=e.data,c(r)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error:",t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[]),console.log(e.user),e.user||t("/login"),a.a.createElement(L,null,a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:"row",style:{margin:"0 10px"}},i.map(function(t){return a.a.createElement("div",{class:"col-xl-3 col-lg-4 col-sm-6"},a.a.createElement("div",{class:"card"},a.a.createElement("div",{class:"product-box"},a.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){return e=t.url,void window.require("electron").ipcRenderer.send("openChildWindow",e);var e}},a.a.createElement("div",{class:"product-img"},a.a.createElement("img",{class:"item img-fluid",src:t.img_url,alt:"semrush",title:"semrush",height:"auto",width:"150px"})),a.a.createElement("div",{class:"product-details"},a.a.createElement("h4",null,t.title))))))}))))}var O=function(){return Object(n.useEffect)(function(){var t=function(t){var e=document.createElement("script");e.src=t,document.body.appendChild(e)};t("../assets/js/jquery-3.6.0.min.js"),t("../assets/js/bootstrap/bootstrap.bundle.min.js"),t("../assets/js/icons/feather-icon/feather.min.js"),t("../assets/js/icons/feather-icon/feather-icon.js"),t("../assets/js/scrollbar/simplebar.js"),t("../assets/js/scrollbar/custom.js"),t("../assets/js/config.js"),t("../assets/js/sidebar-menu.js"),t("../assets/js/clipboard/clipboard.min.js"),t("../assets/js/dashboard/default.js"),t("../assets/js/script.js")},[]),a.a.createElement(v,null,a.a.createElement(c.a,null,a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/",element:a.a.createElement(l.a,{to:"/login"})}),a.a.createElement(l.b,{path:"/login",element:a.a.createElement(g,null)}),a.a.createElement(l.b,{path:"/signup",element:a.a.createElement(w,null)}),a.a.createElement(l.b,{path:"/dashboard",element:a.a.createElement(N,null)}))))},k=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,55)).then(function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null))),k()}},[[24,3,2]]]);
//# sourceMappingURL=main.bd7e2d50.chunk.js.map