'use strict';

/* * * * * */
/* DATABASE */
/* * */

/* * */
/* IMPORTS */
const config = require('config');
const mongoose = require('mongoose');

exports.connect = async function () {
  console.log('Connecting to MongoDB...');
  await mongoose
    .connect(config.get('secrets.database-connection-string'))
    .then(() => console.log('Connected.'))
    .catch((error) => {
      console.log('Connection to MongoDB failed.');
      console.log('At database.js > mongoose.connect()');
      console.log(error);
      process.exit();
    });
};

exports.disconnect = async function () {
  console.log('Closing connection to MongoDB...');
  await mongoose
    .disconnect()
    .then(() => console.log('Disconnected from MongoDB.'))
    .catch((error) => {
      console.log('Failed closing connection to MongoDB.');
      console.log('At database.js > mongoose.disconnect()');
      console.log(error);
    });
};
