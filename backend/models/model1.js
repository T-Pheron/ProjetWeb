const mongoose = require("mongoose");

const PostsModel1 = mongoose.model(
    "projetweb",
    {
        temperature: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        heure: {
            type: String,
            required: true
        }
    },
    "historique",



);

module.exports = { PostsModel1 };