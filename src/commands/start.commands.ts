import { Markup, Telegraf } from 'telegraf';
import { IBotContext } from '../context/context.interface';
import { Command } from './command.class';

export class StartCommand extends Command {
	constructor(bot: Telegraf<IBotContext>) {
		super(bot);
	}

	handle(): void {
		this.bot.start((ctx) => {
			ctx.reply(
				'Вам понравился курс?',
				Markup.inlineKeyboard([
					Markup.button.callback('👍🏻', 'cours_like'),
					Markup.button.callback('👎🏻', 'course_dislike'),
				])
			);
		});
    this.bot.action("cours_like", (ctx) => {
      ctx.session.coursLike = true;
      ctx.editMessageText('🎉 Круто');
    })
    this.bot.action('cours_dislike', (ctx) => {
			ctx.session.coursLike = false;
			ctx.editMessageText('😕');
		});
	}
}
