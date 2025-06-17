import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  paid_by: { type: String, required: true },
  shared_between: [{ type: String }]
}, { timestamps: true });

export default mongoose.model('Expense', ExpenseSchema);
