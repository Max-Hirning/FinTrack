import { EntryTypeService } from './module.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('EntryTypeService', () => {
  let service: EntryTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntryTypeService],
    }).compile();

    service = module.get<EntryTypeService>(EntryTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
