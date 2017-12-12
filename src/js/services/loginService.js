'use strict';

fansClubApp.factory('loginService',['$http',
    function ($http) {
        var doRequest = function (user) {
            return $http({
                method: 'post',
                url: '../data/user.json'
            });
        };
        return {
            login : function (user) {
                return doRequest(user);
            }
        };
    }
]);