import { createLogger, format, transports } from 'winston';
import dotenv from 'dotenv';
dotenv.config();

// Configuro formato del log
const logFormat = format.combine(
	format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
	format.printf(({ timestamp, level, message }) => {
		return `${timestamp} [${level}]: ${message}`;
	})
);
const logFormatConsole = format.combine(
	format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
	format.colorize(),
	format.printf(({ timestamp, level, message }) => {
		return `[${timestamp}][${level}]: ${message}`;
	})
);

const logger = createLogger({
	level: process.env.BLOG_LOG_LEVEL, // nivel de registro ('debug','info', 'warn', 'error',)
	format: logFormat,
	transports: [
		new transports.Console({ format: logFormatConsole }),
		new transports.File({
			format: logFormat,
			filename: 'app.log',
			maxFiles: 2,
			maxsize: 1024,
		}),
	],
});

export default logger;
