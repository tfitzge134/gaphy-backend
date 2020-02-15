const gif = require('./gaphy.json')
var seeder = require("mongoose-seed");

// Connect to MongoDB via Mongoose
seeder.connect("mongodb://localhost/gaphy", function() {
  // Load Mongoose models
  seeder.loadModels(["db/models/gaphySchema.js"]);

  // Clear specified collections
  seeder.clearModels(["Gif"], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(gif, function() {
      seeder.disconnect();
    });
  });
});