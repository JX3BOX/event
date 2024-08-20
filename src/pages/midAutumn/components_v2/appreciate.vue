<!--
 * @Author: zhusha 
 * @Date: 2024-08-10 00:33:57
 * @LastEditors: zhusha
 * @LastEditTime: 2024-08-20 20:39:27
 * @Description: 诗词鉴赏列表
 * 
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved. 
-->
<template>
    <div class="c-midAutumn-appreciate" :style="{ 'padding-top': showPoem ? '0' : '161px' }">
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
                            <!-- {{ item.author }}{{ item.title.replace(/《/g, "︽").replace(/》/g, "︾") }} -->
                            {{ item.author }}{{ "︽" + item.title + "︾" }}
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
        <div class="m-poem-main" v-if="showPoem">
            <div class="u-back" @click="back"><i class="el-icon-arrow-left"></i></div>
            <!-- 诗词内容区域 -->
            <div class="u-content">
                <div v-for="(item, i) in getText(poemData.desc)" :key="i">{{ item }}</div>
            </div>
            <div class="u-footer">
                <div class="u-left">
                    <div class="u-tips">————<span class="u-circle"></span></div>
                    <div class="u-title">{{ poemData.author }} {{ "《" + poemData.title + "》" }}</div>
                </div>
                <div class="u-right"><img src="../../../assets/img/mdi_vote.svg" />20</div>
            </div>
            <div class="u-title-tips">
                {{ tips }}
            </div>
        </div>
    </div>
</template>

<script>
import color from "@/assets/data/color.json";

export default {
    components: {},
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            poemData: null,
            showPoem: false,
            achieve_id: null,
            selectIndex: null,
            tips: "",
        };
    },
    watch: {
        "$route.query": {
            handler: function (val) {
                if (val.a) {
                    this.achieve_id = val.a;
                }
                if (val.i) {
                    this.selectIndex = val.i;
                }
            },
            immediate: true,
        },
        list: {
            handler: function (val) {
                if (val.length > 0 && this.selectIndex) {
                    this.showPoem = true;
                    let item = val[this.selectIndex];
                    this.poemData = item;
                    this.getTipsText(item.title + "34eefdsf44");
                    this.$emit("poem", { item, i: this.selectIndex });
                }
            },
            immediate: true,
        },
    },
    created() {},
    mounted() {},
    methods: {
        /**
         * 根据诗词标题截取
         *1 个字 截取1，2 截取12，3 截取23，4-99截取34
         */
        getTipsText(title) {
            let text = title?.match(/[\u4e00-\u9fa5]/g) || [];
            console.log(text, text.length);
            if (text.length == 3) {
                this.tips = text[1] + text[2];
            } else if (text.length > 3) {
                this.tips = text[2] + text[3];
            } else {
                this.tips = text;
            }
        },
        getText(val, index) {
            let splitArr = val.split(/[。？！]/);
            let arr = [];
            splitArr.forEach((item, i) => {
                if (item) {
                    arr.push(item);
                }
                if (index && index > 10) {
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
            this.getTipsText(item.title);
            this.$router.push({
                query: {
                    a: this.achieve_id,
                    i: i,
                },
            });
        },
        back() {
            this.poemData = null;
            this.showPoem = false;
            this.$emit("back");
            this.$router.push({
                query: {
                    a: this.achieve_id,
                },
            });
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/assets/css/midautumn/v2/appreciate.less";
</style>
