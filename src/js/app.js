'use strict';

var fansClubApp = angular.module('fansClubApp',[
    'ui.router'
]);
//*************定义全局变量*************

//----------------用户登陆状态---------------
fansClubApp.constant('AUTH_EVENTS',{
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});
//----------------用户角色---------------
fansClubApp.constant('USER_ROLES',{
    all: '',
    oneLevelAdmin: 'one-level-admin',//一级管理员
    twoLevelAdmin: 'two-level-admin',//二级管理员
    guest: 'guest',   //游客
    regularMember: 'regular-member',  //普通会员
    seniorMember: 'senior-member' //高级会员
});
//*************设置路由***************
fansClubApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    'USER_ROLES',
    function ($stateProvider,$urlRouterProvider,USER_ROLES) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('layout',{
            url: '/',
            data: {
                authorizedRoles: [USER_ROLES.oneLevelAdmin]
            },
            abstract: true,
            views: {
                '': {
                    templateUrl: 'tpls/layout.html'
                },
                'top@layout': {
                    templateUrl: 'tpls/front/front_header.html',
                    controller: 'headerController',
                    controllerAs: 'ctrHeader'
                }
            }
        })
        .state('layout.home',{
            url: 'home',
            views: {
                'body@layout': {
                    templateUrl: 'tpls/front/front_home.html',
                    controller: 'homeController',
                    controllerAs: 'ctrHome'
                }
            }
        })
        .state('layout.news',{
            url: 'news',
            views: {
                'body@layout': {
                    templateUrl: 'tpls/front/news.html'
                }
            }
        })
        .state('layout.club',{
            url: 'club',
            views: {
                'body@layout': {
                    templateUrl: 'tpls/front/club.html'
                }
            }
        })
        .state('layout.fans',{
            url: 'fans',
            views: {
                'body@layout': {
                    templateUrl: 'tpls/front/fans.html'
                }
            }
        })
        .state('layout.activity',{
            url: 'activity',
            views: {
                'body@layout': {
                    templateUrl: 'tpls/front/activity.html'
                }
            }
        })
        .state('layout.suggestionBox',{
            url: 'suggestionBox',
            views: {
                'body@layout': {
                    templateUrl: 'tpls/front/suggestionBox.html'
                }
            }
        })

        //------------------------------------登陆和注册--------------------------------------
        .state('login_reg',{
            url: '/',
            data: {
                user : "wang",
                password: "123321"
            },
            views: {
                '': {
                    templateUrl: 'tpls/front/login-reg.html'
                }
            }
        })
        .state('login_reg.login',{
            url: 'login',
            data: {
                loginError: '用户名或者密码错误'
            },
            views: {
                'login_reg_content@login_reg': {
                    templateUrl: 'tpls/front/login.html',
                    controller: 'loginController',
                    controllerAs: 'ctrLogin'
                }
            }
        })
        .state('login_reg.register',{
            url: 'register',
            views: {
                'login_reg_content@login_reg': {
                    templateUrl: 'tpls/front/register.html',
                    controller: 'registerController',
                    controllerAs: 'ctrRegister'
                }
            }
        })
        //------------------------------------一级管理员-------------------------------------
        .state('firstLevelHome',{
            url: '/first',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'tpls/background/bg_header.html'
                },
                'nav@firstLevelHome': {
                    templateUrl: 'tpls/background/first_level_administrator/first_level_nav.html'
                }
            }
        })
        .state('firstLevelHome.adminManage',{
            url: '/adminManage',
            views: {
                'content@firstLevelHome': {
                    templateUrl: 'tpls/background/first_level_administrator/admin_manage.html'
                }
            }
        })
        .state('firstLevelHome.approval',{
            url: '/approval',
            views:{
                'content@firstLevelHome': {
                    templateUrl: 'tpls/background/first_level_administrator/approval.html'
                }
            }
        })
        .state('firstLevelHome.statistic',{
            url: '/statistic',
            views: {
                'content@firstLevelHome': {
                    templateUrl: 'tpls/background/statistic.html'
                }
            }
        })
        //------------------------------------二级管理员--------------------------------------
        .state('twoLevelHome',{
            url: '/two',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'tpls/background/bg_header.html'
                },
                'nav@twoLevelHome': {
                    templateUrl: 'tpls/background/two_level_administrator/two_level_nav.html'
                }
            }
        })
        .state('twoLevelHome.memberManage',{
            url: '/memberManage',
            views: {
                'content@twoLevelHome':{
                    templateUrl: 'tpls/background/two_level_administrator/member_manage.html'
                }
            }
        })
        .state('twoLevelHome.articleManage',{
            url: '/articleManage',
            views: {
                'content@twoLevelHome':{
                    templateUrl: 'tpls/background/two_level_administrator/article_manage.html'
                }
            }
        })
        .state('twoLevelHome.application',{
            url: '/application',
            views: {
                'content@twoLevelHome':{
                    templateUrl: 'tpls/background/two_level_administrator/application.html'
                }
            }
        })
        .state('twoLevelHome.statistic',{
            url: '/statistic',
            views: {
                'content@twoLevelHome': {
                    templateUrl: 'tpls/background/statistic.html'
                }
            }
        })
}]);


