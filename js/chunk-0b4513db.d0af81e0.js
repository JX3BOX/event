(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b4513db"],{"04d1":function(t,e,s){"use strict";var r=s("342f"),a=r.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"06f2":function(t,e,s){},4298:function(t,e,s){"use strict";s("06f2")},"4b2c":function(t,e,s){"use strict";s("8391")},"4e82":function(t,e,s){"use strict";var r=s("23e7"),a=s("e330"),n=s("59ed"),i=s("7b0b"),o=s("07fa"),c=s("083a"),u=s("577e"),l=s("d039"),d=s("addb"),h=s("a640"),f=s("04d1"),g=s("d998"),m=s("2d00"),p=s("512ce"),v=[],b=a(v.sort),w=a(v.push),k=l((function(){v.sort(void 0)})),y=l((function(){v.sort(null)})),_=h("sort"),C=!l((function(){if(m)return m<70;if(!(f&&f>3)){if(g)return!0;if(p)return p<603;var t,e,s,r,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:s=3;break;case 68:case 71:s=4;break;default:s=2}for(r=0;r<47;r++)v.push({k:e+r,v:s})}for(v.sort((function(t,e){return e.v-t.v})),r=0;r<v.length;r++)e=v[r].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),x=k||!y||!_||!C,A=function(t){return function(e,s){return void 0===s?-1:void 0===e?1:void 0!==t?+t(e,s)||0:u(e)>u(s)?1:-1}};r({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&n(t);var e=i(this);if(C)return void 0===t?b(e):b(e,t);var s,r,a=[],u=o(e);for(r=0;r<u;r++)r in e&&w(a,e[r]);d(a,A(t)),s=o(a),r=0;while(r<s)e[r]=a[r++];while(r<u)c(e,r++);return e}})},"512ce":function(t,e,s){"use strict";var r=s("342f"),a=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},"810b":function(t,e,s){"use strict";s.r(e);s("b0c0");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-event-content"},[e("div",{staticClass:"m-paper-box",style:{backgroundColor:t.showColor}},[e("img",{staticClass:"u-previous",attrs:{src:"".concat(t.__imgRoot,"previous.png")},on:{click:t.changeShow}}),e("span",{staticClass:"u-title"},[t._v("切换试卷")]),e("div",{staticClass:"m-list"},t._l(t.type,(function(s,r){return e("span",{key:r,class:["u-paper",{active:t.showId==r}],on:{click:function(e){return t.changeExam(r)}}},[t._v(" "+t._s(s.name)+" ")])})),0)]),t._l(t.paperList,(function(s,r){return e("Paper",{key:r,staticClass:"m-paper",attrs:{paper:s,showKey:t.showKey,showId:t.showId,showYear:t.showYear}})})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"m-change-paper",style:{backgroundColor:t.showColor}},[e("img",{staticClass:"u-close",attrs:{src:"".concat(t.__imgRoot,"close.svg")},on:{click:function(e){t.show=!1}}}),e("div",{staticClass:"m-title"},[t._v("往届考题")]),e("div",{staticClass:"m-content"},t._l(t.types,(function(s,r){return e("span",{key:r,staticClass:"u-year",style:{backgroundColor:t.showBackground,color:t.showFont},on:{click:function(e){return t.changeYear(r)}}},[t._v(t._s(r))])})),0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"m-mark"})],2)},a=[],n=s("5530"),i=(s("14d9"),s("b64b"),s("d3b7"),s("159b"),s("b09a")),o=(s("4de4"),function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-index",style:{backgroundColor:t.color}},[e("div",{staticClass:"m-header"},[e("img",{staticClass:"u-text u-logo",attrs:{src:t.__imgRoot+"logo-".concat(t.logoNumber,".svg"),alt:"魔盒"}}),e("img",{staticClass:"u-text u-text-1",attrs:{src:t.__imgRoot+"font-".concat(t.textNumber,".svg"),alt:"全力以赴"}}),"2022"!==t.year?e("img",{staticClass:"u-text u-year",attrs:{src:t.__imgRoot+"".concat(t.year,".png")}}):t._e(),e("img",{staticClass:"u-text u-text-2",style:{filter:t.filter},attrs:{src:t.__imgRoot+"text.png",alt:"2023剑三高考卷"}})]),e("div",{staticClass:"m-exam"},[e("div",{staticClass:"m-title"},[e("span",{style:{color:t.font,background:t.background}},[t._v(t._s(t.name))])]),e("div",{staticClass:"m-content"},[t._l(t.list,(function(s,r){return e("ExamCard",{key:s.id,attrs:{item:s.list,index:r+1,answer:s.answer,isSubmitted:t.isSubmitted,background:t.background,font:t.font,color:t.color,showId:t.showId},on:{changeVal:t.finalAnswer}})})),t.list.length?e("div",{staticClass:"m-exam-submit",class:{isSubmitted:t.isSubmitted},on:{click:t.submit}},[e("el-button",{staticClass:"u-btn",attrs:{disabled:t.isSubmitted}},[t._v("提交")])],1):t._e()],2)])])}),c=[],u=(s("7db0"),s("d81d"),s("4e82"),s("9616")),l=(s("99af"),function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"v-single-card"},[e("div",{staticClass:"m-single-question"},[e("div",{staticClass:"u-number",style:{background:t.color}},[e("div",{staticClass:"u-left"},[t.index?e("span",{staticClass:"u-num",style:{background:t.background}},[t._v(t._s(t.index))]):t._e(),t.index&&t.item_tags.length?t._l(t.item_tags,(function(s,r){return e("a",{key:r,staticClass:"u-tag",style:{background:t.background,color:t.font},attrs:{href:t.tagsLink(s),target:"_blank"}},[t._v(t._s(s))])})):t._e()],2),e("div",{staticClass:"u-right"},[e("a",{staticClass:"u-user",attrs:{href:t.authorLink(t.item.createUserId),target:"_blank"}},[e("span",{staticClass:"u-label",style:{background:t.background,color:t.font}},[t._v("出题人")]),t._v(t._s(t.item.createUser))]),e("a",{staticClass:"u-exam",attrs:{href:"".concat(t.exam_link).concat(t.item.id),target:"_blank"}},[e("span",{staticClass:"u-label",style:{background:t.background,color:t.font}},[t._v("试题编号")]),t._v(t._s(t.item.id))])])]),e("div",{staticClass:"u-cont"},[e("div",{staticClass:"u-title"},[e("span",{staticClass:"u-hint"},[t._v(" ["+t._s("checkbox"==t.item.type?"多选题":"单选题")+"] ")]),e("span",{staticClass:"m-html-title",domProps:{innerHTML:t._s(t.resolveImagePath(t.item.title))}})]),e("div",{staticClass:"u-option",class:"color-".concat(t.showId)},["checkbox"===t.item.type?[e("el-checkbox-group",{on:{change:function(e){return t.checkAnswers(t.item.id,t.checkbox)}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}},t._l(t.options,(function(s,r){return e("el-checkbox",{key:r,class:t.myWrongClass(r),attrs:{label:r,border:"",disabled:t.isSubmitted}},[e("div",{staticClass:"u-radio"},[e("span",{staticClass:"u-num"},[t._v(t._s(String.fromCharCode(65+r))+".")]),e("span",{staticClass:"m-option-content",domProps:{innerHTML:t._s(t.resolveImagePath(s))}})])])})),1)]:[e("el-radio-group",{on:{change:function(e){return t.checkAnswers(t.item.id,t.radio)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.options,(function(s,r){return e("el-radio",{key:r,class:t.myWrongClass(r),attrs:{label:r,border:"",disabled:t.isSubmitted}},[e("div",{staticClass:"u-radio"},[e("span",{staticClass:"u-num"},[t._v(t._s(String.fromCharCode(65+r))+".")]),e("span",{staticClass:"m-option-content",domProps:{innerHTML:t._s(t.resolveImagePath(s))}})])])})),1)]],2)])]),t.answer?e("div",{staticClass:"m-single-answer"},[e("div",{staticClass:"u-status",class:t.myAnswersClass(t.answer)},[t._v(" "+t._s(t.status)+" ")]),e("div",{staticClass:"u-answer"},[t._v(" 你的答案： "),t.answer.myAnswer?e("span",t._l(t.answer.myAnswer,(function(s){return e("b",{key:s},[t._v(t._s(t.letter(s)))])})),0):e("b",[t._v("-")])]),e("div",{staticClass:"u-answer"},[t._v(" 正确答案： "),t._l(t.answer.answerList,(function(s){return e("b",{key:s},[t._v(t._s(t.letter(s)))])}))],2),e("hr"),e("div",{staticClass:"m-analysis"},[e("span",{staticClass:"u-label"},[t._v("解析：")]),t.answer.whyami?e("span",{domProps:{innerHTML:t._s(t.answer.whyami)}}):e("div",[t._v("暂无解析")])])]):t._e()]):t._e()}),d=[],h=s("ade3"),f=(s("caad"),s("fb6a"),s("2532"),s("85e4")),g=s("65c2"),m={name:"Card",props:["item","answer","index","isSubmitted","background","color","font","showId"],data:function(){return{checkbox:[],radio:{}}},computed:{options:function(){return this.item.options},status:function(){return this.answer.myAnswer?this.answer.myAnswerIsRight?"回答正确":"回答错误":"未作答"},exam_link:function(){return g["__Root"]+"exam/question/"},item_tags:function(){var t=this,e=this.item.tags.map((function(e){if(-1!==t.tags.indexOf(e))return e})).filter(Boolean);return e.length||(e[0]=this.item.tags[0]),e.slice(0,1)},tags:function(){return i["b"].slice(5,i["b"].length)}},watch:{item:{deep:!0,immediate:!0,handler:function(){var t=this;this.$nextTick((function(){t.initImgViewer()}))}}},methods:{authorLink:f["authorLink"],resolveImagePath:f["resolveImagePath"],checkAnswers:function(t,e){var s=Array.isArray(e)?e:[e];this.$emit("changeVal",Object(h["a"])({},t,s))},myAnswersClass:function(t){var e=t.myAnswer,s=t.myAnswerIsRight;return e?s?"isCorrect":"isWrong":"noAnswer"},myWrongClass:function(t){if(!this.answer)return"";if(this.answer.myAnswerIsRight)return"";var e=this.answer.answerList,s=this.answer.myAnswer||[];return e.includes(t)?"isCorrect":s.includes(t)?"isWrong":void 0},letter:function(t){return String.fromCharCode(65+t)},tagsLink:function(t){return"/exam/?tag=".concat(t)},initImgViewer:function(){var t=this,e=document.querySelectorAll(".m-html-title img");e.forEach((function(e){e.onclick=function(){t.$hevueImgPreview({url:e.src,controlBar:!1,clickMaskCLose:!0})}}))}}},p=m,v=(s("4298"),s("2877")),b=Object(v["a"])(p,l,d,!1,null,null,null),w=b.exports,k=s("41cb");function y(t){return Object(k["b"])({proxy:!0}).get("/api/question/user-exam-paper/"+t+"?details")}function _(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(k["b"])({proxy:!0}).post("/api/question/user-exam-paper/".concat(t,"/i-finish-all").concat(s?"?force":""),e)}var C=s("c9d2"),x={name:"Paper",inject:["__imgRoot"],props:["paper","showKey","showId","showYear"],components:{ExamCard:w},data:function(){return{data:{},list:[],answer:"",score:"",userAnswers:{},isSubmitted:!1,loading:!1}},computed:{id:function(){return this.paper.key},name:function(){return this.paper.name},color:function(){return this.paper.color},font:function(){return this.paper.font},background:function(){return this.paper.background},filter:function(){return this.paper.filter},filterYear:function(){return this.paper.filterYear},logoNumber:function(){var t=this.showId;return 6==t&&(t=5),t},textNumber:function(){var t=this.showId;return 5==t&&(t=3),6==t&&(t=7),t},year:function(){return this.$route.params.year||this.showYear}},watch:{showKey:function(){this.data={},this.isSubmitted=!1,this.userAnswers={},this.list=[],this.loadData()}},methods:{loadData:function(){var t=this,e=this.id;this.loading=!0,this.showKey==e&&y(e).then((function(s){var r,a,n=s.data;Object(u["b"])("paper",e),n.tags=JSON.parse(n.tags),n.questionDetailList=(null===n||void 0===n||null===(r=n.questionDetailList)||void 0===r?void 0:r.map((function(t){return t.options=JSON.parse(t.options),t.tags=JSON.parse(t.tags),t})))||[],t.data=n,t.list=(null===n||void 0===n||null===(a=n.questionDetailList)||void 0===a?void 0:a.map((function(t){return{list:t}})))||[]})).finally((function(){t.loading=!1}))},finalAnswer:function(t){this.userAnswers=Object(n["a"])(Object(n["a"])({},this.userAnswers),t)},submit:function(){var t=this;if(!C["a"].isLogin())return this.$message.error("请先登录");if(Object.keys(this.userAnswers).length){var e=this.data.questionDetailList,s=this.userAnswers,r={},a=function(t){var a=e.find((function(e){return e.id===~~t}));r[t]=s[t].map((function(t){return a.options[t]}))};for(var i in s)a(i);var o=[];for(var c in this.userAnswers)o.push({id:[c],myAnswer:this.userAnswers[c].sort()});_(this.id,r,!0).then((function(e){if(e.data.score){document.documentElement.scrollTop=0;var s=e.data.paper;t.list=t.list.map((function(t){var e=s.questionDetailList.find((function(e){return e.id===t.list.id}));e.answerList=e.answerList.sort();var r=o.find((function(t){return t.id==e.id}));return t.answer=Object(n["a"])(Object(n["a"])({},e),r),t})),t.score=String(e.data.score.score),t.isSubmitted=!0}}))}else this.$alert("不能交白卷哦~","提交失败",{type:"error"})}},mounted:function(){this.loadData()}},A=x,I=(s("f4e4"),Object(v["a"])(A,o,c,!1,null,null,null)),E=I.exports,P={name:"Index",inject:["__imgRoot"],components:{Paper:E},data:function(){return{types:Object(n["a"])({},i["a"]),showId:1,show:!1,showYear:"2024"}},watch:{pathId:{immediate:!0,handler:function(t){var e=this;t&&Object.keys(this.type).forEach((function(s){e.type[s].key==t&&(e.showId=s)}))}},year:{immediate:!0,handler:function(t){this.types[t]||this.$router.push({name:"index",params:{year:"2022"}})}}},computed:{showKey:function(){return this.type[this.showId].key},showColor:function(){return this.type[this.showId].color},showBackground:function(){return this.type[this.showId].background},showFont:function(){return this.type[this.showId].font},pathId:function(){return this.$route.query.paper},year:function(){return this.$route.params.year||this.showYear},type:function(){return this.types[this.year]||[]},paperList:function(){var t=~~this.showId,e=t-1==0?Object.keys(this.type).length:t-1,s=t+1>7?1:t+1;return{1:this.type[e],2:this.type[t],3:this.type[s]}}},methods:{changeExam:function(t){this.showId=t,this.$router.push({name:"index",params:{year:this.year},query:{paper:this.type[t].key}}),window.scrollTo(0,0)},changeShow:function(){this.show=!this.show},changeYear:function(t){this.showYear=t,this.show=!1,this.showId=1,this.$router.push({name:"index",params:{year:t}}),window.scrollTo(0,0)}}},Y=P,S=(s("4b2c"),Object(v["a"])(Y,r,a,!1,null,null,null));e["default"]=S.exports},8391:function(t,e,s){},a964:function(t,e,s){},b09a:function(t){t.exports=JSON.parse('{"a":{"2022":{"1":{"id":1,"key":"75","name":"理科卷","color":"#555090","font":"#555090","background":"#FFE353","filter":"invert(86%) sepia(100%) saturate(472%) hue-rotate(325deg) brightness(104%) contrast(101%)","filterYear":"invert(33%) sepia(7%) saturate(4418%) hue-rotate(205deg) brightness(90%) contrast(82%)"},"2":{"id":2,"key":"74","name":"文科卷","color":"#264E70","font":"#264E70","background":"#BBD4CE","filter":"invert(91%) sepia(17%) saturate(205%) hue-rotate(115deg) brightness(91%) contrast(85%)","filterYear":"invert(26%) sepia(90%) saturate(322%) hue-rotate(164deg) brightness(88%) contrast(97%)"},"3":{"id":3,"key":"70","name":"PVE卷","color":"#AE7897","font":"#fff","background":"#F9C397","filter":"invert(90%) sepia(8%) saturate(6615%) hue-rotate(305deg) brightness(123%) contrast(95%)","filterYear":"invert(58%) sepia(11%) saturate(614%) hue-rotate(314deg) brightness(105%) contrast(102%)"},"4":{"id":4,"key":"68","name":"PVP卷","color":"#27104E","font":"#fff","background":"#AE7897","filter":"invert(54%) sepia(15%) saturate(807%) hue-rotate(273deg) brightness(94%) contrast(88%)","filterYear":"invert(7%) sepia(91%) saturate(4615%) hue-rotate(263deg) brightness(62%) contrast(96%)"},"5":{"id":5,"key":"73","name":"缘起文科","color":"#264E70","font":"#fff","background":"#F9B4AB","filter":"invert(70%) sepia(6%) saturate(2068%) hue-rotate(317deg) brightness(111%) contrast(95%)","filterYear":"invert(25%) sepia(11%) saturate(3269%) hue-rotate(166deg) brightness(92%) contrast(83%)"},"6":{"id":6,"key":"72","name":"缘起理科","color":"#6B2A27","font":"#fff","background":"#F9B4AB","filter":"invert(70%) sepia(6%) saturate(2068%) hue-rotate(317deg) brightness(111%) contrast(95%)","filterYear":"invert(16%) sepia(17%) saturate(6239%) hue-rotate(337deg) brightness(87%) contrast(83%)"},"7":{"id":7,"key":"90","name":"五仙年卷","color":"#543C52","font":"#fff","background":"#F55951","filter":"invert(88%) sepia(15%) saturate(322%) hue-rotate(324deg) brightness(100%) contrast(87%)","filterYear":"invert(25%) sepia(14%) saturate(996%) hue-rotate(255deg) brightness(93%) contrast(92%)"}},"2023":{"1":{"id":1,"key":"115","name":"理综卷","color":"#555090","font":"#555090","background":"#FFE353","filter":"invert(86%) sepia(100%) saturate(472%) hue-rotate(325deg) brightness(104%) contrast(101%)","filterYear":"invert(33%) sepia(7%) saturate(4418%) hue-rotate(205deg) brightness(90%) contrast(82%)"},"2":{"id":2,"key":"113","name":"文综卷","color":"#264E70","font":"#264E70","background":"#BBD4CE","filter":"invert(91%) sepia(17%) saturate(205%) hue-rotate(115deg) brightness(91%) contrast(85%)","filterYear":"invert(26%) sepia(90%) saturate(322%) hue-rotate(164deg) brightness(88%) contrast(97%)"},"3":{"id":3,"key":"99","name":"PVE卷","color":"#AE7897","font":"#fff","background":"#F9C397","filter":"invert(90%) sepia(8%) saturate(6615%) hue-rotate(305deg) brightness(123%) contrast(95%)","filterYear":"invert(58%) sepia(11%) saturate(614%) hue-rotate(314deg) brightness(105%) contrast(102%)"},"4":{"id":4,"key":"101","name":"PVP卷","color":"#27104E","font":"#fff","background":"#AE7897","filter":"invert(54%) sepia(15%) saturate(807%) hue-rotate(273deg) brightness(94%) contrast(88%)","filterYear":"invert(7%) sepia(91%) saturate(4615%) hue-rotate(263deg) brightness(62%) contrast(96%)"},"5":{"id":5,"key":"102","name":"PVX卷","color":"#264E70","font":"#fff","background":"#F9B4AB","filter":"invert(70%) sepia(6%) saturate(2068%) hue-rotate(317deg) brightness(111%) contrast(95%)","filterYear":"invert(25%) sepia(11%) saturate(3269%) hue-rotate(166deg) brightness(92%) contrast(83%)"},"6":{"id":6,"key":"108","name":"PVP通识","color":"#6B2A27","font":"#fff","background":"#F9B4AB","filter":"invert(70%) sepia(6%) saturate(2068%) hue-rotate(317deg) brightness(111%) contrast(95%)","filterYear":"invert(16%) sepia(17%) saturate(6239%) hue-rotate(337deg) brightness(87%) contrast(83%)"},"7":{"id":7,"key":"100","name":"缘起综合","color":"#543C52","font":"#fff","background":"#F55951","filter":"invert(88%) sepia(15%) saturate(322%) hue-rotate(324deg) brightness(100%) contrast(87%)","filterYear":"invert(25%) sepia(14%) saturate(996%) hue-rotate(255deg) brightness(93%) contrast(92%)"}}},"b":["全部","PVE","PVP","PVX","PVBB","语文","数学","外语","信息","物理","化学","生物","政治","历史","地理","美术","音乐","体育","劳动","理综","文综"]}')},d998:function(t,e,s){"use strict";var r=s("342f");t.exports=/MSIE|Trident/.test(r)},f4e4:function(t,e,s){"use strict";s("a964")}}]);
//# sourceMappingURL=chunk-0b4513db.d0af81e0.js.map