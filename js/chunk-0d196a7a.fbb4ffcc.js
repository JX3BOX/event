(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d196a7a"],{"0a08":function(t,e,i){},1276:function(t,e,i){"use strict";var a=i("c65b"),n=i("e330"),s=i("d784"),o=i("825a"),c=i("7234"),l=i("1d80"),r=i("4840"),u=i("8aa5"),d=i("50c4"),m=i("577e"),v=i("dc4a"),h=i("14c3"),p=i("9f7f"),f=i("d039"),_=p.UNSUPPORTED_Y,g=4294967295,C=Math.min,b=n([].push),x=n("".slice),y=!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]})),k="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;s("split",(function(t,e,i){var n="0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:a(e,this,t,i)}:e;return[function(e,i){var s=l(this),o=c(e)?void 0:v(e,t);return o?a(o,e,s,i):a(n,m(s),e,i)},function(t,a){var s=o(this),c=m(t);if(!k){var l=i(n,s,c,a,n!==e);if(l.done)return l.value}var v=r(s,RegExp),p=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(_?"g":"y"),y=new v(_?"^(?:"+s.source+")":s,f),w=void 0===a?g:a>>>0;if(0===w)return[];if(0===c.length)return null===h(y,c)?[c]:[];var D=0,T=0,q=[];while(T<c.length){y.lastIndex=_?0:T;var $,N=h(y,_?x(c,T):c);if(null===N||($=C(d(y.lastIndex+(_?T:0)),c.length))===D)T=u(c,T,p);else{if(b(q,x(c,D,T)),q.length===w)return q;for(var S=1;S<=N.length-1;S++)if(b(q,N[S]),q.length===w)return q;T=D=$}}return b(q,x(c,D)),q}]}),k||!y,_)},1774:function(t,e,i){"use strict";i.r(e);var a=function(){var t,e=this,i=e._self._c;return i("div",{staticClass:"p-midautumn-detail"},[i("div",{staticClass:"u-bg",style:e.bgStyle},[i("Nav",{attrs:{poemName:(null===(t=e.poemData)||void 0===t?void 0:t.title)||""},on:{navChange:e.back}}),i("div",{staticClass:"u-main-box"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[1==e.achieve_id?i("Introduce"):e._e(),2==e.achieve_id?i("Appreciate",{on:{poem:e.poem,back:e.back}}):e._e()],1)],1)],1)])},n=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-nav"},[e("div",{staticClass:"u-title"},[e("img",{attrs:{src:"".concat(t.__imgRoot,"menu.png")}})]),t._m(0),e("div",{staticClass:"u-nav-box"},[t._l(t.navs,(function(i){return e("div",{key:i.value,staticClass:"u-nav-item",class:{active:t.achieve_id==i.value},on:{click:function(e){return t.navChange(i.value)}}},[t._v(" "+t._s(i.text)+" ")])})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.poemName,expression:"poemName"}],staticClass:"u-select-poem"},[t._v("《"+t._s(t.poemName)+"》")])],2)])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-date"},[e("span",[t._v("2")]),e("span",[t._v("0")]),e("span",[t._v("2")]),e("span",[t._v("4")])])}],c=(i("14d9"),{props:{poemName:{type:String,default:""}},inject:["__imgRoot"],components:{},data:function(){return{achieve_id:1,navs:[{text:"活动介绍",value:1},{text:"诗词赏析",value:2}]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a)},immediate:!0}},created:function(){},mounted:function(){},methods:{navChange:function(t){this.$emit("navChange",t),this.$router.push({query:{a:t}})}}}),l=c,r=(i("4515"),i("2877")),u=Object(r["a"])(l,s,o,!1,null,null,null),d=u.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-midAutumn-introduce"},[e("div",{staticClass:"u-content",domProps:{innerHTML:t._s(t.data)}}),t._m(0)])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-tips"},[t._v("介"),e("br"),t._v("绍")])}],h=i("cc9a"),p={components:{},data:function(){return{data:""}},created:function(){},mounted:function(){var t=this;Object(h["a"])(85620).then((function(e){t.data=e}))},methods:{}},f=p,_=(i("8475"),Object(r["a"])(f,m,v,!1,null,null,null)),g=_.exports,C=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"c-midAutumn-appreciate"},[t.showPoem?t._e():e("div",[t.list.length||t.loading?t._e():e("div",{staticClass:"u-empty"},[t._v(" 作品收集中，侠士可按照活动介绍中参赛方式前往魔盒网站茶馆论坛处提交作品~ "),t._m(0)]),e("div",{staticClass:"u-list"},t._l(t.list,(function(i,a){return e("div",{key:a,staticClass:"u-item",style:{"background-color":t.getColorStyle(a)},on:{click:function(e){return t.poem(i,a)}}},[e("div",{staticClass:"u-left"},[e("span",{staticClass:"u-text"},[t._v(t._s(i.author)+t._s("︽"+i.title+"︾"))])]),e("div",{staticClass:"u-right"},t._l(t.getText(i.content,a),(function(i,a){return e("span",{key:a},[a<6?e("div",[a<5?e("span",{staticClass:"u-text"},[t._v(t._s(i.length>16?i.substring(0,16):i)+" "),i.length>16?e("span",{staticClass:"u-more"},[t._v("...")]):e("span",[t._v("。")])]):t._e(),5==a?e("span",{staticClass:"u-more"},[t._v("...")]):t._e()]):t._e()])})),0)])})),0)]),e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showPoem?e("div",{staticClass:"m-poem-main"},[e("div",{staticClass:"u-back",on:{click:t.back}},[e("i",{staticClass:"el-icon-arrow-left"})]),e("div",{staticClass:"u-author-info"},[e("div",{staticClass:"u-title"},[t._v(t._s(t.poemData.title))]),e("div",{staticClass:"u-author"},[t._v(t._s(t.poemData.sub_title))])]),e("div",{staticClass:"u-content"},t._l(t.getText(t.poemData.content),(function(i,a){return e("div",{key:a,staticClass:"u-desc-item",class:{warp:i.length>43}},[t._v(" "+t._s(i)+"。 ")])})),0),e("div",{staticClass:"u-footer"},[e("div",{staticClass:"u-left"}),e("div",{staticClass:"u-right"},[e("img",{staticClass:"u-qrcode",attrs:{src:t.qrcode,alt:""}}),e("div",{staticClass:"u-tips"},[e("div",[t._v("微信扫一扫参与投票")]),e("div",[t._v("有机会赢取故宫中秋好礼！")])])])]),e("div",{staticClass:"u-title-tips"},[t._v(" "+t._s(t.tips)+" ")])]):t._e()])],1)},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-item"},[e("a",{attrs:{href:"/community?category=诗词",target:"_blank"}},[t._v("快速前往 "),e("i",{staticClass:"el-icon-right"})])])}],x=(i("99af"),i("c740"),i("d3b7"),i("ac1f"),i("466d"),i("1276"),i("159b"),i("7bd7")),y=i("41cb");function k(t){return Object(y["b"])().get("/api/next2/vote-program/program/public/latest",{params:t})}function w(t,e){return Object(y["a"])().get("/api/cms/vote/program/item/".concat(t,"/qrcode"),{params:e})}var D=i("65c2"),T={components:{},props:{},data:function(){return{poemData:null,showPoem:!1,achieve_id:null,select_id:null,list:[],tips:"",loading:!1,qrcode:""}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a),t.select&&(this.select_id=t.select),this.load()},immediate:!0},select_id:{handler:function(t){},immediate:!0}},methods:{load:function(){var t=this;this.loading=!0,k().then((function(e){t.list=e.data.data.vote_items,t.loading=!1,t.init()}))},init:function(){var t=this,e=this.list;if(e.length>0&&this.select_id){this.showPoem=!0;var i=e.findIndex((function(e){return e.id==t.select_id}));this.poemData=e[i],this.getTipsText(this.poemData.title),this.$emit("poem",{item:this.poemData,c:i}),w(e[i].id,{page:"pages/midautumn/poem/poem",program_id:e[i].program_id}).then((function(e){t.qrcode="".concat(D["__cdn"]).concat(e.data.data)}))}},getTipsText:function(t){var e=(null===t||void 0===t?void 0:t.match(/[\u4e00-\u9fa5]/g))||[];3==e.length?this.tips=e[1]+e[2]:e.length>3?this.tips=e[2]+e[3]:this.tips=t},getText:function(t,e){var i=t.split(/[。？！]/),a=[];return i.forEach((function(t,e){t&&a.push(t)})),a},getColorStyle:function(t){return x.color[t].color},poem:function(t,e){this.poemData=t,this.showPoem=!0,this.$emit("poem",{item:t,c:e}),this.getTipsText(t.title),this.$router.push({query:{a:this.achieve_id,select:t.id}})},back:function(){this.poemData=null,this.showPoem=!1,this.select_id=null,this.$emit("back"),this.$router.push({query:{a:this.achieve_id}})}}},q=T,$=(i("3ed5"),Object(r["a"])(q,C,b,!1,null,"7d525ae0",null)),N=$.exports,S={components:{Nav:d,Introduce:g,Appreciate:N},data:function(){return{achieve_id:1,bgStyle:null,poemData:null,article:[],introduce:[]}},watch:{"$route.query":{handler:function(t){t.a&&(this.achieve_id=t.a,this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)})))},immediate:!0}},created:function(){},mounted:function(){},methods:{init:function(){},poem:function(t){this.poemData=t.item,this.bgStyle="background-color:".concat(x.color[t.c].color,";opacity: 0.95"),this.$nextTick((function(){var t=document.querySelector(".u-bg");t&&(t.scrollTop=0)}))},back:function(){this.poemData=null,this.bgStyle=null}}},O=S,P=(i("da5a"),Object(r["a"])(O,a,n,!1,null,null,null));e["default"]=P.exports},"3ed5":function(t,e,i){"use strict";i("586f")},"41d7":function(t,e,i){},4515:function(t,e,i){"use strict";i("0a08")},"586f":function(t,e,i){},"7bd7":function(t){t.exports=JSON.parse('{"color":[{"name":"黑鸢","color":"#554236"},{"name":"桑染","color":"#64363c"},{"name":"苏芳","color":"#8e354a"},{"name":"海老茶","color":"#734338"},{"name":"莓","color":"#B5495B"},{"name":"深绯","color":"#86473F"},{"name":"樱鼠","color":"#B19693"},{"name":"长春","color":"#BF6766"},{"name":"桧皮","color":"#854836"},{"name":"紫染","color":"#967249"},{"name":"生壁","color":"#7D6C46"},{"name":"鸾茶","color":"#6C6024"},{"name":"苔","color":"#838A2D"},{"name":"松叶","color":"#42602D"},{"name":"千岁绿","color":"#36563C"},{"name":"青竹","color":"#00896C"},{"name":"铁户","color":"#255359"},{"name":"御户","color":"#0C4842"},{"name":"蓝黑茶","color":"#373C38"},{"name":"杜若","color":"#622954"}]}')},8475:function(t,e,i){"use strict";i("8e75")},"8e75":function(t,e,i){},c740:function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").findIndex,s=i("44d2"),o="findIndex",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},da5a:function(t,e,i){"use strict";i("41d7")}}]);
//# sourceMappingURL=chunk-0d196a7a.fbb4ffcc.js.map