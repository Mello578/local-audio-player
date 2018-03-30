import {combineReducers} from 'redux';

import {playlistReducer} from './playlistReducer';
import {imagesPlaylistReducer} from './imagesPlaylistReducer';
import {vinylBackgroundReducer} from './playerVinylReducer';
import {playerControlReducer} from './playerControlReduser';
import {allDataReducer} from './allDataReducer';
import {soundControlReducer} from './audioControlReducer';

export default combineReducers({
  allDataReducer,
  playlistReducer,
  imagesPlaylistReducer,
  vinylBackgroundReducer,
  playerControlReducer,
 soundControlReducer
})