(function(){/*

 Copyright 2016 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
'use strict';var e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var l={L:!0},m={};try{m.__proto__=l;k=m.L;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=h;
function p(a,b){a.prototype=f(b.prototype);a.prototype.constructor=a;if(n)n(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ea=b.prototype}var q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function r(){r=function(){};e.Symbol||(e.Symbol=t)}
var t=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function u(){r();var a=e.Symbol.iterator;a||(a=e.Symbol.iterator=e.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&q(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return v(this)}});u=function(){}}function v(a){var b=0;return w(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function w(a){u();a={next:a};a[e.Symbol.iterator]=function(){return this};return a}
function x(a){u();var b=a[Symbol.iterator];return b?b.call(a):v(a)}function y(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}for(var z=e,A=["Object","assign"],B=0;B<A.length-1;B++){var C=A[B];C in z||(z[C]={});z=z[C]}var D=A[A.length-1],E=z[D],F=E?E:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(a[g]=d[g])}return a};F!=E&&null!=F&&q(z,D,{configurable:!0,writable:!0,value:F});
function G(a){this.b=a=void 0===a?{}:a}G.prototype.o=function(){};G.prototype.m=function(){};e.Object.defineProperties(G,{a:{configurable:!0,enumerable:!0,get:function(){return{}}}});/*

 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var H={R:"mdc-form-field"},I={K:".mdc-form-field > label"};function J(a){G.call(this,Object.assign(J.a,a));var b=this;this.a=function(){return K(b)}}p(J,G);J.prototype.o=function(){this.b.s("click",this.a)};J.prototype.m=function(){this.b.l("click",this.a)};function K(a){a.b.i();requestAnimationFrame(function(){return a.b.j()})}
e.Object.defineProperties(J,{h:{configurable:!0,enumerable:!0,get:function(){return H}},c:{configurable:!0,enumerable:!0,get:function(){return I}},a:{configurable:!0,enumerable:!0,get:function(){return{s:function(){},l:function(){},i:function(){},j:function(){}}}}});var L=chai.assert;function M(){var a=J.a,b=Object.keys(a).filter(function(b){return"function"===typeof a[b]});L.equal(b.length,Object.keys(a).length,"Every adapter key must be a function");L.deepEqual(b.slice().sort(),["registerInteractionHandler","deregisterInteractionHandler","activateInputRipple","deactivateInputRipple"].slice().sort());b.forEach(function(b){return L.doesNotThrow(a[b])})};var N=chai.assert;test("exports cssClasses",function(){N.isOk("cssClasses"in J);N.deepEqual(J.h,H)});test("exports strings",function(){N.isOk("strings"in J);N.deepEqual(J.c,I)});test("defaultAdapter returns a complete adapter implementation",function(){M()});function O(){var a=td.object(J.a);return{F:new J(a),H:a}}test("#init calls event registrations",function(){var a=O(),b=a.H,c=td.matchers.isA;a.F.o();td.verify(b.s("click",c(Function)))});
test("#destroy calls event deregistrations",function(){var a=O(),b=a.F;a=a.H;var c=td.matchers.isA;b.o();b.m();td.verify(a.l("click",c(Function)))});function P(a,b,c){for(var d=[],g=2;g<arguments.length;++g)d[g-2]=arguments[g];this.v=a;d instanceof Array||y(x(d));this.c=void 0===b?this.f():b;this.c.o()}P.prototype.f=function(){throw Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");};P.prototype.m=function(){this.c.m()};var Q={P:10,O:.6,I:225,J:150};var aa={aa:"mousedown",ba:"pointerdown",ga:"touchstart",$:"keydown",blur:"focus"};function R(a){G.call(this,Object.assign(R.a,a));var b=this;this.a=U();this.v=this.h=0;this.c=!1;this.N=function(){b.c=!0;V(b)}}p(R,G);function U(){return{w:!1,G:!1,A:!1,B:!1,M:0,D:null,C:!1}}R.prototype.o=function(){};
function ba(a,b){var c=a.a;c.w||(c.w=!0,c.C=null===b,c.D=b,c.A=c.C?!1:"mousedown"===b.type||"touchstart"===b.type||"pointerdown"===b.type,c.M=Date.now(),requestAnimationFrame(function(){c.B=b&&"keydown"===b.type?void 0:!0;c.B?ca(a):a.a=U()}))}R.prototype.activate=function(a){ba(this,void 0===a?null:a)};function ca(a){var b=R.c.I;clearTimeout(a.h);clearTimeout(a.v);a.c=!1;a.h=setTimeout(function(){return a.N()},b)}
function V(a){var b=a.a,c=b.w;!b.G&&c||!a.c||(a.c=!1,a.v=setTimeout(function(){},Q.J))}function da(a,b){var c=a.a;if(c.w)if(c.C){var d=Object.assign({},c);requestAnimationFrame(function(){var b=d.B;(d.A||b)&&V(a)});a.a=U()}else{var g=aa[b.type]===c.D.type,S=g;c.A&&(S="mouseup"===b.type);var T=Object.assign({},c);requestAnimationFrame(function(){if(g){a.a.G=!0;var b=T.B;(T.A||b)&&V(a)}S&&(a.a=U())})}}R.prototype.deactivate=function(a){da(this,void 0===a?null:a)};R.prototype.m=function(){};
e.Object.defineProperties(R,{c:{configurable:!0,enumerable:!0,get:function(){return Q}},a:{configurable:!0,enumerable:!0,get:function(){return{T:function(){},Z:function(){},X:function(){},Y:function(){},S:function(){},da:function(){},s:function(){},l:function(){},ca:function(){},V:function(){},ha:function(){},U:function(){},W:function(){}}}}});function W(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];P.apply(this,[].concat(b instanceof Array?b:y(x(b))))}p(W,P);function ea(){var a=bel(X);return new W(a)}W.prototype.f=function(){var a=this;return new J({s:function(b,c){return a.h.addEventListener(b,c)},l:function(b,c){return a.h.removeEventListener(b,c)},i:function(){a.a&&a.a.u&&a.a.u.activate()},j:function(){a.a&&a.a.u&&a.a.u.deactivate()}})};
e.Object.defineProperties(W.prototype,{input:{configurable:!0,enumerable:!0,set:function(a){this.a=a},get:function(){return this.a}},h:{configurable:!0,enumerable:!0,get:function(){return this.v.querySelector(J.c.K)}}});var X=['\n    <div class="mdc-form-field">\n      <input type="radio" id="radio" checked name="radio">\n      <label for="radio">Foo</label>\n    </div>\n  '];X.raw=['\n    <div class="mdc-form-field">\n      <input type="radio" id="radio" checked name="radio">\n      <label for="radio">Foo</label>\n    </div>\n  '];var Y=chai.assert;function Z(){var a=bel(X),b=new W(a);return{root:a,g:b}}test("attachTo initializes and returns an MDCFormField instance",function(){Y.isOk(ea()instanceof W)});
test("get/set input",function(){var a=Z().g,b={};a.input=b;Y.isOk(a.input==b)});test("adapter#registerInteractionHandler adds an event listener to the label element",function(){var a=Z(),b=a.root;a=a.g;var c=td.func("eventHandler");b=b.querySelector("label");a.f().b.s("click",c);b.dispatchEvent(new Event("click"));td.verify(c(td.matchers.anything()))});
test("adapter#deregisterInteractionHandler removes an event listener from the root element",function(){var a=Z(),b=a.root;a=a.g;var c=td.func("eventHandler");b=b.querySelector("label");b.addEventListener("click",c);a.f().b.l("click",c);b.dispatchEvent(new Event("click"));td.verify(c(td.matchers.anything()),{fa:0})});test("adapter#activateInputRipple calls activate on the input ripple",function(){var a=Z().g,b={activate:td.func("activate")};a.input={u:b};a.f().b.i();td.verify(b.activate())});
test("adapter#activateInputRipple does not throw if there is no input",function(){var a=Z().g;Y.doesNotThrow(function(){return a.f().b.i()})});test("adapter#activateInputRipple does not throw if the input has no ripple getter",function(){var a=Z().g;a.input={};Y.doesNotThrow(function(){return a.f().b.i()})});test("adapter#deactivateInputRipple calls deactivate on the input ripple",function(){var a=Z().g,b={deactivate:td.func("deactivate")};a.input={u:b};a.f().b.j();Y.doesNotThrow(function(){return td.verify(b.deactivate())})});
test("adapter#deactivateInputRipple does not throw if there is no input",function(){var a=Z().g;Y.doesNotThrow(function(){return a.f().b.j()})});test("adapter#deactivateInputRipple does not throw if the input has no ripple getter",function(){var a=Z().g;a.input={};Y.doesNotThrow(function(){return a.f().b.j()})});}).call(this);//# sourceMappingURL=mdc-form-field_test.js.map

