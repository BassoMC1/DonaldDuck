import { SelectMenuInteraction } from "discord.js"
import { getCategotyPage, getCategotyRoot, NameSpaces } from "../../pages/help"
import { createId, EditReply, event, readId, Reply} from "../../utils"

export default event("interactionCreate", async (
    {
        log, 
    },
    interaction,
) => {
    if (!interaction.isButton() && !interaction.isStringSelectMenu()) return
    const [namespace] = readId(interaction.customId)

    // if namespce not in help page stop
    if(!Object.values(NameSpaces).includes(namespace)) return


    try{
       // defer uptate
       await interaction.deferUpdate()

       switch(namespace) {
        case NameSpaces.root : 
            return await interaction.editReply(getCategotyRoot())
        case NameSpaces.select:
            const newId = createId(
                NameSpaces.select,
                (interaction as SelectMenuInteraction).values[0]
            )
            return await interaction.editReply(getCategotyPage(newId))
        case NameSpaces.action: 
            return await interaction.editReply(getCategotyPage(interaction.customId))

        default: 
            throw new Error("Invalid namespace reached...")
       }

    } catch (error){
        log("[Help Error]", error)

        if(interaction.deferred)
        return  interaction.editReply(
            EditReply.error("Somting went wrong :( ")
        )
        return interaction.reply(
            Reply.error("Somting went wrong :( ")
        )
    }
})