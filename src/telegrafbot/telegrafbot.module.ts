import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { sessionMiddleware } from './middleware/bot.middleware';
import { TelegrafBotService } from './telegrafbot.service';
import { BotStartScene } from './scenes/start.scene';



@Module({
    imports: [
        TelegrafModule.forRootAsync({
            botName: 'liderasupportmac_bot',
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
                middlewares: [sessionMiddleware],
                options: {
                    handlerTimeout: 600
                }
            })
        })
    ],
    providers: [
        TelegrafBotService,
        BotStartScene
    ]
})
export class TelegrafbotModule {}
