// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

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

export interface CommandCategotyExtra {
    description?: string
    emoji?: string
}

export interface CommandCategoty extends CommandCategotyExtra {
    name: string
    commands: Command[]
}
