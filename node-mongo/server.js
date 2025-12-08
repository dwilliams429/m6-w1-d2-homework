const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
const inventoryRoutes = require('./app/routes/inventoryRoutes');
app.use('/api', inventoryRoutes);

// mongo connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Mongoose connection open');
});

// server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('App listening at http://localhost:' + PORT);
});
