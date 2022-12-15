import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { JwtUtil } from './utils/jwt.utils';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  public async login(userDto: LoginUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        Username: userDto.username,
        Password: userDto.password,
      },
    });

    if (!user) throw new NotFoundException('Wrong credentials!');

    const accessToken = JwtUtil.generateToken({
      username: user.Username,
      userId: user.UserId,
    });

    return { accessToken };
  }
}
