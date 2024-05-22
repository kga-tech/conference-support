import { Ctx, Start, Update } from "nestjs-telegraf";
import { Context } from "./interfaces/context.interface";
import { BOT_START_SCENE } from "./constants/bot.constants";





@Update()
export class TelegrafBotService {


    @Start()
    async onBotStart(@Ctx() context: Context) {
        context.scene.enter(BOT_START_SCENE);
    }
}