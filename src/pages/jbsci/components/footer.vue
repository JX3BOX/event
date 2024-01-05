<template>
    <div class="m-footer">
        <div class="wp">
            <div class="u-item" v-for="(item, i) in footer" :key="i">
                <h3>{{ item.label }}</h3>
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sciFooter",
    props: ["data"],
    data: function () {
        return {
            slider: [],
            footer: [
                { label: "ABOUT JBSCI", name: "关于JBSCI" },
                { label: "PROCESS", name: "特约/入选" },
            ],
        };
    },
};
</script>
<style lang="less">
.m-footer {
    .flex;
    .h(70px);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    .wp {
        .w(100%);
        .auto(x);
        .flex;
        gap: 20px;
        align-items: center;
    }
    .u-item {
        .flex;
        .pointer;
        .fz(10px);
        color: #ba9624;
        flex-direction: column;
        h3 {
            .fz(13px);
            .tm(0.6);
            color: #000;
        }
    }
}
</style>
