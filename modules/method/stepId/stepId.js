angular.module('Methods.io').controller('StepidCtrl',function($scope,stepService,$stateParams){

    var protocolId = $stateParams.protocol,
        id  = $stateParams.id,
        group  = $stateParams.group,
        protocol = stepService[protocolId],

        main  = stepService[protocolId].content.procedure, // this protocol have only 1 group
        currentStepId  = parseInt(id) ;

    $scope.step = main[group].processSteps[id-1];
    $scope.currentId = id;

    $scope.currentProtocol = parseInt(protocolId);
    $scope.currentGroup = parseInt(group);

    $scope.nextId = currentStepId + 1;
    $scope.prevId = currentStepId - 1;

});
