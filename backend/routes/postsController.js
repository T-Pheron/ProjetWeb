const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/test1Model');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        value: req.body.value,
        unit: req.body.unit,
        date: req.body.date,
        temperature: req.body.temperature,
        unit: req.body.unit,
        heure: req.body.heure
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
});

//update
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

    const updateRecord = {
        value: req.body.value,
        unit: req.body.unit,
        date: req.body.date
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('Update error : ' + err);
        }
    )
});

router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log('Delete error : ' + err);
        }
    )
});

module.exports = router