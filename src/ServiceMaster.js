'use strict'

const Services = [
  require('./services/StravaService'),
  require('./services/RwgpsService'),
  require('./services/KomootService'),
]
let ServiceMap = {}

for (let service of Services) {
  ServiceMap[service.serviceName] = service
}

var getAllRoutes = function() {
  let allRoutes = []
  for (let service of Services) {
    allRoutes.push(...service.routes)
  }
  return allRoutes
}

var getAllUniqueRoutes = function() {
  let allRoutes = getAllRoutes()
  let uniqueRoutes = [...new Set(allRoutes)]
  return uniqueRoutes
}

var getAllUserRoutes = function(userId) {
  let allUserRoutes = []
  for (let service of Services) {
    allUserRoutes.push(...service.getUserRoutes(userId))
  }
  return allUserRoutes
}

var getUserRoutesByService = function(userId, serviceNames) {
  if (serviceNames == null) {
    throw new ReferenceError(
      'serviceNames undefined: pass array of serviceNames'
    )
  }

  let userRoutes = []
  for (let serviceName of serviceNames) {
    let service = ServiceMap[serviceName]

    if (!service) {
      throw new ReferenceError(`Service: ${serviceName} not defined`)
    }

    userRoutes.push(...service.getUserRoutes(userId))
  }
  return userRoutes
}

exports.getAllRoutes = getAllRoutes
exports.getAllUniqueRoutes = getAllUniqueRoutes
exports.getAllUserRoutes = getAllUserRoutes
exports.getUserRoutesByService = getUserRoutesByService
