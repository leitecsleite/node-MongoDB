const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    }
}); 

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;