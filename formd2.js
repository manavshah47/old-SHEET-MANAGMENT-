const { truncate } = require("fs");
const mongoose = require("mongoose");
// var autoIncrement = require('mongoose-auto-increment');

const employeeSchema = new mongoose.Schema({
    size : {
        type:String,
        required:true
    },

    gct : {
        type:String,
    },

    ht : {
        type:String,
    },
})

// autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement 
// employeeSchema.plugin(autoIncrement.plugin, 'd2');
const userd2 = mongoose.model('d2', employeeSchema)
module.exports = userd2;