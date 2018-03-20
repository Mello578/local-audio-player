import React, {Component} from 'react';
import {Shuffle} from '../Components/Buttons/Shuffle';
import {Revert} from '../Components/Buttons/Revert';
import {Previous} from '../Components/Buttons/Previous';
import {Play} from '../Components/Buttons/Play';
import {Following} from '../Components/Buttons/Following';
import {VolumeSmall} from '../Components/Buttons/VolumeSmall';
import {VolumeSlider} from '../Components/Sliders/VolumeSlider';
import {VolumeLevel} from '../Components/VolumeLevel';
import {VolumeBig} from '../Components/Buttons/VolumeBig';
import {Pause} from '../Components/Buttons/Pause';

export class PanelsControl extends Component {
  render() {
    return (
      <div className={'player--panel-control'}>
        <div className={'player--Buttons-control'}>
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