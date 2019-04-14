const Service = require('./Service')

class RwgpsService extends Service {
  static formatUserRoute(route, userId) {
    return route + userId
  }
}

RwgpsService._routes = ['CVT', 'Perkiomen', 'Welsh Mountain']
RwgpsService._serviceName = 'RWGPS'

module.exports = RwgpsService
