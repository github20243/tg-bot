import { DotenvParseOutput } from 'dotenv'

export interface IConfigService {

  private config: DotenvParseOutput

  constructor() {

  }

  get(key:string): string {
    throw new Error("Method not implemented")
  }
}