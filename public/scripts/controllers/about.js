'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('AboutCtrl',['$scope'/*,'Movie'*/, function ($scope/*, Movie*/) {
        /*$scope.movies = Movie.getList().$object;*/
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

