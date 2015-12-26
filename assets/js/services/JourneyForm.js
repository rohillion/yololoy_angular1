yololoy.factory('JourneyForm', ['$rootScope', function ($rootScope) {

    var scope = $rootScope.$new(true);
    scope.opened = false;

    return {
        open: function () {
            scope.opened = true;
        },
        close:function(){
            scope.opened = false;
        },
        getScope:function(){
            return scope;
        }
    }
}]);