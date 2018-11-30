import mongoose from 'mongoose';
import config from '../config';

const { db: dbConfig } = config;

let uri = process.env.DB_URI || 'mongodb://localhost:27017/test';
export default () => {
  mongoose.connect(uri);

  mongoose.connection.on('error', err => {
    console.log('mongo connection error', err);
  });

  mongoose.connection.once('open', () => {
    console.log('connected to mongo db');
  });
};
