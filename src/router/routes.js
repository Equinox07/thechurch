import HomeLayout from '../layouts/HomeLayout.vue';
import HomePage from '../pages/HomePage.vue';
import Videos from '../pages/Videos.vue'


const routes = [
    {
        path: '/', component: HomeLayout,
        children: [
            {
                path: '',
                component: HomePage,
                name: 'homepage'
            },
            {
                path : '/videos',
                component : Videos,
                name: 'videos'
            }
        ]
    }
]


export default routes;
