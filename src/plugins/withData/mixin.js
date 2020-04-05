function initProvider() {
  const options = this.$options
  const provider = options.withDataProvider
  if (provider) {
    this.$withDataProvider = provider
  } else if (options.parent && options.parent.$withDataProvider) {
    this.$withDataProvider = options.parent.$withDataProvider
  }
}
function launch() {
  if (this._isLaunched) return
  this._isLaunched = true
  let withData = this.$options.withData
  if (withData) {
    if (withData.fetchers) {
      for (let key in withData.fetchers) {
        const options = withData.fetchers[key]
        this.$withData.addFetcher(key, options)
      }
    }
    if (withData.senders) {
      for (let key in withData.senders) {
        const options = withData.senders[key]
        this.$withData.addSender(key, options)
      }
    }
  }
}
function destroy() {
  if (this.$_withData) {
    this.$_withData.destroy()
  }
}
export function installMixin(Vue) {
  Vue.mixin({
    data() {
      return {
        $withData: {
          fetchers: {},
          senders: {},
        },
      }
    },
    beforeCreate() {
      initProvider.call(this)
    },
    created: launch,
    destroyed: destroy,
  })
}
