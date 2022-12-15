import { Global, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CheckpointModule } from './checkpoint/checkpoint.module';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [AuthModule, CheckpointModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
