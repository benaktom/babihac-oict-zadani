import express from 'express';
import statusRouter from './routes/status.js';
import cardRouter from './routes/card.js';

export const app = express();
const port = 3000;

app.use(statusRouter);
app.use(cardRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});