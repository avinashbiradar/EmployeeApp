    const express = require('express');
    const bodyParser = require('body-parser');
    const dbConfig = require('./App/config/config');
    const mongoose = require('mongoose');
    const route = require('./App/routers/router');
   let expressValidator=require('express-validator');

    // create express app
    const app = express();
    console.log("server.js running")
    // app.use(expressValidator());
    
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true ,  }))
   
    // parse requests of content-type - application/json
    app.use(bodyParser.json())
    app.use("/api",route)
    
    // define a simple route
    app.get('/', (req, res) => {
        res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
    });
    
    // listen for requests
   

    mongoose.connect(dbConfig.url,{
        useNewUrlParser :true,useUnifiedTopology: true
    }).then(()=>{
        console.log("Database connected successfully");
    }).catch(err =>{
        console.log("error",err);
       process.exit();
    });
    
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });