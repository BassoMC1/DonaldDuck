import {
    Awaitable,
    Client,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} from "discord.js"

type LoggerFunction = (...args: unknown[]) => void
export interface CommandProps {
    interaction: ChatInputCommandInteraction
    client: Client
    log: LoggerFunction
}

export type CommandExec = 
    (props: CommandProps) => Awaitable<unknown>


export type CommandMeta = 
    Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">

export interface Command {
    meta: CommandMeta
    exec: CommandExec
}

export interface CommandCategoty {
    name: string
    commands: Command[]
}
