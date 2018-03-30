import {nextPreviousTrack} from '../../utils/nextPreviousTrack';
import {TRACK_NEXT, TRACK_PLAY} from '../../constants/playerConst';
import {playTrack} from '../actions/playerControlAction';
import {store} from '../../index';
import {startPauseStopPlay} from '../../utils/startStopPlay';

export class AudioController {
  constructor(characteristic, trackList) {
    this.characteristic = characteristic;
    this.trackList = trackList;
    this.audio = new Audio();
    this.audio.src = characteristic.track
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
    return nextPreviousTrack(this.characteristic, this.trackList, mode)
  }

  setNextTrack() {
    const nextTrack = this.nextTrack(TRACK_NEXT);
    if (nextTrack) {
      this.audio.addEventListener('ended', () => {
        const playTrackAction = playTrack(nextTrack);
        store.dispatch({type: playTrackAction.type, payload: playTrackAction.data});
        setTimeout(() => startPauseStopPlay(nextTrack, TRACK_PLAY, this.trackList), 1000);
      }, {once: true})
    }
  }

  playAudio() {
    this.play();
    this.removeEventListener('canplay', this.playAudio, {once: true});
  }

  /**
   * запуск трека и установка следующего
   */
  playCurrentTrack() {
    this.audio.load();
    this.audio.addEventListener('canplay', this.playAudio, {once: true});
    this.setNextTrack();
  }
}