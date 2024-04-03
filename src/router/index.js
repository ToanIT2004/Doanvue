import { createRouter, createWebHistory} from 'vue-router';
import adminRoutes from './admin.js'

const routes = [...adminRoutes];

const router = createRouter({
   history: createWebHistory(), 
   routes
})

export default router;
