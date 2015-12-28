yololoy.controller('StepCtrl', ['$scope', '$routeParams', 'Step', 'Journey', function ($scope, $routeParams, Step, Journey) {

    $scope.types = [
        {
            name: 'Home',
            value: 'home',
        },
        {
            name: 'Plane',
            value: 'plane',
        },
        {
            name: 'Airport',
            value: 'airport'
        },
        {
            name: 'Taxi',
            value: 'taxi'
        },
        {
            name: 'Bus',
            value: 'bus'
        },
        {
            name: 'Accommodation',
            value: 'accommodation'
        }
    ];

    var step;
    $scope.journey = {};

    $scope.list = function () {
        Journey.get({
            id: $routeParams.journeyId
        }, function (journey) {
            $scope.loading = false;
            $scope.journey = journey;
            dropdownInit();
        });
    }

    $scope.add = function (attrs) {

        step = {
            name: '',
            journey: $routeParams.journeyId
        }

        angular.forEach(attrs, function (attr, key) {
            step[key] = attr;
        });

        Step.save(step, function (step) {
            $scope.journey.steps.push(step);
            dropdownInit();
        });
    }

    $scope.edit = function (step, attrs) {
        angular.forEach(attrs, function (attr, key) {
            step[key] = attr;
        });

        Step.update({
            id: step.id
        }, step);
    }

    $scope.delete = function (step) {
        Step.delete(step, function () {
            $scope.journey.steps.splice($scope.journey.steps.indexOf(step), 1);
        });
    }

    function dropdownInit() {
        setTimeout(function () {
            $('.step-picker').dropdown({
                onChange: function (value, text, $selectedItem) {
                    console.log(value);
                }
            });
        }, 0);
    }

}]);