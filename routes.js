var app = angular.module("eventDashboard", ["ngRoute", "ui.grid"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/event-dashboard.html",
		controller : "eventDasboardController"
    });
});