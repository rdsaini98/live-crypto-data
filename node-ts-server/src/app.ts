import express from 'express';

import { ping, getRecentData } from './controllers/dataController';
import { startPolling } from './services/pollservice';

const app = express();

app.use(express.json());

app.get("/api/recent",getRecentData);
app.get("/ping",ping);

export default app;