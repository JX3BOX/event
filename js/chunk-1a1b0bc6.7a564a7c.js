(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a1b0bc6"],{"0d76":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var i=n("c7eb"),a=n("1da1"),s=n("41cb");function c(t){return Object(s["a"])().get("/api/cms/topic",{params:{type:t,status:1,_no_cache:0}})}function o(t){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(Object(i["a"])().mark((function t(e){var n;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])().get("/api/cms/breadcrumb/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data.html||"");case 4:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}function u(t){return Object(s["a"])().get("/api/cms/user/list/info",{params:t})}},1276:function(t,e,n){"use strict";var i=n("c65b"),a=n("e330"),s=n("d784"),c=n("825a"),o=n("7234"),r=n("1d80"),u=n("4840"),l=n("8aa5"),d=n("50c4"),m=n("577e"),p=n("dc4a"),h=n("14c3"),v=n("9f7f"),f=n("d039"),_=v.UNSUPPORTED_Y,b=4294967295,g=Math.min,C=a([].push),y=a("".slice),x=!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),w="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;s("split",(function(t,e,n){var a="0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:i(e,this,t,n)}:e;return[function(e,n){var s=r(this),c=o(e)?void 0:p(e,t);return c?i(c,e,s,n):i(a,m(s),e,n)},function(t,i){var s=c(this),o=m(t);if(!w){var r=n(a,s,o,i,a!==e);if(r.done)return r.value}var p=u(s,RegExp),v=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(_?"g":"y"),x=new p(_?"^(?:"+s.source+")":s,f),k=void 0===i?b:i>>>0;if(0===k)return[];if(0===o.length)return null===h(x,o)?[o]:[];var D=0,T=0,O=[];while(T<o.length){x.lastIndex=_?0:T;var j,$=h(x,_?y(o,T):o);if(null===$||(j=g(d(x.lastIndex+(_?T:0)),o.length))===D)T=l(o,T,v);else{if(C(O,y(o,D,T)),O.length===k)return O;for(var S=1;S<=$.length-1;S++)if(C(O,$[S]),O.length===k)return O;T=D=j}}return C(O,y(o,D)),O}]}),w||!x,_)},1306:function(t,e,n){"use strict";n("464f")},"14b6":function(t,e,n){t.exports=n.p+"img/mdi_vote.29fbc97e.svg"},"44cf":function(t,e,n){"use strict";n.r(e);var i=function(){var t,e=this,n=e._self._c;return n("div",{staticClass:"p-midautumn-detail"},[n("div",{staticClass:"u-bg",style:e.bgStyle},[n("Nav",{attrs:{poemName:(null===(t=e.poemData)||void 0===t?void 0:t.title)||""},on:{navChange:e.back}}),n("div",{staticClass:"u-main-box"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[1==e.achieve_id?n("Introduce",{attrs:{data:e.introduce}}):e._e(),2==e.achieve_id?n("Appreciate",{attrs:{list:e.article},on:{poem:e.poem,back:e.back}}):e._e()],1)],1)],1)])},a=[],s=(n("14d9"),n("d3b7"),n("159b"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-nav"},[e("div",{staticClass:"u-title"},[e("img",{attrs:{src:"".concat(t.__imgRoot,"menu.png")}})]),t._m(0),e("div",{staticClass:"u-nav-box"},[t._l(t.navs,(function(n){return e("div",{key:n.value,staticClass:"u-nav-item",class:{active:t.achieve_id==n.value},on:{click:function(e){return t.navChange(n.value)}}},[t._v(" "+t._s(n.text)+" ")])})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.poemName,expression:"poemName"}],staticClass:"u-select-poem"},[t._v("《"+t._s(t.poemName)+"》")])],2)])}),c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-date"},[e("span",[t._v("2")]),e("span",[t._v("0")]),e("span",[t._v("2")]),e("span",[t._v("4")])])}],o={props:{poemName:{type:String,default:""}},inject:["__imgRoot"],components:{},data:function(){return{achieve_id:1,navs:[{text:"活动介绍",value:1},{text:"诗词赏析",value:2}]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a)},immediate:!0}},created:function(){},mounted:function(){},methods:{navChange:function(t){this.$emit("navChange",t),this.$router.push({query:{a:t}})}}},r=o,u=(n("1306"),n("2877")),l=Object(u["a"])(r,s,c,!1,null,null,null),d=l.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-introduce"},[e("div",{staticClass:"u-content"},t._l(t.data,(function(n){return e("div",{key:n.id,domProps:{innerHTML:t._s(n.desc)}})})),0),t._m(0)])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-tips"},[t._v("介"),e("br"),t._v("绍")])}],h={props:{data:{type:Array,default:function(){return[]}}},components:{},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},v=h,f=(n("8a85"),Object(u["a"])(v,m,p,!1,null,null,null)),_=f.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-appreciate",style:{"padding-top":t.showPoem?"0":"161px"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showPoem?t._e():e("div",[e("div",{staticClass:"u-btn"},[e("span",{staticClass:"u-item active"},[t._v("投票")]),e("span",{staticClass:"u-item"},[t._v("参赛")])]),e("div",{staticClass:"u-list"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",style:{"background-color":t.getColorStyle(i)},on:{click:function(e){return t.poem(n,i)}}},[e("div",{staticClass:"u-left"},[t._v(" "+t._s(n.author)+t._s("︽"+n.title+"︾")+" ")]),e("div",{staticClass:"u-right"},t._l(t.getText(n.desc,i),(function(n,i){return e("span",{key:i},[i<6?e("div",[i<5?e("span",[t._v(t._s(n))]):t._e(),5==i?e("span",{staticClass:"u-more"},[t._v("......")]):t._e()]):t._e()])})),0),e("div",{staticClass:"u-number"},[t._v("20")])])})),0)])]),t.showPoem?e("div",{staticClass:"m-poem-main"},[e("div",{staticClass:"u-back",on:{click:t.back}},[e("i",{staticClass:"el-icon-arrow-left"})]),e("div",{staticClass:"u-content"},t._l(t.getText(t.poemData.desc),(function(n,i){return e("div",{key:i},[t._v(t._s(n))])})),0),e("div",{staticClass:"u-footer"},[e("div",{staticClass:"u-left"},[t._m(0),e("div",{staticClass:"u-title"},[t._v(t._s(t.poemData.author)+" "+t._s("《"+t.poemData.title+"》"))])]),t._m(1)]),e("div",{staticClass:"u-title-tips"},[t._v(" "+t._s(t.tips)+" ")])]):t._e()],1)},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-tips"},[t._v("————"),e("span",{staticClass:"u-circle"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-right"},[e("img",{attrs:{src:n("14b6")}}),t._v("20")])}],C=(n("ac1f"),n("466d"),n("1276"),n("7bd7")),y={components:{},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{poemData:null,showPoem:!1,achieve_id:null,selectIndex:null,tips:""}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a),t.i&&(this.selectIndex=t.i)},immediate:!0},list:{handler:function(t){if(t.length>0&&this.selectIndex){this.showPoem=!0;var e=t[this.selectIndex];this.poemData=e,this.getTipsText(e.title+"34eefdsf44"),this.$emit("poem",{item:e,i:this.selectIndex})}},immediate:!0}},created:function(){},mounted:function(){},methods:{getTipsText:function(t){var e=(null===t||void 0===t?void 0:t.match(/[\u4e00-\u9fa5]/g))||[];console.log(e,e.length),3==e.length?this.tips=e[1]+e[2]:e.length>3?this.tips=e[2]+e[3]:this.tips=e},getText:function(t,e){var n=t.split(/[。？！]/),i=[];return n.forEach((function(t,n){t&&i.push(t),e&&e>10&&i.push(t)})),i},getColorStyle:function(t){return C.color[t].color},poem:function(t,e){this.poemData=t,this.showPoem=!0,this.$emit("poem",{item:t,i:e}),this.getTipsText(t.title),this.$router.push({query:{a:this.achieve_id,i:e}})},back:function(){this.poemData=null,this.showPoem=!1,this.$emit("back"),this.$router.push({query:{a:this.achieve_id}})}}},x=y,w=(n("592f"),Object(u["a"])(x,b,g,!1,null,"30bd5204",null)),k=w.exports,D=n("0d76"),T="poems",O={components:{Nav:d,Introduce:_,Appreciate:k},data:function(){return{achieve_id:1,bgStyle:null,poemData:null,article:[],introduce:[]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a,this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)})))},immediate:!0}},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;Object(D["a"])("poems_session").then((function(e){Object(D["b"])(T+"_"+e).then((function(e){var n=e.data.data;n.forEach((function(e){"introduce"==e.subtype?t.introduce.push(e):"article"==e.subtype&&t.article.push(e)}));for(var i=0;i<19;i++)t.introduce.push(t.introduce[0]);for(var a=0;a<19;a++)t.article.push(t.article[0])}))}))},poem:function(t){this.poemData=t.item,this.bgStyle="background-color:".concat(C.color[t.i].color,";opacity: 0.95"),this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)}))},back:function(){this.poemData=null,this.bgStyle=null}}},j=O,$=(n("e946"),Object(u["a"])(j,i,a,!1,null,null,null));e["default"]=$.exports},"464f":function(t,e,n){},"592f":function(t,e,n){"use strict";n("f78b")},"650c":function(t,e,n){},"7bd7":function(t){t.exports=JSON.parse('{"color":[{"name":"黑鸢","color":"#554236"},{"name":"桑染","color":"#64363c"},{"name":"苏芳","color":"#8e354a"},{"name":"海老茶","color":"#734338"},{"name":"莓","color":"#B5495B"},{"name":"深绯","color":"#86473F"},{"name":"樱鼠","color":"#B19693"},{"name":"长春","color":"#BF6766"},{"name":"桧皮","color":"#854836"},{"name":"紫染","color":"#967249"},{"name":"生壁","color":"#7D6C46"},{"name":"鸾茶","color":"#6C6024"},{"name":"苔","color":"#838A2D"},{"name":"松叶","color":"#42602D"},{"name":"千岁绿","color":"#36563C"},{"name":"青竹","color":"#00896C"},{"name":"铁户","color":"#255359"},{"name":"御户","color":"#0C4842"},{"name":"蓝黑茶","color":"#373C38"},{"name":"杜若","color":"#622954"}]}')},8354:function(t,e,n){},"8a85":function(t,e,n){"use strict";n("8354")},e946:function(t,e,n){"use strict";n("650c")},f78b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1a1b0bc6.7a564a7c.js.map