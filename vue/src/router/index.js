import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path:'/',
            redirect: '/login'
        },
        {   //로그인 컴포넌트 추가
            path: '/login',
            name: 'Login',
            component: () => import("@/views/common/LoginMainPage.vue")
        },
        {   //회원가입
            path: '/signUp',
            name: 'signUp',
            component: () => import("@/views/common/SignUp.vue"),
        },
        {   //메인화면
            path: '/main',
            name: 'mainPage',
            component: () => import("@/views/common/MainPage.vue"),
        },
        {
          path:"/404",
          name: "notFound",
          component:() => import("@/views/common/404Error.vue"),
        },
        {
            path:"/500",
            name: "ISE",
            component:() => import("@/views/common/500Error.vue"),
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: "/404"
        }
    ],
});

export default router;