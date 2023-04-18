// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import mongoose from "mongoose"
import keys from "../keys"

export function dbConnaction() {
    mongoose.set('strictQuery', false);
    mongoose.connect(keys.mongodbLink).then(() => {
        console.log("[DB] - Connected to mongo!")
    })
}