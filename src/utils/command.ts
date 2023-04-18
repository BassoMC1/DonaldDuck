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
    Command,
    CommandCategoty,
    CommandCategotyExtra,
    CommandExec,
    CommandMeta,
} from '../types'

export function command(meta: CommandMeta, exec: CommandExec): Command {
    return {
        meta,
        exec,
    }
}

export function category(name: string, commands: Command[], extra: CommandCategotyExtra = {}) : CommandCategoty {
    return {
        name,
        commands,
        ...extra,
    }
}