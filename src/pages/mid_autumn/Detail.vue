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
const KEY = "poems";
import { getTopic, getBreadcrumb } from "@/service/topic";
export default {
    components: { Nav, Introduce, Appreciate },
    data() {
        return {
            achieve_id: 3,
            bgStyle: null,
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
    computed: {
        data() {
            let _data = {};
            this.raw.forEach((item) => {
                if (!item.subtype.includes("SCI") && !_data[item.subtype]) {
                    _data[item.subtype] = [];
                }
                if (_data[item.subtype]) {
                    _data[item.subtype].push(item);
                }
            });
            Object.keys(_data).forEach((key) => {
                _data[key] = _data[key].sort((a, b) => a.power - b.power);
            });

            return _data;
        },
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            console.log("init");
            getBreadcrumb("poems_session").then((number) => {
                getTopic(KEY + "_" + number).then((res) => {
                    this.raw = res.data.data.map((item) => {
                        if (item.link) item.type = item.link.split("/")[0];
                        return item;
                    });
                    const { article } = this.data;
                    this.article = article;
                });
            });
        },
        poem(e) {
            // 诗词背景色
            if (color.color[e.i]) {
                setTimeout(() => {
                    this.bgStyle = `background-color:${color.color[e.i].color}`;
                }, 300);
            }
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
