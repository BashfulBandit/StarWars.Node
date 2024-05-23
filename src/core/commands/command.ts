import type { CommandResult } from '~/core/commands/command.result';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Command <T, TCommandResult extends CommandResult> = {
	[K in keyof T]: T[K];
};
