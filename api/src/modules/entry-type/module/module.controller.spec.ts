import { EntryTypeService } from './module.service';
import { Test, TestingModule } from '@nestjs/testing';
import { EntryTypeController } from './module.controller';

describe('EntryTypeController', () => {
  let controller: EntryTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntryTypeController],
      providers: [EntryTypeService],
    }).compile();

    controller = module.get<EntryTypeController>(EntryTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
