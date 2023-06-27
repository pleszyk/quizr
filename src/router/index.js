import { createRouter, createWebHistory } from "vue-router";
import Quiz from "../components/Quiz.vue";
import Hero from "../components/Hero.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/quiz',
            component: Quiz
        },
        {
            path:'/',
            component: Hero
        }
    ]
})

export default router