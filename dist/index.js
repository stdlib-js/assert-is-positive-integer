"use strict";var r=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(q){throw (i=0, q)}};};var t=r(function(d,u){
var P=require('@stdlib/assert-is-integer/dist').isPrimitive;function O(e){return P(e)&&e>0}u.exports=O
});var s=r(function(y,v){
var g=require('@stdlib/assert-is-integer/dist').isObject;function m(e){return g(e)&&e.valueOf()>0}v.exports=m
});var o=r(function(R,c){
var I=t(),b=s();function f(e){return I(e)||b(e)}c.exports=f
});var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=o(),j=t(),p=s();a(n,"isPrimitive",j);a(n,"isObject",p);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
