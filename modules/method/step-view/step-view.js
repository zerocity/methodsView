angular.module('Methods.io').controller('StepViewCtrl',function($scope,stepService){


    var protocol  = stepService[0].content.procedure;
    var steps = protocol[0].processSteps;

    $scope.protocol = protocol;
    $scope.steps = steps;
    $scope.debug = false;

});
