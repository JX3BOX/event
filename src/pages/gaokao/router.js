import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("./Index.vue");

Vue.use(VueRouter);

const routes = [{ name: "index", path: "/:year?", component: Index }];

const router = new VueRouter({
    routes,
}); 

export default router;
