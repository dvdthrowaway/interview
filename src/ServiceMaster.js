'use strict'

const Service = require('./services/Service')

class ServiceMaster {
  constructor() {
    this._services = []
    this._serviceMap = {}
  }

  get services() {
    return this._services
  }

  get serviceMap() {
    return this._serviceMap
  }

  addService(service) {
    if (service.prototype instanceof Service) {
      if (this.services.includes(service)) {
        console.warn(`Service: ${service.serviceName} already added`)
        return this
      }
      this.services.push(service)
      this.serviceMap[service.serviceName] = service
    } else {
      throw new TypeError('service is not of Service type')
    }
    //chainable with other
    return this
  }

  getAllRoutes() {
    let allRoutes = []
    for (let service of this.services) {
      allRoutes.push(...service.routes)
    }
    return allRoutes
  }

  getAllUniqueRoutes() {
    let allRoutes = this.getAllRoutes()
    let uniqueRoutes = [...new Set(allRoutes)]
    return uniqueRoutes
  }

  getAllUserRoutes(userId) {
    let allUserRoutes = []
    for (let service of this.services) {
      allUserRoutes.push(...service.getUserRoutes(userId))
    }
    return allUserRoutes
  }

  getUserRoutesByService(userId, serviceNames) {
    if (serviceNames == null) {
      throw new ReferenceError(
        'serviceNames undefined: pass array of serviceNames'
      )
    }

    let userRoutes = []
    for (let serviceName of serviceNames) {
      let service = this.serviceMap[serviceName]

      if (!service) {
        throw new ReferenceError(`Service: ${serviceName} not defined`)
      }

      userRoutes.push(...service.getUserRoutes(userId))
    }
    return userRoutes
  }
}
ServiceMaster.singleton = new ServiceMaster()

module.exports = ServiceMaster
