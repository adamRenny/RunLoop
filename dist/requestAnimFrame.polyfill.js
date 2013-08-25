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

(function(e,t){typeof exports=="object"?module.exports=t(global):typeof define=="function"&&define.amd?define("requestAnimFrame.polyfill",[],function(){return t(e)}):t(e)})(this,function(e,t){var n=1e3/60,r=function(){var e,t,n;return typeof Date.now!="function"?n=function(){return(new Date).getTime()}:n=function(){return Date.now()},e=typeof window.performance!="undefined"?window.performance:{},typeof e.timing=="object"?t=e.timing.navigationStart:(t=n(),e.timing={navigationStart:t}),typeof e.now!="function"&&(e.now=function(){return n()-t}),typeof window.performance=="undefined"&&(window.performance=e),e}(),i=function(){},s=null,o=null,u="requestAnimationFrame",a="cancelAnimationFrame",f=["","webkit","moz","o","ms"],l=null,c=function(e,t){var n=t+e.substr(0,1).toUpperCase()+e.substr(1);return n=n.substr(0,1).toLowerCase()+n.substr(1),n};return s=function(){var i=0,o=f.length,a,h,p,d;for(;i<o;i++){a=f[i],h=c(u,a);if(e[h]!==t){p=e[s],l=f[i];break}}return p===t&&(p=function(i){return e.setTimeout(function(){i(r.now())},n)}),p}(),o=function(){var n;if(l===null)return e.clearTimeout;var r=c(a,l);return e[r]!==t?n=e[r]:n=i,n}(),e&&(e.requestAnimFrame=s,e.cancelAnimFrame=o),{requestAnimFrame:s,cancelAnimFrame:o,performance:r}});