'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('SkillsCtrl',['$scope'/*,'Movie'*/, function ($scope/*, Movie*/) {
        /*$scope.movies = Movie.getList().$object;*/
        $scope.skills = {
            HTML: 80,
            AngularJS: 80,
            CSS: 70,
            JavaScript: 70,
            ReactJS: 40,
            Java: 60
    };

        $scope.getStyle = function (key) {
            return "width:" + $scope.skills.get(key) + "%";
        }

    }]);
