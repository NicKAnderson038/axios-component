import Fetcher from './fetcher'
import Sender from './sender'

export class WithData {
  constructor(vm) {
    this.vm = vm
    this.fetchers = {}
    this.senders = {}
  }
  addFetcher(key, options) {
    this.fetchers[key] = new Fetcher(this.vm, key, options, true)
  }
  addSender(key, options) {
    this.senders[key] = new Sender(this.vm, key, options)
  }
  destroy() {
    for (let key in this.fetchers) {
      this.fetchers[key].destroy()
    }
  }
}
