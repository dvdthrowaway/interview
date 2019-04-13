const Service = require('./Service')
class StravaService extends Service {
  static getUserRoutes(userId) {
    if (userId == null) {
      throw new ReferenceError('UserId is null or undefined, pass a value')
    }
    return this.routes.map(route => userId + route)
  }
}

StravaService._routes = ['SRT', 'CVT', 'Perkiomen']
StravaService._serviceName = 'Strava'

module.exports = StravaService
