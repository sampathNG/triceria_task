const mongoose = require('mongoose');
const scoreSchema = new mongoose.Schema({
    p1score:{type:Number},
    p2score:{type:Number},
    p3score:{type:Number},
    p4score:{type:Number}
})

const scores = mongoose.model("scores",scoreSchema)
module.exports = scores;