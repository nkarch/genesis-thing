import { Release } from "../models/releaseModel.js";

const getReleases = async (req, res) => {
    const releases = await Release.find({});

    res.json(releases);
};

const getRelease = async (req, res) => {
    const { id } = req.params;

    const release = await Release.findOne({ releaseId: id });
    res.json(release);
};

const addRelease = async (req, res) => {
    const release = req.body;

    const newRelease = await Release.create({ ...release });

    res.json({ message: `Add Release "${release.title}"` });
};

const updateRelease = async (req, res) => {
    const { id: _id } = req.params;

    const release = await Release.findById(_id);

    if (release) {
        release.bodyText = "Wow body text";
        const updatedRelease = await release.save();
    }

    res.json({ message: `Updated Release ${_id} (${release.title})` });
};

const deleteRelease = async (req, res) => {
    const { id: _id } = req.params;

    const release = await Release.deleteOne({ _id });

    res.json({ message: `Deleted Release: ${_id} (${release.title})` });
};

const deleteReleases = async (req, res) => {
    const release = await Release.deleteMany();

    res.json({ message: `Deleted All Releases` });
};

export { getReleases, getRelease, updateRelease, addRelease, deleteRelease, deleteReleases };
