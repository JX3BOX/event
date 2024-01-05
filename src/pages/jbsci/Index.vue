<template>
    <div class="p-event-content">
        <Mark v-if="mark" @close="closeMark" />
        <Tabs @update="showComponent" />
        <component :is="active" />
    </div>
</template>

<script>
import Mark from "./components/mark.vue";
import Tabs from "./components/tabs.vue";
import INDEX from "./components/index.vue";
import ARTICLES from "./components/articles.vue";
import AUTHORS from "./components/authors.vue";

export default {
    name: "Index",
    inject: ["__imgRoot"],
    components: { Mark, Tabs },
    data: function () {
        return {
            mark: false,
            active: INDEX,
        };
    },
    methods: {
        closeMark() {
            setTimeout(() => {
                this.mark = false;
            }, 1000);
        },
        showComponent(name) {
            const data = {
                ARTICLES,
                AUTHORS,
                INDEX,
            };
            this.active = data[name];
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/jbsci/index.less";
</style>
