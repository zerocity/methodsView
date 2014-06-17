angular.module('Methods.io').controller('SidebarCtrl',function($scope,stepService){
    var protocol  = stepService[0].content.procedure;
    var steps = protocol[0].processSteps;

    $scope.model = steps

});
