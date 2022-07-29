import {createApp} from "vue";

import {createWebHistory, createRouter} from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/PageAuth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/AdminDashboard.vue";
import Settings from "@/views/admin/AdminSettings.vue";
import Tables from "@/views/admin/AdminTables.vue";
import Maps from "@/views/admin/AdminMaps.vue";

// views for Auth layout

import Login from "@/views/auth/AuthLogin.vue";
import Register from "@/views/auth/AuthRegister.vue";

// views without layouts

import Landing from "@/views/PageLanding.vue";
import Profile from "@/views/PageProfile.vue";
import Index from "@/views/PageIndex.vue";

// cv
import Cv1 from "@/cv/CvTemplate.vue"
import CvAdmin from "@/CvAdmin.vue"

// routes

const routes = [
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: Admin,
        children: [
            {
                path: "/admin/dashboard",
                component: Dashboard,
            },
            {
                path: "/admin/settings",
                component: Settings,
            },
            {
                path: "/admin/tables",
                component: Tables,
            },
            {
                path: "/admin/maps",
                component: Maps,
            },
        ],
    },
    {
        path: "/auth",
        redirect: "/auth/login",
        component: Auth,
        children: [
            {
                path: "/auth/login",
                component: Login,
            },
            {
                path: "/auth/register",
                component: Register,
            },
        ],
    },
    {
        path: "/index",
        component: Index,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/",
        component: Landing,
    },
    {
        path: "/cv1",
        component: Cv1,
    },
    {
        path: "/cv_admin",
        component: CvAdmin,
    },
    {path: "/:pathMatch(.*)*", redirect: "/"},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

const app = createApp(App).use(router);
if (process.env.NODE_ENV === 'development') {
    app.config.performance = true;
}
app.mount("#app");
global.app_vue = app;
