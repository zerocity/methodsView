angular.module('Methods.io').factory('commentService',function(pouchdb) {

    var service =  {};

    // reset db
    pouchdb.destroy('Comment', function(err, info) {
        console.log(err);
        console.log(info);
    });

    // init
    var db = pouchdb.create('Comment');


    service.getDb = function() {
        return db;
    };

    service.add = function(comment,stepID) {
        console.log('test');
        db.get(stepID)
            .then(function(doc) {
                console.log(doc);
                var comments = [];
                if (typeof doc.comments === 'undefined') {
                    comments = [{
                        'name':'me',
                        'comment':comment
                    }];
                console.log(comments);
                }else{
                    comments = doc.comments.push({
                        'name':'me',
                        'comment':comment
                    });
                console.log(comments);
                }
            });
    };

    service.getComment = function(stepID) {
        return db.get(stepID)
            .success(function(res) {
                console.log(res);
            })
            .error(function(res) {
                console.log(res);
            });
    };

    service.getComments = function() {
        return db.allDocs({include_docs: true});
    };

	return service;
});
