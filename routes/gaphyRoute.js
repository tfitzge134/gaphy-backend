const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const gaphyControllers = require("../controllers/gaphyController");
const { getAllGifs, addGif, updateGif, deleteGif } = gaphyControllers;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/gifs', getAllGifs);
app.post('/gifs', addGif);
app.put('/gifs/:id', updateGif);
app.delete('/gifs/:id', deleteGif);

module.exports = app;