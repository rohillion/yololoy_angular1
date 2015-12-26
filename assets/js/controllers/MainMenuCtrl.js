yololoy.controller("MainMenuCtrl", ['$scope', '$location', '$sails', 'JourneyForm', function MainCtrl($scope, $location, $sails, JourneyForm) {
    
    $scope.segment = $location.path();
    $scope.$on('$routeChangeSuccess', function (next, current) {
        $scope.segment = $location.path();
    });
    
    $scope.journeyForm = JourneyForm.getScope();
    $scope.add = function(){
        $scope.hidden = false;
        JourneyForm.open();
    }

}]);