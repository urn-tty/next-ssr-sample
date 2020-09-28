import next from 'next';
import * as functions from 'firebase-functions';
import express from 'express';
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from './i18n';

const cors = require('cors');
const routes = require('next-routes');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` },
});
const handle = routes().getRequestHandler(app);
const server = express();

server.use(cors({ origin: true }));
server.get('*', async (req, res) => {
  await app.prepare();
  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));
  return handle(req, res);
});

export const myApp = functions.https.onRequest(server);
