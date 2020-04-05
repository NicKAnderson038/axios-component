export default class WithDataProvider {
  constructor(options) {
    this.client = options.client
    this.onError = options.onError
  }
}
