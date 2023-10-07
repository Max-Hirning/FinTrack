import { ICategory } from './types';
import { Injectable } from '@nestjs/common';
import entryCategories from '../../constants/entryCategories.json';

@Injectable()
export class EntryCategoryService {
  findAll(): ICategory[] {
    return entryCategories;
  }
}
