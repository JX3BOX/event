<template>
    <div class="jx3story-main">
        <div class="content">


             <!--
            TODO: [图片CDN问题]
            1. 检查图片从 GitHub 到 img.jx3box.com 的自动同步机制
            2. 排查为什么 CDN URL 会出现双斜杠: topic/jx3story//main
            3. 确认是否需要调整上传或同步配置
            相关链接: https://img.jx3box.com/topic/jx3story//main/main__title.png
            @team 需要了解图片部署流程
        -->            <!-- 灯笼容器 -->
        <div class="content__lanterns">
                <!-- 第一个灯笼 -->
                <router-link to="/event" class="content__lantern content__lantern--left">
                    <div class="content__lantern-image">
                        <img :src="getImgUrl('/main/main__lantern1.png')" alt="灯笼1">
                        <img class="content__lantern-text" :src="getImgUrl('/main/main__texttrans_event.png')" alt="内容活动">
                    </div>
                </router-link>

                <!-- 第二个灯笼 -->
                <router-link to="/article" class="content__lantern content__lantern--right">
                    <div class="content__lantern-image">
                        <img :src="getImgUrl('/main/main__lantern2.png')" alt="灯笼2">
                        <img class="content__lantern-text" :src="getImgUrl('/main/main__texttrans_article.png')" alt="文字赏析">
                    </div>
                </router-link>
            </div>

            <!-- 标题图片 -->
            <div class="content__title">
                <img class="content__title-image" :src="getImgUrl('/main/main__title.png')" alt="标题" />
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "EventsPage",
    inject: ["__imgRoot"],
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
