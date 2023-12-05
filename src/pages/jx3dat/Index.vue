<template>
    <div class="p-event-content p-jx3dat">
        <div class="wp">
            <div class="m-top">
                <video class="mp4" playsinline="" autoplay="" muted="" loop="" :poster="`${__imgRoot}top.jpg`">
                    <source :src="`${__imgRoot}top.mp4`" type="video/mp4" />
                </video>
                <img class="logo p-animation" v-animate="'bounceIn'" :src="`${__imgRoot}logo.svg`" />
                <div class="m-title">
                    <img class="title p-animation" v-animate="'bounceIn'" :src="`${__imgRoot}video-title.svg`" />
                </div>
            </div>
            <!-- 视频轮播 -->
            <div class="m-video">
                <div class="m-play" v-if="currentVideo">
                    <div class="u-play"></div>
                    <img class="u-img" :src="`${__imgRoot}video-title.svg`" />
                </div>
                <div class="m-video-list">
                    <img
                        class="u-img"
                        v-for="(video, index) in video"
                        :key="index"
                        :src="video.img"
                        @click="playVideo(index)"
                    />
                </div>
            </div>
            <!-- 活动流程 -->
            <h2 class="title" :style="{ backgroundImage: `url(${title[0]})` }">活动流程</h2>
            <div class="m-box m-steps">
                <div class="m-links">
                    <a class="u-link" :href="item.link" target="_blank" v-for="(item, i) in document" :key="i">
                        <span>
                            《{{ item.title }}<b :style="{ color: item.color }">{{ item.desc }}</b
                            >》
                        </span>
                    </a>
                </div>
                <div class="m-step" v-for="(item, i) in step" :key="i">
                    <h3 class="u-title" v-html="item.title"></h3>
                    <div class="u-time" v-html="item.link"></div>
                    <div class="u-desc" v-html="item.desc"></div>
                </div>
            </div>
            <!-- 活动奖励 -->
            <h2 class="title" :style="{ backgroundImage: `url(${title[1]})` }">活动奖励</h2>
            <!-- 安全与风险 -->
            <h2 class="title" :style="{ backgroundImage: `url(${title[2]})` }">安全与风险</h2>
        </div>
    </div>
</template>

<script>
const KEY = "jx3dat";
import { getTopic } from "@/service/topic";
export default {
    name: "Index",
    inject: ["__imgRoot"],
    data: function () {
        return {
            raw: [],
            prize: [],
            title: [],
            safe: "",
            step: [],
            video: [],
            document: [],
            index: 0,
        };
    },
    directives: {
        animate: {
            inserted: function (el, binding) {
                binding.addClass = () => {
                    const { top } = el.getBoundingClientRect();
                    const h = document.documentElement.clientHeight || document.body.clientHeight;
                    if (top < h) {
                        if (el.className.indexOf(binding.value) == -1) {
                            el.className = binding.value + " " + el.className;
                        }
                        if (binding.addClass) {
                            window.removeEventListener("scroll", binding.addClass);
                        }
                    }
                };
                window.addEventListener("scroll", binding.addClass, true);
                binding.addClass();
            },
            unbind: function (el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
    },
    computed: {
        data: function () {
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
        currentVideo() {
            return this.video.length && this.video[this.index].link;
        },
    },

    methods: {
        init() {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data;
                const { prize, safe, step, video, title, document } = this.data;
                this.prize = prize;
                this.safe = safe[0].desc;
                this.step = step;
                this.video = video.map((item) => {
                    const { id, link, img, title } = item;
                    return { id, link, img, title };
                });

                this.title = title.map((item) => item.img);
                this.document = document;
            });
        },
        playVideo(i) {
            this.index = i;
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/jx3dat/index.less";
</style>
