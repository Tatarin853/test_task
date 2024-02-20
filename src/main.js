import { createApp } from 'vue'
import App from './App.vue'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

createApp(App).mount('#app')


// Use plugin defaults (optional)
App.use(setupCalendar, {})

// Use the components
App.component('VCalendar', Calendar)
App.component('VDatePicker', DatePicker)