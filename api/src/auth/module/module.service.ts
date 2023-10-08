import { Model } from 'mongoose';
import { JwtService } from "@nestjs/jwt";
import { IUser } from '../../user/types';
import { InjectModel } from '@nestjs/mongoose';
import { SignUpModuleDto } from './dto/create-module.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Users') private readonly userModel: Model<IUser>, private readonly jwtService: JwtService) {}
  
  async signUp(signUpModuleDto: SignUpModuleDto) {
    await this.userModel.create(signUpModuleDto);
    return 'User was created';
  }

  async signIn(user: IUser) {
    return this.generateToken(user);
  }

  async validateUser(email: string): Promise<IUser | undefined> {
    const result = await this.userModel.findOne({ email });
    if (result) throw new HttpException('Such user already exists', HttpStatus.BAD_REQUEST);
    
    return result;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const result = await this.userModel.findOne({ email });
    if (!result) throw new HttpException('There is no such user', HttpStatus.BAD_REQUEST);
    
    return result;
  }

  private async generateToken({ name, email, id }: IUser) {
    const payload = { email, id, name };
    return {
        token: this.jwtService.sign(payload)
    }
}
}
