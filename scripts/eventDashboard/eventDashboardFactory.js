app.factory('eventDashboardFactory',
['$http',
function ($http) {

    var factory = {};

    factory.getArticlesByArticleNumber = function (articleNumber,
        pageNumber,
        pageSize) {
        return $http.get('/Product/GetArticlesByArticleNumber?searchText=' + articleNumber 
            + '&pageNumber=' + pageNumber 
            + '&pageSize=' + pageSize);
    }

    return factory;
}]);