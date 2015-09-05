var express = require('express');
var router = express.Router();
var collectionName = 'notes';

/* GET all maps */
router.get('/', function(req, res, next) {

    var db = req.db;
    var collection = db.get(collectionName);
    collection.find({},{},function(e,docs){
        res.send({maps:docs});

  }); 
});

/* GET specific map */
router.get('/:id', function(req, res, next) {

    var db = req.db;
    var collection = db.get(collectionName);
    var id = req.params.id;

    collection.find( { _id: id },{},function(e,docs){
        res.send({maps:docs});

  }); 
});

/* POST a new map */
router.post('/new', function(req, res, next) {

    var db = req.db;
    var collection = db.get(collectionName);

    // Submit to the DB
    collection.insert(req.body, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.send("Succesfully entered " + doc._id)
        }
    });
});


module.exports = router;
