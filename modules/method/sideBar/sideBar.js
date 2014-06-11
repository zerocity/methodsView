angular.module('Methods.io').controller('SidebarCtrl',function($scope,stepService){

    $scope.model = stepService.procedure[0].processSteps;

});
