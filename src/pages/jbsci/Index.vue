<template>
    <div class="p-event-content">
        <Mark v-if="mark" @close="closeMark" />
    </div>
</template>

<script>
import Mark from "./components/mark.vue";
export default {
    name: "Index",
    inject: ["__imgRoot"],
    components: { Mark },
    data: function () {
        return {
            mark: true,
        };
    },
    methods: {
        closeMark() {
            setTimeout(() => {
                this.mark = false;
            }, 1000);
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/jbsci/index.less";
</style>
