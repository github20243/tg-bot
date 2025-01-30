import { config, DotenvParseOutput } from 'dotenv';

interface IConfigService {
	get<T>(key: string): T;
}

export class ConfigService implements IConfigService {
	private config: DotenvParseOutput;

	constructor() {
		const { error, parsed } = config();

		if (error) {
			throw new Error('Не найден файл .env');
		}

		if (!parsed) {
			throw new Error('Пустой файл .env');
		}

		this.config = parsed;
	}

	get<T>(key: string): T {
		const value = this.config[key];

		if (!value) {
			throw new Error(`Ключ ${key} не найден в файле .env`);
		}

		return value as T;
	}
}

export default IConfigService