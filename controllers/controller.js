var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function($scope) {
    console.log("Hello world from app controller!");
    $scope.firstName = "Adna";
});
