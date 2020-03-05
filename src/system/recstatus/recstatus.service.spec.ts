import { Test, TestingModule } from '@nestjs/testing';
import { RecStatusService } from './recstatus.service';

describe('RecStatusService', () => {
  let service: RecStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecStatusService],
    }).compile();

    service = module.get<RecStatusService>(RecStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
