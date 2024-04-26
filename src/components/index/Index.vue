<template>
    <div class="m-navigation">
        <div class="m-dot"></div>
        <div class="m-mark"></div>
        <div class="m-footer">
            <div class="u-left"></div>
            <div class="u-right"></div>
        </div>
        <div class="wp">
            <img class="u-title" :src="topImg" />
            <div class="m-list-scroll" :class="{ isShort }" v-show="!isNewEvent">
                <a
                    class="u-item"
                    target="_blank"
                    :href="eventLink + item.link"
                    v-for="(item, i) in list"
                    :key="i"
                    @mouseover="showName(item.name)"
                    @mouseout="hideName"
                >
                    <span class="u-title">{{ item.name }}</span>
                    <el-image class="u-img" :src="`${imgLink}${item.img}`" fit="cover"></el-image>
                    <div class="u-mark"></div>
                </a>
            </div>
            <div class="m-new-list" v-show="isNewEvent">

            </div>
            <div class="m-name" v-if="show">{{ name }}</div>
        </div>
        <div class="m-events-btn" @click="isNewEvent = !isNewEvent">
            活动列表
        </div>
    </div>
</template>

<script>
    import { __imgPath, __Root } from "@jx3box/jx3box-common/data/jx3box.json";
    import { list } from "@/assets/data/index.json";
    export default {
        name: "Index",
        data: function () {
            return {
                list,
                eventLink: __Root + "event",
                show: false,
                name: "",
                isNewEvent: false,
                monthList: [{
                    month: '1月',
                    list: [{

                    }]
                }]
            };
        },
        computed: {
            imgLink() {
                return __imgPath + "topic/event/img/";
            },
            topImg() {
                return __imgPath + "topic/event/top.png";
            },
            isShort() {
                return this.list.length <= 4;
            },
        },
        methods: {
            showName(name) {
                this.show = true;
                this.name = name;
            },
            hideName() {
                this.show = false;
                this.name = "";
            },
        },
    };
</script>

<style lang="less">
    @import "~@/assets/css/index.less";
</style>
