app.service('eventDashboardService',
['eventDashboardFactory',
function (eventDashboardFactory) {

    this.getArticlesByArticleNumbers = function (articleNumber,
        pageNumber,
        pageSize) {
        var deffered = $q.defer();
        productFactory.getArticlesByArticleNumber(articleNumber,
            pageNumber,
            pageSize)
        .success(function (response) {
            deffered.resolve(response);
        })
        .error(function (response) {
            deffered.reject(response)
        });

        return deffered.promise;
    }

}]);