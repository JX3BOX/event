<template>
    <div class="jx3story-vote-content p-event-main">
        <!-- 灯笼组 -->
        <LanternGroup />

        <!-- logo -->
        <router-link class="mini-slogan" to="/" @click.native="handleClick">
            <img class="event__sign" :src="getImgUrl('/eventcontent/eventc__sign.png')" alt="活动标志" />
        </router-link>

        <!-- 投票页面主体内容 -->
        <div class="m-main">
            <div class="m-content">
                <!-- 这里添加投票页面的具体内容 -->
                <h1>投票页面</h1>
            </div>
        </div>
    </div>
</template>

<script>
import LanternGroup from "./components/LanternGroup.vue";

export default {
    name: "jx3storyVote",
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
};
</script>
<style lang="less">
@import "../../assets/css/jx3story/vote.less";
</style>
