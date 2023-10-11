import { Test, TestingModule } from '@nestjs/testing';
import { EntryCategoryService } from './module.service';

describe('EntryCategoryService', () => {
  let service: EntryCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntryCategoryService],
    }).compile();

    service = module.get<EntryCategoryService>(EntryCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
