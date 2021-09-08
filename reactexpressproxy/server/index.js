const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
var PORT = process.env.PORT || 3001;
var db = require("../models")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

require("../routes/api-routes.js")(app)



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  

    app.listen(PORT,function(){
      console.log("Server up and running, listening on port:"+PORT)
      
    
  })
  });