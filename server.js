require('dotenv').config({ path: "./config.env" })
const express = require('express')
//const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const bodyparser = require("body-parser");
const cors = require("cors");

// const query = "SELECT * FROM MYTAB";
// const params = [];
// connectDB(query, params);

const app = express()

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyparser.urlencoded({ extended: true }))


app.use('/media/img/', express.static('media/img'));


app.use('/api/user', require('./routes/user'));


app.use(errorHandler);

const PORT = process.env.PORT || 30001

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});


