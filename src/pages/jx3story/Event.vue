<template>
    <div class="jx3story-event-content p-event-main">
        <!-- 灯笼 -->
        <div class="lantern-group">
            <Lantern
                to="/event"
                :top="68"
                :left="44"
                lanternPath="main/main__lantern1.png"
                textPath="main/main__texttrans_event.png"
                alt="灯笼1"
                textAlt="内容活动"
            />
            <Lantern
                to="/article"
                :top="274"
                :left="136"
                lanternPath="main/main__lantern2.png"
                textPath="main/main__texttrans_article.png"
                alt="灯笼2"
                textAlt="文字赏析"
            />
        </div>

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
import Lantern from "./components/Lantern.vue";
import { getEventAc } from "@/service/jx3story";

export default {
    name: "jx3storyEvent",
    inject: ["__imgRoot"],
    components: {
        Lantern,
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
