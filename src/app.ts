import { session, Telegraf } from 'telegraf';
import IConfigService, { ConfigService } from './config/config.interface';
import { IBotContext } from './context/context.interface';
import { Command } from './commands/command.class';

class Bot {
  bot: Telegraf<IBotContext>;
  commands: Command[] = []

	constructor(private readonly ConfigService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.ConfigService.get("TOKEN"))
    this.bot .use(session())
  }

  init() {
    for(const command of this.commands) {
      command.handle()
    }
    this.bot.launch()
  }
}

const bot = new Bot(new ConfigService())
bot.init()