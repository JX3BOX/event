<template>
    <transition name="fade">
        <div class="index-mark" @click="close" :class="{ click }">
            <h2 class="p-animation" v-animate="'bounceIn'">JX3BOX SCIENCE CITATION INDEX</h2>
            <h3 class="p-animation" v-animate="'bounceIn'">探索 JBSCI <i class="el-icon-right"></i></h3>
        </div>
    </transition>
</template>
<script>
export default {
    name: "Mark",
    emits: ["close"],
    data: function () {
        return {
            click: false,
        };
    },

    methods: {
        close() {
            this.click = true;
            this.$emit("close");
        },
    },
};
</script>

<style lang="less">
.index-mark {
    .flex;
    padding: 74px 0 0 0;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 165px;
    color: #fff;
    background: #000;
    h2,
    h3 {
        padding: 0;
        margin: 0;
        font-weight: 400;
    }
    h2 {
        .fz(20px);
    }
    h3 {
        .pr;
        .pointer;
        .fz(16px,2);
        i {
            .pa;
            .rb(-24px,7px);
            transition: 0.3s ease-out;
        }
        &:hover {
            i {
                right: -30px;
            }
        }
    }
    &.click {
        opacity: 0;
        transition: 1s ease-out;
    }
}
</style>
