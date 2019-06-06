
export default {
    path:'/FP',
    name:"FP",
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
        }
    ]
}