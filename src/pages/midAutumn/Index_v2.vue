<!--
 * @Author: zhusha 
 * @Date: 2024-08-14 20:17:51
 * @LastEditors: zhusha
 * @LastEditTime: 2024-08-16 16:14:27
 * @Description: 中秋诗词专题PAGE4设计稿
 * 
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved. 
-->
<template>
    <div class="p-event-midAutumn">
        <!-- 首页展示 -->
        <div class="m-box">
            <img :src="`${__imgRoot}tittle.png`" alt="" @click="goToDetail" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    inject: ["__imgRoot"],
    components: {},
    data: function () {
        return {
            active: 0,
        };
    },
    computed: {},
    watch: {
        "$route.query": {
            handler: function (val) {
                if (val.a) {
                    this.active = val.a;
                }
            },
            immediate: true,
        },
    },
    methods: {
        goToDetail() {
            // this.$router.push({
            //     query: {
            //         a: 1,
            //     },
            // });
            this.$router.push({
                path: "detail",
                query: {
                    a: 1,
                },
            });
        },
    },
    mounted() {},
};
</script>

<style lang="less">
@import "~@/assets/css/midautumn/v2/index.less";
</style>
