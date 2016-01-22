var app = angular.module('myApp', []);

console.log('client hit');

app.controller('twitController', ['$http', '$scope', function($http, $scope) {

    var nounArray = [];
    var adjectiveArray = [];
    var twitArray = [];



    $http.get('/adjectives').then(function (response) {
        var adjectiveArray = [];
        var pickAdj = response.data.adjectives;
        var random = randomNumber(0, pickAdj.length);
        for (i = 0; i > pickAdj.length; i++) {
            adjectiveArray.push(pickAdj[random]);
        }
        console.log('Adjective array', adjectiveArray);
    });

    $http.get('/nouns').then(function (response) {
        var nounArray = [];
        var pickNoun = response.data.nouns;
        var random = randomNumber(0, pickNoun.length);
        for (i = 0; i > pickNoun.length; i++) {
            nounArray.push(pickNoun[random]);
        }
        console.log('Noun array', nounArray);
    });

    $scope.getTwits = function(){
        console.log('click');
        $scope.twits = twitArray;
        for (i = 0; i > twitArray.length; i++) {
            twitArray.push(adjectiveArray[i] + nounArray[i]);
        }
        return twits;
    };


}]);


//Random Number Generator
function randomNumber (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);}