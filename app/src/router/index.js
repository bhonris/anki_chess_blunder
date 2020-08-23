import Router from "vue-router"
import Vue from "vue"
import Home from "@/components/Home"
import Main from "@/components/Main"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{path: "/", name: "home", component: Home},
        {path: "/main", name: "main", component: Main}]
})