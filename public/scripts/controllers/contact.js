'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ContactCtrl',['$scope','$window'/*,'Movie'*/, function ($scope,$window/*, Movie*/) {
        $scope.mailWithWindowOpen = function () {
            $window.open("mailto:utkarsh.kasana@gmail.com?subject=Hello&body=Hi", '_self');
        }

        $scope.openLinkedIn = function () {
            $window.open("https://www.linkedin.com/in/utkarsh-kasana/");
        }
    }]);