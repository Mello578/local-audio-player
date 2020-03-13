import { store } from 'src/js';

import { imagesPlaylistActions } from '../store/actions/imagesPlaylistAction';
import { addAllDataAction } from '../store/actions/addAllDataAction';

import { getPlaylist, MetaData } from './getPlaylist';

export interface AllPlaylist {
    id: number[];
    namePlaylist: string[];
    img: string[];
    tracks: string[][];
    trackName: string[][];
    meta: MetaData[][];
    duration: number[];
}

export async function setAllData(): Promise<void> {
    const dataRequest = await getPlaylist();
    const dataFormat = {
        id: dataRequest.map(item => item.id),
        namePlaylist: dataRequest.map(item => item.namePlaylist),
        img: dataRequest.map(item => item.img),
        tracks: dataRequest.map(item => item.tracks),
        trackName: dataRequest.map(item => item.trackName),
        meta: dataRequest.map(item => item.meta),
        duration: dataRequest.map(item => item.duration)
    };

    setAllPlaylist(dataFormat);
    setImagesPlaylist(dataFormat.id, dataFormat.img);
}

function setAllPlaylist(dataFormat: AllPlaylist): void {
    store.dispatch(addAllDataAction(dataFormat));
}

function setImagesPlaylist(id, images): void {
    store.dispatch(imagesPlaylistActions({ id, images }));
}
