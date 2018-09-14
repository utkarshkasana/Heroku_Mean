'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    /*'restangular'*/
  ])
  .config(['$routeProvider','$locationProvider'/*,'RestangularProvider'*/, function ($routeProvider,$locationProvider/*,RestangularProvider*/) {

      /*RestangularProvider.setBaseUrl('https://ds257838.mlab.com:57838/utkarshkasana1');*/

      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'Movies1Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');

      //$locationProvider.html5Mode(true);
      //$locationProvider.rewriteLinks(false);


  }]);
    /*.factory('MovieRestangular',['Restangular', function (Restangular) {
        return Restangular.withConfig(function(RestangularConfigurer){
            RestangularConfigurer.setRestangularFields({
                id: '_id'
            });
        });
    }])
    .factory('Movie',['MovieRestangular', function (MovieRestangular) {
        return MovieRestangular.service('movie');
    }]);
*/