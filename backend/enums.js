const ReleaseTypes = Object.freeze({
    Collection: Symbol("collection"),
    ConcertVideo: Symbol("concertVideo"),
    EP: Symbol("ep"),
    LP: Symbol("lp"),
    MusicVideo: Symbol("musicVideo"),
    Single: Symbol("single"),
});

const Artists = Object.freeze({
    Banks: Symbol("Tony Banks"),
    Collins: Symbol("Phil Collins"),
    Gabriel: Symbol("Peter Gabriel"),
    Genesis: Symbol("Genesis"),
    Hackett: Symbol("Steve Hackett"),
    Phillips: Symbol("Genesis"),
    Rutherford: Symbol("Mike Rutherford"),
});

export { ReleaseTypes, Artists };
