import {combineReducers} from 'redux';

import {playlistReducer} from './playlistReducer';
import {imgsPlaylistReducer} from './imgsPlaylistReducer';
import {playerVinylReducer} from './playerVinylReducer';

export default combineReducers({
  playlistReducer,
  imgsPlaylistReducer,
  playerVinylReducer
})