yololoy.factory('Step', ['$resource', 'API_URL', function ($resource, API_URL) {
    return $resource(API_URL + '/step/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);