import { Test, TestingModule } from '@nestjs/testing';
import { RecStatusController } from './recstatus.controller';

describe('Recstatus Controller', () => {
  let controller: RecStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecStatusController],
    }).compile();

    controller = module.get<RecStatusController>(RecStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
