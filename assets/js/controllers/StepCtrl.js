yololoy.controller('StepCtrl', ['$scope', '$routeParams', 'Step', 'Journey', function ($scope, $routeParams, Step, Journey) {

    $scope.types = [
        {
            name: 'Home',
            value: 'home',
        }, {
            name: 'Airport',
            value: 'airport'
        }, {
            name: 'Taxi',
            value: 'taxi'
        }, {
            name: 'Plane',
            value: 'plane'
        }, {
            name: 'Bus',
            value: 'bus'
        }, {
            name: 'Accommodation',
            value: 'accommodation'
        }, {
            name: 'Food',
            value: 'food'
        }, {
            name: 'Nature',
            value: 'nature'
        }, {
            name: 'Gig',
            value: 'gig'
        }, {
            name: 'Camping',
            value: 'camping'
        }, {
            name: 'Car',
            value: 'car'
        }, {
            name: 'Train',
            value: 'train'
        }, {
            name: 'Snorkeling',
            value: 'snorkeling'
        }, {
            name: 'Bike',
            value: 'bike'
        }, {
            name: 'Ship',
            value: 'ship'
        }
    ];

    var step;
    $scope.journey = {};
    $scope.isAdmin = true;

    $scope.dateChange = function (modelName, newDate, step) {
        $scope.edit(step, {
            date: newDate
        });
    }

    $scope.myValidator = function (newValue) {
        return !isNaN(newValue);
    };

    $scope.list = function () {
        Journey.get({
            id: $routeParams.journeyId
        }, function (journey) {
            $scope.loading = false;
            $scope.journey = journey;
            if ($scope.isAdmin)
                dropdownInit();
        });
    }

    $scope.add = function (attrs) {

        step = {
            journey: $routeParams.journeyId,
            description: '',
            budget: 0,
            date: new Date(),
            order: $scope.journey.steps.length + 1
        }

        angular.forEach(attrs, function (attr, key) {
            step[key] = attr;
        });

        Step.save(step, function (step) {
            $scope.journey.steps.push(step);
            if ($scope.isAdmin)
                dropdownInit();
        });
    }

    $scope.edit = function (step, attrs) {

        angular.forEach(attrs, function (attr, key) {
            step[key] = attr;
        });

        Step.update({
            id: step.id
        }, step, function () {
            resizeTextarea(step.id);
        });
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

    function resizeTextarea(stepId) {
        var textarea = $('#' + stepId).find('textarea');
        textarea.height(textarea[0].scrollHeight);
        console.log(textarea[0]);
        console.log(textarea[0].scrollHeight);
    }

}]);