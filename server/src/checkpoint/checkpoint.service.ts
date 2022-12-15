import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCheckpointDto } from './dtos/create-checkpoint.dto';

@Injectable()
export class CheckpointService {
  constructor(private prisma: PrismaService) {}

  public async createCheckpoint(location: CreateCheckpointDto) {
    try {
      const locationInfos = location.info.map((info) => ({
        Year: info.year,
        Topic: info.topic,
        Description: info.desc,
      }));

      await this.prisma.checkpoint.create({
        data: {
          Longitude: location.lon,
          Latitude: location.lat,
          Category: location.category,
          Info: {
            createMany: {
              data: locationInfos,
            },
          },
        },
      });
    } catch (err) {
      throw new BadRequestException('Location not created!');
    }
  }
}
