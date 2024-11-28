<template>
    <div class="p-event-jx3story p-event-main">
        <div class="m-video">
            <video class="mp4" playsinline="" autoplay="" muted="" loop="" :poster="poster">
                <source :src="videoLink" type="video/mp4" />
            </video>
        </div>
        <div class="m-content">
            <!-- 灯笼容器 -->
            <RightLantern />

            <!-- 标题图片 -->
            <div class="content__title">
                <img class="content__title-image" :src="getImgUrl('/main/main__title.png')" alt="标题" />
            </div>

            <img class="content__scroll-image" :src="getImgUrl('/main/scroll.webp')" alt="卷轴" />
        </div>
    </div>
</template>

<script>
import RightLantern from "./components/RightLantern.vue";
import { __cdn } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "jx3storyMain",
    inject: ["__imgRoot"],
    components: {
        RightLantern,
    },
    data() {
        return {};
    },
    computed: {
        videoLink() {
            return __cdn + "design/video/20231128-fengyue-bg.mp4";
        },
        poster() {
            return `${this.__imgRoot}main/main__bg.png`;
        },
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/jx3story/index.less";
</style>
