import { Test, TestingModule } from '@nestjs/testing';
import { EntryCategoryService } from './module.service';
import { EntryCategoryController } from './module.controller';

describe('EntryCategoryController', () => {
  let controller: EntryCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntryCategoryController],
      providers: [EntryCategoryService],
    }).compile();

    controller = module.get<EntryCategoryController>(EntryCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
