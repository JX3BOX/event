(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-656d1023"],{3376:function(t,n,e){"use strict";e("6f55")},"6f55":function(t,n,e){},"78c8":function(t,n,e){"use strict";e("d37f")},9325:function(t,n,e){"use strict";var a=function(){var t=this,n=t._self._c;return n("router-link",{staticClass:"lantern",style:t.positionStyle,attrs:{to:t.to}},[n("img",{staticClass:"lantern__image",attrs:{src:t.lanternImage,alt:t.alt}}),n("img",{staticClass:"lantern__text",attrs:{src:t.textImage,alt:t.textAlt}})])},i=[],r=(e("a9e3"),{name:"Lantern",inject:["__imgRoot"],props:{to:{type:String,required:!0},top:{type:[Number,String],required:!0},left:{type:[Number,String],required:!0},lanternPath:{type:String,required:!0},textPath:{type:String,required:!0},alt:{type:String,default:"灯笼"},textAlt:{type:String,default:"文字"}},computed:{positionStyle:function(){return{top:"number"===typeof this.top?"".concat(this.top,"px"):this.top,left:"number"===typeof this.left?"".concat(this.left,"px"):this.left}},lanternImage:function(){return this.__imgRoot+this.lanternPath},textImage:function(){return this.__imgRoot+this.textPath}}}),s=r,l=(e("3376"),e("2877")),o=Object(l["a"])(s,a,i,!1,null,null,null);n["a"]=o.exports},d37f:function(t,n,e){},ee64:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"p-event-jx3story p-event-main"},[n("div",{staticClass:"m-video"},[n("video",{staticClass:"mp4",attrs:{playsinline:"",autoplay:"",muted:"",loop:"",poster:t.poster},domProps:{muted:!0}},[n("source",{attrs:{src:t.videoLink,type:"video/mp4"}})])]),n("div",{staticClass:"m-content"},[n("Lantern",{staticClass:"lantern lantern-1",attrs:{to:"/event",top:68,left:44,lanternPath:"/main/main__lantern1.png",textPath:"/main/main__texttrans_event.png",alt:"灯笼1",textAlt:"内容活动"}}),n("Lantern",{staticClass:"lantern lantern-2",attrs:{to:"/article",top:274,left:136,lanternPath:"/main/main__lantern2.png",textPath:"/main/main__texttrans_article.png",alt:"灯笼2",textAlt:"文字赏析"}}),n("Lantern",{staticClass:"lantern lantern-3",attrs:{to:"/vote",top:440,left:66,lanternPath:"/main/main__lantern3.png",textPath:"/main/main__texttrans_vote.png",alt:"灯笼3",textAlt:"投票参与"}}),n("div",{staticClass:"content__title"},[n("img",{staticClass:"content__title-image",attrs:{src:t.getImgUrl("/main/main__title.png"),alt:"标题"}})]),n("img",{staticClass:"content__scroll-image",attrs:{src:t.getImgUrl("/main/scroll.webp"),alt:"卷轴"}})],1)])},i=[],r=e("9325"),s=e("65c2"),l={name:"jx3storyMain",inject:["__imgRoot"],components:{Lantern:r["a"]},data:function(){return{}},computed:{videoLink:function(){return s["__cdn"]+"design/video/20231128-fengyue-bg.mp4"},poster:function(){return"".concat(this.__imgRoot,"main/main__bg.png")}},methods:{getImgUrl:function(t){return this.__imgRoot+t}}},o=l,c=(e("78c8"),e("2877")),m=Object(c["a"])(o,a,i,!1,null,null,null);n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-656d1023.c411679e.js.map