import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("./Index.vue");
const Event = () => import("./Event.vue");
const Article = () => import("./Article.vue");
const Vote = () => import("./Vote.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Index },
    { name: "event", path: "/event", component: Event },
    { name: "article", path: "/article", component: Article },
    { name: "vote", path: "/vote", component: Vote },
];

const router = new VueRouter({
    routes,
});

export default router;
