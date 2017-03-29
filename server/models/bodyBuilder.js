var mongoose = require('mongoose');
var Exercise = require('./exercise');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var bodyBuilderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    weight: Number,
    height: Number,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    fitnessProfile: [{
        currentRoutine: [{
            exercises: [{ type: mongoose.Schema.ObjectId, ref: 'Exercise.Schema' }]
        }],
        history: [{
            exercises: [{type: mongoose.Schema.ObjectId, ref: 'Exercise.Schema' }],
            date: {
                type: Date,
                required: true
            } 
        }]
    }]
});

module.exports = mongoose.model('BodyBuilder', bodyBuilderSchema);