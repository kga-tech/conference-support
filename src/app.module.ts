import { Module } from '@nestjs/common';
import { TelegrafbotModule } from './telegrafbot/telegrafbot.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TelegrafbotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
