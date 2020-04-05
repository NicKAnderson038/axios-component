import noop from 'lodash/fp/noop'
import { CancelToken } from 'axios'
export default class Fetcher {
  constructor(vm, key, options) {
    this.vm = vm
    this.key = key
    this.options = Object.assign({}, options)
    this._skip = true
    this._variables = null
    this._pollingInterval = this.options.pollingInterval
    this._watchers = []
    this._destroyed = false
    this._loading = false
    this._data = null
    this._error = null
    this._poll = null
    this.cancelToken = CancelToken.source()
    this.init()
    if (vm.$data.$withData && !vm.$data.$withData.fetchers[key]) {
      vm.$set(vm.$data.$withData.fetchers, key, {
        loading: false,
        data: null,
        error: null,
        refetch: this.refetch,
      })
    }
  }
  init() {
    if (typeof this.options.variables === 'function') {
      this.addVariablesWatcher()
    } else {
      this._variables = this.options.variables
    }
    if (typeof this.options.skip === 'function') {
      this.addSkipWatcher()
    } else if (!this.options.skip) {
      this._skip = false
      this.start()
    } else {
      this._skip = true
    }
  }
  async start() {
    this.error = null
    this.loading = true
    await this.execute()
    this.loading = false
  }
  async execute() {
    const { client, onError } = this.vm.$withDataProvider
    const errorHandler = this.options.onError || onError || noop
    try {
      const data = await client(
        this.options.query(this._variables),
        this.cancelToken.token
      )
      this.data = data.data
      if (this._pollingInterval) {
        this.startPolling()
      }
      if (this.options.onComplete) {
        this.options.onComplete(this.data)
      }
    } catch (err) {
      errorHandler(err)
      this.error = err
    }
  }
  refetch() {
    if (!this._skip) {
      this.stop()
      this.start()
    }
  }
  startPolling() {
    clearTimeout(this._poll)
    const self = this
    this._poll = setTimeout(() => {
      self.startPolling()
      self.execute()
    }, this._pollingInterval)
  }
  skipChanged(value, oldValue) {
    if (value !== oldValue) {
      this.skip = value
    }
  }
  addSkipWatcher() {
    this._skipWatcher = this.vm.$watch(
      () => this.options.skip.call(this.vm, this.vm, this.key),
      this.skipChanged.bind(this),
      {
        immediate: true,
        deep: this.options.deep,
      }
    )
  }
  variablesChanged(value, oldValue) {
    if (value !== oldValue) {
      this.variables = value
    }
  }
  addVariablesWatcher() {
    this._variablesWatcher = this.vm.$watch(
      () => this.options.variables.call(this.vm, this.vm, this.key),
      this.variablesChanged.bind(this),
      {
        immediate: true,
        deep: this.options.deep,
      }
    )
  }
  set skip(value) {
    if (value) {
      this.stop()
    } else {
      this.start()
    }
    this._skip = value
  }
  set variables(value) {
    this._variables = value
    if (!this._skip && value) {
      this.start()
    }
  }
  stop() {
    clearTimeout(this._poll)
    for (const unwatch of this._watchers) {
      unwatch()
    }
  }
  destroy() {
    if (this._destroyed) return
    this._destroyed = true
    this.stop()
    if (this._skipWatcher) this._skipWatcher()
    if (this._variablesWatcher) this._variablesWatcher()
    if (this.cancelToken) this.cancelToken.cancel()
  }
  get loading() {
    return this.vm.$data.$withData && this.vm.$data.$withData.fetchers[this.key]
      ? this.vm.$data.$withData.fetchers[this.key].loading
      : this._loading
  }
  set loading(val) {
    if (this._loading !== val) {
      this._loading = val
      if (
        this.vm.$data.$withData &&
        this.vm.$data.$withData.fetchers[this.key]
      ) {
        this.vm.$data.$withData.fetchers[this.key].loading = val
      }
    }
  }
  get data() {
    return this.vm.$data.$withData && this.vm.$data.$withData.fetchers[this.key]
      ? this.vm.$data.$withData.fetchers[this.key].data
      : this._data
  }
  set data(val) {
    if (this._data !== val) {
      this._data = val
      if (
        this.vm.$data.$withData &&
        this.vm.$data.$withData.fetchers[this.key]
      ) {
        this.vm.$data.$withData.fetchers[this.key].data = val
      }
    }
  }
  get error() {
    return this.vm.$data.$withData && this.vm.$data.$withData.fetchers[this.key]
      ? this.vm.$data.$withData.fetchers[this.key].data
      : this._error
  }
  set error(val) {
    if (this._error !== val) {
      this._error = val
      if (
        this.vm.$data.$withData &&
        this.vm.$data.$withData.fetchers[this.key]
      ) {
        this.vm.$data.$withData.fetchers[this.key].error = val
      }
    }
  }
}
