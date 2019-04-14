class Service {
  static getUserRoutes(userId) {
    if (userId == null) {
      throw new ReferenceError('UserId is null or undefined, pass a value')
    }

    return this.routes.map(route => this.formatUserRoute(route, userId))
  }

  static formatUserRoute() {
    throw new TypeError('Implement formatUserRoute')
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
