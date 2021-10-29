import HomeLayout from '../layouts/HomeLayout.vue';
import HomePage from '../pages/HomePage.vue';


const routes = [
    {
        path: '/', component: HomeLayout,
        children: [
            {
                path: '',
                component: HomePage,
                name: 'homepage'
            }
        ]
    }
]


export default routes;
