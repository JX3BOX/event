(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61f4e1d8"],{"759a":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"p-event-blindbox"},[s("el-image",{staticClass:"m-bg",attrs:{src:"".concat(t.__imgRoot,"bg.png"),fit:"cover"}}),s("div",{staticClass:"p-event-content"},[s("div",{staticClass:"m-content"},[s("div",{staticClass:"m-left"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"".concat(t.__imgRoot,"logo.png"),alt:"魔盒盲盒"}})]),s("div",{staticClass:"m-box"},[t._l(10,(function(i,o){return s("div",{key:i,class:["u-box",{active:o===t.active}],on:{click:function(s){return t.change(o)}}},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.showBox(o),expression:"showBox(index)"}],key:t.replay+"box"+o,staticClass:"u-img",attrs:{src:"".concat(t.__imgRoot,"box.png"),alt:"奖品"}})])})),s("div",{class:["u-mark",{active:t.active}]})],2)]),s("div",{staticClass:"m-right"},[s("div",{staticClass:"m-point"},[t._v("9999")]),s("div",{staticClass:"m-prize box"},[s("div",{staticClass:"m-title"},[s("img",{attrs:{src:"".concat(t.__imgRoot,"prize.png"),alt:"奖品一览"}})]),s("div",{staticClass:"m-item"})]),s("div",{staticClass:"m-lottery"},[s("img",{staticClass:"u-img refresh",attrs:{src:"".concat(t.__imgRoot,"refresh.png"),alt:"刷新盲盒"},on:{click:t.refreshBox}}),s("img",{staticClass:"u-img random",attrs:{src:"".concat(t.__imgRoot,"random.png"),alt:"随机开盒"}}),s("img",{staticClass:"u-img open",attrs:{src:"".concat(t.__imgRoot,"open.png"),alt:"十连开盒"}}),s("div",{staticClass:"m-history box u-img",class:{history:t.history,close:t.close}},[s("div",{staticClass:"m-title"},[s("img",{attrs:{src:"".concat(t.__imgRoot,"history.png"),alt:"开盒记录"},on:{click:t.openHistory}}),s("img",{staticClass:"u-close",attrs:{src:"".concat(t.__imgRoot,"close.png"),alt:"关闭"},on:{click:t.closeHistory}})]),s("div",{staticClass:"m-history-content"})])])])])]),s("div",{staticClass:"m-goods",class:{active:t.show_goods}},[s("div",{staticClass:"m-item"},t._l(10,(function(t){return s("div",{key:t,staticClass:"u-item box"})})),0),s("img",{staticClass:"u-get",attrs:{src:"".concat(t.__imgRoot,"get.png"),alt:"拿下"},on:{click:function(s){t.show_goods=!1}}})])],1)},c=[],a=(i("caad"),i("2532"),i("14d9"),{name:"Index",inject:["__imgRoot"],data:function(){return{history:!1,close:!1,open:!1,all:!1,show_goods:!1,active:"",replay:0,activeList:[]}},computed:{},methods:{showBox:function(t){return!this.activeList.includes(t)},refreshBox:function(){this.activeList=[],this.replay++},change:function(t){var s=this;this.active=~~t,setTimeout((function(){s.activeList.push(~~t),s.show_goods=!0,s.active=""}),1800)},openHistory:function(){this.history=!0,this.close=!1},closeHistory:function(){this.history=!1,this.close=!0}}}),e=a,n=(i("f270"),i("2877")),l=Object(n["a"])(e,o,c,!1,null,null,null);s["default"]=l.exports},d34e:function(t,s,i){},f270:function(t,s,i){"use strict";i("d34e")}}]);
//# sourceMappingURL=chunk-61f4e1d8.2a4e5151.js.map