import { ALL_INFO_PLAYLIST } from '../constants';

export function setPlaylistAction<T>(data: T): { type: string; payload: T } {
    return {
        type: ALL_INFO_PLAYLIST,
        payload: data
    };
}
