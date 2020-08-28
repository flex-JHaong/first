import Index from "../components/Index";
import Login from "../components/Login";
import Register from "../components/Register";
import Hot from "../components/index/Hot";

import Recommend from '../components/index/Recommend'
import Search from '../components/index/Search'


const routesdata=[
    {
        path:'/login',
        component:Login,
        exact:false,
        needlogin:false
    },
    {
        path:'/register',
        component:Register,
        exact:false,
        needlogin:false
    },
    {
        path:'/songlist/:id',
        component:Hot,
        exact:false,
        needlogin:false
    },
    {
        path:'/',
        component:Index,
        exact:false,
        // 值为true  要登录后才能进入该路由
        needlogin:false,
        children:[
            {
                path:'/recommend',
                component:Recommend,
                exact:false 
            },
            {
                path:'/hot',
                component:Hot,
                exact:false 
            },
            {
                path:'/search',
                component:Search,
                exact:false 
            },
            {
                path:'*',
                redirect:'/recommend'
            }

        ]
    },
   
]

export default routesdata;