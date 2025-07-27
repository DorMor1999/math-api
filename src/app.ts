// src/app.ts (create this new file)
import express from 'express';
import mathRouter from './routes/math.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();
app.use(express.json());

app.use('/api/math', mathRouter);

app.use(errorHandler);

export default app;
