function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,c=u||s||Function("return this")(),l=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,f,u,s=0,c=!1,l=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,s=t,a=e.apply(r,n)}function h(e){return s=e,f=setTimeout(w,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||l&&e-s>=r}function w(){var e=v();if(j(e))return L(e);f=setTimeout(w,function(e){var n=t-(e-u);return l?d(n,r-(e-s)):n}(e))}function L(e){return f=void 0,g&&i?y(e):(i=o=void 0,a)}function O(){var e=v(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(l)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(l="maxWait"in n)?m(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=u=o=f=void 0},O.flush=function(){return void 0===f?a:L(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}function y(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const h={},j={formLissen:document.querySelector(".feedback-form")};j.formLissen.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),j.formLissen.addEventListener("submit",(function(e){e.preventDefault();const t=j.formLissen.elements.email.value,n=j.formLissen.elements.message.value,i={email:t,message:n};console.log(i),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=y("feedback-form-state");e&&(j.formLissen.elements.email.value=e.email,j.formLissen.elements.message.value=e.message)}();
//# sourceMappingURL=03-feedback.4c2873d1.js.map
