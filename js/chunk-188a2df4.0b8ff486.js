(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-188a2df4"],{"0a08":function(t,e,i){},"0d76":function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"d",(function(){return u})),i.d(e,"a",(function(){return o})),i.d(e,"c",(function(){return l}));var n=i("c7eb"),a=i("1da1"),s=i("41cb");function c(t){return Object(s["a"])().get("/api/cms/topic",{params:{type:t,status:1,_no_cache:0}})}function o(t){return r.apply(this,arguments)}function r(){return r=Object(a["a"])(Object(n["a"])().mark((function t(e){var i;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])().get("/api/cms/breadcrumb/".concat(e));case 2:return i=t.sent,t.abrupt("return",i.data.data.html||"");case 4:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}function u(t){return Object(s["a"])().get("/api/cms/user/list/info",{params:t})}function l(t,e){return Object(s["a"])().get("/api/cms/topic/".concat(t,"/qrcode"),{params:e})}},1276:function(t,e,i){"use strict";var n=i("c65b"),a=i("e330"),s=i("d784"),c=i("825a"),o=i("7234"),r=i("1d80"),u=i("4840"),l=i("8aa5"),d=i("50c4"),m=i("577e"),h=i("dc4a"),v=i("14c3"),p=i("9f7f"),f=i("d039"),_=p.UNSUPPORTED_Y,g=4294967295,b=Math.min,C=a([].push),x=a("".slice),y=!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]})),w="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;s("split",(function(t,e,i){var a="0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:n(e,this,t,i)}:e;return[function(e,i){var s=r(this),c=o(e)?void 0:h(e,t);return c?n(c,e,s,i):n(a,m(s),e,i)},function(t,n){var s=c(this),o=m(t);if(!w){var r=i(a,s,o,n,a!==e);if(r.done)return r.value}var h=u(s,RegExp),p=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(_?"g":"y"),y=new h(_?"^(?:"+s.source+")":s,f),k=void 0===n?g:n>>>0;if(0===k)return[];if(0===o.length)return null===v(y,o)?[o]:[];var D=0,O=0,j=[];while(O<o.length){y.lastIndex=_?0:O;var T,q=v(y,_?x(o,O):o);if(null===q||(T=b(d(y.lastIndex+(_?O:0)),o.length))===D)O=l(o,O,p);else{if(C(j,x(o,D,O)),j.length===k)return j;for(var $=1;$<=q.length-1;$++)if(C(j,q[$]),j.length===k)return j;O=D=T}}return C(j,x(o,D)),j}]}),w||!y,_)},1774:function(t,e,i){"use strict";i.r(e);var n=function(){var t,e=this,i=e._self._c;return i("div",{staticClass:"p-midautumn-detail"},[i("div",{staticClass:"u-bg",style:e.bgStyle},[i("Nav",{attrs:{poemName:(null===(t=e.poemData)||void 0===t?void 0:t.title)||""},on:{navChange:e.back}}),i("div",{staticClass:"u-main-box"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[1==e.achieve_id?i("Introduce"):e._e(),2==e.achieve_id?i("Appreciate",{on:{poem:e.poem,back:e.back}}):e._e()],1)],1)],1)])},a=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-nav"},[e("div",{staticClass:"u-title"},[e("img",{attrs:{src:"".concat(t.__imgRoot,"menu.png")}})]),t._m(0),e("div",{staticClass:"u-nav-box"},[t._l(t.navs,(function(i){return e("div",{key:i.value,staticClass:"u-nav-item",class:{active:t.achieve_id==i.value},on:{click:function(e){return t.navChange(i.value)}}},[t._v(" "+t._s(i.text)+" ")])})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.poemName,expression:"poemName"}],staticClass:"u-select-poem"},[t._v("《"+t._s(t.poemName)+"》")])],2)])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-date"},[e("span",[t._v("2")]),e("span",[t._v("0")]),e("span",[t._v("2")]),e("span",[t._v("4")])])}],o=(i("14d9"),{props:{poemName:{type:String,default:""}},inject:["__imgRoot"],components:{},data:function(){return{achieve_id:1,navs:[{text:"活动介绍",value:1},{text:"诗词赏析",value:2}]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a)},immediate:!0}},created:function(){},mounted:function(){},methods:{navChange:function(t){this.$emit("navChange",t),this.$router.push({query:{a:t}})}}}),r=o,u=(i("4515"),i("2877")),l=Object(u["a"])(r,s,c,!1,null,null,null),d=l.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-introduce"},[e("div",{staticClass:"u-content",domProps:{innerHTML:t._s(t.data)}}),t._m(0)])},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-tips"},[t._v("介"),e("br"),t._v("绍")])}],v=i("cc9a"),p={components:{},data:function(){return{data:""}},created:function(){},mounted:function(){var t=this;Object(v["a"])(85620).then((function(e){t.data=e}))},methods:{}},f=p,_=(i("8475"),Object(u["a"])(f,m,h,!1,null,null,null)),g=_.exports,b=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"c-midAutumn-appreciate"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showPoem?t._e():e("div",[t.list.length||t.loading?t._e():e("div",{staticClass:"u-empty"},[t._v(" 作品收集中，侠士可按照活动介绍中参赛方式前往魔盒网站茶馆论坛处提交作品~ "),e("div",{staticClass:"u-item"},[e("a",{attrs:{href:"/community?category=诗词",target:"_blank"}},[t._v("快速前往 "),e("i",{staticClass:"el-icon-right"})])])]),e("div",{staticClass:"u-list"},t._l(t.list,(function(i,n){return e("div",{key:n,staticClass:"u-item",style:{"background-color":t.getColorStyle(n)},on:{click:function(e){return t.poem(i,n)}}},[e("div",{staticClass:"u-left"},[e("span",{staticClass:"u-text"},[t._v(t._s(i.author)+t._s("︽"+i.title+"︾"))])]),e("div",{staticClass:"u-right"},t._l(t.getText(i.desc,n),(function(i,n){return e("span",{key:n},[n<6?e("div",[n<5?e("span",{staticClass:"u-text"},[t._v(t._s(i.length>16?i.substring(0,16):i)+" "),i.length>16?e("span",{staticClass:"u-more"},[t._v("...")]):e("span",[t._v("。")])]):t._e(),5==n?e("span",{staticClass:"u-more"},[t._v("...")]):t._e()]):t._e()])})),0)])})),0)])]),t.showPoem?e("div",{staticClass:"m-poem-main"},[e("div",{staticClass:"u-back",on:{click:t.back}},[e("i",{staticClass:"el-icon-arrow-left"})]),e("div",{staticClass:"u-author-info"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.poemData.title))]),e("div",{staticClass:"u-author"},[t._v(t._s(t.poemData.author))])]),e("div",{staticClass:"u-content"},t._l(t.getText(t.poemData.desc),(function(i,n){return e("div",{key:n,staticClass:"u-desc-item",class:{warp:i.length>43}},[t._v(" "+t._s(i)+"。 ")])})),0),e("div",{staticClass:"u-footer"},[e("div",{staticClass:"u-left"}),e("div",{staticClass:"u-right"},[e("img",{staticClass:"u-qrcode",attrs:{src:t.qrcode,alt:""}}),t._m(0)])]),e("div",{staticClass:"u-title-tips"},[t._v(" "+t._s(t.tips)+" ")])]):t._e()],1)},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-tips"},[e("div",[t._v("微信扫一扫参与投票")]),e("div",[t._v("有机会赢取故宫中秋好礼！")])])}],x=(i("99af"),i("c740"),i("d3b7"),i("ac1f"),i("466d"),i("1276"),i("159b"),i("7bd7")),y=i("0d76"),w=i("65c2"),k="poems",D={components:{},props:{},data:function(){return{poemData:null,showPoem:!1,achieve_id:null,select_id:null,list:[],tips:"",loading:!1,qrcode:""}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a),t.i&&(this.select_id=t.i),this.load()},immediate:!0},select_id:{handler:function(t){var e=this;t&&Object(y["c"])(t,{page:"pages/midautumn/poem/poem",program_id:14}).then((function(t){e.qrcode="".concat(w["__cdn"]).concat(t.data.data)}))},immediate:!0}},methods:{vote:function(t,e){},load:function(){var t=this;this.list.length>0?this.init():(this.loading=!0,Object(y["a"])("poems_session").then((function(e){Object(y["b"])(k+"_"+e).then((function(e){var i=e.data.data;i.forEach((function(e){"article"==e.subtype&&t.list.push(e)})),t.loading=!1,t.init()}))})))},init:function(){var t=this,e=this.list;if(e.length>0&&this.select_id){this.showPoem=!0;var i=e.findIndex((function(e){return e.id==t.select_id}));this.poemData=e[i],this.getTipsText(this.poemData.title),this.$emit("poem",{item:this.poemData,i:this.select_id,c:i})}},getTipsText:function(t){var e=(null===t||void 0===t?void 0:t.match(/[\u4e00-\u9fa5]/g))||[];3==e.length?this.tips=e[1]+e[2]:e.length>3?this.tips=e[2]+e[3]:this.tips=e},getText:function(t,e){var i=t.split(/[。？！]/),n=[];return i.forEach((function(t,e){t&&n.push(t)})),n},getColorStyle:function(t){return x.color[t].color},poem:function(t,e){this.poemData=t,this.showPoem=!0,this.$emit("poem",{item:t,i:t.id,c:e}),this.getTipsText(t.title),this.$router.push({query:{a:this.achieve_id,i:t.id,c:e}})},back:function(){this.poemData=null,this.showPoem=!1,this.select_id=null,this.$emit("back"),this.$router.push({query:{a:this.achieve_id}})}}},O=D,j=(i("9928"),Object(u["a"])(O,b,C,!1,null,"c6ae0478",null)),T=j.exports,q={components:{Nav:d,Introduce:g,Appreciate:T},data:function(){return{achieve_id:1,bgStyle:null,poemData:null,article:[],introduce:[]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a,this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)})))},immediate:!0}},created:function(){},mounted:function(){},methods:{init:function(){},poem:function(t){this.poemData=t.item,this.bgStyle="background-color:".concat(x.color[t.c].color,";opacity: 0.95"),this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)}))},back:function(){this.poemData=null,this.bgStyle=null}}},$=q,N=(i("da5a"),Object(u["a"])($,n,a,!1,null,null,null));e["default"]=N.exports},"41d7":function(t,e,i){},4515:function(t,e,i){"use strict";i("0a08")},7485:function(t,e,i){},"7bd7":function(t){t.exports=JSON.parse('{"color":[{"name":"黑鸢","color":"#554236"},{"name":"桑染","color":"#64363c"},{"name":"苏芳","color":"#8e354a"},{"name":"海老茶","color":"#734338"},{"name":"莓","color":"#B5495B"},{"name":"深绯","color":"#86473F"},{"name":"樱鼠","color":"#B19693"},{"name":"长春","color":"#BF6766"},{"name":"桧皮","color":"#854836"},{"name":"紫染","color":"#967249"},{"name":"生壁","color":"#7D6C46"},{"name":"鸾茶","color":"#6C6024"},{"name":"苔","color":"#838A2D"},{"name":"松叶","color":"#42602D"},{"name":"千岁绿","color":"#36563C"},{"name":"青竹","color":"#00896C"},{"name":"铁户","color":"#255359"},{"name":"御户","color":"#0C4842"},{"name":"蓝黑茶","color":"#373C38"},{"name":"杜若","color":"#622954"}]}')},8475:function(t,e,i){"use strict";i("8e75")},"8e75":function(t,e,i){},9928:function(t,e,i){"use strict";i("7485")},c740:function(t,e,i){"use strict";var n=i("23e7"),a=i("b727").findIndex,s=i("44d2"),c="findIndex",o=!0;c in[]&&Array(1)[c]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(c)},da5a:function(t,e,i){"use strict";i("41d7")}}]);
//# sourceMappingURL=chunk-188a2df4.0b8ff486.js.map