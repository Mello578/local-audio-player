import {CURRENT_AUDIO, SOUND_LEVEL, SOUND_MUTED} from '../../constants/playerConst';

export function soundLevel(data) {
  return {
    type: SOUND_LEVEL,
    data
  }
}

export function soundMuted(data) {
  return {
    type: SOUND_MUTED,
    data
  }
}

// export function currentAudio(data){
//   return {
//     type: CURRENT_AUDIO,
//     data
//   }
// }