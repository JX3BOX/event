<template>
    <div class="m-footer" v-if="jbsci.length" :class="{ index: !linkKey || linkKey == 'index' }">
        <div class="wp">
            <div class="u-item" v-for="(item, i) in jbsci" :key="i" @click="change(i)">
                <h3>{{ item.label }}</h3>
                <span>{{ item.name }}</span>
            </div>
        </div>
        <el-dialog class="m-dialog" :visible.sync="visible" width="840px">
            <div slot="title" class="dialog-title">
                <span class="u-label">{{ showData.label }}</span>
                <span>{{ showData.name }}</span>
            </div>
            <div class="u-content" v-html="showData.desc"></div>
        </el-dialog>
    </div>
</template>

<script>
import jbsci from "@/assets/data/jbsci.json";
export default {
    name: "sciFooter",
    props: ["data"],
    data: function () {
        return {
            slider: [],
            jbsci,
            active: 0,
            visible: false,
        };
    },
    computed: {
        linkKey() {
            return this.$route.params.key;
        },
        showData() {
            return this.jbsci[this.active];
        },
    },
    methods: {
        change(i) {
            this.visible = true;
            this.active = i;
        },
    },
};
</script>
<style lang="less">
.m-footer {
    .flex;
    .h(70px);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    &.index {
        .wp {
            .w(100%);
        }
    }
    .wp {
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
.m-dialog {
    .el-dialog__header {
        .pt(40px);
    }
    .dialog-title {
        .flex;
        .fz(24px);
        color: #000;
        flex-direction: column;
        align-items: center;
        .u-label {
            .fz(20px);
            color: #ba9624;
        }
    }
    .u-content {
        .w(760px);
        .auto(x);
        .scrollbar;
        overflow: auto;
        min-height: 120px;
        max-height: 240px;
    }
}
</style>
