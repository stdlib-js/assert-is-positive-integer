// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";var t=r.isPrimitive;var i=function(e){return t(e)&&e>0},n=r.isObject;var s=function(e){return n(e)&&e.valueOf()>0},a=i,d=s;var m=e,o=function(e){return a(e)||d(e)},u=i,v=s;m(o,"isPrimitive",u),m(o,"isObject",v);var l=o;export{l as default,v as isObject,u as isPrimitive};
//# sourceMappingURL=index.mjs.map
