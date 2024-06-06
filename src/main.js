// import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import App from './App.vue'
// import router from './router'
// const app = createApp(App)
// // import Navbar from './components/Navbar.vue'

// app.use(ElementPlus)
// app.use(router).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'prismjs'
import 'prismjs/themes/prism.css'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/github.css'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs';

// import Navbar from './components/Navbar.vue'

const app = createApp(App);
app.use(router);

const dynamicRoutes = [
    {
        path: "",
        component: () => import("./Views/Home.vue"),
    },
    {
        path: "/home",
        component: () => import("./Views/Home.vue"),
    },
    {
        path: "/guide",
        component: () => import("./components/Guide.vue"),
        children: [
            {
                path: "",
                component: () => import("./Views/GuideContentInstall.vue")
            },
            {
                path: "install",
                component: () => import("./Views/GuideContentInstall.vue")
            },
            {
                path: "begin",
                component: () => import("./Views/GuideContentBegin.vue")
            }
        ]
    },
    {
        path: "/tool",
        component: () => import("./components/Tool.vue"),
        children: [
            {
                path: "",
                component: () => import("./Views/ToolButton.vue")
            },
            {
                path: "button",
                component: () => import("./Views/ToolButton.vue")
            },
            {
                path: "form",
                component: () => import("./Views/ToolForm.vue")
            },
            {
                path: "nav",
                component: () => import("./Views/ToolNav.vue"),
                children:[
                    {
                        path:"",
                        component: () => import("./testcomponents/testHome.vue")
                    },
                    {
                        path:"home",
                        component: () => import("./testcomponents/testHome.vue")
                    },
                    {
                        path:"about",
                        component: () => import("./testcomponents/testAbout.vue")
                    },
                    {
                        path:"contact",
                        component: () => import("./testcomponents/testContact.vue")
                    }
                ]
            },
            {
                path: "switch",
                component: () => import("./Views/ToolSwitch.vue")
            },
            {
                path: "serachbox",
                component: () => import("./Views/ToolSearchBox.vue")
            },
            {
                path: "usercard",
                component: () => import("./Views/TooluserCard.vue")
            },
            {
                path: "dropDown",
                component: () => import("./Views/TooldropDown.vue")
            }
        ]
    },
    {
        path: "/other",
        component: () => import("./components/Other.vue")
    }

];

dynamicRoutes.forEach(route => {
    router.addRoute(route);
});

app.use(ElementPlus)
app.use(router).mount('#app')