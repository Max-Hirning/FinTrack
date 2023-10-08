import { Model } from 'mongoose';
import { IAccount } from '../types';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AccountService {
  constructor(@InjectModel('Accounts') private readonly accountModel: Model<IAccount>) {}

  async create(createModuleDto: IAccount) {
    await this.accountModel.create(createModuleDto);
    return 'Account was created';
  }

  async findAllByOwner(ownerId: string) {
    const result = await this.accountModel.find({ ownerId });
    if(!result) throw new HttpException('There are no accounts', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findOne(id: string) {
    const result = await this.accountModel.find({ _id: id });
    if(!result) throw new HttpException('There is no such account', HttpStatus.BAD_REQUEST);
    return result;
  }

  async update(id: string, { title }: UpdateModuleDto) {
    await this.accountModel.updateOne({ _id: id }, { title: title });
    return 'Changes were successfully saved';
  }

  async remove(id: string) {
    await this.accountModel.deleteOne({ _id: id });
    return 'Account was successfully deleted';
  }
}
