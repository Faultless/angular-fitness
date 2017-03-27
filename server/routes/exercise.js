var express = require('express');
var lodash = require('lodash');
var model = require('../models/exercise');
var category = require('../models/category');
var muscleGroup = require('../models/muscleGroup');
var exercise = express.Router();

var newExercise = new model();
var itemsProcessed = 0;

exercise.route('/')
    // List all exercises
    .get((req, res) => {
        model.find((err, Exercises) => {
            if(err)
                res.send(err);
            res.json(Exercises);
        });
    })

    // Create an exercise
    .post((req, res) => {
        category.find({ 'name': req.body.category }, (err, Category) => {
            if(err)
                return res.send();
            newExercise.name= req.body.name;
            newExercise.category= Category[0]._id;
            newExercise.demoVideo= req.body.demoVideo;

            req.body.muscleGroups.forEach((element, index, array) => {
                muscleGroup.find({ 'name': element }, (err, MuscleGroup) => {
                    if(err)
                        return res.send();
                    
                    MuscleGroup.forEach((elem, ind, arr) => {
                        newExercise.muscleGroups[index] = elem._id;  
                        console.log(newExercise.muscleGroups[index]);        
                        if(itemsProcessed === arr.length){
                            newExercise.save((error) => {
                                if(error)
                                    return res.send();
                                res.json({ message: 'Exercise created!' });
                            });
                        }   
                        itemsProcessed ++;                     
                    });          
                });
            });
        });
    });

exercise.route('/:exerciseId')
    // Get Specific Exercise using ID
    .get((req, res) => {
        model.findById(req.params.exerciseId, (err, exercise) => {
            if(err)
                res.send(err);
            res.json(exercise);
        });
    })

    // change Specific Exercise using ID
    .put((req, res) => {
        model.findById(req.params.exerciseId, (err, exercise) => {
            if(err)
                res.send(err);

            exercise
                .name = req.body.name
                .category = req.body.category
                .demoVideo = req.body.demoVideo;

            req.body.muscleGroups.forEach((element, index, array) => {
                exercise.muscleGroups[index] = element;
            }); 

            exercise.save((err) => {
                if(err)
                    res.send(err);
                res.json({ message: 'Exercise updated!' });
            });
        });
    })

    // Delete Specific Exercise using ID
    .delete((req, res) => {
        model.remove({
            _id: req.params.exerciseId
        }, (err, exercise) => {
            if(err)
                res.send(err);

            res.json({ message: "Successfully deleted" });
        });
    });

module.exports = exercise;