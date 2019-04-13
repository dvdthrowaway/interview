const ServiceMaster = require('./src/ServiceMaster')
let userId = 22
let services = ['Strava','Komoot']
console.log('All Routes: ', ServiceMaster.getAllRoutes())
console.log('Unique Routes: ', ServiceMaster.getAllUniqueRoutes())
console.log(`User ${userId} routes: `, ServiceMaster.getAllUserRoutes(userId))
console.log(`User ${userId} routes from services ${services}: `, ServiceMaster.getUserRoutesByService(userId, services))
