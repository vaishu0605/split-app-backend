import express from 'express';
import { addExpense, getAllExpenses, deleteExpense } from '../controllers/expenseController.js';
const router = express.Router();

router.post('/', addExpense);
router.get('/', getAllExpenses);
router.delete('/:id', deleteExpense);

export default router;
