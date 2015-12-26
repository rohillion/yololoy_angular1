yololoy.controller("JourneyCtrl", ['$scope', '$rootScope', '$timeout', '$sails', 'Journey', 'JourneyForm', 'uiGmapGoogleMapApi', 'uiGmapIsReady', function JourneyCtrl($scope, $rootScope, $timeout, $sails, Journey, JourneyForm, uiGmapGoogleMapApi, uiGmapIsReady) {

    $scope.loading = true;
    $scope.journeys = [];
    $scope.journey = {
        name: ''
    };
    $scope.journeyForm = JourneyForm.getScope();

    setTimeout(function () {
        Journey.query(function (journeys) {
            $scope.loading = false;
            $scope.journeys = journeys;
        });
    }, 1000);

    $scope.create = function () {
        Journey.save($scope.journey, function (journey) {
            $scope.journeys.push(journey);
            JourneyForm.close();
            $scope.journey.name = '';
        });
    }

    $scope.delete = function (journey) {
        Journey.delete(journey, function () {
            $scope.journeys.splice($scope.journeys.indexOf(journey), 1);
        });
    }

    $scope.$watch('journeyForm.opened', function (opened) {
        console.log(opened);
    });

    $scope.close = function () {
        JourneyForm.close();
    }

}]);