var app = angular.module('myApp', []);

//This message does show up in the console, so I know my client is being reached.
console.log('hitting client');

//This controller... i can't figure it out!! When I put my console.log inside it, it never shows up.
app.controller('TwitController', ['$http', function($http){

//This message never shows up. Why can i not get inside this controller?!
    console.log('controller hit');

    $http.get('/adjectives').then(function(results){
        console.log(results);
    });

    $http.get('/nouns').then(function(results){
        console.log(results);
    });

}]);


//function randomNumber(min, max) {
//    return Math.floor(Math.random() * (1 + max - min) + min);
//}