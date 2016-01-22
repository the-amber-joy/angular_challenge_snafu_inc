var app = angular.module('myApp', []);

//console.log('client hit');

app.controller('twitController', ['$http', '$scope', function($http, $scope) {

    var nounArray = [];
    var adjectiveArray = [];
    var twitArray = [];

    function getWords() {
        $http.get('/adjectives').then(function (response) {
            var pickAdj = response.data.adjectives;
            var random = randomNumber(0, pickAdj.length);

            for (i = 0; i < pickAdj.length; i++) {
                adjectiveArray.push(pickAdj[random].adj);
            }
            console.log('Adj array:', adjectiveArray);
        });

        $http.get('/nouns').then(function (response) {
            var pickNoun = response.data.nouns;
            var random = randomNumber(0, pickNoun.length);

            for (i = 0; i < pickNoun.length; i++) {
                nounArray.push(pickNoun[random].noun);
            }
            console.log('Noun array:', nounArray);
        });
    };

    $scope.getTwits = function(){
        console.log('click');
        getWords();
        for (i = 0; i < 10; i++) {
            twitArray.push(adjectiveArray[i] + nounArray[i]);
        }
        $scope.twits = twitArray;
        console.log('twitArray:', twitArray);
    };

}]);

//Random Number Generator
function randomNumber (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);}



