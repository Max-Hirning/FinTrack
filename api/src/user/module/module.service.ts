import { Model } from 'mongoose';
import { IEntry } from 'src/entry/types';
import { IAccount } from 'src/account/types';
import { InjectModel } from '@nestjs/mongoose';
import { IReturnedUser, IUser } from '../types';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(@InjectModel('Entries') private readonly entryModel: Model<IEntry>, @InjectModel('Users') private readonly userModel: Model<IUser>, @InjectModel('Accounts') private readonly accountModel: Model<IAccount>) {}

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
    const result = await this.accountModel.find({ ownerId: id }, ['_id']);

    await this.entryModel.deleteMany({ accountId: result });
    await this.accountModel.deleteMany({ _id: result });
    await this.userModel.deleteOne({ _id: id });
    return 'User was successfully deleted';
  }
}
