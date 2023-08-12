import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JoinWaitlistService } from './join-waitlist.service';
import { CreateJoinWaitlistDto } from './dto/create-join-waitlist.dto';
import { UpdateJoinWaitlistDto } from './dto/update-join-waitlist.dto';

@Controller('join-waitlist')
export class JoinWaitlistController {
  constructor(private readonly joinWaitlistService: JoinWaitlistService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createJoinWaitlistDto: CreateJoinWaitlistDto) {
    try {
      const res = this.joinWaitlistService.create(createJoinWaitlistDto);
      return res;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll() {
    return this.joinWaitlistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.joinWaitlistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateJoinWaitlistDto: UpdateJoinWaitlistDto,
  ) {
    return this.joinWaitlistService.update(+id, updateJoinWaitlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.joinWaitlistService.remove(+id);
  }
}
