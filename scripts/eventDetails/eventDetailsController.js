app.controller('eventDetailsController', function($scope, $routeParams, eventDetailsService) {
	
	$scope.gridOptions = {
		enableSorting: true,
		columnDefs: [{ field: 'column1' }, { field: 'column2' }, { field: 'column3' }]
	};
	
	$scope.init = function() {
		console.log($routeParams.eventId);
		$scope.getsalesOrganisations($routeParams.eventId);
	};
	
	$scope.getsalesOrganisations = function(eventId) {
		eventDetailsService.getEventDetails(eventId)
		.then(function (response) {
			$scope.salesOrganisationsvalues = response.Options;
		});
	}
	
	$scope.init();
});