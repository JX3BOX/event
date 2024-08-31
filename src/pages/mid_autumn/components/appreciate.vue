<!--
 * @Author: zhusha
 * @Date: 2024-08-10 00:33:57
 * @LastEditors: zhusha
 * @LastEditTime: 2024-08-13 16:56:13
 * @Description: 诗词鉴赏列表
 *
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved.
-->
<template>
    <div class="c-midAutumn-appreciate">
        <transition name="fade">
            <div v-if="!showPoem">
                <!-- 投票/参赛 -->
                <div class="u-btn">
                    <span class="u-item active">投票</span>
                    <a class="u-item" href="/community?category=诗词" target="_blank">参赛</a>
                </div>
                <!-- 诗词区域 -->
                <div class="u-list">
                    <div
                        class="u-item"
                        v-for="(item, i) in list"
                        :key="i"
                        :style="{ 'background-color': getColorStyle(i) }"
                        @click="poem(item, i)"
                    >
                        <div class="u-left">{{ item.title.replace(/《/g, "︽").replace(/》/g, "︾") }}</div>
                        <div class="u-right">
                            <div v-for="(item2, i2) in getText(item.content)" :key="i2">
                                <span v-if="i2 < 5">{{ item2 }}</span>
                                <span v-else class="u-more">......</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div></transition
        >
        <!-- 详细诗词 -->
        <transition name="fade">
            <div class="m-poem-main" v-if="showPoem">
                <div class="u-back" @click="back"><i class="el-icon-arrow-left"></i></div>
                <!-- 诗词内容区域 -->
                <div class="u-content">落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？</div>
                <div class="u-footer">
                    <div class="u-left">
                        <div class="u-tips">————<span class="u-circle"></span></div>
                        <div class="u-title">唐·薛莹《秋日湖上》</div>
                    </div>
                    <div class="u-right"><img src="../../../assets/img/mdi_vote.svg" />20</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import color from "@/assets/data/color.json";

export default {
    components: {},
    data() {
        return {
            list: [
                {
                    title: "唐·薛莹《秋日湖上》1",
                    content: "落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》2",
                    content: "落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》3",
                    content: "落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》4",
                    content: "落日五湾游，烟波处处愁！浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》5",
                    content: "落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》6",
                    content: "落日五湾游，烟波处处愁！浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》7",
                    content: "落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》8",
                    content: "落日五湾游，烟波处处愁？浮沉千古事，谁与问东流？",
                },
                {
                    title: "唐·薛莹《秋日湖上》9",
                    content:
                        "落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？",
                },
            ],
            poemData: null,
            showPoem: false,
        };
    },
    created() {},
    mounted() {},
    methods: {
        getText(val) {
            let splitArr = val.split(/[。？！]/);
            let arr = [];
            splitArr.forEach((item, i) => {
                if (item) {
                    arr.push(item);
                }
            });
            return arr;
        },
        getColorStyle(i) {
            return color.color[i].color;
        },
        poem(item, i) {
            this.poemData = item;
            this.showPoem = true;
            this.$emit("poem", { item, i });
        },
        back() {
            this.poemData = null;
            this.showPoem = false;
            this.$emit("back");
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/midautumn/appreciate.less";
</style>
