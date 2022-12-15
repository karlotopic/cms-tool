import { CheckpointInfoDto } from './checkpoint-info.dto';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCheckpointDto {
  @IsNotEmpty()
  @IsNumber()
  lon: number;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  info: CheckpointInfoDto[];
}
