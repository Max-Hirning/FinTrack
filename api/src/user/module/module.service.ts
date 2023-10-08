import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IReturnedUser, IUser } from '../types';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<IUser>) {}

  async findOne(id: string): Promise<IReturnedUser> {
    const result = await this.userModel.findOne({ _id: id }, ['_id', 'email', 'name']);
    if (!result) throw new HttpException('There is no such user', HttpStatus.BAD_REQUEST);
    return result;
  }

  async update(id: string, updateModuleDto: UpdateModuleDto): Promise<string> {
    await this.userModel.updateOne({ _id: id }, updateModuleDto);
    return 'Changes were successfully saved';
  }

  async remove(id: string): Promise<string> {
    await this.userModel.deleteOne({ _id: id });
    return 'User was successfully deleted';
  }
}
