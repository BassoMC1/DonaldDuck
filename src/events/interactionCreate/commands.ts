// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import commands from "../../commands"
import { Command } from "../../types"
import { EditReply, event, Reply} from "../../utils"

const allCommands = commands.map(({ commands } ) => commands).flat()
const allCommandsMap = new Map<string, Command>(
    allCommands.map((c) => [c.meta.name, c])
)

export default event("interactionCreate", async (
    {
        log, 
        client
    },
    interaction,
) => {
    if(!interaction.isChatInputCommand()) return

    try{
        const commandName = interaction.commandName
        const command = allCommandsMap.get(commandName)
        if(!command) throw new Error("Command not found...")

        await command.exec({
            client,
            interaction,
            log(... args) {
                log(`[${command.meta.name}]`, ...args)
            }
        })
    } catch (error){
        log("[Command Error]", error)

        if(interaction.deferred)
        return  interaction.editReply(
            EditReply.error("Somting went wrong :( ")
        )
        return interaction.reply(
            Reply.error("Somting went wrong :( ")
        )
    }
})