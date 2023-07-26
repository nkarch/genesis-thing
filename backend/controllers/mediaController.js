import { Media } from "../models/mediaModel.js";

const getMedia = async (req, res) => {
    const media = await Media.find({});

    res.json(media);
};

const getMediaById = async (req, res) => {
    const { mediaId } = req.params;

    const media = await Media.findOne({ mediaId });
    res.json(media);
};

export { getMedia, getMediaById };
