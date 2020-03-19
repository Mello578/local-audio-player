import { TRACK_NEXT, TRACK_PLAY } from '../constants/playerConst';
import { playTrack, setBuffered } from '../store/actions/playerControlAction';
import { store } from '../Components';

import { nextPreviousTrack } from './nextPreviousTrack';
import { startPauseStopPlay } from './startStopPlay';

export class AudioController {
    constructor(characteristic, trackList) {
        this.characteristic = characteristic;
        this.trackList = trackList;
        this.audio = new Audio();
        this.audio.src = characteristic.track;
    }

    /**
     * задаем новые данные контроллера для всех параметров
     * @param characteristic
     * @param trackList
     */
    setNewAudioData(characteristic, trackList) {
        this.setNewDataTrack(characteristic);
        this.setNewTrackList(trackList);
    }

    /**
     * задаем новые данные только для трека
     * @param characteristic
     */
    setNewDataTrack(characteristic) {
        this.characteristic = characteristic;
        this.audio.src = characteristic.track;
    }

    /**
     * задаем новые данные плейлиста
     * @param trackList
     */
    setNewTrackList(trackList) {
        this.trackList = trackList;
    }

    /**
     * устанавливаем звуковые параметры
     * @param params
     */
    setVolumesParams(params) {
        this.audio.volume = params.volume;
        this.audio.muted = params.muted;
    }

    /**
     * проверям наличие следующего/предыдущего трека
     * @param mode     TRACK_NEXT - следующий трек, TRACK_PREVIOUS - предыдущий
     * @returns {*}   если есть нужный трек, возвращает данные трека, если нет, то false
     */
    nextTrack(mode) {
        return nextPreviousTrack(this.characteristic, this.trackList, mode);
    }

    setNextTrack() {
        const nextTrack = this.nextTrack(TRACK_NEXT);
        if (nextTrack) {
            this.audio.addEventListener(
                'ended',
                () => {
                    store.dispatch(playTrack(nextTrack));
                    startPauseStopPlay(nextTrack, TRACK_PLAY, this.trackList);
                },
                { once: true }
            );
        }
    }

    playAudio() {
        //обнуляем данные буфера для кооректного отображения
        store.dispatch(setBuffered(0));
        setTimeout(() => this.play(), 1000);
        this.removeEventListener('canplay', this.playAudio, { once: true });
    }

    /**
     * запуск трека и установка следующего
     */
    playCurrentTrack() {
        this.audio.load();
        this.audio.addEventListener('canplay', this.playAudio, { once: true });
        this.setNextTrack();
    }
}
