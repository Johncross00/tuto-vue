import About from "./pages/About.vue";
import Blog from "./pages/Blog.vue";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";

export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    // { path: '/:pathMatch(.*)*', redirect: '/' },
    { path: '/:pathMatch(.*)*', component: NotFound }

] 