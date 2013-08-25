/**
 * almond 0.2.3 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * @fileOverview
 * Copyright (c) 2012-2013 Adam Ranfelt
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * requestAnimFrame polyfill Definition
 * @author Adam Ranfelt
 * @version 2.0
 */

/**
 * @fileOverview
 * Copyright (c) 2012-2013 Adam Ranfelt
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * RunLoop Module Definition
 * @author Adam Ranfelt
 * @version 1.3
 */

(function(e,t){typeof exports=="object"?module.exports=t(global):typeof define=="function"&&define.amd?define([],function(){return t(null)}):t(e)})(this,function(e){var t,n,r;(function(e){function d(e,t){return h.call(e,t)}function v(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(f=0;f<e.length;f+=1){h=e[f];if(h===".")e.splice(f,1),f-=1;else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function m(t,n){return function(){return s.apply(e,p.call(arguments,0).concat([t,n]))}}function g(e){return function(t){return v(t,e)}}function y(e){return function(t){a[e]=t}}function b(t){if(d(f,t)){var n=f[t];delete f[t],c[t]=!0,i.apply(e,n)}if(!d(a,t)&&!d(c,t))throw new Error("No "+t);return a[t]}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice;o=function(e,t){var n,r=w(e),i=r[0];return e=r[1],i&&(i=v(i,t),n=b(i)),i?n&&n.normalize?e=n.normalize(e,g(t)):e=v(e,t):(e=v(e,t),r=w(e),i=r[0],e=r[1],i&&(n=b(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return m(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:E(e)}}},i=function(t,n,r,i){var s,l,h,p,v,g=[],w;i=i||t;if(typeof r=="function"){n=!n.length&&r.length?["require","exports","module"]:n;for(v=0;v<n.length;v+=1){p=o(n[v],i),l=p.f;if(l==="require")g[v]=u.require(t);else if(l==="exports")g[v]=u.exports(t),w=!0;else if(l==="module")s=g[v]=u.module(t);else if(d(a,l)||d(f,l)||d(c,l))g[v]=b(l);else{if(!p.p)throw new Error(t+" missing "+l);p.p.load(p.n,m(i,!0),y(l),{}),g[v]=a[l]}}h=r.apply(a[t],g);if(t)if(s&&s.exports!==e&&s.exports!==a[t])a[t]=s.exports;else if(h!==e||!w)a[t]=h}else t&&(a[t]=r)},t=n=s=function(t,n,r,a,f){return typeof t=="string"?u[t]?u[t](n):b(o(t,n).f):(t.splice||(l=t,n.splice?(t=n,n=r,r=null):t=e),n=n||function(){},typeof r=="function"&&(r=a,a=f),a?i(e,t,n,r):setTimeout(function(){i(e,t,n,r)},15),s)},s.config=function(e){return l=e,s},r=function(e,t,n){t.splice||(n=t,t=[]),!d(a,e)&&!d(f,e)&&(f[e]=[e,t,n])},r.amd={jQuery:!0}})(),r("../tool/compiler/almond",function(){}),function(e,t){typeof exports=="object"?module.exports=t(global):typeof r=="function"&&r.amd?r("requestAnimFrame.polyfill",[],function(){return t(e)}):t(e)}(this,function(e,t){var n=1e3/60,r=function(){var e,t,n;return typeof Date.now!="function"?n=function(){return(new Date).getTime()}:n=function(){return Date.now()},e=typeof window.performance!="undefined"?window.performance:{},typeof e.timing=="object"?t=e.timing.navigationStart:(t=n(),e.timing={navigationStart:t}),typeof e.now!="function"&&(e.now=function(){return n()-t}),typeof window.performance=="undefined"&&(window.performance=e),e}(),i=function(){},s=null,o=null,u="requestAnimationFrame",a="cancelAnimationFrame",f=["","webkit","moz","o","ms"],l=null,c=function(e,t){var n=t+e.substr(0,1).toUpperCase()+e.substr(1);return n=n.substr(0,1).toLowerCase()+n.substr(1),n};return s=function(){var i=0,o=f.length,a,h,p,d;for(;i<o;i++){a=f[i],h=c(u,a);if(e[h]!==t){p=e[s],l=f[i];break}}return p===t&&(p=function(i){return e.setTimeout(function(){i(r.now())},n)}),p}(),o=function(){var n;if(l===null)return e.clearTimeout;var r=c(a,l);return e[r]!==t?n=e[r]:n=i,n}(),e&&(e.requestAnimFrame=s,e.cancelAnimFrame=o),{requestAnimFrame:s,cancelAnimFrame:o,performance:r}}),r("RunLoop",["requestAnimFrame.polyfill"],function(e){var t=e.requestAnimFrame,n=e.cancelAnimFrame,r=e.performance,i=400,s=-1,o=function(e,t,n){n===undefined||n>=e.length?e.push(t):n<0?e.unshift(t):e.splice(n,0,t)},u=function(e,t){var n=e.indexOf(t);if(n===s)throw new Error("UndefinedError: call has not been added");e.splice(n,1)},a=function(){this.init()};return a.prototype.init=function(){return this.lastTimestamp=r.now(),this.isLooping=!1,this.step=this._step.bind(this),this.updateCallCycle=[],this.renderCallCycle=[],this},a.prototype.start=function(){return this.isLooping=!0,this.lastTimestamp=r.now(),t(this.step),this},a.prototype.stop=function(){return this.isLooping=!1,n(this.step),this},a.prototype.addCall=function(e,t){if(t===undefined||t<=a.NO_CYCLE||t>a.ALL_CYCLES)throw new Error("ArgumentsError: type must be of type CYCLE enumeration");if(e===undefined||typeof e!="function")throw new Error("ArgumentsError: call must be of type function");return t&a.UPDATE_CYCLE&&o(this.updateCallCycle,e),t&a.RENDER_CYCLE&&o(this.renderCallCycle,e),this},a.prototype.insertCall=function(e,t,n){if(n===undefined||n<=a.NO_CYCLE||n>a.ALL_CYCLES)throw new Error("ArgumentsError: type must be of type CYCLE enumeration");if(e===undefined||typeof e!="function")throw new Error("ArgumentsError: call must be of type function");if(typeof t!="number")throw new Error("ArgumentsError: call must be of type number");return n&a.UPDATE_CYCLE&&o(this.updateCallCycle,e,t),n&a.RENDER_CYCLE&&o(this.renderCallCycle,e,t),this},a.prototype.removeCall=function(e,t){if(t===undefined||t<=a.NO_CYCLE||t>a.ALL_CYCLES)throw new Error("ArgumentsError: type must be of type CYCLE enumeration");if(e===undefined||typeof e!="function")throw new Error("ArgumentsError: call must be of type function");return t&a.UPDATE_CYCLE&&u(this.updateCallCycle,e),t&a.RENDER_CYCLE&&u(this.renderCallCycle,e),this},a.prototype.update=function(e){var t=0,n=this.updateCallCycle,r=n.length;for(;t<r;t++)n[t](e)},a.prototype.render=function(){var e=0,t=this.renderCallCycle,n=t.length;for(;e<n;e++)t[e]()},a.prototype._step=function(e){if(!this.isLooping)return;t(this.step);var n=e-this.lastTimestamp;if(n>=i){this.lastTimestamp=e;return}this.update(n),this.render(),this.lastTimestamp=e},a.NO_CYCLE=0,a.UPDATE_CYCLE=1,a.RENDER_CYCLE=2,a.ALL_CYCLES=3,a});var i=n("RunLoop");return e&&(e.RunLoop=i),i});