import { Body, Controller, Post } from '@nestjs/common';
import { CreateCheckpointDto } from './dtos/create-checkpoint.dto';
import { CheckpointService } from './checkpoint.service';

@Controller('checkpoint')
export class CheckpointController {
  constructor(private locationService: CheckpointService) {}

  @Post('/')
  createCheckpoint(@Body() location: CreateCheckpointDto) {
    return this.locationService.createCheckpoint(location);
  }
}
