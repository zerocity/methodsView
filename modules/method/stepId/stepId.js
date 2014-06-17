angular.module('Methods.io').controller('StepidCtrl',function($scope,stepService,$stateParams){

    var protocolId = $stateParams.protocol,
        id  = $stateParams.id,
        group  = $stateParams.group,
        protocol = stepService[protocolId],

        main  = stepService[protocolId].content.procedure, // this protocol have only 1 group
        nextId  = parseInt(id) + 1;

    $scope.step = main[group].processSteps[id-1];
    $scope.currentId = id;
    $scope.nextId = nextId;
    $scope.prevId = nextId-2;

});
