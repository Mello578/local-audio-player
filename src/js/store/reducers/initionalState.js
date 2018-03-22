import {BACKGROUND_VINYL_DEFAULT} from '../../constants/playerConst';

export const initialState = {
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
  startPlay: {
    data: {
      idTrack: null,
      currentTrack: null
    },
    repeated: false,
  }
};