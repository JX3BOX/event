(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd3331fa"],{"0a08":function(t,e,n){},"0d76":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var i=n("c7eb"),a=n("1da1"),s=n("41cb");function c(t){return Object(s["a"])().get("/api/cms/topic",{params:{type:t,status:1,_no_cache:0}})}function o(t){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(Object(i["a"])().mark((function t(e){var n;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])().get("/api/cms/breadcrumb/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data.html||"");case 4:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}function u(t){return Object(s["a"])().get("/api/cms/user/list/info",{params:t})}},1276:function(t,e,n){"use strict";var i=n("c65b"),a=n("e330"),s=n("d784"),c=n("825a"),o=n("7234"),r=n("1d80"),u=n("4840"),l=n("8aa5"),d=n("50c4"),m=n("577e"),h=n("dc4a"),v=n("14c3"),p=n("9f7f"),f=n("d039"),_=p.UNSUPPORTED_Y,b=4294967295,g=Math.min,C=a([].push),x=a("".slice),y=!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),k="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;s("split",(function(t,e,n){var a="0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e;return[function(e,n){var s=r(this),c=o(e)?void 0:h(e,t);return c?i(c,e,s,n):i(a,m(s),e,n)},function(t,i){var s=c(this),o=m(t);if(!k){var r=n(a,s,o,i,a!==e);if(r.done)return r.value}var h=u(s,RegExp),p=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(_?"g":"y"),y=new h(_?"^(?:"+s.source+")":s,f),w=void 0===i?b:i>>>0;if(0===w)return[];if(0===o.length)return null===v(y,o)?[o]:[];var D=0,O=0,T=[];while(O<o.length){y.lastIndex=_?0:O;var j,$=v(y,_?x(o,O):o);if(null===$||(j=g(d(y.lastIndex+(_?O:0)),o.length))===D)O=l(o,O,p);else{if(C(T,x(o,D,O)),T.length===w)return T;for(var S=1;S<=$.length-1;S++)if(C(T,$[S]),T.length===w)return T;O=D=j}}return C(T,x(o,D)),T}]}),k||!y,_)},"14b6":function(t,e,n){t.exports=n.p+"img/mdi_vote.29fbc97e.svg"},1774:function(t,e,n){"use strict";n.r(e);var i=function(){var t,e=this,n=e._self._c;return n("div",{staticClass:"p-midautumn-detail"},[n("div",{staticClass:"u-bg",style:e.bgStyle},[n("Nav",{attrs:{poemName:(null===(t=e.poemData)||void 0===t?void 0:t.title)||""},on:{navChange:e.back}}),n("div",{staticClass:"u-main-box"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[1==e.achieve_id?n("Introduce"):e._e(),2==e.achieve_id?n("Appreciate",{attrs:{list:e.article},on:{poem:e.poem,back:e.back}}):e._e()],1)],1)],1)])},a=[],s=(n("14d9"),n("d3b7"),n("159b"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-nav"},[e("div",{staticClass:"u-title"},[e("img",{attrs:{src:"".concat(t.__imgRoot,"menu.png")}})]),t._m(0),e("div",{staticClass:"u-nav-box"},[t._l(t.navs,(function(n){return e("div",{key:n.value,staticClass:"u-nav-item",class:{active:t.achieve_id==n.value},on:{click:function(e){return t.navChange(n.value)}}},[t._v(" "+t._s(n.text)+" ")])})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.poemName,expression:"poemName"}],staticClass:"u-select-poem"},[t._v("《"+t._s(t.poemName)+"》")])],2)])}),c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-date"},[e("span",[t._v("2")]),e("span",[t._v("0")]),e("span",[t._v("2")]),e("span",[t._v("4")])])}],o={props:{poemName:{type:String,default:""}},inject:["__imgRoot"],components:{},data:function(){return{achieve_id:1,navs:[{text:"活动介绍",value:1},{text:"诗词赏析",value:2}]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a)},immediate:!0}},created:function(){},mounted:function(){},methods:{navChange:function(t){this.$emit("navChange",t),this.$router.push({query:{a:t}})}}},r=o,u=(n("4515"),n("2877")),l=Object(u["a"])(r,s,c,!1,null,null,null),d=l.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-introduce"},[e("div",{staticClass:"u-content",domProps:{innerHTML:t._s(t.data)}}),t._m(0)])},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-tips"},[t._v("介"),e("br"),t._v("绍")])}],v=n("cc9a"),p={components:{},data:function(){return{data:""}},created:function(){},mounted:function(){var t=this;Object(v["a"])(85620).then((function(e){t.data=e}))},methods:{}},f=p,_=(n("8475"),Object(u["a"])(f,m,h,!1,null,null,null)),b=_.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-appreciate"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showPoem?t._e():e("div",[e("div",{staticClass:"u-btn"},[e("span",{staticClass:"u-item active"},[t._v("投票")]),e("a",{staticClass:"u-item",attrs:{href:"/community?category=诗词",target:"_blank"}},[t._v("参赛")])]),e("div",{staticClass:"u-list"},[t.list.length?t._e():e("div",{staticClass:"u-empty"},[t._v(" 作品收集中，侠士可按照活动介绍中参赛方式前往魔盒网站茶馆论坛处提交作品~ ")]),t._l(t.list,(function(i,a){return e("div",{key:a,staticClass:"u-item",style:{"background-color":t.getColorStyle(a)},on:{click:function(e){return t.poem(i,a)}}},[e("div",{staticClass:"u-left"},[e("span",{staticClass:"u-text"},[t._v(t._s(i.author)+t._s("︽"+i.title+"︾"))])]),e("div",{staticClass:"u-right"},t._l(t.getText(i.desc,a),(function(n,i){return e("span",{key:i},[i<6?e("div",[i<5?e("span",{staticClass:"u-text"},[t._v(t._s(n.length>16?n.substring(0,16):n)+" "),n.length>16?e("span",{staticClass:"u-more"},[t._v("...")]):e("span",[t._v("。")])]):t._e(),5==i?e("span",{staticClass:"u-more"},[t._v("...")]):t._e()]):t._e()])})),0),e("div",{staticClass:"u-vote",on:{click:function(e){return e.stopPropagation(),t.vote(i,a)}}},[e("el-tooltip",{attrs:{effect:"dark",content:"投票",placement:"top"}},[e("div",{staticClass:"u-number"},[e("img",{attrs:{src:n("14b6")}}),e("b",[t._v("20")])])])],1)])}))],2)])]),t.showPoem?e("div",{staticClass:"m-poem-main"},[e("div",{staticClass:"u-back",on:{click:t.back}},[e("i",{staticClass:"el-icon-arrow-left"})]),e("div",{staticClass:"u-author-info"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.poemData.title))]),e("div",{staticClass:"u-author"},[t._v(t._s(t.poemData.author))])]),e("div",{staticClass:"u-content"},t._l(t.getText(t.poemData.desc),(function(n,i){return e("div",{key:i,staticClass:"u-desc-item",class:{warp:n.length>43}},[t._v(" "+t._s(n)+"。 ")])})),0),t._m(0),e("div",{staticClass:"u-title-tips"},[t._v(" "+t._s(t.tips)+" ")])]):t._e()],1)},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-footer"},[e("div",{staticClass:"u-left"}),e("div",{staticClass:"u-right"},[e("img",{attrs:{src:n("14b6")}}),e("span",{staticClass:"u-right-text"},[t._v("投票")]),e("b",[t._v("20")])])])}],x=(n("ac1f"),n("466d"),n("1276"),n("7bd7")),y={components:{},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{poemData:null,showPoem:!1,achieve_id:null,selectIndex:null,tips:""}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a),t.i&&(this.selectIndex=t.i)},immediate:!0},list:{handler:function(t){if(t.length>0&&this.selectIndex){this.showPoem=!0;var e=t[this.selectIndex];this.poemData=e,this.getTipsText(e.title+"34eefdsf44"),this.$emit("poem",{item:e,i:this.selectIndex})}},immediate:!0}},created:function(){},mounted:function(){},methods:{vote:function(t,e){},getTipsText:function(t){var e=(null===t||void 0===t?void 0:t.match(/[\u4e00-\u9fa5]/g))||[];console.log(e,e.length),3==e.length?this.tips=e[1]+e[2]:e.length>3?this.tips=e[2]+e[3]:this.tips=e},getText:function(t,e){var n=t.split(/[。？！]/),i=[];return n.forEach((function(t,e){t&&i.push(t)})),i},getColorStyle:function(t){return x.color[t].color},poem:function(t,e){this.poemData=t,this.showPoem=!0,this.$emit("poem",{item:t,i:e}),this.getTipsText(t.title),this.$router.push({query:{a:this.achieve_id,i:e}})},back:function(){this.poemData=null,this.showPoem=!1,this.$emit("back"),this.$router.push({query:{a:this.achieve_id}})}}},k=y,w=(n("b358"),Object(u["a"])(k,g,C,!1,null,"688987d4",null)),D=w.exports,O=n("0d76"),T="poems",j={components:{Nav:d,Introduce:b,Appreciate:D},data:function(){return{achieve_id:1,bgStyle:null,poemData:null,article:[],introduce:[]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a,this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)})))},immediate:!0}},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;Object(O["a"])("poems_session").then((function(e){Object(O["b"])(T+"_"+e).then((function(e){var n=e.data.data;n.forEach((function(e){"introduce"==e.subtype?t.introduce.push(e):"article"==e.subtype&&t.article.push(e)}))}))}))},poem:function(t){this.poemData=t.item,this.bgStyle="background-color:".concat(x.color[t.i].color,";opacity: 0.95"),this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)}))},back:function(){this.poemData=null,this.bgStyle=null}}},$=j,S=(n("63f7"),Object(u["a"])($,i,a,!1,null,null,null));e["default"]=S.exports},"44bb":function(t,e,n){},4515:function(t,e,n){"use strict";n("0a08")},"63f7":function(t,e,n){"use strict";n("44bb")},"7bd7":function(t){t.exports=JSON.parse('{"color":[{"name":"黑鸢","color":"#554236"},{"name":"桑染","color":"#64363c"},{"name":"苏芳","color":"#8e354a"},{"name":"海老茶","color":"#734338"},{"name":"莓","color":"#B5495B"},{"name":"深绯","color":"#86473F"},{"name":"樱鼠","color":"#B19693"},{"name":"长春","color":"#BF6766"},{"name":"桧皮","color":"#854836"},{"name":"紫染","color":"#967249"},{"name":"生壁","color":"#7D6C46"},{"name":"鸾茶","color":"#6C6024"},{"name":"苔","color":"#838A2D"},{"name":"松叶","color":"#42602D"},{"name":"千岁绿","color":"#36563C"},{"name":"青竹","color":"#00896C"},{"name":"铁户","color":"#255359"},{"name":"御户","color":"#0C4842"},{"name":"蓝黑茶","color":"#373C38"},{"name":"杜若","color":"#622954"}]}')},8475:function(t,e,n){"use strict";n("8e75")},"8e75":function(t,e,n){},"96c1":function(t,e,n){},b358:function(t,e,n){"use strict";n("96c1")}}]);
//# sourceMappingURL=chunk-fd3331fa.79bab92c.js.map