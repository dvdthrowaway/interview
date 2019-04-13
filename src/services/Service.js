class Service {
  static getUserRoutes(userId) {
    throw new TypeError('Implment getUserRoutes')
  }

  static get routes() {
    if (!this._routes) {
      throw new TypeError('Specify Routes For ' + this.name)
    }

    return this._routes
  }

  static get serviceName() {
    if (!this._serviceName) {
      throw new TypeError('Specify Name For ' + this.name)
    }

    return this._serviceName
  }
}

module.exports = Service
