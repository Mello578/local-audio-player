import { TRACK_PAUSE, TRACK_PLAY, TRACK_STOP } from '../constants/playerConst';
import { initialState } from '../store/initionalState/initionalState';
import { store } from '../Components';
import { setBuffered, setCurrentTime } from '../store/actions/playerControlAction';
import { pauseRotate, startRotate, stopRotate } from '../store/actions/playerVinylAction';

import { AudioController } from './AudioController';

export let audioController = null;

let volumeMute = {
    ...initialState.audioControl
};

export function setVolumeForFirstTrack(mode) {
    volumeMute = { ...mode };
}

/**
 * проверка на наличие аудиоконтроллера при первом запуске и установка параметров и обновление параметров если были изменения
 * @param dataTrack
 * @param playlist
 */
function setAudioController(dataTrack, playlist) {
    if (!audioController) {
        audioController = new AudioController(dataTrack, playlist);
        audioController.setVolumesParams(volumeMute);
    } else if (audioController.characteristic.track !== dataTrack.track) {
        audioController.setNewAudioData(dataTrack, playlist);
    }
}

export function startPauseStopPlay(dataTrack, mode, playlist) {
    if (mode === TRACK_PLAY) {
        if (audioController && audioController.audio.paused && audioController.characteristic.id === dataTrack.id) {
            //небольшая задержка для более приятного воспроизведения
            setTimeout(() => audioController.audio.play(), 1000);
        } else {
            setAudioController(dataTrack, playlist);
            audioController.playCurrentTrack();
        }
        // audioController.audio.addEventListener('progress', bufferHandler);
        audioController.audio.addEventListener('timeupdate', bufferHandler);
        audioController.audio.addEventListener('timeupdate', currentTimeUpdate);

        store.dispatch(startRotate(4));

        store.dispatch(pauseRotate('initial'));
    } else if (mode === TRACK_PAUSE) {
        audioController.audio.pause();
        store.dispatch(pauseRotate('paused'));
    } else if (mode === TRACK_STOP) {
        audioController.audio.removeEventListener('timeupdate', bufferHandler);
        audioController.audio.removeEventListener('timeupdate', currentTimeUpdate);
        audioController.audio.pause();
        audioController.audio.currentTime = 0.0;
        store.dispatch(stopRotate(0));
    }
}

function bufferHandler() {
    if (
        audioController.audio.buffered &&
        audioController.audio.buffered.length > 0 &&
        audioController.audio.buffered.end
    ) {
        const buffered = audioController.audio.buffered.end(0);
        const duration = audioController.characteristic.tracksDuration;
        const buffered_percentage = Math.round((buffered / duration) * 100);
        store.dispatch(setBuffered(buffered_percentage));
    }
}

export function currentTimeUpdate() {
    const currentTime = Math.round(this.currentTime);
    store.dispatch(setCurrentTime(currentTime));
}
