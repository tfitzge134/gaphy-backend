const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
.then(conn => {
    console.log(`Database connected successfully on ${conn.connections[0].name}`)
})
.catch(err => console.log("error connecting to database", err))

module.exports = mongoose;
