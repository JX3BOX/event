<template>
    <div class="p-event-midAutumn">
        <div class="m-box">
            <div class="u-title-box">
                <div class="u-left">诗中词秋</div>
                <div class="u-right">
                    <p class="u-date">2024</p>
                </div>
            </div>
            <div class="u-tabs-box">
                <div class="u-item" @click="goToDetail(1)">活动介绍</div>
                <div class="u-item active" @click="goToDetail(2)">诗词介绍</div>
                <div class="u-item" @click="goToDetail(3)">往届活动</div>
            </div>
        </div>
    </div>
</template>

<script>
const KEY = "midautumn";

export default {
    name: "Index",
    inject: ["__imgRoot"],
    data: function () {
        return {};
    },
    computed: {},
    watch: {
        width: {
            immediate: true,
            handler: function (w) {
                this.height = w < 720 ? "220px" : w < 1133 ? "420px" : "520px";
                this.$forceUpdate();
            },
        },
    },
    methods: {
        init() {},
        goToDetail(val) {
            this.$router.push({ name: "detail", query: { a: val } });
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/midautumn/index.less";
</style>
