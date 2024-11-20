<template>
    <div class="jx3story-event-content">
        <div class="m-content">



        </div>
    </div>
</template>

<script>
const lodash = require("lodash");
const axios = require('axios');
export default {
    name: "EventsPage",
    inject: ["__imgRoot"],
    data() {
        return {
            eventList: [
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "黑工资",
                    title: "XX团长 团灭联赛 被挂出3个情缘的故事",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                {
                    tag: "出轨",
                    title: "用户分享内容到社交媒体",
                    desc: "监听用户的截图行为，表示用户进行分享，缩短了以前分享截图的操作路径",
                    popularity: 13867,
                    hasDetail: true,
                },
            ],
            isInMainContent: false,
        };
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
        showDecoration() {
            return lodash.debounce(() => {
                const scrollDistance = window.scrollY; // 获取垂直滚动距离
                const HEADER_HEIGHT = 800;

                if (scrollDistance > HEADER_HEIGHT) {
                    this.isInMainContent = true;
                } else {
                    this.isInMainContent = false;
                }
            }, 100);
        },
        loadData(){
        }
    },
    mounted() {
        window.addEventListener("scroll", this.showDecoration());
    },
};
</script>

<style lang="less">
// @import "../../assets/css/jx3story/index.less";
</style>
