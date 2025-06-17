import Expense from '../models/Expense.js';
import mongoose from 'mongoose';

export const addExpense = async (req, res) => {
  try {
    const { amount, description, paid_by, shared_between } = req.body;
    if (!amount || !description || !paid_by) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }
    const newExpense = new Expense({ amount, description, paid_by, shared_between });
    await newExpense.save();
    res.status(201).json({ success: true, data: newExpense });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAllExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json({ success: true, data: expenses });
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: 'Invalid ID' });
  }
  await Expense.findByIdAndDelete(id);
  res.json({ success: true, message: 'Expense deleted' });
};
