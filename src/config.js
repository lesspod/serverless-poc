require('dotenv').config();
const uri = process.env.DB_URI || 'mongodb://localhost:27017/test';
const jwtSecret = process.env.JWT_SECRET || 'flyin_P!nK_P3k@chu';
const tokenExpiry = process.env.JWT_EXPIRY || '30d';

export default {
  db: {
    uri
  },
  jwt: {
    secret: jwtSecret,
    expiresIn: tokenExpiry
  }
};
