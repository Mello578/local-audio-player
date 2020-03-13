import { dataRequest } from 'src/js/utils/dataRequest';

import { URL } from '../constants/urlConst';

export interface MetaData {
    TIT2: string;
    title: string;
    TPE1: string;
    artist: string;
}

export interface PlaylistRequest {
    id: number;
    namePlaylist: string;
    img: string;
    tracks: string[];
    trackName: string[];
    meta: MetaData[];
    duration: number;
}

export async function getPlaylist(): Promise<PlaylistRequest[]> {
    return await dataRequest(URL);
}
