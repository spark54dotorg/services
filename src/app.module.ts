import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JoinWaitlistModule } from './join-waitlist/join-waitlist.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    JoinWaitlistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
