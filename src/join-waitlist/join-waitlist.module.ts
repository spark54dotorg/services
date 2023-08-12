import { Module } from '@nestjs/common';
import { JoinWaitlistService } from './join-waitlist.service';
import { JoinWaitlistController } from './join-waitlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RegisteredUser,
  RegisteredUserScheme,
} from './schemas/registered-users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RegisteredUser.name, schema: RegisteredUserScheme },
    ]),
  ],
  controllers: [JoinWaitlistController],
  providers: [JoinWaitlistService],
})
export class JoinWaitlistModule {}
