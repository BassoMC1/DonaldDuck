import mongoose, { mongo, Schema } from "mongoose";


export interface Counting {
    guildId: string,
    channelId: string,
    Number: Number,
}

const WelcomeChannelSchema = new Schema<Counting>({
    guildId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    channelId: { type: mongoose.SchemaTypes.String, required: true},
    Number: { type: mongoose.SchemaTypes.Number, required: true}
});

export default mongoose.model('CountingNumber', WelcomeChannelSchema)