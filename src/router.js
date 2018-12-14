import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: {name: 'index'},
      children: [
        {
          path: 'index',
          name: '首页',
          meta: {
            initCrumb: true
          },
          component: Index
        },
        {
          path: 'index/withdraw',
          name: '提现',
          component: () => import(/* webpackChunkName: "withdraw" */ './views/IndexWithdraw.vue')
        },
        {
          path: 'bill',
          name: '账单',
          meta: {
            initCrumb: true
          },
          component: () => import(/* webpackChunkName: "bill" */ './views/Bill.vue')
        },
        {
          path: 'app',
          name: '应用',
          meta: {
            initCrumb: true
          },
          component: () => import(/* webpackChunkName: "apps" */ './views/Apps.vue')
        },
        {
          path: 'app/create',
          name: '创建应用',
          component: () => import(/* webpackChunkName: "createApp" */ './views/AppCreate.vue')
        },
        {
          path: 'msg',
          name: '消息中心',
          meta: {
            initCrumb: true
          },
          component: () => import(/* webpackChunkName: "msgCenter" */ './views/MsgCenter.vue')
        },
        {
          path: 'shop',
          name: '商户中心',
          meta: {
            initCrumb: true
          },
          component: () => import(/* webpackChunkName: "shopCenter" */ './views/ShopCenter.vue')
        },
        {
          path: 'shop/info',
          name: '商户信息',
          component: () => import(/* webpackChunkName: "shopInfo" */ './views/ShopInfo.vue')
        },
        {
          path: 'shop/info/detail',
          name: '查看详情',
          component: () => import(/* webpackChunkName: "shopInfoDetail" */ './views/ShopInfoDetail.vue')
        },
        {
          path: 'shop/withdraw',
          name: '提现记录',
          component: () => import(/* webpackChunkName: "shopWithdrawRecord" */ './views/ShopWithdrawalRecord.vue')
        },
        {
          path: 'shop/signed',
          name: '签约信息',
          component: () => import(/* webpackChunkName: "shopSignedInfo" */ './views/ShopSignedInfo.vue')
        },
        {
          path: 'shop/card',
          name: '提现银行卡',
          component: () => import(/* webpackChunkName: "shopCard" */ './views/ShopCard.vue')
        },
        {
          path: 'shop/phone',
          name: '绑定手机',
          component: () => import(/* webpackChunkName: "shopPhone" */ './views/ShopPhone.vue')
        },
        {
          path: 'shop/paymentPwd',
          name: '支付密码',
          component: () => import(/* webpackChunkName: "shopPaymentPwd" */ './views/ShopPaymentPwd.vue')
        },
        {
          path: 'shop/loginPwd',
          name: '登录密码',
          component: () => import(/* webpackChunkName: "shopLoginPwd" */ './views/ShopLoginPwd.vue')
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    // {
    //   path: '/index'
    // }
  ]
})
