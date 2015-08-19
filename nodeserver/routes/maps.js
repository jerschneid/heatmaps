var express = require('express');
var router = express.Router();

/* GET all maps */
router.get('/', function(req, res, next) {

    var db = req.db;
    var collection = db.get('notes');
    collection.find({},{},function(e,docs){
        res.send({maps:docs});

  }); 
});

/* GET specific map */
router.get('/:id', function(req, res, next) {

    var db = req.db;
    var collection = db.get('notes');
    var id = parseInt(req.params.id);

    collection.find( { _id: id },{},function(e,docs){
        res.send({maps:docs});

  }); 

});

module.exports = router;
