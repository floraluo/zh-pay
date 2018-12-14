import Vue from 'vue'
import App from './App.vue'
import router from './router'
import layer from 'vue-layer'
import {VTable, VPagination} from 'vue-easytable'
// import {VTable, VPagination} from './plugins/vue-easytable/libs'
import VeeValidate from 'vee-validate'
import VeezhCN from 'vee-validate/dist/locale/zh_CN'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

Vue.prototype.$layer = layer(Vue);

//表格注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

//vee-validate表单验证插件配置
Vue.use(VeeValidate, {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {
      messages: VeezhCN.messages
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
