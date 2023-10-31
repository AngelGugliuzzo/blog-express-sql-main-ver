import { DataSource } from 'typeorm';

export const dbcontext = new DataSource({
	type: 'mariadb',
	host: '127.0.0.1',
	port: 3306,
	username: 'root',
	password: '123456',
	database: 'blog',
	logging: true,
	synchronize: true,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
});
