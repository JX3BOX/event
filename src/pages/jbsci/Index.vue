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
import { groupBy, mapValues } from "lodash";
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
            mark: true,
            active: SLIDER,
            key: "SLIDER",

            slider: [],
            authors: [],
            SCI: {},
        };
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

            const list = this.raw.filter((item) => item.subtype.includes("SCI"));
            const groupedByYear = groupBy(list, (item) => item.subtype.replace("SCI", ""));
            _data.SCI = mapValues(groupedByYear, (group) => {
                return groupBy(group, "icon");
            });
            return _data;
        },
        componentData() {
            const _data = {
                ARTICLES: this.SCI,
                AUTHORS: this.authors,
                SLIDER: this.slider,
            };
            return _data[this.key];
        },
        linkKey() {
            return this.$route.params.key;
        },
    },
    watch: {
        linkKey: {
            immediate: true,
            handler: function (val) {
                if (val) {
                    const key = {
                        sci: "ARTICLES",
                        authors: "AUTHORS",
                    };
                    this.showComponent(key[val]);
                } else {
                    this.showComponent("SLIDER");
                }
            },
        },
    },
    methods: {
        init() {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data.map((item) => {
                    if (item.link) item.type = item.link.split("/")[0];
                    return item;
                });
                const { slider, authors, SCI } = this.data;
                this.slider = slider;
                this.authors = authors;
                this.SCI = SCI;
            });
        },
        closeMark() {
            setTimeout(() => {
                this.mark = false;
            }, 500);
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
