import type { Command } from '~/core/commands/command';
import type { CommandResult } from '~/core/commands/command.result';

/**
 * Describes a contract for a handler function to process a CQRS Command.
 */
export type CommandHandler <
	TCommand extends Command<unknown, TCommandResult>,
	TCommandResult extends CommandResult
> = (command: Readonly<TCommand>) => Promise<TCommandResult> | TCommandResult;
