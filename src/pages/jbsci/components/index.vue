<template>
    <div class="index">
        <el-carousel height="680px">
            <el-carousel-item v-for="(item, i) in slider" :key="i">
                <a :href="item.link" target="_blank">
                    <el-image :src="item.img" fit="fill"></el-image>
                </a>
            </el-carousel-item>
        </el-carousel>
        <div class="footer">
            <div class="u-item" v-for="(item, i) in footer" :key="i">
                <h3>{{ item.label }}</h3>
                <span>{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
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
    watch: {
        data: {
            deep: true,
            immediate: true,
            handler: function ({ slider }) {
                if (slider) {
                    this.slider = slider;
                }
            },
        },
    },
};
</script>
<style lang="less">
.index {
    .el-carousel__indicators--horizontal {
        left: 20px;
    }
    .el-carousel__indicator--horizontal .el-carousel__button {
        .size(10px);
        .r(50%);
        background: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        opacity: 0.3;
    }
    .el-carousel__indicator--horizontal.is-active .el-carousel__button {
        .size(10px);
        .r(50%);
        background: #ba9624;
        border: 1px solid #ba9624;
        opacity: 1;
    }
    .footer {
        .flex;
        .h(70px);
        padding: 0 20px;
        box-sizing: border-box;
        gap: 20px;
        align-items: center;
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
}
</style>
