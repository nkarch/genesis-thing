import { Release } from "../models/releaseModel.js";

const getReleases = async (req, res) => {
    const releases = await Release.find({});

    res.status(200).json({ releases });
};

const getRelease = async (req, res) => {
    const { id: _id } = req.params;

    const release = await Release.findOne({ _id });

    res.status(200).json({ release });
};

const addRelease = async (req, res) => {
    const { release } = req.body;

    // TODO: - WIP
    const testThing = await Release.create({ ...release });

    res.status(200).json({ message: "Add Release" });
};

const updateRelease = (req, res) => {
    res.status(200).json({ message: "Update Release" });
};

const deleteRelease = async (req, res) => {
    const { id: _id } = req.params;

    const release = await Release.deleteOne({ _id });

    res.status(200).json({ message: `Deleted Release: ${_id}` });
};

export { getReleases, getRelease, updateRelease, addRelease, deleteRelease };