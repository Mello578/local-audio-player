import { clamp } from './clamp';
import { audioController } from './startStopPlay';

interface SliderWidth {
    bufferingWidth: number;
    currentTimeWidth: number;
}

export function getCurrentWidth(buffered: number, currentTime: number, maxWidth): SliderWidth {
    const trackDuration = audioController.characteristic.tracksDuration;
    const bufferingWidth = (maxWidth * buffered) / 100;
    let currentTimeWidth = Math.ceil((currentTime / (trackDuration / 100)) * (maxWidth / 100));
    currentTimeWidth = clamp(currentTimeWidth, 0, maxWidth);
    return { bufferingWidth, currentTimeWidth };
}
