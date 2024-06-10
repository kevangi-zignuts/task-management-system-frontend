import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faListCheck, faEye, faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faListCheck, faEye, faPenToSquare, faTrash, faPlus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
