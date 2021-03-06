import { store } from 'src/Components';
import { setImagesPlaylistActions, AllInfoPlaylist, setPlaylistAction } from 'store';
import { getPlaylist } from 'src/utils/getPlaylist';

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

function setAllPlaylist(dataFormat: AllInfoPlaylist): void {
    store.dispatch(setPlaylistAction(dataFormat));
}

function setImagesPlaylist(id, images): void {
    store.dispatch(setImagesPlaylistActions({ imagesInfo: { id, images }, visible: true }));
}
