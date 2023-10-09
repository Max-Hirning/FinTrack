import { Schema } from 'mongoose';

export const accountSchema = new Schema({
  title: { type: String, required: true },
  ammount: { type: Number, required: true },
  currencyId: { type: String, required: true },
  ownerId: { required: true, ref: 'User', type: Schema.Types.ObjectId },
});
