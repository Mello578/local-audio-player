import {BACKGROUND_VINYL_DEFAUL} from '../constants/playerConst';

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
    background: BACKGROUND_VINYL_DEFAUL
  }

};