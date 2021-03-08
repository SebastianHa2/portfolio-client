import { createApp } from 'vue'
import App from './App.vue'

import MainPage from './components/MainPage.vue'

const app = createApp(App)

app.component('main-page', MainPage)

app.mount('#app')
