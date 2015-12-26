yololoy.factory('Journey', ['$q', '$http', '$resource', 'API_URL', function ($q, $http, $resource, API_URL) {
    return $resource(API_URL + '/journey/:id');

    /*return {
        list: function (filters) {
            var defer = $q.defer();
            $http.get('/journey').success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        get: function (id) {
            var defer = $q.defer();
            $http.get('/journey/', {
                id: id
            }).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        add: function (item) {
            var defer = $q.defer();
            $http.post('/journey', item).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        remove: function (item) {
            var defer = $q.defer();
            $http.post('/journey', item).success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;
        }
    }*/
}]);