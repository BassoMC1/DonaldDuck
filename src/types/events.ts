// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import { ClientEvents, Awaitable, Client} from "discord.js"

type LoggerFunction = (...args: unknown[]) => void
export interface EventProps {
    client: Client
    log: LoggerFunction
}

export type EventKeys = keyof ClientEvents
export type EventExec<T extends EventKeys> = 
    (props: EventProps, ...args: ClientEvents[T]) => Awaitable<unknown>

export interface Event<T extends EventKeys> {
    id: T
    exec: EventExec<T>
}