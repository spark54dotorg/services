import { PartialType } from '@nestjs/mapped-types';
import { CreateJoinWaitlistDto } from './create-join-waitlist.dto';

export class UpdateJoinWaitlistDto extends PartialType(CreateJoinWaitlistDto) {}
