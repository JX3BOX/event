(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ebe432"],{"0a6d":function(t,i,e){},"0d76":function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));var s=e("41cb");function a(t){return Object(s["a"])({mute:!0}).get("/api/cms/topic",{params:{type:t,all:1,status:1}})}},"0ed6":function(t,i,e){},"13d5":function(t,i,e){"use strict";var s=e("23e7"),a=e("d58f").left,n=e("a640"),o=e("2d00"),r=e("605d"),c=!r&&o>79&&o<83,l=c||!n("reduce");s({target:"Array",proto:!0,forced:l},{reduce:function(t){var i=arguments.length;return a(this,t,i,i>1?arguments[1]:void 0)}})},"51eb":function(t,i,e){"use strict";var s=e("825a"),a=e("485a"),n=TypeError;t.exports=function(t){if(s(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw new n("Incorrect hint");return a(this,t)}},5530:function(t,i,e){"use strict";e.d(i,"a",(function(){return n}));e("b64b"),e("a4d3"),e("4de4"),e("d3b7"),e("e439"),e("14d9"),e("159b"),e("dbb4");var s=e("ade3");function a(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,s)}return e}function n(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?a(Object(e),!0).forEach((function(i){Object(s["a"])(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}},"759a":function(t,i,e){"use strict";e.r(i);e("99af");var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"p-event-blindbox"},[i("el-image",{staticClass:"m-bg",attrs:{src:"".concat(t.__imgRoot,"bg.jpg"),fit:"cover"}}),i("div",{staticClass:"p-event-content"},[i("div",{staticClass:"m-content"},[i("div",{staticClass:"m-left"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:"".concat(t.__imgRoot,"logo.svg"),alt:"魔盒盲盒"}}),i("el-tooltip",{attrs:{effect:"light",placement:"right-start"}},[i("img",{staticClass:"u-info",attrs:{src:"".concat(t.__imgRoot,"desc.png"),alt:"活动说明"}}),i("div",{staticClass:"m-blindbox-info",attrs:{slot:"content"},slot:"content"},[i("h2",[t._v("活动说明：")]),i("span",[t._v("1.点击盲盒或者右侧按钮可以打开盲盒，每次消耗一定数量的银铛；")]),i("span",[t._v("2.虚拟奖品奖励将实时到账，请注意查收站内信息；")]),i("span",[t._v("3.实体奖品需要填写收件信息，并在中奖后7个工作日内发货，请耐心等待；")]),i("span",[t._v("4.本活动最终解释权归魔盒团队所有。")])])])],1),i("div",{staticClass:"m-box",class:{active:t.allActive}},[t._l(t.boxList,(function(e,s){return i("div",{key:s,class:["u-box","",{active:e===t.active}],on:{click:function(i){return t.change(e)}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.showBox(s),expression:"showBox(index)"}],key:t.replay+"box"+s,class:"u-img u-img-".concat(s+1),attrs:{src:"".concat(t.__imgRoot,"box.svg"),alt:"奖品"}})])})),t.isLogin?t._e():i("div",{staticClass:"m-mark",on:{click:t.toLogin}}),i("div",{staticClass:"u-mark",class:{active:t.mark||!t.activeList.length}})],2)]),i("div",{staticClass:"m-right"},[i("div",{staticClass:"m-point"},[t._v(t._s(t.points))]),i("div",{staticClass:"m-prize box"},[i("div",{staticClass:"m-title"},[i("img",{staticClass:"u-prize",attrs:{src:"".concat(t.__imgRoot,"prize.png"),alt:"奖品一览"}})]),i("div",{staticClass:"m-scroll"},[i("div",{ref:"scroll",staticClass:"m-scroll-box"},[t._l(t.prizeList,(function(e,s){return i("a",{key:s,staticClass:"m-item",attrs:{href:t.aLink(e),target:"_blank","data-index":s}},[i("img",{attrs:{src:e.img}})])})),t._l(t.prizeList,(function(e,s){return i("a",{key:"v"+s,staticClass:"m-item",attrs:{href:t.aLink(e),target:"_blank","data-index":s}},[i("img",{attrs:{src:e.img}})])}))],2)])]),i("div",{staticClass:"m-lottery"},[t.isLogin?t._e():i("div",{staticClass:"m-mark",on:{click:t.toLogin}}),i("img",{staticClass:"u-img refresh",attrs:{src:"".concat(t.__imgRoot,"refresh.svg"),alt:"刷新盲盒"},on:{click:t.refreshBox}}),i("div",{staticClass:"m-random u-img",class:{disabled:!t.activeList.length||t.points<t.draw[1]},on:{click:t.openBox}},[i("span",{staticClass:"u-price"},[t._v(" x "+t._s(t.draw[1]))])]),i("div",{staticClass:"m-open u-img",class:{disabled:!t.activeList.length||t.points<t.draw[10]},on:{click:function(i){return t.openBox("all")}}},[i("span",{staticClass:"u-price u-discount"},[t._v(" x "+t._s(t.draw[10]))]),i("span",{staticClass:"u-price"},[t._v(" x "+t._s(10*t.draw[1]))])]),i("div",{staticClass:"m-history box u-img",class:t.history?"history":"close"},[i("div",{staticClass:"m-title"},[i("img",{staticClass:"u-history",attrs:{src:"".concat(t.__imgRoot,"history.png"),alt:"开盒记录"},on:{click:t.openHistory}}),i("img",{staticClass:"u-close",attrs:{src:"".concat(t.__imgRoot,"close.png"),width:"42px",alt:"关闭"},on:{click:t.closeHistory}})]),t.isLogin?t._e():i("div",{staticClass:"m-mark",on:{click:t.toLogin}}),i("History",{attrs:{id:t.ID,show:t.history},on:{update:t.showPrizes}})],1)])])])]),i("div",{staticClass:"m-goods",class:{active:t.hasPrize}},[i("div",{staticClass:"m-item"},[t.myPrizes.length?t._l(t.myPrizes,(function(e,s){return i("div",{key:s,staticClass:"u-item box"},["vip_asset"==e.prize_type?[i("img",{staticClass:"u-img",attrs:{src:"".concat(t.__imgRoot,"points.png")}}),i("span",[t._v(t._s(e.vip_asset_once_give+t.asset[e.vip_asset_type]))])]:[i("img",{staticClass:"u-img",attrs:{src:e.goods.goods_images[0]}}),i("span",[t._v(t._s(e.goods.title))])]],2)})):t._e(),t.history||t.myPrizes.length?t._e():i("div",{staticClass:"u-item box"},[i("img",{staticClass:"u-img",attrs:{src:"".concat(t.__imgRoot,"thanks.png")}}),i("span",[t._v("感谢参与")])])],2),i("img",{staticClass:"u-get",attrs:{src:"".concat(t.__imgRoot).concat(t.history?"ok":"get",".png"),alt:"拿下"},on:{click:t.closePrize}})])],1)},a=[],n=e("ade3"),o=e("5530"),r=(e("d81d"),e("cb29"),e("d3b7"),e("159b"),e("14d9"),e("13d5"),e("caad"),e("2532"),e("4de4"),e("c9d2")),c=e("0d76"),l=e("41cb");function u(t){return Object(l["d"])().get("/api/lucky-draw/my/history",{params:t})}function d(t){return Object(l["d"])().get("/api/lucky-draw/my/history/".concat(t,"/details"))}function f(t){return Object(l["d"])().get("/api/lucky-draw/public/details",{params:{id:t}})}function p(t,i){return Object(l["d"])().post("/api/lucky-draw/public/item/".concat(t,"/try-my-lucky?batch=").concat(i))}var h=e("2ef0"),v=function(){var t=this,i=t._self._c;return i("div",{staticClass:"m-history-content"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-table-box",attrs:{data:t.list}},[i("el-table-column",{attrs:{prop:"created_at",label:"抽奖时间"}}),i("el-table-column",{attrs:{prop:"chance_count",label:"抽奖次数",width:"80px"}}),i("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:2==e.row.status?"success":"info"}},[t._v(" "+t._s(2==e.row.status?"中奖":"未中奖")+" ")])]}}])}),i("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[2==e.row.status?i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.look(e.row.id)}}},[t._v(" 查看详情 ")]):t._e()]}}])})],1),i("el-pagination",{staticClass:"m-archive-pages",attrs:{background:"",layout:"prev, pager, next","hide-on-single-page":!0,"page-size":t.pageSize,total:t.total,"current-page":t.index},on:{"update:currentPage":function(i){t.index=i},"update:current-page":function(i){t.index=i},"current-change":t.change}})],1)},g=[],m={name:"History",inject:["__imgRoot"],props:["id","show"],data:function(){return{list:[],index:0,pageSize:7,total:0,loading:!1}},watch:{show:{immediate:!0,handler:function(t){t&&this.load(this.id)}}},methods:{load:function(t){var i=this;this.loading=!0;var e={luckyDrawId:t,pageSize:this.pageSize,index:this.index};u(e).then((function(t){i.list=t.data.data.list,i.total=t.data.data.page.total})).finally((function(){i.loading=!1}))},look:function(t){this.$emit("update",t)},change:function(t){this.index=t,this.load(this.id)}}},b=m,y=(e("e79d"),e("2877")),_=Object(y["a"])(b,v,g,!1,null,null,null),w=_.exports,x=e("65c2"),k=0,C="blindbox",O={name:"Index",inject:["__imgRoot"],data:function(){return{raw:{},ID:0,draw:{},prizeList:[],points:0,index:0,active:"",allActive:!1,boxList:new Array(10).fill(1).map((function(t,i){return i+1})),activeList:[],replay:0,historyList:[],status:{0:"全部",1:"抽奖中",2:"中奖",3:"未中奖"},asset:{boxcoin:"盒币（重制）",boxcoin_origin:"盒币（缘起）",point:"积分"},mark:!1,history:!1,close:!1,hasPrize:!1,myPrizes:[],scrollInterval:null}},components:{History:w},computed:{data:function(){var t={};return this.raw.forEach((function(i){t[i.subtype]||(t[i.subtype]=[]),t[i.subtype].push(i)})),t},isLogin:function(){return r["a"].isLogin()},optionLeft:function(){return{step:.8,direction:2,hoverStop:!0,openTouch:!1}}},watch:{isLogin:{immediate:!0,handler:function(t){t&&this.myPoints()}}},mounted:function(){this.init(),this.scrollInterval=setInterval(this.scroll,100)},methods:{init:function(){var t=this;Object(c["a"])(C).then((function(i){t.raw=i.data.data,t.ID=~~t.data.ID[0].title,t.draw=t.data.draw.reduce((function(t,i){return Object(o["a"])(Object(o["a"])({},t),{},Object(n["a"])({},i.title,i.desc))}),{}),t.ID&&f(t.ID).then((function(i){var e=i.data.data,s={point:"".concat(t.__imgRoot,"points.png"),boxcoin:"".concat(t.__imgRoot,"boxcoin.png")};t.prizeList=e.prize.map((function(t){return"mall_goods"!=t.prize_type&&s[t.vip_asset_type]?{img:s[t.vip_asset_type]}:{id:t.mall_goods.id,img:t.mall_goods.goods_images[0]}})),t.refreshBox()}))}))},toLogin:function(){this.$confirm("参与抽奖必须登录, 是否登录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r["a"].toLogin()}))},showBox:function(t){return this.activeList.includes(t+1)},aLink:function(t){var i=t.id;return i?x["__Root"]+"vip/mall/"+i:""},myPoints:function(){var t=this;r["a"].getAsset().then((function(i){console.log(i),t.points=(null===i||void 0===i?void 0:i.points)||0}))},scroll:function(){for(var t=0,i=this.$refs.scroll.childElementCount,e=0;e<i;e++)t+=this.$refs.scroll.children[e].offsetWidth;var s=t>>1;k<1-s&&(k=0),k-=2,this.$refs.scroll.style.transform="translateX("+k+"px)"},refreshBox:function(){this.allActive=!1,this.activeList=Object(h["cloneDeep"])(this.boxList),this.replay++},openBox:Object(h["debounce"])((function(t){var i=this;if("all"===t)this.allActive=!0,setTimeout((function(){i.activeList=[],i.hasPrize=!0,i.allActive=!1}),1600),this.hasLucky();else{var e=this.activeList[Math.floor(Math.random()*this.activeList.length)];this.change(e)}}),1e3),change:function(t){var i=this;this.active=t,this.mark=!0,setTimeout((function(){i.activeList=i.activeList.filter((function(i){return i!==t})),i.hasPrize=!0,i.mark=!1,i.active=""}),1600),this.hasLucky()},hasLucky:function(){var t=this,i=1;this.allActive&&(i=10),p(this.ID,i).then((function(i){var e,s=null===(e=i.data)||void 0===e?void 0:e.data.id;t.showPrizes(s,{show:!0}),t.myPoints()}))},showPrizes:function(t,i){var e=this;t&&(i||(this.hasPrize=!0),d(t).then((function(t){var i;e.myPrizes=(null===(i=t.data)||void 0===i?void 0:i.data.prizes)||[]})))},closePrize:function(){this.hasPrize=!1,this.myPrizes=[]},openHistory:function(){this.history=!0},closeHistory:function(){this.history=!1}},destroyed:function(){clearInterval(this.scrollInterval)}},L=O,j=(e("fea7"),Object(y["a"])(L,s,a,!1,null,null,null));i["default"]=j.exports},8172:function(t,i,e){"use strict";var s=e("e065"),a=e("57b9");s("toPrimitive"),a()},"81d5":function(t,i,e){"use strict";var s=e("7b0b"),a=e("23cb"),n=e("07fa");t.exports=function(t){var i=s(this),e=n(i),o=arguments.length,r=a(o>1?arguments[1]:void 0,e),c=o>2?arguments[2]:void 0,l=void 0===c?e:a(c,e);while(l>r)i[r++]=t;return i}},ade3:function(t,i,e){"use strict";e.d(i,"a",(function(){return o}));var s=e("53ca");e("8172"),e("efec"),e("a4d3"),e("e01a"),e("d3b7"),e("d9e2"),e("a9e3");function a(t,i){if("object"!==Object(s["a"])(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var a=e.call(t,i||"default");if("object"!==Object(s["a"])(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}function n(t){var i=a(t,"string");return"symbol"===Object(s["a"])(i)?i:String(i)}function o(t,i,e){return i=n(i),i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},cb29:function(t,i,e){"use strict";var s=e("23e7"),a=e("81d5"),n=e("44d2");s({target:"Array",proto:!0},{fill:a}),n("fill")},d58f:function(t,i,e){"use strict";var s=e("59ed"),a=e("7b0b"),n=e("44ad"),o=e("07fa"),r=TypeError,c=function(t){return function(i,e,c,l){s(e);var u=a(i),d=n(u),f=o(u),p=t?f-1:0,h=t?-1:1;if(c<2)while(1){if(p in d){l=d[p],p+=h;break}if(p+=h,t?p<0:f<=p)throw new r("Reduce of empty array with no initial value")}for(;t?p>=0:f>p;p+=h)p in d&&(l=e(l,d[p],p,u));return l}};t.exports={left:c(!1),right:c(!0)}},dbb4:function(t,i,e){"use strict";var s=e("23e7"),a=e("83ab"),n=e("56ef"),o=e("fc6a"),r=e("06cf"),c=e("8418");s({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var i,e,s=o(t),a=r.f,l=n(s),u={},d=0;while(l.length>d)e=a(s,i=l[d++]),void 0!==e&&c(u,i,e);return u}})},e439:function(t,i,e){"use strict";var s=e("23e7"),a=e("d039"),n=e("fc6a"),o=e("06cf").f,r=e("83ab"),c=!r||a((function(){o(1)}));s({target:"Object",stat:!0,forced:c,sham:!r},{getOwnPropertyDescriptor:function(t,i){return o(n(t),i)}})},e79d:function(t,i,e){"use strict";e("0ed6")},efec:function(t,i,e){"use strict";var s=e("1a2d"),a=e("cb2d"),n=e("51eb"),o=e("b622"),r=o("toPrimitive"),c=Date.prototype;s(c,r)||a(c,r,n)},fea7:function(t,i,e){"use strict";e("0a6d")}}]);
//# sourceMappingURL=chunk-57ebe432.bb80a402.js.map