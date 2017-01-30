app.service('eventDetailsService',
['$q', 'eventDetailsFactory',
function ($q, eventDetailsFactory) {

    this.getEventDetails = function (eventId) {
        var deffered = $q.defer();
        eventDetailsFactory.getEventDetails(eventId)
        .success(function (response) {
            deffered.resolve(response);
        })
        .error(function (response) {
            deffered.reject(response)
        });

        return deffered.promise;
    }

}]);