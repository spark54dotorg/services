import { Test, TestingModule } from '@nestjs/testing';
import { JoinWaitlistService } from './join-waitlist.service';

describe('JoinWaitlistService', () => {
  let service: JoinWaitlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinWaitlistService],
    }).compile();

    service = module.get<JoinWaitlistService>(JoinWaitlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
