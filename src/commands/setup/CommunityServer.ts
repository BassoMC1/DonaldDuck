import {ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, EmbedBuilder, PermissionsBitField, SlashCommandBuilder, StringSelectMenuBuilder } from "discord.js"
import { command } from "../../utils"


const meta = new SlashCommandBuilder()
    .setName("communityserversetup")
    .setDescription("Echo a message back")

export default command(meta, ({ interaction  }) =>{
    const TicketButton = new ButtonBuilder()
        .setCustomId("TicketButton")
        .setLabel("Ticket")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(false)
    const loggingButton = new ButtonBuilder()
        .setCustomId("logging")
        .setLabel("Logging")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(false)
    const WelcomeButton = new ButtonBuilder()
        .setCustomId("welcome")
        .setLabel("Welcome")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(false)
    const leaveButton = new ButtonBuilder()
        .setCustomId("leave")
        .setLabel("leave")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(false)

        const component = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(TicketButton, loggingButton, WelcomeButton, leaveButton)

        const setupEmbed = new EmbedBuilder()
        .setTitle(`Server Setup Community server!`)
        .setDescription(`See what channels that is going to to make`)
    interaction.reply({content: "I am making you a community server now!", embeds: [setupEmbed], components: [component], })

    // interaction.guild!.channels.create({
    //     name:`Test`,
    //     type: ChannelType.GuildText,
    //     permissionOverwrites: [
    //     {
    //         id: interaction.guild!.id,
    //         deny: [PermissionsBitField.Flags.ViewChannel],
    //     },
    //     {
    //         id: interaction.user.id,
    //         allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
    //     },
    // ]
    // }).then(channel => {
    //     console.log(channel.name + " | " + channel.id)
    // })
})