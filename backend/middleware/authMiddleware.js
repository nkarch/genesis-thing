const protect = (req, res, next) => {
    console.log("Checking authorization");
    next();
};

export { protect };
