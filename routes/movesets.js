var express = require('express');
var Router = require('router');
var knex = require('../db/knex');
var router = express.Router();

router.get('/', function(request, response){
  knex('move_sets').select().then(function(result){
      response.json(result);
  });
});

module.exports = router;
