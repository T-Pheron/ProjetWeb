// Cette partie du code permet de définir les information que l'on va entrer dans notre base de donnée.

const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "projetweb",
    {
        value: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    },
    "enedis",

);

module.exports = { PostsModel };