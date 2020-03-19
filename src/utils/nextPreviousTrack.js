import { TRACK_NEXT, TRACK_PREVIOUS, TRACK_STOP } from '../constants/playerConst';

import { startPauseStopPlay } from './startStopPlay';

export function nextPreviousTrack(currentTrackData, playlist, mode) {
    let nextTrack = false;
    let indexCurrentTrack = '';
    for (const key in playlist) {
        if (currentTrackData.id === playlist[key].id) {
            indexCurrentTrack = parseInt(key);
            break;
        }
    }

    if (
        (mode === TRACK_PREVIOUS && indexCurrentTrack > 0) ||
        (mode === TRACK_NEXT && indexCurrentTrack < playlist.length - 1)
    ) {
        startPauseStopPlay(currentTrackData, TRACK_STOP);
        nextTrack = mode === TRACK_NEXT ? playlist[indexCurrentTrack + 1] : playlist[indexCurrentTrack - 1];
    }
    return nextTrack;
}
