!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var r,o,a,f,u,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,s=t,f=e.apply(i,n)}function h(e){return s=e,u=setTimeout(w,t),c?b(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function w(){var e=p();if(O(e))return L(e);u=setTimeout(w,function(e){var n=t-(e-l);return m?g(n,a-(e-s)):n}(e))}function L(e){return u=void 0,d&&r?b(e):(r=o=void 0,f)}function S(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return h(l);if(m)return u=setTimeout(w,t),b(l)}return void 0===u&&(u=setTimeout(w,t)),f}return t=j(t)||0,y(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=l=o=u=void 0},S.flush=function(){return void 0===u?f:L(p())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||u.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var h,O="feedback-form-state",w={},L={formLissen:document.querySelector(".feedback-form")};L.formLissen.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(w))}),500)),L.formLissen.addEventListener("submit",(function(e){e.preventDefault();var t=L.formLissen.elements.email.value,n=L.formLissen.elements.message.value,r={email:t,message:n};console.log(r),e.target.reset(),localStorage.removeItem("feedback-form-state")})),(h=function(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}(O))&&(L.formLissen.elements.email.value=h.email,L.formLissen.elements.message.value=h.message)}();
//# sourceMappingURL=03-feedback.44293125.js.map
