const Service = require('./Service')

class StravaService extends Service {
  static formatUserRoute(route, userId) {
    return userId + route
  }
}

StravaService._routes = ['SRT', 'CVT', 'Perkiomen']
StravaService._serviceName = 'Strava'

module.exports = StravaService
