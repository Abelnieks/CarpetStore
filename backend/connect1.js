var express = require('express')
var app = express()
mongoose = require('mongoose'),
mongoUrl = 'mongodb://localhost:27017/paklajs';
var users = require('./controllers/users.js')
var carpets = require('./controllers/carpets.js')

var bodyParser = require('body-parser');


var allowCrossDomain = function(req, res, next) {
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    //res.header('Access-Control-Allow-Origin', 'localhost:3004');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(allowCrossDomain);

require('./models/users');
require('./models/carpets');
require('./routes')(app);


app.get('/userNotes', function (req, res) {

  users.findAll(req, res);
})

app.listen(3000)
 console.log('Listening on port 3000...');
mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUrl);
});

/*var server = app.listen(3004, function () {
  console.log('Listening on port 3004...');
});*/
