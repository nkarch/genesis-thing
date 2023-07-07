const getReleases = (req, res) => {
    res.status(200).json({ message: "Get All Releases" });
};

const getRelease = (req, res) => {
    res.status(200).json({ message: "Get Single Release" });
};

const addRelease = (req, res) => {
    res.status(200).json({ message: "Add Release" });
};

const updateRelease = (req, res) => {
    res.status(200).json({ message: "Update Release" });
};

const deleteRelease = (req, res) => {
    res.status(200).json({ message: "Delete Release" });
};

export { getReleases, getRelease, updateRelease, addRelease, deleteRelease };
