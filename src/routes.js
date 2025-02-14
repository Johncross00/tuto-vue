import About from "./pages/About.vue";
import Blog from "./pages/Blog.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";

export const routes = [
    { path: '/', component: Home , name: 'Home00' },
    { path: '/about', component: About , name: 'About00' },
    { path: '/blog', component: Blog , name: 'Blog00' },
    // { path: '/:pathMatch(.*)*', redirect: '/' },
    { path: '/:pathMatch(.*)*', component: NotFound }

] 