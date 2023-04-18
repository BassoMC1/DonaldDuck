// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

export function createId(namespace: string, ...args: unknown[]): string {
    return `${namespace};${args.join(";")}`
}

export function readId(id: string): [namespace: string, ...args: string[]] {
    const [namespace, ...args] = id.split(";")
    return [namespace, ...args]
}