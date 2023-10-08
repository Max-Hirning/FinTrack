import { Schema } from 'mongoose';

export const accountSchema = new Schema({
  title: { type: String, required: true },
  ammount: { type: Number, required: true },
  ownerId: { type: String, required: true },
  currencyId: { type: String, required: true },
});
