import { Test, TestingModule } from '@nestjs/testing';
import { JoinWaitlistController } from './join-waitlist.controller';
import { JoinWaitlistService } from './join-waitlist.service';

describe('JoinWaitlistController', () => {
  let controller: JoinWaitlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoinWaitlistController],
      providers: [JoinWaitlistService],
    }).compile();

    controller = module.get<JoinWaitlistController>(JoinWaitlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
