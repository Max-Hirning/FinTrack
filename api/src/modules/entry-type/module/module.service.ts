import { IEntryType } from '../types';
import { Injectable } from '@nestjs/common';
import entryTypes from '../../../constants/entryTypes.json';

@Injectable()
export class EntryTypeService {
  findAll(): IEntryType[] {
    return entryTypes;
  }
}
