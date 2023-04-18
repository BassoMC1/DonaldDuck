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
import { getCategotyRoot } from "../../pages/help"

const meta = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get a list of all commands for the bot")
export default command(meta, ({ interaction  }) =>{
    return interaction.reply(getCategotyRoot(false))
})