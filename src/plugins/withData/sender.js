import noop from 'lodash/fp/noop'
import { CancelToken } from 'axios'
export default class Sender {
  constructor(vm, key, options) {
    this.vm = vm
    this.key = key
    this.options = Object.assign({}, options)
    this._variables = null
    this._watchers = []
    this._destroyed = false
    this._loading = false
    this._data = null
    this._error = null
    this.cancelToken = CancelToken.source()
    if (vm.$data.$withData && !vm.$data.$withData.senders[key]) {
      vm.$set(vm.$data.$withData.senders, key, {
        loading: false,
        data: null,
        error: null,
        send: this.send,
      })
    }
    this.init()
  }
  init() {
    if (typeof this.options.variables === 'function') {
      this.addVariablesWatcher()
    } else {
      this._variables = this.options.variables
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
      if (this.options.onComplete) {
        this.options.onComplete(this.data)
      }
    } catch (err) {
      errorHandler(err)
      this.error = err
    }
  }
  send() {
    if (!this._skip) {
      this.stop()
      this.start()
    }
  }
  variablesChanged(value, oldValue) {
    console.log('VARIABLES: ', this.value)
    if (value !== oldValue) {
      this._variables = value
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
  stop() {
    for (const unwatch of this._watchers) {
      unwatch()
    }
  }
  destroy() {
    if (this._destroyed) return
    this._destroyed = true
    this.stop()
    if (this._variablesWatcher) this._variablesWatcher()
    if (this.cancelToken) this.cancelToken.cancel()
  }
  get loading() {
    return this.vm.$data.$withData && this.vm.$data.$withData.senders[this.key]
      ? this.vm.$data.$withData.senders[this.key].loading
      : this._loading
  }
  set loading(val) {
    if (this._loading !== val) {
      this._loading = val
      if (
        this.vm.$data.$withData &&
        this.vm.$data.$withData.senders[this.key]
      ) {
        this.vm.$data.$withData.senders[this.key].loading = val
      }
    }
  }
  get data() {
    return this.vm.$data.$withData && this.vm.$data.$withData.senders[this.key]
      ? this.vm.$data.$withData.senders[this.key].data
      : this._data
  }
  set data(val) {
    if (this._data !== val) {
      this._data = val
      if (
        this.vm.$data.$withData &&
        this.vm.$data.$withData.senders[this.key]
      ) {
        this.vm.$data.$withData.senders[this.key].data = val
      }
    }
  }
  get error() {
    return this.vm.$data.$withData && this.vm.$data.$withData.senders[this.key]
      ? this.vm.$data.$withData.senders[this.key].data
      : this._error
  }
  set error(val) {
    if (this._error !== val) {
      this._error = val
      if (
        this.vm.$data.$withData &&
        this.vm.$data.$withData.senders[this.key]
      ) {
        this.vm.$data.$withData.senders[this.key].error = val
      }
    }
  }
}
