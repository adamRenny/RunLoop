/*global global:true, module:true, exports:true */
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
 * performance.now polyfill Definition
 * @author Adam Ranfelt
 * @version 1.0
 */
(function(root, factory) {
    'use strict';

    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(global);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return factory(root);
        });
    } else {
        // Browser globals
        factory(root);
    }
}(this, function (root, undefined) {
    'use strict';

    var performance;
    var timingStart;
    var now;

    // Polyfill the now function
    // Used the JSPerf to determine which now method: http://jsperf.com/date-now-vs-new-date-gettime/13
    if (typeof Date.now !== 'function') {
        now = function now() {
            return (new Date()).getTime();
        };
    } else {
        now = function now() {
            return Date.now();
        };
    }

    // If performance exists, use it
    performance = typeof window.performance !== 'undefined' ? window.performance : {};

    if (typeof performance.timing === 'object') {
        timingStart = performance.timing.navigationStart;
    } else {
        timingStart = now();
        performance.timing = {
            navigationStart: timingStart
        };
    }

    if (typeof performance.now !== 'function') {
        
        performance.now = function perfNow() {
            return now() - timingStart;
        };
    }

    if (typeof window.performance === 'undefined') {
        window.performance = performance;
    }

    return performance;
}));