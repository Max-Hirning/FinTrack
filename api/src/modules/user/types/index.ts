import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export interface IReturnedUser extends IUser {
  _id: string;
  name: string;
  email: string;
}