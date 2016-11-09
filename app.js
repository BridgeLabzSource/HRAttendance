var path = require('path');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var port = process.env.PORT||3000;
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, './client')));
app.use(require('./server/contorller/index.js'));

/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
    app.listen(port, function() {
        console.log('Express server listening on port ' + port);
    });
