const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middleware/logger');
const routes = require('./routes/index');

const limiter = require('./middleware/limiter');

// connect to mongo db Atlas Cluster
const uri = process.env.MONGODB_URI;
// const uri = 'mongodb://localhost:27017/';

const { NotFoundError } = require('./middleware/errorhandling');

// connect to mongodb servwe
try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.log('could not connect');
}

// listen to port 3000
const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(requestLogger); // Logs all requests to server

app.use('/', routes); // Main Router File

app.use(helmet());
// safeguard your application or API from usual security risks like XSS, Content Security Policy

app.use(limiter); // Stops DDOS attacks

app.use('*', (err) => {
  if (err.name === 'NotFound') {
    throw new NotFoundError('Requested resource not found');
  }
});
app.use(errorLogger); // enabling the error logger

app.use(errors()); // celebrate error handler

app.use((err, req, res, next) => { // centralized error handling
  res.status(err.statusCode).send({
    message: err.statusCode === 500 ? 'Error from server' : err.message,
  });
  next();
});

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
});
