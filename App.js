import express from 'express';
import Lab5 from './Lab5.js';
import Hello from "./Hello.js"
const app = express();
Lab5(app);
Hello(app);
app.listen(4000);