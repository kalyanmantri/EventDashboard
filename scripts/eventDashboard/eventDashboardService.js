app.service('eventDashboardService',
['$q', 'eventDashboardFactory',
function ($q, eventDashboardFactory) {

    this.getEventsList = function (eventListRequest) {
        var deffered = $q.defer();
        eventDashboardFactory.getEventsList(eventListRequest)
        .success(function (response) {
            deffered.resolve(response);
        })
        .error(function (response) {
            deffered.reject(response)
        });

        return deffered.promise;
    }
	
	this.getsalesOrganisations = function () {
        var deffered = $q.defer();
        eventDashboardFactory.getsalesOrganisations()
        .success(function (response) {
            deffered.resolve(response);
        })
        .error(function (response) {
            deffered.reject(response)
        });

        return deffered.promise;
    }

}]);