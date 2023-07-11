import mongoose from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";

import { Formats, Artists } from "../enums.js";

const creditSchema = new mongoose.Schema(
    {
        personId: {
            type: Number,
            required: function () {
                return !this.name;
            },
        },
        name: {
            type: String,
            required: function () {
                return !this.personId;
            },
        },
        credit: {
            type: String,
            required: false,
        },
    },
    { _id: false }
);

const artworkSchema = new mongoose.Schema(
    {
        altText: {
            type: String,
            required: false,
        },
        imgId: {
            type: Number,
            required: true,
        },
    },
    { _id: false }
);

const artworkGroupSchema = new mongoose.Schema(
    {
        primary: {
            type: artworkSchema,
            required: false,
        },
        additional: {
            type: [artworkSchema],
            required: false,
        },
    },
    { _id: false }
);

const releaseSchema = mongoose.Schema({
    release_id: {},
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: Object.keys(Formats),
    },
    slug: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
        enum: Object.keys(Artists),
    },
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
    credits: {
        type: [creditSchema],
        required: false,
    },
    artwork: {
        type: artworkGroupSchema,
        required: false,
    },
    bodyText: {
        type: String,
        required: false,
    },
    links: {
        type: [String],
        required: false,
    },
});

releaseSchema.plugin(autoIncrement, { model: "Release", field: "releaseId" });

const Release = mongoose.model("Release", releaseSchema);

export { Release };
