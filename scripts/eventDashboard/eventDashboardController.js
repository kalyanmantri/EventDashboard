app.controller('eventDasboardController', function($scope, eventDashboardService) {
    
	$scope.inputRequest = {
		"salesOrganisationId": null,
		"eventName": null,
		"launchDate": null,
		"pageNumber": 1,
		"pageSize": 10
	}
	
	$scope.gridOptions = {
		enableSorting: true,
		columnDefs: [{ field: 'column1', cellTemplate:'<a href="#/eventDetails/{{row.entity.column1}}">{{row.entity.column1}}</a>' }, { field: 'column2' }, { field: 'column3' }]
	};
	
	$scope.init = function() {
		$scope.getsalesOrganisations();
		$scope.getEventsList();
	};
	
	$scope.getsalesOrganisations = function() {
		eventDashboardService.getsalesOrganisations()
		.then(function (response) {
			$scope.salesOrganisationsvalues = response.Options;
		});
	}
	
	$scope.getEventsList = function() {
		eventDashboardService.getEventsList($scope.inputRequest)
		.then(function (response) {
			$scope.gridOptions.data = response.Events.slice(($scope.inputRequest.pageNumber-1)*$scope.inputRequest.pageSize,$scope.inputRequest.pageNumber*$scope.inputRequest.pageSize);
			$scope.totalEvents = response.TotalEvents;
			$scope.maxPageNumber = $scope.calculatePageNumber($scope.totalEvents,$scope.inputRequest.pageSize);
		});
	};
	
	$scope.calculatePageNumber = function(total, pageSize) {
		if(total%pageSize==0){
			return Math.floor(total/pageSize);
		}
		else {
			return Math.floor(total/pageSize)+1;
		}
	};
	
	$scope.nextPage = function(){
		$scope.inputRequest.pageNumber = $scope.inputRequest.pageNumber+1;
		$scope.getEventsList();
	};
	
	$scope.previousPage = function(){
		$scope.inputRequest.pageNumber = $scope.inputRequest.pageNumber-1;
		$scope.getEventsList();
	};
	
	$scope.applyFilter = function() {
		$scope.inputRequest.pageNumber = 1;
		$scope.getEventsList();
	};
	
	$scope.clearFilter = function() {
		$scope.inputRequest.pageNumber = 1;
		$scope.inputRequest.salesOrganisationId = null;
		$scope.inputRequest.eventName = null;
		$scope.inputRequest.launchDate = null;
		$scope.getEventsList();
	};
	
	$scope.enableDatePicker = function() {
		$('#datePicker').datepicker();
	}
	
	$scope.init();
});