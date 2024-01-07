<template>
    <transition name="fade">
        <div class="m-mark" @click="close" :class="{ click }">
            <h2 class="p-animation" v-animate="'bounceIn'">JX3BOX SCIENCE CITATION INDEX</h2>
            <h3 class="p-animation" v-animate="'bounceIn2'">探索 JBSCI <i class="el-icon-right"></i></h3>
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
    directives: {
        animate: {
            inserted: function (el, binding) {
                binding.addClass = () => {
                    const { top } = el.getBoundingClientRect();
                    const h = document.documentElement.clientHeight || document.body.clientHeight;
                    if (top < h) {
                        if (el.className.indexOf(binding.value) == -1) {
                            el.className = binding.value + " " + el.className;
                        }
                        if (binding.addClass) {
                            window.removeEventListener("scroll", binding.addClass);
                        }
                    }
                };
                window.addEventListener("scroll", binding.addClass, true);
                binding.addClass();
            },
            unbind: function (el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
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
.m-mark {
    .pf;
    .lt(0,0);
    .full;
    .z(9);
    .flex;
    padding: 0;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    // gap: 165px;
    color: #fff;
    background: #000;
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
.p-animation {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
}
.bounceIn2 {
    -webkit-animation-name: bounceIn2;
    animation-name: bounceIn2;
}
@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.5) translateY(85px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(-65px);
    }
}
@keyframes bounceIn2 {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(100px);
    }
}
</style>
