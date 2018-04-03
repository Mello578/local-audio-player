import {clamp} from './clamp';
import {audioController} from './startStopPlay';

export function getCurrentWidth(buffered, currentTime, maxWidth){
  const trackDuration = audioController.characteristic.tracksDuration;
  const bufferingWidth = maxWidth * buffered / 100;
  let currentTimeWidth = currentTime / (trackDuration / 100) * (maxWidth / 100);
  currentTimeWidth = clamp(currentTimeWidth, 0, maxWidth);
  return {bufferingWidth, currentTimeWidth}
}