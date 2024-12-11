<template>
    <div class="m-content">
        <div class="m-page-tabs">
            <div class="u-slider"></div>
            <div
                class="m-item"
                v-for="(item, index) in pageTabsColor"
                :key="index"
                :data-gradient="item"
                @click="scrollToSection(index)"
            >
                <img class="u-img" :src="require(`../../assets/img/celebration/nav/${index + 1}.svg`)" alt="" />
            </div>
            <div class="m-item" @click="scrollToSection(-1)">
                <img class="u-img" :src="require(`../../assets/img/celebration/nav/8.svg`)" alt="" />
            </div>
        </div>
        <div class="m-page-0">
            <div class="u-top__bg"></div>
            <div class="m-img-box">
                <div v-for="(item, index) in 12" :key="index">
                    <img
                        class="u-img"
                        :src="require(`../../assets/img/celebration/0/${index}.png`)"
                        alt=""
                        @mouseover="playAudio(item)"
                    />
                </div>
            </div>
            <img class="u-top-kv" src="../../assets/img/celebration/0/top_kv.png" alt="" />
        </div>
        <div class="m-page-1 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/1/1.svg" alt="" />
            <img class="u-bg" src="../../assets/img/celebration/1/bg.jpg" alt="" />
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/1/title.svg" alt="" />
                <iframe
                    class="u-video"
                    src="//player.bilibili.com/player.html?isOutside=true&aid=113604586113129&bvid=BV1dxiiYtEnC&cid=27204256360&p=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                ></iframe>
                <div class="u-author">
                    魔盒团队&签约作者<br />
                    “年度巨献”
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 4" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/1/Ellipse${index}.png`)" alt="" />
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="" />
            </div>
        </div>
        <div class="m-page-2 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/2/2.svg" alt="" />
            <img class="u-bg" src="../../assets/img/celebration/2/bg.jpg" alt="" />
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/2/title.svg" alt="" />

                <img class="u-medal" src="../../assets/img/celebration/Temp/yzk-200.png" alt="" />
                <img
                    class="u-get"
                    v-if="!birthdayMedalCheck"
                    style="cursor: pointer"
                    src="../../assets/img/celebration/get.png"
                    alt=""
                />
                <img class="u-get" v-else style="cursor: no-drop" src="../../assets/img/celebration/get1.png" alt="" />
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 3" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/2/Ellipse${index}.png`)" alt="" />
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="" />
            </div>
        </div>
        <div class="m-page-3 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/3/3.svg" alt="" />
            <img class="u-bg" src="../../assets/img/celebration/3/bg.jpg" alt="" />
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/3/title.svg" alt="" />
                <div class="m-plate">
                    <img class="u-plate-bg" src="../../assets/img/celebration/3/line.svg" alt="" />
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
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="" />
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
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="" />
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
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="" />
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
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="" />
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
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·评论</div>
                        </div>
                    </div>

                    <div class="m-item u-card">
                        <div class="m-info m-card">
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
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·评论</div>
                        </div>
                    </div>

                    <div class="m-item u-avatar">
                        <div class="m-info m-avatar">
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
                                        <img class="u-tip__get" src="../../assets/img/celebration/get.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="m-plate__title">
                            <div class="u-plate__title">魔盒5周年限定主题·评论</div>
                        </div>
                    </div>

                    <img class="u-getAll" src="../../assets/img/celebration/gets.png" alt="" />
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 4" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/3/Ellipse${index}.png`)" alt="" />
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="" />
            </div>
        </div>
        <div class="m-page-4 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/4/4.svg" alt="" />
            <img class="u-bg" src="../../assets/img/celebration/4/bg.jpg" alt="" />
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/4/title.svg" alt="" />
                <div class="m-fun">
                    <div class="m-item" v-for="(item, index) in page4Arr" :key="index">
                        <img
                            class="u-fun__img"
                            :src="require(`../../assets/img/celebration/4/V${index + 1}.svg`)"
                            alt=""
                        />
                        <div class="u-fun__label">{{ item }}</div>
                    </div>
                </div>
                <div class="m-tips">
                    <div class="u-tips__title">这一次，普通用户也能体验</div>
                    <div class="u-tips__sub">[ 每项功能可试用X次 ]</div>
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 2" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/4/Ellipse${index}.png`)" alt="" />
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="" />
            </div>
        </div>
        <div class="m-page-5 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/5/5.svg" alt="" />
            <img class="u-bg" src="../../assets/img/celebration/5/bg.jpg" alt="" />
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/5/title.svg" alt="" />
                <div class="m-info">
                    <img class="u-top" src="../../assets/img/celebration/5/page-title.png" alt="" />
                    <div class="u-top__tip">[ 非活动时期 ]</div>
                    <img class="u-points" src="../../assets/img/celebration/5/points.png" alt="" />
                    <div class="u-points__tip">错过再等一整年！</div>
                    <img class="u-box__logo" src="../../assets/img/celebration/5/box-logo.png" alt="" />
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 2" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/5/Ellipse${index}.png`)" alt="" />
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="" />
            </div>
        </div>
        <div class="m-page-6 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/6/6.svg" alt="" />
            <img class="u-bg" src="../../assets/img/celebration/6/bg.png" alt="" />
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/6/title.svg" alt="" />
                <div class="m-info">
                    <div class="u-top">B5 40P横线本 4选1</div>
                    <div class="m-book">
                        <img
                            class="u-book"
                            v-for="item in 4"
                            :key="item"
                            :src="require(`../../assets/img/celebration/6/book_${item}.png`)"
                            alt=""
                        />
                    </div>
                    <div class="u-book__tip">活动期间开年费会员，每开通一次，均可领取一套精美笔记本（4选1）</div>
                    <img class="u-open" src="../../assets/img/celebration/6/open.svg" alt="" />
                    <div class="u-time">[ 活动时间：2024.12.28~2025.2.28 ]</div>
                    <img class="u-get" src="../../assets/img/celebration/get.png" alt="" />
                </div>
            </div>
            <div class="u-face" :class="`u-face-${item}`" v-for="(item, index) in 5" :key="item">
                <img class="u-img" :src="require(`../../assets/img/celebration/6/Ellipse${index}.png`)" alt="" />
                <img class="u-code" src="../../assets/img/celebration/miniprogram.jpg" alt="" />
            </div>
        </div>
        <div class="m-page-7 m-page-layout">
            <img class="u-mark" src="../../assets/img/celebration/7/7.svg" alt="" />
            <img class="u-bg" src="../../assets/img/celebration/7/bg.png" alt="" />
            <div class="m-main">
                <img class="u-title" src="../../assets/img/celebration/7/title.svg" alt="" />
                <div class="m-info">
                    <div class="m-item">
                        <img class="u-get__title" src="../../assets/img/celebration/7/get_1.png" alt="" />
                        <div class="m-text">
                            <div class="u-text__title">使用200积分兑换1个月会员</div>
                            <div class="u-text__sub">我的积分：1216</div>
                            <div class="u-text__tip">（剩余领取次数：5）</div>
                        </div>
                        <img class="u-get" src="../../assets/img/celebration/get.png" alt="" />
                    </div>
                    <div class="m-item">
                        <img class="u-get__title" src="../../assets/img/celebration/7/get_2.png" alt="" />
                        <div class="m-text">
                            <div class="u-text__title">于2021年12月28日之前注册的用户<br />可以领取3个月会员</div>
                            <div class="u-text__sub">我的注册时间：2021年12月27日</div>
                            <div class="u-text__tip">（剩余领取次数：1）</div>
                        </div>
                        <img class="u-get" src="../../assets/img/celebration/get.png" alt="" />
                    </div>
                    <div class="m-item">
                        <img class="u-get__title" src="../../assets/img/celebration/7/get_3.png" alt="" />
                        <div class="m-text">
                            <div class="u-text__title">
                                Lv4可以领1个月
                                <br />
                                Lv5可以领2个月
                                <br />
                                Lv6及以上可以领3个月
                            </div>
                            <div class="u-text__sub">我的等级：5</div>
                            <div class="u-text__tip">（剩余领取次数：1）</div>
                        </div>
                        <img class="u-get" src="../../assets/img/celebration/get.png" alt="" />
                    </div>
                </div>
                <div class="u-time">[ 活动时间：2024.12.28~2025.2.28 ]</div>
            </div>
        </div>
        <div class="m-page-8 m-page-layout">
            <div class="m-author">
                <div class="m-author__list" v-for="item in 12" :key="item">
                    <img class="u-author" src="" v-for="item in 16" :key="item" alt="" />
                </div>
                <img class="u-center__title" src="../../assets/img/celebration/8/center-title.svg" alt="" />
            </div>
            <img class="u-bottom" src="../../assets/img/celebration/8/bottom.jpg" alt="" />
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import { medalCheck, medalList } from "@/service/birthday";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    components: {},
    data() {
        return {
            pageTabsColor: [
                "linear-gradient(180deg, rgba(151, 71, 255, 0.50) 0%, rgba(151, 71, 255, 0.00) 100%)",
                "linear-gradient(180deg, rgba(206, 0, 0, 0.50) 0%, rgba(206, 0, 0, 0.00) 100%)",
                "linear-gradient(180deg, rgba(239, 98, 22, 0.50) 0%, rgba(239, 98, 22, 0.00) 100%)",
                "linear-gradient(180deg, rgba(239, 206, 22, 0.50) 0%, rgba(239, 206, 22, 0.00) 100%)",
                "linear-gradient(180deg, rgba(48, 236, 89, 0.50) 0%, rgba(48, 236, 89, 0.00) 100%)",
                "linear-gradient(180deg, rgba(64, 128, 255, 0.50) 0%, rgba(64, 128, 255, 0.00) 100%)",
                "linear-gradient(180deg, rgba(64, 128, 255, 0.50) 0%, rgba(64, 128, 255, 0.00) 100%)",
            ],
            page4Arr: [
                "新功能提前体验",
                "团队应用高级功能",
                "个人战斗数据仓库",
                "魔盒助手高级功能",
                "专属虚拟装扮",
                "亲友名单无上限",
                "专属昵称尾巴标识",
                "签到双倍积分",
            ],
            pageElements: [], // 存储所有页面的元素
            lastActiveElement: null, // 用于存储上一个活跃的元素
            halfViewportHeight: 0, // 窗口一半的高度

            // ----------交互数据-----------
            birthdayMedalCheck: true,
        };
    },
    watch: {},
    created() {
        // 检查是否获得了勋章
        medalCheck({
            medal_name: "jx3box-birthday-5",
        }).then((res) => {
            this.birthdayMedalCheck = res.data.data;
        });
    },
    mounted() {
        this.halfViewportHeight = window.innerHeight / 2;
        this.pageElements = Array.from(document.querySelectorAll(`.m-page-layout:not(.m-page-8)`));
        const scrollableElement = document.querySelector(".birthday");
        this.handleScrollThrottled = _.throttle(this.handleScroll, 500);
        scrollableElement.addEventListener("scroll", this.handleScrollThrottled, { passive: true });
        setTimeout(() => {
            this.moveSliderToItem(1);
        }, 500);
    },
    beforeDestroy() {
        const element = document.querySelector(".birthday");
        element.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        Init() {},
        handleScroll(event) {
            let activeElement = null;
            for (const element of this.pageElements) {
                const elementTop = element.getBoundingClientRect().top + event.target.scrollTop;
                if (event.target.scrollTop + this.halfViewportHeight >= elementTop) {
                    activeElement = element;
                }
            }
            if (activeElement && activeElement !== this.lastActiveElement) {
                this.lastActiveElement = activeElement;
                let classArr = activeElement.classList[0].split("-");
                let domIndex = classArr[classArr.length - 1];
                this.moveSliderToItem(domIndex);
            }
        },
        moveSliderToItem(index) {
            if (index < 1 || index > document.querySelectorAll(".m-page-tabs .m-item").length) {
                console.error("Invalid index");
                return;
            }
            const items = document.querySelectorAll(".m-page-tabs .m-item");
            const item = items[index - 1]; // 索引是从1开始的，而数组索引是从0开始的
            const itemRect = item.getBoundingClientRect();
            const itemWidth = itemRect.width;
            const itemLeft = itemRect.left;
            const gradient = item.getAttribute("data-gradient");
            const slider = document.querySelector(".m-page-tabs .u-slider");
            slider.style.width = `${itemWidth}px`;
            slider.style.transform = `translateX(${itemLeft}px)`;
            slider.style.backgroundImage = gradient;
        },
        scrollToSection(index) {
            const scrollableElement = document.querySelector(".birthday");
            let scrollNum = 0;
            if (index != -1) {
                const element = document.querySelector(`.m-page-${index + 1}`);
                scrollNum = element.offsetTop;
            }
            scrollableElement.scrollTo({
                top: scrollNum,
                behavior: "smooth",
            });
        },
        playAudio(itemData) {
            const audio = new Audio(require(`../../assets/audio/celebration/C4_${itemData}.mp3`));
            audio.play();
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/birthday/birthday5.less";
</style>
