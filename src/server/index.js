var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
    /* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require('cors');

app.use(Cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {})


// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on  8081 ')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})