import { Model } from 'mongoose';
import { IEntry } from '../types';
import { IAccount } from 'src/account/types';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class EntryService {
  constructor(@InjectModel('Entries') private readonly entryModel: Model<IEntry>, @InjectModel('Accounts') private readonly accountModel: Model<IAccount>) {}

  async create(createModuleDto: IEntry): Promise<string> {
    const { ammount } = await this.accountModel.findOne({ _id: createModuleDto.accountId });
    await this.accountModel.updateOne({ _id: createModuleDto.accountId }, { ammount: this.changeAccountAmmount(createModuleDto.typeId, false, ammount, createModuleDto.ammount) });
    await this.entryModel.create(createModuleDto);
    return 'Entry was added';
  }

  async findAll() {
    return 'This action returns all module';
  }

  async findOne(id: string): Promise<IEntry> {
    const result = await this.entryModel.findOne({ _id: id });
    if(!result) throw new HttpException('There is no such entry', HttpStatus.BAD_REQUEST);
    return result;
  }

  async update(id: string, updateModuleDto: UpdateModuleDto): Promise<string> {    
    if(updateModuleDto.accountId) {
      const entry = await this.entryModel.findOne({ _id: id });
      const prevAccount = await this.accountModel.findOne({ _id: entry.accountId });
      const newAccount = await this.accountModel.findOne({ _id: updateModuleDto.accountId });

      await this.accountModel.updateOne({ _id: prevAccount._id }, { ammount: this.changeAccountAmmount(entry.typeId, true, prevAccount.ammount, entry.ammount) });
      await this.accountModel.updateOne({ _id: newAccount._id }, { ammount: this.changeAccountAmmount(entry.typeId, false, newAccount.ammount, entry.ammount) });
      await this.entryModel.updateOne({ _id: id }, { accountId: updateModuleDto.accountId });
    }

    if(updateModuleDto.ammount) {
      const entry = await this.entryModel.findOne({ _id: id });
      const account = await this.accountModel.findOne({ _id: entry.accountId });
      const prevAccountAmmount = this.changeAccountAmmount(entry.typeId, true, account.ammount, entry.ammount);

      await this.accountModel.updateOne({ _id: account._id }, { ammount: prevAccountAmmount });
      await this.accountModel.updateOne({ _id: account._id }, { ammount: this.changeAccountAmmount(entry.typeId, false, prevAccountAmmount, updateModuleDto.ammount) });
      await this.entryModel.updateOne({ _id: id }, { ammount: updateModuleDto.ammount });
    }

    if(updateModuleDto.typeId) {
      const entry = await this.entryModel.findOne({ _id: id });
      const account = await this.accountModel.findOne({ _id: entry.accountId });

      await this.accountModel.updateOne({ _id: account._id }, { ammount: this.changeAccountAmmount(updateModuleDto.typeId, false, account.ammount, entry.ammount*2) });
      await this.entryModel.updateOne({ _id: id }, { typeId: updateModuleDto.typeId });
    }

    return 'Changes were saved';
  }

  private changeAccountAmmount(typeId: string, actionReverse: boolean, accountAmmount: number, entryAmmount: number): number {
    switch(typeId) {
    case '1':
      return (actionReverse) ? accountAmmount - entryAmmount : accountAmmount + entryAmmount;
    case '2':
      return (actionReverse) ? accountAmmount + entryAmmount : accountAmmount - entryAmmount;
    default:
      throw new HttpException('Smth went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<string> {
    const entry = await this.entryModel.findOne({ _id: id });
    const account = await this.accountModel.findOne({ _id: entry.accountId });

    await this.accountModel.updateOne({ _id: account._id }, { ammount:  this.changeAccountAmmount(entry.typeId, true, account.ammount, entry.ammount)});
    await this.entryModel.deleteOne({ _id: id });
    return 'Entry was deleted';
  }
}
