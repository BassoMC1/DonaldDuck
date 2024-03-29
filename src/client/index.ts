// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import { Client, GatewayIntentBits } from "discord.js"
import { registerEvents } from "../utils"
import events from "../events"
import keys from "../keys"
import { dbConnaction } from "../database"

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

registerEvents(client, events)
dbConnaction()

client.login(keys.clientToken)
    .catch((err) => {
        console.error("[Login Error] -", err)
        process.exit(1)
    })