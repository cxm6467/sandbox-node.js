var express = require('express');

var app = express();

var port = process.env.PORT || 4000;

app.get('/', (request, response)=>{
    response.send('Welcome!');
});

app.listen(port, ()=>{
    console.log('Running on port ' + port);
})