import { Test, TestingModule } from '@nestjs/testing';
import { CondominiosService } from './condominios.service';

describe('CondominiosService', () => {
  let service: CondominiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CondominiosService],
    }).compile();

    service = module.get<CondominiosService>(CondominiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
