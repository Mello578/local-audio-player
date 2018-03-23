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
  playControl: {
    data: {
      idTrack: null,
      currentTrack: null,
      artist: 'Исполнитель',
      trackName: 'Трек'
    },
    repeated: false,
  }
};