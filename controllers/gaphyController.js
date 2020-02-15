const Gifs = require('../db/models/gaphySchema');

module.exports.getAllGifs = (req, res) => {
  Gifs.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

module.exports.addGif = (req, res) => {
  const gifData = req.body;
  Gifs.create(gifData, (err, data) => {
    if (err) {
      res.send(err);
    }
    // return list of all gifs after adding the new gif
    Gifs.find().then(allGifs => res.send(allGifs));
  });
};

module.exports.updateGif = (req, res) => {
  const { id } = req.params;
  const updatedGif = req.body;
  Gifs.findByIdAndUpdate(id, updatedGif, { new: true }, (err, data) => {
    if (err) {
      res.send(err);
    }
    // return list of all gifs after adding the new gif
    Gifs.find().then(allGifs => res.send(allGifs));
  });
};

module.exports.deleteGif = (req, res) => {
  const { id } = req.params;
  Gifs.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.send(err);
    }
    // return list of all gifs after adding the new gif
    Gifs.find().then(allGifs => res.send(allGifs));
  });
};
