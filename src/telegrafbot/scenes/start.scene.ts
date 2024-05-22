import { On, Scene, SceneEnter } from "nestjs-telegraf";
import { BOT_START_SCENE } from "../constants/bot.constants";
import { Context } from "../interfaces/context.interface";
import { Markup } from "telegraf";




@Scene(BOT_START_SCENE)
export class BotStartScene { 
    
    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {

        await context.reply('Пожалуйста, загрузите фотографии для создания стикер-пака');

    }


    @On('photo') 
    async onPhotoSended(context: Context): Promise<void> {
        await context.reply('Фотографии загружены, ожидайте...')

        /// Обработка запроса по API

        await context.reply('Вот ваш стикер-пак', Markup.keyboard(['Сделать новую фотографию']).resize().oneTime());

    }

}