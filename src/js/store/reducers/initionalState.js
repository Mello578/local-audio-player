import {BACKGROUND_VINYL_DEFAULT} from '../../constants/playerConst';

export const initialState = {
  allData: {
    data: []
  },
  playlist: {
    data: [],
    visible: false
  },
  imagesPlaylist: {
    data: {
      id: null,
      images: []
    },
    visible: true
  },
  playerVinyl: {
    background: BACKGROUND_VINYL_DEFAULT
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
    currentTime: 0,
  },
  audioControl: {
    volume: 1,
    muted: false
  }

};