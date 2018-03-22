import {combineReducers} from 'redux';

import {playlistReducer} from './playlistReducer';
import {imgsPlaylistReducer} from './imgsPlaylistReducer';
import {vinylBackgroundReducer} from './playerVinylReducer';
import {playerControlReducer} from './playerControlReduser';

export default combineReducers({
  playlistReducer,
  imgsPlaylistReducer,
  vinylBackgroundReducer,
  playerControlReducer
})