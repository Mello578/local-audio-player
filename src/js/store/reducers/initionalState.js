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
      idTrack: null,
      currentTrack: null,
      trackArtist: 'Performer',
      trackTitle: 'Track name',
      trackName: ''
    },
    repeated: false,
  },
  soundLevel: {
    level: 1
  }

};