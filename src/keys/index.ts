import { Keys } from "../types"

const keys: Keys = {
    clientToken: process.env.CLIENT_TOKEN ?? "NoEnv",
    testGuild: process.env.TEST_GUILD ?? "NoEnv",
    mongodbLink: process.env.MONGODB_URL ?? "NoEnv",
}
if(Object.values(keys).includes('NoEnv'))
    throw new Error("Not all ENV veriables are defined!")


export default keys