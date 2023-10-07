import { IUser } from '../types';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateModuleDto } from './dto/update-module.dto';
import { SignUpModuleDto } from './dto/create-module.dto';

@Injectable()
export class ModuleService {
  constructor(@InjectModel('Users') private readonly userModel: Model<IUser>) {}

  async signUp(signUpModuleDto: SignUpModuleDto) {
    await this.userModel.create(signUpModuleDto);
    return 'User was created';
  }

  async signIn(id: string) {
    return id;
  }

  async findOne(id: string) {
    const result = await this.userModel.findOne({ _id: id });
    if (!result) throw new Error('There is no such user');
    return result;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const result = await this.userModel.findOne({ email });
    if (!result) throw new Error('There is no such user');
    return result;
  }

  async update(id: string, updateModuleDto: UpdateModuleDto) {
    await this.userModel.updateOne({ _id: id }, { updateModuleDto });
    return 'Changes were successfully saved';
  }

  async remove(id: string) {
    await this.userModel.deleteOne({ _id: id });
    return 'User was successfully deleted';
  }
}
