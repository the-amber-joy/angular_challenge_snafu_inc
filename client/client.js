var app = angular.module('myApp', []);

console.log('client hit');

app.controller('TwitController', ['$http','$scope', function($http, $scope){

    console.log('controller hit');

    $http.get('/adjectives').then(function(response){
        var theAdj = response.data.adjectives;
        var random = randomNumber(0, theAdj.length);

        $scope.randAdj = function (){
            for (i=0, i>theAdj.length, i++){
                return theAdj;
            };
        };
        return random;
        //    for (i = 0; i > nouns.length; i++);
        //    return nouns[random];

    });

    //$http.get('/nouns').then(function(results){
    //    $scope.nouns = results.data.nouns;
        //console.log(results);
        //$scope.randomNoun = function(){
        //    var random = randomNumber(0, nouns.length-1);
        //    for (i = 0; i > nouns.length; i++);
        //    return nouns[random];
        //}
    //});

}]);


function randomNumber (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);}