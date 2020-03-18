import { combineReducers } from 'redux';

import { playlistReducer } from './playlistReducer';
import { imagesPlaylistReducer } from './imagesPlaylistReducer';
import { vinylBackgroundReducer } from './playerVinylReducer';
import { playerControlReducer } from './playerControlReduser';
import { allInfoPlaylistReducer } from './allInfoPlaylistReducer';
import { soundControlReducer } from './audioControlReducer';

export default combineReducers({
    allInfoPlaylistReducer,
    playlistReducer,
    imagesPlaylistReducer,
    vinylBackgroundReducer,
    playerControlReducer,
    soundControlReducer
});
