<template>
    <div class="p-event-content p-jx3dat">
        <div class="m-top">
            <video class="mp4" playsinline="" autoplay="" muted="" loop="" :poster="`${__imgRoot}top.jpg`">
                <source :src="`${__imgRoot}top.mp4`" type="video/mp4" />
            </video>
            <img class="logo p-animation" v-animate="'bounceIn'" :src="`${__imgRoot}logo.svg`" />
            <img class="title p-animation" v-animate="'bounceIn'" :src="`${__imgRoot}video-title.svg`" />
        </div>
        <div class="wp">
            <!-- 视频轮播 -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    inject: ["__imgRoot"],
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
};
</script>

<style lang="less">
@import "~@/assets/css/jx3dat/index.less";
</style>
