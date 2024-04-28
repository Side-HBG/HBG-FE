import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {   //로그인 컴포넌트 추가
            path: '/',
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
            name: 'MainPage',
            component: () => import("@/views/common/MainPage.vue"),
        },
    ],
});

export default router;