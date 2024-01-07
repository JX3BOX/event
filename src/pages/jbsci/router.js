import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("./Index.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/:key?", component: Index, props: true },
];

const router = new VueRouter({
    routes,
});

export default router;