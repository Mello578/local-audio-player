import {combineReducers} from 'redux';

import {playlistReducer} from './playlistReducer';
import {imagesPlaylistReducer} from './imagesPlaylistReducer';
import {vinylBackgroundReducer} from './playerVinylReducer';
import {playerControlReducer, soundControlReducer} from './playerControlReduser';
import {allDataReducer} from './allDataReducer';

export default combineReducers({
  allDataReducer,
  playlistReducer,
  imagesPlaylistReducer,
  vinylBackgroundReducer,
  playerControlReducer,
  soundControlReducer
})