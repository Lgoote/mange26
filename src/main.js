import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import ElementUI from 'element-ui'; // js
import 'element-ui/lib/theme-chalk/index.css';//css
Vue.use(ElementUI); // vue的插件

// 公共的css样式
import './assets/statics/site/css/style.css'
Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://111.230.232.110:8899/';


import index from './components/01.index.vue'
import login from './components/02.login.vue'
import detail from './components/03.detail.vue'

import userCenter from './components/04.userCenter.vue'
import userCenterOrder from './components/05.userCenterOrder.vue'
import userCenterIndex from './components/06.userCenterIndex.vue'
import userCenterOrderDetail from './components/07.userCenterOrderDetail.vue'

import shoppingCar from './components/08.shoppingCar.vue'
import payment from './components/09.payment.vue'

new Vue({

  router: new VueRouter({
    routes:[
      {
        path:'',
        redirect:'./index'
      },{
        path:'/index',
        component:index 
      },{
        path:'/login',
        component:login,
      },{
        path:'/detail/:id',
        component:detail,
      },{
        path:'/userCenter',
        component:userCenter,
        children:[
          {
            path:'',
            redirect:'index'
          },{
            path:'index',
            component:userCenterIndex
          },{
            path:'order',
            component:userCenterOrder
          },{
            path:'orderDetail',
            component:userCenterOrderDetail
          }
        ]
      },{
        path:'/shoppingCar',
        component:shoppingCar,
      },{
        path:'/payment',
        component:payment
      }
    ]
  }),

  render: h => h(App),
}).$mount('#app')