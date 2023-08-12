import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateJoinWaitlistDto } from './dto/create-join-waitlist.dto';
import { UpdateJoinWaitlistDto } from './dto/update-join-waitlist.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisteredUser } from './schemas/registered-users.schema';

@Injectable()
export class JoinWaitlistService {
  constructor(
    @InjectModel(RegisteredUser.name)
    private RegisteredUserModel: Model<RegisteredUser>,
  ) {}

  async create(
    createJoinWaitlistDto: CreateJoinWaitlistDto,
  ): Promise<RegisteredUser | null> {
    // check if user with email exists
    const { email } = createJoinWaitlistDto;
    const userInDB = await this.RegisteredUserModel.find({ email });

    if (userInDB.length > 0)
      throw new BadRequestException('user already registered');

    console.log(userInDB, email);
    const createEntry = new this.RegisteredUserModel(createJoinWaitlistDto);
    return createEntry.save();
  }

  findAll() {
    return `This action returns all joinWaitlist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} joinWaitlist`;
  }

  update(id: number, updateJoinWaitlistDto: UpdateJoinWaitlistDto) {
    return `This action updates a #${id} joinWaitlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} joinWaitlist`;
  }
}
