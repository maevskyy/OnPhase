import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/user.js';
import tasksRoutes from './routes/tasks.js';
import notesRoutes from './routes/notes.js'
import scheduleRoutes from './routes/schedule.js';
// import postRoutes from './routes/post.js';
// import todayRoutes from './routes/today.js';

const app = express();

//configuration
dotenv.config();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

//routes
app.use('/user', userRoutes);
app.use('/tasks', tasksRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/notes', notesRoutes)
// app.use('/post', postRoutes);
// app.use('/today', todayRoutes)
const { PORT, CONNECTION_URL } = process.env;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server good on ${PORT}`)))
  .catch((error) => console.log(error.message));
