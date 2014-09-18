'use strict';

var Movie = require('../models/movie');

exports.index = function(req, res){
  res.send({mean:['MongoDB', 'Express.js', 'Angular.js', 'Node.js']});
};

exports.add = function(req, res){
  Movie.create(req.body, function(err, movie){
    res.send({movie:movie});
  });
};
