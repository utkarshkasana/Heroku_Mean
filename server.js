/*var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
var mongodb_uri = "mongodb://utkarshkasana:*Indian88@ds257838.mlab.com:57838/utkarshkasana1";
mongodb.MongoClient.connect(mongodb_uri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});*/

/*
// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/!*  "/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 *!/

app.get("/contacts", function(req, res) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);  
    }
  });
});

app.post("/contacts", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!(req.body.firstName || req.body.lastName)) {
    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  }

  db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/!*  "/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 *!/

app.get("/contacts/:id", function(req, res) {
  db.collection(CONTACTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc);  
    }
  });
});

app.put("/contacts/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(CONTACTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update contact");
    } else {
      res.status(204).end();
    }
  });
});

app.delete("/contacts/:id", function(req, res) {
  db.collection(CONTACTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete contact");
    } else {
      res.status(204).end();
    }
  });
});*/

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

/*app.use('*', function(req, res) {
    res.sendfile('./client/app/index.html')
})*/
app.use(express.static(__dirname + '/dist'));
/*app.use('/js', express.static('./client/app/scripts'));
app.use('/js', express.static('./client/app/scripts/controllers'));
app.use('/css', express.static('./client/app/styles'));
app.use('/img', express.static('./client/app/images'));*/

/*app.use('/',function (req, res) {
    res.sendfile('./client/app/views/main.html');
});

app.use('/about',function (req, res) {
    res.sendfile('./client/app/views/about.html');
});

app.use(function (req, res) {
    res.sendfile('./client/app/index.html');
});*/

/*app.use('/hello', function(req, res, next){
    res.send('Hello World!');
    next();
})*/

//Connect to mongoDB
/*mongoose.connect('mongodb://localhost/MEAN_App');*/
mongoose.connect('mongodb://utkarshkasana:*Indian88@ds257838.mlab.com:57838/utkarshkasana1');
mongoose.connection.once('open', function(){

    //Load the models.
    app.models = require('./server/models/index');

    //Load the routes.
    var routes = require('./server/routes');
    _.each(routes, function (controller, route) {
        app.use(route, controller(app, route));
    });

    /*console.log('Listening on port 3000...');
    app.listen(3000);*/
    app.listen(port);
});