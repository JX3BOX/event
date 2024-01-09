<template>
    <div class="m-slider">
        <el-carousel height="680px">
            <el-carousel-item v-for="(item, i) in slider" :key="i">
                <a :href="item.link" target="_blank" class="u-item" :style="{ backgroundColor: item.color }">
                    <el-image :src="item.img" fit="cover"></el-image>
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "slider",
    props: ["data"],
    data: function () {
        return {
            slider: [],
        };
    },
    watch: {
        data: {
            deep: true,
            immediate: true,
            handler: function (slider) {
                if (slider) {
                    this.slider = slider;
                }
            },
        },
    },
};
</script>
<style lang="less">
.m-slider {
    .u-item,
    .el-image__inner {
        .db;
        .h(680px);
    }
    .u-item {
        .flex; 
        align-items: center;
        justify-content: center;
    }
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
}
</style>
