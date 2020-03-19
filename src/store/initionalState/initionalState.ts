import { BACKGROUND_VINYL_DEFAULT } from '../../constants/playerConst';

import { RootState } from './models';

export const initialState: RootState = {
    allInfoPlaylist: null,
    playlist: {
        data: [],
        visible: false
    },
    imagesPlaylist: {
        id: null,
        images: [],
        visible: true
    },
    playerVinyl: {
        background: BACKGROUND_VINYL_DEFAULT,
        rotate: 0,
        pauseRotate: 'initial'
    },
    playControl: {
        data: {
            id: null,
            track: null,
            trackArtist: 'Performer',
            trackTitle: 'Track name',
            trackName: ''
        },
        repeated: false,
        buffered: 0,
        currentTime: 0
    },
    audioControl: {
        volume: 1,
        muted: false
    }
};