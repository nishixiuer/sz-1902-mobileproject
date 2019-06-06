
export default {
    path:'/FP',
    name:"FP",
<<<<<<< HEAD
    component:() => import("../../views/firstpage/firstPage.vue"),
    meta:{flag:true},
    children:[
        {
            path:"/watchMovie",
            name:"watchMovie",
            component:() => import("../../components/watchMovie/watchMovie.vue"),
            meta:{
                flag:true
            }
        },
        {
            path:"/mainContent",
            name:"mainContent",
            component:() => import("../../components/main/mainContent.vue"),
            meta:{
                flag:false
            }
=======
    component:() => {"@views/firstpage/firstPage.vue"},
    children:[
        {
            path:"/watchMovie",
            name:"/watchMovie",
            component:() => {"@components/watchMovie/watchMovie.vue"}
        },
        {
            path:"/mainContent",
            name:"/mainContent",
            component:() => {"@components/main/mainContent.vue"}
>>>>>>> lqd
        }
    ]
}