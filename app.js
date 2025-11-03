import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoute from './routes/auth.js';

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api', authRoute)

app.listen(PORT, () => {
    console.log(`Server running on PORT http://localhost:${PORT}`)
})