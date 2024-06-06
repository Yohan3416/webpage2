// import { createRouter ,createWebHistory} from "vue-router";

// const routes = [
//     {
//         path:"",
//         component: () => import("../components/Home.vue"),
//     },
//     {
//         path:"/home",
//         component: () => import("../components/Home.vue"),
//     },
//     {
//         path:"/guide",
//         component: () => import("../components/Guide.vue"),
//         children: [
//             {
//                 path:"" ,
//                 component: () => import("../Views/GuideContentDesign.vue")
//              },
//             {
//                path:"design" ,
//                component: () => import("../Views/GuideContentDesign.vue")
//             },
//             {
//                 path:"install" ,
//                 component: () => import("../Views/GuideContentInstall.vue")
//              },
//              {
//                 path:"begin" ,
//                 component: () => import("../Views/GuideContentBegin.vue")
//              },
//              {
//                 path:"dark" ,
//                 component: () => import("../Views/GuideContentDark.vue")
//              }
//         ]
      
//     },
//     {
//         path:"/tool",
//         component: () => import("../components/Tool.vue"),
//         children: [
//             {
//                 path:"" ,
//                 component: () => import("../Views/ToolButton.vue")
//              },
//              {
//                 path:"button" ,
//                 component: () => import("../Views/ToolButton.vue")
//              },
//              {
//                 path:"input" ,
//                 component: () => import("../Views/ToolInput.vue")
//              },
//              {
//                 path:"link" ,
//                 component: () => import("../Views/ToolLink.vue")
//              },
//              {
//                 path:"switch" ,
//                 component: () => import("../Views/ToolSwitch.vue")
//              },
//              {
//                 path:"image" ,
//                 component: () => import("../Views/ToolImages.vue")
//              }
//         ]
        
//     },
//     {
//         path:"/other",
//         component: () => import("../components/Other.vue")
        
//     }

// ]

// const router = createRouter({
//     history:createWebHistory(),
//     routes
// });


// export default router
import { createRouter ,createWebHistory} from "vue-router";

const routes = [];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
