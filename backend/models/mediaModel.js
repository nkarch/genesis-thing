import mongoose from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";

const mediaSchema = new mongoose.Schema(
    {
        altText: {
            type: String,
            required: false,
        },
        mediaId: {
            type: Number,
            required: true,
        },
        src: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

mediaSchema.plugin(autoIncrement, { model: "Media", field: "mediaId" });

const Media = mongoose.model("Media", mediaSchema);

export { Media, mediaSchema };
