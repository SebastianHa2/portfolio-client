import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import MainPage from './components/MainPage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import ContactPage from './components/ContactPage.vue'

const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect:'main', name:'home', component: App, children: [
                {
                    path: 'main', name:'main', component: MainPage
                }
            ]
        },
        {
            path: '/skills', name:'skills', component: SkillsPage
        },
        {
            path: '/projects', name:'projects', component: ProjectsPage
        },
        {
            path: '/contact', name:'contact', component: ContactPage
        }
    ]
})

app.component('main-page', MainPage)
app.component('skills-page', SkillsPage)
app.component('projects-page', ProjectsPage)
app.component('contact-page', ContactPage)

app.use(router)

app.mount('#app')
