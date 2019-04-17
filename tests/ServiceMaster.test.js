const ServiceMaster = require('../src/ServiceMaster')
const StravaService = require('../src/services/StravaService')
const RwgpsService = require('../src/services/RwgpsService')
const KomootService = require('../src/services/KomootService')

const serviceMaster = new ServiceMaster([
  StravaService,
  RwgpsService,
  KomootService,
])

const allRoutes = [
  'SRT',
  'CVT',
  'Perkiomen',
  'CVT',
  'Perkiomen',
  'Welsh Mountain',
  'SRT',
  'Welsh Mountain',
  'Oaks to Philly',
]
const uniqueRoutes = [
  'SRT',
  'CVT',
  'Perkiomen',
  'Welsh Mountain',
  'Oaks to Philly',
]
const user42Routes = [
  '42SRT',
  '42CVT',
  '42Perkiomen',
  'CVT42',
  'Perkiomen42',
  'Welsh Mountain42',
  '42SRT42',
  '42Welsh Mountain42',
  '42Oaks to Philly42',
]
const user42RoutesKomootRWGPS = [
  '42SRT42',
  '42Welsh Mountain42',
  '42Oaks to Philly42',
  'CVT42',
  'Perkiomen42',
  'Welsh Mountain42',
]

const serviceNames = ['Strava', 'Komoot', 'RWGPS']

test('Init Service Master With Constructor', () => {
  let serviceMaster = new ServiceMaster([
    StravaService,
    RwgpsService,
    KomootService,
  ])
  expect(serviceMaster.services.length).toEqual(3)
  expect(Object.keys(serviceMaster.serviceMap).sort()).toEqual(
    serviceNames.sort()
  )
})

test('build Service Master With add service', () => {
  let serviceMaster = new ServiceMaster()
  serviceMaster
    .addService(StravaService)
    .addService(KomootService)
    .addService(RwgpsService)
  expect(serviceMaster.services.length).toEqual(3)
  expect(Object.keys(serviceMaster.serviceMap).sort()).toEqual(
    serviceNames.sort()
  )
})

test('build Service Master With bad service', () => {
  let serviceMaster = new ServiceMaster()
  expect(() => {
    serviceMaster.addService('Bad Service')
  }).toThrow()
})

test('Init Service Master With bad service', () => {
  expect(() => {
    new ServiceMaster([StravaService, 'Bad Service'])
  }).toThrow()
})

test('build service with duplicate service', () => {
  let serviceMaster = new ServiceMaster([StravaService])
  serviceMaster.addService(StravaService)
  expect(serviceMaster.services.length).toEqual(1)
})

test('Get All Routes', () => {
  expect(serviceMaster.getAllRoutes()).toEqual(allRoutes)
})

test('Get All Unique Routes', () => {
  expect(serviceMaster.getAllUniqueRoutes()).toEqual(uniqueRoutes)
})

test('Get Routes for User 42', () => {
  expect(serviceMaster.getAllUserRoutes(42)).toEqual(user42Routes)
})

test('Get Routes for User 42 from Services Komoot and RWGPS', () => {
  const serviceNames = ['Komoot', 'RWGPS']
  expect(serviceMaster.getUserRoutesByService(42, serviceNames).sort()).toEqual(
    user42RoutesKomootRWGPS.sort()
  )
})

test('Get All Unique Routes', () => {
  expect(() => {
    serviceMaster.getAllUserRoutes()
  }).toThrow()
})

test('Get User Routes By Service with null services', () => {
  expect(() => {
    serviceMaster.getUserRoutesByService(42)
  }).toThrow()
})

test('Get User Routes By Service with Bad Service', () => {
  expect(() => {
    ServiceMaster.getUserRoutesByService(42, ['Komoot', 'Strave'])
  }).toThrow()
})
