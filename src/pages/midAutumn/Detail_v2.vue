<template>
    <div class="p-midautumn-detail">
        <div class="u-bg" :style="bgStyle">
            <Nav :poemName="poemData?.title || ''"></Nav>
            <div class="u-main-box">
                <transition name="fade" mode="out-in">
                    <Introduce v-if="achieve_id == 1"></Introduce>
                    <Appreciate v-if="achieve_id == 2" @poem="poem" @back="back"></Appreciate
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

export default {
    components: { Nav, Introduce, Appreciate },
    data() {
        return {
            achieve_id: 1,
            bgStyle: null,
            poemData: null,
            article: [],
        };
    },
    watch: {
        "$route.query": {
            handler: function (val) {
                if (val.a) {
                    this.achieve_id = val.a;
                }
            },
            immediate: true,
        },
    },
    created() {},
    mounted() {},
    methods: {
        poem(e) {
            this.poemData = e.item;
            this.bgStyle = `background-color:${color.color[e.i].color}`;
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
