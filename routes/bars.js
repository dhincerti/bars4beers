var express = require('express');
var router = express.Router();

// return all bars
router.get('/', function(req, res) {

  // TODO mongo inplementation
  res.send({
    message : 'TODO return all posts'
  });
});

// add new bar
router.post('/', function(req, res) {

  // TODO mongo inplementation
  res.send({
    message : 'TODO create new post'
  });
});

//returns a particular bar
router.get('/:id', function(req, res) {
  // TODO mongo integration
  res.send({
    message : 'TODO returns a particular bar with id: ' + req.params.id
  });
});

//update a particular bar
router.put('/:id', function(req, res) {

  //TODO mongo integration
  res.send({
    message : 'TODO update a particular bar with id: ' + req.params.id
  });
});

//delete a particular bar
router['delete']('/:id', function(req, res) {

  //TODO mongo integration
  res.send({
    message : 'TODO delete a particular bar with id: ' + req.params.id
  });
});

module.exports = router;