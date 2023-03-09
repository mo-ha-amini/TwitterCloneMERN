const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./keys');
const _ = require('lodash');

const connectDB = async () => {
  return mongoose.connect(config.mongoose.uri, config.mongoose.options);
};

const getCollectionDocuments = async (collection) => {
  return new Promise((resolve, reject) => {
    collection
      .find()
      .toArray()
      .then(resolve)
      .catch((err) => reject(err));
  });
};

const removeCollection = (collection) => {
  return new Promise((resolve, reject) => {
    collection
      .deleteMany()
      .then(resolve)
      .catch((err) => {
        return reject(err);
      });
  });
};

const removeCollections = async () => {
  await Promise.all(_.map(mongoose.connection.collections, (c) => removeCollection(c)));
};

module.exports = {
    connectDB,
    removeCollections,
    getCollectionDocuments,
  }; 