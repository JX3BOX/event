<!--
 * @Author: zhusha 
 * @Date: 2024-08-10 00:33:37
 * @LastEditors: zhusha
 * @LastEditTime: 2024-08-18 12:44:42
 * @Description: 活动介绍
 * 
 * Copyright (c) 2024 by zhusha, email: no email, All Rights Reserved. 
-->
<template>
    <div class="c-midAutumn-introduce">
        <div class="u-content">
            <div v-for="item in data" :key="item.id" v-html="item.desc"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
    components: {},
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style lang="less">
@import "~@/assets/css/midautumn/v2/introduce.less";
</style>
