import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// layouts
import Default from './layouts/Default';
import Admin from './layouts/Admin';
// default pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Buying from './pages/Buying';
import Delivery from './pages/Delivery';
import Guarantee from './pages/Guarantee';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
import SingleProduct from './pages/SingleProduct';
import ModelPage from './pages/ModelPage';
import Contacts from './pages/Contacts';
// models info pages
import Scania from './pages/models/Scania';
import Man from './pages/models/Man';
import Mercedes from './pages/models/Mercedes';
import Iveco from './pages/models/Iveco';
import Daf from './pages/models/Daf';
import Renault from './pages/models/Renault';
import Volvo from './pages/models/Volvo';
import Kamaz from './pages/models/Kamaz';

// admin pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Categories from './pages/admin/Categories';
import Posts from './pages/admin/Posts';
import GuaranteeAdmin from './pages/admin/Guarantee';
import DeliveryAdmin from './pages/admin/Delivery';
import BuyingAdmin from './pages/admin/Buying';
import ProductModels from "./pages/admin/ProductModels";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Default,
            children: [
                {
                    path: '',
                    name: 'default',
                    component: Home
                },
                {
                    path: '/shop',
                    name: 'shop',
                    component: Shop
                },
                {
                    path: '/buying',
                    name: 'buying',
                    component: Buying
                },
                {
                    path: '/delivery',
                    name: 'delivery',
                    component: Delivery
                },
                {
                    path: '/guarantee',
                    name: 'guarantee',
                    component: Guarantee
                },
                // {
                //     path: '/blog',
                //     name: 'blog',
                //     component: Blog
                // },
                // {
                //     path: '/blog/:article',
                //     name: 'blogpost',
                //     component: BlogPost
                // },
                {
                    path: '/contacts',
                    name: 'contacts',
                    component: Contacts
                },
                {
                    path: '/product/:id',
                    name: 'singleProduct',
                    component: SingleProduct
                },
                {
                    path: '/model/Scania',
                    name: 'Scania',
                    component: Scania
                },
                {
                    path: '/model/Man',
                    name: 'Man',
                    component: Man
                },
                {
                    path: '/model/Mercedes',
                    name: 'Mercedes',
                    component: Mercedes
                },
                {
                    path: '/model/Iveco',
                    name: 'Iveco',
                    component: Iveco
                },
                {
                    path: '/model/Daf',
                    name: 'Daf',
                    component: Daf
                },
                {
                    path: '/model/Renault',
                    name: 'Renault',
                    component: Renault
                },
                {
                    path: '/model/Volvo',
                    name: 'Volvo',
                    component: Volvo
                },
                {
                    path: '/model/Kamaz',
                    name: 'Kamaz',
                    component: Kamaz
                },
                
                // {
                //     path: '/model/:model',
                //     name: 'modelPage',
                //     component: ModelPage
                // }

            ]
        },
        {
            path: '/admin',
            component: Admin,
            redirect: '/admin/dashboard',
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: Dashboard,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'products/:id',
                    name: 'single-products',
                    component: SingleProduct,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'products',
                    name: 'products',
                    component: Products,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'categories',
                    name: 'categories',
                    component: Categories,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'models',
                    name: 'models',
                    component: ProductModels,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'posts',
                    name: 'posts',
                    component: Posts,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'guarantee',
                    name: 'guarantee',
                    component: GuaranteeAdmin,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'delivery',
                    name: 'delivery',
                    component: DeliveryAdmin,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: 'buying',
                    name: 'buying',
                    component: BuyingAdmin,
                    meta: {
                        requiresAuth: true
                    }
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // if no token
        if (localStorage.getItem('bigStore.jwt') === null) {
            next({ path: '/admin/login' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
