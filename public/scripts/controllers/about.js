'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('AboutCtrl',['$scope','$http', function ($scope, $http) {
        $scope.list = function() {
            var url = 'http://localhost:5000/about';// URL where the Node.js server is running
            var data1 = JSON.stringify({
                "name" : "utkarsh"
            });
            $http.post(url, data1).then(function(data) {
                $scope.description = data.data;
            });

            // Accessing the Angular $http Service to get data via REST Communication from Node Server
        };

        $scope.list();
  }]);

