import express from 'express';
import apiRouter from './src/router/index.js';

const app = express();
const port = 5003;

app.use(express.json());
app.use(apiRouter);

app.get('/', (req, res) => res.send('Hello RT/RW Net'));

app.listen(port, () => {
  console.log(`🚀 REST API running at http://localhost:${port}`);
});
