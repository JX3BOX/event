<!--
 * @Author: zhusha
 * @Date: 2024-08-10 00:33:57
 * @LastEditors: zhusha
 * @LastEditTime: 2024-09-09 09:50:04
 * @Description: 诗词鉴赏列表
 *
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved.
-->
<template>
    <div class="c-midAutumn-appreciate" v-loading="loading">
        <transition name="fade" mode="out-in">
            <div v-if="!showPoem">
                <!-- 投票/参赛 -->
                <!-- <div class="u-btn">
                    <span class="u-item active">投票</span>

                </div> -->
                <div class="u-empty" v-if="!list.length && !loading">
                    作品收集中，侠士可按照活动介绍中参赛方式前往魔盒网站茶馆论坛处提交作品~
                    <div class="u-item">
                        <a href="/community?category=诗词" target="_blank">快速前往 <i class="el-icon-right"></i></a>
                    </div>
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
                            <span class="u-text">{{ item.author }}{{ "︽" + item.title + "︾" }}</span>
                        </div>
                        <div class="u-right">
                            <span v-for="(item2, i2) in getText(item.desc, i)" :key="i2">
                                <div v-if="i2 < 6">
                                    <span v-if="i2 < 5" class="u-text"
                                        >{{ item2.length > 16 ? item2.substring(0, 16) : item2 }}

                                        <span v-if="item2.length > 16" class="u-more">...</span>
                                        <span v-else>。</span>
                                    </span>
                                    <span v-if="i2 == 5" class="u-more">...</span>
                                </div>
                            </span>
                        </div>
                        <!-- <div class="u-vote" @click.stop="vote(item, i)">
                            <el-tooltip effect="dark" content="投票" placement="top">
                                <div class="u-number"><img src="../../../assets/img/mdi_vote.svg" /><b>20</b></div>
                            </el-tooltip>
                        </div> -->
                        <!-- 票数 -->
                        <!-- <div class="u-number">20</div> -->
                    </div>
                </div>
            </div></transition
        >
        <!-- 详细诗词 -->
        <div class="m-poem-main" v-if="showPoem">
            <div class="u-back" @click="back"><i class="el-icon-arrow-left"></i></div>

            <div class="u-author-info">
                <div class="u-title">{{ poemData.title }}</div>
                <div class="u-author">{{ poemData.author }}</div>
            </div>
            <!-- 诗词内容区域 -->
            <div class="u-content">
                <div
                    class="u-desc-item"
                    :class="{ warp: item.length > 43 }"
                    v-for="(item, i) in getText(poemData.desc)"
                    :key="i"
                >
                    {{ item }}。
                </div>
            </div>
            <div class="u-footer">
                <div class="u-left">
                    <!-- <div class="u-tips">————<span class="u-circle"></span></div>
                    <div class="u-title">{{ poemData.author }} {{ "《" + poemData.title + "》" }}</div> -->
                </div>
                <div class="u-right">
                    <!-- <img src="../../../assets/img/mdi_vote.svg" /><span class="u-right-text">投票</span><b>20</b> -->
                    <img class="u-qrcode" :src="qrcode" alt="" />
                    <div class="u-tips">
                        <div>微信扫一扫参与投票</div>
                        <div>有机会赢取故宫中秋好礼！</div>
                    </div>
                </div>
            </div>
            <div class="u-title-tips">
                {{ tips }}
            </div>
        </div>
    </div>
</template>

<script>
import color from "@/assets/data/color.json";
import { getTopic, getBreadcrumb, getTopicDetail, getTopicQrcode } from "@/service/topic";
import { __cdn } from "@jx3box/jx3box-common/data/jx3box.json";

const KEY = "poems";
export default {
    components: {},
    props: {},
    data() {
        return {
            poemData: null,
            showPoem: false,
            achieve_id: null,
            select_id: null,
            list: [],
            tips: "",
            loading: false,
            qrcode: "",
        };
    },
    watch: {
        "$route.query": {
            handler: function (val) {
                if (val.a) {
                    this.achieve_id = val.a;
                }
                if (val.i) {
                    this.select_id = val.i;
                }
                this.load();
            },
            immediate: true,
        },

        select_id: {
            handler(val) {
                if (val) {
                    getTopicQrcode(val, {
                        page: "pages/midautumn/poem/poem",
                        program_id: 14,
                    }).then((res) => {
                        this.qrcode = `${__cdn}${res.data.data}`;
                    });
                }
            },
            immediate: true,
        },
    },
    methods: {
        vote(item, i) {
            // this.$emit("vote", { item, i });
        },
        load() {
            if (this.list.length > 0) {
                this.init();
                return;
            }
            this.loading = true;
            getBreadcrumb("poems_session").then((number) => {
                getTopic(KEY + "_" + number).then((res) => {
                    let arr = res.data.data;
                    arr.forEach((item) => {
                        if (item.subtype == "article") {
                            this.list.push(item);
                        }
                    });
                    this.loading = false;
                    this.init();
                });
            });
        },
        init() {
            let val = this.list;

            if (val.length > 0 && this.select_id) {
                this.showPoem = true;
                let index = val.findIndex((item) => item.id == this.select_id);
                this.poemData = val[index];
                this.getTipsText(this.poemData.title);
                this.$emit("poem", { item: this.poemData, i: this.select_id, c: index });
            }
        },
        /**
         * 根据诗词标题截取
         *1 个字 截取1，2 截取12，3 截取23，4-99截取34
         */
        getTipsText(title) {
            let text = title?.match(/[\u4e00-\u9fa5]/g) || [];
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
            // let splitArr = val.split(/(?<=。)|(?=。)/);
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
            this.$emit("poem", { item, i: item.id, c: i });
            this.getTipsText(item.title);
            this.$router.push({
                query: {
                    a: this.achieve_id,
                    i: item.id,
                    c: i, //配色序号
                },
            });
        },
        back() {
            this.poemData = null;
            this.showPoem = false;
            this.select_id = null;
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
