import React, {Component} from 'react';
import {Shuffle} from '../components/buttons/Shuffle';
import {Revert} from '../components/buttons/Revert';
import {Previous} from '../components/buttons/Previous';
import {Play} from '../components/buttons/Play';
import {Following} from '../components/buttons/Following';
import {VolumeSmall} from '../components/buttons/VolumeSmall';
import {VolumeSlider} from '../Sliders/VolumeSlider';
import {VolumeLevel} from '../components/VolumeLevel';
import {VolumeBig} from '../components/buttons/VolumeBig';
import {Pause} from '../components/buttons/Pause';

export class PanelsControl extends Component {
  render() {
    return (
      <div className={'player--panel-control'}>
        <div className={'player--buttons-control'}>
          <Revert/>
          <Previous/>
          <Play/>
          <Following/>
          <Shuffle/>
        </div>
        <div className={'player--volume-controls'}>
          <VolumeSmall/>
          <VolumeSlider/>
          <VolumeLevel/>
        </div>
        <div className={'player--additionally-panel'}>
          <VolumeBig/>
          <Pause/>
        </div>
      </div>
    )
  }
}