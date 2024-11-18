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
                        霸入工坊，揽括剑网3十大热门工具！从吃喝住行到剑舞笑云，从副本黑话到生活经验，每一条都让你眼界大开。好玩～哎！爱在年三八约起，大保健！准备好压岁，一起享受这场游戏界的小林漫游吧！
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
                                    {{ item.hasDetail ? "查看！观看！" : "已结束" }}
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
                    tag: "重要更新",
                    title: "XX团长 团灭联赛 被挂出3个情绪内涵表",
                    desc: "团长因为各种原因...",
                    popularity: 13867,
                    hasDetail: true,
                },
                // ... 其他事件数据
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
@kv_bigbang: "../../../../img-topic/bigbang";
.events-page {
    position: relative;
    width: 100%;
    padding-top: @header-height;
    width: 1920px;
    margin: 0 auto;
    overflow-x: hidden;

    &__header {
        position: relative;
        height: 1080px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("@{kv_bigbang}/bg.png");
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 1920px auto;

        &-title {
            margin-top: 300px;
            width: 800px;
            height: auto;
        }

        &-year {
            margin-top: 40px;
            width: 296px;
            height: auto;
        }
    }

    &__content {
        position: relative;
        padding: 40px 0;
    }

    &__tip {
        position: relative;
        width: 1200px;
        margin: 0 auto;

        .tip__bg {
            width: 100%;
            height: auto;
        }

        .tip__content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 30px;
        }

        .tip__avatar {
            width: 120px;
            height: auto;
        }

        .tip__text {
            flex: 1;
            font-size: 16px;
            line-height: 1.8;
            color: #3a2a1b;
        }
    }

    &__scroll {
        width: 1200px;
        margin: 40px auto 0;

        .scroll__content {
            background-repeat: repeat-y;
            background-position: center;
            padding: 20px 40px;
        }

        .scroll__header {
            display: flex;
            padding: 20px;
            color: #3a2a1b;
            font-size: 18px;
            font-weight: bold;

            span:first-child {
                width: 80px;
            }
            span:nth-child(2) {
                flex: 1;
            }
            span:last-child {
                width: 120px;
                text-align: right;
            }
        }

        .scroll__item {
            display: flex;
            padding: 20px;
            border-bottom: 1px solid rgba(58, 42, 27, 0.1);

            .item__rank {
                width: 80px;
                font-size: 24px;
                font-weight: bold;
                color: #3a2a1b;
            }

            .item__content {
                flex: 1;
                padding-right: 20px;

                .item__title {
                    margin-bottom: 10px;
                    font-size: 16px;

                    .tag {
                        display: inline-block;
                        padding: 2px 8px;
                        margin-right: 10px;
                        background: #b98c4b;
                        color: #fff;
                        border-radius: 4px;
                        font-size: 14px;
                    }
                }

                .item__desc {
                    color: #666;
                    font-size: 14px;
                    line-height: 1.6;
                }
            }

            .item__stats {
                width: 120px;
                text-align: right;

                .item__btn {
                    margin-top: 10px;
                    padding: 6px 15px;
                    background: #b98c4b;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;

                    &.is-ended {
                        background: #999;
                    }
                }
            }
        }
    }

    &__character {
        position: fixed;
        right: 40px;
        bottom: 40px;
        z-index: 10;

        img {
            width: 200px;
            height: auto;
        }

        .character__bubble {
            position: absolute;
            top: -40px;
            right: 0;
            padding: 10px 20px;
            background: #fff;
            border-radius: 20px;
            font-size: 14px;
            color: #3a2a1b;

            &:after {
                content: "";
                position: absolute;
                bottom: -10px;
                right: 20px;
                border: 10px solid transparent;
                border-top-color: #fff;
            }
        }
    }

    &__vtitle {
        position: fixed;
        left: 40px;
        bottom: 40px;
        z-index: 10;

        img {
            width: 100px;
            height: auto;
        }
    }
}
</style>
