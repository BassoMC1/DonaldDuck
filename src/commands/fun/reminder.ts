
import { command } from "../../utils"
import { ChannelType, SlashCommandBuilder, TextChannel } from "discord.js"

const meta = new SlashCommandBuilder()
    .setName("reminder")
    .setDescription("I am going to reminde u of somting")
    .addChannelOption((option) => 
        option
            .setName("channel")
            .setDescription("the channel to send welcome message")
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildText))        
    .addStringOption((option) => 
            option
            .setName("message")
            .setDescription('Provide the bot a message to say to u')
            .setMinLength(1)
            .setMaxLength(2000)
            .setRequired(true)
        )
    .addStringOption((option) => 
        option
            .setName("time-currency")
            .setDescription("Time currency of the reminder")
            .addChoices(
                { name: 'Day', value: 'Day' },
                { name: 'Hours', value: 'Hours' },
                { name: 'Minute', value: 'Minute' },
                { name: 'Seconds', value: 'Seconds' },
            )
            .setRequired(true))
    .addNumberOption((option) => 
        option
            .setName("time")
            .setDescription("Time of the Reminder")
            .setRequired(true))

export default command(meta, ({ interaction, client  }) =>{
    let value = interaction.options.get("time-currency")!.value
    let message =  interaction.options.getString("message")
    let time =  interaction.options.getNumber("time")
    let channel =  interaction.options.getChannel("channel")
    let MSTime = TimeMS(value)
    let EndingTimeUnixepoch = Math.floor((time! * MSTime! + Date.now()) / 1000);

    interaction.reply(`I am going to remind you <t:${EndingTimeUnixepoch}:R>`)

    client.channels.fetch(channel!.id).then((channel) => {
        const textChannel = channel as TextChannel;
        setTimeout(() =>{
            textChannel.send(`${interaction.user.tag} Your Reminder \nMessage:  ${message}`);
        }, time! * MSTime!)
    });  
})


function TimeMS(value: string | number | boolean | undefined) {
    if(value === "Day") {
        return 86400000
    } else if(value === "Hours") {
        return 3600000
    } else if(value === "Minute") {
        return 60000
    } else if(value === "Seconds") {
        return 1000
    }
}