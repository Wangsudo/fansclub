fansClubApp.controller('appController',[
    '$scope',
    'USER_ROLES',
    'authService',
    function ($scope,USER_ROLES,authService) {
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = authService.isAuthorized;
    }
]);