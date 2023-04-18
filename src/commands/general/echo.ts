// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************
import { SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"

const meta = new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echo a message back")
    .addStringOption((option) => 
        option
        .setName("message")
        .setDescription('Provide the bot a message to responde with')
        .setMinLength(1)
        .setMaxLength(2000)
        .setRequired(true)
    )
export default command(meta, ({ interaction  }) =>{
    const message = interaction.options.getString('message')
    return interaction.reply({
        ephemeral:  false,
        content: message ?? ""
    })
})