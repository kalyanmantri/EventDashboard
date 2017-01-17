app.factory('eventDashboardFactory',
['$http',
function ($http) {

    var factory = {};

    factory.getEventsList = function (eventListRequest) {
		return $http.get('jsons/eventsList.json');
    }
	
	factory.getsalesOrganisations = function() {
		return $http.get('jsons/salesOrganisation.json')
	}

    return factory;
}]);