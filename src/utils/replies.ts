import {
 InteractionReplyOptions,
 WebhookEditMessageOptions,
} from "discord.js"

export const Colors = {
    error: 0xC22620,
}

export const Reply = {
    error(msg: string): InteractionReplyOptions {
        return{
            ephemeral: true,
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    }
}


export const EditReply = {
    error(msg: string): WebhookEditMessageOptions {
        return{
            embeds: [{
                color: Colors.error,
                description: msg
            }]
        }
    }
}