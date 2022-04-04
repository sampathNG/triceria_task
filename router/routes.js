const express = require('express');
const router = express.Router();
const score = require('../models/db');

// get all the scores
router.get("/score",async(req,res)=>{
    try {
        const data = await score.find()
        console.log(data)
        res.send(data)
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})

// get score by id
router.get("/score/:_id",async(req,res)=>{
    try {
        const data = await score.findById({_id: req.params._id})
        console.log(data)
        res.send(data)
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})


// get individual scores
router.post("/score",async(req,res)=>{
    try {
        const data = await score.create(req.body)
        console.log("score added")
        res.send("score added")
    } catch (error) {
        console.error(error);
        res.send({error: error.message});
    }
})

module.exports = router
