(window.webpackJsonp=window.webpackJsonp||[]).push([[6,23,24,25],{241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){},291:function(t,e,n){"use strict";var i=n(241);n.n(i).a},292:function(t,e,n){"use strict";var i=n(242);n.n(i).a},293:function(t,e,n){"use strict";var i=n(243);n.n(i).a},344:function(t,e,n){"use strict";n.r(e);n(113),n(114),n(30);var i={props:{autoplay:Boolean},data:function(){return{timer:null,index:0,original:["기능별로 Vue.js를 설명하는 입문서입니다. Vue.js를 한 번도 다루어 본 적이 없는 분과 이미 Vue.js를 사용하고 있는 분 모두 즐겁게 책을 볼 수 있을 것입니다.","Vue.js는 직관적으로 사용할 수 있는 내용이 많습니다. 그래서 어떻게든 작동이 되니 자세한 이해 없이 코드를 작성하는 경우가 많습니다. 많이들 실수하는 코드를 살펴보며 어떠한 장점과 단점이 있는지 분석하는 내용도 담고 있습니다.","Vue.js는 직관적으로 사용할 수 있는 내용이 많습니다. 그래서 어떻게든 작동이 되니 자세한 이해 없이 코드를 작성하는 경우가 많습니다. 많이들 실수하는 코드를 살펴보며 어떠한 장점과 단점이 있는지 분석하는 내용도 담고 있습니다."],messages:[],text:""}},computed:{editor:{get:function(){return this.text.map(function(t){return t.text}).join("")},set:function(t){this.text=this.convText(t)}}},watch:{autoplay:function(t){clearTimeout(this.timer),t&&this.ticker()}},methods:{ticker:function(){var t=this;this.timer=setTimeout(function(){t.autoplay&&(t.index=t.index<t.messages.length-1?t.index+1:0,t.text=t.messages[t.index],t.ticker())},5e3)},convText:function(t){var e={},n=t.split("").map(function(t){return e[t]=e[t]?++e[t]:1,{id:"".concat(t,"_").concat(e[t]),text:t}});return Object.freeze(n)}},created:function(){var t=this;this.messages=this.original.map(function(e){return t.convText(e)}),this.text=this.messages[0],this.ticker()}},a=(n(293),n(1)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextAnime1"},[n("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.editor,expression:"editor",modifiers:{lazy:!0}}],staticStyle:{width:"80%",height:"40px"},domProps:{value:t.editor},on:{change:function(e){t.editor=e.target.value}}}),t._v(" "),n("transition-group",{staticClass:"title",attrs:{tag:"div"}},t._l(t.text,function(e){return n("span",{key:e.id,staticClass:"item",domProps:{textContent:t._s(e.text)}})}),0)],1)},[],!1,null,"fdda225a",null);s.options.__file="TextAnime3.vue";e.default=s.exports},346:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{text:"고양이도 할 수 있는 Vue.js"}}},a=(n(292),n(1)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextAnime1"},t._l(t.text,function(e,i){return n("span",{key:i,staticClass:"item",style:{animationDelay:100*i+"ms"},domProps:{textContent:t._s(e)}})}),0)},[],!1,null,"469f9852",null);s.options.__file="TextAnime2.vue";e.default=s.exports},347:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{text:"고양이도 할 수 있는 Vue.js"}}},a=(n(291),n(1)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextAnime1"},t._l(t.text,function(e,i){return n("span",{key:i,staticClass:"item delay-anime",domProps:{textContent:t._s(e)}})}),0)},[],!1,null,"3037d65f",null);s.options.__file="TextAnime1.vue";e.default=s.exports},511:function(t,e,n){"use strict";n.r(e);var i=n(347),a=n(346),s=n(344),o={components:{TextAnime1:i.default,TextAnime2:a.default,TextAnime3:s.default},data:function(){return{anime1:!0,anime2:!0,autoplay:!0}}},r=n(1),u=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"example"},[n("h3",[t._v("TextAnime1 "),n("button",{on:{click:function(e){t.anime1=!t.anime1}}},[t._v("변경하기")])]),t._v(" "),t.anime1?n("TextAnime1"):t._e(),t._v(" "),n("p",[t._v("SCSS로 애니메이션 지연 주기")]),t._v(" "),n("hr"),t._v(" "),n("h3",[t._v("TextAnime2 "),n("button",{on:{click:function(e){t.anime2=!t.anime2}}},[t._v("변경하기")])]),t._v(" "),t.anime2?n("TextAnime2"):t._e(),t._v(" "),n("p",[t._v("바인딩으로 애니메이션 지연 주기")]),t._v(" "),n("hr"),t._v(" "),n("h3",[t._v("TextAnime3")]),t._v(" "),n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.autoplay,expression:"autoplay"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.autoplay)?t._i(t.autoplay,null)>-1:t.autoplay},on:{change:function(e){var n=t.autoplay,i=e.target,a=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&(t.autoplay=n.concat([null])):s>-1&&(t.autoplay=n.slice(0,s).concat(n.slice(s+1)))}else t.autoplay=a}}}),t._v(" 5초마다 자동으로 문자 변경하기")])]),t._v(" "),n("TextAnime3",{attrs:{autoplay:t.autoplay}}),t._v(" "),t._m(0)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("transition-group")]),this._v("의 "),e("code",[this._v("v-move")]),this._v(" 를 사용했습니다.")])}],!1,null,null,null);u.options.__file="index.vue";e.default=u.exports}}]);