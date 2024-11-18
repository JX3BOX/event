<template>
    <div class="events-page">
        <!-- 主视觉区域 -->
        <div class="events-page__header">
            <img class="events-page__header-title" :src="mainTitleImage" alt="剑三年度大事件" />
            <img class="events-page__header-year" :src="yearTitleImage" alt="2024" />
        </div>

        <!-- 内容区域 -->
        <div class="events-page__content">
            <!-- 羊皮纸提示 -->
            <div class="events-page__tip">
                <img :src="paperBgImage" class="tip__bg" alt="羊皮纸背景" />
                <div class="tip__content">
                    <p class="tip__text">
                        踏入江湖，揭秘剑网3十大热门八卦！从深情告白到阵营风云，从副本黑幕到生活琐事，每一条都让你眼界大开。轻松一刻，尽在剑三八卦圈，大侠们，准备好瓜子，一起享受这场游戏界的八卦盛宴吧！
                    </p>
                </div>
            </div>

            <!-- 卷轴列表 -->
            <div class="events-page__scroll">
                <img :src="scrollTopImage" class="scroll__top" alt="卷轴上端" />
                <div class="scroll__content" :style="{ backgroundImage: `url(${scrollMiddleImage})` }">
                    <div class="scroll__header">
                        <span>名次</span>
                        <span>事件</span>
                        <span>热度值</span>
                    </div>
                    <div class="scroll__list">
                        <div v-for="(item, index) in eventList" :key="index" class="scroll__item">
                            <div class="item__rank">{{ index + 1 }}</div>
                            <div class="item__content">
                                <div class="item__title">
                                    <span class="tag">{{ item.tag }}</span>
                                    <span>{{ item.title }}</span>
                                </div>
                                <p class="item__desc">{{ item.desc }}</p>
                            </div>
                            <div class="item__stats">
                                <span>人气: {{ item.popularity }}</span>
                                <button :class="['item__btn', { 'is-ended': !item.hasDetail }]">
                                    {{ item.hasDetail ? "已投票" : "喜欢吃瓜" }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img :src="scrollBottomImage" class="scroll__bottom" alt="卷轴下端" />
            </div>
        </div>

        <!-- 右下角吉祥物 -->
        <div class="events-page__character">
            <img :src="characterImage" alt="吉祥物" />
            <div class="character__bubble">给你最好的大事件记忆~</div>
        </div>

        <!-- 左侧竖版标题 -->
        <div class="events-page__vtitle">
            <img :src="VtitleImage" alt="剑三年度大事件2024" />
        </div>
    </div>
</template>

<script>
export default {
    name: "EventsPage",
    inject: ["__imgRoot"],
    data() {
        return {
            bannerImage: "",
            mainTitleImage: "",
            yearTitleImage: "",
            paperBgImage: "",
            scrollTopImage: "",
            scrollMiddleImage: "",
            scrollBottomImage: "",
            characterImage: "",
            VtitleImage: "",
            eventList: [
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
                }, {
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
        };
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
        initImages() {
            this.bannerImage = this.getImgUrl("bg.png"); // 英雄立绘背景
            this.mainTitleImage = this.getImgUrl("title.png"); // 剑三年度大事件
            this.yearTitleImage = this.getImgUrl("year.png"); // 二零二四
            this.paperBgImage = this.getImgUrl("bg__content.png"); // 羊皮纸背景
            this.scrollTopImage = this.getImgUrl("bg__top.png"); // 卷轴上端
            this.scrollMiddleImage = this.getImgUrl("bg__repeat.png"); // 卷轴中间
            this.scrollBottomImage = this.getImgUrl("bg__bottom.png"); // 卷轴下端
            this.characterImage = this.getImgUrl("pin.png"); // 可爱角色图片
            this.VtitleImage = this.getImgUrl("slogan.png"); // 左底部竖标题
        },
    },
    mounted() {
        this.initImages();
    },
};
</script>

<style lang="less">
@import "../../assets/css/bigbang/index.less";

</style>

