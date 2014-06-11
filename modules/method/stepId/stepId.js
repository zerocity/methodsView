angular.module('Methods.io').controller('StepidCtrl',function($scope,stepService,$stateParams){

  var main  = stepService.procedure[0],
        id  = $stateParams.id,
    nextId  = parseInt(id) + 1;

  $scope.step = main.processSteps[id-1];
  $scope.currentId = id;
  $scope.nextId = nextId;
  $scope.prevId = nextId-2;

});
