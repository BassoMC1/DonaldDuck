// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import { ChannelType, SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"
import Schemachannel from "../../database/schema/welcome"

const meta = new SlashCommandBuilder()
    .setName("welcome-channel")
    .setDescription("Get a list of all commands for the bot")
    .addChannelOption((option) => 
        option
            .setName("channel")
            .setDescription("the channel to send welcome message")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText))

            
export default command(meta, ({ interaction  }) =>{
    let channel =  interaction.options.getChannel("channel")
    
    Schemachannel.findOne({ guildId: interaction.guild!.id }, async (err: any, data: { channelId: string; userId: string; save: () => void }) => {
        if (data){
            data.channelId = channel!.id
            data.userId = interaction.user.id
            data.save();
        } else {
            new Schemachannel({ 
                guildId: interaction.guild!.id,
                channelId: channel!.id,
                userId: interaction.user.id
            }).save();
        }
        interaction.reply(`New welcome channel is now set as: **${channel}** `)
    });
})