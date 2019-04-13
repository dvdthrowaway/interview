const Service = require('./Service')
class RwgpsService extends Service {
  static getUserRoutes(userId) {
    if (userId == null) {
      throw new ReferenceError('UserId is null or undefined, pass a value')
    }
    return this.routes.map(route => route + userId)
  }
}

RwgpsService._routes = ['CVT', 'Perkiomen', 'Welsh Mountain']
RwgpsService._serviceName = 'RWGPS'

module.exports = RwgpsService
