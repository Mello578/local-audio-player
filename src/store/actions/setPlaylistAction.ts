import { AllInfoPlaylist } from 'store';
import { AllInfoPlaylistModel } from 'src/store/reducers/allInfoPlaylistReducer';

import { TypeKeys } from '../enums';

export function setPlaylistAction(payload: AllInfoPlaylist): AllInfoPlaylistModel {
    return {
        type: TypeKeys.ALL_INFO_PLAYLIST,
        payload
    };
}
