import { Schema } from 'mongoose';

export const entrySchema = new Schema({
  date: { type: Date, required: true },
  typeId: { type: String, required: true },
  ammount: { type: Number, required: true },
  accountId: { type: String, required: true },
  categoryId: { type: String, required: true },
  description: { type: String, required: false, default: '' },
});
