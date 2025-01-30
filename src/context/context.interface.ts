import { Context } from 'telegraf';

export interface SessionData {
  coursLike: boolean;
}

export interface IBotContext extends Context {
  session: SessionData
}