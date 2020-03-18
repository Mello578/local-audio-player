import { store } from 'src/Components';
import { setImagesPlaylistActions } from 'actions/imagesPlaylistAction';
import { setPlaylistAction } from 'actions/setPlaylistAction';

import { getPlaylist, MetaData } from './getPlaylist';

export interface AllPlaylist {
    id: number[];
    namePlaylist: string[];
    images: string[];
    tracks: string[][];
    trackName: string[][];
    meta: MetaData[][];
    duration: number[];
}

export async function setPlaylist(): Promise<void> {
    const dataRequest = await getPlaylist();
    const dataFormat = {
        id: dataRequest.map(item => item.id),
        namePlaylist: dataRequest.map(item => item.namePlaylist),
        images: dataRequest.map(item => item.images),
        tracks: dataRequest.map(item => item.tracks),
        trackName: dataRequest.map(item => item.trackName),
        meta: dataRequest.map(item => item.meta),
        duration: dataRequest.map(item => item.duration)
    };

    setAllPlaylist(dataFormat);
    setImagesPlaylist(dataFormat.id, dataFormat.images);
}

function setAllPlaylist(dataFormat: AllPlaylist): void {
    store.dispatch(setPlaylistAction(dataFormat));
}

function setImagesPlaylist(id, images): void {
    store.dispatch(setImagesPlaylistActions({ id, images }));
}
