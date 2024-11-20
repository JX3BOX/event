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
        -->
            <!-- 灯笼容器 -->
            <div class="content__lanterns">
                <Lantern
                    to="/event"
                    :top="68"
                    :left="44"
                    lanternPath="/main/main__lantern1.png"
                    textPath="/main/main__texttrans_event.png"
                    alt="灯笼1"
                    textAlt="内容活动"
                />
                <Lantern
                    to="/article"
                    :top="274"
                    :left="136"
                    lanternPath="/main/main__lantern2.png"
                    textPath="/main/main__texttrans_article.png"
                    alt="灯笼2"
                    textAlt="文字赏析"
                />
            </div>

            <!-- 标题图片 -->
            <div class="content__title">
                <img class="content__title-image" :src="getImgUrl('/main/main__title.png')" alt="标题" />
            </div>
        </div>
    </div>
</template>

<script>
import Lantern from '@/components/Lantern.vue'

export default {
    name: "jx3storyMain",
    inject: ["__imgRoot"],
    components: {
        Lantern
    },
    data() {
        return {};
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        }
    },
    mounted() {},
};
</script>

<style lang="less">
@import "../../assets/css/jx3story/index.less";
</style>
