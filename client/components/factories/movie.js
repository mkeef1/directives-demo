(function(){
  'use strict';

  angular.module('dir-demo')
  .factory('Movie', ['$http', function($http){

    function save(title){
      return $http.post('/home/movie', title);
    }

    return {save:save};
  }]);
})();
