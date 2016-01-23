var app = angular.module('myApp', []);
var nounArray = [];
var adjectiveArray = [];
var twitArray = [];
//console.log('client hit');

app.controller('twitController', ['$http', '$scope', function($http, $scope) {

    $scope.getTwits = function () {
        for (i = 0; i < 10; i++) {
            twitArray.push(adjectiveArray[i] + nounArray[i]);
        }
        $scope.twits = twitArray;
        console.log('twitArray:', twitArray);
    };

    getWords();

    function getWords() {

        $http.get('/adjectives').then(function (response) {
            var pickAdj = response.data.adjectives;

            for (i = 0; i < pickAdj.length; i++) {
                var randomAdj = randomNumber(0, 9);
                adjectiveArray.push(pickAdj[randomAdj].adj);
            }
            console.log('Adj array:', adjectiveArray);
        });


        $http.get('/nouns').then(function (response) {
            var pickNoun = response.data.nouns;

            for (i = 0; i < pickNoun.length; i++) {
                var randomNoun = randomNumber(0, 9);
                nounArray.push(pickNoun[randomNoun].noun);
            }
            console.log('Noun array:', nounArray);
        });


        function randomNumber(min, max) {
            return Math.floor(Math.random() * (1 + max - min) + min);
        }

    }
}]);
