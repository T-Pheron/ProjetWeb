const express = require('express');
const app = express();
require('../models/dbConfig');
const postsRoutes = require('../routes/postsController');
// const postsRoutes1 = require('../routes/postsController1');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
app.use('/enedis', postsRoutes);
// app.use('/historique', postsRoutes1);

app.listen(3001, () => console.log('Server started: 3001'));

