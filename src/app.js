import cors from 'cors';
import boom from 'express-boom';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import initDb from './services/db';
import authMiddleware from './middlewares/authMiddleware';

const app = express();

// middlewares
app.use(cors()); // serve client from same origin boi
app.use(boom());
app.use(bodyParser.json());

// register route
app.use('/api', [authMiddleware], routes);

initDb();
export default app;
