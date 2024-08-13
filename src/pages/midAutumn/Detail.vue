<template>
    <div class="p-midautumn-detail" :style="bgStyle">
        <Nav></Nav>
        <div class="u-main-box">
            <Introduce v-if="achieve_id == 1"></Introduce>
            <Appreciate v-if="achieve_id == 2" @poem="poem" @back="back"></Appreciate>
        </div>
    </div>
</template>

<script>
import Nav from "./components/nav.vue";
import Introduce from "./components/introduce.vue";
import Appreciate from "./components/appreciate.vue";
import color from "@/assets/data/color.json";
export default {
    components: { Nav, Introduce, Appreciate },
    data() {
        return {
            achieve_id: 3,
            bgStyle: null,
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
            console.log(e);
            setTimeout(() => {
                this.bgStyle = `background-color:${color.color[e.i].color}`;
            }, 300);
        },
        back() {
            this.bgStyle = null;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/midautumn/detail.less";
</style>
