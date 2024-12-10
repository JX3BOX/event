<template>
    <div class="m-content">
        <div class="u-top__bg"></div>
        <div class="m-page-tabs">
            <div class="u-slider"></div>
            <div class="u-item" v-for="(item, index) in items" :key="index">{{ item }}</div>
        </div>
        <div class="m-page-0">
            <div class="m-img-box">
                <div v-for="(item, index) in 12" :key="index">
                    <img
                        class="u-img"
                        :src="require(`../../assets/img/celebration/0/${index}.png`)"
                        alt=""
                        @mouseover="playAudio"
                    />
                </div>
            </div>
            <img class="u-top-kv" src="../../assets/img/celebration/0/top_kv.png" alt="" />
        </div>
        <div class="m-page-1 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/1/1.svg" alt="">
            <img class="u-bg" src="../../assets/img/celebration/1/bg.jpg" alt="">
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/1/title.svg" alt="">
                <iframe
                    class="u-video"
                    src="//player.bilibili.com/player.html?isOutside=true&aid=113604586113129&bvid=BV1dxiiYtEnC&cid=27204256360&p=1"
                    scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
                <div class="u-author">
                    魔盒团队&签约作者<br />
                    “年度巨献”
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item,index) in 4" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/1/Ellipse${index}.png`)" alt="">
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="">
            </div>
        </div>
        <div class="m-page-2 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/2/2.svg" alt="">
            <img class="u-bg" src="../../assets/img/celebration/2/bg.jpg" alt="">
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/2/title.svg" alt="">
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item,index) in 3" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/1/Ellipse${index}.png`)" alt="">
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="">
            </div>
        </div>
        <div class="m-page-3 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/3/3.svg" alt="">
            <img class="u-bg" src="../../assets/img/celebration/3/bg.jpg" alt="">
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/3/title.svg" alt="">
                <div class="m-plate">
                    <img class="u-plate-bg" src="../../assets/img/celebration/3/line.svg" alt="">
                    <div class="m-item u-calendar">
                        <div class="m-info m-calendar">
                            <div class="m-plate__content"></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·日历</div>
                                <div class="u-plate__sub">实装位置：魔盒官网-首页-最新动态上方</div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·日历</div>
                        </div>
                    </div>

                    <div class="m-item u-sidebar">
                        <div class="m-info m-sidebar">
                            <div class="m-plate__content"></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·侧边栏</div>
                                <div class="u-plate__sub">实装位置：魔盒官网-首页-最新动态上方</div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·侧边栏</div>
                        </div>
                    </div>

                    <div class="m-item u-people__card">
                        <div class="m-info m-people__card">
                            <div class="m-plate__content"></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·圈人卡</div>
                                <div class="u-plate__sub">实装位置：魔盒官网-首页-最新动态上方</div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·圈人卡</div>
                        </div>
                    </div>

                    <div class="m-item u-personal">
                        <div class="m-info m-personal">
                            <div class="m-plate__content"></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·个人主页</div>
                                <div class="u-plate__sub">实装位置：魔盒官网-首页-最新动态上方</div>
                                <div class="m-plate__tip">
                                    <div>
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·个人主页</div>
                        </div>
                    </div>

                    <div class="m-item u-comment">
                        <div class="m-info m-comment">
                            <div class="m-plate__content"></div>
                            <div class="m-info-hover">
                                <div class="u-plate__title">魔盒5周年限定主题·评论</div>
                                <div class="u-plate__sub">实装位置：魔盒官网-首页-最新动态上方</div>
                                <div class="m-plate__tip">
                                    <div class="u-tip__box">
                                        <div class="u-tip__title">仅限魔盒会员领取</div>
                                        <div class="u-tip__time">领取时间：2024.12.28~2025.2.28</div>
                                    </div>
                                    <div>
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·评论</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item,index) in 4" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/1/Ellipse${index}.png`)" alt="">
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            items: ["《我恨剑网3》", "纪念勋章", "会员限定装扮", "魔盒会员新功能", "充会员返礼", "年费会员福利"],
        };
    },
    watch: {},
    created() {
    },
    mounted() {
        window.addEventListener("scroll", this.pageScroll());
    },
    methods: {
        Init() {
        },
        pageScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop);
        },
        playAudio() {
            const audio = new Audio("path/to/your/audio/file.mp3");
            audio.play();
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/birthday/birthday5.less";
</style>
