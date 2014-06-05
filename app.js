angular.module('Methods.io', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('Methods.io').config(function($stateProvider, $urlRouterProvider) {

    var basicLayout = {
          url: '/',
          views:{
             'topBar':{
                controller: 'TopbarCtrl',
                templateUrl:'modules/method/topBar/topBar.html'
             },
             'sideBar':{ // todo wronge nameing
                controller: 'SidebarCtrl',
                templateUrl:'modules/method/sideBar/sideBar.html'
             },
             'content':{
                controller: 'StepViewCtrl',
                templateUrl:'modules/method/step-view/step-view.html'
             }
          }
    };

    /* Add New States Above */
    $stateProvider
       .state('step-view',basicLayout);

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
