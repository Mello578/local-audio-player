import { MetaData } from 'src/utils/getPlaylist';

export interface RootState {
    allInfoPlaylist: AllInfoPlaylist;
    playlist: Playlist;
    imagesPlaylist: ImagesPlaylist;
    playerVinyl: PlayerVinyl;
    playControl: PlayControl;
    audioControl: AudioControl;
}

export interface AllInfoPlaylist {
    id: number[];
    namePlaylist: string[];
    images: string[];
    tracks: string[][];
    trackName: string[][];
    meta: MetaData[][];
    duration: number[];
}

export interface Playlist {
    tracksInfo: TrackInfoModel[];
    visible: boolean;
}

export interface ImagesPlaylist {
    imagesInfo: {
        id: number[];
        images: string[];
    };
    visible: boolean;
}

export interface PlayerVinyl {
    background: string;
    rotate: number;
    pauseRotate: string;
}

export interface PlayControl {
    trackInfo: TrackInfoModel;
    repeated: boolean;
    buffered: number;
    currentTime: number;
}

export interface TrackInfoModel {
    id: number;
    namePlaylist?: string;
    tracksDuration?: number;
    track: string;
    trackArtist: string;
    trackTitle: string;
    trackName: string;
}

export interface AudioControl {
    volume: number;
    muted: boolean;
}
