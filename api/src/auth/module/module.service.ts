import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '../../user/types';
import { ITokeResponse } from '../types';
import { InjectModel } from '@nestjs/mongoose';
import { SignUpModuleDto } from './dto/create-module.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Users') private readonly userModel: Model<IUser>, private readonly jwtService: JwtService) {}
  
  async signUp(signUpModuleDto: SignUpModuleDto): Promise<string> {
    await this.userModel.create(signUpModuleDto);
    return 'Account was created';
  }

  signIn(user: IUser): ITokeResponse {
    return this.generateToken(user);
  }

  async validateUser(email: string): Promise<IUser> {
    const result = await this.userModel.findOne({ email });
    if (result) throw new HttpException('Such user already exists', HttpStatus.BAD_REQUEST);
    return result;
  }

  async findByEmail(email: string): Promise<IUser> {
    const result = await this.userModel.findOne({ email });
    if (!result) throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return result;
  }

  private generateToken({ id }: IUser): ITokeResponse {
    return {
      token: this.jwtService.sign({ id })
    };
  }
}
