// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import { config } from "dotenv"
import { resolve  } from "path"

config({ path: resolve(__dirname, "..", "..", ".env") })

import { REST, Routes, APIUser} from "discord.js"
import commands from "../commands"
import keys from "../keys"

const body = commands.map(({ commands }) => 
    commands.map(({ meta }) => meta)
).flat()

const rest = new REST({ version: "10" }).setToken(keys.clientToken)


export async function main() {
    const currentUser = await rest.get(Routes.user()) as APIUser

    const endpoint = process.env.NODE_ENV ===  "production" 
    ? Routes.applicationCommands(currentUser.id) 
    : Routes.applicationGuildCommands(currentUser.id, keys.testGuild)

    await rest.put(endpoint, { body })

    return currentUser
}

main()
    .then((user) => {
      const tag = `${user.username}#${user.discriminator}`
      const response =  process.env.NODE_ENV === "production"
      ? `Successfully relesed Commands in production as ${tag}` 
      : `Successfully relesed Commands in development in ${keys.testGuild} as ${tag}!` 

      console.log(response)
    })
    .catch(console.error)