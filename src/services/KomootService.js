const Service = require('./Service')

class KomootService extends Service {
  static formatUserRoute(route, userId) {
    return userId + route + userId
  }
}

KomootService._routes = ['SRT', 'Welsh Mountain', 'Oaks to Philly']
KomootService._serviceName = 'Komoot'

module.exports = KomootService
