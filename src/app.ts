import express from 'express';
import cors from 'cors';
import registerProvider from './routes/registerProvider'
import registerGrocer from './routes/registerGrocer'
import 'dotenv/config';
import bodyParser from 'body-parser';

const app = express();
app.use(cors())
.use(bodyParser.json())

app.use('/registerProvider',registerProvider)
app.use('/registerGrocer',registerGrocer)

export default app;
