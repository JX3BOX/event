<template>
    <div class="events-page">
        <!-- 主视觉区域 -->
        <div class="events-page__header">
            <img class="events-page__header-title" :src="getImgUrl('title.png')" alt="剑三年度大事件" />
            <img class="events-page__header-year" :src="getImgUrl('year.png')" alt="2024" />
        </div>

        <!-- 内容区域 -->
        <div class="events-page__content">
            <!-- 羊皮纸提示 -->
            <div class="events-page__tip">
                踏入江湖，揭秘剑网3十大热门八卦！从深情告白到阵营风云，从副本黑幕到生活琐事，每一条都让你眼界大开。轻松一刻，尽在剑三八卦圈，大侠们，准备好瓜子，一起享受这场游戏界的八卦盛宴吧！
            </div>

            <!-- 卷轴列表 -->
            <div class="events-page__scroll">
                <img :src="getImgUrl('bg__top.png')" class="scroll__top" alt="卷轴上端" />
                <div class="m-table">
                    <div class="m-table__header">
                        <span class="u-index">名次</span>
                        <span class="u-event">事件</span>
                        <span class="u-vote">我喜欢</span>
                    </div>
                    <div class="m-table__body">
                        <a v-for="(item, index) in eventList" :key="index" class="scroll__item" :href="item.sub_title">
                            <div class="item__rank">{{ index + 1 }}</div>
                            <div class="item__content">
                                <div class="item__title">
                                    <span class="title">{{ item.title }}</span>
                                    <span class="tag">{{ item.tag }}</span>
                                </div>
                                <p class="item__desc">{{ item.content }}</p>
                            </div>
                            <div class="item__stats">
                                <div class="u-btn u-btn--voted" v-if="item.disabled">已投票</div>
                                <div class="u-btn u-btn--vote" @click.stop="vote(item)" v-else>喜欢！吃瓜！</div>
                                <div class="u-count">人气: {{ item.amount }}</div>
                            </div>
                        </a>
                    </div>
                </div>
                <img :src="getImgUrl('bg__bottom.png')" class="scroll__bottom" alt="卷轴下端" />
            </div>
        </div>

        <!-- 右下角吉祥物 -->
        <div class="events-page__character" :class="{ visible: isInMainContent }">
            <img :src="getImgUrl('pin.png')" alt="吉祥物" />
        </div>

        <!-- 左下角 -->
        <div class="events-page__slogan" :class="{ visible: isInMainContent }">
            <img :src="getImgUrl('slogan.png')" class="bigbang-title" alt="剑三年度大事件2024" />
        </div>
    </div>
</template>

<script>
const lodash = require("lodash");
import { getVoteInfo } from "@/service/bigbang";
export default {
    name: "EventsPage",
    inject: ["__imgRoot"],
    data() {
        return {
            eventList: [
            ],
            isInMainContent: false,
            EVENT_ID : 22,
            userStatus : []
        };
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
        showDecoration() {
            return lodash.debounce(() => {
                const scrollDistance = window.scrollY; // 获取垂直滚动距离
                const HEADER_HEIGHT = 800;

                if (scrollDistance > HEADER_HEIGHT) {
                    this.isInMainContent = true;
                } else {
                    this.isInMainContent = false;
                }
            }, 100);
        },
        loadData() {
            getVoteInfo(this.EVENT_ID).then((res) => {

                // 格式化标题与TAG
                const list = res.data.data.vote_items;
                list.forEach((item) => {
                    // TODO:
                    item.title = ''
                    item.tag = ''
                })

                this.eventList = list
            })
        },

        loadUserStatus(){
            // TODO:请求用户的投票状态
            this.userStatus = []
            this.eventList.forEach((item) => {
                item.disabled = this.userStatus.includes(item.id)
            })
        },
        vote(item){
            // TODO:请求
            // item.amount += 1
        },
    },
    mounted() {
        this.loadData().then(() => {
            this.loadUserStatus();
        })
        window.addEventListener("scroll", this.showDecoration());
    },
};
</script>

<style lang="less">
@import "../../assets/css/bigbang/index.less";
</style>
