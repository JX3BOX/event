<!--
 * @Author: zhusha 
 * @Date: 2024-08-10 00:33:57
 * @LastEditors: zhusha
 * @LastEditTime: 2024-08-16 21:33:22
 * @Description: 诗词鉴赏列表
 * 
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved. 
-->
<template>
    <div class="c-midAutumn-appreciate">
        <transition name="fade" mode="out-in">
            <div v-if="!showPoem">
                <!-- 投票/参赛 -->
                <div class="u-btn">
                    <span class="u-item active">投票</span>
                    <span class="u-item">参赛</span>
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
                        <div class="u-left">
                            {{ item.author }}{{ item.title.replace(/《/g, "︽").replace(/》/g, "︾") }}
                        </div>
                        <div class="u-right">
                            <span v-for="(item2, i2) in getText(item.desc, i)" :key="i2">
                                <div v-if="i2 < 6">
                                    <span v-if="i2 < 5">{{ item2 }}</span>
                                    <span v-if="i2 == 5" class="u-more">......</span>
                                </div>
                            </span>
                        </div>
                        <!-- 票数 -->
                        <div class="u-number">20</div>
                    </div>
                </div>
            </div></transition
        >
        <!-- 详细诗词 -->
        <!-- <transition name="fade" mode="out-in"> -->
        <div class="m-poem-main" v-if="showPoem">
            <div class="u-back" @click="back"><i class="el-icon-arrow-left"></i></div>
            <!-- 诗词内容区域 -->
            <div class="u-content">{{ poemData.desc }}</div>
            <div class="u-footer">
                <div class="u-left">
                    <div class="u-tips">————<span class="u-circle"></span></div>
                    <div class="u-title">{{ poemData.author }} {{ poemData.title }}</div>
                </div>
                <div class="u-right"><img src="../../../assets/img/mdi_vote.svg" />20</div>
            </div>
        </div>
        <!-- </transition> -->
    </div>
</template>

<script>
import color from "@/assets/data/color.json";
import { getTopic, getBreadcrumb } from "@/service/topic";
const KEY = "poems";
export default {
    components: {},
    data() {
        return {
            list: [
                // {
                //     title: "唐·薛莹《秋日湖上》1",
                //     content: "落日五湾游，烟波处处愁。浮沉千古事，谁与问东流？",
                // },
            ],
            poemData: null,
            showPoem: false,
        };
    },
    created() {
        this.init();
    },
    mounted() {},
    methods: {
        init() {
            getBreadcrumb("poems_session").then((number) => {
                getTopic(KEY + "_" + number).then((res) => {
                    let arr = res.data.data;
                    for (let i = 0; i < 19; i++) {
                        arr.push(arr[0]);
                    }
                    this.list = arr;
                });
            });
        },
        getText(val, index) {
            let splitArr = val.split(/[。？！]/);
            let arr = [];
            splitArr.forEach((item, i) => {
                if (item) {
                    arr.push(item);
                }
                if (index > 10) {
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
@import "~@/assets/css/midautumn/v2/appreciate.less";
</style>
