class PlayList {
    constructor(id, namePlaylist, img, tracks, trackName) {
        this.id = id;
        this.namePlaylist = namePlaylist;
        this.img = img;
        this.tracks = tracks;
        this.trackName = trackName;
    }
}

module.exports = { PlayList };
