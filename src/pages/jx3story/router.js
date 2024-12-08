import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Index",
            component: () => import("./Index.vue"),
        },
        {
            path: "/event",
            name: "Event",
            component: () => import("./Event.vue"),
        },
        {
            path: "/article",
            name: "Article",
            component: () => import("./Article.vue"),
        },
        {
            path: "/vote",
            name: "Vote",
            component: () => import("./Vote.vue"),
        },
    ],
});

export default router;
