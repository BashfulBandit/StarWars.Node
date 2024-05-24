import consola from 'consola';

type LoggingFunction = (arg: unknown, ...args: readonly unknown[]) => void;

type LoggingProvider = {
	log: LoggingFunction;
	warn: LoggingFunction;
	error: LoggingFunction;
	info: LoggingFunction;
	success?: LoggingFunction;
};

/**
 * Describes a logger.
 */
type ILogger = LoggingProvider & {
	success: LoggingFunction;
};

class Logger implements ILogger {
	readonly #provider: LoggingProvider;

	constructor (provider: LoggingProvider) {
		this.#provider = provider;
	}

	log (msg: unknown, ...msgs: readonly unknown[]): void {
		this.#provider.log.bind(this)(msg, ...msgs);
	}

	warn (msg: unknown, ...msgs: readonly unknown[]): void {
		this.#provider.warn.bind(this)(msg, ...msgs);
	}

	error (msg: unknown, ...msgs: readonly unknown[]): void {
		this.#provider.error.bind(this)(msg, ...msgs);
	}

	info (msg: unknown, ...msgs: readonly unknown[]): void {
		this.#provider.info.bind(this)(msg, ...msgs);
	}

	success (msg: unknown, ...msgs: readonly unknown[]): void {
		if (typeof this.#provider.success === 'function') this.#provider.success.bind(this)(msg, ...msgs);
		else this.#provider.info(msg, ...msgs);
	}
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const logger = new Logger(consola);
