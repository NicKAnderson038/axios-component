import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import WithData from '@/plugins/withData'
import WithDataProvider from '@/plugins/withData/provider'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const withDataProvider = new WithDataProvider({
  client(query, cancelToken) {
    console.log(query)
    return axios({
      ...query,
      headers: {
        'Content-Type': 'application/json',
      },
      // headers: store.getters['config/serviceHeaders'],
      cancelToken,
    })
  },
  onError: error => {
    // store.dispatch('axiosServices/alert', error)
    console.log(error.message)
  },
})
Vue.use(WithData)

new Vue({
  router,
  store,
  withDataProvider,
  vuetify,
  render: h => h(App),
}).$mount('#app')
