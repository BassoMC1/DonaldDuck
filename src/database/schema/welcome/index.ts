// **********************************************
// *
// * This code was writen by BassoMC#4832 - (317730229760163855)
// * Last Uptate: 08.04.2023 
// * Note:
// * TODO: 
// * Problems: 
// * 
// **********************************************

import mongoose, { mongo, Schema } from "mongoose";


export interface WelcomeChannel {
    guildId: string,
    channelId: string,
    userId: string,
}



const WelcomeChannelSchema = new Schema<WelcomeChannel>({
    guildId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    channelId: { type: mongoose.SchemaTypes.String, required: true},
    userId: { type: mongoose.SchemaTypes.String, required: false}
});

export default mongoose.model('WelcomeChannel', WelcomeChannelSchema)