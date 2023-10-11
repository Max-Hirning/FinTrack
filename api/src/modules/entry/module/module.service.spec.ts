import { EntryService } from './module.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('EntryService', () => {
  let service: EntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntryService],
    }).compile();

    service = module.get<EntryService>(EntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
