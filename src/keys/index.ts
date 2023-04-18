// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import { Keys } from "../types"

const keys: Keys = {
    clientToken: process.env.CLIENT_TOKEN ?? "NoEnv",
    testGuild: process.env.TEST_GUILD ?? "NoTestGuild",
    mongodbLink: process.env.MONGODB_URL ?? "NoEnv",
}
if(Object.values(keys).includes('NoEnv'))
    throw new Error("Not all ENV veriables are defined!")

if(Object.values(keys).includes('NoTestGuild')){
    console.log("[Keys] - Missing Test Guild in env, Slach commands is now going to be global")
}

export default keys