<template>
    <div class="jx3story-article-content p-article-main">
        <!-- 灯笼 -->
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
import Lantern from "./components/Lantern.vue";
export default {
    name: "jx3storyEvent",
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
    mounted() {},
};
</script>

<style lang="less">
@import "../../assets/css/jx3story/article.less";
</style>
