import { initialState } from 'store';

import { ALL_INFO_PLAYLIST } from '../constants';

export function allInfoPlaylistReducer(state = initialState.allInfoPlaylist, action) {
    switch (action.type) {
        case ALL_INFO_PLAYLIST:
            return action.payload;
        default:
            return state;
    }
}
