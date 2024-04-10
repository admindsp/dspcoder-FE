import nrEnricher from "@newrelic/winston-enricher";
import winston from "winston";

const { format } = winston;

const newrelicWinstonFormatter = nrEnricher(winston);

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }),
    format.errors({ stack: true }),
    format.printf(({ message, timestamp, level }) => `[${level}][${timestamp}]: ${message}`),
    newrelicWinstonFormatter(),
  ),
  transports: [new winston.transports.Console()],
  defaultMeta: { service: process.env.NEW_RELIC_APP_NAME },
});

export { logger };
