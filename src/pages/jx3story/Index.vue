<template>
    <div class="p-event-jx3story p-event-main">
        <div class="m-video"></div>
        <div class="m-content">
            <!-- 灯笼容器 -->
            <Lantern
                to="/event"
                :top="68"
                :left="44"
                lanternPath="/main/main__lantern1.png"
                textPath="/main/main__texttrans_event.png"
                alt="灯笼1"
                textAlt="内容活动"
                class="lantern lantern-1"
            />
            <Lantern
                to="/article"
                :top="274"
                :left="136"
                lanternPath="/main/main__lantern2.png"
                textPath="/main/main__texttrans_article.png"
                alt="灯笼2"
                textAlt="文字赏析"
                class="lantern lantern-2"
            />

            <!-- 标题图片 -->
            <div class="content__title">
                <img class="content__title-image" :src="getImgUrl('/main/main__title.png')" alt="标题" />
            </div>
        </div>
    </div>
</template>

<script>
import Lantern from "./components/Lantern.vue";
export default {
    name: "jx3storyMain",
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
@import "../../assets/css/jx3story/index.less";
</style>
