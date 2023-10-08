import { Model } from 'mongoose';
import { IEntry } from '../types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Injectable()
export class EntryService {
  constructor(@InjectModel('Entries') private readonly entryModel: Model<IEntry>) {}

  create(createModuleDto: CreateModuleDto) {
    return 'This action adds a new module';
  }

  findAll() {
    return 'This action returns all module';
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
