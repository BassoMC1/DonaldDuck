import mongoose from "mongoose"
import keys from "../keys"

export function dbConnaction() {
    mongoose.set('strictQuery', false);
    mongoose.connect(keys.mongodbLink).then(() => {
        console.log("[DB] - Connected to mongo!")
    })
}