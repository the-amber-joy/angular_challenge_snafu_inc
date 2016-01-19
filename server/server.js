var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('server/public'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/adjectives', function(request, response){
    response.sendFile(path.join(__dirname + '../..//data/adjectives.json'));
});

app.get('/nouns', function(request, response){
    response.sendFile(path.join(__dirname + '../..//data/nouns.json'));

});


var server = app.listen(4000, function(){
    var port = server.address().port;
    console.log('listening on port', port);
});