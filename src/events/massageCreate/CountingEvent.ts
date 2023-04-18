// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import {event} from "../../utils"
import Schemacounting from "../../database/schema/counting"

export default event("messageCreate", async ({log}, message) => {
    try {
        if (message.author.bot) return;
        Schemacounting.findOne({ guildId: message.guild!.id }, async (err: any , data: { channelId: string; Number: number; save: () => void;}) => {
            if(!data) return;
            if(data.channelId === message.channel.id) {
                    try {
                        const result = eval(message.content);
                        if (result == (data.Number)) {   
                            message.react('✅');                   
                            data.Number =  data.Number + 1;
                            data.save();       
                        } else {
                            message.channel.send(`${message.author} That was not the correct Number. The Number was ${data.Number}`);
                            message.react('❌');  
                        }  
                    } catch (error) {
                        message.channel.send(`${message.author} That was not the correct Number. The Number was ${data.Number}`);
                        message.react('❌');  
                    }
            } else {
                return
            }
        })
    } catch(err){
        console.log(err)
    }
})