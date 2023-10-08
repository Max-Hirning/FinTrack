import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { userSchema } from 'src/user/model';
import { AuthService } from './module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './module.controller';

@Module({
  exports: [
    JwtModule,
    AuthService,
  ],
  imports: [
    JwtModule.register({
      signOptions: {
        expiresIn: '24h'
      },
      secret: 'WTI$d^$#4OoZHUkJ',
    }),
    MongooseModule.forFeature([{ name: 'Users', schema: userSchema }])
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
