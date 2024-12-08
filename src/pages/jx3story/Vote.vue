<template>
    <div class="jx3story-vote-content p-event-main">
        <!-- 灯笼组 -->
        <div class="lantern-group">
            <Lantern
                to="/event"
                :top="68"
                :left="44"
                lanternPath="main/main__lantern1.png"
                textPath="main/main__texttrans_event.png"
                alt="灯笼1"
                textAlt="内容活动"
            />
            <Lantern
                to="/article"
                :top="274"
                :left="136"
                lanternPath="main/main__lantern2.png"
                textPath="main/main__texttrans_article.png"
                alt="灯笼2"
                textAlt="文字赏析"
            />
            <Lantern
                to="/vote"
                :top="440"
                :left="66"
                lanternPath="/main/main__lantern3.png"
                textPath="/main/main__texttrans_vote.png"
                alt="灯笼3"
                textAlt="投票参与"
            />
        </div>

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
import Lantern from "./components/Lantern.vue";

export default {
    name: "jx3storyVote",
    inject: ["__imgRoot"],
    components: {
        Lantern,
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
