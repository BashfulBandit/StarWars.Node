import type { Command } from '~/core/commands/command';
import type { CommandResult } from '~/core/commands/command.result';

export type CommandHandler <
	TCommand extends Command<unknown, TCommandResult>,
	TCommandResult extends CommandResult
> = (command: Readonly<TCommand>) => Promise<TCommandResult> | TCommandResult;
