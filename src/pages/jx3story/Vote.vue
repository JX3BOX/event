<template>
    <div class="jx3story-vote-content p-event-main">
        <!-- 灯笼组 -->


        <!-- logo -->
        <router-link class="mini-slogan" to="/" @click.native="handleClick">
            <img class="event__sign" :src="getImgUrl('/eventcontent/eventc__sign.png')" alt="活动标志" />
        </router-link>

        <!-- 投票列表 -->
        <div class="vote-list">
            <!-- 添加标题 -->
            <div class="vote-list__title">2024年茶馆风月录投票榜</div>

            <div class="vote-list__header"></div>

            <div class="vote-list__content">
                <!-- 循环渲染投票项 -->
                <div v-for="(item, index) in voteItems" :key="index" class="vote-item">
                    <div class="vote-item__number">{{index + 1}}.</div>
                    <div class="vote-item__title">《{{item.title}}》</div>
                    <div class="vote-item__author">{{item.author}}</div>
                    <div class="vote-item__popularity">{{item.popularity}}</div>
                    <div class="vote-item__action">
                        <button class="btn-vote" @click="handleVote(item)">
                            <img :src="getImgUrl('/vote/btn-vote.svg')" alt="投票" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LanternGroup from "./components/LanternGroup.vue";

export default {
    name: "jx3storyVote",
    inject: ["__imgRoot"],
 
    data() {
        return {
            voteItems: [
                { title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },     { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },     { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2333 },
                { title: 'xxxxxxxxxx', author: '作者名字', popularity: 2331 },
            ]
        };
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
        handleVote(item) {
            // 处理投票逻辑
            console.log('投票给:', item.title);
        }
    },
};
</script>
<style lang="less">
@import "../../assets/css/jx3story/vote.less";
</style>
