angular.module('Methods.io').controller('SidebarChildCtrl',function($scope,stepList){

    // stepList is defined in app.js in ui-router. it resolves the url parameters

    $scope.protocolId = stepList.protocolId;
    $scope.groupId = stepList.group;
    $scope.model = stepList.steps;

});
