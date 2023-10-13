import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { userSchema } from '../../user/model';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './module.controller';

@Module({
  exports: [
    JwtModule,
    AuthService,
  ],
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]),
    JwtModule.register({ signOptions: { expiresIn: process.env.JWT_TOKEN_EXPIRES_IN }, secret: process.env.SECRET_KEY }),
  ],
  providers: [
    AuthService
  ],
  controllers: [
    AuthController
  ],
})
export class AuthModule {}
