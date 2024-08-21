<template>
    <div class="p-midautumn-detail">
        <div class="u-bg" :style="bgStyle">
            <Nav :poemName="poemData?.title || ''" @navChange="back"></Nav>
            <div class="u-main-box">
                <transition name="fade" mode="out-in">
                    <Introduce v-if="achieve_id == 1" :data="introduce"></Introduce>
                    <Appreciate v-if="achieve_id == 2" :list="article" @poem="poem" @back="back"></Appreciate
                ></transition>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "./components_v2/nav.vue";
import Introduce from "./components_v2/introduce.vue";
import Appreciate from "./components_v2/appreciate.vue";
import color from "@/assets/data/color.json";
import { getTopic, getBreadcrumb } from "@/service/topic";

const KEY = "poems";
export default {
    components: { Nav, Introduce, Appreciate },
    data() {
        return {
            achieve_id: 1,
            bgStyle: null,
            poemData: null,
            article: [],
            introduce: [],
        };
    },
    watch: {
        "$route.query": {
            handler: function (val) {
                if (val.a) {
                    this.achieve_id = val.a;
                    this.$nextTick(() => {
                        let dom = document.querySelector(".u-bg"); //获取组件
                        dom && (dom.scrollTop = 0);
                    });
                }
            },
            immediate: true,
        },
    },
    created() {
        this.init();
    },
    mounted() {},
    methods: {
        init() {
            getBreadcrumb("poems_session").then((number) => {
                getTopic(KEY + "_" + number).then((res) => {
                    let arr = res.data.data;
                    arr.forEach((item) => {
                        if (item.subtype == "introduce") {
                            this.introduce.push(item);
                        } else if (item.subtype == "article") {
                            this.article.push(item);
                        }
                    });

                    // for (let i = 0; i < 19; i++) {
                    //     this.article.push(this.article[0]);
                    // }
                });
            });
        },
        poem(e) {
            this.poemData = e.item;
            this.bgStyle = `background-color:${color.color[e.i].color};opacity: 0.95`;
            this.$nextTick(() => {
                let dom = document.querySelector(".u-bg"); //获取组件
                dom && (dom.scrollTop = 0);
            });
        },
        back() {
            this.poemData = null;
            this.bgStyle = null;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/midautumn/v2/index.less";
</style>
