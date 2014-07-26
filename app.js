angular.module('Methods.io', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','pouchdb']);

angular.module('Methods.io').config(function($stateProvider, $urlRouterProvider) {

    var basicLayout = {
          url: '/basic',
          views:{
             'topbar@':{
                controller: 'TopbarCtrl',
                templateUrl:'modules/method/topBar/topBar.html'
             },
             'navbar@':{ // todo wronge nameing
                controller: 'SidebarCtrl',
                templateUrl:'modules/method/sideBar/sideBar.html'
             },
             'content@':{
                controller: 'StepViewCtrl',
                templateUrl:'modules/method/step-view/step-view.html'
             }
          }
    };

    var viewStep = {
        url:'protocol/:protocol/:group/:id',
        resolve:{
            stepList: function (stepService,$stateParams) {
                var protocolId = $stateParams.protocol,
                    id  = $stateParams.id,
                    group  = $stateParams.group;
                var protocol  = stepService[protocolId].content.procedure;
                var steps = protocol[group].processSteps;
                //console.log(steps);
                return {'protocolId':protocolId,'group':group,'steps': steps,'stepId':id};
            }
        },
        views:{
                'navbar@':{
                    controller: 'SidebarChildCtrl',
                    templateUrl:'modules/method/sideBar/sideBar.html'
                },
               'content@':{
                  controller: 'StepidCtrl',
                  templateUrl:'modules/method/stepId/stepId.html'
               }
         }
    };

    var comment = {
        url:'comment',
        views:{
            'content@':{
                controller:'CommentViewCtrl',
                templateUrl:'modules/comment/comment-view/comment-view.html'
            }
        }
    };

    /*HOME*/

    var homeLayout = {
        url:'/',
        views:{
            'topbar':{
                controller: 'HeaderhomeCtrl',
                templateUrl:'modules/home/headerHome/headerHome.html'
            },
            'navbar':{ // todo wrong nameing
                controller: 'NavhomeCtrl',
                templateUrl:'modules/home/navHome/navHome.html'
            },
            'content':{
                controller:'ContenthomeCtrl',
                templateUrl:'/modules/home/contentHome/contentHome.html'
            }
        }
    };

    var homeUpload = {
        url:'/upload',
        views:{
            'content@':{
                controller:'UploadCtrl',
                templateUrl:'modules/home/upload/upload.html'
            }
        }
    };

    /*PROTOCOL*/

    var protocolList = {
        url:'protocol/list',
        views:{
            'content@':{
                controller:'ProtocollistCtrl',
                templateUrl:'modules/protocol/list/protocolList.html'
            }
        }
    };

    var protocolSettings = {
        url:'protocol/settings',
        views:{
            'content@':{
                controller:'ProtocolsettingsCtrl',
                templateUrl:'modules/protocol/settings/protocolSettings.html'
            }
        }
    };

    var protocolSummary = {
        url:'protocol/summary',
        views:{
            'content@':{
                controller:'ProtocolsummaryCtrl',
                templateUrl:'modules/protocol/summary/protocolSummary.html'
            }
        }
    };

    /*USER*/

    var userSignup =  {
        url:'user/signup',
        views:{
            'content@':{
                controller:'UsersignupCtrl',
                templateUrl:'modules/user/settings/userSignup.html'
            }
        }
    };

    var userSettings =  {
        url:'user/settings',
        views:{
            'content@':{
                controller:'UsersettingsCtrl',
                templateUrl:'modules/user/settings/userSettings.html'
            }
        }
    };

    /* Add New States Above */
    $stateProvider

        .state('app',homeLayout)                                // route --> /basic
        .state('app.basic',basicLayout)                                // route --> /
        .state('app.protocolUpload',homeUpload)                         // TODO route --> /upload

        .state('app.userSignup',userSignup)                         // route --> /user/signup
        .state('app.userSetting',userSettings)                      // route --> /user/settings

        .state('app.protocolList',protocolList)                 // route --> /protocol/list
        .state('app.protocolSettings',protocolSettings)         // route --> /protocol/settings
        .state('app.protocolSummary',protocolSummary)           // route --> /protocol/:ID/summary
        // refactor to protocol step card
        .state('app.step',viewStep)
        // protoypes
        .state('app.test',comment);

    $urlRouterProvider.otherwise('/');

});

angular.module('Methods.io').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
