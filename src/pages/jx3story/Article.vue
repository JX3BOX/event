<template>
    <div class="jx3story-article-content p-article-main">
        <!-- 灯笼 -->
        <LanternGroup />

        <!-- logo -->
        <router-link class="mini-slogan" to="/" @click.native="handleClick">
            <img class="event__sign" :src="getImgUrl('/eventcontent/eventc__sign.png')" alt="活动标志" />
        </router-link>

        <div class="m-main">
            <div class="article-content">
                <div class="article-list">
                    <div class="article-items">
                        <!-- 先清空内容，等待正确的结构设计 -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LanternGroup from "./components/LanternGroup.vue";

export default {
    name: "jx3storyEvent",
    inject: ["__imgRoot"],
    components: {
        LanternGroup,
    },
    data() {
        return {};
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
    },
    mounted() {},
};
</script>

<style lang="less">
@import "../../assets/css/jx3story/article.less";
</style>
