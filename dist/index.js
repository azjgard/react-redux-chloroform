module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){t.exports=n(16)()},function(t,e){t.exports=require("react")},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,i,u,s){if(!t){var a;if(void 0===e)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,u,s],p=0;(a=new Error(e.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}},function(t,e,n){"use strict";(function(t,r){var o,i=n(7);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var u=Object(i.a)(o);e.a=u}).call(this,n(4),n(18)(t))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,u=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,p=c&&c(Object);t.exports=function t(e,n,f){if("string"!=typeof n){if(p){var l=c(n);l&&l!==p&&t(e,l,f)}var d=u(n);s&&(d=d.concat(s(n)));for(var h=0;h<d.length;++h){var b=d[h];if(!(r[b]||o[b]||f&&f[b])){var y=a(n,b);try{i(e,b,y)}catch(t){}}}return e}return e}},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(4))},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Form",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Field",{enumerable:!0,get:function(){return o.default}});var r=i(n(9)),o=i(n(20));function i(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(10));var o=(0,n(19).connect)(function(t){return{}},function(t){return{dispatch:t}})(r.default);e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(1));function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n(11);var f=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?p(t):e}(this,a(e).call(this,t))).submit=n.submit.bind(p(p(n))),n.state={shouldSubmit:!1};var i=n.props.children;return i&&!i.length&&(i=[i]),n.state.formData=i.reduce(function(t,e){return"ChloroformField"===e.type.displayName&&e.name&&(t[e.name]=""),t},{}),n.ChloroformFields=r.default.Children.map(i,function(t){return"ChloroformField"===t.type.displayName?r.default.cloneElement(t,{onChange:function(e){return n.handleChange(t.props.name,e.target.value)}}):t}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,r.default.Component),function(t,e,n){e&&s(t.prototype,e),n&&s(t,n)}(e,[{key:"submit",value:function(t){t.preventDefault(),this.setState(i({},this.state,{shouldSubmit:!0}))}},{key:"componentDidUpdate",value:function(){this.state.shouldSubmit&&(this.props.dispatch(this.props.action(this.state.formData)),this.resetForm())}},{key:"resetForm",value:function(){var t={};for(var e in this.state.formData)t[e]="";this.setState({shouldSubmit:!1,formData:t})}},{key:"handleChange",value:function(t,e){this.setState(i({},this.state,{formData:i({},this.state.formData,u({},t,e))}))}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.submitButtonText;return r.default.createElement("form",{className:e},r.default.createElement("div",null,this.ChloroformFields,r.default.createElement("button",{onClick:this.submit},n||"Submit")))}}]),e}();e.default=f},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(14)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"* {\n  box-sizing: border-box;\n}\n\nform,\nform input,\nform button {\n  display: block;\n}\n\nform {\n  width: 300px;\n  margin: 20px auto;\n  border: 1px solid #aaa;\n  padding: 25px;\n  text-align: center;\n  background-color: #ccc;\n}\n\nform > div,\nform > div > div {\n  display: inline-block;\n  text-align: left;\n}\n\nform input,\nform button,\nform > div > div {\n  width: 100%;\n}\n\nform input,\nform button {\n  padding: 8px;\n  margin-bottom: 10px;\n}\n\nform input {\n  border: 1px solid #aaa;\n  background-color: #fff;\n}\n\nform button {\n  margin-bottom: 0;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,s=0,a=[],c=n(15);function p(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var u=0;u<i.parts.length;u++)i.parts[u](o.parts[u]);for(;u<o.parts.length;u++)i.parts.push(y(o.parts[u],e))}else{var s=[];for(u=0;u<o.parts.length;u++)s.push(y(o.parts[u],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(s):n.push(r[u]={id:u,parts:[s]})}return n}function l(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),a.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=a.indexOf(t);e>=0&&a.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),l(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=s++;n=u||(u=h(e)),r=m.bind(null,n,a,!1),o=m.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),l(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(u),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return p(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var u=n[i];(s=r[u.id]).refs--,o.push(s)}t&&p(f(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete r[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";var r=n(17);function o(){}t.exports=function(){function t(t,e,n,o,i,u){if(u!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),i=n.n(o),u=i.a.shape({trySubscribe:i.a.func.isRequired,tryUnsubscribe:i.a.func.isRequired,notifyNestedSubs:i.a.func.isRequired,isSubscribed:i.a.func.isRequired}),s=i.a.shape({subscribe:i.a.func.isRequired,dispatch:i.a.func.isRequired,getState:i.a.func.isRequired});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1]||e+"Subscription",o=function(t){function o(n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n,r));return i[e]=n.store,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,t),o.prototype.getChildContext=function(){var t;return(t={})[e]=this[e],t[n]=null,t},o.prototype.render=function(){return r.Children.only(this.props.children)},o}(r.Component);return o.propTypes={store:s.isRequired,children:i.a.element.isRequired},o.childContextTypes=((t={})[e]=s.isRequired,t[n]=u,t),o}var c=a(),p=n(5),f=n.n(p),l=n(2),d=n.n(l);var h=null,b={notify:function(){}};var y=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.store=e,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=b}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},t.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=function(){var t=[],e=[];return{clear:function(){e=h,t=h},notify:function(){for(var n=t=e,r=0;r<n.length;r++)n[r]()},get:function(){return e},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==h&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}())},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=b)},t}(),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var m=0,O={};function g(){}function w(t){var e,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.getDisplayName,a=void 0===i?function(t){return"ConnectAdvanced("+t+")"}:i,c=o.methodName,p=void 0===c?"connectAdvanced":c,l=o.renderCountProp,h=void 0===l?void 0:l,b=o.shouldHandleStateChanges,w=void 0===b||b,S=o.storeKey,P=void 0===S?"store":S,j=o.withRef,C=void 0!==j&&j,x=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),E=P+"Subscription",T=m++,_=((e={})[P]=s,e[E]=u,e),M=((n={})[E]=u,n);return function(e){d()("function"==typeof e,"You must pass a component to the function returned by "+p+". Instead received "+JSON.stringify(e));var n=e.displayName||e.name||"Component",o=a(n),i=v({},x,{getDisplayName:a,methodName:p,renderCountProp:h,shouldHandleStateChanges:w,storeKey:P,withRef:C,displayName:o,wrappedComponentName:n,WrappedComponent:e}),u=function(n){function u(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,n.call(this,t,e));return r.version=T,r.state={},r.renderCount=0,r.store=t[P]||e[P],r.propsMode=Boolean(t[P]),r.setWrappedInstance=r.setWrappedInstance.bind(r),d()(r.store,'Could not find "'+P+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+P+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(u,n),u.prototype.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return(t={})[E]=e||this.context[E],t},u.prototype.componentDidMount=function(){w&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},u.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},u.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},u.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=g,this.store=null,this.selector.run=g,this.selector.shouldComponentUpdate=!1},u.prototype.getWrappedInstance=function(){return d()(C,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+p+"() call."),this.wrappedInstance},u.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},u.prototype.initSelector=function(){var e=t(this.store.dispatch,i);this.selector=function(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(t){n.shouldComponentUpdate=!0,n.error=t}}};return n}(e,this.store),this.selector.run(this.props)},u.prototype.initSubscription=function(){if(w){var t=(this.propsMode?this.props:this.context)[E];this.subscription=new y(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},u.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(O)):this.notifyNestedSubs()},u.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},u.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},u.prototype.addExtraProps=function(t){if(!(C||h||this.propsMode&&this.subscription))return t;var e=v({},t);return C&&(e.ref=this.setWrappedInstance),h&&(e[h]=this.renderCount++),this.propsMode&&this.subscription&&(e[E]=this.subscription),e},u.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return Object(r.createElement)(e,this.addExtraProps(t.props))},u}(r.Component);return u.WrappedComponent=e,u.displayName=o,u.childContextTypes=M,u.contextTypes=_,u.propTypes=_,f()(u,e)}}var S=Object.prototype.hasOwnProperty;function P(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function j(t,e){if(P(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!S.call(e,n[o])||!P(t[n[o]],e[n[o]]))return!1;return!0}n(3),Math.random().toString(36).substring(7).split("").join("."),Math.random().toString(36).substring(7).split("").join(".");var C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.assign;function x(t,e){return function(){return e(t.apply(this,arguments))}}var E=n(6),T="object"==typeof self&&self&&self.Object===Object&&self,_=(E.a||T||Function("return this")()).Symbol,M=Object.prototype;M.hasOwnProperty,M.toString,_&&_.toStringTag;Object.prototype.toString;_&&_.toStringTag;Object.getPrototypeOf,Object;var N=Function.prototype,R=Object.prototype,U=N.toString;R.hasOwnProperty,U.call(Object);function D(t){return function(e,n){var r=t(e,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function q(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function k(t,e){return function(e,n){n.displayName;var r=function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)};return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=q(t);var o=r(e,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=q(o),o=r(e,n)),o},r}}var I=[function(t){return"function"==typeof t?k(t):void 0},function(t){return t?void 0:D(function(t){return{dispatch:t}})},function(t){return t&&"object"==typeof t?D(function(e){return function(t,e){if("function"==typeof t)return x(t,e);if("object"!==(void 0===t?"undefined":C(t))||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":void 0===t?"undefined":C(t))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),r={},o=0;o<n.length;o++){var i=n[o],u=t[i];"function"==typeof u&&(r[i]=x(u,e))}return r}(t,e)}):void 0}];var A=[function(t){return"function"==typeof t?k(t):void 0},function(t){return t?void 0:D(function(){return{}})}],F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function L(t,e,n){return F({},n,t,e)}var B=[function(t){return"function"==typeof t?function(t){return function(e,n){n.displayName;var r=n.pure,o=n.areMergedPropsEqual,i=!1,u=void 0;return function(e,n,s){var a=t(e,n,s);return i?r&&o(a,u)||(u=a):(i=!0,u=a),u}}}(t):void 0},function(t){return t?void 0:function(){return L}}];function W(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function H(t,e,n,r,o){var i=o.areStatesEqual,u=o.areOwnPropsEqual,s=o.areStatePropsEqual,a=!1,c=void 0,p=void 0,f=void 0,l=void 0,d=void 0;function h(o,a){var h=!u(a,p),b=!i(o,c);return c=o,p=a,h&&b?(f=t(c,p),e.dependsOnOwnProps&&(l=e(r,p)),d=n(f,l,p)):h?(t.dependsOnOwnProps&&(f=t(c,p)),e.dependsOnOwnProps&&(l=e(r,p)),d=n(f,l,p)):b?function(){var e=t(c,p),r=!s(e,f);return f=e,r&&(d=n(f,l,p)),d}():d}return function(o,i){return a?h(o,i):function(o,i){return f=t(c=o,p=i),l=e(r,p),d=n(f,l,p),a=!0,d}(o,i)}}function J(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,o=e.initMergeProps,i=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(t,i),s=r(t,i),a=o(t,i);return(i.pure?H:W)(u,s,a,t,i)}var $=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function K(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function G(t,e){return t===e}var V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?w:e,r=t.mapStateToPropsFactories,o=void 0===r?A:r,i=t.mapDispatchToPropsFactories,u=void 0===i?I:i,s=t.mergePropsFactories,a=void 0===s?B:s,c=t.selectorFactory,p=void 0===c?J:c;return function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=i.pure,c=void 0===s||s,f=i.areStatesEqual,l=void 0===f?G:f,d=i.areOwnPropsEqual,h=void 0===d?j:d,b=i.areStatePropsEqual,y=void 0===b?j:b,v=i.areMergedPropsEqual,m=void 0===v?j:v,O=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=K(t,o,"mapStateToProps"),w=K(e,u,"mapDispatchToProps"),S=K(r,a,"mergeProps");return n(p,$({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:g,initMapDispatchToProps:w,initMergeProps:S,pure:c,areStatesEqual:l,areOwnPropsEqual:h,areStatePropsEqual:y,areMergedPropsEqual:m},O))}}();n.d(e,"Provider",function(){return c}),n.d(e,"createProvider",function(){return a}),n.d(e,"connectAdvanced",function(){return w}),n.d(e,"connect",function(){return V})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(1));function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,r.default.Component),function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(e,[{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("input",{type:"text",onChange:this.props.onChange,placeholder:this.props.name}))}}]),e}();c.displayName="ChloroformField";var p=c;e.default=p}]);