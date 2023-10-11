import { JwtService } from '@nestjs/jwt';
import { ITokeResponse } from '../auth/types';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}
  
  getHello(): string {
    return 'API is running!';
  }

  async getNewToken(refreshToke: string): Promise<ITokeResponse> {
    try {
      const user = await this.jwtService.verify(refreshToke);
      return {
        token: this.jwtService.sign({ id: user.id })
      };
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
