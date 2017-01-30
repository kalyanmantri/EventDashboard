var app = angular.module("eventDashboard", ["ngRoute", "ui.grid", "ui.grid.cellNav"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/event-dashboard.html",
		controller : "eventDasboardController"
    })
	.when("/eventDetails/:eventId", {
		templateUrl : "./views/event-details.html",
		controller : "eventDetailsController"
	});
});