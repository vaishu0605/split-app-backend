import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import expenseRoutes from './routes/expenses.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
