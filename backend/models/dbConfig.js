// Cette partie du code permet la connection à notre base de donnée sur mongoDB.

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/projetweb",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)