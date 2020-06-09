import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from 'winston';

import database from './config/database';
import routes from './routes';

require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();
app.server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome, built with NodeJs, Express and MongoDB' });
});

app.get('/api/v1/', (req, res) => {
  res.send({ message: 'Welcome, built with NodeJs, Express and MongoDB' });
});

app.use('/api/v1/', routes);

app.server.listen(port);

winston.info(`Started on port ${port}`, 'info');

module.exports = app;
