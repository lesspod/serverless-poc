require('dotenv').config();
const uri = process.env.DB_URI || 'mongodb://localhost:27017/test';

export default {
  db: {
    uri
  }
};
