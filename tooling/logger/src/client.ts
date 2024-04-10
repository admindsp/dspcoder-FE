import winston from "winston";

const { format } = winston;

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    format.splat(),
    format.printf(({ level, message, timestamp, service }) => {
      return `${timestamp} [${level}] [${service}]: ${message}`;
    }),
  ),
  transports: [new winston.transports.Console()],
  defaultMeta: { service: process.env.NEW_RELIC_APP_NAME },
});

export { logger };
