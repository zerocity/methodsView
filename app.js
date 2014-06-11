angular.module('Methods.io', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','pouchdb']);

angular.module('Methods.io').config(function($stateProvider, $urlRouterProvider) {

    var basicLayout = {
          url: '/',
          views:{
             'topbar':{
                controller: 'TopbarCtrl',
                templateUrl:'modules/method/topBar/topBar.html'
             },
             'sidebar':{ // todo wronge nameing
                controller: 'SidebarCtrl',
                templateUrl:'modules/method/sideBar/sideBar.html'
             },
             'content':{
                controller: 'StepViewCtrl',
                templateUrl:'modules/method/step-view/step-view.html'
             }
          }
    };

    var viewStep = {
         url:'step/:id',
         views:{
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

    /* Add New States Above */
    $stateProvider
       .state('app',basicLayout)
       .state('app.step',viewStep)
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
