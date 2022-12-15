import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CheckpointInfoDto {
  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsString()
  desc: string;

  @IsNotEmpty()
  @IsString()
  topic: string;
}
