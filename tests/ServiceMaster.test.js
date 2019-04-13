const ServiceMaster = require('../src/ServiceMaster')
const allRoutes = ['SRT', 'CVT', 'Perkiomen', 'CVT', 'Perkiomen', 'Welsh Mountain', 'SRT', 'Welsh Mountain', 'Oaks to Philly']
const uniqueRoutes = ['SRT', 'CVT', 'Perkiomen', 'Welsh Mountain', 'Oaks to Philly']
const user42Routes = ['42SRT', '42CVT', '42Perkiomen', 'CVT42', 'Perkiomen42', 'Welsh Mountain42', '42SRT42', '42Welsh Mountain42', '42Oaks to Philly42']
const user42RoutesKomootRWGPS = ["42SRT42", "42Welsh Mountain42", "42Oaks to Philly42", "CVT42", "Perkiomen42", "Welsh Mountain42"]

test('Get All Routes', () => {
	expect(ServiceMaster.getAllRoutes()).toEqual(allRoutes)
})

test('Get All Unique Routes', () => {
	expect(ServiceMaster.getAllUniqueRoutes()).toEqual(uniqueRoutes)
})


test('Get Routes for User 42', () => {
	expect(ServiceMaster.getAllUserRoutes(42)).toEqual(user42Routes)
})

test('test:Get Routes for User 42 from Services Komoot and RWGPS', () => {
	const serviceNames = ['Komoot','RWGPS']
	expect(ServiceMaster.getUserRoutesByService(42,serviceNames).sort()).toEqual(user42RoutesKomootRWGPS.sort())
})

test('test:Get All Unique Routes', () => {
	expect(() => {
		ServiceMaster.getAllUserRoutes()
	}).toThrow();
})

test('test:Get User Routes By Service with null services', () => {
	expect(() => {
		ServiceMaster.getUserRoutesByService(42)
	}).toThrow();
})

test('test:Get User Routes By Service with Bad Service', () => {
	expect(() => {
		ServiceMaster.getUserRoutesByService(42, ['Komoot','Strave'])
	}).toThrow();
})