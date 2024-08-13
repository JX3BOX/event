import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("./Index.vue");
const Detail = () => import("./Detail.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Index },
    { name: "detail", path: "/detail", component: Detail },
];

const router = new VueRouter({
    routes,
});

export default router;
