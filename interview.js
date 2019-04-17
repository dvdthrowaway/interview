const ServiceMaster = require('./src/ServiceMaster')

const serviceMaster = new ServiceMaster([require('./src/services/StravaService'),
  require('./src/services/RwgpsService'),
  require('./src/services/KomootService')])

let userId = 22
let services = ['Strava','Komoot']
console.log('All Routes: ', serviceMaster.getAllRoutes())
console.log('Unique Routes: ', serviceMaster.getAllUniqueRoutes())
console.log(`User ${userId} routes: `, serviceMaster.getAllUserRoutes(userId))
console.log(`User ${userId} routes from services ${services}: `, serviceMaster.getUserRoutesByService(userId, services))
