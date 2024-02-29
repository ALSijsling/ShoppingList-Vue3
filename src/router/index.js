import { createRouter, createWebHistory } from 'vue-router'
import Home from './../pages/groceries/Overview.vue'
import Create from './../pages/groceries/Create.vue'
import Edit from './../pages/groceries/Edit.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/create', name: 'Create', component: Create},
        {path: '/edit', name: 'Edit', component: Edit}
    ]
})

export default router