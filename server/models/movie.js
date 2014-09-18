'use strict';


function Movie(o){
  this.title = o.title;
}

Object.defineProperty(Movie, 'collection', {
  get: function(){return global.mongodb.collection('movies');}
});

Movie.create = function(o, cb){
  Movie.collection.save(o, cb);
};

Movie.all = function(cb){
  Movie.collection.find().toArray(cb);
};

module.exports = Movie;

