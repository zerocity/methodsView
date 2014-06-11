angular.module('Methods.io').directive('resize', function ($window) {
    // this directive will override scrollleft position with $timeout it is posible to set the scrollpsoition
    return function (scope, element) {
      var w = angular.element($window);
      scope.$watch(function () {
        return { 'h': w.height(), 'w': w.width() };
      }, function (newValue, oldValue) {
        scope.windowHeight = newValue.h;
        scope.windowWidth = newValue.w;

        scope.style = function () {
          return {
            'height': (newValue.h - 52) + 'px'
          };
        };
      }, true);
      w.bind('resize', function () {
        scope.$apply();
      });
    };
});
