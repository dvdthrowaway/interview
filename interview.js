const ServiceMaster = require('./src/ServiceMaster')

const StravaService = require('./src/services/StravaService')
const RwgpsService = require('./src/services/RwgpsService')
const KomootService = require('./src/services/KomootService')

const serviceMaster = ServiceMaster.singleton
  .addService(StravaService)
  .addService(RwgpsService)
  .addService(KomootService)

let userId = 22
let services = ['Strava','Komoot']
console.log('All Routes: ', serviceMaster.getAllRoutes())
console.log('Unique Routes: ', serviceMaster.getAllUniqueRoutes())
console.log(`User ${userId} routes: `, serviceMaster.getAllUserRoutes(userId))
console.log(`User ${userId} routes from services ${services}: `, serviceMaster.getUserRoutesByService(userId, services))
