(function () {
'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('html',function($sce){
      return function(input){
          return $sce.trustAsHtml(input);
      };
  });
})();