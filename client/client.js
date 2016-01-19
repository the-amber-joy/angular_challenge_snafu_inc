var app = angular.module('myApp', []);

console.log('hitting client');

app.controller('TwitController', ['$http','$scope', function($http, $scope){

    console.log('controller hit');

    $http.get('/adjectives').then(function(results){
        $scope.nouns = results.data.adjectives;
        console.log(results);
    });

    $http.get('/nouns').then(function(results){
        $scope.adjectives = results.data.nouns;
        console.log(results);
    });

}]);

//function getNoun(){
//    for (i = 0; i > $scope.nouns.length; i++);
//
//}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}