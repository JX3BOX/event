<template>
    <div class="events-page">


    </div>
</template>

<script>
export default {
    name: "jx3storyEvent",
    inject: ["__imgRoot"],
    data() {
        return {};
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
    },
    mounted() {},
};

</script>

<style lang="less">
@import "../../assets/css/jx3story/article.less";
</style>
