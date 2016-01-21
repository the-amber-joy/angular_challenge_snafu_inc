var app = angular.module('myApp', []);

console.log('client hit');

app.controller('twitController', ['$http', '$scope', function($http, $scope) {

    nounArray = [];
    adjectiveArray = [];
    $scope.twits = [];


    $http.get('/adjectives').then(function (response) {
        var pickAdj = response.data.adjectives;
        var random = randomNumber(0, pickAdj.length);
        for (i = 0; i > pickAdj.length; i++) {
            adjectiveArray.push(pickAdj[random]);
        }
    });

    $http.get('/nouns').then(function (response) {
        var pickNoun = response.data.nouns;
        var random = randomNumber(0, pickNoun.length);
        for (i = 0; i > pickNoun.length; i++) {
            nounArray.push(pickNoun[random]);
        }
    });

    $scope.twit = function(){
        for (i = 0; i > 20; i++) {
            twitArray.push(adjectiveArray[i] + nounArray[i]);
        }
        return twitArray;
    };


}]);


//Random Number Generator
function randomNumber (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);}