'use strict';

fansClubApp.factory('authService',[
    '$http',
    'Session',
    function ($http,Session) {
        return {
            login: function login(user) {
                return $http({
                    method: 'post',
                    url: '../data/user.json'
                }).then(function (response) {
                    if(response.data.username === user.username && response.data.password === user.password){
                        user = response.data;
                        Session.create(response.data.userId,response.data.role);
                    }
                });
            },
            isAuthenticated: function () {
                return !!Session.userId;
            },
            isAuthorized: function (authorizedRoles) {
                if (!angular.isArray(authorizedRoles)){
                    authorizedRoles = [authorizedRoles];
                }
                return (this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
            }
        };
    }
    
    
    //     var doRequest = function (user) {
    //         return $http({
    //             method: 'post',
    //             url: '../data/user.json'
    //         });
    //     };
    //     return {
    //         login : function (user) {
    //             return doRequest(user);
    //         }
    //     };
    // }
]);