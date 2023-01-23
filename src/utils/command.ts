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