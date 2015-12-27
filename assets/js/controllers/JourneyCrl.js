yololoy.controller("JourneyCtrl", ['$scope', '$routeParams', '$timeout', '$sails', 'Journey', 'JourneyForm', 'uiGmapGoogleMapApi', 'uiGmapIsReady', function JourneyCtrl($scope, $routeParams, $timeout, $sails, Journey, JourneyForm, uiGmapGoogleMapApi, uiGmapIsReady) {

    $scope.loading = true;
    $scope.journeys = [];
    $scope.journey = {
        name: ''
    };
    $scope.journeyForm = JourneyForm.getScope();

    $scope.list = function () {
        setTimeout(function () {
            Journey.query(function (journeys) {
                $scope.loading = false;
                $scope.journeys = journeys;
            });
        }, 800);
    };

    $scope.create = function () {
        Journey.save($scope.journey, function (journey) {
            $scope.journeys.push(journey);
            JourneyForm.close();
            $scope.journey.name = '';
        });
    }
    
    $scope.get = function () {
        console.log($routeParams.journeyId);
        Journey.get({id:$routeParams.journeyId}, function (journey) {
            console.log(journey);
            $scope.journey = journey;
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