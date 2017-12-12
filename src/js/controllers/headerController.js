fansClubApp.controller('headerController',['$scope','$rootScope','$state',function ($scope,$rootScope,$state) {
    this.message = '球迷窝社区';
    $scope.logOff = function () {
        $rootScope.user = null;
        $state.go('layout.home');
    }
}]);