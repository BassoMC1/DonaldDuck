import { ChannelType, SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"
import { getCategotyRoot } from "../../pages/help"
import Schemacounting from "../../database/schema/counting"

const meta = new SlashCommandBuilder()
    .setName("counting-channel")
    .setDescription("Set a counting channel for the server!")
    .addChannelOption((option) => 
        option
            .setName("channel")
            .setDescription("the channel to send welcome message")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText))

export default command(meta, ({ interaction  }) =>{
    let channel =  interaction.options.getChannel("channel")

    Schemacounting.findOne({ guildId: interaction.guild!.id }, async (err: any, data: { channelId: string; save: () => void }) => {
        if (data){
            data.channelId = channel!.id
            data.save();
        } else {
            new Schemacounting({ 
                guildId: interaction.guild!.id,
                channelId: channel!.id,
                Number: 1
            }).save();
        }
    })
    return interaction.reply(`counting channel is now ${channel}`)
})