<template>
    <div class="jx3story-event-content p-event-main">
        <!-- 灯笼 -->
        <RightLantern />

        <!-- logo -->
        <router-link class="mini-slogan" to="/" @click.native="handleClick">
            <img class="event__sign" :src="getImgUrl('/eventcontent/eventc__sign.png')" alt="活动标志" />
        </router-link>

        <div class="m-main">
            <div class="m-content" v-html="content"></div>
        </div>
    </div>
</template>

<script>
import RightLantern from "./components/RightLantern.vue";
import { getEventAc } from "@/service/jx3story";

export default {
    name: "jx3storyEvent",
    inject: ["__imgRoot"],
    components: {
        RightLantern,
    },
    data() {
        return {
            content: "",
            ac_id: 92980,
        };
    },
    methods: {
        getImgUrl(name) {
            return this.__imgRoot + name;
        },
        handleClick() {
            this.$router.push("/").catch((err) => {
                if (err.name !== "NavigationDuplicated") {
                    throw err;
                }
            });
        },
        loadData() {
            getEventAc(this.ac_id).then((post) => {
                this.content = post;
            });
        },
    },
    mounted() {
        this.loadData();
    },
};
</script>
<style lang="less">
@import "../../assets/css/jx3story/event.less";
</style>
