<template>
    <div class="p-event-content">
        <Mark v-if="mark" @close="closeMark" />
        <Tabs @update="showComponent" />
        <div class="m-main" :class="key">
            <div class="wp">
                <component :is="active" :data="componentData" />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
const KEY = "jbsci";
import { getTopic } from "@/service/topic";

import Mark from "./components/mark.vue";
import Footer from "./components/footer.vue";
import Tabs from "./components/tabs.vue";
import SLIDER from "./components/slider.vue";
import ARTICLES from "./components/articles.vue";
import AUTHORS from "./components/authors.vue";

export default {
    name: "Index",
    inject: ["__imgRoot"],
    components: { Mark, Tabs, Footer, ARTICLES, AUTHORS, SLIDER },
    data: function () {
        return {
            raw: [],
            mark: false,
            active: SLIDER,
            key: "SLIDER",

            slider: [],
            authors: [],
        };
    },
    computed: {
        data() {
            let _data = {};
            this.raw.forEach((item) => {
                if (!_data[item.subtype]) {
                    _data[item.subtype] = [];
                }
                _data[item.subtype].push(item);
            });
            Object.keys(_data).forEach((key) => {
                _data[key] = _data[key].sort((a, b) => a.power - b.power);
            });
            return _data;
        },
        componentData() {
            const _data = {
                ARTICLES: {},
                AUTHORS: {
                    authors: this.authors,
                },
                SLIDER: {
                    slider: this.slider,
                },
            };
            return _data[this.key];
        },
    },
    methods: {
        init() {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data;
                const { slider, authors } = this.data;
                this.slider = slider;
                this.authors = authors;
            });
        },
        closeMark() {
            setTimeout(() => {
                this.mark = false;
            }, 1000);
        },
        showComponent(name) {
            const data = {
                ARTICLES,
                AUTHORS,
                SLIDER,
            };
            this.key = name;
            this.active = data[name];
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/jbsci/index.less";
</style>
