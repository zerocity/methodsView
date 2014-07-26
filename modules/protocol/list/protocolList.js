angular.module('Methods.io').controller('ProtocollistCtrl',function($scope,stepService){

    $scope.protocols = stepService;
    $scope.debug=false;

});
