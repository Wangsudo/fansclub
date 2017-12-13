'use strict';

fansClubApp.controller('loginController',['$scope','$rootScope','$http','$state','authService',
    function ($scope,$rootScope,$http,$state,authService) {
        $scope.user = {
            username : '',
            password : ''
        };
        $scope.login = function (user) {
            console.log(user.username);
            authService.login(user).then(
                function (response) {
                    console.log(response);
                    console.log(user);
                    console.log(angular.equals(response.data,user));
                    if(angular.equals(response.data,user)){
                        $rootScope.user = {
                            username : response.data.username
                        };
                        $state.go('layout.home');
                        console.log($rootScope.user);
                    }else{
                        $scope.mess = $state.current.data.loginError;
                    }
                },function (response) {
                    console.log(response);
                }
            );

        }
        // this.test = $state.current.data.user;
        // this.myTxt = "你还没有点击提交!";
        // $scope.myFunc = function () {
        //     $scope.myTxt = "你点击了提交!";
        // };
        // this.login = function (user,password,vaild) {
        //     this.test1 = '进入了function,vaild is false';
        //     if(!vaild){
        //         this.test = '进入了function,vaild is false';
        //         return;
        //     }
        //     if($state.current.data.user === user &&
        //         $state.current.data.password === password){
        //         $rootScope.user = {
        //             name : user
        //         };
        //         this.test = '进入了function';
        //         $state.go('layout.home');
        //     }else{
        //         this.mess = $state.current.data.loginError;
        //     }
        // }
    }
]);