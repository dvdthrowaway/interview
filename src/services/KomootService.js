const Service = require('./Service')
class KomootService extends Service {
  static getUserRoutes(userId) {
    if (userId == null) {
      throw new ReferenceError('UserId is null or undefined, pass a value')
    }
    return this.routes.map(route => userId + route + userId)
  }
}

KomootService._routes = ['SRT', 'Welsh Mountain', 'Oaks to Philly']
KomootService._serviceName = 'Komoot'

module.exports = KomootService
