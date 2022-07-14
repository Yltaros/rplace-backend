import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PixelModule } from './pixel/pixel.module';
import { PixelHistoryService } from './pixel-history/pixel-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixelHistory } from './pixel-history/entity/pixel-history.entity';
import { PixelSQL } from './pixel/entity/pixel-sql.entity';
import { PixelHistoryModule } from './pixel-history/pixel-history.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PixelModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'rplace',
      entities: [PixelSQL, PixelHistory],
      synchronize: true
    }),
    PixelHistoryModule,
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
