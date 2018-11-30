import express from 'express';
import initDb from './services/db';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

initDb();
export default app;
