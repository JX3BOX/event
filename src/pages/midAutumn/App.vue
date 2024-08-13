<template>
    <!-- 中秋诗词专题页 -->
    <div class="p-event midAutumn" :class="'v-' + page_name">
        <Header :overlayEnable="true"></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import { postStat } from "@jx3box/jx3box-common/js/stat";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "App",
    data: function () {
        return {};
    },
    provide: {
        __imgRoot: __imgPath + "topic/midAutumn/",
    },
    computed: {
        page_name: function () {
            return this.$route.name;
        },
    },
    created: function () {
        postStat("event", "midAutumn");
    },
};
</script>
<style lang="less">
@import "~@/assets/css/midautumn/font.less";
body{
    font-family: FZLTSJW;
}
</style>