var express = require('express');
var model = require('../models/bodyBuilder');
var bodyBuilder = express.Router();

// instance of a body builder model
var BodyBuilder = new model();

bodyBuilder.route('/')
    //List all body builders
    .get((req, res) => {
        model.find((err, BodyBuilders) => {
            if(err)
                res.send(err);
            res.json(BodyBuilders);
        });
    })

    // create a new profile
    .post((req, res) => {
        // Simple String properties are set here
        bodyBuilder.name = req.body.name
                    .age = req.body.age
                    .weight = req.body.weight
                    .email = req.body.email;
    });