var fansClubApp = angular.module('fansClubApp',[
    'ui.router'
]);

fansClubApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider
        .state('layout',{
            url: '/',
            abstract: true,
            views: {
                '': {
                    templateUrl: 'tpls/layout.html'
                },
                'top@layout': {
                    templateUrl: 'tpls/front/front_header.html'
                }
            }
        })
        .state('layout.home',{
            url: 'home',
            views: {
                'body@layout': {
                    templateUrl: 'tpls/front/front_home.html'
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
        // 登陆和注册
        .state('login_reg',{
            url: '/',
            views: {
                '': {
                    templateUrl: 'tpls/front/login-reg.html'
                }
            }
        })
        .state('login_reg.login',{
            url: 'login',
            views: {
                'login_reg_content@login_reg': {
                    templateUrl: 'tpls/front/login.html'
                }
            }
        })
        .state('login_reg.register',{
            url: 'register',
            views: {
                'login_reg_content@login_reg': {
                    templateUrl: 'tpls/front/register.html'
                }
            }
        })
        //一级管理员
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
        //二级管理员
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