import mongoose from "mongoose";

import { ReleaseTypes, Artists } from "../enums.js";

const creditSchema = new mongoose.Schema({
    personId: {
        type: Number,
        required: () => !this.name,
    },
    name: {
        type: String,
        required: () => !this.personId,
    },
    credit: {
        type: String,
        required: false,
    },
});

const artworkSchema = new mongoose.Schema({
    altText: {
        type: String,
        required: false,
    },
    imageId: {
        type: Number,
        required: true,
    },
});

const artworkGroupSchema = new mongoose.Schema({
    primary: {
        type: artworkSchema,
        required: false,
    },
    additional: {
        type: [artworkSchema],
        required: false,
    },
});

const releaseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ReleaseTypes,
    },
    slug: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
        enum: Artists,
    },
    meta: {
        recorded: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Date,
            required: true,
        },
        studio: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
        producer: {
            type: String,
            required: false,
        },
    },
    credits: {
        type: [creditSchema],
        required: false,
    },
    artwork: {
        type: artworkGroupSchema,
        required: false,
    },
    body_text: {
        type: String,
        required: false,
    },
    links: {
        type: [String],
        required: false,
    },
});

const Release = mongoose.model("Release", releaseSchema);

export { Release };
