app.factory('eventDetailsFactory',
['$http',
function ($http) {

    var factory = {};

    factory.getEventDetails = function (eventId) {
		return $http.get('jsons/eventDetails.json');
    }

    return factory;
}]);