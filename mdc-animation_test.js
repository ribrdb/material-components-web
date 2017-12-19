(function(){/*

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
'use strict';var b={animationstart:{a:"animationstart",b:"webkitAnimationStart",c:"animation"},animationend:{a:"animationend",b:"webkitAnimationEnd",c:"animation"},animationiteration:{a:"animationiteration",b:"webkitAnimationIteration",c:"animation"},transitionend:{a:"transitionend",b:"webkitTransitionEnd",c:"transition"}},c={animation:{a:"animation",b:"-webkit-animation"},transform:{a:"transform",b:"-webkit-transform"},transition:{a:"transition",b:"-webkit-transition"}};
function e(a,d){if(void 0===a.document||"function"!==typeof a.document.createElement||!(d in b||d in c))return d;var f=d in b?b:c;a=a.document.createElement("div");return f===b?f[d].c in a.style?f[d].a:f[d].b:f[d].a in a.style?f[d].a:f[d].b};var g=chai.assert,h=td.object({document:{}});h.document.createElement=function(){return{style:{webkitTransform:"nah"}}};suite("MDCAnimation");test("#getCorrectEventName does not prefix events when not necessary",function(){var a=td.object({document:{}});a.document.createElement=function(){return{style:{f:"none"}}};g.equal(e(a,"animationstart"),"animationstart","no prefix")});
test("#getCorrectPropertyName does not prefix events when not necessary",function(){var a=td.object({document:{}});a.document.createElement=function(){return{style:{f:"none"}}};g.equal(e(a,"animation"),"animation","no prefix")});test("#getCorrectEventName does not prefix events if window does not contain a DOM node",function(){var a=td.object({});g.equal(e(a,"animationstart"),"animationstart","no prefix")});
test("#getCorrectPropertyName does not prefix events if window does not contain a DOM node",function(){var a=td.object({});g.equal(e(a,"transition"),"transition","no prefix")});test("#getCorrectPropertyName prefixes css properties when required",function(){g.equal(e(h,"animation"),"-webkit-animation","added prefix");g.equal(e(h,"transform"),"-webkit-transform","added prefix");g.equal(e(h,"transition"),"-webkit-transition","added prefix")});
test("#getCorrectEventName prefixes javascript events when required",function(){g.equal(e(h,"animationstart"),"webkitAnimationStart","added prefix");g.equal(e(h,"animationend"),"webkitAnimationEnd","added prefix");g.equal(e(h,"animationiteration"),"webkitAnimationIteration","added prefix");g.equal(e(h,"transitionend"),"webkitTransitionEnd","added prefix")});}).call(this);//# sourceMappingURL=mdc-animation_test.js.map

