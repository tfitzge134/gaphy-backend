const express = require("express");
const routes = require("./routes/gaphyRoute");
require("./db/connection");

const app = express();
app.use("/", routes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));