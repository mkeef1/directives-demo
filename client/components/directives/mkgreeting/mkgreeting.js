(function(){
  'use strict';

  angular.module('mkGreetingModule', [])
  .directive('mkGreeting', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/mkgreeting/mkgreeting.html';
    o.scope       = {name:'@', age:'@'};

    return o;
  }]);
})();
