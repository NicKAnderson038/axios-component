import { WithData } from './withData'
import { installMixin } from './mixin'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Object.defineProperty(Vue.prototype, '$withData', {
    get() {
      console.log('active')
      if (!this.$_withData) {
        this.$_withData = new WithData(this)
      }
      return this.$_withData
    },
  })
  installMixin(Vue)
}
export default install
