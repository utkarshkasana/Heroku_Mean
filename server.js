var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
const port = process.env.PORT || 9000;

//Create Application
var app = express();


//Add middleware for REST API
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS Support
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static(__dirname + '/dist'));

app.listen(port);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://utkarshkasana:*Indian88@ds257838.mlab.com:57838/utkarshkasana1";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("utkarshkasana1");

    app.post('/about', function (req, res) {
        var query = { name: req.body.name };
        dbo.collection("about").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.send(result[0].description);
        });
    });






});


/*
mongoose.connect('mongodb://utkarshkasana:*Indian88@ds257838.mlab.com:57838/utkarshkasana1');
mongoose.connection.once('open', function(){

    //Load the models.
    app.models = require('./server/models/index');

    app.get('/api', function (req, res) {
        res.send('Our Sample API is up...');
    });

    var str="";

    app.get('/movie', function (req, res) {
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        // The above 2 lines are required for Cross Domain Communication(Allowing the methods that come as Cross           // Domain Request
        db.things.find('', function(err, users) { // Query in MongoDB via Mongo JS Module
            if( err || !users) console.log("No users found");
            else
            {
                res.writeHead(200, {'Content-Type': 'application/json'}); // Sending data via json
                str='[';
                users.forEach( function(user) {
                    str = str + '{ "name" : "' + user.username + '"},' +'\n';
                });
                str = str.trim();
                str = str.substring(0,str.length-1);
                str = str + ']';
                res.end( str);
                // Prepared the jSon Array here
            }
        });
    });

    /!*exports.teamlist = function(gname, callback) {
        db.once('open', function() {
            var teamSchema = new mongoose.Schema({
                country: String,
                GroupName: String
            });
            var Team = db.model('movie', teamSchema);
            Team.find({
                '_id': gname
            }, function(err, teams) {
                if (err) {
                    onErr(err, callback);
                } else {
                    mongoose.connection.close();
                    console.log(teams);
                    callback("", teams);
                }
            }); // end Team.find
        }); // end db.once open
    };*!/


    //Load the routes.
    var routes = require('./server/routes');
    _.each(routes, function (controller, route) {
        app.use(route, controller(app, route));
    });

    /!*console.log('Listening on port 3000...');
    app.listen(3000);*!/
    app.listen(port);
});*/
