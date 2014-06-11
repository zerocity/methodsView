angular.module('Methods.io').controller('CommentViewCtrl',function($scope,commentService){

    var service = commentService;

    $scope.addComment = function(stepId) {
        console.log('stepId',stepId);
        console.log('comment',$scope.comment);
        commentService.add($scope.comment,stepId);
    };

    $scope.getComments = function() {
        return commentService.getComments()
            .then(function(res) {
                console.log(res);
                return res;
            });
    };

    $scope.getComment = function(stepId) {
        return commentService.getComment(stepId);
    };
});
