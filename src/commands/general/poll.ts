import { SlashCommandBuilder } from "discord.js"
import { command, MsTime } from "../../utils"

const meta = new SlashCommandBuilder()
    .setName("poll")
    .setDescription("make a poll for your server")
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
    const test = MsTime("Days")
    return interaction.reply({
        ephemeral:  false,
        content: `${test}`
    })
})